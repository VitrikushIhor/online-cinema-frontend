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

import { getMovieUrl } from '../../../../../config/url.config'

const PopularMovies: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Get Popular Movies Admin',
		() => MoviesService.getPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)
	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title={'The most popular movies'} />
			{isLoading ? (
				<SkeletonLoader className={styles.loader} />
			) : (
				movie && (
					<>
						<h3 className={styles.descriptionsHeading}>
							Opened {movie.countOpened} times
						</h3>
						<Link href={getMovieUrl(movie.slug)} className={styles.link}>
							<Image
								layout="fill"
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
