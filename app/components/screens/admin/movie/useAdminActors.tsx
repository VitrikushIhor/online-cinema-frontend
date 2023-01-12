import { useQuery } from 'react-query'

import { IOption } from '@/ui/Select/select-interface'

import { ActorsService } from '@/services/actor/actor-service'

import { toastError } from '@/utils/toast-error'

export const useAdminActors = () => {
	return useQuery('list of actor', () => ActorsService.getAllActors(), {
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
	})
}
