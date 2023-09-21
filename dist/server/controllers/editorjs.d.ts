import { Context } from "@strapi/utils/dist/types";
import { Strapi } from "@strapi/strapi";
import { StrapiRequestContext } from "strapi-typed";
declare const _default: ({ strapi }: {
    strapi: Strapi;
}) => {
    config: (ctx: StrapiRequestContext<never, any>) => Promise<void>;
    link: (ctx: StrapiRequestContext<never, any>) => Promise<void>;
    byFile: (ctx: Context & StrapiRequestContext<never, any>) => Promise<void>;
    byURL: (ctx: StrapiRequestContext<never, any>) => Promise<void>;
};
export default _default;
