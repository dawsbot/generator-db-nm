#!/usr/bin/env node
'use strict';
const meow = require('meow');
const updateNotifier = require('update-notifier');
const <%= camelModuleName %> = require('./');

const cli = meow(
  `Usage
    $ <%= moduleName %> [input]

  Options
    --dry  run without executing command. [Default: false]

  Examples
    $ <%= moduleName %>
      hackathons`
, {
  alias: {
    d: 'dry'
  }
});

updateNotifier({pkg: cli.pkg}).notify();

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns'));
