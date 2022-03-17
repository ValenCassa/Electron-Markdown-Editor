const { contextBridge } = require('electron')
const fs = require('fs')

process.once('loaded', () => {
    contextBridge.exposeInMainWorld('electronFs', {
        readFile: fs.readFileSync,
        writeFile: fs.writeFileSync
        // Other fs methods here
      })
}) 