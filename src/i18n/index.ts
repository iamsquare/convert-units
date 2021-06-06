import { allPass, head, includes, keys, mergeDeepRight } from 'ramda';
import { isNotNil } from 'ramda-adjunct';

import defaultTranslations from './defaultTranslations';
import { TranslationKey, TranslationModuleOptions, Translations } from './type';

export class TranslationModule {
  private _defaultLanguage = 'en';
  private _defaultLanguages = ['en'];

  private _language = this._defaultLanguage;
  private _languages = this._defaultLanguages;
  private _translations: Translations = defaultTranslations;

  overrideModule(options: TranslationModuleOptions): void | never {
    const { language: defaultLanguage, translations } = options ?? {};
    const mergedTranslations = mergeDeepRight(this._translations, translations);
    const languages = keys(mergedTranslations);

    if (allPass([isNotNil, (l) => !includes(l, languages)])(defaultLanguage)) {
      throw new Error('Invalid default language');
    }

    this._translations = mergedTranslations;
    this._language = defaultLanguage ?? head(languages);
    this._languages = languages;
  }

  get language() {
    return this._language;
  }

  set language(language: string) {
    if (!includes(language, this._languages)) throw new Error('Invalid language');

    this._language = language;
  }

  getTranslationByKey(key: TranslationKey): string {
    return this._translations[this._language][key];
  }

  toDefault() {
    this._language = this._defaultLanguage;
    this._languages = this._defaultLanguages;
    this._translations = defaultTranslations;
  }
}

export const translationModule = new TranslationModule();

export * from './type';
