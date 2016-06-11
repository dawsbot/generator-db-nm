#!/usr/bin/env node
'use strict';
const meow = require('meow');
const updateNotifier = require('update-notifier');
const <%= camelModuleName %> = require('./');

const cli = meow([
  `Usage
    $ <%= moduleName %> [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ <%= moduleName %>
      hackathons`
]);

updateNotifier({pkg: cli.pkg, updateCheckInterval: 3600000}).notify();

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns'));
