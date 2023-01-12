import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

const AuthProvider: FC<TypeComponentAuthFields & PropsWithChildren> = ({
	children,
	Component: { isAdmin, isUser },
}) => {
	const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })
	const { user } = useAuth()
	const { logOut, checkAuth } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) {
			checkAuth()
		}
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) {
			logOut()
		}
	}, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps
	return !isAdmin && !isUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isAdmin, isUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
