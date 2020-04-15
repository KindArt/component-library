module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  modulePaths: ['<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
