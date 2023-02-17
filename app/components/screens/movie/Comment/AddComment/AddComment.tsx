import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/md'
import {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters,
	useMutation,
} from 'react-query'

import Field from '@/ui/Form-Elements/Field/Field'

import { IComment, ICommentDto } from '@/shared/interfaces/comment-interface'

import { MoviesService } from '@/services/movies/movie.service'

import styles from './AddComment.module.scss'

const AddCommentForm: FC<{
	movieId: string
	refetch: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<IComment[], unknown>>
}> = ({ movieId, refetch }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<ICommentDto>({
		mode: 'onChange',
	})

	const { mutateAsync } = useMutation(
		'add comment',
		(data: ICommentDto) => MoviesService.createComment({ ...data, movieId }),
		{
			onSuccess() {
				reset()
				refetch()
			},
		}
	)

	const onSubmit: SubmitHandler<ICommentDto> = async (data) => {
		await mutateAsync(data)
	}
	return (
		<form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.comment}>
				<Field
					{...register('message')}
					placeholder="Write a comment..."
					error={errors.message}
				/>

				<button>
					<MdSend />
				</button>
			</div>
		</form>
	)
}

export default AddCommentForm
