import pluginId from "./plugin-id";

const getService = (name: string): any => {
  return strapi.plugin(pluginId).service(name);
};

export default getService;
