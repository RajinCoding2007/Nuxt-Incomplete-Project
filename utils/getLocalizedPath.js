export const getLocalizedPath = (
  path,
  locales,
  locale,
  defaultLocale,
  strategy
) => {
  if (checkType(locales) !== "array" || locales.length === 0) {
    return path;
  }

  return path;
};
