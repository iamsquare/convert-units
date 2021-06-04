# iamsquare/convert-units

[![NPM](https://img.shields.io/npm/v/@iamsquare/convert-units.svg?style=flat-square)](https://www.npmjs.com/package/@iamsquare/convert-units) [![GitHub issues](https://img.shields.io/github/issues-raw/iamsquare/convert-units.svg?style=flat-square)](https://github.com/iamsquare/complex.js/issues) ![GitHub](https://img.shields.io/github/license/iamsquare/convert-units?style=flat-square) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@iamsquare/convert-units?style=flat-square)

> A handy utility for converting between quantities in different units.

## Installation

```shell
npm i @iamsquare/convert-units
```

## Usage

`@iamsquare/convert-units` is a functional port with extended type support of [`convert-units`](https://www.npmjs.com/package/convert-units).

Here's how you convert metric units for volume:

```js
import { convert } from '@iamsquare/convert-units';

convert('l', 'ml', 1);
// 1000
```

Jump from imperial to metric units the same way:

```js
convert('lb', 'kg', 1);
// 0.4536... (tested to 4 significant figures)
```

Just be careful not to ask for an impossible conversion!

```js
convert('oz', 'fl-oz', 1);
// throws exception -- you can't go from mass to volume!
```

You can ask to select the best unit for you. Optionally you can explicitly exclude orders of magnitude or specify a cutoff number for selecting the best representation.

```js
convertToBest({}, 'mm', 12000)
// { value: 12, unitType: 'm' } (the smallest unit with a value above 1)
 
convertToBest({ exclude: ['m'] }, 'mm', 12000)
// { value: 1200, unitType: 'cm' } (the smallest unit excluding meters)
 
convertToBest({ cutOffNumber: 10 }, 'mm', 900)
// { value: 900, unitType: 'cm' } (the smallest unit with a value equal to or above 10)
  
convertToBest({ cutOffNumber: 10 }, 'mm', 1000)
// { value: 10, unitType: 'm' } (the smallest unit with a value equal to or above 10)
```

You can get a list of the measurement types supported with `measures`

```js
measures();
// [ 'length', 'mass', 'volume', ... ]
```

If you ever want to know the possible conversions for a _unit_, just use `possibilities`

```js
import { possibilities } = from '@iamsquare/convert-units';

possibilities('l');
// [ 'ml', 'l', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal' ]

possibilities('kg');
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ]
```

You can also get the possible conversions for a _measure_:

```js
possibilities('mass');
// [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'mt', 't' ]
```

You can also get the all the available units:

```js
possibilities();
// [ 'mm', 'cm', 'm', 'in', 'ft-us', 'ft', 'mi', ... ];
```

To get a detailed description of a unit, use `describe`

```js
describe('kg');
```

```js
{
  unitType: 'kg',
  measure: 'mass',
  system: 'metric',
  singular: 'Kilogram',
  plural: 'Kilograms'
}
```

To get detailed descriptions of all units, use `list`.

```js
list();
```

```js
[
  {
    unitType: 'kg',
    measure: 'mass',
    system: 'metric',
    singular: 'Kilogram',
    plural: 'Kilograms'
  },
  ...
]
```

You can also get detailed description of all units for a measure:

```js
list('mass');
```

```js
[
  {
    unitType: 'kg',
    measure: 'mass',
    system: 'metric',
    singular: 'Kilogram',
    plural: 'Kilograms'
  },
  ...
]
```

### Documentation

For a more in-depth documentation take a look [`here`](http://iamsquare.it/convert-units)

## Supported Units

| **_Measure_** | **_Metric_** | **_Imperial_** | **_Other_** |
|:-:|-|-|-|
| _Acceleration_ | m/s2, g0, g-sun, g-mercury, g-venus, g-mars, g-saturn, g-jupiter, g-neptune, g-pluto, g-moon | - | - |
| _Angle_ | - | - | deg, rad, grad, arcmin, arcsec |
| _Apparent Power_ | - | - | VA, mVA, kVA, MVA, GVA |
| _Area_ | mm2, cm2, m2, ha, km2 | in2, ft2, ac, mi2 | - |
| _Charge_ | - | - | c, mC, μC, nC, pC |
| _Current_ | - | - | A, mA, kA |
| _Digital_ | - | - | b, kb, Mb, Gb, Tb, Pb, kib, Mib, Gib, Tib, Pib, B, kB, MB, GB, TB, PB, kiB, MiB, GiB, TiB, PiB |
| _Distance_ | nm, μm, mm, cm, m, km | in, yd, ft-us, ft, fathom, mi, nMi | - |
| _Each_ | - | - | ea, dz |
| _Energy_ | - | - | Wh, mWh, kWh, MWh, GWh, J, kJ |
| _Force_ | N, kN | lbf | - |
| _Frequency_ | - | - | Hz, mHz, kHz, MHz, GHz, THz, rpm, deg/s, rad/s |
| _Illuminance_ | lx | ft-cd | - |
| _Mass_ | mcg, mg, g, kg, mt | oz, lb, t | - |
| _Pace_ | s/m, min/km | s/ft, min/mi | - |
| _Parts-Per_ | - | - | ppm, ppb, ppt, ppq |
| _Pieces_ | - | - | pcs, bk-doz, cp, doz-doz, doz, gr-gr, gros, half-dozen, long-hundred, ream, scores, sm-gr, trio |
| _Power_ | W, mW, kW, MW, GW, PS | Btu/s, ft-lb/s, hp | - |
| _Pressure_ | Pa, hPa, kPa, MPa, bar, torr, mmHg (**@ 0°C**) | psi, ksi, inHg (**@ 32°F**) | - |
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

Adding new measurement sets is easy. Take a look at
[`src/definitions`](https://github.com/iamsquare/convert-units/tree/master/src/definitions)
to see how it's done.

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
