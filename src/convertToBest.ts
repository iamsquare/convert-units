import { contains, curry, filter, ifElse, pipe, reduce } from 'ramda';
import { lengthGt } from 'ramda-adjunct';

import convert from './convert';
import { UnitType } from './definitions';
import getUnit from './getUnit';
import list from './list';
import { BestConversion, ConvertToBestDto, Measure, UnitDescription } from './type';
import { Nullable } from './type/utils.type';

const convertToBest = curry((options: Partial<ConvertToBestDto>, from: UnitType, value: number) => {
  const opt: ConvertToBestDto = { cutoff: 1, exclude: [], ...options };

  const fromUnit = getUnit(from);

  return pipe<Measure, UnitDescription[], readonly UnitDescription[], Nullable<BestConversion>>(
    list,
    filter<UnitDescription>((d) => !contains(d.unitType, opt.exclude) && fromUnit.system === d.system),
    reduce<UnitDescription, Nullable<BestConversion>>((acc, curr) => {
      const result = convert(fromUnit.unitType, curr.unitType, value);

      if (acc !== null && (Math.abs(result) < Math.abs(opt.cutoff) || Math.abs(result) >= Math.abs(acc.value))) {
        return acc;
      }

      return {
        value: result,
        unitType: curr.unitType
      };
    }, null)
  )(fromUnit.measure);
});

export default convertToBest;
