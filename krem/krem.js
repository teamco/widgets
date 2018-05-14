/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/krem/mvc/krem.controller',
  'plugins/widgets/krem/mvc/krem.model',
  'plugins/widgets/krem/mvc/krem.view',
  'plugins/widgets/krem/mvc/krem.event.manager',
  'plugins/widgets/krem/mvc/krem.permission'
], function defineKrem(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Krem
   * @param containment
   * @param [opts]
   * @constructor
   * @class Krem
   * @extends AntHill
   */
  var Krem = function Krem(containment, opts) {

    /**
     * Define containment
     * @memberOf Krem
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf Krem
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
     * @memberOf Krem
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

  return Krem.extend('Krem', {}, AntHill.prototype);
});
