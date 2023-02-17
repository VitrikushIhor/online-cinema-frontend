import { FC } from 'react'

import CountUsers from '@/screens/admin/home/Statistics/CountUsers'
import PopularMovies from '@/screens/admin/home/Statistics/PopularMovies'

import styles from '../Admin.module.scss'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovies />
		</div>
	)
}

export default Statistics
