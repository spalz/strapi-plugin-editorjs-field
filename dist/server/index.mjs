import ogs from "open-graph-scraper";
import { parseMultipartData } from "@strapi/utils";
import axios from "axios";
import fs from "fs";
import path from "path";
import { LocalFileData } from "get-file-object-from-local-path";
const pluginId = "editorjs";
const getService = (name) => {
  return strapi.plugin(pluginId).service(name);
};
const register = ({ strapi: strapi2 }) => {
  strapi2.customFields.register({
    name: pluginId,
    // @ts-ignore
    plugin: pluginId,
    type: "richtext"
  });
};
const upload = ({ strapi: strapi2 }) => ({
  config: async (ctx) => {
    const config2 = await getService("plugin").getConfig();
    ctx.send(config2);
  },
  link: async (ctx) => {
    const result = await new Promise(
      (resolve) => {
        ogs(ctx.query, (error, results, response) => {
          if (error || !("ogTitle" in results)) {
            resolve({ success: 0, meta: {} });
            return;
          }
          const customResults = results;
          const imageUrl = customResults.ogImage?.url ? { url: customResults.ogImage.url } : void 0;
          resolve({
            success: 1,
            meta: {
              title: customResults.ogTitle,
              description: customResults.ogDescription,
              image: imageUrl
            }
          });
        });
      }
    );
    ctx.send(result);
  },
  byFile: async (ctx) => {
    try {
      const { files } = parseMultipartData(ctx);
      const [uploadedFile] = await strapi2.plugin("upload").service("upload").upload({
        data: {},
        files: Object.values(files)
      });
      ctx.send({
        success: 1,
        file: uploadedFile
      });
    } catch (e) {
      ctx.send(
        {
          success: 0,
          message: e.message
        },
        500
      );
    }
  },
  byURL: async (ctx) => {
    try {
      const { url } = ctx.request.body;
      const { name, ext } = path.parse(url);
      const filePath = `./public/${name}${ext}`;
      const response = await axios.get(url, { responseType: "arraybuffer" });
      const buffer = Buffer.from(response.data, "binary");
      await fs.promises.writeFile(filePath, buffer);
      const fileData = new LocalFileData(filePath);
      const file = {
        path: filePath,
        name: fileData.name,
        type: fileData.type,
        size: Buffer.byteLength(buffer)
      };
      const [uploadedFile] = await strapi2.plugin("upload").service("upload").upload({
        data: {},
        files: file
      });
      await fs.promises.unlink(filePath);
      ctx.send({
        success: 1,
        file: uploadedFile
      });
    } catch (e) {
      ctx.send(
        {
          success: 0,
          message: e.message
        },
        500
      );
    }
  }
});
const controllers = {
  editorjs: upload
};
const config = {
  default: {
    header: null,
    list: null,
    checklist: null,
    embed: null,
    table: null,
    warning: null,
    code: null,
    link_tool: null,
    raw: null,
    quote: null,
    marker: null,
    delimiter: null,
    inlineCode: null,
    image: null,
    attaches: null,
    component: null,
    minHeight: null
  }
};
const routes = {
  editorjs: {
    type: "admin",
    routes: [
      {
        method: "GET",
        path: "/config",
        handler: "editorjs.config",
        config: {
          policies: ["admin::isAuthenticatedAdmin"]
        }
      }
    ]
  },
  "content-api": {
    type: "content-api",
    routes: [
      {
        method: "GET",
        path: "/link",
        handler: "editorjs.link",
        config: {
          description: "Get a URL link",
          auth: false
        }
      },
      {
        method: "POST",
        path: "/image/byFile",
        handler: "editorjs.byFile",
        config: {
          auth: false
        }
      },
      {
        method: "POST",
        path: "/image/byUrl",
        handler: "editorjs.byURL",
        config: {
          auth: false
        }
      }
    ]
  }
};
const plugin = ({ strapi: strapi2 }) => ({
  async getConfig() {
    const data = await strapi2.config.get(`plugin.${pluginId}`, config.default);
    return data;
  }
});
const services = {
  plugin
};
const index = {
  register,
  config,
  routes,
  controllers,
  services
};
export {
  index as default
};
//# sourceMappingURL=index.mjs.map
