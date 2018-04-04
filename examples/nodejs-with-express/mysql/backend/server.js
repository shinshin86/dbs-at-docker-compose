var express = require("express"),
  app = express(),
  port = process.env.PORT || 3001;
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// development mode
app.use(require('./middlewares/accessControlAllow'))

// importing route
var routes = require('./api/routes/userRoutes');
routes(app);

app.listen(port);

console.log('Sample API server started on: ' + port);
