import test from 'ava';
import <%= camelModuleName %> from './';

test('invalid arg handling', t => {
  t.throws(() => {
    <%= camelModuleName %>();
  }, TypeError);
});

test('title', t => {
  t.is(<%= camelModuleName %>('myArg1'), true);
});
