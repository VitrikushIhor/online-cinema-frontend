/** @type {import('next').NextConfig} */
const nextConfig = {
	// distDir: 'build',
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `https://online-cinema-api.onrender.com/api/:path*`,
				// destination: `http://localhost:5001/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `https://online-cinema-api.onrender.com/uploads/:path*`,
				// destination: `http://localhost:5001/api/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
