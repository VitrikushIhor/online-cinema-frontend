import { FC } from 'react'

import AdminActions from '@/ui/AdminTable/AdminActions/AdminActions'
import { IAdminTableItem } from '@/ui/AdminTable/admint-table-interface'

import styles from '../AdminTable/AdminTable.module.scss'

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, removeHandler }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value,index) => (
				<div key={value + index}>{value}</div>
			))}
			<AdminActions
				editUrl={tableItem.editUrl}
				removeHandler={() => removeHandler(tableItem._id)}
			/>
		</div>
	)
}

export default AdminTableItem
