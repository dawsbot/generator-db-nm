'use strict';
module.exports = function () {
  const argLength = arguments.length;
  const arg1 = arguments[0];

  // validate arguments
  /*
  if (typeof arg1 !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof arg1}`);
  }
  */
  if (argLength !== <%= argLength %>) {
    throw new Error(`Expected <%= argLength %> arguments, got ${argLength}`);
  }

  return `${arg1} & ${argLength}`;
};
