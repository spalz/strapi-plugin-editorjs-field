import { pluginId } from "../utils/pluginId";

import { configReducer } from "./configReducer";

export const reducers = {
  [`${pluginId}_config`]: configReducer,
};
