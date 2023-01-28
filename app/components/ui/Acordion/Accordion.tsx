import dynamic from 'next/dynamic'
import { FC, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import MenuItem from '@/components/layout/Navigation/MenuContainer/MenuItem'
import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'

import styles from './Accordion.module.scss'

const DynamicAuthItems = dynamic(
	() => import('@/components/layout/Navigation/MenuContainer/auth/AuthItems'),
	{ ssr: false }
)

export const Accordion: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	const [show, setShow] = useState(false)
	const toggleAccordion = () => {
		setShow(!show)
	}
	return (
		<div className={styles.item} onClick={toggleAccordion}>
			<div
				className={styles.title}
				style={{ color: `${show ? '#e30b13' : '#ffffff'}` }}
			>
				<div>{title}</div>
				<div className={styles.ExpandIcon}>
					{show ? <IoIosArrowUp /> : <IoIosArrowDown />}
				</div>
			</div>
			{show && (
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
