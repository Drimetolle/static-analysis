import TypeNames from "./linter/TypeNames";
import UndeclaredVariable from "./UndeclaredVariable";
import CheckScope from "./CheckScope";
import VariableNames from "./linter/VariableNames";
import CognitiveComplexity from "./CognitiveComplexity";

export default [
  UndeclaredVariable,
  CheckScope,
  VariableNames,
  TypeNames,
  CognitiveComplexity,
];
