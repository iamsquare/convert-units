import { TranslationModule } from './i18n';
import { Translations } from './i18n/type';
import { IConverter, MeasureDictionary } from './type';
import { uuidv4 } from './utils/uuid';

export type ConverterOptions<
  TMeasures extends string,
  TSystems extends string,
  TUnitType extends string,
  TTranslationKeys extends string
> = {
  measuresData: MeasureDictionary<TMeasures, TSystems, TUnitType>;
  translations?: Translations<TTranslationKeys>;
};

export class Converter<
  TMeasures extends string,
  TSystems extends string,
  TUnitType extends string,
  TTranslationKeys extends string
> implements IConverter<TMeasures, TSystems, TUnitType, TTranslationKeys>
{
  private _guid: string;
  private _measuresData: MeasureDictionary<TMeasures, TSystems, TUnitType>;

  constructor(options: ConverterOptions<TMeasures, TSystems, TUnitType, TTranslationKeys>) {
    this._guid = uuidv4();
    this._measuresData = options.measuresData;
    this.translationModule = new TranslationModule(options.translations);
  }

  get guid() {
    return this._guid;
  }
  get measuresData() {
    return this._measuresData;
  }

  translationModule: TranslationModule<TTranslationKeys>;
}
