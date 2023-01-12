import { IUser } from '@/shared/interfaces/user.interface'

export interface IUserEditInput extends Omit<IUser, '_id' | 'createdAt'> {}
