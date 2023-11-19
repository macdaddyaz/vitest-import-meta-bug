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
