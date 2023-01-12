import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/AdminTable/admint-table-interface'

import { useDebounce } from '@/hooks/useDebounce'

import { UsersService } from '@/services/users/users-service'

import { convertMongoDate } from '@/utils/data/converMongoDbData'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '../../../../config/url.config'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState()
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
		// @ts-ignore
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
