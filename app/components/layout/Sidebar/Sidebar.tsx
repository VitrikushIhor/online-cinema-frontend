import { FC } from 'react'

import MoviesContainer from '@/components/layout/Sidebar/MoviesContainer/MoviesContainer'
import Search from '@/components/layout/Sidebar/Search/Search'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
