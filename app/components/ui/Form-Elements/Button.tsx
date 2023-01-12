import { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={`${className} btn-primary py-2 px-10`} {...rest}>
			{children}
		</button>
	)
}

export default Button
