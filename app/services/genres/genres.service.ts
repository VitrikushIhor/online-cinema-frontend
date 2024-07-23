import { ICollection } from '@/screens/collections/Collection'

import { IGenreEditInput } from '@/shared/interfaces/genre-edit-inteface'
import { IGenre } from '@/shared/interfaces/movie.interface'

import axios, { axiosClassic } from '../../api/interceptors'
import { getGenresUrl } from '../../config/api.config'
import { getGenreUrl } from '../../config/url.config'

export const GenresService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getById(id: string) {
		return axios.get<IGenreEditInput>(getGenreUrl(`${id}`))
	},
	async getBySlug(slug: string) {
		console.log("url",slug)
		return axiosClassic.get<IGenre>(getGenreUrl(`by-slug/${slug}`))
	},
	async getCollections() {
		return axiosClassic.get<ICollection[]>(getGenresUrl('/collections'))
	},
	async deleteGenre(id: string) {
		return axios.delete<string>(getGenreUrl(`${id}`))
	},
	async updateGenre(id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenreUrl(`${id}`), data)
	},
	async createGenre() {
		return axios.post<string>(getGenresUrl(``))
	},
	async getPopularGenres(limit: number = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(`/popular`), {
			params: {
				limit,
			},
		})
	},
}
