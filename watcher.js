const chokidar = require('chokidar');

const w = chokidar.watch('./server');

module.exports = function watcher() {
  w.on('ready', function () {
    w.on('all', function () {
      console.log("Clearing /server/ module cache from server")
      Object.keys(require.cache).forEach(function(id) {
        if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id]
      });
    });
  });
}
