import { IMovie } from '@/shared/interfaces/movie.interface'

export interface IMovieEditInput extends Omit<IMovie, '_id'> {}
