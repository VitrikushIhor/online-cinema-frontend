import { FC } from 'react'

import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import LogOutButton from '@/components/layout/Navigation/MenuContainer/auth/LogOutButton'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '../../../../../config/url.config'

const AuthItems: FC<{toggleDropdownAndMenu:()=>void}> = ({toggleDropdownAndMenu}) => {
	const { user } = useAuth()
	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
						toggleDropdown={toggleDropdownAndMenu}
					/>
					<LogOutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} toggleDropdown={toggleDropdownAndMenu} />
			)}
			{user?.isAdmin && (
				<MenuItem
					 toggleDropdown={toggleDropdownAndMenu}
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
