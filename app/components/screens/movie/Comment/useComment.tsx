import { useMemo } from 'react'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { MoviesService } from '@/services/movies/movie.service'

import { toastError } from '@/utils/toast-error'

export const useComment = () => {
	const { mutateAsync } = useMutation(
		'create comment',
		(data: { movieId: string; message: string }) =>
			MoviesService.createComment(data),
		{
			onError(error) {
				toastError(error, 'Create actor')
			},
			onSuccess({ data: _id }) {
				toastr.success('Create comment', 'create was successful')
			},
		}
	)

	return useMemo(
		() => ({
			mutateAsync,
		}),
		[mutateAsync]
	)
}
