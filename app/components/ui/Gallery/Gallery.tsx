import { FC } from 'react'

import GalleryItem from '@/ui/Gallery/GalleryItem'
import { IGalleryItem } from '@/ui/Gallery/gallery-interface'

import styles from './Gallery.module.scss'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryItem key={item.url} item={item} variant="vertical" />
			))}
		</div>
	)
}

export default Gallery
