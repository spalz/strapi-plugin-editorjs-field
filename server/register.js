"use strict";

const { pluginId } = require("./utils");

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: pluginId,
    plugin: pluginId,
    type: "richtext",

    header: strapi.plugin(pluginId).config("header"),
    list: strapi.plugin(pluginId).config("list"),
    checklist: strapi.plugin(pluginId).config("checklist"),
    embed: strapi.plugin(pluginId).config("embed"),
    table: strapi.plugin(pluginId).config("table"),
    warning: strapi.plugin(pluginId).config("warning"),
    code: strapi.plugin(pluginId).config("code"),
    link_tool: strapi.plugin(pluginId).config("link_tool"),
    raw: strapi.plugin(pluginId).config("raw"),
    quote: strapi.plugin(pluginId).config("quote"),
    marker: strapi.plugin(pluginId).config("marker"),
    delimiter: strapi.plugin(pluginId).config("delimiter"),
    inlineCode: strapi.plugin(pluginId).config("inlineCode"),
    image: strapi.plugin(pluginId).config("image"),
    attaches: strapi.plugin(pluginId).config("attaches"),
    minHeight: strapi.plugin(pluginId).config("minHeight"),
  });
};
