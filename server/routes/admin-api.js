"use strict";

module.exports = {
  type: "admin",
  routes: [
    {
      method: "GET",
      path: "/config",
      handler: "editorjs.config",
      config: {
        policies: ["admin::isAuthenticatedAdmin"],
      },
    },
  ],
};
