import { Translations } from './type';

export class TranslationModule<TTranslationKeys extends string> {
  private _defaultTranslations: Translations<TTranslationKeys>;
  private _translations: Translations<TTranslationKeys>;

  constructor(defaultTranslations: Translations<TTranslationKeys> = {}) {
    this._defaultTranslations = { ...this._defaultTranslations, ...defaultTranslations };
    this.resetTranslations();
  }

  /**
   * Merges the current translations with an object containing translations.
   *
   * @param translations The object containing the merged translations
   */
  mergeTranslations(translations: Translations<TTranslationKeys>): void | never {
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
