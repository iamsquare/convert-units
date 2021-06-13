import { TranslationModule, Translations } from './i18n';
import { IConverter, MeasureDictionary } from './type';
import { uuidv4 } from './utils/uuid';

export class Converter<TMeasures extends string, TSystems extends string, TUnitType extends string>
  implements IConverter<TMeasures, TSystems, TUnitType>
{
  private _guid: string;
  private _measuresData: MeasureDictionary<TMeasures, TSystems, TUnitType>;

  constructor(options: {
    measuresData: MeasureDictionary<TMeasures, TSystems, TUnitType>;
    translations?: Translations;
  }) {
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

  translationModule: TranslationModule;
}
