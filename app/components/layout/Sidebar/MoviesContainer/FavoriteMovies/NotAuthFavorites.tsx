import { FC } from 'react'

const NotAuthFavorites: FC<{className?:string}> = ({className}) => {
	return (
		<div className={className}>
			For viewing favorites please authorize!
		</div>
	)
}

export default NotAuthFavorites
