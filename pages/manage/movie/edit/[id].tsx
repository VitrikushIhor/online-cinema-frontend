import MovieEdit from '@/screens/admin/movie/MovieEdit'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const MovieEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieEditPage.isAdmin = true
export default MovieEditPage
