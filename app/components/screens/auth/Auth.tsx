import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import AuthFields from '@/screens/auth/AuthField'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'

import Button from '@/ui/Form-Elements/Button/Button'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { IAuthInput } from '@/shared/interfaces/auth-interface'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'Login' | 'Register'>('Register')

	const {
		handleSubmit,
		register: registerInput,
		reset,
		formState,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'Login') login(data)
		else if (type === 'Register') register(data)
		reset()
	}
	return (
		<Meta title={'Auth'}>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading className={styles.heading} title={`${type}`} />
					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired={false}
					/>
					<div className={styles.button}>
						<Button
							type={'submit'}
							onClick={() => setType('Login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type={'submit'}
							onClick={() => setType('Register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
