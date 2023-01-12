import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'

import styles from '@/screens/admin/home/Admin.module.scss'

import SubHeading from '@/ui/Heading/SubHeading'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { IMovie } from '@/shared/interfaces/movie.interface'

import { MoviesService } from '@/services/movies/movie.service'

import { getMoviesUrl } from '../../../../../config/api.config'

const PopularMovies: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Get Popular Movies Admin',
		() => MoviesService.getPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)
	console.log(movie)
	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title={'The most popular movies'} />
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMoviesUrl(movie.slug)}>
							<Image
								width={285}
								height={176}
								src={movie.bigPoster}
								alt={movie.title}
								className={styles.image}
								unoptimized
							/>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default PopularMovies
