# Preview

Web - http://web-ionutbostan.vercel.app/

Docs - http://docs-ionutbostan.vercel.app/

# Step by step monorepo setup

## 1. Start from the turborepo boilarplate running

`npx create-turbo@latest`

Set the project name and choose yarn as package manager.

## 2. Remove docs and web projects from apps

`rm -rf apps/docs`

`rm -rf apps/web`

`rm packages/tsconfig/nextjs.json`

## 3. Add vite-react project to apps

`cd apps`

`yarn create vite`

Add tsconfig dependencie to `package.json`

```
  "devDependencies": {
    "tsconfig": "*",
    ...
  }

```

Return to the monorepo root path and install the node dependencie

`cd ..`

`yarn install`

Remove `tsconfig.node.json` from the new vite project. And chagne `tsconfig.json` with:

```
{
  "extends": "tsconfig/vite.json",
  "include": ["src"]
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

Create a new vite.json file to `packages/tsconfig/`

```
{
  "extends": "tsconfig/base.json",
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ESNext", "DOM"],
    "sourceMap": true,
    "resolveJsonModule": true,
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  },
  "exclude": ["node_modules"]
}
```

Try the project running

`yarn dev`

## 4. Add storybook

`cd apps`

`yarn create vite` naming docs the new project

`cd docs`

`npx sb init --builder @storybook/builder-vite`

Remove node_modules folder from the docs folder

`rm -rf node_modules`

Return to the root folder and install the dependencies

`cd ../..`

`yarn install`

Add the following script to the root package.json file

```
"scripts": {
  "storybook": "turbo run storybook",
  ...
}
```

Add the same command to the turbo.json

```
"pipeline": {
  ...
  "storybook": {
    "cache": false
  }
}

```

Run the storybook project with

`yarn storybook`

The first time you may need to close the process and start again.

Add storybook-static to .gitignore

```
#storybook
storybook-static
```

## 5. Setup turborepo remote cache

Authenticate the Turborepo CLI with your Vercel account:

`npx turbo login`

Next, link your Turborepo to your remote cache:

`npx turbo link`

# Turborepo starter

This is an official Yarn v1 starter turborepo.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
