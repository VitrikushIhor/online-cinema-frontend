import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IActorEditInput } from '@/screens/admin/actor/actor-edit-inteface'
import { useGetActorEdit } from '@/screens/admin/actor/useActorEdit'

import AdminNavigation from '@/ui/Admin-Navigation/AdminNavigation'
import Button from '@/ui/Form-Elements/Button'
import Field from '@/ui/Form-Elements/Field'
import SlugField from '@/ui/Form-Elements/SlugField/SlugField'
import IUploadField from '@/ui/Form-Elements/UploadField/UploadField'
import fromStyles from '@/ui/Form-Elements/admin-form.module.scss'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import generateSlug from '@/utils/string/generateSlug'

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
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<Field
								{...register('description', {
									required: 'Description is required!',
								})}
								placeholder="Description"
								error={errors.description}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									generate={() =>
										setValue('slug', generateSlug(getValues('name')))
									}
									error={errors.slug}
								/>
							</div>
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
