import { map, pipe } from 'ramda';

import { UnitType } from './definitions/type';
import describe from './describe';
import possibilities from './possibilities';
import { Maybe, Measure, UnitDescription } from './type';

const list = (measure?: Maybe<Measure>): UnitDescription[] | never =>
  pipe((m: Maybe<Measure>): UnitType[] | never => possibilities(m), map(describe))(measure);

export default list;
