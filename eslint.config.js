import antfu from '@antfu/eslint-config'

export default antfu(
  /* custom config overrides */
  {
    react: true,
    typescript: true,
    unocss: true,
    rules: {
      "no-var": "error",
      rules: {
        // 在 ESLint 侧正常配置缩进，而在运行 oxlint 时忽略它
        '@typescript-eslint/indent': ['error', 2],
      },
    },
  },
  {
    // ...
  },
)