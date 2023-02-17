import { IActor } from '@/shared/interfaces/movie.interface'

export interface IActorEditInput extends Omit<IActor, '_id' | 'countMovies'> {}
