import { chain, forEach, values } from 'ramda';

import { Converter, possibilities } from '..';
import {
  AccelerationEnum,
  AngleEnum,
  ApparentPowerEnum,
  BitEnum,
  ByteEnum,
  ChargeEnum,
  CurrentEnum,
  EachEnum,
  EnergyEnum,
  FrequencyEnum,
  ImperialAreaEnum,
  ImperialDistanceEnum,
  ImperialForceEnum,
  ImperialIlluminanceEnum,
  ImperialMassEnum,
  ImperialPaceEnum,
  ImperialPowerEnum,
  ImperialPressureEnum,
  ImperialSpeedEnum,
  ImperialTemperatureEnum,
  ImperialVolumeEnum,
  ImperialVolumeFlowEnum,
  MetricAreaEnum,
  MetricDistanceEnum,
  MetricForceEnum,
  MetricIlluminanceEnum,
  MetricMassEnum,
  MetricPaceEnum,
  MetricPowerEnum,
  MetricPressureEnum,
  MetricSpeedEnum,
  MetricTemperatureEnum,
  MetricVolumeEnum,
  MetricVolumeFlowEnum,
  PartsPerEnum,
  PiecesEnum,
  ReactiveEnergyEnum,
  ReactivePowerEnum,
  SwedishVolumeEnum,
  TimeEnum,
  VoltageEnum
} from '../definitions';
import { allMeasures } from '../measures';

const converter = new Converter({ measuresData: allMeasures });

forEach<{ label: string; value: string[]; expected: string[] }>(
  ({ label, value, expected }) => test(label, () => expect(value.sort()).toEqual(expected.sort())),
  [
    {
      label: 'l possibilities',
      value: possibilities(converter, 'l'),
      expected: [...values(MetricVolumeEnum), ...values(ImperialVolumeEnum), ...values(SwedishVolumeEnum)]
    },
    {
      label: 'kg possibilities',
      value: possibilities(converter, 'kg'),
      expected: [...values(MetricMassEnum), ...values(ImperialMassEnum)]
    },
    {
      label: 'm possibilities',
      value: possibilities(converter, 'm'),
      expected: [...values(MetricDistanceEnum), ...values(ImperialDistanceEnum)]
    },
    { label: 'each possibilities', value: possibilities(converter, 'each'), expected: values(EachEnum) },
    {
      label: 'mass possibilities',
      value: possibilities(converter, 'mass'),
      expected: [...values(MetricMassEnum), ...values(ImperialMassEnum)]
    },
    {
      label: 'volume possibilities',
      value: possibilities(converter, 'volume'),
      expected: [...values(MetricVolumeEnum), ...values(ImperialVolumeEnum), ...values(SwedishVolumeEnum)]
    },
    {
      label: 'volume flow rate possibilities',
      value: possibilities(converter, 'volumeFlowRate'),
      expected: [...values(MetricVolumeFlowEnum), ...values(ImperialVolumeFlowEnum)]
    },
    {
      label: 'distance possibilities',
      value: possibilities(converter, 'distance'),
      expected: [...values(MetricDistanceEnum), ...values(ImperialDistanceEnum)]
    },
    {
      label: 'temperature possibilities',
      value: possibilities(converter, 'temperature'),
      expected: [...values(MetricTemperatureEnum), ...values(ImperialTemperatureEnum)]
    },
    { label: 'time possibilities', value: possibilities(converter, 'time'), expected: values(TimeEnum) },
    {
      label: 'digital possibilities',
      value: possibilities(converter, 'digital'),
      expected: [...values(BitEnum), ...values(ByteEnum)]
    },
    { label: 'partsPer possibilities', value: possibilities(converter, 'partsPer'), expected: values(PartsPerEnum) },
    {
      label: 'pressure possibilities',
      value: possibilities(converter, 'pressure'),
      expected: [...values(MetricPressureEnum), ...values(ImperialPressureEnum)]
    },
    {
      label: 'speed possibilities',
      value: possibilities(converter, 'speed'),
      expected: [...values(MetricSpeedEnum), ...values(ImperialSpeedEnum)]
    },
    {
      label: 'pace possibilities',
      value: possibilities(converter, 'pace'),
      expected: [...values(MetricPaceEnum), ...values(ImperialPaceEnum)]
    },
    { label: 'current possibilities', value: possibilities(converter, 'current'), expected: values(CurrentEnum) },
    { label: 'voltage possibilities', value: possibilities(converter, 'voltage'), expected: values(VoltageEnum) },
    {
      label: 'power possibilities',
      value: possibilities(converter, 'power'),
      expected: [...values(MetricPowerEnum), ...values(ImperialPowerEnum)]
    },
    {
      label: 'reactive power possibilities',
      value: possibilities(converter, 'reactivePower'),
      expected: values(ReactivePowerEnum)
    },
    {
      label: 'apparent power possibilities',
      value: possibilities(converter, 'apparentPower'),
      expected: values(ApparentPowerEnum)
    },
    { label: 'energy possibilities', value: possibilities(converter, 'energy'), expected: values(EnergyEnum) },
    {
      label: 'reactive energy possibilities',
      value: possibilities(converter, 'reactiveEnergy'),
      expected: values(ReactiveEnergyEnum)
    },
    { label: 'frequency possibilities', value: possibilities(converter, 'frequency'), expected: values(FrequencyEnum) },
    {
      label: 'illuminance possibilities',
      value: possibilities(converter, 'illuminance'),
      expected: [...values(MetricIlluminanceEnum), ...values(ImperialIlluminanceEnum)]
    },
    { label: 'angle possibilities', value: possibilities(converter, 'angle'), expected: values(AngleEnum) },
    { label: 'charge possibilities', value: possibilities(converter, 'charge'), expected: values(ChargeEnum) },
    {
      label: 'force possibilities',
      value: possibilities(converter, 'force'),
      expected: [...values(MetricForceEnum), ...values(ImperialForceEnum)]
    },
    {
      label: 'acceleration possibilities',
      value: possibilities(converter, 'acceleration'),
      expected: values(AccelerationEnum)
    },
    { label: 'pieces possibilities', value: possibilities(converter, 'pieces'), expected: values(PiecesEnum) },
    { label: 'current possibilities', value: possibilities(converter, 'current'), expected: values(CurrentEnum) },
    {
      label: 'area possibilities',
      value: possibilities(converter, 'area'),
      expected: [...values(MetricAreaEnum), ...values(ImperialAreaEnum)]
    },
    {
      label: 'All possibilities',
      value: possibilities(converter),
      expected: chain(values, [
        AccelerationEnum,
        AngleEnum,
        ApparentPowerEnum,
        BitEnum,
        ByteEnum,
        ChargeEnum,
        CurrentEnum,
        EachEnum,
        EnergyEnum,
        FrequencyEnum,
        ImperialAreaEnum,
        ImperialDistanceEnum,
        ImperialForceEnum,
        ImperialIlluminanceEnum,
        ImperialMassEnum,
        ImperialPaceEnum,
        ImperialPowerEnum,
        ImperialPressureEnum,
        ImperialSpeedEnum,
        ImperialTemperatureEnum,
        ImperialVolumeEnum,
        ImperialVolumeFlowEnum,
        MetricAreaEnum,
        MetricDistanceEnum,
        MetricForceEnum,
        MetricIlluminanceEnum,
        MetricMassEnum,
        MetricPaceEnum,
        MetricPowerEnum,
        MetricPressureEnum,
        MetricSpeedEnum,
        MetricTemperatureEnum,
        MetricVolumeEnum,
        MetricVolumeFlowEnum,
        PartsPerEnum,
        PiecesEnum,
        ReactiveEnergyEnum,
        ReactivePowerEnum,
        SwedishVolumeEnum,
        TimeEnum,
        VoltageEnum
      ])
    }
  ]
);
