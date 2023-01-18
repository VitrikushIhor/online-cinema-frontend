import cn from 'classnames'
import { FC } from 'react'

import MaterialIcon from '../../MaterialIcons/MaterialIcon'

import styles from './SlideArrow.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
	disabled?: boolean
}

const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler, disabled }) => {
	const isLeft = variant === 'left'

	return (
		<button
			disabled={disabled}
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	)
}

export default SlideArrow
