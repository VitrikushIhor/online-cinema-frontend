import { TypeMaterialIconName } from '@/shared/interfaces/icon.interface'

export interface IMenuItem {
	icon: TypeMaterialIconName
	title: string
	link: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
