import { GetStaticProps, NextPage } from 'next'

import Home, { IHome } from '@/screens/home/Home'

import { IGalleryItem } from '@/shared/interfaces/gallery-interface'
import { ISlide } from '@/shared/interfaces/slider-interface'

import { ActorsService } from '@/services/actor/actor-service'
import { MoviesService } from '@/services/movies/movie.service'

import { getGenresList } from '@/utils/movie/getGenreList'

import { getActorUrl, getMovieUrl } from '../app/config/url.config'

const HomePage: NextPage<IHome> = ({ trendingMovies, actors, slides }) => {
	return (
		<Home trendingMovies={trendingMovies} actors={actors} slides={slides} />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MoviesService.getMovies()
		const { data: dataActors } = await ActorsService.getAllActors()
		const dataTrendingMovies = await MoviesService.getPopularMovies()

		const slides: ISlide[] = movies.slice(0, 3).map((movie) => ({
			_id: movie._id,
			link: getMovieUrl(movie.slug),
			subTitle: getGenresList(movie.genres),
			title: movie.title,
			bigPoster: movie.bigPoster,
		}))

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((actor) => ({
			name: actor.name,
			posterPath: actor.photo,
			url: getActorUrl(actor.slug),
			content: {
				title: actor.name,
				subTitle: `+${actor.countMovies} movies`,
			},
		}))

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((movie) => ({
				name: movie.title,
				posterPath: movie.poster,
				url: getMovieUrl(movie.slug),
			}))

		return {
			props: {
				actors,
				slides,
				trendingMovies,
			} as IHome,
			revalidate: 30,
		}
	} catch (error) {

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage
