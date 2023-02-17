import { useQuery } from 'react-query'

import { useAuth } from '@/hooks/useAuth'

import { UsersService } from '@/services/users/users-service'

export const useFavorites = () => {
	const { user } = useAuth()
	const {
		isLoading,
		data: favoriteMovies,
		refetch,
	} = useQuery('favorites Movie', () => UsersService.getFavorites(), {
		select: ({ data }) => data,
		enabled: !!user,
	})

	return {
		favoriteMovies,
		refetch,
		isLoading,
	}
}
