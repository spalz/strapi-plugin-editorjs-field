"use strict";

const register = require("./register");
const controllers = require("./controllers");
const config = require("./config");
const routes = require("./routes");
const services = require("./services");

module.exports = {
  register,
  config,
  routes,
  controllers,
  services,
};
