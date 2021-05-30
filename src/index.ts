export { convert } from './convert';
export * from './definitions';
export { describe } from './describe';
export { getUnit } from './getUnit';
export { possibilities } from './possibilities';

// export const convertToBest: (dto: ConvertToBestDto, value: number) => number = uncurryN(2, (dto: ConvertToBestDto) => {
//   const fromConversion = getUnit(dto.from);

//   if (isNil(fromConversion)) throw new Error(`Incompatible unit '${dto.from}' for *from* parameter`);

//   const filteredPossibilities = pipe(
//     (conversion: Conversion) => possibilities(conversion.measure),
//     without(dto.exclude ?? [])
//   )(fromConversion);

//   return (value: number) => {
//     return 0;
//   };
// });

// /**
//  * Represents a conversion path
//  */

// toBest(options?: { exclude?: string[]; cutOffNumber?: number }) {
//     if (this.origin == null) throw new Error('.toBest must be called after .from');

//     options = Object.assign(
//       {
//         exclude: [],
//         cutOffNumber: 1
//       },
//       options
//     );

//     let best = null;
//     /**
//       Looks through every possibility for the 'best' available unit.
//       i.e. Where the value has the fewest numbers before the decimal point,
//       but is still higher than 1.
//     */
//     for (const possibility of this.possibilities()) {
//       const unit = this.describe(possibility);
//       const isIncluded = options?.exclude?.indexOf(possibility) === -1;

//       if (isIncluded && unit.system === this.origin.system) {
//         const result = this.to(possibility);
//         const cutOffNumber = options?.cutOffNumber ?? 0;
//         if (best == null || (result >= cutOffNumber && result < best.val)) {
//           best = {
//             val: result,
//             unit: possibility,
//             singular: unit.singular,
//             plural: unit.plural
//           };
//         }
//       }
//     }

//     return best;
//   }

//   private describeUnit(unit: Conversion): UnitDescription {
//     return {
//       abbr: unit.abbr,
//       measure: unit.measure,
//       system: unit.system,
//       singular: unit.unit.name.singular,
//       plural: unit.unit.name.plural
//     };
//   }
// }
