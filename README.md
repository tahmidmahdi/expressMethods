## On .eslintrc.json file contains

{
"env": {
"browser": true,
"commonjs": true,
"es2021": true,
"node": true
},
"extends": ["airbnb", "prettier"],
"parserOptions": {
"ecmaFeatures": {
"jsx": true
},
"ecmaVersion": 12
},
"plugins": ["prettier"],
"rules": {
"prettier/prettier": [
"error",
{
"singleQuote": true
}
],
"no-unused-vars": "warn",
"indent": "off",
"spaced-comment": [
"error",
"always",
{
"markers": ["/"]
}
],
"operator-linebreak": [
2,
"after",
{
"overrides": {
"?": "before"
}
}
],
"no-console": "warn",
"no-shadow": "off",
"camelcase": "off",
"consistent-return": "off",
"no-underscore-dangle": "off",
"operator-linebreak": "off"
}
}

## .vscode file contains

{
"workbench.editor.openPositioning": "last",
"workbench.editor.limit.enabled": true,
"workbench.editor.limit.value": 6
}
#   e x p r e s s M e t h o d s  
 