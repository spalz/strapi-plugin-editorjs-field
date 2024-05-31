import { Strapi } from "@strapi/strapi";

import { pluginId } from "./utils";

export const register = ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: pluginId,
    plugin: pluginId,
    type: "richtext",
  });
};
