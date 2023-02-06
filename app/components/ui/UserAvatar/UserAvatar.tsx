import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import { IUser } from '@/shared/interfaces/user.interface'

import Avatar from '@/assets/avatar.jpg'

import styles from './UserAvatar.module.scss'

const UserAvatar: FC<{ user: IUser; isWhite?: boolean }> = ({
	user,
	isWhite,
}) => {
	return (
		<div>
			<span className={cn(styles.avatar, { [styles.white]: isWhite })}>
				<Image
					layout="fill"
					alt={`${user ? user.userName : ''}`}
					src={user.avatar ? user.avatar : Avatar}
				/>
				<div className={styles.avatarName}>{user.userName}</div>
			</span>
		</div>
	)
}

export default UserAvatar
