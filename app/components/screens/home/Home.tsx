import React, { FC, useMemo, useState } from 'react'

import Gallery from '@/ui/Gallery/Gallery'
import { IGalleryItem } from '@/ui/Gallery/gallery-interface'
import Heading from '@/ui/Heading/Heading'
import SubHeading from '@/ui/Heading/SubHeading'
import Meta from '@/ui/Meta/Meta'
import Pagination from '@/ui/Pagination/Pagination'
import Slider from '@/ui/Slider/Slider'
import { ISlide } from '@/ui/Slider/slider-interface'

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}

let PageSize = 5
const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	const [currentPage, setCurrentPage] = useState(1)

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize
		const lastPageIndex = firstPageIndex + PageSize
		return trendingMovies.slice(firstPageIndex, lastPageIndex)
	}, [currentPage, trendingMovies])

	return (
		<>
			<Meta
				title="Watch movies online"
				description="Watch MovieApp movies and TV shows online or stream right to your browser."
			>
				<Heading
					title="Watch movies online"
					className="text-gray-500 mb-8 text-xl"
				/>

				{slides.length && <Slider slides={slides} />}

				<div className="my-10">
					<SubHeading title="Trending now" />
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
					<SubHeading title="Best actors" />
					{actors.length && <Gallery items={actors.slice(0, 5)} />}
				</div>
			</Meta>
		</>
	)
}

export default Home
