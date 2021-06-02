export enum AccelerationEnum {
  G0 = 'g0',
  G_SUN = 'g-sun',
  G_MERCURY = 'g-mercury',
  G_VENUS = 'g-venus',
  G_MARS = 'g-mars',
  G_SATURN = 'g-saturn',
  G_JUPITER = 'g-jupiter',
  G_NEPTUNE = 'g-neptune',
  G_PLUTO = 'g-pluto',
  G_MOON = 'g-moon',
  METRE_PER_SECOND_SQUARED = 'm/s2'
}

const metric = {
  [AccelerationEnum.G0]: {
    name: {
      singular: 'g0',
      plural: 'g0s'
    },
    anchor: 9.80665
  },
  [AccelerationEnum.G_MOON]: {
    name: {
      singular: 'g-moon',
      plural: 'g-moons'
    },
    anchor: 1.62
  },
  [AccelerationEnum.G_SUN]: {
    name: {
      singular: 'g-sun',
      plural: 'g-suns'
    },
    anchor: 274
  },
  [AccelerationEnum.G_MERCURY]: {
    name: {
      singular: 'g-mercury',
      plural: 'g-mercuries'
    },
    anchor: 3.7
  },
  [AccelerationEnum.G_VENUS]: {
    name: {
      singular: 'g-venus',
      plural: 'g-venuses'
    },
    anchor: 8.87
  },
  [AccelerationEnum.G_MARS]: {
    name: {
      singular: 'g-mars',
      plural: 'g-marses'
    },
    anchor: 3.69
  },
  [AccelerationEnum.G_SATURN]: {
    name: {
      singular: 'g-saturn',
      plural: 'g-saturns'
    },
    anchor: 10.44
  },
  [AccelerationEnum.G_JUPITER]: {
    name: {
      singular: 'g-jupiter',
      plural: 'g-jupiters'
    },
    anchor: 24.79
  },
  [AccelerationEnum.G_NEPTUNE]: {
    name: {
      singular: 'g-neptune',
      plural: 'g-neptunes'
    },
    anchor: 11.15
  },
  [AccelerationEnum.G_PLUTO]: {
    name: {
      singular: 'g-pluto',
      plural: 'g-plutos'
    },
    anchor: 0.62
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
      unit: AccelerationEnum.G0,
      ratio: 1
    }
  }
};

export default acceleration;
