'use strict';
module.exports = function (arg1, opts) {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof str}`);
  }

  opts = opts || 'sorry, no options';
  console.log(`arg1: ${str} & opts: ${opts}`
  return `${str} & rainbows`;
};
