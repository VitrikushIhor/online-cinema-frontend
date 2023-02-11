import { NextPage } from 'next'

import Catalog from '@/ui/Catalog-Movies/Catalog'

import { IMovie } from '@/shared/interfaces/movie.interface'

import { MoviesService } from '@/services/movies/movie.service'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			title={'Trending Movies'}
			description="Trending movies in excellent quality: legal, safe, without ads"
			movies={movies || []}
		/>
	)
}

export const getStaticProps: () => Promise<
	{ props: { movies: IMovie[] } } | { notFound: boolean }
> = async () => {
	try {
		const movies = await MoviesService.getPopularMovies()
		console.log(movies)
		return {
			props: {
				movies,
			},
			revalidate: 30,
		}
	} catch (err) {
		return {
			notFound: true,
		}
	}
}

export default TrendingPage
