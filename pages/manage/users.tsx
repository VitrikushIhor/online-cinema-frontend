import UserList from '@/screens/admin/users/UserList'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const UsersList: NextPageAuth = () => {
	return <UserList />
}

UsersList.isAdmin = true
export default UsersList
