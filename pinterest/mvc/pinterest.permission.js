/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/Permission'
], function definePinterestPermission(BasePermission) {

  /**
   * Define Permissions
   * @class PinterestPermission
   * @constructor
   * @extends BasePermission
   */
  var PinterestPermission = function PinterestPermission() {

  };

  return PinterestPermission.extend('PinterestPermission', {},
      BasePermission.prototype);
});
