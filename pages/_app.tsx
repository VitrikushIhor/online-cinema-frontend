import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

import MainProvider from '../app/providers/MainProvider'
import '../styles/globals.scss'
import '../styles/nprogress.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
