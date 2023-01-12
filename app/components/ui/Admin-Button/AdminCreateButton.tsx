import { FC } from 'react'

import Button from '@/ui/Form-Elements/Button'

interface IAdminCreateButton {
	onClick: () => void
}

const AdminCreateButton: FC<IAdminCreateButton> = ({ onClick }) => {
	return <Button onClick={onClick}>Create New</Button>
}

export default AdminCreateButton
