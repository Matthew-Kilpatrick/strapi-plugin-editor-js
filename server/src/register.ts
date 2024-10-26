import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
    name: "editor-js",
    plugin: "editor-js",
    type: "json"
  });
};

export default register;
