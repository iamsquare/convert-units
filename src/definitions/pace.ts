export enum MetricPaceEnum {
  MINUTE_PER_KILOMETRE = 'min/km',
  SECOND_PER_METRE = 's/m'
}

export enum ImperialPaceEnum {
  MINUTE_PER_MILE = 'min/mi',
  SECOND_PER_FOOT = 's/ft'
}

const metric = {
  [MetricPaceEnum.MINUTE_PER_KILOMETRE]: {
    name: {
      singular: 'Minute per kilometre',
      plural: 'Minutes per kilometre'
    },
    anchor: 0.06
  },
  [MetricPaceEnum.SECOND_PER_METRE]: {
    name: {
      singular: 'Second per metre',
      plural: 'Seconds per metre'
    },
    anchor: 1
  }
};

const imperial = {
  [ImperialPaceEnum.MINUTE_PER_MILE]: {
    name: {
      singular: 'Minute per mile',
      plural: 'Minutes per mile'
    },
    anchor: 0.0113636
  },
  [ImperialPaceEnum.SECOND_PER_FOOT]: {
    name: {
      singular: 'Second per foot',
      plural: 'Seconds per foot'
    },
    anchor: 1
  }
};

const pace = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricPaceEnum.SECOND_PER_METRE,
      ratio: {
        imperial: 0.3048
      }
    },
    imperial: {
      unit: ImperialPaceEnum.SECOND_PER_FOOT,
      ratio: {
        metric: 1 / 0.3048
      }
    }
  }
};

export default pace;
