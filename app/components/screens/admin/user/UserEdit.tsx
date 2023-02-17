import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useUserEdit } from '@/screens/admin/user/useUserEdit'
import { ProfileContent } from '@/screens/prtofile/ProfileContent/ProfileContent'

import AdminNavigation from '@/ui/Admin-Navigation/AdminNavigation'
import Button from '@/ui/Form-Elements/Button/Button'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { IUserEditInput } from '@/shared/interfaces/user-edit-inteface'

import styles from './UserEdit.module.scss'

const UserEdit: FC = () => {
	const { reset, handleSubmit, register, formState, control, setValue } =
		useForm<IUserEditInput>({
			mode: 'onChange',
		})

	const { isLoading, onSubmit } = useUserEdit(setValue)
	return (
		<Meta title={'Edit User'}>
			<AdminNavigation />
			<Heading title={'Edit User'} />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.adminForm}>
				{isLoading ? (
					<SkeletonLoader count={3} className={styles.loader} />
				) : (
					<div>
						<ProfileContent
							formState={formState}
							register={register}
							control={control}
						/>
						<Controller
							name={'isAdmin'}
							control={control}
							render={({ field }) => (
								<button
									className={styles.textLink}
									onClick={(event) => {
										event.preventDefault()
										field.onChange(!field.value)
									}}
								>
									{field.value ? 'Make it regular user' : 'Make it admin'}
								</button>
							)}
						/>
						<Button onClick={() => reset()}>Update</Button>
					</div>
				)}
			</form>
		</Meta>
	)
}

export default UserEdit
