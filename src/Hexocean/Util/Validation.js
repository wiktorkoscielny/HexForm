export const REQUIRED = (value) => (value ? undefined : "Required");
export const NUMBER_VALIDATOR = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
export const TEXT_VALIDATOR = (value) =>
  /^[a-zA-Z]+$/.test(value) ? undefined : "Only character allowed";
