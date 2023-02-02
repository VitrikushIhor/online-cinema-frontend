const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

	moduleNameMapper: {
		'^@/components/(.*)$': '<rootDir>app/components/$1',
		'^@/utils/(.*)$': '<rootDir>app/utils/$1',
		'^@/pages/(.*)$': '<rootDir>/pages/$1',
	},
	testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
