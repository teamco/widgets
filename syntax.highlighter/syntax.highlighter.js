/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/syntax.highlighter/mvc/syntax.highlighter.controller',
  'plugins/widgets/syntax.highlighter/mvc/syntax.highlighter.model',
  'plugins/widgets/syntax.highlighter/mvc/syntax.highlighter.view',
  'plugins/widgets/syntax.highlighter/mvc/syntax.highlighter.event.manager',
  'plugins/widgets/syntax.highlighter/mvc/syntax.highlighter.permission'
], function defineSyntaxHighlighter(AntHill, MVC, Controller, Model, View,
    EventManager, Permission) {

  /**
   * Define SyntaxHighlighter
   * @param containment
   * @param [opts]
   * @constructor
   * @class SyntaxHighlighter
   * @extends AntHill
   */
  var SyntaxHighlighter = function SyntaxHighlighter(containment, opts) {

    /**
     * Define containment
     * @memberOf SyntaxHighlighter
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf SyntaxHighlighter
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
         *          floating: boolean,
         *          padding: {
         *              top: number,
         *              right: number,
         *              bottom: number,
         *              left: number
         *          }
         *      }
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
     * @memberOf SyntaxHighlighter
     * @type {MVC}
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
        this.eventmanager.eventList.initWidget,
        opts
    );
  };

  return SyntaxHighlighter.extend('SyntaxHighlighter', {}, AntHill.prototype);
});
