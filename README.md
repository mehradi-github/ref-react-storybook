# React + TypeScript + Vite + Storybook

- [React + TypeScript + Vite + Storybook](#react--typescript--vite--storybook)
  - [Prerequisites](#prerequisites)
    - [Git hooks](#git-hooks)
    - [Emmet](#emmet)
    - [Storybook](#storybook)

## Prerequisites

### Git hooks

Install husky and lint-staged via [Git hooks](https://prettier.io/docs/en/install#git-hooks):

```sh
npm config set legacy-peer-deps true
# npm init @eslint/config@latest
npm i -D --save-exact prettier
npm i -D husky lint-staged
npx husky init
node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"

```

### [Emmet](https://github.com/mehradi-github/ref-react#emmet)

### Storybook

```sh
npx storybook@latest init

npm i styled-components

```
