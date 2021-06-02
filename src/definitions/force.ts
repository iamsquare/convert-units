export enum ForceEnum {
  NEWTON = 'N',
  KILONEWTON = 'kN',
  POUND_FORCE = 'lbf'
}

const metric = {
  [ForceEnum.NEWTON]: {
    name: {
      singular: 'Newton',
      plural: 'Newtons'
    },
    anchor: 1
  },
  [ForceEnum.KILONEWTON]: {
    name: {
      singular: 'Kilonewton',
      plural: 'Kilonewtons'
    },
    anchor: 1e3
  },
  [ForceEnum.POUND_FORCE]: {
    name: {
      singular: 'Pound-force',
      plural: 'Pound-forces'
    },
    anchor: 4.44822
  }
};

const force = {
  systems: {
    metric
  },
  anchors: {
    metric: {
      unit: ForceEnum.NEWTON,
      ratio: 1
    }
  }
};

export default force;
