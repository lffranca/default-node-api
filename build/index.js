'use strict';

var _logger = require('./lib/logger');

var _logger2 = _interopRequireDefault(_logger);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.port || 3000;

// const syncDatabase = () => database.sync({ force: true })

// import database from 'lib/database'
var logServer = function logServer() {
  return _logger2.default.info('Listening on port ' + port);
};
var startServer = function startServer() {
  return _app2.default.listen(port, logServer);
};

Promise.resolve()
// .then(syncDatabase)
.then(startServer);
//# sourceMappingURL=index.js.map