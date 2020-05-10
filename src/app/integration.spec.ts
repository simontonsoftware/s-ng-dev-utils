import {
  createSpyObject,
  expectCallsAndReset,
  expectSingleCallAndReset,
  expectType,
  marbleTest,
  precompileForTests,
  trimLeftoverStyles,
} from "s-ng-dev-utils";

describe("s-ng-dev-utils", () => {
  it("has createSpyObject()", () => {
    createSpyObject(Date);
  });

  it("has expectCallsAndReset()", () => {
    const spy = jasmine.createSpy();
    spy();
    expectCallsAndReset(spy, []);
  });

  it("has expectSingleCallAndReset()", () => {
    const spy = jasmine.createSpy();
    spy();
    expectSingleCallAndReset(spy);
  });

  it("has expectType()", () => {
    expectType<number>(0);
  });

  it(
    "has marbleTest",
    marbleTest(({ cold, expectObservable }) => {
      expectObservable(cold("|")).toBe("|");
    }),
  );

  describe("precompileForTests()", () => {
    precompileForTests([]);

    it("exists", () => {
      expect().nothing();
    });
  });

  it("has trimLeftoverStyles()", () => {
    trimLeftoverStyles();
  });
});
