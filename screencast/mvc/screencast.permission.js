/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/Permission'
], function defineScreencastPermission(BasePermission) {

  /**
   * Define Permissions
   * @class ScreencastPermission
   * @constructor
   * @extends BasePermission
   */
  var ScreencastPermission = function ScreencastPermission() {

  };

  return ScreencastPermission.extend('ScreencastPermission', {},
      BasePermission.prototype);
});
