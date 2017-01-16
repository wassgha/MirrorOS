/* global $ */
export function applyWidgetFeatures (widget, enqueue) {
  const {widgetElement, config} = widget

  if (config.draggable) {
    $(widgetElement).on('click', (event) => {
      enqueue(widget)
    }).draggable({
      start: (event, ui) => {
        enqueue(widget)
      }
    })
  }
}

const generateElementId = (function () {
  let counter = 0
  return function generateElementId () {
    const id = ++counter

    if (id < 10) return '000' + id
    if (id < 100) return '00' + id
    if (id < 1000) return '0' + id

    return id
  }
}())

export { generateElementId }
