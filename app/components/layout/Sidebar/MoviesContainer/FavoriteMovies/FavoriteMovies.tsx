import { FC } from 'react'

import { useFavorites } from '@/screens/admin/favorites/useFavorites'

import NotAuthFavorites from '@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/NotAuthFavorites'
import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList/MovieList'

import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

import styles from './FavoriteMovies.module.scss'

const FavoriteMovies: FC = () => {
	const { isLoading, favoriteMovies } = useFavorites()
	const { user } = useAuth()

	if (!user) return <NotAuthFavorites className={styles.notAuth} />

	return isLoading ? (
		<div className={styles.wrapper}>
			<SkeletonLoader count={3} className={styles.loader} />
		</div>
	) : favoriteMovies!.length > 0 ? (
		<MovieList
			list={{
				link: '/favorites',
				movies: favoriteMovies?.slice(0, 3) || [],
				title: 'Favorites',
			}}
		/>
	) : null
}

export default FavoriteMovies
