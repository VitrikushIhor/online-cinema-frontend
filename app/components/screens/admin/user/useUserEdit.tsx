import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IUserEditInput } from '@/shared/interfaces/user-edit-inteface'

import { UsersService } from '@/services/users/users-service'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '../../../../config/url.config'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { push, query } = useRouter()

	const userId = String(query.id)

	const { isLoading } = useQuery(
		['users edit', userId],
		() => UsersService.getById(userId),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			onError(error) {
				toastError(error, 'Get User')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update users',
		(data: IUserEditInput) => UsersService.update(userId, data),
		{
			onSuccess() {
				toastr.success('Update User', 'Update was successful')
				push(getAdminUrl('users'))
			},
		}
	)
	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
