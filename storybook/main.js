module.exports = {
  webpackFinal (config, options) {
    config = options.nuxtStorybookConfig.webpackFinal(config, options)
    // extend config
    return config
  },
  stories: ['../components/**/*.stories.@(ts|js)','../components/**/*.stories.js','../slices/**/*.stories.js'],
  addons: ['@storybook/addon-knobs/register']
}
