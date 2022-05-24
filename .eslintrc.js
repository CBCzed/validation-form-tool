module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    requireConfigFile: false,
    sourceType: 'module',
  },
  rules: {
		'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'eqeqeq': ['error', 'smart'],
    'func-names': ['warn', 'as-needed'], // img.onload = function () {} // need name ?
    'no-unused-vars': ['error', { args: 'none' }],
    'no-duplicate-imports': 'error',
    'space-before-function-paren': ['warn', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	}
}