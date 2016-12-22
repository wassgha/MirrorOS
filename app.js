const $ = jQuery = require('jquery')
// require('jquery-ui')
const ipc = require('electron').ipcRenderer

$(document).ready(function () {
    // Make widgets draggable
    $('.widget').draggable();

    // Put the current window on the front
    $('.widget').on('mousedown', function() {
      $('.widget').css('z-index', 0);;
      $(this).css('z-index', 1);;
    });

    $("#content").load("login.html", function() {
      // Show camera feed in login widget
      var video = document.querySelector(".login.widget #cam");
      var localstream;
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
       
      if (navigator.getUserMedia) {       
          navigator.getUserMedia({video: true}, handleVideo, videoError);
      }
       
      function handleVideo(stream) {
        localstream = stream;
        video.src = window.URL.createObjectURL(stream);
      }

      function videoError(e) {
          // do something
      }

      // If face recognized then login
      $(".login.widget").on("click", function () {
        $(".login.widget").fadeOut(500);
        $(".loader").fadeIn(1000, function() {
          setTimeout(function() {
            $(".notification").fadeIn(1000);
            setTimeout(function() { 
              $(".loader").fadeOut();
              setTimeout(function() { 
                $("#content").load("home.html", function () {
                  $(".notification").fadeOut(1000);
                  localstream.getTracks()[0].stop();
                });
              }, 500);
            }, 1000);
          }, 500);
        });
      });
    });
});

$(document).ajaxComplete(function () {
    $('.widget').draggable();
});
