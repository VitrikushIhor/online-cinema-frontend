import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

const CheckRole: FC<TypeComponentAuthFields & PropsWithChildren> = ({
	children,
	Component: { isAdmin, isUser },
}) => {
	const { user } = useAuth()
	const router = useRouter()
	const Children = () => <>{children}</>

	if (user?.isAdmin) return <Children />
	if (isAdmin) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}
	const isOnlyUser = user && !user.isAdmin
	if (isOnlyUser && isUser) {
		return <Children />
	} else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
