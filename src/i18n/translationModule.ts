import { mergeDeepRight } from 'ramda';

import defaultTranslations from './defaultTranslations';
import { TranslationKey, Translations } from './type';

export class TranslationModule {
  private _translations: Translations = defaultTranslations;

  mergeTranslations(translations: Translations): void | never {
    this._translations = mergeDeepRight(defaultTranslations, translations);
  }

  resetTranslations() {
    this._translations = defaultTranslations;
  }

  getTranslationByKey(key: TranslationKey) {
    return this._translations[key] ?? this._translations['MISSING_TRANSLATION'];
  }
}
