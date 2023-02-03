import { FC } from 'react'

import styles from './Heading.module.scss'

export interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return <h1 className={`${styles.head} ${className}`}>{title}</h1>
}

export default Heading
