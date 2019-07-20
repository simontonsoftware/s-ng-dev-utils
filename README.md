[![Build Status](https://travis-ci.org/simontonsoftware/s-ng-dev-utils.svg?branch=master)](https://travis-ci.org/simontonsoftware/s-ng-dev-utils) [![Coverage Status](https://coveralls.io/repos/github/simontonsoftware/s-ng-dev-utils/badge.svg?branch=master)](https://coveralls.io/github/simontonsoftware/s-ng-dev-utils?branch=master)

## API Documentation

To quickly see what is available, see the [api documentation](https://simontonsoftware.github.io/s-ng-dev-utils/typedoc).

## Installation

```
yarn add -D s-ng-dev-utils
```

## TSLint Config

This library also comes with a predefined `tslint.json` that extends the angular cli's config to disable rules that conflict with Prettier (via [tslint-config-prettier](https://github.com/prettier/tslint-config-prettier)), with these exceptions that we have found useful:

- Allows using the `Function` type. Some of our libraries deal a lot with utilities that operate on functions, and using this type is very handy.
- Allows prefixing variables with `_`. This is useful e.g. when overriding a method in a way that does not use all its parameters. We uses typescript's "noUnusedParameters" option, which gives an error with unused parameters unless their names are prefixed with `_`.
- Downgrades [no-non-null-assertion](https://palantir.github.io/tslint/rules/no-non-null-assertion/) to a warning. While we believe using `!` should be avoided when reasonable, we find that sometimes it just makes sense.

To use it, change your `tslint.json` to:

```json
{
  "extends": "s-ng-dev-utils/tslint"
}
```

## DTSLint

There are a couple aids in setting up [`dtslint`](https://github.com/microsoft/dtslint)

- It will be installed automatically along with this library.
- There are some tslint rules that cause problems - disable them by using this as your `tslint.json` file within your type testing directory:
  ```json
  {
    "extends": ["dtslint/dtslint.json", "s-ng-dev-utils/tslint.dtslint.json"]
  }
  ```
