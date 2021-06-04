import { chain, forEach, values } from 'ramda';

import { possibilities } from '..';
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
  ForceEnum,
  FrequencyEnum,
  ImperialAreaEnum,
  ImperialDistanceEnum,
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

forEach<{ label: string; value: string[]; expected: string[] }>(
  ({ label, value, expected }) => test(label, () => expect(value.sort()).toEqual(expected.sort())),
  [
    {
      label: 'l possibilities',
      value: possibilities('l'),
      expected: [...values(MetricVolumeEnum), ...values(ImperialVolumeEnum), ...values(SwedishVolumeEnum)]
    },
    {
      label: 'kg possibilities',
      value: possibilities('kg'),
      expected: [...values(MetricMassEnum), ...values(ImperialMassEnum)]
    },
    {
      label: 'm possibilities',
      value: possibilities('m'),
      expected: [...values(MetricDistanceEnum), ...values(ImperialDistanceEnum)]
    },
    { label: 'each possibilities', value: possibilities('each'), expected: values(EachEnum) },
    {
      label: 'mass possibilities',
      value: possibilities('mass'),
      expected: [...values(MetricMassEnum), ...values(ImperialMassEnum)]
    },
    {
      label: 'volume possibilities',
      value: possibilities('volume'),
      expected: [...values(MetricVolumeEnum), ...values(ImperialVolumeEnum), ...values(SwedishVolumeEnum)]
    },
    {
      label: 'volume flow rate possibilities',
      value: possibilities('volumeFlowRate'),
      expected: [...values(MetricVolumeFlowEnum), ...values(ImperialVolumeFlowEnum)]
    },
    {
      label: 'distance possibilities',
      value: possibilities('distance'),
      expected: [...values(MetricDistanceEnum), ...values(ImperialDistanceEnum)]
    },
    {
      label: 'temperature possibilities',
      value: possibilities('temperature'),
      expected: [...values(MetricTemperatureEnum), ...values(ImperialTemperatureEnum)]
    },
    { label: 'time possibilities', value: possibilities('time'), expected: values(TimeEnum) },
    {
      label: 'digital possibilities',
      value: possibilities('digital'),
      expected: [...values(BitEnum), ...values(ByteEnum)]
    },
    { label: 'partsPer possibilities', value: possibilities('partsPer'), expected: values(PartsPerEnum) },
    {
      label: 'pressure possibilities',
      value: possibilities('pressure'),
      expected: [...values(MetricPressureEnum), ...values(ImperialPressureEnum)]
    },
    {
      label: 'speed possibilities',
      value: possibilities('speed'),
      expected: [...values(MetricSpeedEnum), ...values(ImperialSpeedEnum)]
    },
    {
      label: 'pace possibilities',
      value: possibilities('pace'),
      expected: [...values(MetricPaceEnum), ...values(ImperialPaceEnum)]
    },
    { label: 'current possibilities', value: possibilities('current'), expected: values(CurrentEnum) },
    { label: 'voltage possibilities', value: possibilities('voltage'), expected: values(VoltageEnum) },
    {
      label: 'power possibilities',
      value: possibilities('power'),
      expected: [...values(MetricPowerEnum), ...values(ImperialPowerEnum)]
    },
    {
      label: 'reactive power possibilities',
      value: possibilities('reactivePower'),
      expected: values(ReactivePowerEnum)
    },
    {
      label: 'apparent power possibilities',
      value: possibilities('apparentPower'),
      expected: values(ApparentPowerEnum)
    },
    { label: 'energy possibilities', value: possibilities('energy'), expected: values(EnergyEnum) },
    {
      label: 'reactive energy possibilities',
      value: possibilities('reactiveEnergy'),
      expected: values(ReactiveEnergyEnum)
    },
    { label: 'frequency possibilities', value: possibilities('frequency'), expected: values(FrequencyEnum) },
    {
      label: 'illuminance possibilities',
      value: possibilities('illuminance'),
      expected: [...values(MetricIlluminanceEnum), ...values(ImperialIlluminanceEnum)]
    },
    { label: 'angle possibilities', value: possibilities('angle'), expected: values(AngleEnum) },
    { label: 'charge possibilities', value: possibilities('charge'), expected: values(ChargeEnum) },
    { label: 'force possibilities', value: possibilities('force'), expected: values(ForceEnum) },
    { label: 'acceleration possibilities', value: possibilities('acceleration'), expected: values(AccelerationEnum) },
    { label: 'pieces possibilities', value: possibilities('pieces'), expected: values(PiecesEnum) },
    { label: 'current possibilities', value: possibilities('current'), expected: values(CurrentEnum) },
    {
      label: 'area possibilities',
      value: possibilities('area'),
      expected: [...values(MetricAreaEnum), ...values(ImperialAreaEnum)]
    },
    {
      label: 'All possibilities',
      value: possibilities(),
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
        ForceEnum,
        FrequencyEnum,
        ImperialAreaEnum,
        ImperialDistanceEnum,
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
