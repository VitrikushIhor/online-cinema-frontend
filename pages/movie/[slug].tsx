import {GetStaticPaths, GetStaticProps, NextPage} from 'next'

import Movie, {IMoviePage} from '@/screens/movie/Movie'

import {MoviesService} from '@/services/movies/movie.service'

import Error404 from '../404'
import {errorCatch} from '../../app/api/api.helpers'
import {getMovieUrl} from '../../app/config/url.config'

const MoviePage: NextPage<IMoviePage> = ({movie, similarMovies}) => {
	return movie ? (
		<Movie similarMovies={similarMovies || []} movie={movie}/>
	) : (
		<Error404/>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const {data: movies} = await MoviesService.getMovies()
		const paths = movies.map((movie) => ({
			params: {slug: movie.slug},
		}))
		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	try {
		const {data: movie} = await MoviesService.getBySlug(String(params?.slug))

		const responseSimilarMovies = await MoviesService.getByGenres(
			movie.genres.map((g) => g._id)
		)

		const similarMovies = responseSimilarMovies.data
			.filter((m) => m._id !== movie._id)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				url: getMovieUrl(m.slug),
			}))

		return {
			props: {movie, similarMovies},
			revalidate: 30,
		}
	} catch (e) {
		console.log(errorCatch(e))

		return {
			notFound: true,
		}
	}
}

export default MoviePage
