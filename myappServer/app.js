let express = require('express');
let app = express();
var os = require('os');
var bodyParser = require('body-parser');
let router = require('./routers');
let port = process.env.PORT || 3000;
let path = require('path')
console.log(path.basename)
// view engine setup
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.use('/public/', express.static('./public/'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/api', router);
// parse application/json
app.use(bodyParser.json());

var IPv4, hostName;
hostName = os.hostname();
for (var i = 0; i < os.networkInterfaces().en0.length; i++) {
  if (os.networkInterfaces().en0[i].family == 'IPv4') {
    IPv4 = os.networkInterfaces().en0[i].address;
  }
}

app.listen(port, () => {
  console.log(IPv4 + ':' + port);
});