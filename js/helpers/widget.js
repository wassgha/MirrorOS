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
