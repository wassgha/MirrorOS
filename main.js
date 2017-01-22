
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
let win

const createWindow = () => {
  win = new BrowserWindow({
    fullscreen: true,
    //resizable: false
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.setMenu(null)

  win.on('closed', () => {
    win = null
  })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', () => {
  if(win == null){
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
