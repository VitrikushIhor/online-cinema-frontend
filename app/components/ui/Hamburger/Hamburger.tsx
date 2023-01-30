import { FC, useRef, useState } from 'react'

import Logo from '@/components/layout/Navigation/Logo/Logo'

import Burger from '@/ui/Hamburger/Burger/Burger'
import BurgerMenu from '@/ui/Hamburger/BurgerMenu/BurgerMenu'

import styles from './Hamburger.module.scss'

const Hamburger: FC = () => {
	const [open, setOpen] = useState(false)
	const hamburger = useRef<HTMLDivElement>(null)

	return (
		<div className={styles.containerHamburger}>
			<Logo />
			<div className={styles.containerHamburger}>
				<Burger open={open} setOpen={setOpen} />
				<BurgerMenu open={open} setOpen={setOpen} />
			</div>
		</div>
	)
}

export default Hamburger
