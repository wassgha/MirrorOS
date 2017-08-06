/**
 * Created by jhorlin.dearmas on 6/25/2015.
 */
/**
 * asyncronous module loader
 * @example
 * ```js
 * //ironically loading async-require using syncronaous require.
 * var asyncRequire = require('async-require');
 * ```
 *
 * @module async-require
 */

const vm = require('vm'),
    fs = require('fs');
const requireAsync = function(module, callback) {
  fs.readFile(module, { encoding: 'utf8' }, function (err, data) {
    var sandbox = {
      module: {
        exports: {}
      }
    };
    var code = '(function (module) {' + data + '})(module)';
    vm.runInNewContext(code, sandbox);
    callback(null, sandbox.module.exports);
  });
}

module.exports = requireAsync;
