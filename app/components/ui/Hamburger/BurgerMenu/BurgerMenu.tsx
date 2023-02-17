import { FC, useEffect } from 'react'

import Logo from '@/components/layout/Navigation/Logo/Logo'
import { usePopularGenres } from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenres'
import {
	firstMenu,
	userMenu,
} from '@/shared/data/menu.data'
import Search from '@/components/layout/Sidebar/Search/Search'

import { Dropdown } from '@/ui/DropDownMenu/DropDownMenu'
import { IBurger } from '@/ui/Hamburger/Burger/Burger'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import styles from './BurgerMenu.module.scss'

const BurgerMenu: FC<IBurger> = ({ open, setOpen }) => {
	const { isLoading, data } = usePopularGenres()

	const toggleMenu = () => {
		setOpen(!open)
	}

	useEffect(() => {
		if (open) {
			document.body.classList.add('body_hidden')
		} else {
			document.body.classList.remove('body_hidden')
		}
	}, [open])

	return (
		<nav
			className={styles.nav}
			style={{
				transform: `${open ? 'translateX(0)' : 'translateX(100%) '}`,
			}}
		>
			<Logo toggleMenu={toggleMenu} />
			<div className={styles.menuContent}>
				<Search />
				<div>
					<Dropdown toggleMenu={toggleMenu} menu={firstMenu} />
					{isLoading ? (
						<SkeletonLoader count={1} className="" />
					) : (
						<Dropdown
							toggleMenu={toggleMenu}
							menu={{ title: 'Genres', items: data || [] }}
						/>
					)}
					<Dropdown toggleMenu={toggleMenu} menu={userMenu} />
				</div>
			</div>
		</nav>
	)
}

export default BurgerMenu
