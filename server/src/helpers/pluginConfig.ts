import { Strapi } from "@strapi/strapi";

import { pluginId } from "../utils";

const getPluginConfig = ({ strapi }: { strapi: Strapi }) => {
  return strapi.plugin(pluginId).config;
};

export default getPluginConfig;
