import { forEach, values } from 'ramda';

import convertToBest from '../convertToBest';
import { ChargeEnum, MetricDistanceEnum } from '../definitions';
import { BestConversion } from '../type';

forEach<{ label: string; value: BestConversion; expected: BestConversion }>(
  ({ label, value, expected }) => test(label, () => expect(value).toEqual(expected)),
  [
    {
      label: 'Best mm',
      value: convertToBest({}, MetricDistanceEnum.MILLIMETER, 1200),
      expected: {
        value: 1.2,
        unitType: MetricDistanceEnum.METER
      }
    },
    {
      label: 'Should convert negative numbers correctly',
      value: convertToBest({}, ChargeEnum.MILLICOULOMB, -1200),
      expected: {
        value: -1.2,
        unitType: ChargeEnum.COULOMB
      }
    },
    {
      label: 'Excludes measurements',
      value: convertToBest(
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
      value: convertToBest({ exclude: [MetricDistanceEnum.KILOMETER] }, MetricDistanceEnum.KILOMETER, 10),
      expected: {
        value: 1e4,
        unitType: MetricDistanceEnum.METER
      }
    },
    {
      label: 'If all units are excluded return self',
      value: convertToBest({ exclude: [...values(MetricDistanceEnum)] }, MetricDistanceEnum.KILOMETER, 10),
      expected: {
        value: 10,
        unitType: MetricDistanceEnum.KILOMETER
      }
    },
    {
      label: 'Pre-cutoff',
      value: convertToBest({ cutoff: 10 }, MetricDistanceEnum.MILLIMETER, 9e3),
      expected: {
        value: 9e2,
        unitType: MetricDistanceEnum.CENTIMETER
      }
    },
    {
      label: 'Post-cutoff',
      value: convertToBest({ cutoff: 10 }, MetricDistanceEnum.MILLIMETER, 1e4),
      expected: {
        value: 10,
        unitType: MetricDistanceEnum.METER
      }
    }
  ]
);
