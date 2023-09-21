declare const _default: {
    register: ({ strapi }: {
        strapi: import("@strapi/strapi").Strapi;
    }) => void;
    config: {
        default: {
            header: any;
            list: any;
            checklist: any;
            embed: any;
            table: any;
            warning: any;
            code: any;
            link_tool: any;
            raw: any;
            quote: any;
            marker: any;
            delimiter: any;
            inlineCode: any;
            image: any;
            attaches: any;
            component: any;
            minHeight: any;
        };
    };
    routes: {
        editorjs: {
            type: string;
            routes: {
                method: string;
                path: string;
                handler: string;
                config: {
                    policies: string[];
                };
            }[];
        };
        "content-api": {
            type: string;
            routes: ({
                method: string;
                path: string;
                handler: string;
                config: {
                    description: string;
                    auth: boolean;
                };
            } | {
                method: string;
                path: string;
                handler: string;
                config: {
                    auth: boolean;
                    description?: undefined;
                };
            })[];
        };
    };
    controllers: {
        editorjs: ({ strapi }: {
            strapi: import("@strapi/strapi").Strapi;
        }) => {
            config: (ctx: import("strapi-typed").StrapiRequestContext<never, any>) => Promise<void>;
            link: (ctx: import("strapi-typed").StrapiRequestContext<never, any>) => Promise<void>;
            byFile: (ctx: import("@strapi/utils/dist/types").Context & import("strapi-typed").StrapiRequestContext<never, any>) => Promise<void>;
            byURL: (ctx: import("strapi-typed").StrapiRequestContext<never, any>) => Promise<void>;
        };
    };
    services: {
        plugin: ({ strapi }: {
            strapi: import("@strapi/strapi").Strapi;
        }) => {
            getConfig(): Promise<any>;
        };
    };
};
export default _default;
