import Link from 'next/link'
import { FC } from 'react'

import MovieItem from '@/components/layout/Sidebar/MoviesContainer/MovieItem'

import { IMovie } from '@/shared/interfaces/movie.interface'

import styles from './MovieList.module.scss'

interface IMovieList {
	title: string
	link: string
	movies: IMovie[]
}

const MovieList: FC<{ list: IMovieList }> = ({
	list: { link, movies, title },
}) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem movies={movie} key={movie._id} />
			))}
			<Link className={styles.button} href={link}>
				See More
			</Link>
		</div>
	)
}

export default MovieList
