/* globals $ */

import React from 'react'

const Forecast = React.createClass({

  propTypes: {
    widgetQueue: React.PropTypes.object.isRequired,
    elementId: React.PropTypes.string.isRequired,
    draggable: React.PropTypes.any
  },

  componentDidMount () {
    const { widgetQueue, elementId, draggable } = this.props
    const widget = $('#' + elementId)

    widgetQueue.enqueue(widget)
    if (draggable) {
      $(widget).on('click', function (event) {
        widgetQueue.enqueue(widget)
        console.log(widgetQueue)
      }).draggable({
        start: function (event, ui) {
          widgetQueue.enqueue(widget)
        }
      })
    }

    this.updateDate()
    setInterval(this.updateClock, 1000)
    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places where text="NYC")&format=json', (data) => {
      if (data.query.results !== null) {
        console.log(data.query.results.channel)
        $('#weather').html('<i class="icon-' + data.query.results.channel.item.condition.code + '"></i> &nbsp; ' + data.query.results.channel.item.condition.text)
      }
    })
  },

  updateClock () {
    const currentTime = new Date()
    let currentHours = currentTime.getHours()
    let currentMinutes = currentTime.getMinutes()
    let currentSeconds = currentTime.getSeconds()

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes
    currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds
    // Choose either "AM" or "PM" as appropriate
    let timeOfDay = (currentHours < 12) ? 'AM' : 'PM'
    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours
    // Convert an hours component of "0" to "12"
    currentHours = (currentHours === 0) ? 12 : currentHours
    // Compose the string for display
    let currentTimeString = currentHours + ':' + currentMinutes + ':' + currentSeconds + ' ' + timeOfDay

    $('#time').html(currentTimeString)
  },

  updateDate () {
    // the format function is part of antoher plugin, should think up
    // a better way for doing this
    // $("#date").html(new Date().format('l, M. jS'))
    console.log('Update date')
  },

  render () {
    return (
      <span className='corner' id={this.props.elementId}>
        <span id='date'>Wednesday, Dec. 21st</span>
        <br />
        <span id='time'>8:00PM</span>
        <br />
        <span id='weather'><img src='../media/images/loading.gif' width='24px' /></span>
      </span>
    )
  }
})

export default Forecast
