// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  // required to lint *.vue files
  plugins: [
    'html',
    'import',
    'react'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': './deploy/config/webpack.base.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .js extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    'import/no-duplicates': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'class-methods-use-this': ['error', {
      'exceptMethods': [
        'componentDidMount',
        'componentDidUpdate',
        'componentWillMount',
        'componentWillReceiveProps',
        'componentWillUnmount',
        'componentWillUpdate',
        'render',
        'shouldComponentUpdate',
      ]
    }],
    'no-param-reassign': ['error', { 'props': false }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  }
}