import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { INavItem } from '@/ui/Admin-Navigation/AdminNavigationInterface'

import styles from './AdminNavigation.module.scss'

const AdminNavItem: FC<{ navItem: INavItem }> = ({
	navItem: { title, link },
}) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link href={link} className={cn({ [styles.active]: asPath === link })}>
				{title}
			</Link>
		</li>
	)
}

export default AdminNavItem
