import Image from 'next/image'
import { FC } from 'react'

import styles from './Banner.module.scss'

interface IBanner {
	image: string
	Detail: FC | null
}

const Banner: FC<IBanner> = ({ Detail, image }) => {
	return (
		<div className={styles.banner}>
			<Image
				alt="banner-logo"
				src={image}
				draggable={false}
				layout="fill"
				unoptimized
				priority
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
