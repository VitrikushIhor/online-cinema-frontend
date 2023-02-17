import { FC } from 'react'
import {
	FieldErrors,
	UseFormGetValues,
	UseFormRegister,
	UseFormSetValue,
} from 'react-hook-form'

import Field from '@/ui/Form-Elements/Field/Field'
import SlugField from '@/ui/Form-Elements/SlugField/SlugField'

import { IMovieEditInput } from '@/shared/interfaces/movie-edit-inteface'

import generateSlug from '@/utils/string/generateSlug'

import styles from './MovieEditTop.module.scss'

interface IMovieTop {
	register: UseFormRegister<IMovieEditInput>
	errors: FieldErrors<IMovieEditInput>
	getValues: UseFormGetValues<IMovieEditInput>
	setValue: UseFormSetValue<IMovieEditInput>
}

export const MovieTop: FC<IMovieTop> = ({
	register,
	errors,
	getValues,
	setValue,
}) => {
	return (
		<div className={styles.infoContainer}>
			<Field
				{...register('title', {
					required: 'Title is required!',
				})}
				placeholder="Title"
				error={errors.title}
			/>
			<div>
				<SlugField
					register={register}
					generate={() => setValue('slug', generateSlug(getValues('title')))}
					error={errors.slug}
				/>
			</div>
			<Field
				{...register('parameters.country', {
					required: 'Country is required!',
				})}
				placeholder="Country"
				error={errors.parameters?.country}
			/>

			<Field
				{...register('parameters.duration', {
					required: 'Duration is required!',
				})}
				placeholder="Duration (min)"
				error={errors.parameters?.duration}
			/>

			<Field
				{...register('parameters.year', {
					required: 'Year is required!',
				})}
				placeholder="Year"
				error={errors.parameters?.year}
			/>
		</div>
	)
}
