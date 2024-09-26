# React + TypeScript + Vite + Storybook

- [React + TypeScript + Vite + Storybook](#react--typescript--vite--storybook)
  - [Prerequisites](#prerequisites)
    - [Git hooks](#git-hooks)
    - [Emmet](#emmet)
    - [Storybook](#storybook)
      - [storybook/addon-designs](#storybookaddon-designs)
      - [Embedding Figma designs via Figspec](#embedding-figma-designs-via-figspec)

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

#### storybook/addon-designs

[A Storybook addon that embed Figma](https://storybook.js.org/addons/@storybook/addon-designs) or websites in the addon panel for better design-development workflow.

```sh
 npx install @storybook/addon-designs
```

#### Embedding Figma designs via Figspec

You can embed Figma files or frames with enhanced spec viewer ([Figspec](https://storybookjs.github.io/addon-designs/?path=/docs/docs-figma-figspec-readme--docs)) with figspec type. The addon calls Figma API with provided Figma Token and renders your Figma files or frames using Figspec components with the result.

```js
export const myStory = () => <MyComponent />;

myStory.parameters = {
  design: {
    type: "figspec",
    url: "<YOUR_FIGMA_ITEM_URL>",
    accessToken: "<YOUR_FIGMA_ACCESS_TOKEN>",
  },
};
```

Figma Personal [Access Token](https://www.figma.com/developers/api#access-tokens).

```sh
 STORYBOOK_FIGMA_ACCESS_TOKEN=xxxx npm run storybook
```
