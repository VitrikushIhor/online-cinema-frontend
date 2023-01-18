import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IGalleryItemProps } from '@/ui/Gallery/gallery-interface'

import styles from './Gallery.module.scss'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link
			href={item.url}
			className={cn(styles.item, {
				[styles.withText]: item.content,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>
			<Image
				className={styles.testImage}
				alt={item.name}
				src={item.posterPath}
				fill
				draggable={false}
				priority
			/>
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.content.title}</div>
					{item.content.subTitle && (
						<div className={styles.subTitle}> {item.content.subTitle}</div>
					)}
				</div>
			)}
		</Link>
	)
}

export default GalleryItem
