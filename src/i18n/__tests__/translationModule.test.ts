/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AccelerationEnum, describe as _describe } from '../../';
import { translationModule } from '../';
import defaultTranslations from '../defaultTranslations';
import { AccelerationTranslationEnum } from '../type';

const translationTestValue = 'test-value';
const defaultTranslationsClone = { ...defaultTranslations };

afterEach(() => {
  translationModule.resetTranslations();
});

test('mergeTranslations', () => {
  translationModule.mergeTranslations({ [AccelerationTranslationEnum.SINGULAR_G0]: translationTestValue });

  expect(translationModule.getTranslationByKey(AccelerationTranslationEnum.SINGULAR_G0)).toBe(translationTestValue);
  expect(_describe(AccelerationEnum.G0).singular).toBe(translationTestValue);
});

test('resetTranslations', () => {
  translationModule.mergeTranslations({ [AccelerationTranslationEnum.SINGULAR_G0]: translationTestValue });
  translationModule.resetTranslations();
  console.log(_describe(AccelerationEnum.G0));

  expect(_describe(AccelerationEnum.G0).singular).toBe(defaultTranslationsClone.SINGULAR_G0);
});

test('getTranslationByKey', () => {
  expect(translationModule.getTranslationByKey(AccelerationTranslationEnum.SINGULAR_G0)).toBe(
    defaultTranslationsClone.SINGULAR_G0
  );
  //@ts-ignore
  expect(translationModule.getTranslationByKey('not-a-string')).toBe('MISSING_TRANSLATION');
});
