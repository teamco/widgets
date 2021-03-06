/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

import {EmptyPermission} from '../../empty/mvc/empty.permission';

/**
 * @class ImagePermission
 * @extends EmptyPermission
 * @type {ImagePermission}
 */
export class ImagePermission extends EmptyPermission {

  /**
   * @constructor
   * @param {string} [name]
   * @param {Image} scope
   */
  constructor(name, scope) {
    super(name || 'ImagePermission', scope);
  }
}