import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { MoviesService } from '@/services/movies/movie.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)
	const { isSuccess, data } = useQuery(
		[
			'SEARCH MOVIE',
			debounceSearch,
			() => MoviesService.getMovies(debounceSearch),
		],
		{
			select: ({ data }) => data,
			enabled: !!debounceSearch,
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return { isSuccess, handleSearch, data, searchTerm }
}
