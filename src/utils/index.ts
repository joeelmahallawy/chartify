export const sizes = {
  xs: 500,
  sm: 800,
  md: 1000,
  lg: 1200,
  xl: 1400,
  xxl: 1600,
};

// NOTE: CHanged from min-width => min-width and max-width =>max-width
// phones
export const phoneWidth = `@media only screen and (max-width: ${sizes.xs}px)`;

// tablets
export const tabletWidth = `@media only screen and (min-width: ${sizes.xs}px) and (max-width: ${sizes.md}px)`;

// ipad
export const ipadWidth = `@media only screen and (min-width: ${sizes.md}px) and (max-width: ${sizes.lg}px)`;

// laptop
export const laptopWidth = `@media only screen and (min-width: ${sizes.lg}px) and (max-width: ${sizes.xxl}px)`;

// monitors
export const monitorWidth = `@media (min-width: ${sizes.xxl}px)`;
