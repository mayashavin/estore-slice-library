module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["plugin:vue/recommended", "plugin:prettier/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-undef": 0,
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 4,
        multiline: {
          max: 4,
          allowFirstLine: false
        }
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always"
        }
      }
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      { registeredComponentsOnly: false }
    ]
  },
  overrides: [
    {
      files: "*.vue",
      rules: {
        "prettier/prettier": [
          "error",
          {
            parser: "vue"
          }
        ]
      }
    }
  ]
};