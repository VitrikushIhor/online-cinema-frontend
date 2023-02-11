import { FC } from 'react'

import Logo from '@/components/layout/Navigation/Logo/Logo'

import Burger from '@/ui/Hamburger/Burger/Burger'
import BurgerMenu from '@/ui/Hamburger/BurgerMenu/BurgerMenu'

import useOutside from '@/hooks/useOutside'

import styles from './Hamburger.module.scss'

const Hamburger: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	return (
		<div ref={ref} className={styles.containerHamburger}>
			<Logo />
			<div className={styles.hamburgerContent}>
				<Burger open={isShow} setOpen={setIsShow} />
				<BurgerMenu open={isShow} setOpen={setIsShow} />
			</div>
		</div>
	)
}

export default Hamburger
