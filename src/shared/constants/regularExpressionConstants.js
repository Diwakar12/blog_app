const REGULAR_EXPRESSION = {
  SIX_DIGITS_DECIMAL_REGEX: /^\d*(?:\.\d{0,6})?$/i,
  ALPHA_NUMERIC_SPECIAL_CHAR_REGEX: /^[a-zA-Z0-9!@#$&\-`.+, ]*$/,
  ALPHA_NUMERIC_SPECIAL_CHAR_REGEX_UNDERSCORE: /^[a-zA-Z0-9-_ ]*$/,
  TWO_DIGITS_DECIMAL_REGEX: /^\d*(?:\.\d{0,2})?$/i,
  MULTI_INPUT_DECIMALS: /^[0-9:.,]+$/,
  ALPHA_NUMERIC_SPECIAL_CHAR_REGEX_UNDERSCORE_PERCENTAGE: /^[a-zA-Z0-9\-_<>% ]*$/,
  ALPHA_NUMERIC_SPECIAL_CHAR_REGEX_TREATMENT: /^[a-zA-Z0-9-!@#$& ]*$/,
  ALPHA_NUMERIC_SPECIAL_CHAR_REGEX_UNIT_NAME: /^[a-zA-Z0-9-_/ ]*$/
};

const regularExpressionConstants = { ...REGULAR_EXPRESSION };
export default regularExpressionConstants;
