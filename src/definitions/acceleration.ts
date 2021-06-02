export enum AccelerationEnum {
  G_FORCE = 'g-force',
  METRE_PER_SECOND_SQUARED = 'm/s2'
}

const metric = {
  [AccelerationEnum.G_FORCE]: {
    name: {
      singular: 'g-force',
      plural: 'g-forces'
    },
    anchor: 9.80665
  },
  [AccelerationEnum.METRE_PER_SECOND_SQUARED]: {
    name: {
      singular: 'Metre per second squared',
      plural: 'Metres per second squared'
    },
    anchor: 1
  }
};

const acceleration = {
  systems: {
    metric
  },
  anchors: {
    metric: {
      unit: AccelerationEnum.G_FORCE,
      ratio: 1
    }
  }
};

export default acceleration;
