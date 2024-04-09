module.exports = {
  extends: ['react-app', 'prettier'], // 继承eslint-config-react-app的基础配置
  rules: {
    // 在这里覆盖或添加规则,ESLint的规则通常有三个级别：0（关闭）、1（警告）和2（错误）
    'no-unused-vars': 2, //禁止未使用的变量
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // 只允许使用.js或.jsx作为React组件的文件扩展名
    'react/jsx-uses-vars': 2, // 确保在JSX中使用的变量都已定义
    'react/jsx-no-undef': 2, // 禁止在JSX中使用未定义的变量
    'react/jsx-no-duplicate-props': 2, // 禁止在JSX中有重复的props
    'react/no-danger-with-children': 2, // 阻止在具有子元素的元素上使用dangerouslySetInnerHTML
    'react/no-unused-state': 2, // 禁止在组件的state中定义未使用的变量
    'react/no-unused-prop-types': 2, // 禁止在propTypes中定义未使用的变量
    'react/destructuring-assignment': 2, // 强制在函数组件中使用解构赋值来提取props
    'react/button-has-type': 2, // 确保button元素具有明确的type属性
    'react/self-closing-comp': 2, // 强制无子元素的组件自闭合
    'react/jsx-sort-props': [
      1,
      {
        ignoreCase: true, //设置为 true 时,排序将不区分大小写。这意味着 aProp 和 bProp 会按照它们在字母表中的顺序排序，而不是基于它们首字母的大小写
        callbacksLast: true, //设置为 true 时,所有回调函数（例如 onClick，onChange 等）都将被放在 props 列表的最后
        shorthandFirst: true, //设置为 true 时，简写的 props（即没有使用花括号括起来的 props）将放在使用花括号括起来的 props 之前。这通常用于布尔类型的 props，如 disabled，checked 等。
      },
    ], // 对JSX中的props进行排序
  },
  plugins: ['react'], // 启用eslint-plugin-react插件以支持React相关的规则
};
