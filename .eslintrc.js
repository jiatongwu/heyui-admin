 module.exports = {
  root: true,
   env: {
     browser: true,
     es6: true
   },
   "parserOptions": {
     "ecmaVersion": 6,
     "sourceType": "module"
   },
   "globals": {
     "WEBPACK_DEBUG": false,
     "request": false,
     "require": false,
     "import": false,
     "log": false,
     "Utils": false,
     "$": false,
     "Vue": false,
     "HeyUI": false
   },
   "plugins": [
     "html",
     "vue"
   ],
   "rules": {
     "vue/no-parsing-error": [2, {
       "x-invalid-end-tag": false
     }],
     "no-underscore-dangle": [
       "error", {
         "allow": [
           "_status",
           "_msg",
           "_body"
         ]
       }
     ],
     "prefer-arrow-callback": [
       "off", {
         "allowNamedFunctions": false,
         "allowUnboundThis": true
       }
     ],
     "prefer-const": [
       "off"
     ],
     "eqeqeq": [
       "off"
     ],
     "no-param-reassign": [
       "off"
     ],
     "max-len": [
       "error",
       { "code": 300 }
     ],
     "no-plusplus": [
       "error", {
         "allowForLoopAfterthoughts": true
       }
     ],
     "no-restricted-syntax": [
       "off",
       "ForInStatement",
       "ForOfStatement"
     ],
     "semi-spacing": [
       "off"
     ],
     "semi": [
       "off"
     ],
     "padding-blocks": [
       "off"
     ],
     "operator-assignment": [
       "off"
     ],
     "quotes": [
       "off"
     ],
     "comma-dangle": [
       "off", {
         "arrays": "never",
         "objects": "never",
         "imports": "never",
         "exports": "never",
         "functions": "never"
       }
     ],
     "func-names": "off",
     "spaced-comment": "off",
     "consistent-return": "off",
     "radix": "off",
     "new-cap": "off"
   },
   "settings": {
     "import/resolver": "webpack"
   }
 }
