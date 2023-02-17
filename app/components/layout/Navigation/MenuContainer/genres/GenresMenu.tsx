import { FC } from 'react'

import Menu from '@/components/layout/Navigation/MenuContainer/Menu'
import { usePopularGenres } from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenres'

import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

const GenresMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()
	return isLoading ? (
		<div>
			<SkeletonLoader count={5} />
		</div>
	) : (
		<Menu menu={{ title: 'Popular Genres', items: data || [] }} />
	)
}

export default GenresMenu
