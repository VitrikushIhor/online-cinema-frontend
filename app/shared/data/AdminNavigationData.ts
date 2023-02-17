import { INavItem } from '@/ui/Admin-Navigation/AdminNavItem'

import { getAdminHomeUrl, getAdminUrl } from '../../config/url.config'

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Users',
		link: getAdminUrl('users'),
	},
	{
		title: 'Movies',
		link: getAdminUrl('movies'),
	},
	{
		title: 'Actors',
		link: getAdminUrl('actors'),
	},
	{
		title: 'Genres',
		link: getAdminUrl('genres'),
	},
]
