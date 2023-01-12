import UserEdit from '@/screens/admin/user/UserEdit'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const UserEditPage: NextPageAuth = () => {
	return <UserEdit />
}

UserEditPage.isAdmin = true
export default UserEditPage
