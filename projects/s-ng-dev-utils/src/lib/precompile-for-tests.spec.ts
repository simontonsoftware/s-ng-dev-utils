import { Component, Injectable, NgModule } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { precompileForTests } from "./precompile-for-tests";

@Injectable({ providedIn: "root" })
class ProvidedInRoot {
  counter = 0;
}

@Injectable()
class ProvidedInModule {
  counter = 0;
}

@Injectable()
class ProvidedInComponent {
  counter = 0;
}

@Component({
  template: "I exist! Created {{ providedInComponent.counter }} time(s).",
  providers: [ProvidedInComponent],
})
class AComponent {
  constructor(public providedInComponent: ProvidedInComponent) {
    ++providedInComponent.counter;
  }
}

@NgModule({ declarations: [AComponent], providers: [ProvidedInModule] })
class AModule {}

describe("precompileForTests()", () => {
  precompileForTests([AModule]);

  async function initFullModule() {
    TestBed.configureTestingModule({ imports: [AModule] });
    await TestBed.compileComponents();
  }

  /////////

  it("allows components", async () => {
    await initFullModule();
    const fixture = TestBed.createComponent(AComponent);
    expect(fixture.nativeElement.textContent).toContain("I exist!");
  });

  it("allows declaring only a component", async () => {
    TestBed.configureTestingModule({ declarations: [AComponent] });
    await TestBed.compileComponents();
    const fixture = TestBed.createComponent(AComponent);
    expect(fixture.nativeElement.textContent).toContain("I exist!");
  });

  for (let i = 0; i < 3; ++i) {
    it(`allows clearing service state between tests, iteration ${i}`, async () => {
      await initFullModule();
      const providedInRoot = TestBed.get(ProvidedInRoot);
      const providedInModule = TestBed.get(ProvidedInModule);
      const fixture = TestBed.createComponent(AComponent);
      fixture.detectChanges();

      expect(providedInRoot.counter).toBe(0);
      expect(providedInModule.counter).toBe(0);
      expect(fixture.nativeElement.textContent).toContain("Created 1 time(s).");

      ++providedInRoot.counter;
      ++providedInModule.counter;
    });
  }
});
