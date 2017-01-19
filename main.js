
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
