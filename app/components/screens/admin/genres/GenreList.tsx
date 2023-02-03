import { FC } from 'react'

import { useGenres } from '@/screens/admin/genres/useGenre'

import AdminHeader from '@/ui/Admin-Header/Admin-Header'
import AdminNavigation from '@/ui/Admin-Navigation/AdminNavigation'
import AdminTable from '@/ui/AdminTable/AdminTable'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

import styles from '../home/Admin.module.scss'

const GenreList: FC = () => {
	const {
		isLoading,
		handleSearch,
		data,
		searchTerm,
		mutateAsync,
		createAsync,
	} = useGenres()

	return (
		<Meta title={'Genre'}>
			<AdminNavigation />
			<Heading title={'Genres'} className={styles.heading} />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				headerItems={['Name', 'Slug', 'Actions']}
				isLoading={isLoading}
				removeHandler={mutateAsync}
				tableItem={data || []}
			/>
		</Meta>
	)
}

export default GenreList
