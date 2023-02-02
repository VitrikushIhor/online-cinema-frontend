import { FC } from 'react'
import { useQuery } from 'react-query'

import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList/MovieList'

import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { MoviesService } from '@/services/movies/movie.service'


import styles from "./PopularMovies.module.scss"

const PopularMovies: FC = () => {
	const { data: popularMovies, isLoading } = useQuery('PopularMovies', () =>
		MoviesService.getPopularMovies()
	)
	return isLoading ? (
		<div className={styles.wrapper}>
			<SkeletonLoader count={3} className={styles.loader} />
		</div>
	) : (
		<MovieList
			list={{
				link: '/trending',
				movies: popularMovies?.slice(0, 3) || [],
				title: 'Popular Movies',
			}}
		/>
	)
}

export default PopularMovies
