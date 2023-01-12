import { ChangeEvent, FC } from 'react'

import AdminCreateButton from '@/ui/Admin-Button/AdminCreateButton'
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
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader
