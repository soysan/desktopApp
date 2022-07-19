import path from 'path';
import { BrowserWindow, app } from 'electron';

if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(__dirname, {
    electron: path.resolve(
      __dirname,
      process.platform === 'win32'
      ? '../node_modules/electron/dist/electron.exe'
        : '../node_modules/.bin/electron'
    ),
  })
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('dist/index.html');
};

app.whenReady().then(createWindow);

app.once('window-all-closed', () => app.quit());