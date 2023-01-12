import ActorEdit from '@/screens/admin/actor/ActorEdit'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const ActorEditPage: NextPageAuth = () => {
	return <ActorEdit />
}

ActorEditPage.isAdmin = true
export default ActorEditPage
