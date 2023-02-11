import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/interfaces/movie.interface'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={`/movie/${movie.slug}`}>
						<Image
							className={styles.image}
							src={movie.poster || ''}
							width={90}
							height={90}
							alt={movie.title}
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className={styles.notFound}>Movies not found!</div>
			)}
		</div>
	)
}

export default SearchList
