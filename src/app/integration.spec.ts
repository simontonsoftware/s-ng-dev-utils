import { expectSingleCallAndReset } from "s-ng-dev-utils";

describe("s-ng-dev-utils", () => {
  it("has expectSingleCallAndReset()", () => {
    const spy = jasmine.createSpy();
    spy();
    expectSingleCallAndReset(spy);
  });
});
