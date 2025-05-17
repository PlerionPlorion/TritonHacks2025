const { contextBridge } = require('electron')

const api = {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    google: () => process.env.GOOGLE_API_KEY = 'AIzaSyBmAZivCpSXxUiw5UJxrilGzBdCitu030g'
}

contextBridge.exposeInMainWorld('api', api)