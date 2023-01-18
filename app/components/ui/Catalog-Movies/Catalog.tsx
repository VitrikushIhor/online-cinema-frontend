import { FC } from 'react'

import { ICatalog } from '@/ui/Catalog-Movies/catalog-inteface'
import GalleryItem from '@/ui/Gallery/GalleryItem'
import Description from '@/ui/Heading/Description'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

import { getMovieUrl } from '../../../config/url.config'

import styles from './Catalog.module.scss'

const Catalog: FC<ICatalog> = ({ title, movies, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} />
			{description && (
				<Description text={description} className={styles.description} />
			)}

			<section className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						item={{
							name: movie.title,
							url: getMovieUrl(movie.slug),
							posterPath: movie.bigPoster,
							content: {
								title: movie.title,
							},
						}}
						variant={'horizontal'}
						key={movie._id}
					/>
				))}
			</section>
		</Meta>
	)
}

export default Catalog
