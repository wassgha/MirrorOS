const $ = jQuery = require('jquery')
// require('jquery-ui')
const ipc = require('electron').ipcRenderer

$(document).ready(function () {
    // Make widgets draggable
    $('.widget').draggable();

    // Put the current window on the front
    $(document).on('mousedown', '.widget', function() {
      $('.widget').css('z-index', 0);;
      $(this).css('z-index', 1);;
    });

    $("#content").load("login.html");
});

$(document).ajaxComplete(function () {
    $('.widget').draggable();
});
