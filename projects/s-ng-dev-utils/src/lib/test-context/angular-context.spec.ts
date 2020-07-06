import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  DoCheck,
  Injectable,
  Injector,
} from '@angular/core';
import { TestBed, tick } from '@angular/core/testing';
import { noop, Observable } from 'rxjs';
import { expectSingleCallAndReset } from '../spies';
import { AngularContext } from './angular-context';

@Injectable({ providedIn: 'root' })
class MemoriesService {
  constructor(private httpClient: HttpClient) {}

  getLastYearToday(): Observable<any> {
    const datetime = new Date();
    datetime.setFullYear(datetime.getFullYear() - 1);
    const date = datetime.toISOString().split('T')[0];
    return this.httpClient.get(`http://example.com/post-from/${date}`);
  }
}

describe('AngularContext', () => {
  let ctx: AngularContext;
  beforeEach(() => {
    ctx = new AngularContext();
  });

  it('sets up HttpClientTestingModule out of the box', () => {
    // WARNING! This is the example in the docs. Keep it in sync.
    ctx.startTime = new Date('2004-02-16T10:15:00.000Z');
    ctx.run(() => {
      const httpBackend = ctx.inject(HttpTestingController);
      const myService = ctx.inject(MemoriesService);

      myService.getLastYearToday().subscribe();

      httpBackend.expectOne('http://example.com/post-from/2003-02-16');
    });
    expect().nothing();
  });

  describe('.startTime', () => {
    it('controls the time at which the test starts', () => {
      ctx.startTime = new Date('2012-07-14T21:42:17.523Z');
      ctx.run(() => {
        expect(new Date()).toEqual(new Date('2012-07-14T21:42:17.523Z'));
      });
    });

    it('defaults to the current time', () => {
      const now = Date.now();
      ctx.run(() => {
        expect(Date.now()).toBeCloseTo(now, -1);
      });
    });
  });

  describe('.run()', () => {
    it('uses the fakeAsync zone', () => {
      ctx.run(() => {
        expect(tick).not.toThrow();
      });
    });

    it('defaults options to `{}`', () => {
      const spy = spyOn(ctx as any, 'init');
      ctx.run(() => {
        expectSingleCallAndReset(spy, {});
      });
    });
  });

  describe('.inject()', () => {
    it('fetches from the root injector', () => {
      ctx.run(() => {
        expect(ctx.inject(Injector)).toBe(TestBed.inject(Injector));
      });
    });
  });

  describe('.tick()', () => {
    it('defaults to not advance time', () => {
      const start = ctx.startTime.getTime();
      ctx.run(() => {
        ctx.tick();
        expect(Date.now()).toBe(start);
      });
    });

    it('defaults to advancing in milliseconds', () => {
      const start = ctx.startTime.getTime();
      ctx.run(() => {
        ctx.tick(10);
        expect(Date.now()).toBe(start + 10);
      });
    });

    it('allows specifying the units to advance', () => {
      const start = ctx.startTime.getTime();
      ctx.run(() => {
        ctx.tick(10, 'sec');
        expect(Date.now()).toBe(start + 10000);
      });
    });

    it('runs change detection even if no tasks are queued', () => {
      let changeDetectionCount = 0;

      @Component({ template: '' })
      class LocalComponent implements DoCheck {
        ngDoCheck(): void {
          ++changeDetectionCount;
        }
      }
      TestBed.overrideComponent(LocalComponent, {});

      ctx.run(() => {
        const resolver = ctx.inject(ComponentFactoryResolver);
        const factory = resolver.resolveComponentFactory(LocalComponent);
        const componentRef = factory.create(ctx.inject(Injector));
        ctx.inject(ApplicationRef).attachView(componentRef.hostView);

        expect(changeDetectionCount).toBe(0);
        ctx.tick();
        expect(changeDetectionCount).toBe(1);
      });
    });

    it('flushes micro tasks before running change detection', () => {
      let promiseResolved = false;
      let promiseResolvedBeforeChangeDetection = false;

      @Component({ template: '' })
      class LocalComponent implements DoCheck {
        ngDoCheck(): void {
          promiseResolvedBeforeChangeDetection = promiseResolved;
        }
      }
      TestBed.overrideComponent(LocalComponent, {});

      ctx.run(() => {
        const resolver = ctx.inject(ComponentFactoryResolver);
        const factory = resolver.resolveComponentFactory(LocalComponent);
        const componentRef = factory.create(ctx.inject(Injector));
        ctx.inject(ApplicationRef).attachView(componentRef.hostView);

        Promise.resolve().then(() => {
          promiseResolved = true;
        });
        ctx.tick();
        expect(promiseResolvedBeforeChangeDetection).toBe(true);
      });
    });
  });

  describe('.init()', () => {
    it('receives the options passed to .run()', () => {
      const spy = spyOn(ctx as any, 'init');
      ctx.run({ thisIsTheOne: true }, () => {
        expectSingleCallAndReset(spy, { thisIsTheOne: true });
      });
    });
  });

  describe('.verifyPostTestConditions()', () => {
    it('errs if there are unexpected http requests', () => {
      expect(() => {
        ctx.run(() => {
          ctx.inject(HttpClient).get('an unexpected URL').subscribe();
        });
      }).toThrowError(
        'Expected no open requests, found 1: GET an unexpected URL',
      );
    });
  });

  describe('.cleanUp()', () => {
    it('discards periodic tasks', () => {
      ctx.run(() => {
        setInterval(noop, 10);
      });
      expect().nothing();
    });
  });
});
