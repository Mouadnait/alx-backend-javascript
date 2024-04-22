# Project Name
**Back-end JavaScript**

## Setup

### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

## Configuration files

Add the files below to your project directory

### `package.json`

File contents

```

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js &amp;&amp; jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

### `babel.config.js`

File contents

```

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `.eslintrc.js`

File contents

```

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

### Finally…

Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

## Projects
All of the following folders are projects done during the studies:

| Project name | Description |
| ------------ | ----------- |
| [`0x00. ES6 Basics`](https://github.com/wendymunyasi/alx-backend-javascript/tree/master/0x00-ES6_basic) | It aims to learn about the basics of ES6.|
| [`0x01. ES6 Promises`](https://github.com/wendymunyasi/alx-backend-javascript/tree/master/0x01-ES6_promise) | It aims to learn about promises in **JavaScript language**.|
| [`0x02. ES6 classes`](https://github.com/wendymunyasi/alx-backend-javascript/tree/master/0x02-ES6_classes) | It aims to learn about ES6 classes.|
| [`0x03. ES6 data manipulation`](https://github.com/wendymunyasi/alx-backend-javascript/tree/master/0x03-ES6_data_manipulation) | It aims to learn about data manipulation using `map`, `filter` etc in **ES6**.|
| [`0x04. Typescript`](https://github.com/wendymunyasi/alx-backend-javascript/tree/master/0x04-TypeScript) | It aims to learn about Typescript - classes, functions etc.|
| [`0x05. NodeJS Basics`](https://github.com/wendymunyasi/alx-backend-javascript/tree/master/0x05-Node_JS_basic) | It aims to learn about the basics of **Node js**.|
| [`0x06. Unittests in JS`](https://github.com/wendymunyasi/alx-backend-javascript/tree/master/0x06-unittests_in_js) | It aims to learn about unittests in **Node js**.|


