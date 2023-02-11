import dynamic from 'next/dynamic'
import { FC } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'

import useOutside from '@/hooks/useOutside'

import styles from './DropDownMenu.module.scss'

export const Dropdown: FC<{ menu: IMenu; toggleMenu: () => void }> = ({
	menu: { items, title },
	toggleMenu,
}) => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const toggleDropdown = () => {
		setIsShow(!isShow)
	}
	const toggleDropdown2 = () => {
		setIsShow(!isShow)
		toggleMenu()
	}

	const DynamicAuthItems = dynamic(
		() => import('@/components/layout/Navigation/MenuContainer/auth/AuthItems'),
		{ ssr: false }
	)

	return (
		<div ref={ref} className={styles.dropdown}>
			<div
				className={`${styles.dropdownHeader} ${
					isShow ? `${styles.active}` : ''
				}`}
				onClick={toggleDropdown}
			>
				{title}
				{isShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</div>
			<div className={`${styles.dropdownBody} ${isShow && `${styles.open}`}`}>
				{items.map((item) => (
					<MenuItem
						toggleDropdown={toggleDropdown2}
						item={item}
						key={item.title}
					/>
				))}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</div>
		</div>
	)
}
