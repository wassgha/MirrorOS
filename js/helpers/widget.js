/* global $ */

/** Create a new Widget
 * @class
 */
class Widget {

  /**
   * @constructor
   * @param  {Element} widgetElement DOM element for the widget
   * @param  {Queue} widgetQueue     Queue of opened widgets
   * @param  {Object} config         Configuration for the Widget
   */
  constructor (widgetElement, widgetQueue, config) {
    this.widgetElement = widgetElement
    this.widgetQueue = widgetQueue
    this.config = config
  }

  /**
   * create - Initialize new Widget
   *
   * @return {Widget}  Current Widget
   */
  create () {
    this.widgetQueue.enqueue(this.widgetElement)
    if (this.config.draggable) {
      $(this.widgetElement).on('click', (event) => {
        this.widgetQueue.enqueue(this.widgetElement)
        console.log(this.widgetQueue)
      }).draggable({
        start: (event, ui) => {
          this.widgetQueue.enqueue(this.widgetElement)
        }
      })
    }
    return this
  }

}

export default Widget
