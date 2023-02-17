import { FC } from 'react'

import { IHeading } from '@/ui/Heading/Heading'

import styles from './Heading.module.scss'

const SubHeading: FC<IHeading> = ({ title, className = '' }) => {
	return <h2 className={`${styles.subHead} ${className}`}>{title}</h2>
}

export default SubHeading
