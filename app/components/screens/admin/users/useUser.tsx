import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { useDebounce } from '@/hooks/useDebounce'

import { ITableItem } from '@/shared/interfaces/admint-table-interface'

import { UsersService } from '@/services/users/users-service'

import { convertMongoDate } from '@/utils/data/converMongoDbData'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '../../../../config/url.config'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState<string>()

	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['users list', debouncedSearch],
		() => UsersService.getAllUsers(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, convertMongoDate(user.createdAt)],
					})
				),
			onError(error) {
				toastError(error, 'users list')
			},
		}
	)

	const { mutateAsync } = useMutation(
		'delete users',
		(userId: string) => UsersService.deleteUser(userId),
		{
			onError(error) {
				toastError(error, 'delete users')
			},
			onSuccess() {
				toastr.success('Delete users', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			mutateAsync,
		}),
		[queryData, searchTerm, mutateAsync]
	)
}
