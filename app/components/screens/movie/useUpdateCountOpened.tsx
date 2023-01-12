import { useEffect } from 'react'
import { useMutation } from 'react-query'

import { MoviesService } from '@/services/movies/movie.service'

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation('update MOVIE count', () =>
		MoviesService.updateCountOpened(slug)
	)

	useEffect(() => {
		mutateAsync()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}
