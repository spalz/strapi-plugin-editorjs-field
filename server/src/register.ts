import { pluginId } from "./utils";

export const register = ({ strapi }: { strapi: any }) => {
  strapi.customFields.register({
    name: pluginId,
    plugin: pluginId,
    type: "richtext",
  });
};
