import dynamic from 'next/dynamic'
import { FC } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'

import useOutside from '@/hooks/useOutside'

import styles from './Accordion.module.scss'

const DynamicAuthItems = dynamic(
	() => import('@/components/layout/Navigation/MenuContainer/auth/AuthItems'),
	{ ssr: false }
)

export const Accordion: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const toggleAccordion = () => {
		setIsShow(!isShow)
	}
	return (
		<div className={styles.item} ref={ref} onClick={toggleAccordion}>
			<div
				className={styles.title}
				style={{ color: `${isShow ? '#e30b13' : '#ffffff'}` }}
			>
				<div>{title}</div>
				<div className={styles.ExpandIcon}>
					{isShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
				</div>
			</div>
			{isShow && (
				<ul className={styles.AccordionContent}>
					{items.map((item: any) => (
						<MenuItem item={item} key={item.title} />
					))}
					{title === 'General' ? <DynamicAuthItems /> : null}
				</ul>
			)}
		</div>
	)
}
