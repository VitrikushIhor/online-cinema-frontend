import { GetStaticProps, NextPage } from 'next'

import Home, { IHome } from '@/screens/home/Home'

import { IGalleryItem } from '@/ui/Gallery/gallery-interface'
import { ISlide } from '@/ui/Slider/slider-interface'

import { ActorsService } from '@/services/actor/actor-service'
import { MoviesService } from '@/services/movies/movie.service'

import { getGenresList } from '@/utils/movie/getGenreList'

import { errorCatch } from '../app/api/api.helpers'
import { getActorUrl, getMovieUrl } from '../app/config/url.config'

const HomePage: NextPage<IHome> = ({ trendingMovies, actors, slides }) => {
	// const size = useWindowSize()
	let PageSize = window.innerWidth < 600 ? 3 : 5
	return (
		<Home
			trendingMovies={trendingMovies}
			actors={actors}
			slides={slides}
			PageSize={PageSize}
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MoviesService.getMovies()
		const { data: dataActors } = await ActorsService.getAllActors()
		const dataTrendingMovies = await MoviesService.getPopularMovies()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			url: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				url: getMovieUrl(m.slug),
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
		console.log(errorCatch(error))

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
				PageSize: 5,
			} as IHome,
		}
	}
}

export default HomePage
