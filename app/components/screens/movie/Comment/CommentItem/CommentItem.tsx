import Image from 'next/image'
import { FC } from 'react'

import { IComment } from '@/shared/interfaces/comment-interface'

import Avatar from '@/assets/avatar.jpg'

import styles from './CommentItem.module.scss'
import MaterialIcon from '@/ui/MaterialIcons/MaterialIcon'
import {useSelector} from 'react-redux';
import {useMutation} from 'react-query';
import {MoviesService} from '@/services/movies/movie.service';
import {toastError} from '@/utils/toast-error';
import {toastr} from 'react-redux-toastr';
const CommentItem: FC<{ comment: IComment,refetch:any }> = ({ comment,refetch }) => {
	const _id = useSelector((state: any) => state.user.user?._id)


	const { mutateAsync } = useMutation(
		 'comment movies',
		 (commentId: string) => MoviesService.deleteComment(commentId),
		 {
			 onError(error) {
				 toastError(error, 'delete comment')
			 },
			 onSuccess() {
				 toastr.success('Delete comment', 'delete was successful')
				 refetch()
			 },
		 }
	)

	return (
		<div className={styles.commentItem}>
			<div>
				<span className={styles.avatar}>
					<Image
						layout="fill"
						alt={`${comment.user ? comment.user.userName : ''}`}
						src={comment.user.avatar ? comment.user.avatar : Avatar}
					/>
				</span>
			</div>
			<div className={styles.avatarNameMessage}>
				<div className={styles.avatarName}>
					<span>{comment.user.userName ? comment.user.userName : comment.user.email}</span>
					{comment.user._id === _id ? <button onClick={()=>mutateAsync(String(comment._id))}><MaterialIcon name={'MdDeleteForever'}/></button>:null}
				</div>
				<div className={styles.message}>{comment.message}</div>
			</div>
		</div>
	)
}

export default CommentItem
