import { FC } from 'react'
import { Controller, FormState, UseFormRegister } from 'react-hook-form'

import { validEmail } from '@/screens/auth/AuthField'

import Field from '@/ui/Form-Elements/Field/Field'
import IUploadField from '@/ui/Form-Elements/UploadField/UploadField'

import styles from './ProfileContent.module.scss'

export interface IProfileContent {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
	control: any
}

export const ProfileContent: FC<IProfileContent> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
	control,
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
					/*@ts-ignore*/
					error={errors.email}
				/>
				<Field
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
					/*@ts-ignore*/
					error={errors.password}
				/>
				<Field
					{...register(
						'userName',
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
					placeholder="user name"
					type="text"
					/*@ts-ignore*/
					error={errors.userName}
				/>
			</div>

			<Controller
				name="avatar"
				control={control}
				defaultValue=""
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<IUploadField
						onChange={onChange}
						placeholder={'Photo'}
						error={error}
						value={value}
						folder={'avatars'}
					/>
				)}
				rules={{
					required: 'Photo is required',
				}}
			/>
		</div>
	)
}
