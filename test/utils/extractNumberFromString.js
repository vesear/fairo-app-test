const NOT_A_DIGIT_REGEX = /[^0-9]/g;

export const extractNumberFromString = str => str?.replace(NOT_A_DIGIT_REGEX, '');
