const fs = require('fs');
const path = require('path');

const babelConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.babelrc'), 'utf8'));
babelConfig.babelrc = false;
babelConfig.presets[0] = ["env"];

require('babel-polyfill');
// need to override presets settings from .babelrc, 
// or else "modules": false setting will mess with imports
require('babel-register')(babelConfig);
require('dotenv').load();
require('./server/bootstrap.js');
// require('./watcher')();
