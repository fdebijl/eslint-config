# eslint-config

[![npm](https://img.shields.io/npm/v/@fdebijl/eslint-config)](https://www.npmjs.com/package/@fdebijl/eslint-config)

Shared eslint config for all my JS/TS projects

## Installation

```sh
# npm
npm install -D @fdebijl/eslint-config @eslint/js typescript-eslint eslint

# yarn
yarn add -D @fdebijl/eslint-config @eslint/js typescript-eslint eslint

# pnpm
pnpm add -D @fdebijl/eslint-config @eslint/js typescript-eslint eslint
```

## Usage

*eslint.config.mjs* (or *eslint.config.js*):
```js
import fdebijlConfig from '@fdebijl/eslint-config';

export default [
  ...fdebijlConfig
];
```

You can also extend or override rules:
```js
import fdebijlConfig from '@fdebijl/eslint-config';

export default [
  ...fdebijlConfig,
  {
    rules: {
      // Your custom rules here
      'no-console': 'error'
    }
  }
];
```

