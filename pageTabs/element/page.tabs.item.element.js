/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

import {PluginElement} from '../../../plugin.element';

/**
 * @class PageTabsItemElement
 * @extends PluginElement
 * @type {PageTabsItemElement}
 */
export class PageTabsItemElement extends PluginElement {

  /**
   * @param {string} [name]
   * @param {PageTabsView} view
   * @param opts
   * @constructor
   */
  constructor(name, view, opts) {
    super(name || 'PageTabsItemElement', view, false);

    /**
     * Define page tab item
     * @property PageTabsItemElement
     * @type {Page}
     */
    this.pageTab = opts.pageTab;

    this.configElement(view, opts);
  }

  /**
   * @memberOf PageTabsItemElement
   * @param {PageTabsView} view
   * @param opts
   */
  configElement(view, opts) {
    this._config(view, opts, window.$('<li role="presentation" />')).build(opts);
    this.initContent();
  }

  /**
   * Init page tabs item
   * @memberOf PageTabsItemElement
   */
  initContent() {

    /**
     * Get prefs
     * @type {*}
     */
    const preferences = this.pageTab.model.getConfig('preferences');

    /**
     * Define title
     * @property PageTabsItemElement
     * @type {*|string}
     */
    this.title = this.pageTab.model.getItemTitle();

    /**
     * Define description
     * @property PageTabsItemElement
     * @type {*|string}
     */
    this.description = preferences.description;

    /**
     * Define pageUrl
     * @property PageTabsItemElement
     * @type {*}
     */
    this.pageUrl = preferences.pageUrl;

    this.window.$.append(window.$('<a />').attr({title: this.title}).text(this.title));

    this.setTitle(this.title);
    this.bindClick();
  }

  /**
   * Bind click to switch page
   * @memberOf PageTabsItemElement
   */
  bindClick() {
    this.window.$[0].addEventListener('click', this.clickCallback.bind(this), false);
  }

  /**
   * Tab click callback
   * @memberOf PageTabsItemElement
   * @param {Event} e
   * @private
   */
  clickCallback(e) {

    e.preventDefault();
    e.stopPropagation();

    /**
     * Get scope
     * @type {PageTabs}
     */
    const scope = this.view.scope;
    scope.observer.publish(scope.eventManager.eventList.switchToPage, [this, e]);
  }
}