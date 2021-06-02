export enum AngleEnum {
  RADIANS = 'rad',
  DEGREES = 'deg',
  GRADIANS = 'grad',
  ARCMINUTES = 'arcmin',
  ARCSECONDS = 'arcsec'
}

const metric = {
  [AngleEnum.RADIANS]: {
    name: {
      singular: 'Radian',
      plural: 'Radians'
    },
    anchor: 180 / Math.PI
  },
  [AngleEnum.DEGREES]: {
    name: {
      singular: 'Degree',
      plural: 'Degrees'
    },
    anchor: 1
  },
  [AngleEnum.GRADIANS]: {
    name: {
      singular: 'Gradian',
      plural: 'Gradians'
    },
    anchor: 9 / 10
  },
  [AngleEnum.ARCMINUTES]: {
    name: {
      singular: 'Arcminute',
      plural: 'Arcminutes'
    },
    anchor: 1 / 60
  },
  [AngleEnum.ARCSECONDS]: {
    name: {
      singular: 'Arcsecond',
      plural: 'Arcseconds'
    },
    anchor: 1 / 3600
  }
};

const angle = {
  systems: {
    metric
  }
};

export default angle;
