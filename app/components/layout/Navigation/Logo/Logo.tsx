import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/Logo.svg'

import styles from './Logo.module.scss'

const Logo: FC<{ toggleMenu?: () => void }> = ({ toggleMenu }) => {
	return (
		<Link className={`${styles.Logo} logo`} href="/" onClick={toggleMenu}>
			<Image src={logoImage} alt="logo" layout="fill" draggable={false} />
		</Link>
	)
}

export default Logo
