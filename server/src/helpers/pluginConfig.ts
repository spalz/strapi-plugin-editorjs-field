import { Strapi } from "@strapi/strapi";

import pluginId from "../utils/plugin-id";

const getPluginConfig = ({ strapi }: { strapi: Strapi }) => {
  return strapi.plugin(pluginId).config;
};

export default getPluginConfig;
