export function validateMobileNumber(value) {
  if (typeof value != "string") return false; // we only process strings!
  return /^[789]\d{9}$/.test(value);
}
