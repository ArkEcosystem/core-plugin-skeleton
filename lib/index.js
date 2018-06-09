'use strict'

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
  pkg: require('../package.json'),
  defaults: require('./defaults'),
  alias: 'my-plugin',
  async register (container, options) {
    //
  },
  async deregister (container, options) {
    //
  }
}
