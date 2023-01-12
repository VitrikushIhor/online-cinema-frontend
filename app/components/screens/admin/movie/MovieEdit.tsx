import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IMovieEditInput } from '@/screens/admin/movie/movie-edit-inteface'
import { useAdminActors } from '@/screens/admin/movie/useAdminActors'
import { useAdminGenres } from '@/screens/admin/movie/useAdminGenres'
import { useGetMovieEdit } from '@/screens/admin/movie/useGetMovieEdit'

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

const DynamicSelect = dynamic(() => import('@/ui/Select/Select'), {
	ssr: false,
})

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useGetMovieEdit(setValue)
	const { isLoading: isGenresLoading, data: genres } = useAdminGenres()
	const { isLoading: isActorsLoading, data: actors } = useAdminActors()

	return (
		<Meta title={'Edit Movie'}>
			<AdminNavigation />
			<Heading title={'Edit Movie'} />
			<form onSubmit={handleSubmit(onSubmit)} className={fromStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={fromStyles.fields}>
							<Field
								{...register('title', {
									required: 'Title is required!',
								})}
								placeholder="Title"
								error={errors.title}
								style={{ width: '31%' }}
							/>
							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									generate={() =>
										setValue('slug', generateSlug(getValues('title')))
									}
									error={errors.slug}
								/>
							</div>

							<Field
								{...register('parameters.country', {
									required: 'Country is required!',
								})}
								placeholder="Country"
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>

							<Field
								{...register('parameters.duration', {
									required: 'Duration is required!',
								})}
								placeholder="Duration (min)"
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>

							<Field
								{...register('parameters.year', {
									required: 'Year is required!',
								})}
								placeholder="Year"
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>
							<Controller
								name="poster"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<IUploadField
										onChange={onChange}
										placeholder={'Poster'}
										error={error}
										value={value}
										folder={'movies'}
									/>
								)}
								rules={{
									required: 'Poster is required',
								}}
							/>
							<Controller
								name="bigPoster"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<IUploadField
										onChange={onChange}
										placeholder={'Big Poster'}
										error={error}
										value={value}
										folder={'movies'}
									/>
								)}
								rules={{
									required: 'Big Poste is required',
								}}
							/>
							<Controller
								name="videoUrl"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<IUploadField
										onChange={onChange}
										placeholder={'Video'}
										error={error}
										value={value}
										folder={'movies'}
										style={{ marginTop: -25 }}
										isNoImage={true}
									/>
								)}
								rules={{
									required: 'Video is required',
								}}
							/>

							<Controller
								name="genres"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isLoading={isGenresLoading}
										isMulti
										placeholder={'Geners'}
										error={error}
									/>
								)}
								rules={{
									required: 'Genres is required',
								}}
							/>

							<Controller
								name="actors"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={actors || []}
										isLoading={isActorsLoading}
										isMulti
										placeholder={'Actors'}
										error={error}
									/>
								)}
								rules={{
									required: 'Actors is required',
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

export default MovieEdit
