import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { useAuth } from '@/hooks/useAuth'

import { RatingService } from '@/services/rating/rating-service'

import { toastError } from '@/utils/toast-error'

export const useRateMovie = (movieId: string) => {
	const [rating, setRating] = useState<number>(0)
	const [isSend, setIsSend] = useState<boolean>(false)

	const { user } = useAuth()

	const { refetch } = useQuery(
		['movie rating', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onSuccess({ data }) {
				setRating(data)
			},
			onError(error) {
				toastError(error, 'Get Rating')
			},
			enabled: !!movieId && !!user,
		}
	)

	const { mutateAsync } = useMutation(
		'Update Rating',
		({ value }: { value: number }) => RatingService.setRating(movieId, value),
		{
			onSuccess() {
				toastr.success('Update Rating', 'Update was successful')
				setIsSend(true)
				refetch()
				setTimeout(() => {
					setIsSend(false)
				}, 2500)
			},
			onError(erorr) {
				toastError(erorr, 'Rate Movie')
			},
		}
	)
	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await mutateAsync({ value: nextValue })
	}
	return { isSend, handleClick, rating }
}
