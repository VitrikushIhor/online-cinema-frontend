import React, { FC, useMemo, useState } from 'react'

import Gallery from '@/ui/Gallery/Gallery'
import { IGalleryItem } from '@/ui/Gallery/gallery-interface'
import Heading from '@/ui/Heading/Heading'
import SubHeading from '@/ui/Heading/SubHeading'
import Meta from '@/ui/Meta/Meta'
import Pagination from '@/ui/Pagination/Pagination'
import Slider from '@/ui/Slider/Slider'
import { ISlide } from '@/ui/Slider/slider-interface'

import { useWindowSize } from '@/hooks/useWindowSize'

import styles from './Home.module.scss'

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	const size = useWindowSize()
	let PageSize = size <= 600 ? 3 : 5

	const [currentPage, setCurrentPage] = useState(1)
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize
		const lastPageIndex = firstPageIndex + PageSize
		return trendingMovies.slice(firstPageIndex, lastPageIndex)
	}, [currentPage, trendingMovies, PageSize])

	return (
		<>
			<Meta
				title="Watch movies online"
				description="Watch MovieApp movies and TV shows online or stream right to your browser."
			>
				<Heading title="Watch movies online" className={styles.heading} />

				{slides.length && <Slider slides={slides} />}

				<div className="my-10">
					<SubHeading title="Trending now" className={styles.subHeading} />
					{trendingMovies.length && (
						<>
							<Gallery items={currentTableData} />
							<Pagination
								currentPage={currentPage}
								totalCount={trendingMovies.length}
								pageSize={PageSize}
								onPageChange={(page: number) => setCurrentPage(page)}
							/>
						</>
					)}
				</div>

				<div>
					<SubHeading title="Best actors" className={styles.subHeading} />
					{actors.length && <Gallery items={actors.slice(0, PageSize)} />}
				</div>
			</Meta>
		</>
	)
}

export default Home
