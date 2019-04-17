import { expectSingleCallAndReset } from "s-ng-test-utils";

describe("s-ng-test-utils", () => {
  it("has expectSingleCallAndReset()", () => {
    const spy = jasmine.createSpy();
    spy();
    expectSingleCallAndReset(spy);
  });
});
