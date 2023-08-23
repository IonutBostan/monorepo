const {
  dirname,
  join
} = require("path");

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-interactions")],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  core: {},
  features: {
    storyStoreV7: true
  },
  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}