import TypeNames from "./linter/TypeNames";
import CheckScope from "./variables/CheckScope";
import VariableNames from "./linter/VariableNames";
import CognitiveComplexity from "./CognitiveComplexity";
import CheckPrivateFieldName from "./linter/CheckPrivateFieldName";
import InfinityLoopTruePredicate from "./loops/InfinityLoopTruePredicate";
import ShortGlobalVariable from "./linter/ShortGlobalVariable";
import Rule from "../linter/Rule";
import UnsafeFunctions from "./functions/UnsafeFunctions";
import StringInCStyle from "./variables/StringInCStyle";
import ConstNames from "./linter/ConstNames";
import UseConstInsteadMacro from "./variables/UseConstInsteadMacro";
import UnnamedFunctionParameters from "./functions/UnnamedFunctionParameters";
import ReturnForNotVoidFunction from "./functions/ReturnForNotVoidFunction";
import CheckUserInput from "./variables/CheckUserInput";

export interface AnalyzerRule {
  id: string | number;
  rule: {
    new (...args: any[]): Rule;
  };
}

const AllRules: Array<AnalyzerRule> = [
  { id: 2, rule: CheckScope },
  { id: 3, rule: VariableNames },
  { id: 4, rule: TypeNames },
  { id: 5, rule: CognitiveComplexity },
  { id: 6, rule: CheckPrivateFieldName },
  { id: 7, rule: InfinityLoopTruePredicate },
  { id: 8, rule: ShortGlobalVariable },
  { id: 9, rule: UnsafeFunctions },
  { id: 10, rule: StringInCStyle },
  { id: 11, rule: ConstNames },
  { id: 12, rule: UseConstInsteadMacro },
  { id: 13, rule: UnnamedFunctionParameters },
  { id: 14, rule: ReturnForNotVoidFunction },
  { id: 15, rule: CheckUserInput },
];

export default AllRules;
