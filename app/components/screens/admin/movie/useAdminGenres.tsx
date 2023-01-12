import { useQuery } from 'react-query'

import { IOption } from '@/ui/Select/select-interface'

import { GenresService } from '@/services/genres/genres.service'

import { toastError } from '@/utils/toast-error'

export const useAdminGenres = () => {
	return useQuery('list of genres', () => GenresService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre): IOption => ({
					label: genre.name,
					value: genre._id,
				})
			),
		onError(error) {
			toastError(error, 'genres list')
		},
	})
}
