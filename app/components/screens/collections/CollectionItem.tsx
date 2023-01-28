import Link from 'next/link'
import { FC } from 'react'

import { ICollection } from '@/screens/collections/Collection'
import CollectionImage from '@/screens/collections/CollectionImage'

import { getGenreUrl } from '../../../config/url.config'

import styles from './Collection.module.scss'

const CollectionItem: FC<{ collection: ICollection }> = ({ collection }) => {
	return (
		<Link className={styles.collection} href={getGenreUrl(collection.slug)}>
			<CollectionImage collection={collection} />

			<div className={styles.content}>
				<div className={styles.title}>{collection.title}</div>
			</div>
		</Link>
	)
}
export default CollectionItem
