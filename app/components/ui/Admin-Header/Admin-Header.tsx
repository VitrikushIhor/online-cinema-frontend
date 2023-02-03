import { ChangeEvent, FC } from 'react'

import Button from '@/ui/Form-Elements/Button'
import SearchField from '@/ui/Search-Field/SearchField'

import styles from './AdminHeader.module.scss'

interface IAdminHeader {
	onClick?: () => void
	searchTerm?: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({
	searchTerm,
	handleSearch,
	onClick,
}) => {
	return (
		<div className={styles.header}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{onClick && (
				<Button className={styles.button} onClick={onClick}>
					Create New
				</Button>
			)}
		</div>
	)
}

export default AdminHeader
