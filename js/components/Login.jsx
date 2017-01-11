const Login = Reac.createClass({

  componentDidMount: () => {
    const localstream = null
    const done = false
    const video = $("#cam")

    const handleVideo = (stream) => {
      localstream = stream
      video.src = window.URL.createObjectURL(stream)
    }

    const videoError = (e) => {
      // do something
    }

    const login = () => {
      $("#login-widget").fadeOut(500)
      $(".loader").fadeIn(1000, () => {
        setTimeout(() => {
          $(".notification").fadeIn(1000)
          setTimeout(() => {
            $(".loader").fadeOut()
            setTimeout(() => {
              $("#content").load("home.html", () => {
                $(".notification").fadeOut(1000);
                done = true;
              })
            }, 500)
          }, 1000)
        }, 500)
      })
    }

    if(navigator.getUserMedia){
      navigator.getUserMedia({video: true}, handleVideo, videoError)
    }
  },

  render: () => {
    return (/*<div>
        <div className="login widget" id="login-widget">
          <div id="cam-container">
            <video autoplay="true" id="cam"></video>
            <canvas id="canvas" width="640px" height="480px"></canvas>
          </div>
          <div id="text">
            <i className="material-icons">sentiment_neutral</i><br/>
            <span id="instructions">I don't see you.</span>
          </div>
        </div>

        <div className="training widget">
          <h3>Train user model</h3>
          <select id="user"></select>
          <button id="train">Train</button>
        </div>

        <a href="#" id="add-user" className="tray"> <i className="material-icons"> group_add </i> Add user </a>
        <div class="loader">
          <img src="images/wassim.jpg"/>
        </div>
      </div>*/
      <div>
        <button>Bring the action!</button>
      </div>
    )
  }
})
