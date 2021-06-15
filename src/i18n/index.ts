import { Translations } from './type';

export class TranslationModule<TTranslationKeys extends string> {
  private _defaultTranslations: Translations<TTranslationKeys> = {};
  private _translations: Translations<TTranslationKeys>;

  constructor(defaultTranslations: Translations<TTranslationKeys> = {}) {
    this._defaultTranslations = { ...this._defaultTranslations, ...defaultTranslations };
    this.resetTranslations();
  }

  /**
   * Set the current translations
   *
   * @param translations The dictionary containing the translations
   */
  setTranslations(translations: Translations<TTranslationKeys>) {
    this._translations = translations;
  }

  /**
   * Merges the current translations with a translation dictionary (if two keys are the same the dictionary passed as parameter takes precedence)
   *
   * @param translations The dictionary containing the merged translations
   */
  mergeTranslations(translations: Translations<TTranslationKeys>) {
    this._translations = { ...this._translations, ...translations };
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
  getTranslationByKey(key: TTranslationKeys) {
    return this._translations[key] ?? key;
  }
}

export { default as allTranslations } from './allTranslations';
export * from './allTranslations';
export * from './type';
