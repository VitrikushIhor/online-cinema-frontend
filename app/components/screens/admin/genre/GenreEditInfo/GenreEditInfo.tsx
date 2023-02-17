import { FC } from 'react'
import {
	FieldErrors,
	UseFormGetValues,
	UseFormRegister,
	UseFormSetValue,
} from 'react-hook-form'

import Field from '@/ui/Form-Elements/Field/Field'
import SlugField from '@/ui/Form-Elements/SlugField/SlugField'

import { IGenreEditInput } from '@/shared/interfaces/genre-edit-inteface'

import generateSlug from '@/utils/string/generateSlug'

import styles from './GenreEditInfo.module.scss'

interface IGenreEditInfo {
	register: UseFormRegister<IGenreEditInput>
	errors: FieldErrors<IGenreEditInput>
	getValues: UseFormGetValues<IGenreEditInput>
	setValue: UseFormSetValue<IGenreEditInput>
}

export const GenreEditInfo: FC<IGenreEditInfo> = ({
	register,
	errors,
	getValues,
	setValue,
}) => {
	return (
		<div className={styles.container}>
			<Field
				{...register('name', {
					required: 'Name is required!',
				})}
				placeholder="Name"
				error={errors.name}
			/>
			<div>
				<SlugField
					register={register}
					generate={() => setValue('slug', generateSlug(getValues('name')))}
					error={errors.slug}
				/>
			</div>
			<Field
				{...register('icon', {
					required: 'Icon is required!',
				})}
				placeholder="Icon"
				error={errors.icon}
			/>
		</div>
	)
}
