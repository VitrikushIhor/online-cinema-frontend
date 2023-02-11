import { useEffect, useState } from 'react'

export function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	const [windowSize, setWindowSize] = useState<any>({
		width: undefined,
	})

	useEffect(() => {
		// only execute all the code below in client side
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize(window.innerWidth)
		}

		// Add event listener
		window.addEventListener('resize', handleResize)

		// Call handler right away so state gets updated with initial window size
		handleResize()

		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize)
	}, []) // Empty array ensures that effect is only run on mount
	return windowSize
}
