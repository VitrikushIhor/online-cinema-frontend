import Image from 'next/image'
import { FC } from 'react'

import { IComment } from '@/screens/movie/Comment/comment-interface'

import Avatar from '@/assets/avatar.jpg'

import styles from './CommentItem.module.scss'

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
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
					{comment.user.userName ? comment.user.userName : 'Anonym'}
				</div>
				<div className={styles.message}>{comment.message}</div>
			</div>
		</div>
	)
}

export default CommentItem
