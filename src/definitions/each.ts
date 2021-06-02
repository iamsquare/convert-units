export enum EachEnum {
  EACH = 'ea',
  DOZEN = 'dz'
}

const other = {
  [EachEnum.EACH]: {
    name: {
      singular: 'Each',
      plural: 'Each'
    },
    anchor: 1
  },
  [EachEnum.DOZEN]: {
    name: {
      singular: 'Dozen',
      plural: 'Dozens'
    },
    anchor: 12
  }
};

const each = {
  systems: {
    other
  }
};

export default each;
