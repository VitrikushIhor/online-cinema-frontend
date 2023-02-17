import { FC } from 'react'

import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

const PageNotFound: FC = () => {
	return (
		<Meta title={'Page not Found'}>
			<Heading title={'404 - Page not found'} />
		</Meta>
	)
}

export default PageNotFound
