import { useEffect } from "react";

import { request, useNotification } from "@strapi/helper-plugin";
import { useSelector, useDispatch } from "react-redux";

import { RESOLVE_CONFIG } from "../constants";
import { pluginId } from "../utils/pluginId";

export const usePluginConfig = () => {
  const dispatch = useDispatch();
  const toggleNotification = useNotification();
  const { config, isLoading } = useSelector(
    (state: any) => state[`${pluginId}_config`]
  );

  useEffect(() => {
    // Do nothing if we have already loaded the config data.
    if (!isLoading && !!config) {
      return;
    }

    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const endpoint = `/${pluginId}/config`;
        const data = await request(endpoint, {
          method: "GET",
          signal: abortController.signal,
        });

        return data ?? {};
      } catch (err) {
        if (!abortController.signal.aborted) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" },
          });

          return err;
        }
      }
    };

    fetchData().then((data) => dispatch({ type: RESOLVE_CONFIG, data }));

    return () => abortController.abort();
  }, [dispatch, toggleNotification]);

  return { config, isLoading };
};
