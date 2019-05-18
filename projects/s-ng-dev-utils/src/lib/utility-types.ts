// basic unions
export type Primitive = number | boolean | string;
export type Existant = Primitive | object;
export type Nil = null | undefined;
export type Falsey = Nil | false | 0 | ""; // | NaN

// objects
export type ObjectWith<T> = Record<string, T>;
export type NumberKeyedObject<T = unknown> = Record<number, T>;

// functions
export type Function0<R> = () => R;
export type Function1<T1, R> = (t1: T1) => R;
export type Function2<T1, T2, R> = (t1: T1, t2: T2) => R;
export type Function3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
export type Function4<T1, T2, T3, T4, R> = (
  t1: T1,
  t2: T2,
  t3: T3,
  t4: T4,
) => R;
export type Transformer<T> = Function1<T, T>;
