import { IMovie } from '@/shared/interfaces/movie.interface'

export interface ICatalog {
	title: string
	description: string
	movies: IMovie[]
}
