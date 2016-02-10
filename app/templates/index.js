'use strict';
module.exports = function (arg1, opts) {
  if (typeof arg1 !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof arg1}`);
  }

  opts = opts || 'sorry, no options';
  console.log(`arg1: ${arg1} & opts: ${opts}`);
  return `${arg1} & rainbows`;
};
