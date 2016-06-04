'use strict';
module.exports = function (arg1) {
  // validate arguments
  if (typeof arg1 !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof arg1}`);
  }

  return true;
};
