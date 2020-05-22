/**
 * Use this in tests to do some limited type assertions.
 *
 * ```ts
 * expectType<number>(performance.now());
 * expectType<string, NodeJS.Platform>();
 * ```
 *
 * @deprecated Try [dtslint](https://github.com/Microsoft/dtslint) or [tsd](https://github.com/SamVerschueren/tsd).
 */

export function expectType<Expected, Actual extends Expected>(): void;
export function expectType<Expected>(value: Expected): void;

export function expectType(_value?: any) {
  expect().nothing();
}
