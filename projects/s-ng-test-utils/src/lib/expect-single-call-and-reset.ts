export function expectSingleCallAndReset(spy: jasmine.Spy, ...params: any[]) {
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(...params);
  spy.calls.reset();
}
