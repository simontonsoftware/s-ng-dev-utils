import {
  Existant,
  expectCallsAndReset,
  expectSingleCallAndReset,
  expectType,
  Falsey,
  Function0,
  Function1,
  Function2,
  Function3,
  Function4,
  marbleTest,
  Nil,
  NumberKeyedObject,
  ObjectWith,
  Primitive,
  Transformer,
} from "s-ng-dev-utils";

describe("s-ng-dev-utils", () => {
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

  it("has utility types", () => {
    expectType<Primitive>(9);
    expectType<Existant>(0);
    expectType<Nil>(null);
    expectType<Falsey>(0);
    expectType<ObjectWith<number>>({ a: 1 });
    expectType<NumberKeyedObject>({ 1: "a" });
    expectType<Function0<number>>(() => 0);
    expectType<Function1<number, number>>((n1: number) => n1);
    expectType<Function2<number, number, number>>(
      (n1: number, n2: number) => n1 + n2,
    );
    expectType<Function3<number, number, number, number>>(
      (n1: number, n2: number, n3: number) => n1 + n2 + n3,
    );
    expectType<Function4<number, number, number, number, number>>(
      (n1: number, n2: number, n3: number, n4: number) => n1 + n2 + n3 + n4,
    );
    expectType<Transformer<number>>((num: number) => num + 1);
  });
});
