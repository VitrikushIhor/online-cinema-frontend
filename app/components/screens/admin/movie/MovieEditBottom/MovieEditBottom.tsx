import { FC } from 'react'
import { Controller } from 'react-hook-form'

import { IMovieEditCenter } from '@/screens/admin/movie/MovieEditCenter/MovieEditCenter'

import IUploadField from '@/ui/Form-Elements/UploadField/UploadField'

import styles from './MovieEditBottom.module.scss'

export const MovieEditBottom: FC<IMovieEditCenter> = ({ control }) => {
	return (
		<div className={styles.container}>
			<Controller
				name="poster"
				control={control}
				defaultValue=""
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<IUploadField
						onChange={onChange}
						placeholder={'Poster'}
						error={error}
						value={value}
						folder={'movies'}
					/>
				)}
				rules={{
					required: 'Poster is required',
				}}
			/>
			<Controller
				name="bigPoster"
				control={control}
				defaultValue=""
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<IUploadField
						onChange={onChange}
						placeholder={'Big Poster'}
						error={error}
						value={value}
						folder={'movies'}
					/>
				)}
				rules={{
					required: 'Big Poste is required',
				}}
			/>
			<Controller
				name="videoUrl"
				control={control}
				defaultValue=""
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<IUploadField
						onChange={onChange}
						placeholder={'Video'}
						error={error}
						value={value}
						folder={'movies'}
						isNoImage={true}
					/>
				)}
				rules={{
					required: 'Video is required',
				}}
			/>
		</div>
	)
}
