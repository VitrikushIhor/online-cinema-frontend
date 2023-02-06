import { IMovie } from '@/shared/interfaces/movie.interface'
import { IUser } from '@/shared/interfaces/user.interface'

export interface IComment {
	_id: number
	createdAt: string
	updatedAt: string
	user: IUser
	movie: IMovie
	message: string
}

export interface ICommentDto extends Pick<IComment, 'message'> {
	movieId: string
}
