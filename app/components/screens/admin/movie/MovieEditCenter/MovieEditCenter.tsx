import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Control, Controller } from 'react-hook-form'

import { useAdminActorsOrGenres } from '@/screens/admin/movie/MovieEditCenter/useAdminActorsOrGenres'

import { IMovieEditInput } from '@/shared/interfaces/movie-edit-inteface'

import styles from './MovieEditCenter.module.scss'

export interface IMovieEditCenter {
	control: Control<IMovieEditInput, any>
}

const DynamicSelect = dynamic(() => import('@/ui/Select/Select'), {
	ssr: false,
})

export const MovieEditCenter: FC<IMovieEditCenter> = ({ control }) => {
	const { genres, genresLoading, actorsLoading, actors } =
		useAdminActorsOrGenres()

	return (
		<div className={styles.container}>
			<Controller
				name="genres"
				control={control}
				render={({ field, fieldState: { error } }) => (
					<DynamicSelect
						field={field}
						options={genres || []}
						isLoading={genresLoading}
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
						isLoading={actorsLoading}
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
