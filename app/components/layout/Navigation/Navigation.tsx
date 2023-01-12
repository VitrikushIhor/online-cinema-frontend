import React from 'react'

import Logo from '@/components/layout/Navigation/Logo/Logo'
import MenuContainer from '@/components/layout/Navigation/MenuContainer/MenuContainer'

import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
