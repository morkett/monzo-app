const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;

/* Sets ROOT as the root path for accessing files */
global.ROOT = __dirname;

require('./controllers/global-controller.js');

global.__routes = express.Router();
require('./routes/routes');


app.set('view engine', 'ejs');
app.use(expressLayouts);

app.set('layout', 'layouts/layout'); // default layout template

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', __routes); // setup all routing inside global __routes (set inside /routes/routes.js)
app.use(express.static('public')); // look for static files (css/js/images) in the public folder
app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});
