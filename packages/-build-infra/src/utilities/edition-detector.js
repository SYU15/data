'use strict';

const path = require('path');

module.exports = function(blueprint) {
  blueprint.filesPath = function() {
    let rootPath = process.env.EMBER_VERSION === 'OCTANE' ? 'native-files' : 'files';
    return path.join(blueprint.root, rootPath);
  };

  return blueprint;
};
