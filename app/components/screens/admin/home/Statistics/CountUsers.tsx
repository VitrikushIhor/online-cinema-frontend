import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { AdminService } from '@/services/admin/admin-service'

import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('CountUsers', () =>
		AdminService.getCountUsers()
	)
	return (
		<div className={cn(styles.block, styles.countUsers)}>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<>
						<div className={styles.number}>{response?.data}</div>
						<div className={styles.descriptions}>users</div>
					</>
				)}
			</div>
		</div>
	)
}

export default CountUsers
