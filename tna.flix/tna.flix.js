/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/tna.flix/mvc/tna.flix.controller',
  'plugins/widgets/tna.flix/mvc/tna.flix.model',
  'plugins/widgets/tna.flix/mvc/tna.flix.view',
  'plugins/widgets/tna.flix/mvc/tna.flix.event.manager',
  'plugins/widgets/tna.flix/mvc/tna.flix.permission'
], function defineTnaFlix(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define TnaFlix
   * @param containment
   * @param [opts]
   * @constructor
   * @class TnaFlix
   * @extends AntHill
   */
  var TnaFlix = function TnaFlix(containment, opts) {

    /**
     * Define containment
     * @memberOf TnaFlix
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf TnaFlix
     * @type {*}
     */
    this.referrer = undefined;

    /**
     * Define defaults
     * @type {{
         *      plugin: boolean,
         *      html: {
         *          style: string,
         *          header: boolean,
         *          footer: boolean,
         *          padding: {
         *              top: number,
         *              right: number,
         *              bottom: number,
         *              left: number
         *          }
         *      },
         *      regex: RegExp,
         *      mask: string
         * }}
     */
    var DEFAULTS = {
      plugin: true,
      html: {
        style: 'default',
        header: false,
        footer: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    };

    /**
     * Define MVC
     * @memberOf TnaFlix
     * @type {MVCJs}
     */
    this.mvc = new MVC({
      scope: this,
      config: [
        {uuid: this.containment.model.getContentUUID()},
        DEFAULTS
      ],
      components: [
        Controller,
        Model,
        View,
        EventManager,
        Permission
      ],
      render: true
    });

    this.observer.publish(
        this.eventManager.eventList.initWidget,
        opts
    );
  };

  return TnaFlix.extend('TnaFlix', {}, AntHill.prototype);
});
