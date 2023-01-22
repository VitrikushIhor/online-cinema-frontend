import { FC } from 'react'

import styles from './Burger.module.scss'

export interface IBurger {
	open: boolean
	setOpen: (open: boolean) => void
}

const Burger: FC<IBurger> = ({ open, setOpen }) => {
	return (
		<div
			className={styles.button}
			onClick={() => setOpen(!open)}
			style={{ transform: `${open ? 'translateX(0)' : 'translateX(-100%)'}}` }}
		>
			<div />
			<div />
			<div />
		</div>
	)
}

export default Burger
