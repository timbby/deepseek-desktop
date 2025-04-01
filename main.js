const { app, BrowserWindow, Menu } = require('electron')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true
  })

  mainWindow.loadURL('https://chat.deepseek.com')

  // 隐藏默认菜单
  Menu.setApplicationMenu(null)

  // 深色模式适配
  if (process.platform === 'darwin') {
    app.dock.setIcon('./icon_1024x1024.icns')
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})