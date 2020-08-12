# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v2.0.0...v2.1.0) (2020-08-12)

### Features

- add `AngularContext` ([61a30bf](https://github.com/simontonsoftware/s-ng-dev-utils/commit/61a30bf9ad6fb8c13967dd9292a908367383c9a3))
- add `ComponentContext` ([7e04f11](https://github.com/simontonsoftware/s-ng-dev-utils/commit/7e04f11990eed2b828d0188f10581c8d7716e402))

## [2.0.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v1.2.0...v2.0.0) (2020-06-26)

### ⚠ BREAKING CHANGES

- removed deprecated `expectType()`
- requires angular 10
- requires typescript 3.9

### Features

- add `createSpyObject()` ([47eaae8](https://github.com/simontonsoftware/s-ng-dev-utils/commit/47eaae89d598f8fd776825dbffb400dabfe1910a))
- add `logTimers()` ([7d7781a](https://github.com/simontonsoftware/s-ng-dev-utils/commit/7d7781a3cc67d0e7cf0470dbefafb4b15d758fd2))
- upgrade angular ([464bbb8](https://github.com/simontonsoftware/s-ng-dev-utils/commit/464bbb8932f3ead8b130d74c13ef44063e6d2ee8))

* remove `expectType()` ([de44c46](https://github.com/simontonsoftware/s-ng-dev-utils/commit/de44c46008d2b6588b7efbe1d8756dc1b20b6ead))

## [1.2.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v1.1.2...v1.2.0) (2020-05-09)

### Features

- add `trimLeftoverStyles()` ([7fe8373](https://github.com/simontonsoftware/s-ng-dev-utils/commit/7fe8373c9d7121f27347cdd07d381aa40301eee7))

### [1.1.2](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v1.1.1...v1.1.2) (2020-04-23)

### Bug Fixes

- turn off more length rules for spec files ([afa4680](https://github.com/simontonsoftware/s-ng-dev-utils/commit/afa4680fa729318641f5197cd6fc59f804a40a39))

### [1.1.1](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v1.1.0...v1.1.1) (2020-04-23)

### Bug Fixes

- include eslint in dependencies ([579b71a](https://github.com/simontonsoftware/s-ng-dev-utils/commit/579b71a2b5c2ec23a937d07a112425451c1b53b2))

## [1.1.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v1.0.0...v1.1.0) (2020-04-23)

### Features

- include eslint config for code complexity & length ([af67635](https://github.com/simontonsoftware/s-ng-dev-utils/commit/af676352652fa3d1063b5a0ec6f93c41d5d66228))

## [1.0.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v0.10.0...v1.0.0) (2020-02-08)

### ⚠ BREAKING CHANGES

- requires angular 9 & friends

### Features

- upgrade to angular 9 ([e12dce3](https://github.com/simontonsoftware/s-ng-dev-utils/commit/e12dce37c8f9756132f28ec6ccb9b6a511db1947))

### Bug Fixes

- deprecate `precompileForTests()` and make it a no-op with Ivy ([9068557](https://github.com/simontonsoftware/s-ng-dev-utils/commit/9068557ea0d151dc2b71572649a1049122bb62b2))

## [0.10.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v0.9.0...v0.10.0) (2019-07-20)

### Features

- add some support for dtslint ([ea19485](https://github.com/simontonsoftware/s-ng-dev-utils/commit/ea19485))

## [0.9.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v0.8.0...v0.9.0) (2019-06-28)

### Features

- add `precompileForTests()` ([74cbce2](https://github.com/simontonsoftware/s-ng-dev-utils/commit/74cbce2))

## [0.8.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v0.7.0...v0.8.0) (2019-06-25)

### chore

- Remove utility types. ([a6c0f75](https://github.com/simontonsoftware/s-ng-dev-utils/commit/a6c0f75))

### BREAKING CHANGES

- Removes all exported types from this library. They did not fit the spirit of "dev" utils, because they made this library a real dependency of libraries that use it

## [0.7.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v0.6.0...v0.7.0) (2019-06-15)

### Features

- add `expectCallsAndReset()` ([75cd373](https://github.com/simontonsoftware/s-ng-dev-utils/commit/75cd373))
- add `marbleTest()` ([0e57148](https://github.com/simontonsoftware/s-ng-dev-utils/commit/0e57148))

## [0.6.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v0.5.0...v0.6.0) (2019-05-19)

### Features

- `expectType()` can now compare 2 types against each other ([3f8dfa1](https://github.com/simontonsoftware/s-ng-dev-utils/commit/3f8dfa1))

## [0.5.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v0.4.0...v0.5.0) (2019-05-18)

### Features

- add `expectType()` ([2a87c05](https://github.com/simontonsoftware/s-ng-dev-utils/commit/2a87c05))

## [0.4.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v0.3.0...v0.4.0) (2019-05-18)

### Features

- add utility types ([9b47c9a](https://github.com/simontonsoftware/s-ng-dev-utils/commit/9b47c9a))

## [0.3.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v0.2.0...v0.3.0) (2019-05-18)

### Features

- Expand project concept to any dev-only dependencies ([357afb8](https://github.com/simontonsoftware/s-ng-dev-utils/commit/357afb8))
- publish a tslint config ([258828c](https://github.com/simontonsoftware/s-ng-dev-utils/commit/258828c))

### BREAKING CHANGES

- name changed to `s-ng-dev-utils`

## [0.2.0](https://github.com/simontonsoftware/s-ng-dev-utils/compare/v0.1.0...v0.2.0) (2019-05-11)

### chore

- upgrade dependencies ([db0f144](https://github.com/simontonsoftware/s-ng-dev-utils/commit/db0f144))

### BREAKING CHANGES

- requires angular 8 and typescript 3.4

# 0.1.0 (2019-04-17)

### Features

- add `expectSingleCallAndReset()` ([e7b5b13](https://github.com/simontonsoftware/s-ng-dev-utils/commit/e7b5b13))
