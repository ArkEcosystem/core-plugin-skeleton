import { Container } from "@arkecosystem/core-interfaces";
import { defaults } from "./defaults";

export const plugin: Container.PluginDescriptor = {
  pkg: require("../package.json"),
  defaults,
  alias: "my-plugin",
  async register(container: Container.IContainer, options) {
    /* Start plugin here */
  },
  async deregister(container: Container.IContainer, options) {
    /* Stop plugin here */
  }
};
