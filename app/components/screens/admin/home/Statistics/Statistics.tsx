import { FC } from 'react'

import CountUsers from '@/screens/admin/home/Statistics/CountUsers'
import PopularMovies from '@/screens/admin/home/Statistics/PopularMovies'

import styles from '../Admin.module.scss'

interface IStatistics {}

const Statistics: FC<IStatistics> = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovies />
		</div>
	)
}

export default Statistics
