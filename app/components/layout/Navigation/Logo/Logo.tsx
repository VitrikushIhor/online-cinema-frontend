import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/logo.png'

const Logo: FC = () => {
	return (
		<Link className="px-layout mb-10" href="/">
			<Image
				src={logoImage}
				alt={'LOGO'}
				width={247}
				height={34}
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
