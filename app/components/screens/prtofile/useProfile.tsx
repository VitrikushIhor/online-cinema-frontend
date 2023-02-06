import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IProfileInput } from '@/screens/prtofile/Profile'

import { UsersService } from '@/services/users/users-service'

import { toastError } from '@/utils/toast-error'

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery('Profile', () => UsersService.getProfile(), {
		onSuccess({ data }) {
			console.log(data)
			setValue('email', data.email)
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
			},
		}
	)
	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
