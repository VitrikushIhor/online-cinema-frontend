import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { ActorInfo } from '@/screens/admin/actor/ActorInfo/ActorInfo'
import { IActorEditInput } from '@/screens/admin/actor/actor-edit-inteface'
import { useGetActorEdit } from '@/screens/admin/actor/useActorEdit'

import AdminNavigation from '@/ui/Admin-Navigation/AdminNavigation'
import Button from '@/ui/Form-Elements/Button/Button'
import IUploadField from '@/ui/Form-Elements/UploadField/UploadField'
import fromStyles from '@/ui/Form-Elements/admin-form.module.scss'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useGetActorEdit(setValue)
	return (
		<Meta title={'Edit Actor'}>
			<AdminNavigation />
			<Heading title={'Edit Actor'} />
			<form onSubmit={handleSubmit(onSubmit)} className={fromStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={fromStyles.fields}>
							<ActorInfo
								getValues={getValues}
								setValue={setValue}
								register={register}
								errors={errors}
							/>
							<Controller
								name="photo"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<IUploadField
										onChange={onChange}
										placeholder={'Photo'}
										error={error}
										value={value}
										folder={'actors'}
									/>
								)}
								rules={{
									required: 'Photo is required',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default ActorEdit
