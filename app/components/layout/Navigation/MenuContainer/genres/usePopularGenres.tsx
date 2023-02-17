import { useQuery } from 'react-query'

import { IMenuItem } from '@/shared/interfaces/menu.interface'

import { GenresService } from '@/services/genres/genres.service'

import { toastError } from '@/utils/toast-error'

import { getGenreUrl } from '../../../../../config/url.config'

export const usePopularGenres = () => {
	return useQuery(
		'popular genres-menu',
		() => GenresService.getPopularGenres(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						})
					)
					.splice(0, 4),
			onError(error) {
				toastError(error, 'Popular genres menu')
			},
		}
	)
}
