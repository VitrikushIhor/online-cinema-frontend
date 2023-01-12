import GenreList from '@/screens/admin/genres/GenreList'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const GenresList: NextPageAuth = () => {
	return <GenreList />
}

GenresList.isAdmin = true
export default GenresList
