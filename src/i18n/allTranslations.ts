import {
  accelerationTranslations,
  angleTranslations,
  apparentPowerTranslations,
  areaTranslations,
  chargeTranslations,
  currentTranslations,
  digitalTranslations,
  distanceTranslations,
  eachTranslations,
  energyTranslations,
  forceTranslations,
  TranslationKey
} from './type';

export type AllTranslations = Record<TranslationKey, string>;

export default Object.freeze<AllTranslations>({
  ...accelerationTranslations,
  ...angleTranslations,
  ...apparentPowerTranslations,
  ...areaTranslations,
  ...chargeTranslations,
  ...currentTranslations,
  ...digitalTranslations,
  ...distanceTranslations,
  ...eachTranslations,
  ...energyTranslations,
  ...forceTranslations,
  SINGULAR_HERTZ: 'Hertz',
  SINGULAR_MILLIHERTZ: 'Millihertz',
  SINGULAR_KILOHERTZ: 'Kilohertz',
  SINGULAR_MEGAHERTZ: 'Megahertz',
  SINGULAR_GIGAHERTZ: 'Gigahertz',
  SINGULAR_TERAHERTZ: 'Terahertz',
  SINGULAR_RPM: 'Rotation per minute',
  SINGULAR_DEGREE_PER_SECOND: 'Degree per second',
  SINGULAR_RADIAN_PER_SECOND: 'Radian per second',
  PLURAL_HERTZ: 'Hertz',
  PLURAL_MILLIHERTZ: 'Millihertz',
  PLURAL_KILOHERTZ: 'Kilohertz',
  PLURAL_MEGAHERTZ: 'Megahertz',
  PLURAL_GIGAHERTZ: 'Gigahertz',
  PLURAL_TERAHERTZ: 'Terahertz',
  PLURAL_RPM: 'Rotations per minute',
  PLURAL_DEGREE_PER_SECOND: 'Degrees per second',
  PLURAL_RADIAN_PER_SECOND: 'Radians per second',
  SINGULAR_MINUTE_PER_KILOMETRE: 'Minute per kilometre',
  SINGULAR_SECOND_PER_METRE: 'Second per metre',
  SINGULAR_MINUTE_PER_MILE: 'Minute per mile',
  SINGULAR_SECOND_PER_FOOT: 'Second per foot',
  PLURAL_MINUTE_PER_KILOMETRE: 'Minutes per kilometre',
  PLURAL_SECOND_PER_METRE: 'Seconds per metre',
  PLURAL_MINUTE_PER_MILE: 'Minutes per mile',
  PLURAL_SECOND_PER_FOOT: 'Seconds per foot',
  SINGULAR_GRAM: 'Gram',
  SINGULAR_MICROGRAM: 'Microgram',
  SINGULAR_MILLIGRAM: 'Milligram',
  SINGULAR_KILOGRAM: 'Kilogram',
  SINGULAR_METRIC_TONNE: 'Metric Tonne',
  SINGULAR_OUNCE: 'Ounce',
  SINGULAR_POUND: 'Pound',
  SINGULAR_TON: 'Ton',
  PLURAL_GRAM: 'Grams',
  PLURAL_MICROGRAM: 'Micrograms',
  PLURAL_MILLIGRAM: 'Milligrams',
  PLURAL_KILOGRAM: 'Kilograms',
  PLURAL_METRIC_TONNE: 'Metric Tonnes',
  PLURAL_OUNCE: 'Ounces',
  PLURAL_POUND: 'Pounds',
  PLURAL_TON: 'Tons',
  SINGULAR_WATT: 'Watt',
  SINGULAR_MILLIWATT: 'Milliwatt',
  SINGULAR_KILOWATT: 'Kilowatt',
  SINGULAR_MEGAWATT: 'Megawatt',
  SINGULAR_GIGAWATT: 'Gigawatt',
  SINGULAR_HORSE_POWER: 'Horsepower (metric)',
  SINGULAR_BTU_PER_SECOND: 'British thermal unit per second',
  SINGULAR_FOOT_POUND_PER_SECOND: 'Foot-pound per second',
  SINGULAR_IMPERIAL_HORSE_POWER: 'Horsepower (British)',
  PLURAL_WATT: 'Watts',
  PLURAL_MILLIWATT: 'Milliwatts',
  PLURAL_KILOWATT: 'Kilowatts',
  PLURAL_MEGAWATT: 'Megawatts',
  PLURAL_GIGAWATT: 'Gigawatts',
  PLURAL_HORSE_POWER: 'Horsepower (metric)',
  PLURAL_BTU_PER_SECOND: 'British thermal units per second',
  PLURAL_FOOT_POUND_PER_SECOND: 'Foot-pounds per second',
  PLURAL_IMPERIAL_HORSE_POWER: 'Horsepower (British)',
  SINGULAR_LUX: 'Lux',
  SINGULAR_FOOT_CANDLE: 'Foot-candle',
  PLURAL_LUX: 'Lux',
  PLURAL_FOOT_CANDLE: 'Foot-candles',
  SINGULAR_PART_PER_MILLION: 'Part-per Million',
  SINGULAR_PART_PER_BILLION: 'Part-per Billion',
  SINGULAR_PART_PER_TRILLION: 'Part-per Trillion',
  SINGULAR_PART_PER_QUADRILLION: 'Part-per Quadrillion',
  PLURAL_PART_PER_MILLION: 'Parts-per Million',
  PLURAL_PART_PER_BILLION: 'Parts-per Billion',
  PLURAL_PART_PER_TRILLION: 'Parts-per Trillion',
  PLURAL_PART_PER_QUADRILLION: 'Parts-per Quadrillion',
  SINGULAR_PIECE: 'Piece',
  SINGULAR_BAKERS_DOZEN: 'Bakers Dozen',
  SINGULAR_COUPLE: 'Couple',
  SINGULAR_DOZEN_DOZEN: 'Dozen Dozen',
  SINGULAR_GREAT_GROSS: 'Great Gross',
  SINGULAR_GROSS: 'Gross',
  SINGULAR_SMALL_GROSS: 'Small Gross',
  SINGULAR_HALF_DOZEN: 'Half Dozen',
  SINGULAR_LONG_HUNDRED: 'Long Hundred',
  SINGULAR_REAM: 'Reams',
  SINGULAR_SCORES: 'Scores',
  SINGULAR_TRIO: 'Trio',
  PLURAL_PIECE: 'Pieces',
  PLURAL_BAKERS_DOZEN: 'Bakers Dozen',
  PLURAL_COUPLE: 'Couples',
  PLURAL_DOZEN_DOZEN: 'Dozen Dozen',
  PLURAL_GREAT_GROSS: 'Great Gross',
  PLURAL_GROSS: 'Gross',
  PLURAL_SMALL_GROSS: 'Small Gross',
  PLURAL_HALF_DOZEN: 'Half Dozen',
  PLURAL_LONG_HUNDRED: 'Long Hundred',
  PLURAL_REAM: 'Reams',
  PLURAL_SCORES: 'Scores',
  PLURAL_TRIO: 'Trio',
  SINGULAR_PASCAL: 'Pascal',
  SINGULAR_KILOPASCAL: 'Kilopascal',
  SINGULAR_MEGAPASCAL: 'Megapascal',
  SINGULAR_HECTOPASCAL: 'Hectopascal',
  SINGULAR_BAR: 'Bar',
  SINGULAR_TORR: 'Torr',
  SINGULAR_MILLIMETRE_OF_MERCURY: 'Millimetre of mercury',
  SINGULAR_POUND_PER_SQUARE_INCH: 'Pound per square inch',
  SINGULAR_KILOPOUND_PER_SQUARE_INCH: 'Kilopound per square inch',
  SINGULAR_INCH_OF_MERCURY: 'Inch of mercury',
  PLURAL_PASCAL: 'Pascals',
  PLURAL_KILOPASCAL: 'Kilopascals',
  PLURAL_MEGAPASCAL: 'Megapascals',
  PLURAL_HECTOPASCAL: 'Hectopascals',
  PLURAL_BAR: 'Bar',
  PLURAL_TORR: 'Torr',
  PLURAL_MILLIMETRE_OF_MERCURY: 'Millimetres of mercury',
  PLURAL_POUND_PER_SQUARE_INCH: 'Pounds per square inch',
  PLURAL_KILOPOUND_PER_SQUARE_INCH: 'Kilopound per square inch',
  PLURAL_INCH_OF_MERCURY: 'Inches of mercury',
  SINGULAR_VOLT_AMPERE_REACTIVE_HOUR: 'Volt-Ampere Reactive Hour',
  SINGULAR_MILLIVOLT_AMPERE_REACTIVE_HOUR: 'Millivolt-Ampere Reactive Hour',
  SINGULAR_KILOVOLT_AMPERE_REACTIVE_HOUR: 'Kilovolt-Ampere Reactive Hour',
  SINGULAR_MEGAVOLT_AMPERE_REACTIVE_HOUR: 'Megavolt-Ampere Reactive Hour',
  SINGULAR_GIGAVOLT_AMPERE_REACTIVE_HOUR: 'Gigavolt-Ampere Reactive Hour',
  PLURAL_VOLT_AMPERE_REACTIVE_HOUR: 'Volt-Amperes Reactive Hour',
  PLURAL_MILLIVOLT_AMPERE_REACTIVE_HOUR: 'Millivolt-Amperes Reactive Hour',
  PLURAL_KILOVOLT_AMPERE_REACTIVE_HOUR: 'Kilovolt-Amperes Reactive Hour',
  PLURAL_MEGAVOLT_AMPERE_REACTIVE_HOUR: 'Megavolt-Amperes Reactive Hour',
  PLURAL_GIGAVOLT_AMPERE_REACTIVE_HOUR: 'Gigavolt-Amperes Reactive Hour',
  SINGULAR_VOLT_AMPERE_REACTIVE: 'Volt-Ampere Reactive',
  SINGULAR_MILLIVOLT_AMPERE_REACTIVE: 'Millivolt-Ampere Reactive',
  SINGULAR_KILOVOLT_AMPERE_REACTIVE: 'Kilovolt-Ampere Reactive',
  SINGULAR_MEGAVOLT_AMPERE_REACTIVE: 'Megavolt-Ampere Reactive',
  SINGULAR_GIGAVOLT_AMPERE_REACTIVE: 'Gigavolt-Ampere Reactive',
  PLURAL_VOLT_AMPERE_REACTIVE: 'Volt-Amperes Reactive',
  PLURAL_MILLIVOLT_AMPERE_REACTIVE: 'Millivolt-Amperes Reactive',
  PLURAL_KILOVOLT_AMPERE_REACTIVE: 'Kilovolt-Amperes Reactive',
  PLURAL_MEGAVOLT_AMPERE_REACTIVE: 'Megavolt-Amperes Reactive',
  PLURAL_GIGAVOLT_AMPERE_REACTIVE: 'Gigavolt-Amperes Reactive',
  SINGULAR_METRE_PER_SECOND: 'Metre per second',
  SINGULAR_KILOMETRE_PER_HOUR: 'Kilometre per hour',
  SINGULAR_METRE_PER_HOUR: 'Metre per hour',
  SINGULAR_MILE_PER_HOUR: 'Mile per hour',
  SINGULAR_KNOT: 'Knot',
  SINGULAR_FOOT_PER_SECOND: 'Foot per second',
  PLURAL_METRE_PER_SECOND: 'Metres per second',
  PLURAL_KILOMETRE_PER_HOUR: 'Kilometres per hour',
  PLURAL_METRE_PER_HOUR: 'Metres per hour',
  PLURAL_MILE_PER_HOUR: 'Miles per hour',
  PLURAL_KNOT: 'Knots',
  PLURAL_FOOT_PER_SECOND: 'Feet per second',
  SINGULAR_CELSIUS: 'Degree Celsius',
  SINGULAR_KELVIN: 'Degree Kelvin',
  SINGULAR_FAHRENHEIT: 'Degree Fahrenheit',
  SINGULAR_RANKINE: 'Degree Rankine',
  PLURAL_CELSIUS: 'Degrees Celsius',
  PLURAL_KELVIN: 'Degrees Kelvin',
  PLURAL_FAHRENHEIT: 'Degrees Fahrenheit',
  PLURAL_RANKINE: 'Degrees Rankine',
  SINGULAR_NANOSECOND: 'Nanosecond',
  SINGULAR_MICROSECOND: 'Microsecond',
  SINGULAR_MILLISECOND: 'Millisecond',
  SINGULAR_SECOND: 'Second',
  SINGULAR_MINUTE: 'Minute',
  SINGULAR_HOUR: 'Hour',
  SINGULAR_DAY: 'Day',
  SINGULAR_WEEK: 'Week',
  SINGULAR_MONTH: 'Month',
  SINGULAR_YEAR: 'Year',
  PLURAL_NANOSECOND: 'Nanoseconds',
  PLURAL_MICROSECOND: 'Microseconds',
  PLURAL_MILLISECOND: 'Milliseconds',
  PLURAL_SECOND: 'Seconds',
  PLURAL_MINUTE: 'Minutes',
  PLURAL_HOUR: 'Hours',
  PLURAL_DAY: 'Days',
  PLURAL_WEEK: 'Weeks',
  PLURAL_MONTH: 'Months',
  PLURAL_YEAR: 'Years',
  SINGULAR_VOLT: 'Volt',
  SINGULAR_MILLIVOLT: 'Millivolt',
  SINGULAR_KILOVOLT: 'Kilovolt',
  PLURAL_VOLT: 'Volts',
  PLURAL_MILLIVOLT: 'Millivolts',
  PLURAL_KILOVOLT: 'Kilovolts',
  SINGULAR_CUBIC_MILLIMETER: 'Cubic Millimeter',
  SINGULAR_CUBIC_CENTIMETER: 'Cubic Centimeter',
  SINGULAR_MILLILITRE: 'Millilitre',
  SINGULAR_CENTILITRE: 'Centilitre',
  SINGULAR_DECILITRE: 'Decilitre',
  SINGULAR_LITRE: 'Litre',
  SINGULAR_KILOLITRE: 'Kilolitre',
  SINGULAR_CUBIC_METER: 'Cubic meter',
  SINGULAR_CUBIC_KILOMETER: 'Cubic kilometer',
  SINGULAR_TEASPOON: 'Teaspoon',
  SINGULAR_TABLESPOON: 'Tablespoon',
  SINGULAR_CUBIC_INCH: 'Cubic inch',
  SINGULAR_FLUID_OUNCE: 'Fluid Ounce',
  SINGULAR_CUP: 'Cup',
  SINGULAR_PINT: 'Pint',
  SINGULAR_QUART: 'Quart',
  SINGULAR_GALLON: 'Gallon',
  SINGULAR_CUBIC_FOOT: 'Cubic foot',
  SINGULAR_CUBIC_YARD: 'Cubic yard',
  SINGULAR_KRYDDMATTET: 'Kryddmåttet',
  SINGULAR_TESKED: 'Tesked',
  SINGULAR_MATSKED: 'Matsked',
  SINGULAR_KAFFEKOPP: 'Kaffekopp',
  SINGULAR_GLAS: 'Glas',
  SINGULAR_KANNA: 'Kanna',
  PLURAL_CUBIC_MILLIMETER: 'Cubic Millimeters',
  PLURAL_CUBIC_CENTIMETER: 'Cubic Centimeters',
  PLURAL_MILLILITRE: 'Millilitres',
  PLURAL_CENTILITRE: 'Centilitres',
  PLURAL_DECILITRE: 'Decilitres',
  PLURAL_LITRE: 'Litres',
  PLURAL_KILOLITRE: 'Kilolitres',
  PLURAL_CUBIC_METER: 'Cubic meters',
  PLURAL_CUBIC_KILOMETER: 'Cubic kilometers',
  PLURAL_TEASPOON: 'Teaspoons',
  PLURAL_TABLESPOON: 'Tablespoons',
  PLURAL_CUBIC_INCH: 'Cubic inches',
  PLURAL_FLUID_OUNCE: 'Fluid Ounces',
  PLURAL_CUP: 'Cups',
  PLURAL_PINT: 'Pints',
  PLURAL_QUART: 'Quarts',
  PLURAL_GALLON: 'Gallons',
  PLURAL_CUBIC_FOOT: 'Cubic feet',
  PLURAL_CUBIC_YARD: 'Cubic yards',
  PLURAL_KRYDDMATTET: 'Kryddmått',
  PLURAL_TESKED: 'Teskedar',
  PLURAL_MATSKED: 'Matskedar',
  PLURAL_KAFFEKOPP: 'Kaffekoppar',
  PLURAL_GLAS: 'Glas',
  PLURAL_KANNA: 'Kannor',
  SINGULAR_CUBIC_MILLIMETER_PER_SECOND: 'Cubic Millimeter per second',
  SINGULAR_CUBIC_CENTIMETER_PER_SECOND: 'Cubic Centimeter per second',
  SINGULAR_MILLILITRE_PER_SECOND: 'Millilitre per second',
  SINGULAR_CENTILITRE_PER_SECOND: 'Centilitre per second',
  SINGULAR_DECILITRE_PER_SECOND: 'Decilitre per second',
  SINGULAR_LITRE_PER_SECOND: 'Litre per second',
  SINGULAR_LITRE_PER_MINUTE: 'Litre per minute',
  SINGULAR_LITRE_PER_HOUR: 'Litre per hour',
  SINGULAR_KILOLITRE_PER_SECOND: 'Kilolitre per second',
  SINGULAR_KILOLITRE_PER_MINUTE: 'Kilolitre per minute',
  SINGULAR_KILOLITRE_PER_HOUR: 'Kilolitre per hour',
  SINGULAR_CUBIC_METER_PER_SECOND: 'Cubic meter per second',
  SINGULAR_CUBIC_METER_PER_MINUTE: 'Cubic meter per minute',
  SINGULAR_CUBIC_METER_PER_HOUR: 'Cubic meter per hour',
  SINGULAR_CUBIC_KILOMETER_PER_SECOND: 'Cubic kilometer per second',
  SINGULAR_TEASPOON_PER_SECOND: 'Teaspoon per second',
  SINGULAR_TABLESPOON_PER_SECOND: 'Tablespoon per second',
  SINGULAR_CUBIC_INCH_PER_SECOND: 'Cubic inch per second',
  SINGULAR_CUBIC_INCH_PER_MINUTE: 'Cubic inch per minute',
  SINGULAR_CUBIC_INCH_PER_HOUR: 'Cubic inch per hour',
  SINGULAR_FLUID_OUNCE_PER_SECOND: 'Fluid Ounce per second',
  SINGULAR_FLUID_OUNCE_PER_MINUTE: 'Fluid Ounce per minute',
  SINGULAR_FLUID_OUNCE_PER_HOUR: 'Fluid Ounce per hour',
  SINGULAR_CUP_PER_SECOND: 'Cup per second',
  SINGULAR_PINT_PER_SECOND: 'Pint per second',
  SINGULAR_PINT_PER_MINUTE: 'Pint per minute',
  SINGULAR_PINT_PER_HOUR: 'Pint per hour',
  SINGULAR_QUART_PER_SECOND: 'Quart per second',
  SINGULAR_GALLON_PER_SECOND: 'Gallon per second',
  SINGULAR_GALLON_PER_MINUTE: 'Gallon per minute',
  SINGULAR_GALLON_PER_HOUR: 'Gallon per hour',
  SINGULAR_CUBIC_FOOT_PER_SECOND: 'Cubic foot per second',
  SINGULAR_CUBIC_FOOT_PER_MINUTE: 'Cubic foot per minute',
  SINGULAR_CUBIC_FOOT_PER_HOUR: 'Cubic foot per hour',
  SINGULAR_CUBIC_YARD_PER_SECOND: 'Cubic yard per second',
  SINGULAR_CUBIC_YARD_PER_MINUTE: 'Cubic yard per minute',
  SINGULAR_CUBIC_YARD_PER_HOUR: 'Cubic yard per hour',
  PLURAL_CUBIC_MILLIMETER_PER_SECOND: 'Cubic Millimeters per second',
  PLURAL_CUBIC_CENTIMETER_PER_SECOND: 'Cubic Centimeters per second',
  PLURAL_MILLILITRE_PER_SECOND: 'Millilitres per second',
  PLURAL_CENTILITRE_PER_SECOND: 'Centilitres per second',
  PLURAL_DECILITRE_PER_SECOND: 'Decilitres per second',
  PLURAL_LITRE_PER_SECOND: 'Litres per second',
  PLURAL_LITRE_PER_MINUTE: 'Litres per minute',
  PLURAL_LITRE_PER_HOUR: 'Litres per hour',
  PLURAL_KILOLITRE_PER_SECOND: 'Kilolitres per second',
  PLURAL_KILOLITRE_PER_MINUTE: 'Kilolitres per minute',
  PLURAL_KILOLITRE_PER_HOUR: 'Kilolitres per hour',
  PLURAL_CUBIC_METER_PER_SECOND: 'Cubic meters per second',
  PLURAL_CUBIC_METER_PER_MINUTE: 'Cubic meters per minute',
  PLURAL_CUBIC_METER_PER_HOUR: 'Cubic meters per hour',
  PLURAL_CUBIC_KILOMETER_PER_SECOND: 'Cubic kilometers per second',
  PLURAL_TEASPOON_PER_SECOND: 'Teaspoons per second',
  PLURAL_TABLESPOON_PER_SECOND: 'Tablespoons per second',
  PLURAL_CUBIC_INCH_PER_SECOND: 'Cubic inches per second',
  PLURAL_CUBIC_INCH_PER_MINUTE: 'Cubic inches per minute',
  PLURAL_CUBIC_INCH_PER_HOUR: 'Cubic inches per hour',
  PLURAL_FLUID_OUNCE_PER_SECOND: 'Fluid Ounces per second',
  PLURAL_FLUID_OUNCE_PER_MINUTE: 'Fluid Ounces per minute',
  PLURAL_FLUID_OUNCE_PER_HOUR: 'Fluid Ounces per hour',
  PLURAL_CUP_PER_SECOND: 'Cups per second',
  PLURAL_PINT_PER_SECOND: 'Pints per second',
  PLURAL_PINT_PER_MINUTE: 'Pints per minute',
  PLURAL_PINT_PER_HOUR: 'Pints per hour',
  PLURAL_QUART_PER_SECOND: 'Quarts per second',
  PLURAL_GALLON_PER_SECOND: 'Gallons per second',
  PLURAL_GALLON_PER_MINUTE: 'Gallons per minute',
  PLURAL_GALLON_PER_HOUR: 'Gallons per hour',
  PLURAL_CUBIC_FOOT_PER_SECOND: 'Cubic feet per second',
  PLURAL_CUBIC_FOOT_PER_MINUTE: 'Cubic feet per minute',
  PLURAL_CUBIC_FOOT_PER_HOUR: 'Cubic feet per hour',
  PLURAL_CUBIC_YARD_PER_SECOND: 'Cubic yards per second',
  PLURAL_CUBIC_YARD_PER_MINUTE: 'Cubic yards per minute',
  PLURAL_CUBIC_YARD_PER_HOUR: 'Cubic yards per hour'
});
