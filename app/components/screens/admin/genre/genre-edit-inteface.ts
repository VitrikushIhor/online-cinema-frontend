import { IGenre } from '@/shared/interfaces/movie.interface'

export interface IGenreEditInput extends Omit<IGenre, '_id'> {}
