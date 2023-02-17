import { FC } from 'react'

import AdminTableHeader from '@/ui/AdminTable/AdminTableHeader'
import AdminTableItem from '@/ui/AdminTable/AdminTableItem'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import { ITableItem } from '@/shared/interfaces/admint-table-interface'

import styles from './AdminTable.module.scss'

interface IAdminTable {
	tableItem: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (userId: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	tableItem,
	headerItems,
	removeHandler,
	isLoading,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader count={1} height={48} className={styles.loader} />
			) : tableItem.length ? (
				tableItem.map((tableItem) => (
					<AdminTableItem
						key={tableItem._id}
						tableItem={tableItem}
						removeHandler={removeHandler}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	)
}

export default AdminTable
