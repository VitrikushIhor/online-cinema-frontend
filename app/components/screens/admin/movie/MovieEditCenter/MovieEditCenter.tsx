import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'

import { useAdminActors } from '@/screens/admin/movie/MovieEditCenter/useAdminActors'
import { useAdminGenres } from '@/screens/admin/movie/MovieEditCenter/useAdminGenres'
import { IMovieEditInput } from '@/screens/admin/movie/movie-edit-inteface'

import styles from './MovieEditCenter.module.scss'

export interface IMovieEditCenter {
	control: Control<IMovieEditInput, any>
}

const DynamicSelect = dynamic(() => import('@/ui/Select/Select'), {
	ssr: false,
})

export const MovieEditCenter: FC<IMovieEditCenter> = ({ control }) => {
	const { isLoading: isGenresLoading, data: genres } = useAdminGenres()
	const { isLoading: isActorsLoading, data: actors } = useAdminActors()

	return (
		<div className={styles.container}>
			<Controller
				name="genres"
				control={control}
				render={({ field, fieldState: { error } }) => (
					<DynamicSelect
						field={field}
						options={genres || []}
						isLoading={isGenresLoading}
						isMulti
						placeholder={'Geners'}
						error={error}
					/>
				)}
				rules={{
					required: 'Genres is required',
				}}
			/>

			<Controller
				name="actors"
				control={control}
				render={({ field, fieldState: { error } }) => (
					<DynamicSelect
						field={field}
						options={actors || []}
						isLoading={isActorsLoading}
						isMulti
						placeholder={'Actors'}
						error={error}
					/>
				)}
				rules={{
					required: 'Actors is required',
				}}
			/>
		</div>
	)
}
