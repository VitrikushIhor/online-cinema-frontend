import { FC } from 'react'

import { useMovies } from '@/screens/admin/movies/useMovie'

import AdminHeader from '@/ui/Admin-Header/Admin-Header'
import AdminNavigation from '@/ui/Admin-Navigation/AdminNavigation'
import AdminTable from '@/ui/AdminTable/AdminTable'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'


const MovieList: FC = () => {
	const {
		isLoading,
		handleSearch,
		data,
		searchTerm,
		mutateAsync,
		createAsync,
	} = useMovies()
	console.log(data)
	return (
		<Meta title={'Movie'}>
			<AdminNavigation />
			<Heading title={'Movies'} />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				headerItems={['Title', 'Genre', 'Rating', 'Actions']}
				isLoading={isLoading}
				removeHandler={mutateAsync}
				tableItem={data || []}
			/>
		</Meta>
	)
}

export default MovieList
