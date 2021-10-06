/*
 * https://docs.microsoft.com/en-ca/cpp/c-language/cpp-integer-limits?view=msvc-160
 * https://docs.microsoft.com/en-ca/cpp/c-language/limits-on-floating-point-constants?view=msvc-160
 * https://docs.microsoft.com/en-us/cpp/cpp/data-type-ranges?view=msvc-160
 * */
import { TypeSpecifier } from "../data-objects/LanguageKeyWords";
import NumberTypeInterval from "./NumberTypeInterval";

const uShortInterval = new NumberTypeInterval(0, 65_535);
const shortIntInterval = new NumberTypeInterval(-32_768, 32_767);
const intInterval = new NumberTypeInterval(-2_147_483_647, 2_147_483_647);
const uIntInterval = new NumberTypeInterval(0, 4_294_967_295);
const longInterval = new NumberTypeInterval(-2_147_483_647, 2_147_483_647);
const longLongInterval = new NumberTypeInterval(
  -9_223_372_036_854_775_807,
  9_223_372_036_854_775_807
);
const uLongLongInterval = new NumberTypeInterval(0, 18_446_744_073_709_551_615);
const doubleInterval = new NumberTypeInterval(-1.7e308, 1.7e308);
const infinityInterval = new NumberTypeInterval(-Infinity, Infinity);

export const numberLimits: { [k in TypeSpecifier]: NumberTypeInterval } = {
  [TypeSpecifier.CHAR]: new NumberTypeInterval(-128, 127),
  [TypeSpecifier.SIGNED_CHAR]: new NumberTypeInterval(-128, 127),
  [TypeSpecifier.UNSIGNED_CHAR]: new NumberTypeInterval(0, 255),
  [TypeSpecifier.SHORT]: shortIntInterval,
  [TypeSpecifier.SHORT_INT]: shortIntInterval,
  [TypeSpecifier.SIGNED_SHORT]: shortIntInterval,
  [TypeSpecifier.SIGNED_SHORT_INT]: shortIntInterval,
  [TypeSpecifier.UNSIGNED_SHORT]: uShortInterval,
  [TypeSpecifier.UNSIGNED_SHORT_INT]: uShortInterval,
  [TypeSpecifier.INT]: intInterval,
  [TypeSpecifier.SIGNED]: intInterval,
  [TypeSpecifier.SIGNED_INT]: intInterval,
  [TypeSpecifier.UNSIGNED]: uIntInterval,
  [TypeSpecifier.UNSIGNED_INT]: uIntInterval,
  [TypeSpecifier.UNSIGNED_LONG]: uIntInterval,
  [TypeSpecifier.UNSIGNED_LONG_INT]: uIntInterval,
  [TypeSpecifier.LONG]: longInterval,
  [TypeSpecifier.SIGNED_LONG]: longInterval,
  [TypeSpecifier.LONG_INT]: longInterval,
  [TypeSpecifier.SIGNED_LONG_INT]: longInterval,
  [TypeSpecifier.LONG_LONG]: longLongInterval,
  [TypeSpecifier.SIGNED_LONG_LONG]: longLongInterval,
  [TypeSpecifier.LONG_LONG_INT]: longLongInterval,
  [TypeSpecifier.SIGNED_LONG_LONG_INT]: longLongInterval,
  [TypeSpecifier.UNSIGNED_LONG_LONG]: uLongLongInterval,
  [TypeSpecifier.UNSIGNED_LONG_LONG_INT]: uLongLongInterval,
  [TypeSpecifier.WCHAR_T]: new NumberTypeInterval(0, 65_535),
  [TypeSpecifier.BOOL]: infinityInterval,
  [TypeSpecifier.FLOAT]: new NumberTypeInterval(-3.402823e38, 3.402823e38),
  [TypeSpecifier.DOUBLE]: doubleInterval,
  [TypeSpecifier.LONG_DOUBLE]: doubleInterval,
  [TypeSpecifier.VOID]: infinityInterval,
  [TypeSpecifier.AUTO]: infinityInterval,
};
