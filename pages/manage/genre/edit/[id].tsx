import GenreEdit from '@/screens/admin/genre/GenreEdit'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const GenreEditPage: NextPageAuth = () => {
	return <GenreEdit />
}

GenreEditPage.isAdmin = true
export default GenreEditPage
