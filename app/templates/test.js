import test from 'ava';
import fn from './';

test('title', t => {
  t.throws( () => {
    fn(false);
  }, TypeError);
  t.is(fn('unicorns'), 'unicorns & rainbows');
});
