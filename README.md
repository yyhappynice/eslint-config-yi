## Welcome to use eslint-config-yi

[Webpage Document](https://yyhappynice.github.io/eslint-config-yi)

![ci](https://travis-ci.org/yyhappynice/eslint-config-yi.svg?branch=master)

### Install

```js
$ npm install eslint-config-yi babel-eslint -D
```

### config .eslintrc.js

```js
module.exports = {
  extends: [
    'eslint-config-yi',
  ],
  rules: {
    //Your own configuration for cover my settings
  }
}
```

### vue project .eslintrc.js

```js
module.exports = {
  extends: [
    'eslint-config-yi/vue',
  ],
  rules: {
    //Your own configuration for cover my settings
  }
}
```

### react project .eslintrc.js

```js
module.exports = {
  extends: [
    'eslint-config-yi/react',
  ],
  rules: {
    //Your own configuration for cover my settings
  }
}
```

### License

[MIT](https://github.com/yyhappynice/eslint-config-yi/blob/master/LICENSE)
