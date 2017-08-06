/* global widgetManager */

export default function (state, action) {
  switch (action.type) {
    case 'WIDGETS_LOADED':
      const widgetManager = require('../widget-manager');
      return { ...state, widgetManager };
    default:
      return { ...state };
  }
}
