# Project Name

**0x06. Unittests in JS**

## Resources

**Read or watch:**

- [Mocha documentation](https://mochajs.org/ "Mocha documentation")
- [Chai](https://www.chaijs.com/api/ "Chai")
- [Sinon](https://sinonjs.org/ "Sinon")
- [Express](https://expressjs.com/en/guide/routing.html "Express")
- [Request](https://www.npmjs.com/package/request "Request")
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs "How to Test NodeJS Apps using Mocha, Chai and SinonJS")

## Requirements

### JavaScript Scripts

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All your files will be interpreted on Ubuntu 20.04 LTS using `node` (version 14.x).
- All your files should end with a new line.
- The `main.js` files are used to test your functions, but you don’t have to push them to your repo.
- Your code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that will be provided.
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error.
- All of your functions must be exported.

## Project Description

Learn How to use Mocha to write a test suite.
How to use different assertion libraries (Node or Chai).
How to present long test suites.
When and how to use spies.
When and how to use stubs.
What are hooks and when to use them.
Unit testing with Async functions.
How to write integration tests with a small node server.

## More Info

### Install Node 14

```
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

### Install Jest, Babel, and ESLint

```
$ npm install --save-dev jest
$ npm install --save-dev babel-jest @babel/core @babel/preset-env
$ npm install --save-dev eslint
```

**Find the configuration files `package.json`, `babel.config.js` and `.eslintrc.js` in the project directory. Run `npm install` when you have the `package.json`**
