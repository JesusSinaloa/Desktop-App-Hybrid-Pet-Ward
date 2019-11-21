const { app, BrowserWindow } = require('electron')

const path = require('path')
const url = require('url')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
      }   
  })
  win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
  }))

}

let server = require('./server/server.js')

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)


exports.openWindow = (filename) => {
    win = new BrowserWindow({
        width: 800,
        height: 600   
      })
      win.loadURL(url.format({
          pathname: path.join(__dirname+"/"+filename+'.html'),
          protocol: 'file',
          slashes: true
      }))
}