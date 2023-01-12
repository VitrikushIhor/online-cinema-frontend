import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/AdminTable/admint-table-interface'

import { useDebounce } from '@/hooks/useDebounce'

import { ActorsService } from '@/services/actor/actor-service'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '../../../../config/url.config'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState()
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { push } = useRouter()
	const queryData = useQuery(
		['users list', debouncedSearch],
		() => ActorsService.getAllActors(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: getAdminUrl(`actor/edit/${actor._id}`),
						items: [actor.name, String(actor.countMovies)],
					})
				),
			onError(error) {
				toastError(error, 'Actor list')
			},
		}
	)

	const { mutateAsync } = useMutation(
		'delete Actor',
		(userId: string) => ActorsService.deleteActor(userId),
		{
			onError(error) {
				toastError(error, 'delete Actor')
			},
			onSuccess() {
				toastr.success('Delete Actor', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		'create actor',
		() => ActorsService.create(),
		{
			onError(error) {
				toastError(error, 'Create actor')
			},
			onSuccess({ data: _id }) {
				toastr.success('Create actor', 'create was successful')
				push(getAdminUrl(`actor/edit/${_id}`))
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
			createAsync,
		}),
		[queryData, searchTerm, mutateAsync, createAsync]
	)
}
