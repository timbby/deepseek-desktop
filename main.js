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
  const path = require('path')

if (process.platform === 'darwin') {
  try {
    app.dock.setIcon(path.join(__dirname, 'icon_1024x1024.icns'))
  } catch (error) {
    console.error('Failed to set dock icon:', error)
  }
}
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})