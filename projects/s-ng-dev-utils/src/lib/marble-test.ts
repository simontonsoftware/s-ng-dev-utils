import { TestScheduler } from "rxjs/testing";

// including this file in a build caused an error without this
declare global {
  interface SymbolConstructor {
    readonly observable: symbol;
  }
}

type Run = Parameters<TestScheduler["run"]>[0];
type Helpers = Parameters<Run>[0];
type Callback<T> = (
  testHelpers: Helpers & { testScheduler: TestScheduler },
) => T;

export function marbleTest<T>(callback: Callback<T>) {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
  return () =>
    testScheduler.run((helpers) => callback({ ...helpers, testScheduler }));
}
