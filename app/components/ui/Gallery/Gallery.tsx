import { FC } from 'react'

import GalleryItem from '@/ui/Gallery/GalleryItem'

import { IGalleryItem } from '@/shared/interfaces/gallery-interface'

import styles from './Gallery.module.scss'

const Gallery: FC<{ items: IGalleryItem[]; className?: string }> = ({
	items,
	className = '',
}) => {
	return (
		<div className={`${styles.gallery} ${className}`}>
			{items.map((item) => (
				<GalleryItem key={item.url} item={item} variant="vertical" />
			))}
		</div>
	)
}

export default Gallery
