import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcons/MaterialIcon'

import { IMovie } from '@/shared/interfaces/movie.interface'

import { getGenresListEach } from '@/utils/movie/getGenreList'

import { getGenreUrl, getMovieUrl } from '../../../../config/url.config'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movies: IMovie }> = ({ movies }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movies.slug)}>
				<Image
					src={movies.poster}
					alt={movies.title}
					width={65}
					height={97}
					draggable={false}
					priority
				/>
			</Link>

			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movies.title}</div>
					<div className={styles.genres}>
						{movies.genres.map((genre, index) => (
							<Link key={genre._id} href={getGenreUrl(genre.slug)}>
								{getGenresListEach(index, movies.genres.length, genre.name)}
							</Link>
						))}
					</div>
				</div>

				<div className={styles.rating}>
					<MaterialIcon name={'MdStarRate'} />
					<span>{movies.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
