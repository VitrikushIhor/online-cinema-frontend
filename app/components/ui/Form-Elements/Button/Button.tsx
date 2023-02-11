import { ButtonHTMLAttributes, FC } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={`${className}  ${styles.btnPrimary}`} {...rest}>
			{children}
		</button>
	)
}

export default Button
