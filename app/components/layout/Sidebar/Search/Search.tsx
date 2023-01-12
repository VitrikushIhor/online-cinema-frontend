import { ChangeEvent, FC, useState } from 'react'
import { useQuery } from 'react-query'

import SearchList from '@/components/layout/Sidebar/Search/SeachList/SearchList'

import SearchField from '@/ui/Search-Field/SearchField'

import { useDebounce } from '@/hooks/useDebounce'

import { MoviesService } from '@/services/movies/movie.service'

import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data: popularMovies } = useQuery(
		['search movies list', debouncedSearch],
		() => MoviesService.getMovies(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={popularMovies || []} />}
		</div>
	)
}

export default Search
