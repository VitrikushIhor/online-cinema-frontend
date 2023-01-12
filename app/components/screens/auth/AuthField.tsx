import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/ui/Form-Elements/Field'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

export const validEmail =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
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
		</>
	)
}

export default AuthFields
