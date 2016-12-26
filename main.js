
const electron = require('electron')
const path = require('path')
const url = require('url')

const {app, BrowserWindow, ipcMain} = electron
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

  win.webContents.openDevTools()
  win.webContents.setMenu(null)

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
  if(win === null){
    createWindow()
  }
})
