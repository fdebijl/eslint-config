# eslint-config
Shared eslint config for all my JS/TS projects

## Installation

```sh
npm install -D @fdebijl/eslint-config @eslint/js typescript-eslint eslint
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

