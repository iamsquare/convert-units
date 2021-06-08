export enum MetricForceEnum {
  NEWTON = 'N',
  KILONEWTON = 'kN'
}

export enum ImperialForceEnum {
  POUND_FORCE = 'lbf'
}

const metric = {
  [MetricForceEnum.NEWTON]: {
    name: {
      singular: 'Newton',
      plural: 'Newtons'
    },
    anchor: 1
  },
  [MetricForceEnum.KILONEWTON]: {
    name: {
      singular: 'Kilonewton',
      plural: 'Kilonewtons'
    },
    anchor: 1e3
  }
};

const imperial = {
  [ImperialForceEnum.POUND_FORCE]: {
    name: {
      singular: 'Pound-force',
      plural: 'Pounds-force'
    },
    anchor: 1
  }
};

const force = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricForceEnum.NEWTON,
      ratio: {
        imperial: 1 / 4.44822
      }
    },
    imperial: {
      unit: ImperialForceEnum.POUND_FORCE,
      ratio: {
        metric: 4.44822
      }
    }
  }
};

export default force;
