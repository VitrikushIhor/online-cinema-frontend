import Image from 'next/image'
import { FC } from 'react'

import stylesCatalog from '@/ui/Catalog-Movies/Catalog.module.scss'
import GalleryItem from '@/ui/Gallery/GalleryItem'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

import { IActor, IMovie } from '@/shared/interfaces/movie.interface'

import { getMovieUrl } from '../../../config/url.config'

import styles from './Actor.module.scss'

export interface IActorPage {
	movies: IMovie[]
	actor: IActor
}

const Actor: FC<IActorPage> = ({ actor, movies }) => {
	return (
		<Meta title={actor.name} description={actor.name}>
			<Heading className={styles.heading} title={actor.name} />

			<div className={styles.headContainer}>
				<Image width={170} height={42} alt={actor.name} src={actor.photo} />
				<div>{actor.description}</div>
			</div>

			<section className={stylesCatalog.movies}>
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

export default Actor
