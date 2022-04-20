export const Breakpoints = {
  sm: 320,
  md: 772,
  lg: 1280,
};

export const MQ = minWidth => {
  return `@media screen and (min-width: ${minWidth}px)`;
};

//   isMobile: useMediaQuery({ maxWidth: 771 }),
//   isTablet: useMediaQuery({ minWidth: 772, maxWidth: 1279 }),
//   isDesctop: useMediaQuery({ minWidth: 1280 }),
