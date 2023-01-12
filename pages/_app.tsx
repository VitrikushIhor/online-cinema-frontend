import type { AppProps } from 'next/app'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

import MainProvider from '../app/providers/MainProvider'
import '../styles/globals.scss'

export default function App({
	Component,
	pageProps,
}: AppProps & TypeComponentAuthFields) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
