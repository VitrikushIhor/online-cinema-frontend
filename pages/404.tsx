import { FC } from 'react'

import Heading from '@/ui/Heading/Heading'
import Meta from '@/ui/Meta/Meta'

const PageNotFound: FC = () => {
	return (
		<Meta title={'Page not Found'}>
			<Heading title={'404 - Page not found'} className="text-3xl pt-28" />
		</Meta>
	)
}

export default PageNotFound
