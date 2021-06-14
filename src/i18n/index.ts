import { mergeDeepRight } from 'ramda';

import { TranslationKey, Translations } from './type';

export class TranslationModule {
  private _defaultTranslations: Translations;
  private _translations: Translations;

  constructor(defaultTranslations: Translations = {}) {
    this._defaultTranslations = mergeDeepRight(this._defaultTranslations, defaultTranslations);
    this.resetTranslations();
  }

  /**
   * Overrides the default english translations with an object containing custom unit translations.
   *
   * @param translations The object containing the translations you want to override
   */
  mergeTranslations(translations: Translations): void | never {
    this._translations = mergeDeepRight(this._defaultTranslations, translations);
  }

  /**
   * Resets the translations to their original state
   */
  resetTranslations() {
    this._translations = this._defaultTranslations;
  }

  /**
   * @param key The translation key
   * @returns The current translation value for the given key or the key if the translation is missing
   */
  getTranslationByKey(key: TranslationKey) {
    return this._translations[key] ?? key;
  }
}

export { default as allTranslations } from './allTranslations';
export * from './allTranslations';
export * from './type';
