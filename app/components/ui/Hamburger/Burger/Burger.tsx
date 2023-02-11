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
			// style={{ background: `${open ? '#0D0C1D' : '#EFFFFA'}` }}
		>
			<div style={{ transform: `${open ? 'rotate(45deg)' : 'rotate(0)'}` }} />

			<div
				style={{
					opacity: `${open ? '0' : '1'}`,
					// transform: `${open ? 'translateX(20px)' : 'translateX(0)'}`,
				}}
			/>

			<div style={{ transform: `${open ? 'rotate(-45deg)' : 'rotate(0)'}` }} />
		</div>
	)
}

export default Burger
