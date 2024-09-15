module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // For TypeScript files
    '^.+\\.(js|jsx|mjs|cjs)$': 'babel-jest',  // Use babel-jest for JS/JSX
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',  // Mock CSS imports
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

