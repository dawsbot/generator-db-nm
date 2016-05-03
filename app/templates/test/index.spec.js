import test from 'ava';
import <%= camelModuleName %> from '../src';

test('valid args', t => {
  t.pass();
  /*
  t.throws(() => {
    <%= camelModuleName %>();
  }, TypeError);
  t.throws(() => {
    <%= camelModuleName %>();
  }, Error);
  */
});

test('title', t => {
  t.is(<%= camelModuleName %>('myArg1'), 'myArg1 & 1');
});
