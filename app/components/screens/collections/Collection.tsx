import { FC } from 'react'

import CollectionItem from '@/screens/collections/CollectionItem'

import Description from '@/ui/Heading/Description'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

import styles from './Collection.module.scss'

export interface ICollection {
	_id: string
	slug: string
	image: string
	title: string
}

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'

const Collection: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			<Description text={description} className={styles.description} />

			<section className={styles.collections}>
				{collections.map((collection) => (
					<CollectionItem key={collection._id} collection={collection} />
				))}
			</section>
		</Meta>
	)
}

export default Collection
