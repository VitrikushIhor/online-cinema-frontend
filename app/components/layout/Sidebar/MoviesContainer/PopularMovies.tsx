import { FC } from 'react'
import { useQuery } from 'react-query'

import MovieList from '@/components/layout/Sidebar/MoviesContainer/MovieList'

import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { MoviesService } from '@/services/movies/movie.service'

const PopularMovies: FC = () => {
	const { data: popularMovies, isLoading } = useQuery('PopularMovies', () =>
		MoviesService.getPopularMovies()
	)
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
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
