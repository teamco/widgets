/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineRssEventManager(WidgetContentEventManager) {

  /**
   * Define Rss event manager
   * @class RssEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var RssEventManager = function RssEventManager() {

    this.updateEventList({
      parseRss: 'parse.rss'
    });
  };

  return RssEventManager.extend('RssEventManager', {},
      WidgetContentEventManager.prototype);
});