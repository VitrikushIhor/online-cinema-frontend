import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

import { FileService } from '@/services/file/file.service'

import { toastError } from '@/utils/toast-error'

type TypeUpload = (
	onChange: ((...event: any[]) => any) | undefined,
	folder?: string | undefined
) => {
	uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)
	const { mutateAsync } = useMutation(
		'Upload file',
		(data: FormData) => FileService.update(data, folder),
		{
			onSuccess({ data }) {
				if (onChange) {
					onChange(data[0].url)
					console.log(data[0].url)
				}
			},
			onError(error) {
				toastError(error, 'Upload error')
			},
		}
	)
	const uploadImage = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)
			const files = e.target.files
			if (files?.length) {
				const formData = new FormData()
				formData.append('image', files[0])
				await mutateAsync(formData)

				setTimeout(() => {
					setIsLoading(false)
				}, 1000)
			}
		},
		[mutateAsync]
	)

	return useMemo(() => ({ uploadImage, isLoading }), [uploadImage, isLoading])
}
