import ActorList from '@/screens/admin/actors/ActorList'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const ActorsList: NextPageAuth = () => {
	return <ActorList />
}

ActorsList.isAdmin = true
export default ActorsList
