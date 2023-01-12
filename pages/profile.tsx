import Profile from '@/screens/prtofile/Profile'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}
ProfilePage.isUser = true
export default ProfilePage
