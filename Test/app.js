const $ = jQuery = require('jquery')
// require('jquery-ui')
const ipc = require('electron').ipcRenderer


$(function(){

  const box = $('#box')
  box.draggable()
  box.on('click', (event) => {
    ipc.send('new_win', {
      width: 250,
      height: 350,
      frame: false,
      resizable: false
    })
  })
})
