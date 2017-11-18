/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function definePostToolRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define PostTool Rules Element
   * @param view
   * @param opts
   * @returns {PostToolRulesElement}
   * @constructor
   * @class PostToolRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var PostToolRulesElement = function PostToolRulesElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.renderBaseRulesData(
        opts.data,
        opts.rules.widget,
        opts.rules.content
    );

    return this;
  };

  return PostToolRulesElement.extend('PostToolRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});