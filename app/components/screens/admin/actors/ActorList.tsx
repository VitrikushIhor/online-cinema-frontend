import { FC } from 'react'

import { useActors } from '@/screens/admin/actors/useActor'

import AdminHeader from '@/ui/Admin-Header/Admin-Header'
import AdminNavigation from '@/ui/Admin-Navigation/AdminNavigation'
import AdminTable from '@/ui/AdminTable/AdminTable'
import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

const ActorList: FC = () => {
	const {
		isLoading,
		handleSearch,
		data,
		searchTerm,
		mutateAsync,
		createAsync,
	} = useActors()

	return (
		<Meta title={'Actor'}>
			<AdminNavigation />
			<Heading title={'Actors'} />
			{/*@ts-ignore*/}
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				headerItems={['Name', 'Count Movies', 'Actions']}
				isLoading={isLoading}
				removeHandler={mutateAsync}
				tableItem={data || []}
			/>
		</Meta>
	)
}

export default ActorList
