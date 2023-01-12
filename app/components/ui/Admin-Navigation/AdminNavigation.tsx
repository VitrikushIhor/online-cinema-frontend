import { FC } from 'react'

import AdminNavItem from '@/ui/Admin-Navigation/AdminNavItem'
import { navItems } from '@/ui/Admin-Navigation/AdminNavigationData'

import styles from './AdminNavigation.module.scss'

interface IAdminNavigation {}

const AdminNavigation: FC<IAdminNavigation> = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map((item) => (
					<AdminNavItem navItem={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
