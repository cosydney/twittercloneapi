'use strict';

/**
 * People.js controller
 *
 * @description: A set of functions called "actions" for managing `People`.
 */

module.exports = {

  /**
   * Retrieve people records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.people.search(ctx.query);
    } else {
      return strapi.services.people.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a people record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.people.fetch(ctx.params);
  },

  /**
   * Count people records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.people.count(ctx.query);
  },

  /**
   * Create a/an people record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.people.add(ctx.request.body);
  },

  /**
   * Update a/an people record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.people.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an people record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.people.remove(ctx.params);
  }
};
