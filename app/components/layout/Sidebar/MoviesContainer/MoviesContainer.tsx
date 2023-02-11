import dynamic from 'next/dynamic'
import { FC } from 'react'

import PopularMovies from '@/components/layout/Sidebar/MoviesContainer/PopularMovies/PopularMovies'


const DynamicFavoriteMovies = dynamic(
	() =>
		import(
			'@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'
		),
	{ ssr: false }
)

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavoriteMovies />
		</div>
	)
}

export default MoviesContainer
