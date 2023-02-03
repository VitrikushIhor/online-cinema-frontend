import { FC } from 'react'

import Field from '@/ui/Form-Elements/Field/Field'
import SlugField from '@/ui/Form-Elements/SlugField/SlugField'

import generateSlug from '@/utils/string/generateSlug'

import styles from './ActorInfo.module.scss'

export const ActorInfo: FC<any> = ({
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

			<Field
				{...register('description', {
					required: 'Description is required!',
				})}
				placeholder="Description"
				error={errors.description}
			/>

			<div>
				<SlugField
					register={register}
					generate={() => setValue('slug', generateSlug(getValues('name')))}
					error={errors.slug}
				/>
			</div>
		</div>
	)
}
