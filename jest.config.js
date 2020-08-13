module.exports = {
  roots: ['<rootDir>/tests'],
  testRegex: 'tests/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@solutions(.*)$': '<rootDir>/src/solutions$1',
  },
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
};
