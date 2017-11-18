/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function definePolldaddyEventManager(WidgetContentEventManager) {

  /**
   * Define Polldaddy event manager
   * @class PolldaddyEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var PolldaddyEventManager = function PolldaddyEventManager() {

    this.updateEventList({});
  };

  return PolldaddyEventManager.extend('PolldaddyEventManager', {},
      WidgetContentEventManager.prototype);
});
