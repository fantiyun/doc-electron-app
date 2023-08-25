const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // win.loadURL(
  //   'https://www.electronjs.org/zh/docs/latest/tutorial/tutorial-first-app#%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E7%AA%97%E5%8F%A3%E6%89%93%E5%BC%80%E5%88%99%E6%89%93%E5%BC%80%E4%B8%80%E4%B8%AA%E7%AA%97%E5%8F%A3-macos'
  // )
  win.loadFile('index.html')
}
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
