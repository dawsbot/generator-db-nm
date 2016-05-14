import test from 'ava';
import <%= camelModuleName %> from './';

test('valid args', t => {
  t.throws(() => {
    <%= camelModuleName %>();
  }, TypeError);
});

test('title', t => {
  t.is(<%= camelModuleName %>('myArg1'), true);
});
