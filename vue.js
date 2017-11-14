/**
 * ESLint rule vue
 *
 * eslint-plugin-vue@2.1.0
 */

module.exports = {
  extends: [
    './index.js',
    'plugin:vue/base'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    // 禁止重复的二级键名
    'vue/no-dupe-keys': 'off',
    // 禁止出现语法错误
    'vue/no-parsing-error': 'error',
    // 禁止覆盖保留字
    'vue/no-reservered-keys': 'error',
    // 组件的 data 属性的值必须是一个函数
    'vue/no-shared-component-data': 'off',
    // 禁止 <template> 使用 key 属性
    'vue/no-template-key': 'off',
    // render 函数必须有返回值
    'vue/require-render-return': 'error',
    // prop 的默认值必须匹配它的类型
    'vue/require-valid-default-prop': 'off',
    // 计算属性必须有返回值
    'vue/return-in-computed-property': 'error',
    // template 的根节点必须合法
    'vue/valid-template-root': 'error',
    // v-bind 指令必须合法
    'vue/valid-v-bind': 'error',
    // v-cloak 指令必须合法
    'vue/valid-v-cloak': 'error',
    // v-else-if 指令必须合法
    'vue/valid-v-else-if': 'error',
    // v-else 指令必须合法
    'vue/valid-v-else': 'error',
    // v-for 指令必须合法
    'vue/valid-v-for': 'error',
    // v-html 指令必须合法
    'vue/valid-v-html': 'error',
    // v-if 指令必须合法
    'vue/valid-v-if': 'error',
    // v-model 指令必须合法
    'vue/valid-v-model': 'error',
    // v-on 指令必须合法
    'vue/valid-v-on': 'error',
    // v-once 指令必须合法
    'vue/valid-v-once': 'error',
    // v-pre 指令必须合法
    'vue/valid-v-pre': 'error',
    // v-show 指令必须合法
    'vue/valid-v-show': 'error',
    // v-text 指令必须合法
    'vue/valid-v-text': 'error',

    // html 的结束标签必须符合规定
    'vue/html-end-tags': 'off',
    // 计算属性禁止包含异步方法
    'vue/no-async-in-computed-properties': 'error',
    // 禁止出现难以理解的 v-if 和 v-for
    'vue/no-confusing-v-for-v-if': 'off',
    // 禁止出现重复的属性
    'vue/no-duplicate-attributes': 'off',
    // 禁止在计算属性中对属性修改
    'vue/no-side-effects-in-computed-properties': 'off',
    // 禁止在 <textarea> 中出现 {{message}}
    'vue/no-textarea-mustache': 'off',
    // 组件的属性必须为一定的顺序
    'vue/order-in-components': 'off',
    // <component> 必须有 v-bind:is
    'vue/require-component-is': 'off',
    // prop 必须有类型限制
    'vue/require-prop-types': 'off',
    // v-for 指令的元素必须有 v-bind:key
    'vue/require-v-for-key': 'off',

    // 限制自定义组件的属性风格
    'vue/attribute-hyphenation': 'off',
    // html 属性值必须用双引号括起来
    'vue/html-quotes': 'error',
    // 没有内容时，组件必须自闭和
    'vue/html-self-closing': 'off',
    // 限制每行允许的最多属性数量
    'vue/max-attributes-per-line': 'off',
    // 限制组件的 name 属性的值的风格
    'vue/name-property-casing': 'off',
    // 禁止出现连续空格
    'vue/no-multi-spaces': 'error',
    // 限制 v-bind 的风格
    'vue/v-bind-style': 'off',
    // 限制 v-on 的风格
    'vue/v-on-style': 'off',

    // 定义了的 jsx element 必须使用
    'vue/jsx-uses-vars': 'error'
  }
}