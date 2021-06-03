import { forEach } from 'ramda';

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
    }
  ]
);
