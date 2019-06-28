import { CompileMetadataResolver } from "@angular/compiler";
import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

/**
 * Use this to speed up your angular test suite. Normally when you call `TestBed.compileComponents()`, it recompiles all the configured components even if it has compiled them before in a previous test. AoT compilation would be a great fix, but is not well supported/documented for tests yet. This function fills the gap by precompiling the components as if by AoT and setting up `TestBed` to use them.
 *
 * ```ts
 * // let's assume `AppModule` declares or imports a `HelloWorldComponent`
 * precompileForTests([AppModule]);
 *
 * describe("AppComponent", () => {
 *   it("says hello", async () => {
 *     TestBed.configureTestingModule({ declarations: [HelloWorldComponent] });
 *     await TestBed.compileComponents(); // <- this line is faster
 *     const fixture = TestBed.createComponent(HelloWorldComponent);
 *     expect(fixture.nativeElement.textContent).toContain("Hello, world!");
 *   });
 * });
 * ```
 *
 * Note that this uses `TestBed.initTestEnvironment` to set up the precompiled components, so you will not be able to use it yourself at the same time.
 */
export function precompileForTests(modules: any[], skipModules: any[] = []) {
  beforeAll(async () => {
    TestBed.configureTestingModule({ imports: modules });
    await TestBed.compileComponents();

    // technique modeled from https://github.com/angular/angular/blob/11325bad4ab786a07e52ff380c00622fda11c0b7/packages/core/test/linker/jit_summaries_integration_spec.ts#L83
    const metadataResolver = TestBed.get(
      CompileMetadataResolver,
    ) as CompileMetadataResolver;

    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting(),
      () =>
        extractAotSummaries(metadataResolver, modules, new Set(skipModules)),
    );
  });
}

function extractAotSummaries(
  metadataResolver: CompileMetadataResolver,
  modules: any[],
  skipModules: Set<any>,
): any[] {
  return modules.map((module) => () =>
    extractAotSummaries0(metadataResolver, module, skipModules),
  );
}

function extractAotSummaries0(
  metadataResolver: CompileMetadataResolver,
  module: any,
  skipModules: Set<any>,
) {
  if (skipModules.has(module)) {
    return [];
  }
  skipModules.add(module);

  const moduleMetadata = metadataResolver.getNgModuleMetadata(module)!;
  return [
    metadataResolver.getNgModuleSummary(module),
    () =>
      moduleMetadata.declaredDirectives.map((directive) =>
        metadataResolver.getDirectiveSummary(directive.reference),
      ),
    () =>
      moduleMetadata.declaredPipes.map((pipe) =>
        metadataResolver.getPipeSummary(pipe.reference),
      ),
    () =>
      extractAotSummaries(
        metadataResolver,
        moduleMetadata.importedModules.map(
          (importedModule) => importedModule.type.reference,
        ),
        skipModules,
      ),
  ];
}
