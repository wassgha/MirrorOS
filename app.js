const $ = jQuery = require('jquery')
// require('jquery-ui')
const ipc = require('electron').ipcRenderer

var socket = io.connect('http://localhost:3000');

var curZIndex = 3;

$(document).ready(function () {
    // Make widgets draggable
    $('.widget').draggable({
		start: function(event, ui) {
			$(this).css("z-index", curZIndex++);
		}
	});

    // Put the current window on the front
    $(document).on('mousedown', '.widget', function() {
    	$(this).addClass('top').removeClass('bottom');
        $(this).siblings().removeClass('top').addClass('bottom');
        $(this).css("z-index", curZIndex++);
    });

    $("#content").load("login.html");
});

$(document).ajaxComplete(function () {
    $('.widget').draggable();
});
