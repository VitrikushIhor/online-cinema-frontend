import { FC } from 'react'

import { useUsers } from '@/screens/admin/users/useUser'

import AdminHeader from '@/ui/Admin-Header/Admin-Header'
import AdminNavigation from '@/ui/Admin-Navigation/AdminNavigation'
import AdminTable from '@/ui/AdminTable/AdminTable'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'


const UserList: FC = () => {
	const { isLoading, handleSearch, data, searchTerm, mutateAsync } = useUsers()

	return (
		<Meta title={'Users'}>
			<AdminNavigation />
			<Heading title={'Users'}/>
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				headerItems={['Email', 'Date register', 'Actions']}
				isLoading={isLoading}
				removeHandler={mutateAsync}
				tableItem={data || []}
			/>
		</Meta>
	)
}

export default UserList
