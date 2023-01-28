import { GetStaticProps, NextPage } from 'next'

import Collection, { ICollection } from '@/screens/collections/Collection'

import { GenresService } from '@/services/genres/genres.service'

import { errorCatch } from '../app/api/api.helpers'

import Error404 from './404'

const DiscoveryPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return collections ? (
		<Collection collections={collections || []} />
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenresService.getCollections()
		console.log(collections)
		return {
			props: { collections },
			revalidate: 30,
		}
	} catch (e) {
		console.log(errorCatch(e))

		return {
			props: {},
			notFound: true,
		}
	}
}

export default DiscoveryPage
