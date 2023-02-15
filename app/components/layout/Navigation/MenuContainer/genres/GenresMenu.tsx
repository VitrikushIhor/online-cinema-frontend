import { FC } from 'react'

import Menu from '@/components/layout/Navigation/MenuContainer/Menu'
import { usePopularGenres } from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenres'

import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

const GenresMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()
	return isLoading ? (
		<div className="mx-12 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular Genres', items: data || [] }} />
	)
}

export default GenresMenu
