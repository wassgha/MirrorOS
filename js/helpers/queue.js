/* global $ */

/** Create a new Queue object that orginizes the sequence
 *  of opened widgets
 * @class
 */
class Queue {

  /**
   * @constructor
   */
  constructor () {
    this.sequence = []
  }

  /**
   * enqueue - Add widget to the queue if it is viewed currently
   * @param  {Widget} widget Widget that should be enqueued
   */
  enqueue (widget) {
    const index = this.sequence.indexOf(widget)
    if (index !== -1) {
      this.sequence.splice(index, 1)
    }
    this.sequence.unshift(widget)
    this.correctZ()
  }

  /**
   * correctZ - Assign correct z-index to each widget in the queuen
   */
  correctZ () {
    const size = this.sequence.length
    this.sequence.forEach(function (widget, index) {
      $(widget).css('z-index', size - index)
    })
  }
}

export default Queue
