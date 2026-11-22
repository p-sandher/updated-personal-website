module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'playwright-report', 'test-results', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['src/models/*.jsx', 'src/pages/Home.jsx', 'src/pages/Contact.jsx'],
      rules: {
        'react/no-unknown-property': ['error', {
          // These are Three.js properties used by React Three Fiber elements.
          ignore: [
            'position', 'intensity', 'groundColor', 'object', 'dispose',
            'geometry', 'material', 'skeleton', 'angle', 'penumbra',
            'material-transparent', 'material-opacity',
          ],
        }],
      },
    },
    {
      files: ['playwright.config.js'],
      env: { node: true },
    },
  ],
}
