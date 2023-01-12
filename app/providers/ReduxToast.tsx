import { FC } from 'react'
import ReduxToastrLib from 'react-redux-toastr'

const ReduxToast: FC = () => {
	return (
		<ReduxToastrLib
			newestOnTop={true}
			progressBar={true}
			preventDuplicates={true}
			closeOnToastrClick={true}
			timeOut={4000}
			transitionIn={'fadeIn'}
			transitionOut={'fadeOut'}
		/>
	)
}

export default ReduxToast
