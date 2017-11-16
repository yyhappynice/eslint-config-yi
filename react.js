/**
 * ESLint rule react
 *
 * eslint-plugin-react@7.4.0
 */

module.exports = {
  extends: [
    './index.js',
  ],
  plugins: [
    'react'
  ],
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use, default to "createReactClass"
      pragma: 'React', // React 的指令名称，默认为 'React'
      version: '16.0' // React 的版本号，默认为最新的稳定版
    }
  },
  rules: {
    // 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头
    'react/boolean-prop-naming': 'off',
    // 一个 defaultProps 必须有对应的 propTypes
    'react/default-props-match-prop-types': 'off',
    // 组件必须有 displayName 属性
    'react/display-name': 'off',
    // 禁止在自定义组件中使用一些指定的 props
    'react/forbid-component-props': 'off',
    // 禁止使用一些指定的 elements
    'react/forbid-elements': 'off',
    // 禁止使用一些指定的 propTypes
    'react/forbid-prop-types': 'off',
    // 禁止直接使用别的组建的 propTypes
    'react/forbid-foreign-prop-types': 'off',
    // 禁止使用数组的 index 作为 key
    'react/no-array-index-key': 'off',
    // 禁止使用 children 做 props
    'react/no-children-prop': 'error',
    // 禁止使用 dangerouslySetInnerHTML
    'react/no-danger': 'off',
    // 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children
    'react/no-danger-with-children': 'error',
    // 禁止使用已废弃的 api
    'react/no-deprecated': 'error',
    // 禁止在 componentDidMount 里面使用 setState
    'react/no-did-mount-set-state': 'off',
    // 禁止在 componentDidUpdate 里面使用 setState
    'react/no-did-update-set-state': 'error',
    // 禁止直接修改 this.state
    'react/no-direct-mutation-state': 'error',
    // 禁止使用 findDOMNode
    'react/no-find-dom-node': 'error',
    // 禁止使用 isMounted
    'react/no-is-mounted': 'error',
    // 禁止在一个文件创建两个组件
    'react/no-multi-comp': 'off',
    // 禁止在 PureComponent 中使用 shouldComponentUpdate
    'react/no-redundant-should-component-update': 'error',
    // 禁止使用 ReactDOM.render 的返回值
    'react/no-render-return-value': 'error',
    // 禁止使用 setState
    'react/no-set-state': 'off',
    // 禁止拼写错误
    'react/no-typos': 'error',
    // 禁止使用字符串 ref
    'react/no-string-refs': 'off',
    // 禁止在组件的内部存在未转义的 >, ", ' 或 }
    'react/no-unescaped-entities': 'error',
    // 禁止出现 HTML 中的属性，如 class
    'react/no-unknown-property': 'error',
    // 禁止出现未使用的 propTypes
    'react/no-unused-prop-types': 'off',
    // 定义过的 state 必须使用
    'react/no-unused-state': 'off',
    // 禁止在 componentWillUpdate 中使用 setState
    'react/no-will-update-set-state': 'error',
    // 必须使用 Class 的形式创建组件
    'react/prefer-es6-class': 'off',
    // 必须使用 pure function
    'react/prefer-stateless-function': 'off',
    // 组件必须写 propTypes
    'react/prop-types': 'off',
    // 出现 jsx 的地方必须 import React
    'react/react-in-jsx-scope': 'off',
    // 非 required 的 prop 必须有 defaultProps
    'react/require-default-props': 'off',
    // 组件必须有 shouldComponentUpdate
    'react/require-optimization': 'off',
    // render 方法中必须有返回值
    'react/require-render-return': 'error',
    // 组件内没有 children 时，必须使用自闭和写法
    'react/self-closing-comp': 'off',
    // 组件内方法必须按照一定规则排序
    'react/sort-comp': 'error',
    // propTypes 的熟悉必须按照字母排序
    'react/sort-prop-types': 'off',
    // style 属性的取值必须是 object
    'react/style-prop-object': 'error',
    // HTML 中的自闭和标签禁止有 children
    'react/void-dom-elements-no-children': 'error',
    // 布尔值的属性必须显式的写 someprop={true}
    'react/jsx-boolean-value': 'off',
    // 自闭和标签的反尖括号必须与尖括号的那一行对齐
    'react/jsx-closing-bracket-location': 'off',
    // 结束标签必须与开始标签的那一行对齐
    'react/jsx-closing-tag-location': 'off',
    // 大括号内前后禁止有空格
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        attributes: {
          allowMultiline: true
        },
        children: true,
        spacing: {
          objectLiterals: 'never'
        }
      }
    ],
    // props 与 value 之间的等号前后禁止有空格
    'react/jsx-equals-spacing': ['error', 'never'],
    // 限制文件后缀
    'react/jsx-filename-extension': 'off',
    // 第一个 prop 必须得换行
    'react/jsx-first-prop-new-line': 'off',
    // handler 的名称必须是 onXXX 或 handleXXX
    'react/jsx-handler-names': 'off',
    // jsx 的 children 缩进必须为四个空格
    'react/jsx-indent': 'off',
    // jsx 的 props 缩进必须为四个空格
    'react/jsx-indent-props': 'off',
    // 数组中的 jsx 必须有 key
    'react/jsx-key': 'off',
    // 限制每行的 props 数量
    'react/jsx-max-props-per-line': 'off',
    // jsx 中禁止使用 bind
    'react/jsx-no-bind': 'off',
    // 禁止在 jsx 中使用像注释的字符串
    'react/jsx-no-comment-textnodes': 'off',
    // 禁止出现重复的 props
    'react/jsx-no-duplicate-props': 'error',
    // 禁止在 jsx 中出现字符串
    'react/jsx-no-literals': 'off',
    // 禁止使用 target="_blank"
    'react/jsx-no-target-blank': 'off',
    // 禁止使用未定义的 jsx elemet
    'react/jsx-no-undef': 'error',
    // 禁止使用 pascal 写法的 jsx
    'react/jsx-pascal-case': 'error',
    // props 必须排好序
    'react/jsx-sort-props': 'off',
    // jsx 的开始和闭合处禁止有空格
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never'
      }
    ],
    // jsx 文件必须 import React
    'react/jsx-uses-react': 'error',
    // 定义了的 jsx element 必须使用
    'react/jsx-uses-vars': 'error',
    // 多行的 jsx 必须有括号包起来
    'react/jsx-wrap-multilines': 'off'
  }
}