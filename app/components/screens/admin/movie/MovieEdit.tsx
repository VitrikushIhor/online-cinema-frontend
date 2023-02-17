import dynamic from 'next/dynamic'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { MovieEditBottom } from '@/screens/admin/movie/MovieEditBottom/MovieEditBottom'
import { MovieEditCenter } from '@/screens/admin/movie/MovieEditCenter/MovieEditCenter'
import { MovieTop } from '@/screens/admin/movie/MovieEditTop/MovieEditTop'
import { useGetMovieEdit } from '@/screens/admin/movie/useGetMovieEdit'

import AdminNavigation from '@/ui/Admin-Navigation/AdminNavigation'
import Button from '@/ui/Form-Elements/Button/Button'
import fromStyles from '@/ui/Form-Elements/admin-form.module.scss'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { IMovieEditInput } from '@/shared/interfaces/movie-edit-inteface'

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
							<MovieTop
								register={register}
								errors={errors}
								getValues={getValues}
								setValue={setValue}
							/>

							<MovieEditCenter control={control} />

							<MovieEditBottom control={control} />
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
