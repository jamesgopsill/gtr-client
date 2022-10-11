// https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
export default {
	rootDir: "__tests__",
	preset: "ts-jest",
	testEnvironment: "node",
	extensionsToTreatAsEsm: [".ts"],
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	testTimeout: 15000
};
