import { FC } from 'react'

import Field from '@/ui/Form-Elements/Field/Field'
import SlugField from '@/ui/Form-Elements/SlugField/SlugField'

import generateSlug from '@/utils/string/generateSlug'

import styles from './GenreEditInfo.module.scss'

export const GenreEditInfo: FC<any> = ({
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
