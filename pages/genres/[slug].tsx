import {GetStaticPaths, GetStaticProps, NextPage} from 'next'

import Genre, {IGenrePage} from '@/screens/genre/Genre'

import {GenresService} from '@/services/genres/genres.service'
import {MoviesService} from '@/services/movies/movie.service'

import Error404 from '../404'
import {errorCatch} from '../../app/api/api.helpers'

const GenrePage: NextPage<IGenrePage> = ({genre, movies}) => {
	return genre ? <Genre genre={genre} movies={movies}/> : <Error404/>
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const {data: genres} = await GenresService.getAll()
		const paths = genres.map((g) => ({
			params: {slug: g.slug},
		}))
		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		console.log(errorCatch(e))

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	try {
		const {data: genre} = await GenresService.getBySlug(String(params?.slug))
		console.log(genre)
		const {data: movies} = await MoviesService.getByGenres([genre._id])

		return {
			props: {movies, genre},
			revalidate: 30,
		}
	} catch (e) {
		console.log(errorCatch(e))

		return {
			props: {},
			notFound: true,
		}
	}
}

export default GenrePage
