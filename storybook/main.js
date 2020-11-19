module.exports = {
  webpackFinal(config, options) {
    config = options.nuxtStorybookConfig.webpackFinal(config, options)
    // add your awesome
    return config;
  },
  addons: ["@storybook/addon-knobs/register", {
    name: '@storybook/addon-essentials',
    options: {
      actions: false,
    }
  }],
  stories: [ "../components/**/*.stories.js", "../slices/**/*.stories.js"]
}