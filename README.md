# osrs-botmaker-typescript

Created to ease the programming strain of making [Botmaker](https://theplug.runelite.plus) scripts.

## Donate
ETH/ERC-20: `0x6dEb51c4f253781d9354af86C3c0205eFf75Bf52`
BNB/BEP-20: `0x40D84bA476FDEc7485F33eB3b82286366d0022aa`
TRX/TRC-20: `TN6t6ZZSz1JQwXtFoo7sbmQAYXiw8JNeCt`
BTC: `bc1qetcfw0pj4t3harm8glx8p0jkyeayhcu60emzzc`

## Contribute
There are several outlined improvements in [Github Issues](https://github.com/ChandlerFerry/osrs-botmaker-typescript/issues).

Take one on, submit a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)!

## Usage
### Install
1. `git clone https://github.com/ChandlerFerry/osrs-botmaker-typescript`
2. https://pnpm.io/installation
3. `pnpm i`
4. `npm i -g nx typescript ts-patch`
5. Install VSCode Extensions (ESLint, TypeScript, Prettier, Prettier-ESLint, Jest, Nx Console)

### Build
1. `nx run-many -t=build`
2. View output in `dist/packages/.../index.js`

### Test
- `nx run api:test`
- `nx run cakestall:test`

## FAQ

### How do I write TypeScript?
This repository is set up to be opinionated and force your hand.

Install the suggested VSCode extensions and listen to what VSCode tells you.

Start by creating a `.ts` files and writing the same exact JavaScript code you are familiar with.

ESLint and TypeScript will tell you when you're doing something improper. Follow the guidance, you will write better code over time.


### How do I learn more about TypeScript?
[Execute Program](https://www.executeprogram.com/courses/typescript) is the most valuable interactive course I've found (16 free lessons).

[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) is a valuable 'raw' resource.

### Do I need to write my own .d.ts files?
NO! `.d.ts` files are meant for external dependencies that do not have typings, such as Runelite & Sox.

All `.ts` files automatically generate declaration files.

### How do I make ESLint/TSC more strict?
1. Update `tsconfig.base.json`:
    - ```"extends": ["@tsconfig/node20/tsconfig"]```
    - ->
    - ```"extends": ["@tsconfig/strictest/tsconfig", "@tsconfig/node20/tsconfig"],```
2. Update `eslint.config.js`:
    - ```...__configs.recommendedTypeChecked```
    - ->
    - ```...__configs.strictTypeChecked```

### Why are we using a monorepo?
Botmaker requires scripts to be compiled down to rhino 1.7.14, then bundled.

This presents a challenge that is easily overcome by separating scripts into bundle targets and leveraging monorepo architecture to combine bundle targets when necessary.

### How does the build pipeline work?
1. Integrated Nx Monorepo uses `nx graph` to identify dependencies
    - Integrated paths fetched from `tsconfig.base.json`'s `compilerOptions.paths`
    - Package dependencies based on e.g. `import {...} from "@packages/cakestall"`
2. Nx executes `build` with dependsOn `^build` to build dependencies in reverse order
3. During build, Nx passes the files to the Rollup Bundler
4. Rollup fetches the required files, and manipulates them based on the `rollup.cjs`
5. During Rollup bundling, cleanup() is called to remove all comments
6. On Rollup bundle output, getBabelOutputPlugin() is called with a target of `rhino: '1.7.14'` to compile the final bundle to our required target

Resources:
- [Monorepo - Nx](https://nx.dev/)
    - Modern solution to sustainable monorepos in TypeScript (still extremely time consuming though!)
- [Bundler - Rollup](https://rollupjs.org/)
    - Used solely because it supports Babel, preferred is [esbuild](https://esbuild.github.io/)
- [Compiler - Babel](https://babeljs.io/)
    - Used solely because it supports Rhino 1.7.14, preferred is [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html)