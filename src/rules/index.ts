import TypeNames from "./linter/TypeNames";
import UndeclaredVariable from "./variables/UndeclaredVariable";
import CheckScope from "./variables/CheckScope";
import VariableNames from "./linter/VariableNames";
import CognitiveComplexity from "./CognitiveComplexity";
import CheckPrivateFieldName from "./variables/CheckPrivateFieldName";
import InfinityLoopTruePredicate from "./loops/InfinityLoopTruePredicate";
import ShortGlobalVariable from "./variables/ShortGlobalVariable";

export default [
  UndeclaredVariable,
  CheckScope,
  VariableNames,
  TypeNames,
  CognitiveComplexity,
  CheckPrivateFieldName,
  InfinityLoopTruePredicate,
  ShortGlobalVariable,
];
