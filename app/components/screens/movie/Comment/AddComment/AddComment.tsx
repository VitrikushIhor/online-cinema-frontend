import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/md'
import { useMutation } from 'react-query'

import { ICommentDto } from '@/screens/movie/Comment/comment-interface'

import Field from '@/ui/Form-Elements/Field/Field'

import { MoviesService } from '@/services/movies/movie.service'

import styles from './AddComment.module.scss'

const AddCommentForm: FC<{ movieId: string; refetch: any }> = ({
	movieId,
	refetch,
}) => {
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
					placeholder="Введите комментарий"
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
