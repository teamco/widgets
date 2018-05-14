/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/screenr/mvc/screenr.controller',
  'plugins/widgets/screenr/mvc/screenr.model',
  'plugins/widgets/screenr/mvc/screenr.view',
  'plugins/widgets/screenr/mvc/screenr.event.manager',
  'plugins/widgets/screenr/mvc/screenr.permission'
], function defineScreenr(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Screenr
   * @param containment
   * @param [opts]
   * @constructor
   * @class Screenr
   * @extends AntHill
   */
  var Screenr = function Screenr(containment, opts) {

    /**
     * Define containment
     * @memberOf Screenr
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf Screenr
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
     * @memberOf Screenr
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

  return Screenr.extend('Screenr', {}, AntHill.prototype);
});
