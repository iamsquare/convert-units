/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Converter } from '../../converter';
import { AccelerationEnum } from '../../definitions';
import acceleration from '../../definitions/acceleration';
import { default as _describe } from '../../describe';
import allTranslations from '../allTranslations';
import { AccelerationTranslationEnum, accelerationTranslations } from '../type';

const converter = new Converter({ measuresData: { acceleration }, translations: accelerationTranslations });
const converterWithoutTranslations = new Converter({ measuresData: { acceleration } });
const translationTestValue = 'test-value';

afterEach(() => {
  converter.translationModule.resetTranslations();
});

test('mergeTranslations', () => {
  converter.translationModule.mergeTranslations({ [AccelerationTranslationEnum.SINGULAR_G0]: translationTestValue });

  expect(converter.translationModule.getTranslationByKey(AccelerationTranslationEnum.SINGULAR_G0)).toBe(
    translationTestValue
  );
  expect(_describe(converter, AccelerationEnum.G0).name.singular).toBe(translationTestValue);
});

test('resetTranslations', () => {
  converter.translationModule.mergeTranslations({ [AccelerationTranslationEnum.SINGULAR_G0]: translationTestValue });

  converter.translationModule.resetTranslations();

  expect(_describe(converter, AccelerationEnum.G0).name.singular).toBe(allTranslations.SINGULAR_G0);
});

test('getTranslationByKey', () => {
  expect(converter.translationModule.getTranslationByKey(AccelerationTranslationEnum.SINGULAR_G0)).toBe(
    allTranslations.SINGULAR_G0
  );

  expect(
    converterWithoutTranslations.translationModule.getTranslationByKey(AccelerationTranslationEnum.SINGULAR_G0)
  ).toBe(AccelerationTranslationEnum.SINGULAR_G0);

  //@ts-expect-error
  expect(converter.translationModule.getTranslationByKey('not-a-string')).toBe('not-a-string');
});
