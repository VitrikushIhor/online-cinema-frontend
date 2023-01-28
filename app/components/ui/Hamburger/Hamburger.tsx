import { FC, useRef, useState } from 'react'

import Logo from '@/components/layout/Navigation/Logo/Logo'

import Burger from '@/ui/Hamburger/Burger/Burger'
import BurgerMenu from '@/ui/Hamburger/BurgerMenu/BurgerMenu'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'

const Hamburger: FC = () => {
	const [open, setOpen] = useState(false)
	const hamburger = useRef<HTMLDivElement>(null)
	useOnClickOutside(hamburger, () => setOpen(false))
	return (
		<div className={styles.containerHamburger}>
			<Logo />
			<div ref={hamburger} className={styles.containerHamburger}>
				<Burger open={open} setOpen={setOpen} />
				<BurgerMenu open={open} />
			</div>
		</div>
	)
}

export default Hamburger
