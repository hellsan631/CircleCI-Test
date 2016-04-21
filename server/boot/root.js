var path = require('path');

module.exports = function(server) {

  // Install a `/` route that returns server status
  var router = server.loopback.Router();

  var staticPath = path.resolve(__dirname + '/../../client');

  router.get('/', function(req, res) {
    res.sendFile(staticPath + '/index.html');
  });

  server.use(router);
};
