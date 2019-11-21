const remote = require('electron').remote
const main = remote.require('./main.js')

//var button = document.createElement('button')
var button = document.getElementById('btn-login')
button.textContent = 'Open Window'
button.addEventListener('click', () => {
    var window = remote.getCurrentWindow()    
    main.openWindow('menu')
    window.close()
},false)
//document.body.appendChild(button)