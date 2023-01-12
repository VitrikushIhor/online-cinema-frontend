import {NextPage} from 'next'

import Catalog from '@/ui/Catalog-Movies/Catalog'

import {IMovie} from '@/shared/interfaces/movie.interface'

import {MoviesService} from '@/services/movies/movie.service'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({movies}) => {
	return (
		<Catalog
			title={'Fresh Movies'}
			description={'ваывавыавыавыаывавыа'}
			movies={movies || []}
		/>
	)
}

export const getStaticProps: () => Promise<
	{ props: { movies: IMovie[] } } | { notFound: boolean }
> = async () => {
	try {
		const {data: movies} = await MoviesService.getMovies()
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

export default FreshPage
