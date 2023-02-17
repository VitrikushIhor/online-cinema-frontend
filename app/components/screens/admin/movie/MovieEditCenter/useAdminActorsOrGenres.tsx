import { useQuery } from 'react-query'

import { IOption } from '@/shared/interfaces/select-interface'

import { ActorsService } from '@/services/actor/actor-service'
import { GenresService } from '@/services/genres/genres.service'

import { toastError } from '@/utils/toast-error'

export const useAdminActorsOrGenres = () => {
	const { data: actors, isLoading: actorsLoading } = useQuery(
		'list of actor',
		() => ActorsService.getAllActors(),
		{
			select: ({ data }) =>
				data.map(
					(actor): IOption => ({
						label: actor.name,
						value: actor._id,
					})
				),
			onError(error) {
				toastError(error, 'actor list')
			},
		}
	)

	const { data: genres, isLoading: genresLoading } = useQuery(
		'list of genres',
		() => GenresService.getAll(),
		{
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
		}
	)

	return { genres, genresLoading, actors, actorsLoading }
}
