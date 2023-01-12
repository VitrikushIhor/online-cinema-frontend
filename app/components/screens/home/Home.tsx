import React, { FC } from 'react'

import Gallery from '@/ui/Gallery/Gallery'
import { IGalleryItem } from '@/ui/Gallery/gallery-interface'
import Heading from '@/ui/Heading/Heading'
import SubHeading from '@/ui/Heading/SubHeading'
import Meta from '@/ui/Meta/Meta'
import Slider from '@/ui/Slider/Slider'
import { ISlide } from '@/ui/Slider/slider-interface'

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
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
					{trendingMovies.length && <Gallery items={trendingMovies} />}
				</div>

				<div>
					<SubHeading title="Best actors" />
					{actors.length && <Gallery items={actors} />}
				</div>
			</Meta>
		</>
	)
}

export default Home
