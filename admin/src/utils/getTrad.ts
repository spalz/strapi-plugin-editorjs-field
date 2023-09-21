import { pluginId } from "./pluginId";

export const getTrad = (id: string | number) => `${pluginId}.${id}`;
