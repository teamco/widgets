/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant EmptyPermission
 * @type {module.EmptyPermission|*}
 */
const EmptyPermission = require('../../empty/mvc/empty.permission.js');

/**
 * @class ImagePermission
 * @extends EmptyPermission
 * @type {module.ImagePermission}
 */
module.exports = class ImagePermission extends EmptyPermission {

  /**
   * @constructor
   * @param {string} [name]
   * @param {module.Image} scope
   */
  constructor(name, scope) {
    super(name || 'ImagePermission', scope, false);
  }
};