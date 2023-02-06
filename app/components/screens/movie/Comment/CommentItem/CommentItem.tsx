import { FC } from 'react'

import { IComment } from '@/screens/movie/Comment/comment-interface'

import UserAvatar from '@/ui/UserAvatar/UserAvatar'

import styles from './CommentItem.module.scss'

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
	return (
		<div className={styles.commentItem}>
			<div className={styles.profile_info}>
				<UserAvatar user={comment.user} />
				<div className={styles.message}>{comment.message}</div>
			</div>
		</div>
	)
}

export default CommentItem
