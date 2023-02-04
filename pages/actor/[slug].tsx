import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Actor, { IActorPage } from '@/screens/actor/Actor'

import { ActorsService } from '@/services/actor/actor-service'
import { MoviesService } from '@/services/movies/movie.service'

import Error404 from '../404'
import { errorCatch } from '../../app/api/api.helpers'

const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
	return actor ? <Actor actor={actor} movies={movies} /> : <Error404 />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorsService.getAllActors()
		const paths = actors.map((actor) => ({
			params: { slug: actor.slug },
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActorsService.getBySlug(String(params?.slug))
		const { data: movies } = await MoviesService.getByActor(actor._id)
		const movies1 = await MoviesService.getPopularMovies()
		console.log(movies1)
		debugger
		return {
			props: { actor, movies },
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

export default ActorPage
