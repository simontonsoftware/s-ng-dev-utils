import { expectType } from "./expect-type";

describe("expectType()", () => {
  it("can check the type of a value", () => {
    expectType<number>(performance.now());
  });

  it("can check the type of another type", () => {
    expectType<string, NodeJS.Platform>();
  });
});
