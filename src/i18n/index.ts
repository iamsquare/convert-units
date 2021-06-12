import { mergeDeepRight } from 'ramda';

import defaultTranslations from './defaultTranslations';
import { TranslationKey, Translations } from './type';

export const translationModule = new (class TranslationModule {
  private _translations: Translations = defaultTranslations;

  /**
   * Overrides the default english translations with an object containing custom unit translations.
   * @param translations The object containing the translations you want to override
   */
  mergeTranslations(translations: Translations): void | never {
    this._translations = mergeDeepRight(defaultTranslations, translations);
  }

  /**
   * Resets the translations to their original state
   */
  resetTranslations() {
    this._translations = defaultTranslations;
  }

  /**
   * @param key The translation key
   * @returns The current translation value for the given key or a fallback translation 'MISSING_TRANSLATION'
   */
  getTranslationByKey(key: TranslationKey) {
    return this._translations[key] ?? this._translations['MISSING_TRANSLATION'];
  }
})();

export * from './type';
