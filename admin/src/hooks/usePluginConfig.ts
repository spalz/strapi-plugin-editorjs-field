import { useEffect } from "react";
import { useFetchClient, useNotification } from "@strapi/helper-plugin";
import { useSelector, useDispatch } from "react-redux";

import { RESOLVE_CONFIG } from "../constants";
import { pluginId } from "../utils/pluginId";

export const usePluginConfig = () => {
  const dispatch = useDispatch();
  const fetchClient = useFetchClient();
  const toggleNotification = useNotification();
  const { config, isLoading } = useSelector(
    (state: any) => state[`${pluginId}_config`]
  );

  useEffect(() => {
    if (!isLoading && !!config) {
      return;
    }

    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const endpoint = `/${pluginId}/config`;
        const { data } = await fetchClient.get(endpoint, {
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
  }, [dispatch, fetchClient, toggleNotification]);

  return { config, isLoading };
};
