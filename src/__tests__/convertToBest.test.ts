import { forEach, values } from 'ramda';

import { Converter } from '../converter';
import convertToBest from '../convertToBest';
import { ChargeEnum, MetricDistanceEnum } from '../definitions';
import { allMeasures } from '../measures';
import { BestConversion } from '../type';

const converter = new Converter({ measuresData: allMeasures });

forEach<{ label: string; value: BestConversion<string>; expected: BestConversion<string> }>(
  ({ label, value, expected }) => test(label, () => expect(value).toEqual(expected)),
  [
    {
      label: 'Best mm',
      value: convertToBest(converter, {}, MetricDistanceEnum.MILLIMETER, 1200),
      expected: {
        value: 1.2,
        unitType: MetricDistanceEnum.METER
      }
    },
    {
      label: 'Should convert negative numbers correctly',
      value: convertToBest(converter, {}, ChargeEnum.MILLICOULOMB, -1200),
      expected: {
        value: -1.2,
        unitType: ChargeEnum.COULOMB
      }
    },
    {
      label: 'Excludes measurements',
      value: convertToBest(
        converter,
        { exclude: [MetricDistanceEnum.KILOMETER, MetricDistanceEnum.METER] },
        MetricDistanceEnum.MILLIMETER,
        1.2e6
      ),
      expected: {
        value: 1.2e5,
        unitType: MetricDistanceEnum.CENTIMETER
      }
    },
    {
      label: 'Does not break when excluding self from measurement',
      value: convertToBest(converter, { exclude: [MetricDistanceEnum.KILOMETER] }, MetricDistanceEnum.KILOMETER, 10),
      expected: {
        value: 1e4,
        unitType: MetricDistanceEnum.METER
      }
    },
    {
      label: 'Does not break when if excluding units from another measurement',
      value: convertToBest(converter, { exclude: [ChargeEnum.COULOMB] }, MetricDistanceEnum.MILLIMETER, 1200),
      expected: {
        value: 1.2,
        unitType: MetricDistanceEnum.METER
      }
    },
    {
      label: 'If all units are excluded returns null',
      value: convertToBest(converter, { exclude: [...values(MetricDistanceEnum)] }, MetricDistanceEnum.KILOMETER, 10),
      expected: null
    },
    {
      label: 'Pre-cutoff',
      value: convertToBest(converter, { cutoff: 10 }, MetricDistanceEnum.MILLIMETER, 9e3),
      expected: {
        value: 9e2,
        unitType: MetricDistanceEnum.CENTIMETER
      }
    },
    {
      label: 'Post-cutoff',
      value: convertToBest(converter, { cutoff: 10 }, MetricDistanceEnum.MILLIMETER, 1e4),
      expected: {
        value: 10,
        unitType: MetricDistanceEnum.METER
      }
    }
  ]
);
