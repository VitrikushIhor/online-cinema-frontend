import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { ProfileContent } from '@/screens/prtofile/ProfileContent/ProfileContent'
import { useProfile } from '@/screens/prtofile/useProfile'

import Button from '@/ui/Form-Elements/Button/Button'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { IUser } from '@/shared/interfaces/user.interface'

import styles from './Profile.module.scss'

export interface IProfileInput extends Pick<IUser, 'email' | 'password'> {}

const Profile: FC = () => {
	const { formState, register, handleSubmit, setValue, control } =
		useForm<IProfileInput>({
			mode: 'onChange',
		})
	const { isLoading, onSubmit } = useProfile(setValue)
	return (
		<Meta title={'Profile'}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.from}>
				<Heading className={'mb-6'} title={'Profile'} />
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<ProfileContent
						formState={formState}
						register={register}
						control={control}
					/>
				)}
				<Button>Update</Button>
			</form>
		</Meta>
	)
}

export default Profile
