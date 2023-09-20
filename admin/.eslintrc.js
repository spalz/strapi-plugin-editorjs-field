module.exports = {
  root: true,
  extends: ["@strapi/eslint-config/front/typescript"],
  parserOptions: {
    project: ["./admin/tsconfig.eslint.json"],
  },
};
