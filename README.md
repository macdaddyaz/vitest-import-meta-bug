# Demonstrate bug in `importMeta`

Install dependencies:

```shell
yarn
```

Transpile the TypeScript:

```shell
yarn run tsc --project ./tsconfig.json
```

```
yarn run v1.22.20
$ /Users/ericmcintyre/Development/src/vitest-import-meta-bug/node_modules/.bin/tsc --project ./tsconfig.json
src/main.ts:1:23 - error TS2688: Cannot find type definition file for 'vitest/importmeta'.

1 /// <reference types="vitest/importMeta" />
                        ~~~~~~~~~~~~~~~~~


Found 1 error in src/main.ts:1

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

_See also:_ https://github.com/vitejs/vite/issues/13309

# Demonstrate bug with in-source tests

Install dependencies:

```shell
yarn
```

Run tests:

```shell
yarn test
```

```
yarn run v1.22.20
$ vitest

 DEV  v1.0.0-beta.5 /Users/ericmcintyre/Development/src/vitest-import-meta-bug

 ❯ src/other.ts (0)
 ✓ src/main.ts (1)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/other.ts [ src/other.ts ]
Error: No test found in suite src/other.ts
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯-

 Test Files  1 failed | 1 passed (2)
      Tests  1 passed (1)
   Start at  21:04:28
   Duration  459ms (transform 51ms, setup 0ms, collect 27ms, tests 5ms, environment 0ms, prepare 624ms)


 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
```

Note that `vite.config.ts` configures Vitest to allow no tests:

```typescript
export default defineConfig({
    test: {
        include: [
            "src/**/*.{js,ts}",
        ],
        exclude: [
            "src/**/*.d.ts",
        ],
        passWithNoTests: true,
    },
    define: {
        'import.meta.vitest': 'undefined',
    },
});
```
