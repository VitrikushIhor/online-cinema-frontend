import MovieList from '@/screens/admin/movies/MovieList'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const MoviesList: NextPageAuth = () => {
	return <MovieList />
}

MoviesList.isAdmin = true
export default MoviesList
