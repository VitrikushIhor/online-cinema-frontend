import {FC} from 'react'

import ContentList from '@/screens/movie/Content/ContentList/ContentList'
import FavoriteButton from '@/screens/movie/FavoriteButton/FavoriteButton'

import MaterialIcon from '@/ui/MaterialIcons/MaterialIcon'

import {IMovie} from '@/shared/interfaces/movie.interface'

import {getActorUrl, getGenreUrl} from '../../../../config/url.config'

import styles from './Content.module.scss'
import {useAuth} from "@/hooks/useAuth";

const Content: FC<{ movie: IMovie }> = ({movie}) => {
	const {user} = useAuth()
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			<div className={styles.details}>
				<span>{movie.parameters.year} . </span>
				<span>{movie.parameters.country} . </span>
				<span>{movie.parameters.duration} min.</span>
			</div>
			<ContentList
				name={'Genres'}
				links={movie.genres.slice(0, 3).map((genre) => ({
					_id: genre._id,
					link: getGenreUrl(genre.slug),
					title: genre.name,
				}))}
			/>
			<ContentList
				name={'Actors'}
				links={movie.actors.slice(0, 3).map((actor) => ({
					_id: actor._id,
					link: getActorUrl(actor.slug),
					title: actor.name,
				}))}
			/>
			<div className={styles.rating}>
				<MaterialIcon name={'MdStarRate'}/>
				<span>{movie.rating.toFixed(1)}</span>
			</div>
			{user && <FavoriteButton movieId={movie._id}/>}
		</div>
	)
}

export default Content
