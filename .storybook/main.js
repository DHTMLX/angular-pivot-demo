module.exports = {
  stories: ["../src/**/*.stories.ts"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links", "@storybook/addon-notes"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts)$/,
      loader: require.resolve("awesome-typescript-loader"),
    });
    config.resolve.extensions.push(".ts");
    return config;
  },
};
