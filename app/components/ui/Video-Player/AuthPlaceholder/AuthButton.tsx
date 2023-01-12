import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '../../../../config/url.config'

import styles from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${getMovieUrl(slug)}`} className={styles.btn}>
			Sing in
		</Link>
	)
}

export default AuthButton
