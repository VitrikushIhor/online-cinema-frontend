import Admin from '@/screens/admin/home/Admin'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isAdmin = true
export default AdminPage
