# eslint-plugin-typescript

LifeOmic config for typescript-eslint

## Installation

Next, install `@lifeomic/eslint-plugin-typescript`:

```
yarn add -D @lifeomic/eslint-plugin-typescript --save-dev
```

## Usage

Add `typescript` to the plugins section of your `.eslintrc` configuration file.
You can omit the `eslint-plugin-` prefix:

```js
{
  plugins: ['@lifeomic/typescript'];
}
```

Add the recommended config and rules to your `extends`:

```js
{
    extends: ['plugin:@lifeomic/typescript/recommended']
}

```

There's an optional `reactNative` config which provides some helpers for
reactNative.

**NOTE:** These make use of the `@typescript-eslint/eslint-plugin-tslint`
plugin, which _does not like_ to be run on non-typescript files, or files not
included in a project. That means if you have js files, or ts files outside of a
helper included in your lint config, you can do something like this:

```js
const lifeomicTypescript = require('@lifeomic/eslint-plugin-typescript');
const reactNative = lifeomicTypescript.configs.reactNative;

...

  overrides: [
    {
      // src files
      files: ['src/**/*.{ts,tsx}', 'typings/**/*.ts'],
      excludedFiles: [
        'src/**/*.test.{tsx,ts}',
        'src/{testUtils,utils/__mocks__}/**/*'
      ],
      env: {
        node: false,
        browser: true
      },
      rules: {
          ...reactNative.rules // only add these rules to source files
      }
    }
  ]

...
```
