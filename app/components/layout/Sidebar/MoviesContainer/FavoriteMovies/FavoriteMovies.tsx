import { FC } from 'react'

import { useFavorites } from '@/screens/admin/favorites/useFavorites'

import NotAuthFavorites from '@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/NotAuthFavorites'
import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList'

import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

interface IFavoriteMovies {}

const FavoriteMovies: FC<IFavoriteMovies> = () => {
	const { isLoading, favoritesMovies } = useFavorites()
	const { user } = useAuth()

	if (!user) return <NotAuthFavorites />

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		favoritesMovies!.length > 0 ?	<MovieList
			list={{
				link: '/favorites',
				movies: favoritesMovies?.slice(0, 3) || [],
				title: 'Favorites',
			}}
		/>: null
	)
}

export default FavoriteMovies
