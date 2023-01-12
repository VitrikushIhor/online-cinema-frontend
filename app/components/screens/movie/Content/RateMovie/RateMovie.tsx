import { FC } from 'react'
import StarRatingComponent from 'react-star-rating-component'

import { useRateMovie } from '@/screens/movie/Content/RateMovie/useRateMovie'

import AuthButton from '@/ui/Video-Player/AuthPlaceholder/AuthButton'

import { useAuth } from '@/hooks/useAuth'

import styles from './RateMovie.module.scss'

interface IRateMovie {
	id: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
	const { user } = useAuth()
	const { rating, isSend, handleClick } = useRateMovie(id)
	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Rating improve recommendations</p>
			{user ? (
				<>
					{isSend ? (
						<div className={styles.thank}>Thank for rating!</div>
					) : (
						<StarRatingComponent
							name={'star-rating'}
							value={rating}
							onStarClick={handleClick}
							// emptyStarColor={'#4f4f4f4'}
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
