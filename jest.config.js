module.exports = {
  'setupTestFrameworkScriptFile': './testSetup.js',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  'transform': {
    '\\.(ts|tsx)$': 'ts-jest',
    '\\.(js|jsx)$': 'babel-jest',
    '\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  'modulePaths': [
    './src'
  ],
  'testMatch': [
    '**/**/*.test.+(ts|tsx|js)'
  ]
};
