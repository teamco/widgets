/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/deviant.art/mvc/deviant.art.controller',
  'plugins/widgets/deviant.art/mvc/deviant.art.model',
  'plugins/widgets/deviant.art/mvc/deviant.art.view',
  'plugins/widgets/deviant.art/mvc/deviant.art.event.manager',
  'plugins/widgets/deviant.art/mvc/deviant.art.permission'
], function defineDeviantArt(AntHill, MVC, Controller, Model, View,
    EventManager, Permission) {

  /**
   * Define DeviantArt
   * @param containment
   * @param [opts]
   * @constructor
   * @class DeviantArt
   * @extends AntHill
   */
  var DeviantArt = function DeviantArt(containment, opts) {

    /**
     * Define containment
     * @property DeviantArt
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property DeviantArt
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
     * @property DeviantArt
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

  return DeviantArt.extend('DeviantArt', {}, AntHill.prototype);
});
