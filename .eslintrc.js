module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  plugins: ["html", "prettier"],
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "prettier/standard",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      // eslint校验不成功后，error或2则报错，warn或1则警告，off或0则⽆提示
      "error",
      {
        singleQuote: true,
        semi: true, //结束是否加分号
        printWidth: 160, //每行最长字符
      },
    ],
    indent: [2, 2, { SwitchCase: 1 }],
    eqeqeq: [2, "always"],
    "no-undef": 0,
    "no-unexpected-multiline": 2,
    "no-unused-vars": 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 6,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/standard",
    "prettier",
    "@vue/prettier",
    "@vue/typescript",
  ],
};
