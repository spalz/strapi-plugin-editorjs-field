import AttachesTool from "@editorjs/attaches";
import Image from "@editorjs/image";
import { auth } from "@strapi/helper-plugin";
import axios from "axios";

import { pluginId } from "../utils/pluginId";

export const requiredTools = {
  image: {
    class: Image,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({}),
      },
      additionalRequestHeaders: {
        Authorization: `Bearer ${auth.getToken()}`,
      },
      endpoints: {
        byUrl: `/api/${pluginId}/image/byUrl`,
      },
      uploader: {
        async uploadByFile(file: any) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);

          const { data } = await axios.post(
            `/api/${pluginId}/image/byFile`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${auth.getToken()}`,
              },
            }
          );

          return data;
        },
      },
    },
  },
  attaches: {
    class: AttachesTool,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({}),
      },
      additionalRequestHeaders: {
        Authorization: `Bearer ${auth.getToken()}`,
      },
      endpoints: {
        byUrl: `/api/${pluginId}/image/byUrl`,
      },
      uploader: {
        async uploadByFile(file: any) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);

          const { data } = await axios.post(
            `/api/${pluginId}/image/byFile`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${auth.getToken()}`,
              },
            }
          );

          return data;
        },
      },
    },
  },
};
