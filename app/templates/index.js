'use strict';
module.exports = function () {
  const argLength = arguments.length;
  /*
  if (typeof arg1 !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof arg1}`);
  }
  */
  if (argLength !== <%= argLength %>) {
    throw new Error(`Expected <%= argLength %> arguments, got ${argLength}`);
  }

  return `${arguments[0]} & ${argLength}`;
};
