import { FC } from 'react'

import FavoriteItem from '@/screens/admin/favorites/FavoriteItem'
import { useFavorites } from '@/screens/admin/favorites/useFavorites'

import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { getMovieUrl } from '../../../../config/url.config'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const { isLoading, favoriteMovies } = useFavorites()
	return (
		<Meta title="Favorites">
			<Heading title={'Favorites'} />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoriteMovies?.map((movie) => (
						<FavoriteItem
							key={movie._id}
							item={{
								name: movie.title,
								posterPath: movie.bigPoster,
								url: getMovieUrl(movie.slug),
								title: movie.title,
								_id: movie._id,
							}}
						/>
					))
				)}
			</section>
		</Meta>
	)
}

export default Favorites
