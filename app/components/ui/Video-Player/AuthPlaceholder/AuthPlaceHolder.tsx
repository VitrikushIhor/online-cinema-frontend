import { FC } from 'react'

import AuthButton from '@/ui/Video-Player/AuthPlaceholder/AuthButton'

import styles from './AuthPlaceholder.module.scss'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<div>You most logged in to start watching</div>
			<AuthButton slug={slug} />
		</div>
	)
}

export default AuthPlaceholder
