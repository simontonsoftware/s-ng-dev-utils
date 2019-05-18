import { expectSingleCallAndReset } from "s-ng-dev-utils";
import {
  Existant,
  Falsey,
  Function0,
  Function1,
  Function2,
  Function3,
  Function4,
  Nil,
  NumberKeyedObject,
  ObjectWith,
  Primitive,
  Transformer,
} from "../../projects/s-ng-dev-utils/src/lib/utility-types";

describe("s-ng-dev-utils", () => {
  it("has expectSingleCallAndReset()", () => {
    const spy = jasmine.createSpy();
    spy();
    expectSingleCallAndReset(spy);
  });

  it("has utility types", () => {
    const p: Primitive = 9;
    const e: Existant = 0;
    const n: Nil = null;
    const f: Falsey = 0;
    const o: ObjectWith<number> = { a: 1 };
    const no: NumberKeyedObject = { 1: "a" };
    const f0: Function0<number> = () => 0;
    const f1: Function1<number, number> = (n1: number) => 0;
    const f2: Function2<number, number, number> = (n1: number, n2: number) => 0;
    const f3: Function3<number, number, number, number> = (
      n1: number,
      n2: number,
      n3: number,
    ) => 0;
    const f4: Function4<number, number, number, number, number> = (
      n1: number,
      n2: number,
      n3: number,
      n4: number,
    ) => 0;
    const t: Transformer<number> = (num: number) => num + 1;
  });
});
