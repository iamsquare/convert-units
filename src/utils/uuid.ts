import { replace } from 'ramda';

export const uuidv4 = () =>
  replace(
    /[xy]/g,
    (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    },
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  );
