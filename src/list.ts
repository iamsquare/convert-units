import { map, pipe } from 'ramda';

import describe from './describe';
import possibilities from './possibilities';
import { Maybe, Measure, UnitDescription } from './type';

const list = (measure?: Maybe<Measure>): UnitDescription[] =>
  pipe((m: Maybe<Measure>) => possibilities(m), map(describe))(measure);

export default list;
