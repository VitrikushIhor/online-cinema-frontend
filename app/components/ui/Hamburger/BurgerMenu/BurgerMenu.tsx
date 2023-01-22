import Link from 'next/link'
import { FC } from 'react'

import styles from './BurgerMenu.module.scss'

export interface IBurger {
	open: boolean
	setOpen: (open: boolean) => void
}

const BurgerMenu: FC<IBurger> = ({ setOpen, open }) => {
	return (
		<nav
			className={styles.nav}
			onClick={() => setOpen(!open)}
			style={{ transform: `${open ? 'translateX(0)' : 'translateX(-100%)'}}` }}
		>
			<Link href="/">
				<span role="img" aria-label="about us">
					&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
				</span>
				About us
			</Link>
			<Link href="/">
				<span role="img" aria-label="price">
					&#x1f4b8;
				</span>
				Pricing
			</Link>
			<Link href="/">
				<span role="img" aria-label="contact">
					&#x1f4e9;
				</span>
				Contact
			</Link>
		</nav>
	)
}

export default BurgerMenu
