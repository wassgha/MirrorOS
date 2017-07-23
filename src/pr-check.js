'use strict';

const spawn = require('child_process');

if (process.env.BUILD_SHARD == "build_and_unit_tests") {
  // Make a full build
  const child = spawn('npm build');

  // Run unit tests

} else if (process.env.BUILD_SHARD == "integration_tests") {
  // Run integration tests

} else if (process.env.BUILD_SHARD == "widget_tests") {
  // Run tests of all added widgets

}
