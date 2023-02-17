import {
	DefaultValues,
	KeepStateOptions,
	SubmitHandler,
	UseFormSetValue,
} from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IProfileInput } from '@/screens/prtofile/Profile'

import { UsersService } from '@/services/users/users-service'

import { toastError } from '@/utils/toast-error'

interface IUseProfile {
	setValue: UseFormSetValue<IProfileInput>
	reset: (
		values?: DefaultValues<IProfileInput> | IProfileInput,
		keepStateOptions?: KeepStateOptions
	) => void
}
export const useProfile = ({ setValue, reset }: IUseProfile) => {
	const { isLoading } = useQuery('Profile', () => UsersService.getProfile(), {
		onSuccess({ data }) {
			setValue('email', data.email)
			setValue('avatar', data.avatar)
			setValue('userName', data.userName)
		},
		onError(error) {
			toastError(error, 'Get Profile')
		},
	})

	const { mutateAsync } = useMutation(
		'update profile',
		(data: IProfileInput) => UsersService.updateProfile(data),
		{
			onSuccess() {
				toastr.success('Update User', 'Update was successful')
				reset()
			},
		}
	)
	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
