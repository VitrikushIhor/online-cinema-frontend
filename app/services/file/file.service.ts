import axios from '../../api/interceptors'

export const FileService = {
	async update(file: FormData, folder?: string) {
		return axios.post<{ url: string; name: string }[]>('/files', file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
