import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import FavoriteButton from '@/screens/movie/FavoriteButton/FavoriteButton'

import { useAuth } from '@/hooks/useAuth'

import { IGalleryItem } from '@/shared/interfaces/gallery-interface'

import styles from './Favorites.module.scss'

export interface IFavoriteItem extends Omit<IGalleryItem, 'content'> {
	title: string
	_id: string
}

const FavoriteItem: FC<{ item: IFavoriteItem }> = ({ item }) => {
	const { user } = useAuth()
	return (
		<div className={styles.itemWrapper}>
			{user && <FavoriteButton movieId={item._id} />}
			<FavoriteButton movieId={item._id} />
			<Link className={styles.item} href={item.url}>
				<Image
					alt={item.name}
					src={item.posterPath}
					layout="fill"
					draggable={false}
					priority
				/>

				<div className={styles.title}>{item.title}</div>
			</Link>
		</div>
	)
}

export default FavoriteItem
