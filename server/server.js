const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
//INITIALIZATIONS
const app = express();
require('../database');
//SETTINGS
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES

//ROUTER
app.use(require('../routes/routes_index'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));
//SERVER IS LISTENNING
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
