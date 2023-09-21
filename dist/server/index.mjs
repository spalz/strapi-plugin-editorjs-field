import m from "open-graph-scraper";
import { parseMultipartData as f } from "@strapi/utils";
import h from "axios";
import { LocalFileData as y } from "get-file-object-from-local-path";
const s = "editorjs", b = (t) => t.plugin(s).service("plugin"), w = ({ strapi: t }) => {
  t.customFields.register({
    name: s,
    plugin: s,
    type: "richtext"
  });
}, c = {}, j = ({ strapi: t }) => ({
  config: async (n) => {
    const i = await b("plugin").getConfig();
    n.send(i);
  },
  link: async (n) => {
    const i = await new Promise(
      (a) => {
        m(n.query, (r, e, d) => {
          var o;
          const l = (o = e == null ? void 0 : e.ogImage) != null && o.url ? { url: e.ogImage.url } : void 0;
          a({
            success: 1,
            meta: {
              title: e == null ? void 0 : e.ogTitle,
              description: e == null ? void 0 : e.ogDescription,
              image: l
            }
          });
        });
      }
    );
    n.send(i);
  },
  byFile: async (n) => {
    try {
      const { files: i } = f(n), [a] = await t.plugin("upload").service("upload").upload({
        data: {},
        files: Object.values(i)
      });
      n.send({
        success: 1,
        file: a
      });
    } catch (i) {
      n.send(
        {
          success: 0,
          message: i.message
        },
        500
      );
    }
  },
  byURL: async (n) => {
    try {
      const { url: i } = n.request.body, { name: a, ext: r } = c.parse(i), e = `./public/${a}${r}`, d = await h.get(i, { responseType: "arraybuffer" }), l = Buffer.from(d.data, "binary");
      await c.promises.writeFile(e, l);
      const o = new y(e), p = {
        path: e,
        name: o.name,
        type: o.type,
        size: Buffer.byteLength(l)
      }, [g] = await t.plugin("upload").service("upload").upload({
        data: {},
        files: p
      });
      await c.promises.unlink(e), n.send({
        success: 1,
        file: g
      });
    } catch (i) {
      n.send(
        {
          success: 0,
          message: i.message
        },
        500
      );
    }
  }
}), k = {
  editorjs: j
}, u = {
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
}, F = {
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
          auth: !1
        }
      },
      {
        method: "POST",
        path: "/image/byFile",
        handler: "editorjs.byFile",
        config: {
          auth: !1
        }
      },
      {
        method: "POST",
        path: "/image/byUrl",
        handler: "editorjs.byURL",
        config: {
          auth: !1
        }
      }
    ]
  }
}, v = ({ strapi: t }) => ({
  async getConfig() {
    return await t.config.get(`plugin.${s}`, u.default);
  }
}), T = {
  plugin: v
}, q = {
  register: w,
  config: u,
  routes: F,
  controllers: k,
  services: T
};
export {
  q as default
};
//# sourceMappingURL=index.mjs.map
