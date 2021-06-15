# iamsquare/convert-units

[![NPM](https://img.shields.io/npm/v/@iamsquare/convert-units.svg?style=flat-square)](https://www.npmjs.com/package/@iamsquare/convert-units) [![Coverage](https://img.shields.io/coveralls/github/iamsquare/convert-units/master?style=flat-square)](https://coveralls.io/github/iamsquare/convert-units) [![GitHub issues](https://img.shields.io/github/issues-raw/iamsquare/convert-units.svg?style=flat-square)](https://github.com/iamsquare/complex.js/issues) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@iamsquare/convert-units?style=flat-square) [![GitHub](https://img.shields.io/github/license/iamsquare/convert-units?style=flat-square)](https://github.com/iamsquare/convert-units/blob/master/LICENSE)

> A handy utility for converting between quantities in different units.

## Installation

```shell
npm i @iamsquare/convert-units
```

## Usage

`@iamsquare/convert-units` is a functional port of [`convert-units`](https://www.npmjs.com/package/convert-units) with extended type support.

You start by instancing a `Converter`:

```js
import { Converter } from '@iamsquare/convert-units';

const converter = new Converter({ measuresData: { ... }});
```

If you want to use all measure types, just instance `Converter` like so:

```js
import { allMeasures } from '@iamsquare/convert-units';

const converter = new Converter({ measuresData: allMeasures }); // TMeasures => AllMeasures, TSystems => AllSystems, TUnitTypes => AllUnitType
```

If you want to use a subset of all measure type you must declare `TMeasures`, `TSystems` and `TUnitTypes` explicitly (typescript can't infer types on its own if they get too complex. **e.g.**: _two measure types with different systems_):

```js
import {
  Converter,
  area,
  AreaSystems,
  AreaUnits,
  distance,
  DistanceSystems,
  DistanceUnits,
} from '@iamsquare/convert-units';

type Measures = 'area' | 'distance';
type Systems = AreaSystems | DistanceSystems;
type Units = AreaUnits | DistanceUnits;

const converter = new Converter<Measures, Systems, Units>({
  area,
  distance
});
```

Here's how you convert metric units for volume:

```js
import { convert } from '@iamsquare/convert-units';

convert(converter, 'l', 'ml', 1);
// 1000
```

Jump from imperial to metric units the same way:

```js
convert(converter, 'lb', 'kg', 1);
// 0.4536... (tested to 4 significant figures)
```

Just be careful not to ask for an impossible conversion!

```js
convert(converter, 'oz', 'fl-oz', 1);
// throws exception -- you can't go from mass to volume!
```

You can ask to select the best unit for you. Optionally you can explicitly exclude orders of magnitude or specify a cutoff number for selecting the best representation.

```js
convertToBest(converter, {}, 'mm', 12000);
// { value: 12, unitType: 'm' } (the smallest unit with a value above 1)

convertToBest(converter, { exclude: ['m'] }, 'mm', 12000);
// { value: 1200, unitType: 'cm' } (the smallest unit excluding meters)

convertToBest(converter, { cutOffNumber: 10 }, 'mm', 900);
// { value: 900, unitType: 'cm' } (the smallest unit with a value equal to or above 10)

convertToBest(converter, { cutOffNumber: 10 }, 'mm', 1000);
// { value: 10, unitType: 'm' } (the smallest unit with a value equal to or above 10)
```

You can get a list of the measurement types supported with `measures`

```js
measures(converter);
// [ 'distance', 'mass', 'volume', ... ]
```

If you ever want to know the possible conversions for a _unit_, just use `possibilities`

```js
import { possibilities } = from '@iamsquare/convert-units';

possibilities(converter, 'l');
// [ 'ml', 'l', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal' ]

possibilities(converter, 'kg');
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ]
```

You can also get the possible conversions for a _measure_:

```js
possibilities(converter, 'mass');
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't' ]
```

You can also get the all the available units:

```js
possibilities(converter);
// [ 'mm', 'cm', 'm', 'in', 'ft-us', 'ft', 'mi', ... ];
```

To get a detailed description of a unit, use `describe`

```js
describe(converter, 'kg');
```

```js
{
  unitType: 'kg',
  measure: 'mass',
  system: 'metric',
  name: {
    singular: 'SINGULAR_KILOGRAM',
    plural: 'PLURAL_KILOGRAM'
  }
}
```

To get detailed descriptions of all units, use `list`.

```js
list(converter);
```

```js
[
  {
    unitType: 'kg',
    measure: 'mass',
    system: 'metric',
    name: {
      singular: 'SINGULAR_KILOGRAM',
      plural: 'PLURAL_KILOGRAM'
    }
  },
  ...
]
```

You can also get detailed description of all units for a measure:

```js
list(converter, 'mass');
```

```js
[
  {
    unitType: 'kg',
    measure: 'mass',
    system: 'metric',
    name: {
      singular: 'SINGULAR_KILOGRAM',
      plural: 'PLURAL_KILOGRAM'
    }
  },
  ...
]
```

**NOTE**: By default the i18n module is _not_ active so until a translation dictionary is provided `list` and `describe` will return the raw dictionary key instead.

### Documentation

For a more in-depth documentation take a look [`here`](http://iamsquare.it/convert-units)

## Supported Units

| **_Measure_** | **_Metric_** | **_Imperial_** | **_Other_** |
|:-:|-|-|-|
| _Area_ | mm2, cm2, m2, ha, km2 | in2, ft2, ac, mi2 | - |
| _Acceleration_ | g-force, m/s2 | - | - |
| _Angle_ | - | - | deg, rad, grad, arcmin, arcsec |
| _Apparent Power_ | - | - | VA, mVA, kVA, MVA, GVA |
| _Charge_ | - | - | c, mC, μC, nC, pC |
| _Current_ | - | - | A, mA, kA |
| _Digital_ | - | - | b, Kb, Mb, Gb, Tb, B, KB, MB, GB, TB |
| _Energy_ | - | - | Wh, mWh, kWh, MWh, GWh, J, kJ |
| _Force_ | N, kN | lbf | - |
| _Frequency_ | - | - | Hz, mHz, kHz, MHz, GHz, THz, rpm, deg/s, rad/s |
| _Illuminance_ | lx | ft-cd | - |
| _Length_ | nm, μm, mm, cm, m, km | in, yd, ft-us, ft, fathom, mi, nMi | - |
| _Mass_ | mcg, mg, g, kg, mt | oz, lb, t | - |
| _Pace_ | s/m, min/km | s/ft, min/mi | - |
| _Parts-Per_ | - | - | ppm, ppb, ppt, ppq |
| _Pieces_ | - | - | pcs, bk-doz, cp, doz-doz, doz, gr-gr, gros, half-dozen, long-hundred, ream, scores, sm-gr, trio |
| _Power_ | W, mW, kW, MW, GW, PS | Btu/s, ft-lb/s, hp | - |
| _Pressure_ | Pa, hPa, kPa, MPa, bar, torr | psi, ksi | - |
| _Reactive Energy_ | - | - | VARh, mVARh, kVARh, MVARh, GVARh |
| _Reactive Power_ | - | - | VAR, mVAR, kVAR, MVAR, GVAR |
| _Speed_ | m/s, km/h | mph, knot, ft/s | - |
| _Temperature_ | C, K | F, R | - |
| _Time_ | - | - | ns, mu, ms, s, min, h, d, week, month, year |
| _Voltage_ | - | - | V, mV, kV |
| _Volume_ | mm3, cm3, ml, l, kl, m3, km3 | tsp, Tbs, in3, fl-oz, cup, pnt, qt, gal, ft3, yd3 | - |
| _Volume Flow Rate_ | mm3/s, cm3/s, ml/s, cl/s, dl/s, l/s, l/min, l/h, kl/s, kl/min, kl/h, m3/s, m3/min, m3/h, km3/s | tsp/s, Tbs/s, in3/s, in3/min, in3/h, fl-oz/s, fl-oz/min, fl-oz/h, cup/s, pnt/s, pnt/min, pnt/h, qt/s, gal/s, gal/min, gal/h, ft3/s, ft3/min, ft3/h, yd3/s, yd3/min, yd3/h | - |

**NOTE**: these units are exported as enums so that you don't have to remember which unit is which. Also, if you're using this library in a plain `javascript` environment these are useful to avoid annoying typos.

You can check the list of these enums in the [`documentation`](https://iamsquare.it/convert-units).

### Want More?

Adding new measurement type is easy. Check one of these [`definitions`](https://github.com/iamsquare/convert-units/tree/master/src/definitions) to see how they are implemented. When you're done you can import them just like any other measure provided by the library.

```js
import {
  Converter,
  distance,
  DistanceSystems,
  DistanceUnits,
} from '@iamsquare/convert-units';

import {
  customMeasure,
  CustomMeasureSystems,
  CustomUnits
} from './customMeasure';

type Measures = 'customMeasure' | 'distance';
type Systems = CustomMeasureSystems | DistanceSystems;
type Units = CustomUnits | DistanceUnits;

const converter = new Converter<Measures, Systems, Units>({
  customMeasure,
  distance
});
```

Feel free to open a PR if you feel that your custom definition should be added to the library!

## i18n

Each `Converter` instance can be initialized with an additional `translations` property.
For example if you want to use all the measure types and their respective translations, just instance `Converter` like so:

```js
import { Converter, allMeasures, allTranslations } from '@iamsquare/convert-units';

const converter = new Converter({ measureData: allMeasures, translations: allTranslations });
```

Or if you only need a subset of measures:

```js
import {
  Converter,
  area,
  areaTranslations,
  AreaSystems,
  AreaUnits,
  distance,
  distanceTranslations,
  DistanceSystems,
  DistanceUnits
} from '@iamsquare/convert-units';

type Measures = 'area' | 'distance';
type Systems = AreaSystems | DistanceSystems;
type Units = AreaUnits | DistanceUnits;

const converter = new Converter<Measures, Systems, Units>({ measureData: { area, distance }, translations: { ...areaTranslations, ...distanceTranslations }});
```

The `translationModule` inside the `Converter` class exposes three methods:

```javascript
converter.translationModule.setTranslations({ ... })
converter.translationModule.mergeTranslations({ ... })
```

Both accept a JSON containing key-value pairs, where the key is a valid [`translationKey`](https://www.iamsquare.it/convert-units/modules.html#translationkey) and the value is a `string`. The first one overwrites the current translations dictionary, the second merges the two dictionaries together.

```javascript
converter.translationModule.resetTranslations();
```

Resets the translations dictionary to its original state (when the class has been instanced).

```javascript
converter.translationModule.getTranslationByKey(key);
```

Returns the translation for a given key (or the key itself in case it's undefined in the dictionary).

## Dependencies

> This library depends on [`ramda`](https://github.com/ramda/ramda) and [`ramda-extension`](https://github.com/tommmyy/ramda-extension).

These imports are _**not** tree-shaken_, so if you're bundling this library in a project please refer to your bundler's documentation.
Note that _Rollup_ and _Webpack_ should handle tree-shaking without extra-effort.

## Roadmap

Check the kanban board [`here`](https://github.com/orgs/iamsquare/projects/1)

### Development

If you want to help remember to run the command `npm run setup:dev`.
It will install all dependencies and [`husky`](https://www.npmjs.com/package/husky) so that code will get tested and linted before every commit.

## License

Copyright (c) 2021 Marco Cesi, <https://iamsquare.it>

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
