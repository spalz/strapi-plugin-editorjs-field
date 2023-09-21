declare const _default: {
    editorjs: ({ strapi }: {
        strapi: import("@strapi/strapi").Strapi;
    }) => {
        config: (ctx: import("strapi-typed").StrapiRequestContext<never, any>) => Promise<void>;
        link: (ctx: import("strapi-typed").StrapiRequestContext<never, any>) => Promise<void>;
        byFile: (ctx: import("@strapi/utils/dist/types").Context & import("strapi-typed").StrapiRequestContext<never, any>) => Promise<void>;
        byURL: (ctx: import("strapi-typed").StrapiRequestContext<never, any>) => Promise<void>;
    };
};
export default _default;
