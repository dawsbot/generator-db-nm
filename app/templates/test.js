import test from 'ava';
import <%= camelModuleName %> from './';

test('title', t => {
  t.is(<%= camelModuleName %>(true), true);
});
