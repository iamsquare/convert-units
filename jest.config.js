module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/', '/lib/', '/coverage'],
  setupFilesAfterEnv: ['jest-extended']
};
