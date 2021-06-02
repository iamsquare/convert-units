export enum MetricSpeedEnum {
  METRE_PER_SECOND = 'm/s',
  KILOMETRE_PER_HOUR = 'km/h',
  METRE_PER_HOUR = 'm/h'
}

export enum ImperialSpeedEnum {
  MILE_PER_HOUR = 'mph',
  KNOT = 'knot',
  FOOT_PER_SECOND = 'ft/s'
}

const metric = {
  [MetricSpeedEnum.METRE_PER_SECOND]: {
    name: {
      singular: 'Metre per second',
      plural: 'Metres per second'
    },
    anchor: 3.6
  },
  [MetricSpeedEnum.KILOMETRE_PER_HOUR]: {
    name: {
      singular: 'Kilometre per hour',
      plural: 'Kilometres per hour'
    },
    anchor: 1
  },
  [MetricSpeedEnum.METRE_PER_HOUR]: {
    name: {
      singular: 'Metre per hour',
      plural: 'Metres per hour'
    },
    anchor: 1e3
  }
};

const imperial = {
  [ImperialSpeedEnum.MILE_PER_HOUR]: {
    name: {
      singular: 'Mile per hour',
      plural: 'Miles per hour'
    },
    anchor: 1
  },
  [ImperialSpeedEnum.KNOT]: {
    name: {
      singular: 'Knot',
      plural: 'Knots'
    },
    anchor: 1.150779
  },
  [ImperialSpeedEnum.FOOT_PER_SECOND]: {
    name: {
      singular: 'Foot per second',
      plural: 'Feet per second'
    },
    anchor: 0.681818
  }
};

const speed = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricSpeedEnum.KILOMETRE_PER_HOUR,
      ratio: {
        imperial: 1 / 1.609344
      }
    },
    imperial: {
      unit: ImperialSpeedEnum.MILE_PER_HOUR,
      ratio: {
        metric: 1.609344
      }
    }
  }
};

export default speed;
