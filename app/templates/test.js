import test from 'ava';
import fn from './';

test('valid args', t => {
  t.pass();
  /*
  t.throws(() => {
    fn();
  }, TypeError);
  t.throws(() => {
    fn();
  }, Error);
  */
});

test('title', t => {
  t.is(fn('myArg1'), `myArg1 & 1`);
});
