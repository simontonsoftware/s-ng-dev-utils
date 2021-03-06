import {
  AngularContext,
  ComponentContext,
  createSpyObject,
  expectCallsAndReset,
  expectSingleCallAndReset,
  logTimers,
  marbleTest,
  precompileForTests,
  trimLeftoverStyles,
} from 's-ng-dev-utils';

describe('s-ng-dev-utils', () => {
  it('has AngularContext', () => {
    expect(AngularContext).toBeDefined();
  });

  it('has ComponentContext', () => {
    expect(ComponentContext).toBeDefined();
  });

  it('has createSpyObject()', () => {
    createSpyObject(Date);
  });

  it('has expectCallsAndReset()', () => {
    const spy = jasmine.createSpy();
    spy();
    expectCallsAndReset(spy, []);
  });

  it('has expectSingleCallAndReset()', () => {
    const spy = jasmine.createSpy();
    spy();
    expectSingleCallAndReset(spy);
  });

  it('has logTimers()', () => {
    logTimers();
  });

  it(
    'has marbleTest',
    marbleTest(({ cold, expectObservable }) => {
      expectObservable(cold('|')).toBe('|');
    }),
  );

  describe('precompileForTests()', () => {
    precompileForTests([]);

    it('exists', () => {
      expect().nothing();
    });
  });

  it('has trimLeftoverStyles()', () => {
    trimLeftoverStyles();
  });
});
