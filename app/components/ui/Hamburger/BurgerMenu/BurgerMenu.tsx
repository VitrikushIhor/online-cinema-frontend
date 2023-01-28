import { FC, useEffect } from 'react'

import Logo from '@/components/layout/Navigation/Logo/Logo'
import { usePopularGenres } from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenres'
import {
	firstMenu,
	userMenu,
} from '@/components/layout/Navigation/MenuContainer/menu.data'
import Search from '@/components/layout/Sidebar/Search/Search'

import { Accordion } from '@/ui/Acordion/Accordion'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import styles from './BurgerMenu.module.scss'

const BurgerMenu: FC<{ open: boolean }> = ({ open }) => {
	const { isLoading, data } = usePopularGenres()

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
			<Logo />
			<Search />
			<div>
				<Accordion menu={firstMenu} />
				{isLoading ? (
					<SkeletonLoader count={1} className="" />
				) : (
					<Accordion menu={{ title: 'Genres', items: data || [] }} />
				)}
				<Accordion menu={userMenu} />
			</div>
		</nav>
	)
}

export default BurgerMenu
