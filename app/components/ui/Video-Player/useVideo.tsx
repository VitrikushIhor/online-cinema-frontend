import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IVideoElement } from '@/shared/interfaces/videoPlayer-interface'

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [currentTime, setCurrentTime] = useState<number>(0)
	const [videoTime, setVideoTime] = useState<number>(0)
	const [progress, setProgress] = useState<number>(0)

	useEffect(() => {
		if (videoRef.current?.duration) {
			setVideoTime(videoRef.current?.duration)
		}
	}, [videoRef.current?.duration])

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	const forward = () => {
		if (videoRef.current) {
			videoRef.current.currentTime += 15
		}
	}
	const revert = () => {
		if (videoRef.current) {
			videoRef.current.currentTime -= 15
		}
	}

	const fullScreen = () => {
		const video = videoRef.current
		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		}
	}

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((video.currentTime / videoTime) * 100)
		}
		video.addEventListener('timeupdate', updateProgress)
		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoTime])

	useEffect(() => {
		const handelKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					revert()
					break
				case '':
					{
						e.preventDefault()
						toggleVideo()
					}
					break
				case 'f':
					fullScreen()
					break
				default:
					return
			}
		}
		document.addEventListener('keydown', handelKeyDown)
		return () => {
			document.removeEventListener('keydown', handelKeyDown)
		}
	}, [toggleVideo])

	return useMemo(
		() => ({
			videoRef,
			actions: {
				toggleVideo,
				revert,
				forward,
				fullScreen,
			},
			video: {
				isPlaying,
				currentTime,
				progress,
				videoTime,
			},
		}),
		[currentTime, isPlaying, progress, toggleVideo, videoTime]
	)
}
