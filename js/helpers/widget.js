/* globals $ */

class Widget {
  constructor (widgetElement, widgetQueue, config) {
    this.widgetElement = widgetElement
    this.widgetQueue = widgetQueue
    this.config = config
  }

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
