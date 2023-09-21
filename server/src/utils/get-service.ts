"use strict";

import pluginId from "./plugin-id";

const getService = (strapi) => strapi.plugin(pluginId).service("plugin");

export default getService;
