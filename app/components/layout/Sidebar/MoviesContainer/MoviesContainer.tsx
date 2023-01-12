import dynamic from 'next/dynamic'
import { FC } from 'react'

import PopularMovies from '@/components/layout/Sidebar/MoviesContainer/PopularMovies'

import styles from './MoviesContainer.module.scss'

const DynamicFavoriteMovies = dynamic(
	() =>
		import(
			'@/components/layout/Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'
		),
	{ ssr: false }
)

const MoviesContainer: FC = () => {
	return (
		<div className={styles.wrapper}>
			<PopularMovies />
			<DynamicFavoriteMovies />
		</div>
	)
}

export default MoviesContainer
