import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/toast-error'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { errorCatch } from '../../api/api.helpers'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registrations ', 'successfully registered')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login ', 'successfully login')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
	await AuthService.logOut()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Log Out',
					'Your authorization is finished, pls sing in again'
				)
				return thunkAPI.rejectWithValue(error)
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
