import cn from 'classnames'
import Image from 'next/image'
import {FC} from 'react'

import {useUpload} from '@/ui/Form-Elements/UploadField/useUpload'
import {IUploadField} from '@/ui/Form-Elements/field-interface'
import SkeletonLoader from '@/ui/SkeletonLoader/SkeletonLoader'

import styles from '../Field.module.scss'

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
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadImage}/>
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full"/>
						) : (
							value && <Image src={value} alt="" layout="fill" unoptimized/>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default IUploadField
