import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.interface'

import MaterialIcon from '@/ui/MaterialIcons/MaterialIcon'

import styles from './Menu.module.scss'

interface IMenuItemProps {
	item: IMenuItem
	toggleDropdown?: () => void
}

const MenuItem: FC<IMenuItemProps> = ({ item, toggleDropdown }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link} onClick={toggleDropdown}>
				<MaterialIcon name={item.icon ? item.icon : 'MdHiking'} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
