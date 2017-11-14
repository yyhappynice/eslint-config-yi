/**
 * yi-cli ESLint rule
 *
 * ESLint 4.10.0
 */

module.exports = {
  // 指定babel的解析器
  parser: 'babel-eslint',
  parserOptions: {
    // ECMAScript 版本
    ecmaVersion: 2017,
    // 支持 ECMAScript 模块
    sourceType: 'module',
    // 对象，表示你想使用的额外的语言特性:
    ecmaFeatures: {
      // 启用对实验性的 object rest/spread properties 的支持
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  // 以当前目录为根目录，它就会停止在父级目录查找 .eslintrc.js
  root: true,
  rules: {
    // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
    'for-direction': 'error',
     // 可以将 await 写在循环里，因为这样就无法同时发送多个异步请求了
    'no-await-in-loop': 'off',
    // 禁止与负零进行比较
    'no-compare-neg-zero': 'error',
    // 禁止在 if, for, while 里使用赋值语句
    'no-cond-assign': 'error',
    // 可以使用 console
    'no-console': 'off',
    // 禁止在条件中使用常量表达式, 允许在循环中使用常量表达式
    'no-constant-condition': ["error", { "checkLoops": false }],
    //在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符,正则表达式如果包含这些字符的，很有可能一个错误
    'no-control-regex': 'error',
    // 禁止使用 debugger
    'no-debugger': 'error',
    // 禁止在函数参数中出现重复名称的参数
    'no-dupe-args': 'error',
    // 禁止在对象字面量中出现重复名称的键名
    'no-dupe-keys': 'error',
    // 禁止在 switch 语句中出现重复测试表达式的 case
    'no-duplicate-case': 'error',
    // 禁止出现空代码块 允许空的catch   /* continue regardless of error */
    'no-empty': ['error', { "allowEmptyCatch": true }],
    // 禁止在正则表达式中使用空的字符集 []
    'no-empty-character-class': 'error',
    // 禁止将 catch 的第一个参数 error 重新赋值
    'no-ex-assign': 'error',
    // 可以使用多余的括号
    'no-extra-parens': 'off',
    // 禁止出现多于的分号
    'no-extra-semi': 'error',
    // 禁止将一个函数申明重新赋值
    'no-func-assign': 'error',
    //禁止在 if 内出现函数申明或使用 var 定义变量
    'no-inner-declarations': ['error', 'both'],
    // 禁止出现非法的正则表达式
    'no-invalid-regexp': 'error',
    // 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true
      }
    ],
    // 禁止将 Math 和 JSON 作为函数调用，必须作为类使用
    'no-obj-calls': 'error',
    //可以使用使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
    'no-prototype-builtins': 'off',
    // 禁止在正则表达式中出现连续的空格
    'no-regex-spaces': 'error',
    // 禁用稀疏数组
    'no-sparse-arrays': 'error',
    // 禁止在普通字符串中出现模版字符串的变量形式
    'no-template-curly-in-string': 'error',
    // 禁止出现难以理解的多行表达式
    'no-unexpected-multiline': 'error',
    // 禁止在 return, throw, break 或 continue 之后还有代码
    'no-unreachable': 'error',
    // 禁止在 finally 中出现控制流语句
    'no-unsafe-finally': 'error',
    // 禁止在 in 或 instanceof 操作符的左侧使用感叹号
    'no-unsafe-negation': 'error',
    // 使用 isNaN(foo) 而不是 foo === NaN
    'use-isnan': 'error',
    // 注释必须符合 jsdoc 的规范
    'valid-jsdoc': 'off',
    // typeof 表达式比较的对象必须是基本类型
    'valid-typeof': 'error',


    // Best Practices
    // 这些规则是关于最佳实践的，帮助你避免一些问题:

    // 有 setter 的地方必须有 getter，有 getter 的地方可以没有 setter
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false
      }
    ],
    // 数组的一些方法（map, reduce 等）的回调函数中，必须有返回值
    'array-callback-return': 'off',
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'off',
    // 在类的非静态方法中，必须存在对 this 的引用
    'class-methods-use-this': 'off',
    // 禁止函数的循环复杂度超过 20
    'complexity': ['error', { 'max': 50 }],
    // 禁止函数在不同分支返回不同类型的值
    'consistent-return': 'off',
    // if 后面必须要有 {，除非是单行 if
    'curly': ['error', 'multi-line', 'consistent'],
    // switch 语句必须有 default
    'default-case': 'off',
    // 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
    'dot-location': [
      'error',
      'property'
    ],
    // 禁止出现 foo['bar']，必须写成 foo.bar
    'dot-notation': 'off',
    // 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    // for in 内部必须有 hasOwnProperty
    'guard-for-in': 'off',
    // 禁止使用 alert
    'no-alert': 'error',
    // 禁止使用 caller 或 callee
    'no-caller': 'error',
    // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
    'no-case-declarations': 'error',
    // 禁止在正则表达式中出现没必要的转义符
    'no-div-regex': 'off',
    // 禁止在 else 内使用 return，必须改为提前结束
    'no-else-return': 'off',
    // 不允许有空函数，除非是将一个空函数设置为某个项的默认值
    'no-empty-function': [
      'error',
      {
        allow: [
          'functions',
          'arrowFunctions'
        ]
      }
    ],
    // 禁止解构中出现空 {} 或 []
    'no-empty-pattern': 'error',
    // 禁止使用 foo == null 或 foo != null，必须使用 foo === null 或 foo !== null
    'no-eq-null': 'off',
    // 禁止使用 eval
    'no-eval': 'error',
    // 禁止修改原生对象
    'no-extend-native': 'error',
    // 禁止出现没必要的 bind
    'no-extra-bind': 'error',
    // 禁止出现没必要的 label
    'no-extra-label': 'error',
    // switch 的 case 内必须有 break, return 或 throw
    'no-fallthrough': 'error',
    // 表示小数时，禁止省略 0，比如 .5
    'no-floating-decimal': 'off',
    // 禁止对全局变量赋值
    'no-global-assign': 'error',
    // 禁止使用 !! ~ 等难以理解的运算符
    'no-implicit-coercion': 'off',
    // 禁止在全局作用域下定义变量或申明函数
    'no-implicit-globals': 'off',
    // 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
    'no-implied-eval': 'error',
    // 禁止在类之外的地方使用 this
    'no-invalid-this': 'off',
    // 禁止使用 __iterator__
    'no-iterator': 'error',
    // 禁止使用 label
    'no-labels': 'error',
    // 禁止使用没必要的 {} 作为代码块
    'no-lone-blocks': 'error',
    // 禁止在循环内的函数中出现循环体条件语句中定义的变量
    'no-loop-func': 'error',
    // 禁止使用 magic numbers
    'no-magic-numbers': 'off',
    // 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          BinaryExpression: false,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    // 禁止使用 \ 来换行字符串
    'no-multi-str': 'error',
    // 禁止直接 new 一个类而不赋值
    'no-new': 'error',
    // 禁止使用 new Function
    'no-new-func': 'error',
    // 禁止使用 new 来生成 String, Number 或 Boolean
    'no-new-wrappers': 'error',
    // 禁止使用 0 开头的数字表示八进制数
    'no-octal': 'error',
    // 禁止使用八进制的转义符
    'no-octal-escape': 'error',
    // 禁止对函数的参数重新赋值
    'no-param-reassign': 'error',
    // 禁止使用 __proto__
    'no-proto': 'error',
    // 禁止重复定义变量
    'no-redeclare': 'error',
    // 禁止使用指定的对象属性
    'no-restricted-properties': 'off',
    // 禁止在 return 语句里赋值
    'no-return-assign': 'error',
    // 禁止在 return 语句里使用 await
    'no-return-await': 'error',
    // 禁止出现 location.href = 'javascript:void(0)';
    'no-script-url': 'off',
    // 禁止将自己赋值给自己
    'no-self-assign': 'error',
    // 禁止将自己与自己比较
    'no-self-compare': 'error',
    // 禁止使用逗号操作符
    'no-sequences': 'error',
    // 禁止 throw 字面量，必须 throw 一个 Error 对象
    'no-throw-literal': 'error',
    // 循环内必须对循环条件的变量有修改
    'no-unmodified-loop-condition': 'error',
    // 禁止无用的表达式
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    // 禁止出现没用的 label
    'no-unused-labels': 'error',
    // 禁止出现没必要的 call 或 apply
    'no-useless-call': 'error',
    // 禁止出现没必要的字符串连接
    'no-useless-concat': 'error',
    // 禁止出现没必要的转义
    'no-useless-escape': 'off',
    // 禁止没必要的 return
    'no-useless-return': 'off',
    // 禁止使用 void
    'no-void': 'error',
    // 禁止注释中出现 TODO 和 FIXME
    'no-warning-comments': 'off',
    // 禁止使用 with
    'no-with': 'error',
    // Promise 的 reject 中必须传入 Error 对象，而不是字面量
    'prefer-promise-reject-errors': 'error',
    // parseInt 必须传入第二个参数
    'radix': 'off',
    // async 函数中必须存在 await 语句
    'require-await': 'off',
    // var 必须在作用域的最前面
    'vars-on-top': 'off',
    // 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: true
      }
    ],
    // 必须使用 if (foo === 5) 而不是 if (5 === foo)
    'yoda': [
      'error',
      'never',
      {
        onlyEquality: true
      }
    ],

    // Strict Mode
    // 这些规则与严格模式指令有关

    'strict': [
      'error',
      'never'
    ],

    // Variables
    // 这些规则与变量声明有关：

    // 变量必须在定义的时候赋值
    'init-declarations': 'off',
    // 禁止 catch 的参数名与定义过的变量重复
    'no-catch-shadow': 'off',
    // 禁止使用 delete
    'no-delete-var': 'error',
    // 禁止 label 名称与定义过的变量重复
    'no-label-var': 'error',
    // 禁止使用指定的全局变量
    'no-restricted-globals': 'off',
    // 禁止变量名与上层作用域内的定义过的变量重复
    'no-shadow': [
      'error',
      {
        builtinGlobals: false,
        hoist: 'functions',
        allow: [
          'resolve',
          'reject',
          'done',
          'cb',
          'callback',
          'error',
          'err',
          'e'
        ]
      }
    ],
    // 禁止使用保留字作为变量名
    'no-shadow-restricted-names': 'error',
    // 禁止使用未定义的变量
    'no-undef': 'error',
    // 禁止将 undefined 赋值给变量
    'no-undefined': 'error',
    // 定义过的变量必须使用
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        caughtErrors: 'none'
      }
    ],
    // 变量必须先定义后使用
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],

    // Node.js and CommonJS
    // 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：

    // callback 之后必须立即 return
    'callback-return': 'off',
    // require 必须在全局作用域下
    'global-require': 'off',
    // callback 中的 error 必须被处理
    'handle-callback-err': 'error',
    // 禁止直接使用 Buffer
    'no-buffer-constructor': 'error',
    // 相同类型的 require 必须放在一起
    'no-mixed-requires': 'off',
    // 禁止直接 new require('foo')
    'no-new-require': 'error',
    // 禁止对 __dirname 或 __filename 使用字符串连接
    'no-path-concat': 'error',
    // 禁止使用 process.env.NODE_ENV
    'no-process-env': 'off',
    // 禁止使用 process.exit(0)
    'no-process-exit': 'off',
    // 禁止使用指定的模块
    'no-restricted-modules': 'off',
    // 禁止使用 node 中的同步的方法，比如 fs.readFileSync
    'no-sync': 'off',

    // Stylistic Issues
    // 这些规则是关于风格指南的，而且是非常主观的：

    // 配置数组的中括号内前后的换行格式
    'array-bracket-newline': 'off',
    // 强制在括号内使用空格
    'array-bracket-spacing': 'off',
    // 配置数组的元素之间的换行格式
    'array-element-newline': 'off',
    // 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
    'block-spacing': [
      'error',
      'always'
    ],
    // if 与 else 的大括号风格必须一致
    'brace-style': 'off',
    // 变量名必须是 camelcase 风格的
    'camelcase': 'off',
    // 注释的首字母必须大写
    'capitalized-comments': 'off',
    // 对象的最后一个属性末尾必须有逗号
    'comma-dangle': 'off',
    // 逗号前禁止有空格，逗号后必须要有空格
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    // 禁止在行首写逗号
    'comma-style': [
      'error',
      'last'
    ],
    // 用作对象的计算属性时，中括号内的首尾禁止有空格
    'computed-property-spacing': ['error', 'never'],
    // 限制 this 的别名
    'consistent-this': 'off',
    // 文件最后一行必须有一个空行
    'eol-last': 'off',
    // 函数名和执行它的括号之间禁止有空格
    'func-call-spacing': [
      'error',
      'never'
    ],
    // 函数赋值给变量的时候，函数名必须与变量名一致
    'func-name-matching': 'off',
    // 函数必须有名字
    'func-names': 'off',
    // 必须只使用函数申明或只使用函数表达式
    'func-style': 'off',
    // 禁止使用指定的标识符
    'id-blacklist': 'off',
    // 限制变量名长度
    'id-length': 'off',
    // 限制变量名必须匹配指定的正则表达式
    'id-match': 'off',
    // 一个缩进必须用2个空格替代
    'indent': ['error', 2],
    // jsx 中的属性必须用双引号
    'jsx-quotes': 'off',
    // 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      }
    ],
    // 关键字前后必须有空格
    'keyword-spacing': 'off',
    // 单行注释必须写在上一行
    'line-comment-position': 'off',
    // 限制换行符为 LF 或 CRLF
    'linebreak-style': 'off',
    // 注释前后必须有空行
    'lines-around-comment': 'off',
    // 代码块嵌套的深度禁止超过 5 层
    'max-depth': [
      'error',
      5
    ],
    // 限制一行的长度
    'max-len': 'off',
    // 限制一个文件最多的行数
    'max-lines': 'off',
    // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
    'max-nested-callbacks': [
      'error',
      3
    ],
    // 函数的参数禁止超过 7 个
    'max-params': [
      'error',
      6
    ],
    // 限制函数块中的语句数量
    'max-statements': 'off',
    // 限制一行中的语句数量
    'max-statements-per-line': 'off',
    // 三元表达式必须得换行
    'multiline-ternary': 'off',
    // new 后面的类名必须首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    // new 后面的类必须有小括号
    'new-parens': 'error',
    // 链式调用必须换行
    'newline-per-chained-call': 'off',
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁止使用位运算
    'no-bitwise': 'off',
    // 禁止使用 continue
    'no-continue': 'off',
    // 禁止在代码后添加内联注释
    'no-inline-comments': 'off',
    // 禁止 else 中只有一个单独的 if
    'no-lonely-if': 'off',
    // 禁止混用不同的操作符
    'no-mixed-operators': 'off',
    // 禁止混用空格和缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 禁止连续赋值，比如 a = b = c = 5
    'no-multi-assign': 'off',
    // 禁止出现超过8行的连续空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 8,
        maxEOF: 8,
        maxBOF: 8
      }
    ],
    // 禁止 if 里面有否定的表达式
    'no-negated-condition': 'off',
    // 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
    'no-nested-ternary': 'off',
    // 禁止直接 new Object
    'no-new-object': 'error',
    // 禁止使用 ++ 或 --
    'no-plusplus': 'off',
    // 禁止使用特定的语法
    'no-restricted-syntax': 'off',
    // 禁止使用 tabs
    'no-tabs': 'off',
    // 禁止使用三元表达式
    'no-ternary': 'off',
    // 禁止行尾有空格
    'no-trailing-spaces': 'error',
    // 禁止变量名出现下划线
    'no-underscore-dangle': 'off',
    // 必须使用 !a 替代 a ? false : true
    'no-unneeded-ternary': 'off',
     // 禁止属性前有空格，比如 foo. bar()
     'no-whitespace-before-property': 'error',
     // 禁止 if 后面不加大括号而写两行代码
     'nonblock-statement-body-position': [
        'error',
        'beside',
        {
          overrides: {
            while: 'below'
          }
        }
      ],
      // 大括号内的首尾有换行
      'object-curly-newline': 'off',
      // 强制在花括号中使用一致的空格
      'object-curly-spacing': 'off',
      // 对象字面量内的属性每行必须只有一个
      'object-property-newline': 'off',
      // 强制函数中的变量在一起声明或分开声明
      'one-var': 'off',
      // 变量申明必须每行一个
      'one-var-declaration-per-line': 'off',
      // 必须使用 x = x + y 而不是 x += y
      'operator-assignment': 'off',
      // 强制操作符使用一致的换行符风格
      'operator-linebreak': 'off',
      // 代码块首尾必须要空行
      'padded-blocks': 'off',
      // 限制语句之间的空行规则，比如变量定义完之后必须要空行
      'padding-line-between-statements': 'off',
      // 对象字面量的键名禁止用引号括起来
      'quote-props': 'off',
      // 必须使用单引号，禁止使用双引号
      'quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true
        }
      ],
      // 必须使用 jsdoc 风格的注释
      'require-jsdoc': 'off',
      // 结尾必须无分号
      'semi': ['error', 'never'],
      // 强制分号前后有空格
      'semi-spacing': 'off',
      // 分号位置
      'semi-style': 'off',
      // 对象字面量的键名必须排好序
      'sort-keys': 'off',
      // 变量申明必须排好序
      'sort-vars': 'off',
      // if, function 等的大括号之前必须要有空格，比如 if (a) {
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'ignore',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      // 禁止或强制圆括号内的空格
      'space-in-parens': 'off',
      // 操作符左右必须有空格，比如 let sum = 1 + 2;
      'space-infix-ops': 'error',
      // new, typeof 等后面必须有空格，++, -- 等禁止有空格
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false
        }
      ],
      // 注释前后必须有空格
      'spaced-comment': 'off',
      // case 的冒号前禁止有空格，冒号后必须有空格
      'switch-colon-spacing': [
        'error',
        {
          after: true,
          before: false
        }
      ],
      // 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
      'template-tag-spacing': 'off',
      // 文件开头禁止有 BOM
      'unicode-bom': ['error', 'never'],
      // 正则表达式必须有括号包起来
      'wrap-regex': 'off',

      // ECMAScript 6
      // 这些规则只与 ES6 有关, 即通常所说的 ES2015：

      // 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
      'arrow-body-style': 'off',
      // 箭头函数只有一个参数的时候，必须加括号
      'arrow-parens': 'off',
      // 箭头函数的箭头前后必须有空格
      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true
        }
      ],
      // constructor 中必须有 super
      'constructor-super': 'off',
      // generator 的 * 前面有空格，后面禁止有空格
      'generator-star-spacing': 'error',
      // 禁止对定义过的 class 重新赋值
      'no-class-assign': 'error',
      // 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
      'no-confusing-arrow': 'off',
      // 禁止对使用 const 定义的常量重新赋值
      'no-const-assign': 'error',
      // 禁止重复定义类
      'no-dupe-class-members': 'error',
      // 禁止重复 import 模块
      'no-duplicate-imports': 'error',
      // 禁止使用 new 来生成 Symbol
      'no-new-symbol': 'error',
      // 禁止 import 指定的模块
      'no-restricted-imports': 'off',
      // 禁止在 super 被调用之前使用 this 或 super
      'no-this-before-super': 'error',
      // 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
      'no-useless-computed-key': 'error',
      // 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
      'no-useless-constructor': 'off',
      // 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
      'no-useless-rename': 'off',
      // 禁止出现 var
      'no-var': 'error',
      // 必须使用 a = {b} 而不是 a = {b: b}
      'object-shorthand': 'off',
      // 必须使用箭头函数作为回调
      'prefer-arrow-callback': 'off',
      // 申明后不再被修改的变量必须使用 const 来申明
      'prefer-const': 'off',
      // 必须使用解构
      'prefer-destructuring': 'off',
      // 必须使用 0b11111011 而不是 parseInt('111110111', 2)
      'prefer-numeric-literals': 'off',
      // 必须使用 ...args 而不是 arguments
      'prefer-rest-params': 'off',
      // 必须使用 ... 而不是 apply，比如 foo(...args)
      'prefer-spread': 'off',
      // 必须使用模版字面量而不是字符串连接
      'prefer-template': 'off',
      // generator 函数内必须有 yield
      'require-yield': 'error',
      // ... 的后面禁止有空格
      'rest-spread-spacing': ['error', 'never'],
      // import 必须按规则排序
      'sort-imports': 'off',
      // 创建 Symbol 时必须传入参数
      'symbol-description': 'error',
      // ${name} 内的首尾禁止有空格
      'template-curly-spacing': ['error', 'never'],
      // yield* 后面必须要有空格
      'yield-star-spacing': ['error', 'before']
  }
}