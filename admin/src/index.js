import { prefixPluginTranslations } from "@strapi/helper-plugin";
import EditorjsIcon from "./components/editorjs_icon";
import { getTrad, pluginId } from "./utils";
import reducers from "./reducers";
// import Initializer from "./components/Initializer";

export default {
  register(app) {
    app.addReducers(reducers);
    app.customFields.register({
      // id: pluginId,
      name: pluginId,
      // initializer: Initializer,
      pluginId: pluginId,
      type: "string",
      icon: EditorjsIcon,
      intlLabel: {
        id: getTrad("editorjs.label"),
        defaultMessage: "EditorJs",
      },
      intlDescription: {
        id: getTrad("editorjs.description"),
        defaultMessage: "Block-style editor, JSON output",
      },
      components: {
        Input: async () => import("./components/editorjs"),
      },
      options: {
        base: [],
        advanced: [
          {
            sectionTitle: {
              id: "editorjs.tools.settings",
              defaultMessage: "Tools settings, enabling / disabling tools",
            },
            items: [
              {
                name: "options.header",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.header",
                  defaultMessage: "Header",
                },
              },
              {
                name: "options.list",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.list",
                  defaultMessage: "List",
                },
              },
              {
                name: "options.checklist",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.checklist",
                  defaultMessage: "Checklist",
                },
              },
              {
                name: "options.embed",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.embed",
                  defaultMessage: "Embed",
                },
              },
              {
                name: "options.warning",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.warning",
                  defaultMessage: "Warning",
                },
              },
              {
                name: "options.code",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.code",
                  defaultMessage: "Code",
                },
              },
              {
                name: "options.link_tool",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.link_tool",
                  defaultMessage: "Link tool",
                },
              },
              {
                name: "options.raw",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.raw",
                  defaultMessage: "Raw",
                },
              },
              {
                name: "options.quote",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.quote",
                  defaultMessage: "Quote",
                },
              },
              {
                name: "options.marker",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.marker",
                  defaultMessage: "Marker",
                },
              },
              {
                name: "options.delimiter",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.delimiter",
                  defaultMessage: "Delimiter",
                },
              },
              {
                name: "options.inlineCode",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.inlineCode",
                  defaultMessage: "Inline Code",
                },
              },
              {
                name: "options.image",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.image",
                  defaultMessage: "Image",
                },
              },
              {
                name: "options.attaches",
                type: "checkbox",
                defaultValue: true,
                intlLabel: {
                  id: "editorjs.tools.settings.attaches",
                  defaultMessage: "Attaches",
                },
              },
            ],
          },
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings",
            },
            items: [
              {
                name: "required",
                type: "checkbox",
                intlLabel: {
                  id: getTrad("editorjs.options.advanced.requiredField"),
                  defaultMessage: "Required field",
                },
                description: {
                  id: getTrad(
                    "editorjs.options.advanced.requiredField.description"
                  ),
                  defaultMessage:
                    "You won't be able to create an entry if this field is empty",
                },
              },
            ],
          },
        ],
      },
      // validator: (args) => ({
      //   preset: yup.string().required({
      //     id: "ckeditor.preset.error.required",
      //     defaultMessage: "Editor preset is required",
      //   }),
      // }),
    });
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
