import { Context } from "@strapi/utils/dist/types";
import { Strapi } from "@strapi/strapi";
import ogs, { SuccessResult } from "open-graph-scraper";
import { parseMultipartData } from "@strapi/utils";
import axios from "axios";
import fs from "fs";
import path from "path";
import { LocalFileData } from "get-file-object-from-local-path";
import { getService } from "../utils";
import { StrapiRequestContext } from "strapi-typed";

interface CustomSuccessResult extends SuccessResult {
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: {
    url: string;
  };
}

export default ({ strapi }: { strapi: Strapi }) => ({
  config: async (ctx: StrapiRequestContext<never, any>) => {
    const config = await getService("plugin").getConfig();
    ctx.send(config);
  },

  link: async (ctx: StrapiRequestContext<never, any>) => {
    const result = await new Promise<{ success: number; meta: any }>(
      (resolve) => {
        ogs(ctx.query, (error, results: CustomSuccessResult, response) => {
          // Проверяем, существует ли свойство 'ogImage' в результатах
          const imageUrl = results?.ogImage?.url
            ? { url: results.ogImage.url }
            : undefined;

          resolve({
            success: 1,
            meta: {
              title: results?.ogTitle,
              description: results?.ogDescription,
              image: imageUrl,
            },
          });
        });
      }
    );

    ctx.send(result);
  },

  byFile: async (ctx: Context & StrapiRequestContext<never, any>) => {
    try {
      const { files } = parseMultipartData(ctx);

      const [uploadedFile] = await strapi
        .plugin("upload")
        .service("upload")
        .upload({
          data: {},
          files: Object.values(files),
        });

      ctx.send({
        success: 1,
        file: uploadedFile,
      });
    } catch (e) {
      ctx.send(
        {
          success: 0,
          message: e.message,
        },
        500
      );
    }
  },

  byURL: async (ctx: StrapiRequestContext<never, any>) => {
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
        size: Buffer.byteLength(buffer),
      };

      const [uploadedFile] = await strapi
        .plugin("upload")
        .service("upload")
        .upload({
          data: {},
          files: file,
        });

      await fs.promises.unlink(filePath);

      ctx.send({
        success: 1,
        file: uploadedFile,
      });
    } catch (e) {
      ctx.send(
        {
          success: 0,
          message: e.message,
        },
        500
      );
    }
  },
});
