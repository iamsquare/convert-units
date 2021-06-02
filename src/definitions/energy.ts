export enum EnergyEnum {
  WATT_HOUR = 'Wh',
  MILLIWATT_HOUR = 'mWh',
  KILOWATT_HOUR = 'kWh',
  MEGAWATT_HOUR = 'MWh',
  GIGAWATT_HOUR = 'GWh',
  JOULE = 'J',
  KILOJOULE = 'kJ'
}

const metric = {
  [EnergyEnum.WATT_HOUR]: {
    name: {
      singular: 'Watt-hour',
      plural: 'Watt-hours'
    },
    anchor: 3.6e3
  },
  [EnergyEnum.MILLIWATT_HOUR]: {
    name: {
      singular: 'Milliwatt-hour',
      plural: 'Milliwatt-hours'
    },
    anchor: 3.6
  },
  [EnergyEnum.KILOWATT_HOUR]: {
    name: {
      singular: 'Kilowatt-hour',
      plural: 'Kilowatt-hours'
    },
    anchor: 3.6e6
  },
  [EnergyEnum.MEGAWATT_HOUR]: {
    name: {
      singular: 'Megawatt-hour',
      plural: 'Megawatt-hours'
    },
    anchor: 3.6e9
  },
  [EnergyEnum.GIGAWATT_HOUR]: {
    name: {
      singular: 'Gigawatt-hour',
      plural: 'Gigawatt-hours'
    },
    anchor: 3.6e12
  },
  [EnergyEnum.JOULE]: {
    name: {
      singular: 'Joule',
      plural: 'Joules'
    },
    anchor: 1
  },
  [EnergyEnum.KILOJOULE]: {
    name: {
      singular: 'Kilojoule',
      plural: 'Kilojoules'
    },
    anchor: 1e3
  }
};

const energy = {
  systems: {
    metric
  }
};

export default energy;
