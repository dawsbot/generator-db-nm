import test from 'ava';
import fn from './';

test('valid args', t => {
  t.throws(() => {
    fn(false);
  }, TypeError);
  t.throws(() => {
    fn('myArg1', 'myArg2');
  }, Error);
});

test('title', t => {
  t.is(fn('myArg1'), `myArg1 & 1`);
});
