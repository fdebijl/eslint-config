import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          legacyDecorators: true
        }
      },
      globals: {
        // Node.js globals
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        console: 'readonly',
        exports: 'writable',
        global: 'readonly',
        module: 'readonly',
        process: 'readonly',
        require: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/camelcase': 0,
      'default-case-last': 1,
      'no-await-in-loop': 0,
      'no-confusing-arrow': 1,
      'no-console': 0,
      'no-eval': 2,
      'no-implied-eval': 2,
      'no-labels': 1,
      'no-plusplus': 0,
      'no-return-assign': 1,
      'no-return-await': 1,
      'no-sequences': 1,
      'no-shadow': 1,
      'no-trailing-spaces': 1,
      'object-curly-newline': 0,
      'prefer-const': 1,
      'yoda': 1,
      'quotes': ['error', 'single']
    }
  }
];
