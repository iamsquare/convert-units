import { map, pipe } from 'ramda';

import describe from './describe';
import possibilities from './possibilities';
import { Maybe, Measure, UnitDescription } from './type';

export default pipe(possibilities, map(describe)) as (measure?: Maybe<Measure>) => UnitDescription[];
