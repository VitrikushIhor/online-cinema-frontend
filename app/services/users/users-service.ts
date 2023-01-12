import { IProfileInput } from '@/screens/prtofile/Profile'

import { IMovie } from '@/shared/interfaces/movie.interface'
import { IUser } from '@/shared/interfaces/user.interface'

import axios from '../../api/interceptors'
import { getUsersUrl } from '../../config/api.config'

export const UsersService = {
	async getAllUsers(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async deleteUser(id: string) {
		return axios.delete<string>(getUsersUrl(`/${id}`))
	},
	async updateProfile(data: IProfileInput) {
		return axios.put<string>(getUsersUrl('/profile'), data)
	},
	async toggleFavorite(movieId: string) {
		return axios.post(getUsersUrl('/profile/favorites'), { movieId })
	},

	async getFavorites() {
		return axios.get<IMovie[]>(getUsersUrl('/profile/favorites'))
	},
	async getProfile() {
		return axios.get<IUser>(getUsersUrl(`/profile`))
	},
	async getById(id: string) {
		return axios.get<IUser>(getUsersUrl(`/${id}`))
	},
	async update(id: string, data: IProfileInput) {
		return axios.put<IUser>(getUsersUrl(`/${id}`), data)
	},
}
