import { IMovie } from '@/shared/interfaces/movie.interface'

export interface ISlider extends Pick<IMovie, '_id' | 'title' | 'bigPoster'> {
	subTitle?: string
	link: string
}

export interface ISlide {
	_id: string
	bigPoster: string
	title: string
	subTitle: string
	link: string
}
