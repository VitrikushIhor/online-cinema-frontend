import { FC } from 'react'

import Catalog from '@/ui/Catalog-Movies/Catalog'

import { IGenre, IMovie } from '@/shared/interfaces/movie.interface'

export interface IGenrePage {
	movies: IMovie[]
	genre: IGenre
}

const Genre: FC<IGenrePage> = ({ genre, movies }) => {
	console.log(genre)
	return (
		<Catalog
			title={genre.name}
			description={genre.description}
			movies={movies || []}
		/>
	)
}

export default Genre
