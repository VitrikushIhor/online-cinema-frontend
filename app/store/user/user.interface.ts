import { IUser } from '@/shared/interfaces/user.interface'

export interface IUserState extends IUser {}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		isAdmin: boolean
	}
}
