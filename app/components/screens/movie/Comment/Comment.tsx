import { FC } from 'react'
import { useQuery } from 'react-query'

import AddCommentForm from '@/screens/movie/Comment/AddComment/AddComment'
import CommentItem from '@/screens/movie/Comment/CommentItem/CommentItem'
import { IComment } from '@/screens/movie/Comment/comment-interface'

import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

import { MoviesService } from '@/services/movies/movie.service'

import { toastError } from '@/utils/toast-error'

import styles from './Comment.module.scss'

const Comments: FC<{ movieId: string }> = ({ movieId }) => {
	const { user } = useAuth()

	const { refetch, isLoading, data } = useQuery(
		['get comments', movieId],
		() => MoviesService.getByComments(movieId),
		{
			onError(error) {
				toastError(error, 'Get Comment')
			},
			select: ({ data }) => data,
		}
	)
	return (
		<div className={styles.comments}>
			<h2>Comments</h2>
			<div className={styles.line} />
			<div>
				{isLoading ? (
					<SkeletonLoader count={4} />
				) : data?.length ? (
					<>
						<div>
							{data.map((comment: IComment, index: number) => (
								<CommentItem comment={comment} key={index + comment._id} />
							))}
						</div>
					</>
				) : user ? (
					<p className={styles.notFound}>Comments not found!</p>
				) : (
					''
				)}
			</div>
			{user ? (
				<AddCommentForm movieId={movieId} refetch={refetch} />
			) : (
				<p className={styles.notFound}>
					You need to log in to write a comment!!
				</p>
			)}
		</div>
	)
}

export default Comments
