import { FC } from 'react'
import {
	Control,
	Controller,
	FormState,
	UseFormRegister,
} from 'react-hook-form'

import { validEmail } from '@/screens/auth/AuthField'
import { IProfileInput } from '@/screens/profile/Profile'

import Field from '@/ui/Form-Elements/Field/Field'
import IUploadField from '@/ui/Form-Elements/UploadField/UploadField'

import { IUserEditInput } from '@/shared/interfaces/user-edit-inteface'

import styles from './ProfileContent.module.scss'

export interface IProfileContent {
	register: UseFormRegister<any>
	formState: FormState<IProfileInput | IUserEditInput>
	isPasswordRequired?: boolean
	control: Control<any, any>
	adminEdit?: boolean
}

export const ProfileContent: FC<IProfileContent> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
	control,
	adminEdit = false
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Field
					{...register('email', {
						required: 'Email is required!',
						pattern: {
							value: validEmail,
							message: 'Please enter a valid email',
						},
					})}
					placeholder="E-mail"
					error={errors.email}
				/>
				{!adminEdit && <Field
					{...register(
						'password',
						isPasswordRequired
							? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols!',
								},
							}
							: {}
					)}
					placeholder="Password"
					type="password"
					error={errors.password}
				/>}
				<Field
					{...register('userName')}
					placeholder="userName"
					type="text"
					error={errors.userName}
				/>
			</div>

			<Controller
				name="avatar"
				control={control}
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<IUploadField
						onChange={onChange}
						placeholder={'Photo'}
						error={error}
						value={value}
						folder={'avatars'}
					/>
				)}
			/>
		</div>
	)
}
