import { FC } from 'react'
import {
	FieldErrors,
	UseFormGetValues,
	UseFormRegister,
	UseFormSetValue,
} from 'react-hook-form'

import Field from '@/ui/Form-Elements/Field/Field'
import SlugField from '@/ui/Form-Elements/SlugField/SlugField'

import { IActorEditInput } from '@/shared/interfaces/actor-edit-inteface'

import generateSlug from '@/utils/string/generateSlug'

import styles from './ActorInfo.module.scss'

interface IActorInfo {
	register: UseFormRegister<IActorEditInput>
	errors: FieldErrors<IActorEditInput>
	getValues: UseFormGetValues<IActorEditInput>
	setValue: UseFormSetValue<IActorEditInput>
}

export const ActorInfo: FC<IActorInfo> = ({
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
