import React, { FC, useEffect, useMemo, useState } from 'react'

import Gallery from '@/ui/Gallery/Gallery'
import Heading from '@/ui/Heading/Heading'
import SubHeading from '@/ui/Heading/SubHeading'
import Meta from '@/ui/Meta/Meta'
import Pagination from '@/ui/Pagination/Pagination'
import Slider from '@/ui/Slider/Slider'

import { useWindowSize } from '@/hooks/useWindowSize'

import { IGalleryItem } from '@/shared/interfaces/gallery-interface'
import { ISlide } from '@/shared/interfaces/slider-interface'

import styles from './Home.module.scss'

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	const size = useWindowSize()
	const [pageSize, setPageSize] = useState<number>(0)
	const [currentPage, setCurrentPage] = useState<number>(1)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setPageSize(size <= 1024 ? 4 : 6)
		}
	}, [size])

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * pageSize
		const lastPageIndex = firstPageIndex + pageSize
		return trendingMovies.slice(firstPageIndex, lastPageIndex)
	}, [currentPage, trendingMovies, pageSize])

	return (
		<>
			<Meta
				title="Watch movies online"
				description="Watch MovieApp movies and TV shows online or stream right to your browser."
			>
				<Heading title="Watch movies online" />

				{slides.length && <Slider slides={slides} />}

				<div className={styles.info}>
					<SubHeading title="Trending now" />
					{trendingMovies.length && (
						<>
							<Gallery items={currentTableData} />
							<Pagination
								currentPage={currentPage}
								totalCount={trendingMovies.length}
								pageSize={pageSize}
								onPageChange={(page: number) => setCurrentPage(page)}
							/>
						</>
					)}
				</div>

				<div>
					<SubHeading title="Best actors" />
					{actors.length && <Gallery items={actors.slice(0, pageSize)} />}
				</div>
			</Meta>
		</>
	)
}

export default Home
