import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { useDebounce } from '@/hooks/useDebounce'

import { ITableItem } from '@/shared/interfaces/admint-table-interface'

import { GenresService } from '@/services/genres/genres.service'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '../../../../config/url.config'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState<string>()

	const debouncedSearch = useDebounce(searchTerm, 500)

	const { push } = useRouter()

	const queryData = useQuery(
		['genres list', debouncedSearch],
		() => GenresService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name, genre.slug],
					})
				),
			onError(error) {
				toastError(error, 'genres list')
			},
		}
	)

	const { mutateAsync } = useMutation(
		'delete genres',
		(userId: string) => GenresService.deleteGenre(userId),
		{
			onError(error) {
				toastError(error, 'delete genres')
			},
			onSuccess() {
				toastr.success('Delete genres', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		'create genres',
		() => GenresService.createGenre(),
		{
			onError(error) {
				toastError(error, 'Create genres')
			},
			onSuccess({ data: _id }) {
				toastr.success('Create genres', 'create was successful')
				push(getAdminUrl(`genre/edit/${_id}`))
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
			createAsync,
		}),
		[queryData, searchTerm, mutateAsync, createAsync]
	)
}
