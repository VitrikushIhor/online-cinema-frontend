import * as process from 'process'

export const accentColor = '#1DB954'
export const bgColor = '#191B1F'

export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
export const IS_PRODUCTION = process.env.REACT_APP_SERVER_URL === 'production'
