import React from 'react'

import SlideArrow from '@/ui/Slider/SlideArrow/SlideArrow'

import { usePagination } from '@/hooks/usePagination'

import styles from './Pagination.module.scss'

interface IPagination {
	onPageChange: any
	totalCount: number
	siblingCount?: number
	currentPage: number
	pageSize: number
}

const Pagination = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
}: IPagination) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	})
	let lastPage = paginationRange![paginationRange!.length - 1]
	return (
		<div className={styles.arrowContainer}>
			<SlideArrow
				disabled={currentPage === 1}
				variant="left"
				clickHandler={() => onPageChange(currentPage - 1)}
			/>
			<SlideArrow
				disabled={currentPage === lastPage}
				variant="right"
				clickHandler={() => onPageChange(currentPage + 1)}
			/>
		</div>
	)
}

export default Pagination
