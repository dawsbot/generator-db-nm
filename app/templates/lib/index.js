'use strict';
module.exports = function (arg1) {
  // validate all arguments
  if (typeof arg1 !== 'string') {
    throw new TypeError(`Expected a string for arg1, got ${typeof arg1}`);
  }

  return arg1;
};
