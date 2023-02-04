import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useUserEdit } from '@/screens/admin/user/useUserEdit'
import { IUserEditInput } from '@/screens/admin/user/user-edit-inteface'
import AuthFields from '@/screens/auth/AuthField'

import AdminNavigation from '@/ui/Admin-Navigation/AdminNavigation'
import Button from '@/ui/Form-Elements/Button/Button'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import styles from './UserEdit.module.scss'

const UserEdit: FC = () => {
	const { handleSubmit, register, formState, control, setValue } =
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
					<>
						<AuthFields register={register} formState={formState} />
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
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default UserEdit
