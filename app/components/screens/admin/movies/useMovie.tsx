import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { useDebounce } from '@/hooks/useDebounce'

import { ITableItem } from '@/shared/interfaces/admint-table-interface'

import { MoviesService } from '@/services/movies/movie.service'

import { getGenresList } from '@/utils/movie/getGenreList'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '../../../../config/url.config'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState<string>()

	const debouncedSearch = useDebounce(searchTerm, 500)

	const { push } = useRouter()

	const queryData = useQuery(
		['Movie list', debouncedSearch],
		() => MoviesService.getMovies(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [
							movie.title,
							getGenresList(movie.genres),
							String(movie.rating),
						],
					})
				),
			onError(error) {
				toastError(error, 'movies list')
			},
		}
	)

	const { mutateAsync } = useMutation(
		'delete movies',
		(userId: string) => MoviesService.deleteMovie(userId),
		{
			onError(error) {
				toastError(error, 'delete movies')
			},
			onSuccess() {
				toastr.success('Delete movies', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		'create movie',
		() => MoviesService.create(),
		{
			onError(error) {
				toastError(error, 'Create movie')
			},
			onSuccess({ data: _id }) {
				toastr.success('Create movie', 'create was successful')
				push(getAdminUrl(`movie/edit/${_id}`))
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
