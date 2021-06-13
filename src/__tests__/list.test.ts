import { map } from 'ramda';

import { Converter } from '../converter';
import list from '../list';
import measures, { allMeasures } from '../measures';

const converter = new Converter({ measuresData: allMeasures });

test('list length not 0', () => {
  expect(list(converter).length).not.toBe(0);
});

test('list by measure', () => {
  const full = list(converter);
  const ms = measures(converter);

  map((m) => {
    const l = list(converter, m);

    expect(l.length > 0).toBeTruthy();
    expect(l.length < full.length).toBeTruthy();
  }, ms);
});
