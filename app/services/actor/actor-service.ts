import { IActorEditInput } from '@/shared/interfaces/actor-edit-inteface'
import { IActor } from '@/shared/interfaces/movie.interface'

import axios, { axiosClassic } from '../../api/interceptors'
import { getActorsUrl } from '../../config/api.config'

export const ActorsService = {
	async getAllActors(searchTerm?: string) {
		return axios.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async deleteActor(id: string) {
		return axios.delete<string>(getActorsUrl(`/${id}`))
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},
	async create() {
		return axios.post<string>(getActorsUrl(``))
	},
	async getById(id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`/${id}`))
	},
	async update(id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${id}`), data)
	},
}
