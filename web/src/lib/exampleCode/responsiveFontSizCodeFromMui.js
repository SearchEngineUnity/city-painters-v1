// /* eslint-disable */

// // Ported from Compass
// // https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// // Emulate the sass function "unit"
// export function getUnit(input) {
//   return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
// }

// // Emulate the sass function "unitless"
// export function toUnitless(length) {
//   return parseFloat(length);
// }

// // Convert any CSS <length> or <percentage> value to any another.
// // From https://github.com/KyleAMathews/convert-css-length
// export function convertLength(baseFontSize) {
//   return (length, toUnit) => {
//     const fromUnit = getUnit(length);

//     // Optimize for cases where `from` and `to` units are accidentally the same.
//     if (fromUnit === toUnit) {
//       return length;
//     }

//     // Convert input length to pixels.
//     let pxLength = toUnitless(length);

//     if (fromUnit !== 'px') {
//       if (fromUnit === 'em') {
//         pxLength = toUnitless(length) * toUnitless(baseFontSize);
//       } else if (fromUnit === 'rem') {
//         pxLength = toUnitless(length) * toUnitless(baseFontSize);
//         return length;
//       }
//     }

//     // Convert length in pixels to the output unit
//     let outputLength = pxLength;
//     if (toUnit !== 'px') {
//       if (toUnit === 'em') {
//         outputLength = pxLength / toUnitless(baseFontSize);
//       } else if (toUnit === 'rem') {
//         outputLength = pxLength / toUnitless(baseFontSize);
//       } else {
//         return length;
//       }
//     }

//     return parseFloat(outputLength.toFixed(5)) + toUnit;
//   };
// }

// export function alignProperty({ size, grid }) {
//   const sizeBelow = size - (size % grid);
//   const sizeAbove = sizeBelow + grid;

//   return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
// }

// // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// // lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// // without changing the relative line height
// export function fontGrid({ lineHeight, pixels, htmlFontSize }) {
//   return pixels / (lineHeight * htmlFontSize);
// }

// export function responsiveProperty({
//   cssProperty,
//   min,
//   max,
//   unit = 'rem',
//   breakpoints = [600, 960, 1280],
//   transform = null,
// }) {
//   const output = {
//     [cssProperty]: `${min}${unit}`,
//   };

//   const factor = (max - min) / breakpoints[breakpoints.length - 1];
//   breakpoints.forEach((breakpoint) => {
//     let value = min + factor * breakpoint;

//     if (transform !== null) {
//       value = transform(value);
//     }

//     output[`@media (min-width:${breakpoint}px)`] = {
//       [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`,
//     };
//   });

//   return output;
// }

// // import MuiError from '@material-ui/utils/macros/MuiError.macro';
// // import { isUnitless, convertLength, responsiveProperty, alignProperty, fontGrid } from './cssUtils';

// export default function responsiveFontSizes(themeInput, options = {}) {
//   const {
//     breakpoints = ['sm', 'md', 'lg'],
//     disableAlign = false,
//     factor = 2,
//     variants = [
//       'h1',
//       'h2',
//       'h3',
//       'h4',
//       'h5',
//       'h6',
//       'subtitle1',
//       'subtitle2',
//       'body1',
//       'body2',
//       'caption',
//       'button',
//       'overline',
//     ],
//   } = options;

//   const theme = { ...themeInput };
//   theme.typography = { ...theme.typography };
//   const { typography } = theme;

//   // Convert between css lengths e.g. em->px or px->rem
//   // Set the baseFontSize for your project. Defaults to 16px (also the browser default).
//   const convert = convertLength(typography.htmlFontSize);
//   const breakpointValues = breakpoints.map((x) => theme.breakpoints.values[x]);

//   variants.forEach((variant) => {
//     const style = typography[variant];
//     const remFontSize = parseFloat(convert(style.fontSize, 'rem'));

//     if (remFontSize <= 1) {
//       return;
//     }

//     const maxFontSize = remFontSize;
//     const minFontSize = 1 + (maxFontSize - 1) / factor;

//     let { lineHeight } = style;

//     if (!isUnitless(lineHeight) && !disableAlign) {
//       throw new MuiError(
//         'Material-UI: Unsupported non-unitless line height with grid alignment.\n' +
//           'Use unitless line heights instead.',
//       );
//     }

//     if (!isUnitless(lineHeight)) {
//       // make it unitless
//       lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
//     }

//     let transform = null;

//     if (!disableAlign) {
//       transform = (value) =>
//         alignProperty({
//           size: value,
//           grid: fontGrid({ pixels: 4, lineHeight, htmlFontSize: typography.htmlFontSize }),
//         });
//     }

//     typography[variant] = {
//       ...style,
//       ...responsiveProperty({
//         cssProperty: 'fontSize',
//         min: minFontSize,
//         max: maxFontSize,
//         unit: 'rem',
//         breakpoints: breakpointValues,
//         transform,
//       }),
//     };
//   });

//   return theme;
// }
