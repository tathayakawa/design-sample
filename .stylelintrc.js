module.exports = {
  "extends": [
    "stylelint-config-recommended-scss",
    "stylelint-config-recess-order"
  ],
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  "ignoreFiles": [
    "public/**/*.css"
  ],
  "rules": {
    "font-family-no-missing-generic-family-keyword": [
        true,
        {
          "ignoreFontFamilies": [
            "Material Symbols Outlined"
          ]
        }
    ],
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "function",
          "if",
          "for",
          "each",
          "include",
          "mixin",
          "content",
          "return",
          "extend",
          "use"
        ]
      }
    ],
  },
  "overrides": [
    {
      "files": ["**/*.scss"],
      "customSyntax": "postcss-scss"
    }
  ]
};
