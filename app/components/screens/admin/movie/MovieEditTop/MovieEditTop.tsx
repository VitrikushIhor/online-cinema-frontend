import { FC } from 'react'
import {
	FieldPath,
	RegisterOptions,
	UseFormRegisterReturn,
} from 'react-hook-form'

import { IMovieEditInput } from '@/screens/admin/movie/movie-edit-inteface'

import Field from '@/ui/Form-Elements/Field/Field'
import SlugField from '@/ui/Form-Elements/SlugField/SlugField'

import generateSlug from '@/utils/string/generateSlug'

import styles from './MovieEditTop.module.scss'

export const MovieTop: FC<any> = ({
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
