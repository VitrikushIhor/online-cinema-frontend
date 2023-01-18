import { FC } from 'react'

interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<h1 className={`text-white text-opacity-80 font-semibold ${className}`}>
			{title}
		</h1>
	)
}

export default Heading
