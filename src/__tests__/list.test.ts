import { map } from 'ramda';

import { list, measures } from '..';

test('list length not 0', () => {
  expect(list().length).not.toBe(0);
});

test('list by measure', () => {
  const full = list();
  const ms = measures();

  map((m) => {
    const l = list(m);

    expect(l.length > 0).toBeTruthy();
    expect(l.length < full.length).toBeTruthy();
  }, ms);
});
