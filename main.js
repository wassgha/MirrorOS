
const electron = require('electron')
const path = require('path')
const url = require('url')

const server = require('http').createServer()
const io = require('socket.io')(server)

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

// Socket.io configuration

io.on('connection', client => {
  client.on('event', data => {})
  client.on('disconnect', () => {})
})
server.listen(3000)
