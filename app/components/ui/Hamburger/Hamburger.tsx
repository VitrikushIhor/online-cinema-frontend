import { FC, useState } from 'react'

import Burger from '@/ui/Hamburger/Burger/Burger'
import BurgerMenu from '@/ui/Hamburger/BurgerMenu/BurgerMenu'

const Hamburger: FC = () => {
	const [open, setOpen] = useState(false)
	return (
		<div>
			<Burger open={open} setOpen={setOpen} />
			<BurgerMenu open={open} setOpen={setOpen} />
		</div>
	)
}

export default Hamburger
