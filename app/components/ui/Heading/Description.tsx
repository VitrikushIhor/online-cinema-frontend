import parse from 'html-react-parser'
import { FC } from 'react'

import { IHeading } from '@/ui/Heading/Heading'

import styles from './Heading.module.scss'

const Description: FC<{ text: string; className?: string }> = ({
	text,
	className = '',
}) => {
	return (
		<div className={`${styles.descriptionH} ${className}`}>{parse(text)}</div>
	)
}

export default Description
