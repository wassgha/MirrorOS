/* global $ */
export function enqueue (state, action) {
  const widgetQueue = state.widgetQueue
  const widget = action.payload

  let newWidgetQueue = [...widgetQueue]
  const index = newWidgetQueue.indexOf(widget)

  if (index !== -1) {
    newWidgetQueue.splice(index, 1)
  }
  newWidgetQueue.unshift(widget)

  correctZ(newWidgetQueue)
  return { ...state, widgetQueue: newWidgetQueue }
}

function correctZ (widgetQueue) {
  const size = widgetQueue.length
  widgetQueue.forEach(function (widget, index) {
    $(widget.widgetElement).css('z-index', size - index)
  })
}
