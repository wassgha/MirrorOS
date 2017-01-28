
const electron = require('electron')
const path = require('path')
const url = require('url')

process.env.GOOGLE_API_KEY = 'AIzaSyAxEd1c2fuK7zBlHV6ENZ1Ua2uqfP1Yfl8'

const {app, BrowserWindow} = electron
let win

const createWindow = () => {
  win = new BrowserWindow({
    fullscreen: true
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'build/index.html'),
    protocol: 'file:',
    slashes: true
  }))

<<<<<<< HEAD
  win.webContents.openDevTools()

  win.setMenu(null)

=======
>>>>>>> prosperi
  win.on('closed', () => {
    win = null
  })

  win.webContents.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
  client.on('event', function(data){});
  client.on('disconnect', function(){});
});
server.listen(3000);


var PythonShell = require('python-shell');

const pyshell = new PythonShell('lib/FaceRecognitionAPI/script.py');

pyshell.on('message', function (message) {
  try {
    message = JSON.parse(message);
    //console.log(message);
    io.emit('message',message);
  } catch(e) {
    // Not JSON, don't parse
  }
});

pyshell.end(function (err) {
  if (err) throw err;
  console.log("Server finished running...");
});
