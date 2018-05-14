/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/radikal.foto/mvc/radikal.foto.controller',
  'plugins/widgets/radikal.foto/mvc/radikal.foto.model',
  'plugins/widgets/radikal.foto/mvc/radikal.foto.view',
  'plugins/widgets/radikal.foto/mvc/radikal.foto.event.manager',
  'plugins/widgets/radikal.foto/mvc/radikal.foto.permission'
], function defineRadikalFoto(AntHill, MVC, Controller, Model, View,
    EventManager, Permission) {

  /**
   * Define RadikalFoto
   * @param containment
   * @param [opts]
   * @constructor
   * @class RadikalFoto
   * @extends AntHill
   */
  var RadikalFoto = function RadikalFoto(containment, opts) {

    /**
     * Define containment
     * @memberOf RadikalFoto
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf RadikalFoto
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
     * @memberOf RadikalFoto
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

  return RadikalFoto.extend('RadikalFoto', {}, AntHill.prototype);
});
