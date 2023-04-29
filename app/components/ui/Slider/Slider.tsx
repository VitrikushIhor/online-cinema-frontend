import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import { ISlide } from '@/shared/interfaces/slider-interface'

import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import { useSlider } from './useSlider'

interface ISlider {
	buttonTitle?: string
	slides: ISlide[]
}

const Slider: FC<ISlider> = ({ buttonTitle, slides }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
		slides.length
	)

	return (
		<div className={styles.slider}>
			{isPrev && (
				<SlideArrow variant="left" clickHandler={() => handleClick('prev')} />
			)}

			<CSSTransition
				in={slideIn}
				timeout={500}
				classNames="slide-animation"
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isNext && (
				<SlideArrow variant="right" clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
