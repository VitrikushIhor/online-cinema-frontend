import {useQuery} from 'react-query'

import {UsersService} from '@/services/users/users-service'
import {useAuth} from "@/hooks/useAuth";

export const useFavorites = () => {
	const {user} = useAuth()
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('favorites Movie', () => UsersService.getFavorites(), {
		select: ({data}) => data,
		enabled: !!user
	})

	return {
		favoritesMovies,
		refetch,
		isLoading,
	}
}
