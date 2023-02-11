import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'

import Comments from '@/screens/movie/Comment/Comment'
import Content from '@/screens/movie/Content/Content'
import { useUpdateCountOpened } from '@/screens/movie/useUpdateCountOpened'

import Banner from '@/ui/Banner/Banner'
import Gallery from '@/ui/Gallery/Gallery'
import { IGalleryItem } from '@/ui/Gallery/gallery-interface'
import SubHeading from '@/ui/Heading/SubHeading'
import Meta from '@/ui/Meta/Meta'

import { useWindowSize } from '@/hooks/useWindowSize'

import { IMovie } from '@/shared/interfaces/movie.interface'

import styles from './Movie.module.scss'

export interface IMoviePage {
	movie: IMovie
	similarMovies: IGalleryItem[]
}

const DynamicPlayer = dynamic(() => import('@/ui/Video-Player/VideoPlayer'), {
	ssr: false,
})

const DynamicRateMovie = dynamic(
	() => import('./Content/RateMovie/RateMovie'),
	{
		ssr: false,
	}
)
const Movie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie.slug)

	const size = useWindowSize()
	const [PageSize, setPageSize] = useState(0)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setPageSize(size <= 1024 ? 4 : 5)
		}
	}, [size])

	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>
			<DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl} />
			<Comments movieId={movie._id} />
			<div className={styles.subContainer}>
				<SubHeading title={'Similar'} />
				<Gallery
					items={similarMovies.slice(0, PageSize)}
					className={styles.movieGallery}
				/>
				<DynamicRateMovie slug={movie.slug} id={movie._id} />
			</div>
		</Meta>
	)
}

export default Movie
