import { FC } from 'react'

import Statistics from '@/screens/admin/home/Statistics/Statistics'

import AdminNavigation from '@/ui/Admin-Navigation/AdminNavigation'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

interface IAdmin {}

const Admin: FC<IAdmin> = () => {
	return (
		<Meta title={'Admin Panel'}>
			<AdminNavigation />
			<Heading title={'Some Statistics'} />
			<Statistics />
		</Meta>
	)
}
export default Admin
