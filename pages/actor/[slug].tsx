import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Actor, { IActorPage } from '@/screens/actor/Actor'

import { ActorsService } from '@/services/actor/actor-service'
import { MoviesService } from '@/services/movies/movie.service'

import Error404 from '../404'

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
		return {
			props: { actor, movies },
			revalidate: 30,
		}
	} catch (e) {
		return {
			props: {},
			notFound: true,
		}
	}
}

export default ActorPage
