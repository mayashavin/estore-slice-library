import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  // ...themes.dark,
  base: "dark",

  // colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',

  // // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: "PrismStore Components",
  // brandUrl: 'https://prismic',
  brandImage:
    "https://res.cloudinary.com/mayashavin/image/upload/v1601967336/coding_angels/white_logo_transparent_background.png"
});

addons.setConfig({
  theme
});
