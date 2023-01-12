import cn from 'classnames'
import {FC, useEffect, useState} from 'react'
import {useMutation} from 'react-query'

import {useFavorites} from '@/screens/admin/favorites/useFavorites'

import {UsersService} from '@/services/users/users-service'

import {toastError} from '@/utils/toast-error'

import styles from './Favorite.module.scss'

const FavoriteButton: FC<{ movieId: string }> = ({movieId}) => {
	const [isSmashed, setIsSmashed] = useState(false)
	const {refetch, favoritesMovies} = useFavorites()

	useEffect(() => {
		if (!favoritesMovies) return
		const isHasMovie = favoritesMovies.some(
			(favorite) => favorite._id === movieId
		)
		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
	}, [favoritesMovies, isSmashed, movieId])

	const {mutateAsync} = useMutation(
		'update favorites',
		() => UsersService.toggleFavorite(movieId),
		{
			onError(error) {
				toastError(error, 'Update Favorite List')
			},
			onSuccess({data: _id}) {
				setIsSmashed(!isSmashed)
				refetch()
			},
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.animate]: isSmashed,
			})}
			style={{backgroundImage: `url("/heart-animation.png")`}}
		/>
	)
}

export default FavoriteButton
