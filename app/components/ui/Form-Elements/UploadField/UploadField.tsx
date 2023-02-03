import Image from 'next/image'
import {FC} from 'react'

import {useUpload} from '@/ui/Form-Elements/UploadField/useUpload'
import {IUploadField} from '@/ui/Form-Elements/field-interface'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import styles from './UploadFiled.module.scss'

const IUploadField: FC<IUploadField> = ({
style,
placeholder,
onChange,
folder,
value,
isNoImage = false,
error,
}) => {
	const {uploadImage, isLoading} = useUpload(onChange, folder)
	return (
		<div className={styles.uploadField} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadImage}/>
					{error && <div className={styles.errorUpload}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className={styles.loader}/>
						) : (
							value && <Image src={value} alt="a" layout="fill" unoptimized/>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default IUploadField
