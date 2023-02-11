import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import AuthFields from '@/screens/auth/AuthField'
import { IAuthInput } from '@/screens/auth/auth-interface'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'

import Button from '@/ui/Form-Elements/Button/Button'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const [type, setType] = useState<'login' | 'register'>('login')
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
		if (type === 'login') login(data)
		else if (type === 'register') register(data)
		reset()
	}
	return (
		<Meta title={'Auth'}>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading className={styles.heading} title={'Auth'} />
					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired={false}
					/>
					<div className={styles.button}>
						<Button
							type={'submit'}
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type={'submit'}
							onClick={() => setType('register')}
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
