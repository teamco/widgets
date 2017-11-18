/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/preferences/widget.preferences'
], function defineReverbnationPreferencesElement(PluginElement,
    WidgetPreferences) {

  /**
   * Define Reverbnation Preferences Element
   * @constructor
   * @class ReverbnationPreferencesElement
   * @param {ReverbnationView} view
   * @param opts
   * @extends PluginElement
   * @extends WidgetPreferences
   * @returns {ReverbnationPreferencesElement}
   */
  var ReverbnationPreferencesElement = function ReverbnationPreferencesElement(view,
      opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.renderBasePrefsData(opts.data);

    return this;
  };

  return ReverbnationPreferencesElement.extend(
      'ReverbnationPreferencesElement', {},
      PluginElement.prototype,
      WidgetPreferences.prototype
  );
});
