import {IMovieEditInput} from '@/screens/admin/movie/movie-edit-inteface'

import {IMovie} from '@/shared/interfaces/movie.interface'

import axios, {axiosClassic} from '../../api/interceptors'
import {getMoviesUrl} from '../../config/api.config'

export const MoviesService = {
	async getMovies(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
					searchTerm,
				}
				: {},
		})
	},
	async getPopularMovies() {
		const {data: movies} = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},
	async getByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actors/${actorId}`))
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},
	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl(`/by-genres`), {
			genreIds,
		})
	},
	async deleteMovie(id: string) {
		return axios.delete<string>(getMoviesUrl(`/${id}`))
	},
	async create() {
		return axios.post<string>(getMoviesUrl(``))
	},
	async getById(id: string) {
		return axios.get<IMovieEditInput>(getMoviesUrl(`/${id}`))
	},
	async update(id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${id}`), data)
	},
	async updateCountOpened(slug: string) {
		return axiosClassic.post(getMoviesUrl('/update-count-opened'), {
			slug,
		})
	},
}
