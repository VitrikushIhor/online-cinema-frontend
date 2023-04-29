import Profile from '@/screens/profile/Profile'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}
ProfilePage.isUser = true
export default ProfilePage
