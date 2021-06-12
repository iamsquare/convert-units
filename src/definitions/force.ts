import { ForceTranslationEnum } from '../i18n';
import { Unit, UnitDefinition } from '../type';
import { ForceUnit, ImperialForceUnit, MetricForceUnit } from './type';

export enum MetricForceEnum {
  NEWTON = 'N',
  KILONEWTON = 'kN'
}

export enum ImperialForceEnum {
  POUND_FORCE = 'lbf'
}

const metric: Record<MetricForceUnit, Unit> = {
  [MetricForceEnum.NEWTON]: {
    name: {
      singular: ForceTranslationEnum.SINGULAR_NEWTON,
      plural: ForceTranslationEnum.PLURAL_NEWTON
    },
    anchor: 1
  },
  [MetricForceEnum.KILONEWTON]: {
    name: {
      singular: ForceTranslationEnum.SINGULAR_KILONEWTON,
      plural: ForceTranslationEnum.PLURAL_KILONEWTON
    },
    anchor: 1e3
  }
};

const imperial: Record<ImperialForceUnit, Unit> = {
  [ImperialForceEnum.POUND_FORCE]: {
    name: {
      singular: ForceTranslationEnum.SINGULAR_POUND_FORCE,
      plural: ForceTranslationEnum.PLURAL_POUND_FORCE
    },
    anchor: 1
  }
};

const force: UnitDefinition<'metric' | 'imperial', ForceUnit> = {
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
