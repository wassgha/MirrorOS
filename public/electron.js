const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const systemPreferences = electron.systemPreferences;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

console.log('Media access');
console.log(systemPreferences.getMediaAccessStatus('microphone'));

function createWindow() {
  systemPreferences.askForMediaAccess('microphone');
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    fullscreen: true
  });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
