import { always, contains, curry, filter, ifElse, pipe, reduce } from 'ramda';
import { lengthGt } from 'ramda-adjunct';

import { list } from '..';
import convert from './convert';
import { UnitType } from './definitions';
import getUnit from './getUnit';
import { BestConversion, ConvertToBestDto, Measure, UnitDescription } from './type';

const convertToBest = curry((options: Partial<ConvertToBestDto>, from: UnitType, value: number) => {
  const opt: ConvertToBestDto = { cutoff: 1, exclude: [], ...options };

  const fromUnit = getUnit(from);

  return pipe<Measure, UnitDescription[], readonly UnitDescription[], BestConversion>(
    list,
    filter<UnitDescription>((d) => !contains(d.unitType, opt.exclude) && fromUnit.system === d.system),
    ifElse(
      lengthGt(0),
      reduce<UnitDescription, BestConversion>((acc, curr) => {
        const result = convert(fromUnit.unitType, curr.unitType, value);

        if (acc !== null && (Math.abs(result) < Math.abs(opt.cutoff) || Math.abs(result) >= Math.abs(acc.value))) {
          return acc;
        }

        return {
          value: result,
          unitType: curr.unitType
        };
      }, null),
      always({
        value: value,
        unitType: fromUnit.unitType
      })
    )
  )(fromUnit.measure);
});

export default convertToBest;
