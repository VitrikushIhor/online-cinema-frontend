import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcons/MaterialIcon'

import { useActions } from '@/hooks/useActions'

const LogOutButton: FC = () => {
	const { logOut } = useActions()

	const logoutHandler = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		logOut()
	}

	return (
		<li>
			<a onClick={logoutHandler}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	)
}

export default LogOutButton
