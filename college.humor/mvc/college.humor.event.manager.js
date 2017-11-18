/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineCollegeHumorEventManager(WidgetContentEventManager) {

  /**
   * Define CollegeHumor event manager
   * @class CollegeHumorEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var CollegeHumorEventManager = function CollegeHumorEventManager() {

    this.updateEventList({});
  };

  return CollegeHumorEventManager.extend('CollegeHumorEventManager', {},
      WidgetContentEventManager.prototype);
});
