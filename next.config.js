/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const runtimeCaching = require('next-pwa/cache.js')

const config = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	images: {
		domains: ['cloudinary.com', 'res.cloudinary.com'],
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `https://online-cinema-api.onrender.com/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `https://online-cinema-api.onrender.com/uploads/:path*`,
			},
		]
	},
}

const nextConfig = withPWA({
	dest: 'public',
	runtimeCaching,
})(config)

module.exports = nextConfig
