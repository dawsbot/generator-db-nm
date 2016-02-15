'use strict';
module.exports = function (arg1) {
  if (typeof arg1 !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof arg1}`);
  }
  if (arguments.length !== <%= argLength %>) {
    throw new Error(`Expected <%= argLength %> arguments, got ${arguments.length}`);
  }

  return `${arg1} & ${arguments.length}`;
};
