import {FC} from 'react';
import {ISeo} from "@/ui/Meta/meta.interface";
import {useRouter} from "next/router";
import Head from "next/head";
import {siteName, titleMerge} from "../../../config/seo.config";
import {onlyText} from "@/utils/string/clearText";

const Meta: FC<ISeo> = ({title, image, description, children}) => {
	const {asPath} = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`
	return (
		<>
			<Head>
				<title itemProp="headLine">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={onlyText(description, 152)}
						/>
						<link rel='canonical' href={currentUrl}/>
						<meta property='og:locale' content='en'/>
						<meta property='og:title' content={titleMerge(title)}/>
						<meta property='og:url' content={currentUrl}/>
						<meta property='og:image' content={image}/>
						<meta property='og:site_name' content={siteName}/>
						<meta
							property='og:description'
							content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta name="robots" content="noindex, nofollow"/>
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;
