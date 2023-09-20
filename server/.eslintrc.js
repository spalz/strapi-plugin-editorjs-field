module.exports = {
  root: true,
  extends: ['@strapi/eslint-config/base'],
  parserOptions: {
    project: ['./server/tsconfig.eslint.json'],
  },
};
