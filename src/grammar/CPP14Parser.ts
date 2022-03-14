// Generated from CPP14Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { InputMismatchException } from 'antlr4ts/InputMismatchException';
// @ts-nocheck


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CPP14ParserListener } from "./CPP14ParserListener";

export class CPP14Parser extends Parser {
	public static readonly IntegerLiteral = 1;
	public static readonly CharacterLiteral = 2;
	public static readonly FloatingLiteral = 3;
	public static readonly StringLiteral = 4;
	public static readonly BooleanLiteral = 5;
	public static readonly PointerLiteral = 6;
	public static readonly UserDefinedLiteral = 7;
	public static readonly Include = 8;
	public static readonly Define = 9;
	public static readonly Alignas = 10;
	public static readonly Alignof = 11;
	public static readonly Asm = 12;
	public static readonly Auto = 13;
	public static readonly Bool = 14;
	public static readonly Break = 15;
	public static readonly Case = 16;
	public static readonly Catch = 17;
	public static readonly Char = 18;
	public static readonly Char16 = 19;
	public static readonly Char32 = 20;
	public static readonly Class = 21;
	public static readonly Const = 22;
	public static readonly Constexpr = 23;
	public static readonly Const_cast = 24;
	public static readonly Continue = 25;
	public static readonly Decltype = 26;
	public static readonly Default = 27;
	public static readonly Delete = 28;
	public static readonly Do = 29;
	public static readonly Double = 30;
	public static readonly Dynamic_cast = 31;
	public static readonly Else = 32;
	public static readonly Enum = 33;
	public static readonly Explicit = 34;
	public static readonly Export = 35;
	public static readonly Extern = 36;
	public static readonly False_ = 37;
	public static readonly Final = 38;
	public static readonly Float = 39;
	public static readonly For = 40;
	public static readonly Friend = 41;
	public static readonly Goto = 42;
	public static readonly If = 43;
	public static readonly Inline = 44;
	public static readonly Int = 45;
	public static readonly Long = 46;
	public static readonly Mutable = 47;
	public static readonly Namespace = 48;
	public static readonly New = 49;
	public static readonly Noexcept = 50;
	public static readonly Nullptr = 51;
	public static readonly Operator = 52;
	public static readonly Override = 53;
	public static readonly Private = 54;
	public static readonly Protected = 55;
	public static readonly Public = 56;
	public static readonly Register = 57;
	public static readonly Reinterpret_cast = 58;
	public static readonly Return = 59;
	public static readonly Short = 60;
	public static readonly Signed = 61;
	public static readonly Sizeof = 62;
	public static readonly Static = 63;
	public static readonly Static_assert = 64;
	public static readonly Static_cast = 65;
	public static readonly Struct = 66;
	public static readonly Switch = 67;
	public static readonly Template = 68;
	public static readonly This = 69;
	public static readonly Thread_local = 70;
	public static readonly Throw = 71;
	public static readonly True_ = 72;
	public static readonly Try = 73;
	public static readonly Typedef = 74;
	public static readonly Typeid_ = 75;
	public static readonly Typename_ = 76;
	public static readonly Union = 77;
	public static readonly Unsigned = 78;
	public static readonly Using = 79;
	public static readonly Virtual = 80;
	public static readonly Void = 81;
	public static readonly Volatile = 82;
	public static readonly Wchar = 83;
	public static readonly While = 84;
	public static readonly LeftParen = 85;
	public static readonly RightParen = 86;
	public static readonly LeftBracket = 87;
	public static readonly RightBracket = 88;
	public static readonly LeftBrace = 89;
	public static readonly RightBrace = 90;
	public static readonly Plus = 91;
	public static readonly Minus = 92;
	public static readonly Star = 93;
	public static readonly Div = 94;
	public static readonly Mod = 95;
	public static readonly Caret = 96;
	public static readonly And = 97;
	public static readonly Or = 98;
	public static readonly Tilde = 99;
	public static readonly Not = 100;
	public static readonly Assign = 101;
	public static readonly Less = 102;
	public static readonly Greater = 103;
	public static readonly PlusAssign = 104;
	public static readonly MinusAssign = 105;
	public static readonly StarAssign = 106;
	public static readonly DivAssign = 107;
	public static readonly ModAssign = 108;
	public static readonly XorAssign = 109;
	public static readonly AndAssign = 110;
	public static readonly OrAssign = 111;
	public static readonly LeftShiftAssign = 112;
	public static readonly RightShiftAssign = 113;
	public static readonly Equal = 114;
	public static readonly NotEqual = 115;
	public static readonly LessEqual = 116;
	public static readonly GreaterEqual = 117;
	public static readonly AndAnd = 118;
	public static readonly OrOr = 119;
	public static readonly PlusPlus = 120;
	public static readonly MinusMinus = 121;
	public static readonly Comma = 122;
	public static readonly ArrowStar = 123;
	public static readonly Arrow = 124;
	public static readonly Question = 125;
	public static readonly Colon = 126;
	public static readonly Doublecolon = 127;
	public static readonly Semi = 128;
	public static readonly Dot = 129;
	public static readonly DotStar = 130;
	public static readonly Ellipsis = 131;
	public static readonly Quote = 132;
	public static readonly IncludeQuote = 133;
	public static readonly MultiLineMacro = 134;
	public static readonly Identifier = 135;
	public static readonly DecimalLiteral = 136;
	public static readonly OctalLiteral = 137;
	public static readonly HexadecimalLiteral = 138;
	public static readonly BinaryLiteral = 139;
	public static readonly Integersuffix = 140;
	public static readonly UserDefinedIntegerLiteral = 141;
	public static readonly UserDefinedFloatingLiteral = 142;
	public static readonly UserDefinedStringLiteral = 143;
	public static readonly UserDefinedCharacterLiteral = 144;
	public static readonly Whitespace = 145;
	public static readonly Newline = 146;
	public static readonly BlockComment = 147;
	public static readonly LineComment = 148;
	public static readonly RULE_translationUnit = 0;
	public static readonly RULE_primaryExpression = 1;
	public static readonly RULE_idExpression = 2;
	public static readonly RULE_unqualifiedId = 3;
	public static readonly RULE_qualifiedId = 4;
	public static readonly RULE_nestedNameSpecifier = 5;
	public static readonly RULE_lambdaExpression = 6;
	public static readonly RULE_lambdaIntroducer = 7;
	public static readonly RULE_lambdaCapture = 8;
	public static readonly RULE_captureDefault = 9;
	public static readonly RULE_captureList = 10;
	public static readonly RULE_capture = 11;
	public static readonly RULE_simpleCapture = 12;
	public static readonly RULE_initcapture = 13;
	public static readonly RULE_lambdaDeclarator = 14;
	public static readonly RULE_postfixExpression = 15;
	public static readonly RULE_typeIdOfTheTypeId = 16;
	public static readonly RULE_expressionList = 17;
	public static readonly RULE_pseudoDestructorName = 18;
	public static readonly RULE_unaryExpression = 19;
	public static readonly RULE_unaryOperator = 20;
	public static readonly RULE_newExpression = 21;
	public static readonly RULE_newPlacement = 22;
	public static readonly RULE_newTypeId = 23;
	public static readonly RULE_newDeclarator = 24;
	public static readonly RULE_noPointerNewDeclarator = 25;
	public static readonly RULE_newInitializer = 26;
	public static readonly RULE_deleteExpression = 27;
	public static readonly RULE_noExceptExpression = 28;
	public static readonly RULE_castExpression = 29;
	public static readonly RULE_pointerMemberExpression = 30;
	public static readonly RULE_multiplicativeExpression = 31;
	public static readonly RULE_additiveExpression = 32;
	public static readonly RULE_shiftExpression = 33;
	public static readonly RULE_shiftOperator = 34;
	public static readonly RULE_relationalExpression = 35;
	public static readonly RULE_equalityExpression = 36;
	public static readonly RULE_andExpression = 37;
	public static readonly RULE_exclusiveOrExpression = 38;
	public static readonly RULE_inclusiveOrExpression = 39;
	public static readonly RULE_logicalAndExpression = 40;
	public static readonly RULE_logicalOrExpression = 41;
	public static readonly RULE_conditionalExpression = 42;
	public static readonly RULE_assignmentExpression = 43;
	public static readonly RULE_assignmentOperator = 44;
	public static readonly RULE_expression = 45;
	public static readonly RULE_constantExpression = 46;
	public static readonly RULE_statement = 47;
	public static readonly RULE_labeledStatement = 48;
	public static readonly RULE_expressionStatement = 49;
	public static readonly RULE_compoundStatement = 50;
	public static readonly RULE_statementSeq = 51;
	public static readonly RULE_selectionStatement = 52;
	public static readonly RULE_condition = 53;
	public static readonly RULE_iterationStatement = 54;
	public static readonly RULE_forInitStatement = 55;
	public static readonly RULE_forRangeDeclaration = 56;
	public static readonly RULE_forRangeInitializer = 57;
	public static readonly RULE_jumpStatement = 58;
	public static readonly RULE_declarationStatement = 59;
	public static readonly RULE_declarationseq = 60;
	public static readonly RULE_declaration = 61;
	public static readonly RULE_includeDefinition = 62;
	public static readonly RULE_defineDeclaration = 63;
	public static readonly RULE_fileName = 64;
	public static readonly RULE_blockDeclaration = 65;
	public static readonly RULE_aliasDeclaration = 66;
	public static readonly RULE_simpleDeclaration = 67;
	public static readonly RULE_staticAssertDeclaration = 68;
	public static readonly RULE_emptyDeclaration = 69;
	public static readonly RULE_attributeDeclaration = 70;
	public static readonly RULE_declSpecifier = 71;
	public static readonly RULE_declSpecifierSeq = 72;
	public static readonly RULE_storageClassSpecifier = 73;
	public static readonly RULE_functionSpecifier = 74;
	public static readonly RULE_typedefName = 75;
	public static readonly RULE_typeSpecifier = 76;
	public static readonly RULE_trailingTypeSpecifier = 77;
	public static readonly RULE_typeSpecifierSeq = 78;
	public static readonly RULE_trailingTypeSpecifierSeq = 79;
	public static readonly RULE_simpleTypeSpecifier = 80;
	public static readonly RULE_theTypeName = 81;
	public static readonly RULE_decltypeSpecifier = 82;
	public static readonly RULE_elaboratedTypeSpecifier = 83;
	public static readonly RULE_enumName = 84;
	public static readonly RULE_enumSpecifier = 85;
	public static readonly RULE_enumHead = 86;
	public static readonly RULE_opaqueEnumDeclaration = 87;
	public static readonly RULE_enumkey = 88;
	public static readonly RULE_enumbase = 89;
	public static readonly RULE_enumeratorList = 90;
	public static readonly RULE_enumeratorDefinition = 91;
	public static readonly RULE_enumerator = 92;
	public static readonly RULE_namespaceName = 93;
	public static readonly RULE_originalNamespaceName = 94;
	public static readonly RULE_namespaceDefinition = 95;
	public static readonly RULE_namespaceAlias = 96;
	public static readonly RULE_namespaceAliasDefinition = 97;
	public static readonly RULE_qualifiednamespacespecifier = 98;
	public static readonly RULE_usingDeclaration = 99;
	public static readonly RULE_usingDirective = 100;
	public static readonly RULE_asmDefinition = 101;
	public static readonly RULE_linkageSpecification = 102;
	public static readonly RULE_attributeSpecifierSeq = 103;
	public static readonly RULE_attributeSpecifier = 104;
	public static readonly RULE_alignmentspecifier = 105;
	public static readonly RULE_attributeList = 106;
	public static readonly RULE_attribute = 107;
	public static readonly RULE_attributeNamespace = 108;
	public static readonly RULE_attributeArgumentClause = 109;
	public static readonly RULE_balancedTokenSeq = 110;
	public static readonly RULE_balancedtoken = 111;
	public static readonly RULE_initDeclaratorList = 112;
	public static readonly RULE_initDeclarator = 113;
	public static readonly RULE_declarator = 114;
	public static readonly RULE_pointerDeclarator = 115;
	public static readonly RULE_noPointerDeclarator = 116;
	public static readonly RULE_parametersAndQualifiers = 117;
	public static readonly RULE_trailingReturnType = 118;
	public static readonly RULE_pointerOperator = 119;
	public static readonly RULE_cvqualifierseq = 120;
	public static readonly RULE_cvQualifier = 121;
	public static readonly RULE_refqualifier = 122;
	public static readonly RULE_declaratorid = 123;
	public static readonly RULE_theTypeId = 124;
	public static readonly RULE_abstractDeclarator = 125;
	public static readonly RULE_pointerAbstractDeclarator = 126;
	public static readonly RULE_noPointerAbstractDeclarator = 127;
	public static readonly RULE_abstractPackDeclarator = 128;
	public static readonly RULE_noPointerAbstractPackDeclarator = 129;
	public static readonly RULE_parameterDeclarationClause = 130;
	public static readonly RULE_parameterDeclarationList = 131;
	public static readonly RULE_parameterDeclaration = 132;
	public static readonly RULE_functionDefinition = 133;
	public static readonly RULE_functionBody = 134;
	public static readonly RULE_initializer = 135;
	public static readonly RULE_braceOrEqualInitializer = 136;
	public static readonly RULE_initializerClause = 137;
	public static readonly RULE_initializerList = 138;
	public static readonly RULE_bracedInitList = 139;
	public static readonly RULE_className = 140;
	public static readonly RULE_classSpecifier = 141;
	public static readonly RULE_classHead = 142;
	public static readonly RULE_classHeadName = 143;
	public static readonly RULE_classVirtSpecifier = 144;
	public static readonly RULE_classKey = 145;
	public static readonly RULE_memberSpecification = 146;
	public static readonly RULE_memberdeclaration = 147;
	public static readonly RULE_memberDeclaratorList = 148;
	public static readonly RULE_memberDeclarator = 149;
	public static readonly RULE_virtualSpecifierSeq = 150;
	public static readonly RULE_virtualSpecifier = 151;
	public static readonly RULE_pureSpecifier = 152;
	public static readonly RULE_baseClause = 153;
	public static readonly RULE_baseSpecifierList = 154;
	public static readonly RULE_baseSpecifier = 155;
	public static readonly RULE_classOrDeclType = 156;
	public static readonly RULE_baseTypeSpecifier = 157;
	public static readonly RULE_accessSpecifier = 158;
	public static readonly RULE_conversionFunctionId = 159;
	public static readonly RULE_conversionTypeId = 160;
	public static readonly RULE_conversionDeclarator = 161;
	public static readonly RULE_constructorInitializer = 162;
	public static readonly RULE_memInitializerList = 163;
	public static readonly RULE_memInitializer = 164;
	public static readonly RULE_meminitializerid = 165;
	public static readonly RULE_operatorFunctionId = 166;
	public static readonly RULE_literalOperatorId = 167;
	public static readonly RULE_templateDeclaration = 168;
	public static readonly RULE_templateparameterList = 169;
	public static readonly RULE_templateParameter = 170;
	public static readonly RULE_typeParameter = 171;
	public static readonly RULE_simpleTemplateId = 172;
	public static readonly RULE_templateId = 173;
	public static readonly RULE_templateName = 174;
	public static readonly RULE_templateArgumentList = 175;
	public static readonly RULE_templateArgument = 176;
	public static readonly RULE_typeNameSpecifier = 177;
	public static readonly RULE_explicitInstantiation = 178;
	public static readonly RULE_explicitSpecialization = 179;
	public static readonly RULE_tryBlock = 180;
	public static readonly RULE_functionTryBlock = 181;
	public static readonly RULE_handlerSeq = 182;
	public static readonly RULE_handler = 183;
	public static readonly RULE_exceptionDeclaration = 184;
	public static readonly RULE_throwExpression = 185;
	public static readonly RULE_exceptionSpecification = 186;
	public static readonly RULE_dynamicExceptionSpecification = 187;
	public static readonly RULE_typeIdList = 188;
	public static readonly RULE_noeExceptSpecification = 189;
	public static readonly RULE_theOperator = 190;
	public static readonly RULE_literal = 191;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"translationUnit", "primaryExpression", "idExpression", "unqualifiedId", 
		"qualifiedId", "nestedNameSpecifier", "lambdaExpression", "lambdaIntroducer", 
		"lambdaCapture", "captureDefault", "captureList", "capture", "simpleCapture", 
		"initcapture", "lambdaDeclarator", "postfixExpression", "typeIdOfTheTypeId", 
		"expressionList", "pseudoDestructorName", "unaryExpression", "unaryOperator", 
		"newExpression", "newPlacement", "newTypeId", "newDeclarator", "noPointerNewDeclarator", 
		"newInitializer", "deleteExpression", "noExceptExpression", "castExpression", 
		"pointerMemberExpression", "multiplicativeExpression", "additiveExpression", 
		"shiftExpression", "shiftOperator", "relationalExpression", "equalityExpression", 
		"andExpression", "exclusiveOrExpression", "inclusiveOrExpression", "logicalAndExpression", 
		"logicalOrExpression", "conditionalExpression", "assignmentExpression", 
		"assignmentOperator", "expression", "constantExpression", "statement", 
		"labeledStatement", "expressionStatement", "compoundStatement", "statementSeq", 
		"selectionStatement", "condition", "iterationStatement", "forInitStatement", 
		"forRangeDeclaration", "forRangeInitializer", "jumpStatement", "declarationStatement", 
		"declarationseq", "declaration", "includeDefinition", "defineDeclaration", 
		"fileName", "blockDeclaration", "aliasDeclaration", "simpleDeclaration", 
		"staticAssertDeclaration", "emptyDeclaration", "attributeDeclaration", 
		"declSpecifier", "declSpecifierSeq", "storageClassSpecifier", "functionSpecifier", 
		"typedefName", "typeSpecifier", "trailingTypeSpecifier", "typeSpecifierSeq", 
		"trailingTypeSpecifierSeq", "simpleTypeSpecifier", "theTypeName", "decltypeSpecifier", 
		"elaboratedTypeSpecifier", "enumName", "enumSpecifier", "enumHead", "opaqueEnumDeclaration", 
		"enumkey", "enumbase", "enumeratorList", "enumeratorDefinition", "enumerator", 
		"namespaceName", "originalNamespaceName", "namespaceDefinition", "namespaceAlias", 
		"namespaceAliasDefinition", "qualifiednamespacespecifier", "usingDeclaration", 
		"usingDirective", "asmDefinition", "linkageSpecification", "attributeSpecifierSeq", 
		"attributeSpecifier", "alignmentspecifier", "attributeList", "attribute", 
		"attributeNamespace", "attributeArgumentClause", "balancedTokenSeq", "balancedtoken", 
		"initDeclaratorList", "initDeclarator", "declarator", "pointerDeclarator", 
		"noPointerDeclarator", "parametersAndQualifiers", "trailingReturnType", 
		"pointerOperator", "cvqualifierseq", "cvQualifier", "refqualifier", "declaratorid", 
		"theTypeId", "abstractDeclarator", "pointerAbstractDeclarator", "noPointerAbstractDeclarator", 
		"abstractPackDeclarator", "noPointerAbstractPackDeclarator", "parameterDeclarationClause", 
		"parameterDeclarationList", "parameterDeclaration", "functionDefinition", 
		"functionBody", "initializer", "braceOrEqualInitializer", "initializerClause", 
		"initializerList", "bracedInitList", "className", "classSpecifier", "classHead", 
		"classHeadName", "classVirtSpecifier", "classKey", "memberSpecification", 
		"memberdeclaration", "memberDeclaratorList", "memberDeclarator", "virtualSpecifierSeq", 
		"virtualSpecifier", "pureSpecifier", "baseClause", "baseSpecifierList", 
		"baseSpecifier", "classOrDeclType", "baseTypeSpecifier", "accessSpecifier", 
		"conversionFunctionId", "conversionTypeId", "conversionDeclarator", "constructorInitializer", 
		"memInitializerList", "memInitializer", "meminitializerid", "operatorFunctionId", 
		"literalOperatorId", "templateDeclaration", "templateparameterList", "templateParameter", 
		"typeParameter", "simpleTemplateId", "templateId", "templateName", "templateArgumentList", 
		"templateArgument", "typeNameSpecifier", "explicitInstantiation", "explicitSpecialization", 
		"tryBlock", "functionTryBlock", "handlerSeq", "handler", "exceptionDeclaration", 
		"throwExpression", "exceptionSpecification", "dynamicExceptionSpecification", 
		"typeIdList", "noeExceptSpecification", "theOperator", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'#include'", "'#define'", "'alignas'", "'alignof'", "'asm'", 
		"'auto'", "'bool'", "'break'", "'case'", "'catch'", "'char'", "'char16_t'", 
		"'char32_t'", "'class'", "'const'", "'constexpr'", "'const_cast'", "'continue'", 
		"'decltype'", "'default'", "'delete'", "'do'", "'double'", "'dynamic_cast'", 
		"'else'", "'enum'", "'explicit'", "'export'", "'extern'", "'false'", "'final'", 
		"'float'", "'for'", "'friend'", "'goto'", "'if'", "'inline'", "'int'", 
		"'long'", "'mutable'", "'namespace'", "'new'", "'noexcept'", "'nullptr'", 
		"'operator'", "'override'", "'private'", "'protected'", "'public'", "'register'", 
		"'reinterpret_cast'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'static_assert'", "'static_cast'", "'struct'", "'switch'", "'template'", 
		"'this'", "'thread_local'", "'throw'", "'true'", "'try'", "'typedef'", 
		"'typeid'", "'typename'", "'union'", "'unsigned'", "'using'", "'virtual'", 
		"'void'", "'volatile'", "'wchar_t'", "'while'", "'('", "')'", "'['", "']'", 
		"'{'", "'}'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'&'", "'|'", 
		"'~'", undefined, "'='", "'<'", "'>'", "'+='", "'-='", "'*='", "'/='", 
		"'%='", "'^='", "'&='", "'|='", "'<<='", "'>>='", "'=='", "'!='", "'<='", 
		"'>='", undefined, undefined, "'++'", "'--'", "','", "'->*'", "'->'", 
		"'?'", "':'", "'::'", "';'", "'.'", "'.*'", "'...'", "'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IntegerLiteral", "CharacterLiteral", "FloatingLiteral", "StringLiteral", 
		"BooleanLiteral", "PointerLiteral", "UserDefinedLiteral", "Include", "Define", 
		"Alignas", "Alignof", "Asm", "Auto", "Bool", "Break", "Case", "Catch", 
		"Char", "Char16", "Char32", "Class", "Const", "Constexpr", "Const_cast", 
		"Continue", "Decltype", "Default", "Delete", "Do", "Double", "Dynamic_cast", 
		"Else", "Enum", "Explicit", "Export", "Extern", "False_", "Final", "Float", 
		"For", "Friend", "Goto", "If", "Inline", "Int", "Long", "Mutable", "Namespace", 
		"New", "Noexcept", "Nullptr", "Operator", "Override", "Private", "Protected", 
		"Public", "Register", "Reinterpret_cast", "Return", "Short", "Signed", 
		"Sizeof", "Static", "Static_assert", "Static_cast", "Struct", "Switch", 
		"Template", "This", "Thread_local", "Throw", "True_", "Try", "Typedef", 
		"Typeid_", "Typename_", "Union", "Unsigned", "Using", "Virtual", "Void", 
		"Volatile", "Wchar", "While", "LeftParen", "RightParen", "LeftBracket", 
		"RightBracket", "LeftBrace", "RightBrace", "Plus", "Minus", "Star", "Div", 
		"Mod", "Caret", "And", "Or", "Tilde", "Not", "Assign", "Less", "Greater", 
		"PlusAssign", "MinusAssign", "StarAssign", "DivAssign", "ModAssign", "XorAssign", 
		"AndAssign", "OrAssign", "LeftShiftAssign", "RightShiftAssign", "Equal", 
		"NotEqual", "LessEqual", "GreaterEqual", "AndAnd", "OrOr", "PlusPlus", 
		"MinusMinus", "Comma", "ArrowStar", "Arrow", "Question", "Colon", "Doublecolon", 
		"Semi", "Dot", "DotStar", "Ellipsis", "Quote", "IncludeQuote", "MultiLineMacro", 
		"Identifier", "DecimalLiteral", "OctalLiteral", "HexadecimalLiteral", 
		"BinaryLiteral", "Integersuffix", "UserDefinedIntegerLiteral", "UserDefinedFloatingLiteral", 
		"UserDefinedStringLiteral", "UserDefinedCharacterLiteral", "Whitespace", 
		"Newline", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CPP14Parser._LITERAL_NAMES, CPP14Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CPP14Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CPP14Parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CPP14Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CPP14Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CPP14Parser._ATN, this);
	}
	// @RuleVersion(0)
	public translationUnit(): TranslationUnitContext {
		let _localctx: TranslationUnitContext = new TranslationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CPP14Parser.RULE_translationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CPP14Parser.Include - 8)) | (1 << (CPP14Parser.Define - 8)) | (1 << (CPP14Parser.Alignas - 8)) | (1 << (CPP14Parser.Asm - 8)) | (1 << (CPP14Parser.Auto - 8)) | (1 << (CPP14Parser.Bool - 8)) | (1 << (CPP14Parser.Char - 8)) | (1 << (CPP14Parser.Char16 - 8)) | (1 << (CPP14Parser.Char32 - 8)) | (1 << (CPP14Parser.Class - 8)) | (1 << (CPP14Parser.Const - 8)) | (1 << (CPP14Parser.Constexpr - 8)) | (1 << (CPP14Parser.Decltype - 8)) | (1 << (CPP14Parser.Double - 8)) | (1 << (CPP14Parser.Enum - 8)) | (1 << (CPP14Parser.Explicit - 8)) | (1 << (CPP14Parser.Extern - 8)) | (1 << (CPP14Parser.Float - 8)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CPP14Parser.Friend - 41)) | (1 << (CPP14Parser.Inline - 41)) | (1 << (CPP14Parser.Int - 41)) | (1 << (CPP14Parser.Long - 41)) | (1 << (CPP14Parser.Mutable - 41)) | (1 << (CPP14Parser.Namespace - 41)) | (1 << (CPP14Parser.Operator - 41)) | (1 << (CPP14Parser.Register - 41)) | (1 << (CPP14Parser.Short - 41)) | (1 << (CPP14Parser.Signed - 41)) | (1 << (CPP14Parser.Static - 41)) | (1 << (CPP14Parser.Static_assert - 41)) | (1 << (CPP14Parser.Struct - 41)) | (1 << (CPP14Parser.Template - 41)) | (1 << (CPP14Parser.Thread_local - 41)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CPP14Parser.Typedef - 74)) | (1 << (CPP14Parser.Typename_ - 74)) | (1 << (CPP14Parser.Union - 74)) | (1 << (CPP14Parser.Unsigned - 74)) | (1 << (CPP14Parser.Using - 74)) | (1 << (CPP14Parser.Virtual - 74)) | (1 << (CPP14Parser.Void - 74)) | (1 << (CPP14Parser.Volatile - 74)) | (1 << (CPP14Parser.Wchar - 74)) | (1 << (CPP14Parser.LeftParen - 74)) | (1 << (CPP14Parser.LeftBracket - 74)) | (1 << (CPP14Parser.Star - 74)) | (1 << (CPP14Parser.And - 74)) | (1 << (CPP14Parser.Tilde - 74)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPP14Parser.AndAnd - 118)) | (1 << (CPP14Parser.Doublecolon - 118)) | (1 << (CPP14Parser.Semi - 118)) | (1 << (CPP14Parser.Ellipsis - 118)) | (1 << (CPP14Parser.IncludeQuote - 118)) | (1 << (CPP14Parser.Identifier - 118)))) !== 0)) {
				{
				this.state = 384;
				this.declarationseq();
				}
			}

			this.state = 387;
			this.match(CPP14Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CPP14Parser.RULE_primaryExpression);
		try {
			let _alt: number;
			this.state = 401;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.IntegerLiteral:
			case CPP14Parser.CharacterLiteral:
			case CPP14Parser.FloatingLiteral:
			case CPP14Parser.StringLiteral:
			case CPP14Parser.BooleanLiteral:
			case CPP14Parser.PointerLiteral:
			case CPP14Parser.UserDefinedLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 390;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 389;
						this.literal();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 392;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case CPP14Parser.This:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 394;
				this.match(CPP14Parser.This);
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 395;
				this.match(CPP14Parser.LeftParen);
				this.state = 396;
				this.expression();
				this.state = 397;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Operator:
			case CPP14Parser.Tilde:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 399;
				this.idExpression();
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 400;
				this.lambdaExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idExpression(): IdExpressionContext {
		let _localctx: IdExpressionContext = new IdExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CPP14Parser.RULE_idExpression);
		try {
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 403;
				this.unqualifiedId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 404;
				this.qualifiedId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unqualifiedId(): UnqualifiedIdContext {
		let _localctx: UnqualifiedIdContext = new UnqualifiedIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CPP14Parser.RULE_unqualifiedId);
		try {
			this.state = 417;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 407;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 408;
				this.operatorFunctionId();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 409;
				this.conversionFunctionId();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 410;
				this.literalOperatorId();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 411;
				this.match(CPP14Parser.Tilde);
				this.state = 414;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.Identifier:
					{
					this.state = 412;
					this.className();
					}
					break;
				case CPP14Parser.Decltype:
					{
					this.state = 413;
					this.decltypeSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 416;
				this.templateId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedId(): QualifiedIdContext {
		let _localctx: QualifiedIdContext = new QualifiedIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CPP14Parser.RULE_qualifiedId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.nestedNameSpecifier(0);
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Template) {
				{
				this.state = 420;
				this.match(CPP14Parser.Template);
				}
			}

			this.state = 423;
			this.unqualifiedId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public nestedNameSpecifier(): NestedNameSpecifierContext;
	public nestedNameSpecifier(_p: number): NestedNameSpecifierContext;
	// @RuleVersion(0)
	public nestedNameSpecifier(_p?: number): NestedNameSpecifierContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NestedNameSpecifierContext = new NestedNameSpecifierContext(this._ctx, _parentState);
		let _prevctx: NestedNameSpecifierContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, CPP14Parser.RULE_nestedNameSpecifier, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 426;
				this.theTypeName();
				}
				break;

			case 2:
				{
				this.state = 427;
				this.namespaceName();
				}
				break;

			case 3:
				{
				this.state = 428;
				this.decltypeSpecifier();
				}
				break;
			}
			this.state = 431;
			this.match(CPP14Parser.Doublecolon);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 444;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NestedNameSpecifierContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_nestedNameSpecifier);
					this.state = 433;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 439;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						this.state = 434;
						this.match(CPP14Parser.Identifier);
						}
						break;

					case 2:
						{
						this.state = 436;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CPP14Parser.Template) {
							{
							this.state = 435;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 438;
						this.simpleTemplateId();
						}
						break;
					}
					this.state = 441;
					this.match(CPP14Parser.Doublecolon);
					}
					}
				}
				this.state = 446;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CPP14Parser.RULE_lambdaExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.lambdaIntroducer();
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.LeftParen) {
				{
				this.state = 448;
				this.lambdaDeclarator();
				}
			}

			this.state = 451;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaIntroducer(): LambdaIntroducerContext {
		let _localctx: LambdaIntroducerContext = new LambdaIntroducerContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CPP14Parser.RULE_lambdaIntroducer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(CPP14Parser.LeftBracket);
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.This || _la === CPP14Parser.And || _la === CPP14Parser.Assign || _la === CPP14Parser.Identifier) {
				{
				this.state = 454;
				this.lambdaCapture();
				}
			}

			this.state = 457;
			this.match(CPP14Parser.RightBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaCapture(): LambdaCaptureContext {
		let _localctx: LambdaCaptureContext = new LambdaCaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CPP14Parser.RULE_lambdaCapture);
		let _la: number;
		try {
			this.state = 465;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 459;
				this.captureList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 460;
				this.captureDefault();
				this.state = 463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Comma) {
					{
					this.state = 461;
					this.match(CPP14Parser.Comma);
					this.state = 462;
					this.captureList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public captureDefault(): CaptureDefaultContext {
		let _localctx: CaptureDefaultContext = new CaptureDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CPP14Parser.RULE_captureDefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.And || _la === CPP14Parser.Assign)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public captureList(): CaptureListContext {
		let _localctx: CaptureListContext = new CaptureListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CPP14Parser.RULE_captureList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.capture();
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 470;
				this.match(CPP14Parser.Comma);
				this.state = 471;
				this.capture();
				}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 477;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public capture(): CaptureContext {
		let _localctx: CaptureContext = new CaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CPP14Parser.RULE_capture);
		try {
			this.state = 482;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 480;
				this.simpleCapture();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 481;
				this.initcapture();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleCapture(): SimpleCaptureContext {
		let _localctx: SimpleCaptureContext = new SimpleCaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CPP14Parser.RULE_simpleCapture);
		let _la: number;
		try {
			this.state = 489;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.And:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.And) {
					{
					this.state = 484;
					this.match(CPP14Parser.And);
					}
				}

				this.state = 487;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.This:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 488;
				this.match(CPP14Parser.This);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initcapture(): InitcaptureContext {
		let _localctx: InitcaptureContext = new InitcaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CPP14Parser.RULE_initcapture);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.And) {
				{
				this.state = 491;
				this.match(CPP14Parser.And);
				}
			}

			this.state = 494;
			this.match(CPP14Parser.Identifier);
			this.state = 495;
			this.initializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaDeclarator(): LambdaDeclaratorContext {
		let _localctx: LambdaDeclaratorContext = new LambdaDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CPP14Parser.RULE_lambdaDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.match(CPP14Parser.LeftParen);
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPP14Parser.Enum - 33)) | (1 << (CPP14Parser.Explicit - 33)) | (1 << (CPP14Parser.Extern - 33)) | (1 << (CPP14Parser.Float - 33)) | (1 << (CPP14Parser.Friend - 33)) | (1 << (CPP14Parser.Inline - 33)) | (1 << (CPP14Parser.Int - 33)) | (1 << (CPP14Parser.Long - 33)) | (1 << (CPP14Parser.Mutable - 33)) | (1 << (CPP14Parser.Register - 33)) | (1 << (CPP14Parser.Short - 33)) | (1 << (CPP14Parser.Signed - 33)) | (1 << (CPP14Parser.Static - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Thread_local - 66)) | (1 << (CPP14Parser.Typedef - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Virtual - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)) | (1 << (CPP14Parser.LeftBracket - 66)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				this.state = 498;
				this.parameterDeclarationClause();
				}
			}

			this.state = 501;
			this.match(CPP14Parser.RightParen);
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Mutable) {
				{
				this.state = 502;
				this.match(CPP14Parser.Mutable);
				}
			}

			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Noexcept || _la === CPP14Parser.Throw) {
				{
				this.state = 505;
				this.exceptionSpecification();
				}
			}

			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 508;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Arrow) {
				{
				this.state = 511;
				this.trailingReturnType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfixExpression(): PostfixExpressionContext;
	public postfixExpression(_p: number): PostfixExpressionContext;
	// @RuleVersion(0)
	public postfixExpression(_p?: number): PostfixExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, _parentState);
		let _prevctx: PostfixExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, CPP14Parser.RULE_postfixExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 515;
				this.primaryExpression();
				}
				break;

			case 2:
				{
				this.state = 518;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.Auto:
				case CPP14Parser.Bool:
				case CPP14Parser.Char:
				case CPP14Parser.Char16:
				case CPP14Parser.Char32:
				case CPP14Parser.Decltype:
				case CPP14Parser.Double:
				case CPP14Parser.Float:
				case CPP14Parser.Int:
				case CPP14Parser.Long:
				case CPP14Parser.Short:
				case CPP14Parser.Signed:
				case CPP14Parser.Unsigned:
				case CPP14Parser.Void:
				case CPP14Parser.Wchar:
				case CPP14Parser.Doublecolon:
				case CPP14Parser.Identifier:
					{
					this.state = 516;
					this.simpleTypeSpecifier();
					}
					break;
				case CPP14Parser.Typename_:
					{
					this.state = 517;
					this.typeNameSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 526;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.LeftParen:
					{
					this.state = 520;
					this.match(CPP14Parser.LeftParen);
					this.state = 522;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPP14Parser.Throw - 71)) | (1 << (CPP14Parser.Typeid_ - 71)) | (1 << (CPP14Parser.Typename_ - 71)) | (1 << (CPP14Parser.Unsigned - 71)) | (1 << (CPP14Parser.Void - 71)) | (1 << (CPP14Parser.Wchar - 71)) | (1 << (CPP14Parser.LeftParen - 71)) | (1 << (CPP14Parser.LeftBracket - 71)) | (1 << (CPP14Parser.LeftBrace - 71)) | (1 << (CPP14Parser.Plus - 71)) | (1 << (CPP14Parser.Minus - 71)) | (1 << (CPP14Parser.Star - 71)) | (1 << (CPP14Parser.And - 71)) | (1 << (CPP14Parser.Or - 71)) | (1 << (CPP14Parser.Tilde - 71)) | (1 << (CPP14Parser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
						{
						this.state = 521;
						this.expressionList();
						}
					}

					this.state = 524;
					this.match(CPP14Parser.RightParen);
					}
					break;
				case CPP14Parser.LeftBrace:
					{
					this.state = 525;
					this.bracedInitList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				{
				this.state = 528;
				_la = this._input.LA(1);
				if (!(_la === CPP14Parser.Const_cast || _la === CPP14Parser.Dynamic_cast || _la === CPP14Parser.Reinterpret_cast || _la === CPP14Parser.Static_cast)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 529;
				this.match(CPP14Parser.Less);
				this.state = 530;
				this.theTypeId();
				this.state = 531;
				this.match(CPP14Parser.Greater);
				this.state = 532;
				this.match(CPP14Parser.LeftParen);
				this.state = 533;
				this.expression();
				this.state = 534;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 4:
				{
				this.state = 536;
				this.typeIdOfTheTypeId();
				this.state = 537;
				this.match(CPP14Parser.LeftParen);
				this.state = 540;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 538;
					this.expression();
					}
					break;

				case 2:
					{
					this.state = 539;
					this.theTypeId();
					}
					break;
				}
				this.state = 542;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 573;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 571;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 546;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 547;
						this.match(CPP14Parser.LeftBracket);
						this.state = 550;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case CPP14Parser.IntegerLiteral:
						case CPP14Parser.CharacterLiteral:
						case CPP14Parser.FloatingLiteral:
						case CPP14Parser.StringLiteral:
						case CPP14Parser.BooleanLiteral:
						case CPP14Parser.PointerLiteral:
						case CPP14Parser.UserDefinedLiteral:
						case CPP14Parser.Alignof:
						case CPP14Parser.Auto:
						case CPP14Parser.Bool:
						case CPP14Parser.Char:
						case CPP14Parser.Char16:
						case CPP14Parser.Char32:
						case CPP14Parser.Const_cast:
						case CPP14Parser.Decltype:
						case CPP14Parser.Delete:
						case CPP14Parser.Double:
						case CPP14Parser.Dynamic_cast:
						case CPP14Parser.Float:
						case CPP14Parser.Int:
						case CPP14Parser.Long:
						case CPP14Parser.New:
						case CPP14Parser.Noexcept:
						case CPP14Parser.Operator:
						case CPP14Parser.Reinterpret_cast:
						case CPP14Parser.Short:
						case CPP14Parser.Signed:
						case CPP14Parser.Sizeof:
						case CPP14Parser.Static_cast:
						case CPP14Parser.This:
						case CPP14Parser.Throw:
						case CPP14Parser.Typeid_:
						case CPP14Parser.Typename_:
						case CPP14Parser.Unsigned:
						case CPP14Parser.Void:
						case CPP14Parser.Wchar:
						case CPP14Parser.LeftParen:
						case CPP14Parser.LeftBracket:
						case CPP14Parser.Plus:
						case CPP14Parser.Minus:
						case CPP14Parser.Star:
						case CPP14Parser.And:
						case CPP14Parser.Or:
						case CPP14Parser.Tilde:
						case CPP14Parser.Not:
						case CPP14Parser.PlusPlus:
						case CPP14Parser.MinusMinus:
						case CPP14Parser.Doublecolon:
						case CPP14Parser.Identifier:
							{
							this.state = 548;
							this.expression();
							}
							break;
						case CPP14Parser.LeftBrace:
							{
							this.state = 549;
							this.bracedInitList();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 552;
						this.match(CPP14Parser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 554;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 555;
						this.match(CPP14Parser.LeftParen);
						this.state = 557;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPP14Parser.Throw - 71)) | (1 << (CPP14Parser.Typeid_ - 71)) | (1 << (CPP14Parser.Typename_ - 71)) | (1 << (CPP14Parser.Unsigned - 71)) | (1 << (CPP14Parser.Void - 71)) | (1 << (CPP14Parser.Wchar - 71)) | (1 << (CPP14Parser.LeftParen - 71)) | (1 << (CPP14Parser.LeftBracket - 71)) | (1 << (CPP14Parser.LeftBrace - 71)) | (1 << (CPP14Parser.Plus - 71)) | (1 << (CPP14Parser.Minus - 71)) | (1 << (CPP14Parser.Star - 71)) | (1 << (CPP14Parser.And - 71)) | (1 << (CPP14Parser.Or - 71)) | (1 << (CPP14Parser.Tilde - 71)) | (1 << (CPP14Parser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
							{
							this.state = 556;
							this.expressionList();
							}
						}

						this.state = 559;
						this.match(CPP14Parser.RightParen);
						}
						break;

					case 3:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 560;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 561;
						_la = this._input.LA(1);
						if (!(_la === CPP14Parser.Arrow || _la === CPP14Parser.Dot)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 567;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
						case 1:
							{
							this.state = 563;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === CPP14Parser.Template) {
								{
								this.state = 562;
								this.match(CPP14Parser.Template);
								}
							}

							this.state = 565;
							this.idExpression();
							}
							break;

						case 2:
							{
							this.state = 566;
							this.pseudoDestructorName();
							}
							break;
						}
						}
						break;

					case 4:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 569;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 570;
						_la = this._input.LA(1);
						if (!(_la === CPP14Parser.PlusPlus || _la === CPP14Parser.MinusMinus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					}
					}
				}
				this.state = 575;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIdOfTheTypeId(): TypeIdOfTheTypeIdContext {
		let _localctx: TypeIdOfTheTypeIdContext = new TypeIdOfTheTypeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CPP14Parser.RULE_typeIdOfTheTypeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this.match(CPP14Parser.Typeid_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CPP14Parser.RULE_expressionList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.initializerList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pseudoDestructorName(): PseudoDestructorNameContext {
		let _localctx: PseudoDestructorNameContext = new PseudoDestructorNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CPP14Parser.RULE_pseudoDestructorName);
		let _la: number;
		try {
			this.state = 599;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 581;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 580;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 583;
					this.theTypeName();
					this.state = 584;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 588;
				this.match(CPP14Parser.Tilde);
				this.state = 589;
				this.theTypeName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.nestedNameSpecifier(0);
				this.state = 591;
				this.match(CPP14Parser.Template);
				this.state = 592;
				this.simpleTemplateId();
				this.state = 593;
				this.match(CPP14Parser.Doublecolon);
				this.state = 594;
				this.match(CPP14Parser.Tilde);
				this.state = 595;
				this.theTypeName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 597;
				this.match(CPP14Parser.Tilde);
				this.state = 598;
				this.decltypeSpecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CPP14Parser.RULE_unaryExpression);
		try {
			this.state = 628;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 601;
				this.postfixExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 606;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.PlusPlus:
					{
					this.state = 602;
					this.match(CPP14Parser.PlusPlus);
					}
					break;
				case CPP14Parser.MinusMinus:
					{
					this.state = 603;
					this.match(CPP14Parser.MinusMinus);
					}
					break;
				case CPP14Parser.Plus:
				case CPP14Parser.Minus:
				case CPP14Parser.Star:
				case CPP14Parser.And:
				case CPP14Parser.Or:
				case CPP14Parser.Tilde:
				case CPP14Parser.Not:
					{
					this.state = 604;
					this.unaryOperator();
					}
					break;
				case CPP14Parser.Sizeof:
					{
					this.state = 605;
					this.match(CPP14Parser.Sizeof);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 608;
				this.unaryExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 609;
				this.match(CPP14Parser.Sizeof);
				this.state = 618;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.LeftParen:
					{
					this.state = 610;
					this.match(CPP14Parser.LeftParen);
					this.state = 611;
					this.theTypeId();
					this.state = 612;
					this.match(CPP14Parser.RightParen);
					}
					break;
				case CPP14Parser.Ellipsis:
					{
					this.state = 614;
					this.match(CPP14Parser.Ellipsis);
					this.state = 615;
					this.match(CPP14Parser.LeftParen);
					this.state = 616;
					this.match(CPP14Parser.Identifier);
					this.state = 617;
					this.match(CPP14Parser.RightParen);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 620;
				this.match(CPP14Parser.Alignof);
				this.state = 621;
				this.match(CPP14Parser.LeftParen);
				this.state = 622;
				this.theTypeId();
				this.state = 623;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 625;
				this.noExceptExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 626;
				this.newExpression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 627;
				this.deleteExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CPP14Parser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			_la = this._input.LA(1);
			if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CPP14Parser.Plus - 91)) | (1 << (CPP14Parser.Minus - 91)) | (1 << (CPP14Parser.Star - 91)) | (1 << (CPP14Parser.And - 91)) | (1 << (CPP14Parser.Or - 91)) | (1 << (CPP14Parser.Tilde - 91)) | (1 << (CPP14Parser.Not - 91)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newExpression(): NewExpressionContext {
		let _localctx: NewExpressionContext = new NewExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CPP14Parser.RULE_newExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Doublecolon) {
				{
				this.state = 632;
				this.match(CPP14Parser.Doublecolon);
				}
			}

			this.state = 635;
			this.match(CPP14Parser.New);
			this.state = 637;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 636;
				this.newPlacement();
				}
				break;
			}
			this.state = 644;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Struct:
			case CPP14Parser.Typename_:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				{
				this.state = 639;
				this.newTypeId();
				}
				break;
			case CPP14Parser.LeftParen:
				{
				{
				this.state = 640;
				this.match(CPP14Parser.LeftParen);
				this.state = 641;
				this.theTypeId();
				this.state = 642;
				this.match(CPP14Parser.RightParen);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.LeftParen || _la === CPP14Parser.LeftBrace) {
				{
				this.state = 646;
				this.newInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newPlacement(): NewPlacementContext {
		let _localctx: NewPlacementContext = new NewPlacementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CPP14Parser.RULE_newPlacement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this.match(CPP14Parser.LeftParen);
			this.state = 650;
			this.expressionList();
			this.state = 651;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newTypeId(): NewTypeIdContext {
		let _localctx: NewTypeIdContext = new NewTypeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CPP14Parser.RULE_newTypeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.typeSpecifierSeq();
			this.state = 655;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 654;
				this.newDeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newDeclarator(): NewDeclaratorContext {
		let _localctx: NewDeclaratorContext = new NewDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CPP14Parser.RULE_newDeclarator);
		try {
			this.state = 662;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 657;
				this.pointerOperator();
				this.state = 659;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 658;
					this.newDeclarator();
					}
					break;
				}
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 661;
				this.noPointerNewDeclarator(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noPointerNewDeclarator(): NoPointerNewDeclaratorContext;
	public noPointerNewDeclarator(_p: number): NoPointerNewDeclaratorContext;
	// @RuleVersion(0)
	public noPointerNewDeclarator(_p?: number): NoPointerNewDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoPointerNewDeclaratorContext = new NoPointerNewDeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoPointerNewDeclaratorContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, CPP14Parser.RULE_noPointerNewDeclarator, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 665;
			this.match(CPP14Parser.LeftBracket);
			this.state = 666;
			this.expression();
			this.state = 667;
			this.match(CPP14Parser.RightBracket);
			this.state = 669;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 668;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 680;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NoPointerNewDeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noPointerNewDeclarator);
					this.state = 671;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 672;
					this.match(CPP14Parser.LeftBracket);
					this.state = 673;
					this.constantExpression();
					this.state = 674;
					this.match(CPP14Parser.RightBracket);
					this.state = 676;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						this.state = 675;
						this.attributeSpecifierSeq();
						}
						break;
					}
					}
					}
				}
				this.state = 682;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newInitializer(): NewInitializerContext {
		let _localctx: NewInitializerContext = new NewInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CPP14Parser.RULE_newInitializer);
		let _la: number;
		try {
			this.state = 689;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 683;
				this.match(CPP14Parser.LeftParen);
				this.state = 685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPP14Parser.Throw - 71)) | (1 << (CPP14Parser.Typeid_ - 71)) | (1 << (CPP14Parser.Typename_ - 71)) | (1 << (CPP14Parser.Unsigned - 71)) | (1 << (CPP14Parser.Void - 71)) | (1 << (CPP14Parser.Wchar - 71)) | (1 << (CPP14Parser.LeftParen - 71)) | (1 << (CPP14Parser.LeftBracket - 71)) | (1 << (CPP14Parser.LeftBrace - 71)) | (1 << (CPP14Parser.Plus - 71)) | (1 << (CPP14Parser.Minus - 71)) | (1 << (CPP14Parser.Star - 71)) | (1 << (CPP14Parser.And - 71)) | (1 << (CPP14Parser.Or - 71)) | (1 << (CPP14Parser.Tilde - 71)) | (1 << (CPP14Parser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
					{
					this.state = 684;
					this.expressionList();
					}
				}

				this.state = 687;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 688;
				this.bracedInitList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deleteExpression(): DeleteExpressionContext {
		let _localctx: DeleteExpressionContext = new DeleteExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CPP14Parser.RULE_deleteExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Doublecolon) {
				{
				this.state = 691;
				this.match(CPP14Parser.Doublecolon);
				}
			}

			this.state = 694;
			this.match(CPP14Parser.Delete);
			this.state = 697;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 695;
				this.match(CPP14Parser.LeftBracket);
				this.state = 696;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			}
			this.state = 699;
			this.castExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noExceptExpression(): NoExceptExpressionContext {
		let _localctx: NoExceptExpressionContext = new NoExceptExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CPP14Parser.RULE_noExceptExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			this.match(CPP14Parser.Noexcept);
			this.state = 702;
			this.match(CPP14Parser.LeftParen);
			this.state = 703;
			this.expression();
			this.state = 704;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CPP14Parser.RULE_castExpression);
		try {
			this.state = 712;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 706;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 707;
				this.match(CPP14Parser.LeftParen);
				this.state = 708;
				this.theTypeId();
				this.state = 709;
				this.match(CPP14Parser.RightParen);
				this.state = 710;
				this.castExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerMemberExpression(): PointerMemberExpressionContext {
		let _localctx: PointerMemberExpressionContext = new PointerMemberExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CPP14Parser.RULE_pointerMemberExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.castExpression();
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.ArrowStar || _la === CPP14Parser.DotStar) {
				{
				{
				this.state = 715;
				_la = this._input.LA(1);
				if (!(_la === CPP14Parser.ArrowStar || _la === CPP14Parser.DotStar)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 716;
				this.castExpression();
				}
				}
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CPP14Parser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this.pointerMemberExpression();
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (CPP14Parser.Star - 93)) | (1 << (CPP14Parser.Div - 93)) | (1 << (CPP14Parser.Mod - 93)))) !== 0)) {
				{
				{
				this.state = 723;
				_la = this._input.LA(1);
				if (!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (CPP14Parser.Star - 93)) | (1 << (CPP14Parser.Div - 93)) | (1 << (CPP14Parser.Mod - 93)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 724;
				this.pointerMemberExpression();
				}
				}
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CPP14Parser.RULE_additiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
			this.multiplicativeExpression();
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Plus || _la === CPP14Parser.Minus) {
				{
				{
				this.state = 731;
				_la = this._input.LA(1);
				if (!(_la === CPP14Parser.Plus || _la === CPP14Parser.Minus)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 732;
				this.multiplicativeExpression();
				}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftExpression(): ShiftExpressionContext {
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CPP14Parser.RULE_shiftExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 738;
			this.additiveExpression();
			this.state = 744;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 739;
					this.shiftOperator();
					this.state = 740;
					this.additiveExpression();
					}
					}
				}
				this.state = 746;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftOperator(): ShiftOperatorContext {
		let _localctx: ShiftOperatorContext = new ShiftOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CPP14Parser.RULE_shiftOperator);
		try {
			this.state = 751;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Greater:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 747;
				this.match(CPP14Parser.Greater);
				this.state = 748;
				this.match(CPP14Parser.Greater);
				}
				break;
			case CPP14Parser.Less:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 749;
				this.match(CPP14Parser.Less);
				this.state = 750;
				this.match(CPP14Parser.Less);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CPP14Parser.RULE_relationalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this.shiftExpression();
			this.state = 758;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 754;
					_la = this._input.LA(1);
					if (!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (CPP14Parser.Less - 102)) | (1 << (CPP14Parser.Greater - 102)) | (1 << (CPP14Parser.LessEqual - 102)) | (1 << (CPP14Parser.GreaterEqual - 102)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 755;
					this.shiftExpression();
					}
					}
				}
				this.state = 760;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CPP14Parser.RULE_equalityExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.relationalExpression();
			this.state = 766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Equal || _la === CPP14Parser.NotEqual) {
				{
				{
				this.state = 762;
				_la = this._input.LA(1);
				if (!(_la === CPP14Parser.Equal || _la === CPP14Parser.NotEqual)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 763;
				this.relationalExpression();
				}
				}
				this.state = 768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CPP14Parser.RULE_andExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			this.equalityExpression();
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.And) {
				{
				{
				this.state = 770;
				this.match(CPP14Parser.And);
				this.state = 771;
				this.equalityExpression();
				}
				}
				this.state = 776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CPP14Parser.RULE_exclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this.andExpression();
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Caret) {
				{
				{
				this.state = 778;
				this.match(CPP14Parser.Caret);
				this.state = 779;
				this.andExpression();
				}
				}
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CPP14Parser.RULE_inclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.exclusiveOrExpression();
			this.state = 790;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Or) {
				{
				{
				this.state = 786;
				this.match(CPP14Parser.Or);
				this.state = 787;
				this.exclusiveOrExpression();
				}
				}
				this.state = 792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpression(): LogicalAndExpressionContext {
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CPP14Parser.RULE_logicalAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.inclusiveOrExpression();
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.AndAnd) {
				{
				{
				this.state = 794;
				this.match(CPP14Parser.AndAnd);
				this.state = 795;
				this.inclusiveOrExpression();
				}
				}
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpression(): LogicalOrExpressionContext {
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CPP14Parser.RULE_logicalOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this.logicalAndExpression();
			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.OrOr) {
				{
				{
				this.state = 802;
				this.match(CPP14Parser.OrOr);
				this.state = 803;
				this.logicalAndExpression();
				}
				}
				this.state = 808;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CPP14Parser.RULE_conditionalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this.logicalOrExpression();
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Question) {
				{
				this.state = 810;
				this.match(CPP14Parser.Question);
				this.state = 811;
				this.expression();
				this.state = 812;
				this.match(CPP14Parser.Colon);
				this.state = 813;
				this.assignmentExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CPP14Parser.RULE_assignmentExpression);
		try {
			this.state = 823;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 817;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 818;
				this.logicalOrExpression();
				this.state = 819;
				this.assignmentOperator();
				this.state = 820;
				this.initializerClause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 822;
				this.throwExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CPP14Parser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			_la = this._input.LA(1);
			if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (CPP14Parser.Assign - 101)) | (1 << (CPP14Parser.PlusAssign - 101)) | (1 << (CPP14Parser.MinusAssign - 101)) | (1 << (CPP14Parser.StarAssign - 101)) | (1 << (CPP14Parser.DivAssign - 101)) | (1 << (CPP14Parser.ModAssign - 101)) | (1 << (CPP14Parser.XorAssign - 101)) | (1 << (CPP14Parser.AndAssign - 101)) | (1 << (CPP14Parser.OrAssign - 101)) | (1 << (CPP14Parser.LeftShiftAssign - 101)) | (1 << (CPP14Parser.RightShiftAssign - 101)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CPP14Parser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this.assignmentExpression();
			this.state = 832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 828;
				this.match(CPP14Parser.Comma);
				this.state = 829;
				this.assignmentExpression();
				}
				}
				this.state = 834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CPP14Parser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CPP14Parser.RULE_statement);
		try {
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 837;
				this.labeledStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 839;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
				case 1:
					{
					this.state = 838;
					this.attributeSpecifierSeq();
					}
					break;
				}
				this.state = 847;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.IntegerLiteral:
				case CPP14Parser.CharacterLiteral:
				case CPP14Parser.FloatingLiteral:
				case CPP14Parser.StringLiteral:
				case CPP14Parser.BooleanLiteral:
				case CPP14Parser.PointerLiteral:
				case CPP14Parser.UserDefinedLiteral:
				case CPP14Parser.Alignof:
				case CPP14Parser.Auto:
				case CPP14Parser.Bool:
				case CPP14Parser.Char:
				case CPP14Parser.Char16:
				case CPP14Parser.Char32:
				case CPP14Parser.Const_cast:
				case CPP14Parser.Decltype:
				case CPP14Parser.Delete:
				case CPP14Parser.Double:
				case CPP14Parser.Dynamic_cast:
				case CPP14Parser.Float:
				case CPP14Parser.Int:
				case CPP14Parser.Long:
				case CPP14Parser.New:
				case CPP14Parser.Noexcept:
				case CPP14Parser.Operator:
				case CPP14Parser.Reinterpret_cast:
				case CPP14Parser.Short:
				case CPP14Parser.Signed:
				case CPP14Parser.Sizeof:
				case CPP14Parser.Static_cast:
				case CPP14Parser.This:
				case CPP14Parser.Throw:
				case CPP14Parser.Typeid_:
				case CPP14Parser.Typename_:
				case CPP14Parser.Unsigned:
				case CPP14Parser.Void:
				case CPP14Parser.Wchar:
				case CPP14Parser.LeftParen:
				case CPP14Parser.LeftBracket:
				case CPP14Parser.Plus:
				case CPP14Parser.Minus:
				case CPP14Parser.Star:
				case CPP14Parser.And:
				case CPP14Parser.Or:
				case CPP14Parser.Tilde:
				case CPP14Parser.Not:
				case CPP14Parser.PlusPlus:
				case CPP14Parser.MinusMinus:
				case CPP14Parser.Doublecolon:
				case CPP14Parser.Semi:
				case CPP14Parser.Identifier:
					{
					this.state = 841;
					this.expressionStatement();
					}
					break;
				case CPP14Parser.LeftBrace:
					{
					this.state = 842;
					this.compoundStatement();
					}
					break;
				case CPP14Parser.If:
				case CPP14Parser.Switch:
					{
					this.state = 843;
					this.selectionStatement();
					}
					break;
				case CPP14Parser.Do:
				case CPP14Parser.For:
				case CPP14Parser.While:
					{
					this.state = 844;
					this.iterationStatement();
					}
					break;
				case CPP14Parser.Break:
				case CPP14Parser.Continue:
				case CPP14Parser.Goto:
				case CPP14Parser.Return:
					{
					this.state = 845;
					this.jumpStatement();
					}
					break;
				case CPP14Parser.Try:
					{
					this.state = 846;
					this.tryBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 849;
				this.declarationStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CPP14Parser.RULE_labeledStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 852;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 859;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Identifier:
				{
				this.state = 855;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.Case:
				{
				this.state = 856;
				this.match(CPP14Parser.Case);
				this.state = 857;
				this.constantExpression();
				}
				break;
			case CPP14Parser.Default:
				{
				this.state = 858;
				this.match(CPP14Parser.Default);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 861;
			this.match(CPP14Parser.Colon);
			this.state = 862;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CPP14Parser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPP14Parser.Throw - 71)) | (1 << (CPP14Parser.Typeid_ - 71)) | (1 << (CPP14Parser.Typename_ - 71)) | (1 << (CPP14Parser.Unsigned - 71)) | (1 << (CPP14Parser.Void - 71)) | (1 << (CPP14Parser.Wchar - 71)) | (1 << (CPP14Parser.LeftParen - 71)) | (1 << (CPP14Parser.LeftBracket - 71)) | (1 << (CPP14Parser.Plus - 71)) | (1 << (CPP14Parser.Minus - 71)) | (1 << (CPP14Parser.Star - 71)) | (1 << (CPP14Parser.And - 71)) | (1 << (CPP14Parser.Or - 71)) | (1 << (CPP14Parser.Tilde - 71)) | (1 << (CPP14Parser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
				{
				this.state = 864;
				this.expression();
				}
			}

			this.state = 867;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CPP14Parser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.match(CPP14Parser.LeftBrace);
			this.state = 871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPP14Parser.Enum - 33)) | (1 << (CPP14Parser.Explicit - 33)) | (1 << (CPP14Parser.Extern - 33)) | (1 << (CPP14Parser.Float - 33)) | (1 << (CPP14Parser.For - 33)) | (1 << (CPP14Parser.Friend - 33)) | (1 << (CPP14Parser.Goto - 33)) | (1 << (CPP14Parser.If - 33)) | (1 << (CPP14Parser.Inline - 33)) | (1 << (CPP14Parser.Int - 33)) | (1 << (CPP14Parser.Long - 33)) | (1 << (CPP14Parser.Mutable - 33)) | (1 << (CPP14Parser.Namespace - 33)) | (1 << (CPP14Parser.New - 33)) | (1 << (CPP14Parser.Noexcept - 33)) | (1 << (CPP14Parser.Operator - 33)) | (1 << (CPP14Parser.Register - 33)) | (1 << (CPP14Parser.Reinterpret_cast - 33)) | (1 << (CPP14Parser.Return - 33)) | (1 << (CPP14Parser.Short - 33)) | (1 << (CPP14Parser.Signed - 33)) | (1 << (CPP14Parser.Sizeof - 33)) | (1 << (CPP14Parser.Static - 33)) | (1 << (CPP14Parser.Static_assert - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.Static_cast - 65)) | (1 << (CPP14Parser.Struct - 65)) | (1 << (CPP14Parser.Switch - 65)) | (1 << (CPP14Parser.This - 65)) | (1 << (CPP14Parser.Thread_local - 65)) | (1 << (CPP14Parser.Throw - 65)) | (1 << (CPP14Parser.Try - 65)) | (1 << (CPP14Parser.Typedef - 65)) | (1 << (CPP14Parser.Typeid_ - 65)) | (1 << (CPP14Parser.Typename_ - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Using - 65)) | (1 << (CPP14Parser.Virtual - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.While - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.LeftBrace - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)) | (1 << (CPP14Parser.Not - 97)) | (1 << (CPP14Parser.AndAnd - 97)) | (1 << (CPP14Parser.PlusPlus - 97)) | (1 << (CPP14Parser.MinusMinus - 97)) | (1 << (CPP14Parser.Doublecolon - 97)) | (1 << (CPP14Parser.Semi - 97)))) !== 0) || _la === CPP14Parser.Ellipsis || _la === CPP14Parser.Identifier) {
				{
				this.state = 870;
				this.statementSeq();
				}
			}

			this.state = 873;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementSeq(): StatementSeqContext {
		let _localctx: StatementSeqContext = new StatementSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CPP14Parser.RULE_statementSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 876;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 875;
				this.statement();
				}
				}
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPP14Parser.Enum - 33)) | (1 << (CPP14Parser.Explicit - 33)) | (1 << (CPP14Parser.Extern - 33)) | (1 << (CPP14Parser.Float - 33)) | (1 << (CPP14Parser.For - 33)) | (1 << (CPP14Parser.Friend - 33)) | (1 << (CPP14Parser.Goto - 33)) | (1 << (CPP14Parser.If - 33)) | (1 << (CPP14Parser.Inline - 33)) | (1 << (CPP14Parser.Int - 33)) | (1 << (CPP14Parser.Long - 33)) | (1 << (CPP14Parser.Mutable - 33)) | (1 << (CPP14Parser.Namespace - 33)) | (1 << (CPP14Parser.New - 33)) | (1 << (CPP14Parser.Noexcept - 33)) | (1 << (CPP14Parser.Operator - 33)) | (1 << (CPP14Parser.Register - 33)) | (1 << (CPP14Parser.Reinterpret_cast - 33)) | (1 << (CPP14Parser.Return - 33)) | (1 << (CPP14Parser.Short - 33)) | (1 << (CPP14Parser.Signed - 33)) | (1 << (CPP14Parser.Sizeof - 33)) | (1 << (CPP14Parser.Static - 33)) | (1 << (CPP14Parser.Static_assert - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.Static_cast - 65)) | (1 << (CPP14Parser.Struct - 65)) | (1 << (CPP14Parser.Switch - 65)) | (1 << (CPP14Parser.This - 65)) | (1 << (CPP14Parser.Thread_local - 65)) | (1 << (CPP14Parser.Throw - 65)) | (1 << (CPP14Parser.Try - 65)) | (1 << (CPP14Parser.Typedef - 65)) | (1 << (CPP14Parser.Typeid_ - 65)) | (1 << (CPP14Parser.Typename_ - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Using - 65)) | (1 << (CPP14Parser.Virtual - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.While - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.LeftBrace - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)) | (1 << (CPP14Parser.Not - 97)) | (1 << (CPP14Parser.AndAnd - 97)) | (1 << (CPP14Parser.PlusPlus - 97)) | (1 << (CPP14Parser.MinusMinus - 97)) | (1 << (CPP14Parser.Doublecolon - 97)) | (1 << (CPP14Parser.Semi - 97)))) !== 0) || _la === CPP14Parser.Ellipsis || _la === CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let _localctx: SelectionStatementContext = new SelectionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CPP14Parser.RULE_selectionStatement);
		try {
			this.state = 895;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 880;
				this.match(CPP14Parser.If);
				this.state = 881;
				this.match(CPP14Parser.LeftParen);
				this.state = 882;
				this.condition();
				this.state = 883;
				this.match(CPP14Parser.RightParen);
				this.state = 884;
				this.statement();
				this.state = 887;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 885;
					this.match(CPP14Parser.Else);
					this.state = 886;
					this.statement();
					}
					break;
				}
				}
				break;
			case CPP14Parser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 889;
				this.match(CPP14Parser.Switch);
				this.state = 890;
				this.match(CPP14Parser.LeftParen);
				this.state = 891;
				this.condition();
				this.state = 892;
				this.match(CPP14Parser.RightParen);
				this.state = 893;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CPP14Parser.RULE_condition);
		let _la: number;
		try {
			this.state = 908;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 897;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 898;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 901;
				this.declSpecifierSeq();
				this.state = 902;
				this.declarator();
				this.state = 906;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.Assign:
					{
					this.state = 903;
					this.match(CPP14Parser.Assign);
					this.state = 904;
					this.initializerClause();
					}
					break;
				case CPP14Parser.LeftBrace:
					{
					this.state = 905;
					this.bracedInitList();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CPP14Parser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 943;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.While:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 910;
				this.match(CPP14Parser.While);
				this.state = 911;
				this.match(CPP14Parser.LeftParen);
				this.state = 912;
				this.condition();
				this.state = 913;
				this.match(CPP14Parser.RightParen);
				this.state = 914;
				this.statement();
				}
				break;
			case CPP14Parser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 916;
				this.match(CPP14Parser.Do);
				this.state = 917;
				this.statement();
				this.state = 918;
				this.match(CPP14Parser.While);
				this.state = 919;
				this.match(CPP14Parser.LeftParen);
				this.state = 920;
				this.expression();
				this.state = 921;
				this.match(CPP14Parser.RightParen);
				this.state = 922;
				this.match(CPP14Parser.Semi);
				}
				break;
			case CPP14Parser.For:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 924;
				this.match(CPP14Parser.For);
				this.state = 925;
				this.match(CPP14Parser.LeftParen);
				this.state = 938;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 926;
					this.forInitStatement();
					this.state = 928;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPP14Parser.Enum - 33)) | (1 << (CPP14Parser.Explicit - 33)) | (1 << (CPP14Parser.Extern - 33)) | (1 << (CPP14Parser.Float - 33)) | (1 << (CPP14Parser.Friend - 33)) | (1 << (CPP14Parser.Inline - 33)) | (1 << (CPP14Parser.Int - 33)) | (1 << (CPP14Parser.Long - 33)) | (1 << (CPP14Parser.Mutable - 33)) | (1 << (CPP14Parser.New - 33)) | (1 << (CPP14Parser.Noexcept - 33)) | (1 << (CPP14Parser.Operator - 33)) | (1 << (CPP14Parser.Register - 33)) | (1 << (CPP14Parser.Reinterpret_cast - 33)) | (1 << (CPP14Parser.Short - 33)) | (1 << (CPP14Parser.Signed - 33)) | (1 << (CPP14Parser.Sizeof - 33)) | (1 << (CPP14Parser.Static - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.Static_cast - 65)) | (1 << (CPP14Parser.Struct - 65)) | (1 << (CPP14Parser.This - 65)) | (1 << (CPP14Parser.Thread_local - 65)) | (1 << (CPP14Parser.Throw - 65)) | (1 << (CPP14Parser.Typedef - 65)) | (1 << (CPP14Parser.Typeid_ - 65)) | (1 << (CPP14Parser.Typename_ - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Virtual - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)) | (1 << (CPP14Parser.Not - 97)) | (1 << (CPP14Parser.PlusPlus - 97)) | (1 << (CPP14Parser.MinusMinus - 97)) | (1 << (CPP14Parser.Doublecolon - 97)))) !== 0) || _la === CPP14Parser.Identifier) {
						{
						this.state = 927;
						this.condition();
						}
					}

					this.state = 930;
					this.match(CPP14Parser.Semi);
					this.state = 932;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPP14Parser.Throw - 71)) | (1 << (CPP14Parser.Typeid_ - 71)) | (1 << (CPP14Parser.Typename_ - 71)) | (1 << (CPP14Parser.Unsigned - 71)) | (1 << (CPP14Parser.Void - 71)) | (1 << (CPP14Parser.Wchar - 71)) | (1 << (CPP14Parser.LeftParen - 71)) | (1 << (CPP14Parser.LeftBracket - 71)) | (1 << (CPP14Parser.Plus - 71)) | (1 << (CPP14Parser.Minus - 71)) | (1 << (CPP14Parser.Star - 71)) | (1 << (CPP14Parser.And - 71)) | (1 << (CPP14Parser.Or - 71)) | (1 << (CPP14Parser.Tilde - 71)) | (1 << (CPP14Parser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
						{
						this.state = 931;
						this.expression();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 934;
					this.forRangeDeclaration();
					this.state = 935;
					this.match(CPP14Parser.Colon);
					this.state = 936;
					this.forRangeInitializer();
					}
					break;
				}
				this.state = 940;
				this.match(CPP14Parser.RightParen);
				this.state = 941;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInitStatement(): ForInitStatementContext {
		let _localctx: ForInitStatementContext = new ForInitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CPP14Parser.RULE_forInitStatement);
		try {
			this.state = 947;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 945;
				this.expressionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 946;
				this.simpleDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forRangeDeclaration(): ForRangeDeclarationContext {
		let _localctx: ForRangeDeclarationContext = new ForRangeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CPP14Parser.RULE_forRangeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 949;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 952;
			this.declSpecifierSeq();
			this.state = 953;
			this.declarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forRangeInitializer(): ForRangeInitializerContext {
		let _localctx: ForRangeInitializerContext = new ForRangeInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CPP14Parser.RULE_forRangeInitializer);
		try {
			this.state = 957;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.IntegerLiteral:
			case CPP14Parser.CharacterLiteral:
			case CPP14Parser.FloatingLiteral:
			case CPP14Parser.StringLiteral:
			case CPP14Parser.BooleanLiteral:
			case CPP14Parser.PointerLiteral:
			case CPP14Parser.UserDefinedLiteral:
			case CPP14Parser.Alignof:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Const_cast:
			case CPP14Parser.Decltype:
			case CPP14Parser.Delete:
			case CPP14Parser.Double:
			case CPP14Parser.Dynamic_cast:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.New:
			case CPP14Parser.Noexcept:
			case CPP14Parser.Operator:
			case CPP14Parser.Reinterpret_cast:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Sizeof:
			case CPP14Parser.Static_cast:
			case CPP14Parser.This:
			case CPP14Parser.Throw:
			case CPP14Parser.Typeid_:
			case CPP14Parser.Typename_:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Plus:
			case CPP14Parser.Minus:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Or:
			case CPP14Parser.Tilde:
			case CPP14Parser.Not:
			case CPP14Parser.PlusPlus:
			case CPP14Parser.MinusMinus:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 955;
				this.expression();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 956;
				this.bracedInitList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CPP14Parser.RULE_jumpStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Break:
				{
				this.state = 959;
				this.match(CPP14Parser.Break);
				}
				break;
			case CPP14Parser.Continue:
				{
				this.state = 960;
				this.match(CPP14Parser.Continue);
				}
				break;
			case CPP14Parser.Return:
				{
				this.state = 961;
				this.match(CPP14Parser.Return);
				this.state = 964;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.IntegerLiteral:
				case CPP14Parser.CharacterLiteral:
				case CPP14Parser.FloatingLiteral:
				case CPP14Parser.StringLiteral:
				case CPP14Parser.BooleanLiteral:
				case CPP14Parser.PointerLiteral:
				case CPP14Parser.UserDefinedLiteral:
				case CPP14Parser.Alignof:
				case CPP14Parser.Auto:
				case CPP14Parser.Bool:
				case CPP14Parser.Char:
				case CPP14Parser.Char16:
				case CPP14Parser.Char32:
				case CPP14Parser.Const_cast:
				case CPP14Parser.Decltype:
				case CPP14Parser.Delete:
				case CPP14Parser.Double:
				case CPP14Parser.Dynamic_cast:
				case CPP14Parser.Float:
				case CPP14Parser.Int:
				case CPP14Parser.Long:
				case CPP14Parser.New:
				case CPP14Parser.Noexcept:
				case CPP14Parser.Operator:
				case CPP14Parser.Reinterpret_cast:
				case CPP14Parser.Short:
				case CPP14Parser.Signed:
				case CPP14Parser.Sizeof:
				case CPP14Parser.Static_cast:
				case CPP14Parser.This:
				case CPP14Parser.Throw:
				case CPP14Parser.Typeid_:
				case CPP14Parser.Typename_:
				case CPP14Parser.Unsigned:
				case CPP14Parser.Void:
				case CPP14Parser.Wchar:
				case CPP14Parser.LeftParen:
				case CPP14Parser.LeftBracket:
				case CPP14Parser.Plus:
				case CPP14Parser.Minus:
				case CPP14Parser.Star:
				case CPP14Parser.And:
				case CPP14Parser.Or:
				case CPP14Parser.Tilde:
				case CPP14Parser.Not:
				case CPP14Parser.PlusPlus:
				case CPP14Parser.MinusMinus:
				case CPP14Parser.Doublecolon:
				case CPP14Parser.Identifier:
					{
					this.state = 962;
					this.expression();
					}
					break;
				case CPP14Parser.LeftBrace:
					{
					this.state = 963;
					this.bracedInitList();
					}
					break;
				case CPP14Parser.Semi:
					break;
				default:
					break;
				}
				}
				break;
			case CPP14Parser.Goto:
				{
				this.state = 966;
				this.match(CPP14Parser.Goto);
				this.state = 967;
				this.match(CPP14Parser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 970;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationStatement(): DeclarationStatementContext {
		let _localctx: DeclarationStatementContext = new DeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CPP14Parser.RULE_declarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this.blockDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationseq(): DeclarationseqContext {
		let _localctx: DeclarationseqContext = new DeclarationseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CPP14Parser.RULE_declarationseq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 974;
				this.declaration();
				}
				}
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CPP14Parser.Include - 8)) | (1 << (CPP14Parser.Define - 8)) | (1 << (CPP14Parser.Alignas - 8)) | (1 << (CPP14Parser.Asm - 8)) | (1 << (CPP14Parser.Auto - 8)) | (1 << (CPP14Parser.Bool - 8)) | (1 << (CPP14Parser.Char - 8)) | (1 << (CPP14Parser.Char16 - 8)) | (1 << (CPP14Parser.Char32 - 8)) | (1 << (CPP14Parser.Class - 8)) | (1 << (CPP14Parser.Const - 8)) | (1 << (CPP14Parser.Constexpr - 8)) | (1 << (CPP14Parser.Decltype - 8)) | (1 << (CPP14Parser.Double - 8)) | (1 << (CPP14Parser.Enum - 8)) | (1 << (CPP14Parser.Explicit - 8)) | (1 << (CPP14Parser.Extern - 8)) | (1 << (CPP14Parser.Float - 8)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CPP14Parser.Friend - 41)) | (1 << (CPP14Parser.Inline - 41)) | (1 << (CPP14Parser.Int - 41)) | (1 << (CPP14Parser.Long - 41)) | (1 << (CPP14Parser.Mutable - 41)) | (1 << (CPP14Parser.Namespace - 41)) | (1 << (CPP14Parser.Operator - 41)) | (1 << (CPP14Parser.Register - 41)) | (1 << (CPP14Parser.Short - 41)) | (1 << (CPP14Parser.Signed - 41)) | (1 << (CPP14Parser.Static - 41)) | (1 << (CPP14Parser.Static_assert - 41)) | (1 << (CPP14Parser.Struct - 41)) | (1 << (CPP14Parser.Template - 41)) | (1 << (CPP14Parser.Thread_local - 41)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CPP14Parser.Typedef - 74)) | (1 << (CPP14Parser.Typename_ - 74)) | (1 << (CPP14Parser.Union - 74)) | (1 << (CPP14Parser.Unsigned - 74)) | (1 << (CPP14Parser.Using - 74)) | (1 << (CPP14Parser.Virtual - 74)) | (1 << (CPP14Parser.Void - 74)) | (1 << (CPP14Parser.Volatile - 74)) | (1 << (CPP14Parser.Wchar - 74)) | (1 << (CPP14Parser.LeftParen - 74)) | (1 << (CPP14Parser.LeftBracket - 74)) | (1 << (CPP14Parser.Star - 74)) | (1 << (CPP14Parser.And - 74)) | (1 << (CPP14Parser.Tilde - 74)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPP14Parser.AndAnd - 118)) | (1 << (CPP14Parser.Doublecolon - 118)) | (1 << (CPP14Parser.Semi - 118)) | (1 << (CPP14Parser.Ellipsis - 118)) | (1 << (CPP14Parser.IncludeQuote - 118)) | (1 << (CPP14Parser.Identifier - 118)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CPP14Parser.RULE_declaration);
		try {
			this.state = 990;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 979;
				this.blockDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 980;
				this.functionDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 981;
				this.templateDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 982;
				this.explicitInstantiation();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 983;
				this.explicitSpecialization();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 984;
				this.linkageSpecification();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 985;
				this.namespaceDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 986;
				this.emptyDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 987;
				this.attributeDeclaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 988;
				this.includeDefinition();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 989;
				this.defineDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public includeDefinition(): IncludeDefinitionContext {
		let _localctx: IncludeDefinitionContext = new IncludeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CPP14Parser.RULE_includeDefinition);
		try {
			this.state = 1001;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Include:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 992;
				this.match(CPP14Parser.Include);
				this.state = 993;
				this.match(CPP14Parser.Less);
				this.state = 994;
				this.fileName();
				this.state = 995;
				this.match(CPP14Parser.Greater);
				}
				break;
			case CPP14Parser.IncludeQuote:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 997;
				this.match(CPP14Parser.IncludeQuote);
				this.state = 998;
				this.fileName();
				this.state = 999;
				this.match(CPP14Parser.Quote);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defineDeclaration(): DefineDeclarationContext {
		let _localctx: DefineDeclarationContext = new DefineDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CPP14Parser.RULE_defineDeclaration);
		try {
			let _alt: number;
			this.state = 1018;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1003;
				this.match(CPP14Parser.Define);
				this.state = 1004;
				this.match(CPP14Parser.Identifier);
				this.state = 1005;
				this.match(CPP14Parser.IntegerLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1006;
				this.match(CPP14Parser.Define);
				this.state = 1008;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1007;
						this.match(CPP14Parser.Identifier);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1010;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1012;
				this.match(CPP14Parser.Define);
				this.state = 1013;
				this.match(CPP14Parser.Identifier);
				this.state = 1014;
				this.simpleTypeSpecifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1015;
				this.match(CPP14Parser.Define);
				this.state = 1016;
				this.match(CPP14Parser.Identifier);
				this.state = 1017;
				this.match(CPP14Parser.StringLiteral);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fileName(): FileNameContext {
		let _localctx: FileNameContext = new FileNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CPP14Parser.RULE_fileName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1020;
			this.match(CPP14Parser.Identifier);
			this.state = 1025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Div) {
				{
				{
				this.state = 1021;
				this.match(CPP14Parser.Div);
				this.state = 1022;
				this.match(CPP14Parser.Identifier);
				}
				}
				this.state = 1027;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Dot) {
				{
				this.state = 1028;
				this.match(CPP14Parser.Dot);
				this.state = 1029;
				this.match(CPP14Parser.Identifier);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockDeclaration(): BlockDeclarationContext {
		let _localctx: BlockDeclarationContext = new BlockDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CPP14Parser.RULE_blockDeclaration);
		try {
			this.state = 1040;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1032;
				this.simpleDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1033;
				this.asmDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1034;
				this.namespaceAliasDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1035;
				this.usingDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1036;
				this.usingDirective();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1037;
				this.staticAssertDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1038;
				this.aliasDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1039;
				this.opaqueEnumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasDeclaration(): AliasDeclarationContext {
		let _localctx: AliasDeclarationContext = new AliasDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CPP14Parser.RULE_aliasDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1042;
			this.match(CPP14Parser.Using);
			this.state = 1043;
			this.match(CPP14Parser.Identifier);
			this.state = 1045;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1044;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1047;
			this.match(CPP14Parser.Assign);
			this.state = 1048;
			this.theTypeId();
			this.state = 1049;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleDeclaration(): SimpleDeclarationContext {
		let _localctx: SimpleDeclarationContext = new SimpleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CPP14Parser.RULE_simpleDeclaration);
		let _la: number;
		try {
			this.state = 1065;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Constexpr:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Explicit:
			case CPP14Parser.Extern:
			case CPP14Parser.Float:
			case CPP14Parser.Friend:
			case CPP14Parser.Inline:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Mutable:
			case CPP14Parser.Operator:
			case CPP14Parser.Register:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Static:
			case CPP14Parser.Struct:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Typedef:
			case CPP14Parser.Typename_:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Virtual:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Tilde:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Semi:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1052;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 1051;
					this.declSpecifierSeq();
					}
					break;
				}
				this.state = 1055;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Operator || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (CPP14Parser.LeftParen - 85)) | (1 << (CPP14Parser.Star - 85)) | (1 << (CPP14Parser.And - 85)) | (1 << (CPP14Parser.Tilde - 85)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPP14Parser.AndAnd - 118)) | (1 << (CPP14Parser.Doublecolon - 118)) | (1 << (CPP14Parser.Ellipsis - 118)) | (1 << (CPP14Parser.Identifier - 118)))) !== 0)) {
					{
					this.state = 1054;
					this.initDeclaratorList();
					}
				}

				this.state = 1057;
				this.match(CPP14Parser.Semi);
				}
				break;
			case CPP14Parser.Alignas:
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1058;
				this.attributeSpecifierSeq();
				this.state = 1060;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
				case 1:
					{
					this.state = 1059;
					this.declSpecifierSeq();
					}
					break;
				}
				this.state = 1062;
				this.initDeclaratorList();
				this.state = 1063;
				this.match(CPP14Parser.Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticAssertDeclaration(): StaticAssertDeclarationContext {
		let _localctx: StaticAssertDeclarationContext = new StaticAssertDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CPP14Parser.RULE_staticAssertDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1067;
			this.match(CPP14Parser.Static_assert);
			this.state = 1068;
			this.match(CPP14Parser.LeftParen);
			this.state = 1069;
			this.constantExpression();
			this.state = 1070;
			this.match(CPP14Parser.Comma);
			this.state = 1071;
			this.match(CPP14Parser.StringLiteral);
			this.state = 1072;
			this.match(CPP14Parser.RightParen);
			this.state = 1073;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyDeclaration(): EmptyDeclarationContext {
		let _localctx: EmptyDeclarationContext = new EmptyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CPP14Parser.RULE_emptyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1075;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeDeclaration(): AttributeDeclarationContext {
		let _localctx: AttributeDeclarationContext = new AttributeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CPP14Parser.RULE_attributeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1077;
			this.attributeSpecifierSeq();
			this.state = 1078;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declSpecifier(): DeclSpecifierContext {
		let _localctx: DeclSpecifierContext = new DeclSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CPP14Parser.RULE_declSpecifier);
		try {
			this.state = 1086;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Extern:
			case CPP14Parser.Mutable:
			case CPP14Parser.Register:
			case CPP14Parser.Static:
			case CPP14Parser.Thread_local:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1080;
				this.storageClassSpecifier();
				}
				break;
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Struct:
			case CPP14Parser.Typename_:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1081;
				this.typeSpecifier();
				}
				break;
			case CPP14Parser.Explicit:
			case CPP14Parser.Inline:
			case CPP14Parser.Virtual:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1082;
				this.functionSpecifier();
				}
				break;
			case CPP14Parser.Friend:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1083;
				this.match(CPP14Parser.Friend);
				}
				break;
			case CPP14Parser.Typedef:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1084;
				this.match(CPP14Parser.Typedef);
				}
				break;
			case CPP14Parser.Constexpr:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1085;
				this.match(CPP14Parser.Constexpr);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declSpecifierSeq(): DeclSpecifierSeqContext {
		let _localctx: DeclSpecifierSeqContext = new DeclSpecifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CPP14Parser.RULE_declSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1089;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1088;
					this.declSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1091;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1094;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				this.state = 1093;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageClassSpecifier(): StorageClassSpecifierContext {
		let _localctx: StorageClassSpecifierContext = new StorageClassSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CPP14Parser.RULE_storageClassSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1096;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (CPP14Parser.Extern - 36)) | (1 << (CPP14Parser.Mutable - 36)) | (1 << (CPP14Parser.Register - 36)) | (1 << (CPP14Parser.Static - 36)))) !== 0) || _la === CPP14Parser.Thread_local)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionSpecifier(): FunctionSpecifierContext {
		let _localctx: FunctionSpecifierContext = new FunctionSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CPP14Parser.RULE_functionSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1098;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Explicit || _la === CPP14Parser.Inline || _la === CPP14Parser.Virtual)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedefName(): TypedefNameContext {
		let _localctx: TypedefNameContext = new TypedefNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CPP14Parser.RULE_typedefName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CPP14Parser.RULE_typeSpecifier);
		try {
			this.state = 1105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1102;
				this.trailingTypeSpecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1103;
				this.classSpecifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1104;
				this.enumSpecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailingTypeSpecifier(): TrailingTypeSpecifierContext {
		let _localctx: TrailingTypeSpecifierContext = new TrailingTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CPP14Parser.RULE_trailingTypeSpecifier);
		try {
			this.state = 1111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1107;
				this.simpleTypeSpecifier();
				}
				break;
			case CPP14Parser.Class:
			case CPP14Parser.Enum:
			case CPP14Parser.Struct:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1108;
				this.elaboratedTypeSpecifier();
				}
				break;
			case CPP14Parser.Typename_:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1109;
				this.typeNameSpecifier();
				}
				break;
			case CPP14Parser.Const:
			case CPP14Parser.Volatile:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1110;
				this.cvQualifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifierSeq(): TypeSpecifierSeqContext {
		let _localctx: TypeSpecifierSeqContext = new TypeSpecifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CPP14Parser.RULE_typeSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1114;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1113;
					this.typeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1116;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1118;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailingTypeSpecifierSeq(): TrailingTypeSpecifierSeqContext {
		let _localctx: TrailingTypeSpecifierSeqContext = new TrailingTypeSpecifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CPP14Parser.RULE_trailingTypeSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1121;
					this.trailingTypeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1124;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1127;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1126;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTypeSpecifier(): SimpleTypeSpecifierContext {
		let _localctx: SimpleTypeSpecifierContext = new SimpleTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CPP14Parser.RULE_simpleTypeSpecifier);
		try {
			this.state = 1152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1130;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 1129;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1132;
				this.theTypeName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1133;
				this.nestedNameSpecifier(0);
				this.state = 1134;
				this.match(CPP14Parser.Template);
				this.state = 1135;
				this.simpleTemplateId();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1137;
				this.match(CPP14Parser.Char);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1138;
				this.match(CPP14Parser.Char16);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1139;
				this.match(CPP14Parser.Char32);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1140;
				this.match(CPP14Parser.Wchar);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1141;
				this.match(CPP14Parser.Bool);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1142;
				this.match(CPP14Parser.Short);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1143;
				this.match(CPP14Parser.Int);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1144;
				this.match(CPP14Parser.Long);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1145;
				this.match(CPP14Parser.Signed);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1146;
				this.match(CPP14Parser.Unsigned);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1147;
				this.match(CPP14Parser.Float);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1148;
				this.match(CPP14Parser.Double);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1149;
				this.match(CPP14Parser.Void);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1150;
				this.match(CPP14Parser.Auto);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1151;
				this.decltypeSpecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public theTypeName(): TheTypeNameContext {
		let _localctx: TheTypeNameContext = new TheTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CPP14Parser.RULE_theTypeName);
		try {
			this.state = 1158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1154;
				this.className();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1155;
				this.enumName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1156;
				this.typedefName();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1157;
				this.simpleTemplateId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decltypeSpecifier(): DecltypeSpecifierContext {
		let _localctx: DecltypeSpecifierContext = new DecltypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CPP14Parser.RULE_decltypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1160;
			this.match(CPP14Parser.Decltype);
			this.state = 1161;
			this.match(CPP14Parser.LeftParen);
			this.state = 1164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 1162;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 1163;
				this.match(CPP14Parser.Auto);
				}
				break;
			}
			this.state = 1166;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elaboratedTypeSpecifier(): ElaboratedTypeSpecifierContext {
		let _localctx: ElaboratedTypeSpecifierContext = new ElaboratedTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CPP14Parser.RULE_elaboratedTypeSpecifier);
		let _la: number;
		try {
			this.state = 1190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Class:
			case CPP14Parser.Struct:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1168;
				this.classKey();
				this.state = 1183;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
						{
						this.state = 1169;
						this.attributeSpecifierSeq();
						}
					}

					this.state = 1173;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
					case 1:
						{
						this.state = 1172;
						this.nestedNameSpecifier(0);
						}
						break;
					}
					this.state = 1175;
					this.match(CPP14Parser.Identifier);
					}
					break;

				case 2:
					{
					this.state = 1176;
					this.simpleTemplateId();
					}
					break;

				case 3:
					{
					this.state = 1177;
					this.nestedNameSpecifier(0);
					this.state = 1179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Template) {
						{
						this.state = 1178;
						this.match(CPP14Parser.Template);
						}
					}

					this.state = 1181;
					this.simpleTemplateId();
					}
					break;
				}
				}
				break;
			case CPP14Parser.Enum:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1185;
				this.match(CPP14Parser.Enum);
				this.state = 1187;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
				case 1:
					{
					this.state = 1186;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1189;
				this.match(CPP14Parser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumName(): EnumNameContext {
		let _localctx: EnumNameContext = new EnumNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CPP14Parser.RULE_enumName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1192;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumSpecifier(): EnumSpecifierContext {
		let _localctx: EnumSpecifierContext = new EnumSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CPP14Parser.RULE_enumSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			this.enumHead();
			this.state = 1195;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Identifier) {
				{
				this.state = 1196;
				this.enumeratorList();
				this.state = 1198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Comma) {
					{
					this.state = 1197;
					this.match(CPP14Parser.Comma);
					}
				}

				}
			}

			this.state = 1202;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumHead(): EnumHeadContext {
		let _localctx: EnumHeadContext = new EnumHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CPP14Parser.RULE_enumHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1204;
			this.enumkey();
			this.state = 1206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1205;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				this.state = 1209;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
				case 1:
					{
					this.state = 1208;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1211;
				this.match(CPP14Parser.Identifier);
				}
			}

			this.state = 1215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Colon) {
				{
				this.state = 1214;
				this.enumbase();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opaqueEnumDeclaration(): OpaqueEnumDeclarationContext {
		let _localctx: OpaqueEnumDeclarationContext = new OpaqueEnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CPP14Parser.RULE_opaqueEnumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1217;
			this.enumkey();
			this.state = 1219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1218;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1221;
			this.match(CPP14Parser.Identifier);
			this.state = 1223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Colon) {
				{
				this.state = 1222;
				this.enumbase();
				}
			}

			this.state = 1225;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumkey(): EnumkeyContext {
		let _localctx: EnumkeyContext = new EnumkeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CPP14Parser.RULE_enumkey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1227;
			this.match(CPP14Parser.Enum);
			this.state = 1229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Class || _la === CPP14Parser.Struct) {
				{
				this.state = 1228;
				_la = this._input.LA(1);
				if (!(_la === CPP14Parser.Class || _la === CPP14Parser.Struct)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumbase(): EnumbaseContext {
		let _localctx: EnumbaseContext = new EnumbaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CPP14Parser.RULE_enumbase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1231;
			this.match(CPP14Parser.Colon);
			this.state = 1232;
			this.typeSpecifierSeq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratorList(): EnumeratorListContext {
		let _localctx: EnumeratorListContext = new EnumeratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CPP14Parser.RULE_enumeratorList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
			this.enumeratorDefinition();
			this.state = 1239;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1235;
					this.match(CPP14Parser.Comma);
					this.state = 1236;
					this.enumeratorDefinition();
					}
					}
				}
				this.state = 1241;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratorDefinition(): EnumeratorDefinitionContext {
		let _localctx: EnumeratorDefinitionContext = new EnumeratorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CPP14Parser.RULE_enumeratorDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1242;
			this.enumerator();
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Assign) {
				{
				this.state = 1243;
				this.match(CPP14Parser.Assign);
				this.state = 1244;
				this.constantExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerator(): EnumeratorContext {
		let _localctx: EnumeratorContext = new EnumeratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CPP14Parser.RULE_enumerator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1247;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceName(): NamespaceNameContext {
		let _localctx: NamespaceNameContext = new NamespaceNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CPP14Parser.RULE_namespaceName);
		try {
			this.state = 1251;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1249;
				this.originalNamespaceName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1250;
				this.namespaceAlias();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public originalNamespaceName(): OriginalNamespaceNameContext {
		let _localctx: OriginalNamespaceNameContext = new OriginalNamespaceNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CPP14Parser.RULE_originalNamespaceName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1253;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceDefinition(): NamespaceDefinitionContext {
		let _localctx: NamespaceDefinitionContext = new NamespaceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CPP14Parser.RULE_namespaceDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Inline) {
				{
				this.state = 1255;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1258;
			this.match(CPP14Parser.Namespace);
			this.state = 1261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1259;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				{
				this.state = 1260;
				this.originalNamespaceName();
				}
				break;
			}
			this.state = 1263;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CPP14Parser.Include - 8)) | (1 << (CPP14Parser.Define - 8)) | (1 << (CPP14Parser.Alignas - 8)) | (1 << (CPP14Parser.Asm - 8)) | (1 << (CPP14Parser.Auto - 8)) | (1 << (CPP14Parser.Bool - 8)) | (1 << (CPP14Parser.Char - 8)) | (1 << (CPP14Parser.Char16 - 8)) | (1 << (CPP14Parser.Char32 - 8)) | (1 << (CPP14Parser.Class - 8)) | (1 << (CPP14Parser.Const - 8)) | (1 << (CPP14Parser.Constexpr - 8)) | (1 << (CPP14Parser.Decltype - 8)) | (1 << (CPP14Parser.Double - 8)) | (1 << (CPP14Parser.Enum - 8)) | (1 << (CPP14Parser.Explicit - 8)) | (1 << (CPP14Parser.Extern - 8)) | (1 << (CPP14Parser.Float - 8)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CPP14Parser.Friend - 41)) | (1 << (CPP14Parser.Inline - 41)) | (1 << (CPP14Parser.Int - 41)) | (1 << (CPP14Parser.Long - 41)) | (1 << (CPP14Parser.Mutable - 41)) | (1 << (CPP14Parser.Namespace - 41)) | (1 << (CPP14Parser.Operator - 41)) | (1 << (CPP14Parser.Register - 41)) | (1 << (CPP14Parser.Short - 41)) | (1 << (CPP14Parser.Signed - 41)) | (1 << (CPP14Parser.Static - 41)) | (1 << (CPP14Parser.Static_assert - 41)) | (1 << (CPP14Parser.Struct - 41)) | (1 << (CPP14Parser.Template - 41)) | (1 << (CPP14Parser.Thread_local - 41)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CPP14Parser.Typedef - 74)) | (1 << (CPP14Parser.Typename_ - 74)) | (1 << (CPP14Parser.Union - 74)) | (1 << (CPP14Parser.Unsigned - 74)) | (1 << (CPP14Parser.Using - 74)) | (1 << (CPP14Parser.Virtual - 74)) | (1 << (CPP14Parser.Void - 74)) | (1 << (CPP14Parser.Volatile - 74)) | (1 << (CPP14Parser.Wchar - 74)) | (1 << (CPP14Parser.LeftParen - 74)) | (1 << (CPP14Parser.LeftBracket - 74)) | (1 << (CPP14Parser.Star - 74)) | (1 << (CPP14Parser.And - 74)) | (1 << (CPP14Parser.Tilde - 74)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPP14Parser.AndAnd - 118)) | (1 << (CPP14Parser.Doublecolon - 118)) | (1 << (CPP14Parser.Semi - 118)) | (1 << (CPP14Parser.Ellipsis - 118)) | (1 << (CPP14Parser.IncludeQuote - 118)) | (1 << (CPP14Parser.Identifier - 118)))) !== 0)) {
				{
				this.state = 1264;
				_localctx._namespaceBody = this.declarationseq();
				}
			}

			this.state = 1267;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceAlias(): NamespaceAliasContext {
		let _localctx: NamespaceAliasContext = new NamespaceAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CPP14Parser.RULE_namespaceAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1269;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceAliasDefinition(): NamespaceAliasDefinitionContext {
		let _localctx: NamespaceAliasDefinitionContext = new NamespaceAliasDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CPP14Parser.RULE_namespaceAliasDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1271;
			this.match(CPP14Parser.Namespace);
			this.state = 1272;
			this.match(CPP14Parser.Identifier);
			this.state = 1273;
			this.match(CPP14Parser.Assign);
			this.state = 1274;
			this.qualifiednamespacespecifier();
			this.state = 1275;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
		let _localctx: QualifiednamespacespecifierContext = new QualifiednamespacespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, CPP14Parser.RULE_qualifiednamespacespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1277;
				this.nestedNameSpecifier(0);
				}
				break;
			}
			this.state = 1280;
			this.namespaceName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingDeclaration(): UsingDeclarationContext {
		let _localctx: UsingDeclarationContext = new UsingDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, CPP14Parser.RULE_usingDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1282;
			this.match(CPP14Parser.Using);
			this.state = 1288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Typename_) {
					{
					this.state = 1283;
					this.match(CPP14Parser.Typename_);
					}
				}

				this.state = 1286;
				this.nestedNameSpecifier(0);
				}
				}
				break;

			case 2:
				{
				this.state = 1287;
				this.match(CPP14Parser.Doublecolon);
				}
				break;
			}
			this.state = 1290;
			this.unqualifiedId();
			this.state = 1291;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingDirective(): UsingDirectiveContext {
		let _localctx: UsingDirectiveContext = new UsingDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, CPP14Parser.RULE_usingDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1293;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1296;
			this.match(CPP14Parser.Using);
			this.state = 1297;
			this.match(CPP14Parser.Namespace);
			this.state = 1299;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				{
				this.state = 1298;
				this.nestedNameSpecifier(0);
				}
				break;
			}
			this.state = 1301;
			this.namespaceName();
			this.state = 1302;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asmDefinition(): AsmDefinitionContext {
		let _localctx: AsmDefinitionContext = new AsmDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, CPP14Parser.RULE_asmDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			this.match(CPP14Parser.Asm);
			this.state = 1305;
			this.match(CPP14Parser.LeftParen);
			this.state = 1306;
			this.match(CPP14Parser.StringLiteral);
			this.state = 1307;
			this.match(CPP14Parser.RightParen);
			this.state = 1308;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linkageSpecification(): LinkageSpecificationContext {
		let _localctx: LinkageSpecificationContext = new LinkageSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, CPP14Parser.RULE_linkageSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1310;
			this.match(CPP14Parser.Extern);
			this.state = 1311;
			this.match(CPP14Parser.StringLiteral);
			this.state = 1318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBrace:
				{
				this.state = 1312;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CPP14Parser.Include - 8)) | (1 << (CPP14Parser.Define - 8)) | (1 << (CPP14Parser.Alignas - 8)) | (1 << (CPP14Parser.Asm - 8)) | (1 << (CPP14Parser.Auto - 8)) | (1 << (CPP14Parser.Bool - 8)) | (1 << (CPP14Parser.Char - 8)) | (1 << (CPP14Parser.Char16 - 8)) | (1 << (CPP14Parser.Char32 - 8)) | (1 << (CPP14Parser.Class - 8)) | (1 << (CPP14Parser.Const - 8)) | (1 << (CPP14Parser.Constexpr - 8)) | (1 << (CPP14Parser.Decltype - 8)) | (1 << (CPP14Parser.Double - 8)) | (1 << (CPP14Parser.Enum - 8)) | (1 << (CPP14Parser.Explicit - 8)) | (1 << (CPP14Parser.Extern - 8)) | (1 << (CPP14Parser.Float - 8)))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CPP14Parser.Friend - 41)) | (1 << (CPP14Parser.Inline - 41)) | (1 << (CPP14Parser.Int - 41)) | (1 << (CPP14Parser.Long - 41)) | (1 << (CPP14Parser.Mutable - 41)) | (1 << (CPP14Parser.Namespace - 41)) | (1 << (CPP14Parser.Operator - 41)) | (1 << (CPP14Parser.Register - 41)) | (1 << (CPP14Parser.Short - 41)) | (1 << (CPP14Parser.Signed - 41)) | (1 << (CPP14Parser.Static - 41)) | (1 << (CPP14Parser.Static_assert - 41)) | (1 << (CPP14Parser.Struct - 41)) | (1 << (CPP14Parser.Template - 41)) | (1 << (CPP14Parser.Thread_local - 41)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CPP14Parser.Typedef - 74)) | (1 << (CPP14Parser.Typename_ - 74)) | (1 << (CPP14Parser.Union - 74)) | (1 << (CPP14Parser.Unsigned - 74)) | (1 << (CPP14Parser.Using - 74)) | (1 << (CPP14Parser.Virtual - 74)) | (1 << (CPP14Parser.Void - 74)) | (1 << (CPP14Parser.Volatile - 74)) | (1 << (CPP14Parser.Wchar - 74)) | (1 << (CPP14Parser.LeftParen - 74)) | (1 << (CPP14Parser.LeftBracket - 74)) | (1 << (CPP14Parser.Star - 74)) | (1 << (CPP14Parser.And - 74)) | (1 << (CPP14Parser.Tilde - 74)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPP14Parser.AndAnd - 118)) | (1 << (CPP14Parser.Doublecolon - 118)) | (1 << (CPP14Parser.Semi - 118)) | (1 << (CPP14Parser.Ellipsis - 118)) | (1 << (CPP14Parser.IncludeQuote - 118)) | (1 << (CPP14Parser.Identifier - 118)))) !== 0)) {
					{
					this.state = 1313;
					this.declarationseq();
					}
				}

				this.state = 1316;
				this.match(CPP14Parser.RightBrace);
				}
				break;
			case CPP14Parser.Include:
			case CPP14Parser.Define:
			case CPP14Parser.Alignas:
			case CPP14Parser.Asm:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Constexpr:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Explicit:
			case CPP14Parser.Extern:
			case CPP14Parser.Float:
			case CPP14Parser.Friend:
			case CPP14Parser.Inline:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Mutable:
			case CPP14Parser.Namespace:
			case CPP14Parser.Operator:
			case CPP14Parser.Register:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Static:
			case CPP14Parser.Static_assert:
			case CPP14Parser.Struct:
			case CPP14Parser.Template:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Typedef:
			case CPP14Parser.Typename_:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Using:
			case CPP14Parser.Virtual:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Tilde:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Semi:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.IncludeQuote:
			case CPP14Parser.Identifier:
				{
				this.state = 1317;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext {
		let _localctx: AttributeSpecifierSeqContext = new AttributeSpecifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, CPP14Parser.RULE_attributeSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1321;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1320;
					this.attributeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeSpecifier(): AttributeSpecifierContext {
		let _localctx: AttributeSpecifierContext = new AttributeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, CPP14Parser.RULE_attributeSpecifier);
		let _la: number;
		try {
			this.state = 1333;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1325;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1326;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1327;
					this.attributeList();
					}
				}

				this.state = 1330;
				this.match(CPP14Parser.RightBracket);
				this.state = 1331;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			case CPP14Parser.Alignas:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1332;
				this.alignmentspecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alignmentspecifier(): AlignmentspecifierContext {
		let _localctx: AlignmentspecifierContext = new AlignmentspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, CPP14Parser.RULE_alignmentspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1335;
			this.match(CPP14Parser.Alignas);
			this.state = 1336;
			this.match(CPP14Parser.LeftParen);
			this.state = 1339;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				{
				this.state = 1337;
				this.theTypeId();
				}
				break;

			case 2:
				{
				this.state = 1338;
				this.constantExpression();
				}
				break;
			}
			this.state = 1342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1341;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1344;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeList(): AttributeListContext {
		let _localctx: AttributeListContext = new AttributeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, CPP14Parser.RULE_attributeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1346;
			this.attribute();
			this.state = 1351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1347;
				this.match(CPP14Parser.Comma);
				this.state = 1348;
				this.attribute();
				}
				}
				this.state = 1353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1354;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, CPP14Parser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1360;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				this.state = 1357;
				this.attributeNamespace();
				this.state = 1358;
				this.match(CPP14Parser.Doublecolon);
				}
				break;
			}
			this.state = 1362;
			this.match(CPP14Parser.Identifier);
			this.state = 1364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.LeftParen) {
				{
				this.state = 1363;
				this.attributeArgumentClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeNamespace(): AttributeNamespaceContext {
		let _localctx: AttributeNamespaceContext = new AttributeNamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, CPP14Parser.RULE_attributeNamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1366;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeArgumentClause(): AttributeArgumentClauseContext {
		let _localctx: AttributeArgumentClauseContext = new AttributeArgumentClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, CPP14Parser.RULE_attributeArgumentClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1368;
			this.match(CPP14Parser.LeftParen);
			this.state = 1370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Include) | (1 << CPP14Parser.Define) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Catch) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Else - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Export - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.False_ - 32)) | (1 << (CPP14Parser.Final - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Override - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Return - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Static_assert - 64)) | (1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.Switch - 64)) | (1 << (CPP14Parser.Template - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.Thread_local - 64)) | (1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True_ - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.Div - 64)) | (1 << (CPP14Parser.Mod - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CPP14Parser.Caret - 96)) | (1 << (CPP14Parser.And - 96)) | (1 << (CPP14Parser.Or - 96)) | (1 << (CPP14Parser.Tilde - 96)) | (1 << (CPP14Parser.Not - 96)) | (1 << (CPP14Parser.Assign - 96)) | (1 << (CPP14Parser.Less - 96)) | (1 << (CPP14Parser.Greater - 96)) | (1 << (CPP14Parser.PlusAssign - 96)) | (1 << (CPP14Parser.MinusAssign - 96)) | (1 << (CPP14Parser.StarAssign - 96)) | (1 << (CPP14Parser.DivAssign - 96)) | (1 << (CPP14Parser.ModAssign - 96)) | (1 << (CPP14Parser.XorAssign - 96)) | (1 << (CPP14Parser.AndAssign - 96)) | (1 << (CPP14Parser.OrAssign - 96)) | (1 << (CPP14Parser.LeftShiftAssign - 96)) | (1 << (CPP14Parser.RightShiftAssign - 96)) | (1 << (CPP14Parser.Equal - 96)) | (1 << (CPP14Parser.NotEqual - 96)) | (1 << (CPP14Parser.LessEqual - 96)) | (1 << (CPP14Parser.GreaterEqual - 96)) | (1 << (CPP14Parser.AndAnd - 96)) | (1 << (CPP14Parser.OrOr - 96)) | (1 << (CPP14Parser.PlusPlus - 96)) | (1 << (CPP14Parser.MinusMinus - 96)) | (1 << (CPP14Parser.Comma - 96)) | (1 << (CPP14Parser.ArrowStar - 96)) | (1 << (CPP14Parser.Arrow - 96)) | (1 << (CPP14Parser.Question - 96)) | (1 << (CPP14Parser.Colon - 96)) | (1 << (CPP14Parser.Doublecolon - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.Semi - 128)) | (1 << (CPP14Parser.Dot - 128)) | (1 << (CPP14Parser.DotStar - 128)) | (1 << (CPP14Parser.Ellipsis - 128)) | (1 << (CPP14Parser.Quote - 128)) | (1 << (CPP14Parser.IncludeQuote - 128)) | (1 << (CPP14Parser.MultiLineMacro - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.DecimalLiteral - 128)) | (1 << (CPP14Parser.OctalLiteral - 128)) | (1 << (CPP14Parser.HexadecimalLiteral - 128)) | (1 << (CPP14Parser.BinaryLiteral - 128)) | (1 << (CPP14Parser.Integersuffix - 128)) | (1 << (CPP14Parser.UserDefinedIntegerLiteral - 128)) | (1 << (CPP14Parser.UserDefinedFloatingLiteral - 128)) | (1 << (CPP14Parser.UserDefinedStringLiteral - 128)) | (1 << (CPP14Parser.UserDefinedCharacterLiteral - 128)) | (1 << (CPP14Parser.Whitespace - 128)) | (1 << (CPP14Parser.Newline - 128)) | (1 << (CPP14Parser.BlockComment - 128)) | (1 << (CPP14Parser.LineComment - 128)))) !== 0)) {
				{
				this.state = 1369;
				this.balancedTokenSeq();
				}
			}

			this.state = 1372;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public balancedTokenSeq(): BalancedTokenSeqContext {
		let _localctx: BalancedTokenSeqContext = new BalancedTokenSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, CPP14Parser.RULE_balancedTokenSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1374;
				this.balancedtoken();
				}
				}
				this.state = 1377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Include) | (1 << CPP14Parser.Define) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Catch) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Else - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Export - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.False_ - 32)) | (1 << (CPP14Parser.Final - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Override - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Return - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Static_assert - 64)) | (1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.Switch - 64)) | (1 << (CPP14Parser.Template - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.Thread_local - 64)) | (1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True_ - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.Div - 64)) | (1 << (CPP14Parser.Mod - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CPP14Parser.Caret - 96)) | (1 << (CPP14Parser.And - 96)) | (1 << (CPP14Parser.Or - 96)) | (1 << (CPP14Parser.Tilde - 96)) | (1 << (CPP14Parser.Not - 96)) | (1 << (CPP14Parser.Assign - 96)) | (1 << (CPP14Parser.Less - 96)) | (1 << (CPP14Parser.Greater - 96)) | (1 << (CPP14Parser.PlusAssign - 96)) | (1 << (CPP14Parser.MinusAssign - 96)) | (1 << (CPP14Parser.StarAssign - 96)) | (1 << (CPP14Parser.DivAssign - 96)) | (1 << (CPP14Parser.ModAssign - 96)) | (1 << (CPP14Parser.XorAssign - 96)) | (1 << (CPP14Parser.AndAssign - 96)) | (1 << (CPP14Parser.OrAssign - 96)) | (1 << (CPP14Parser.LeftShiftAssign - 96)) | (1 << (CPP14Parser.RightShiftAssign - 96)) | (1 << (CPP14Parser.Equal - 96)) | (1 << (CPP14Parser.NotEqual - 96)) | (1 << (CPP14Parser.LessEqual - 96)) | (1 << (CPP14Parser.GreaterEqual - 96)) | (1 << (CPP14Parser.AndAnd - 96)) | (1 << (CPP14Parser.OrOr - 96)) | (1 << (CPP14Parser.PlusPlus - 96)) | (1 << (CPP14Parser.MinusMinus - 96)) | (1 << (CPP14Parser.Comma - 96)) | (1 << (CPP14Parser.ArrowStar - 96)) | (1 << (CPP14Parser.Arrow - 96)) | (1 << (CPP14Parser.Question - 96)) | (1 << (CPP14Parser.Colon - 96)) | (1 << (CPP14Parser.Doublecolon - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.Semi - 128)) | (1 << (CPP14Parser.Dot - 128)) | (1 << (CPP14Parser.DotStar - 128)) | (1 << (CPP14Parser.Ellipsis - 128)) | (1 << (CPP14Parser.Quote - 128)) | (1 << (CPP14Parser.IncludeQuote - 128)) | (1 << (CPP14Parser.MultiLineMacro - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.DecimalLiteral - 128)) | (1 << (CPP14Parser.OctalLiteral - 128)) | (1 << (CPP14Parser.HexadecimalLiteral - 128)) | (1 << (CPP14Parser.BinaryLiteral - 128)) | (1 << (CPP14Parser.Integersuffix - 128)) | (1 << (CPP14Parser.UserDefinedIntegerLiteral - 128)) | (1 << (CPP14Parser.UserDefinedFloatingLiteral - 128)) | (1 << (CPP14Parser.UserDefinedStringLiteral - 128)) | (1 << (CPP14Parser.UserDefinedCharacterLiteral - 128)) | (1 << (CPP14Parser.Whitespace - 128)) | (1 << (CPP14Parser.Newline - 128)) | (1 << (CPP14Parser.BlockComment - 128)) | (1 << (CPP14Parser.LineComment - 128)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public balancedtoken(): BalancedtokenContext {
		let _localctx: BalancedtokenContext = new BalancedtokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, CPP14Parser.RULE_balancedtoken);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1396;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1379;
				this.match(CPP14Parser.LeftParen);
				this.state = 1380;
				this.balancedTokenSeq();
				this.state = 1381;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1383;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1384;
				this.balancedTokenSeq();
				this.state = 1385;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1387;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1388;
				this.balancedTokenSeq();
				this.state = 1389;
				this.match(CPP14Parser.RightBrace);
				}
				break;
			case CPP14Parser.IntegerLiteral:
			case CPP14Parser.CharacterLiteral:
			case CPP14Parser.FloatingLiteral:
			case CPP14Parser.StringLiteral:
			case CPP14Parser.BooleanLiteral:
			case CPP14Parser.PointerLiteral:
			case CPP14Parser.UserDefinedLiteral:
			case CPP14Parser.Include:
			case CPP14Parser.Define:
			case CPP14Parser.Alignas:
			case CPP14Parser.Alignof:
			case CPP14Parser.Asm:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Break:
			case CPP14Parser.Case:
			case CPP14Parser.Catch:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Constexpr:
			case CPP14Parser.Const_cast:
			case CPP14Parser.Continue:
			case CPP14Parser.Decltype:
			case CPP14Parser.Default:
			case CPP14Parser.Delete:
			case CPP14Parser.Do:
			case CPP14Parser.Double:
			case CPP14Parser.Dynamic_cast:
			case CPP14Parser.Else:
			case CPP14Parser.Enum:
			case CPP14Parser.Explicit:
			case CPP14Parser.Export:
			case CPP14Parser.Extern:
			case CPP14Parser.False_:
			case CPP14Parser.Final:
			case CPP14Parser.Float:
			case CPP14Parser.For:
			case CPP14Parser.Friend:
			case CPP14Parser.Goto:
			case CPP14Parser.If:
			case CPP14Parser.Inline:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Mutable:
			case CPP14Parser.Namespace:
			case CPP14Parser.New:
			case CPP14Parser.Noexcept:
			case CPP14Parser.Nullptr:
			case CPP14Parser.Operator:
			case CPP14Parser.Override:
			case CPP14Parser.Private:
			case CPP14Parser.Protected:
			case CPP14Parser.Public:
			case CPP14Parser.Register:
			case CPP14Parser.Reinterpret_cast:
			case CPP14Parser.Return:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Sizeof:
			case CPP14Parser.Static:
			case CPP14Parser.Static_assert:
			case CPP14Parser.Static_cast:
			case CPP14Parser.Struct:
			case CPP14Parser.Switch:
			case CPP14Parser.Template:
			case CPP14Parser.This:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Throw:
			case CPP14Parser.True_:
			case CPP14Parser.Try:
			case CPP14Parser.Typedef:
			case CPP14Parser.Typeid_:
			case CPP14Parser.Typename_:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Using:
			case CPP14Parser.Virtual:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.While:
			case CPP14Parser.Plus:
			case CPP14Parser.Minus:
			case CPP14Parser.Star:
			case CPP14Parser.Div:
			case CPP14Parser.Mod:
			case CPP14Parser.Caret:
			case CPP14Parser.And:
			case CPP14Parser.Or:
			case CPP14Parser.Tilde:
			case CPP14Parser.Not:
			case CPP14Parser.Assign:
			case CPP14Parser.Less:
			case CPP14Parser.Greater:
			case CPP14Parser.PlusAssign:
			case CPP14Parser.MinusAssign:
			case CPP14Parser.StarAssign:
			case CPP14Parser.DivAssign:
			case CPP14Parser.ModAssign:
			case CPP14Parser.XorAssign:
			case CPP14Parser.AndAssign:
			case CPP14Parser.OrAssign:
			case CPP14Parser.LeftShiftAssign:
			case CPP14Parser.RightShiftAssign:
			case CPP14Parser.Equal:
			case CPP14Parser.NotEqual:
			case CPP14Parser.LessEqual:
			case CPP14Parser.GreaterEqual:
			case CPP14Parser.AndAnd:
			case CPP14Parser.OrOr:
			case CPP14Parser.PlusPlus:
			case CPP14Parser.MinusMinus:
			case CPP14Parser.Comma:
			case CPP14Parser.ArrowStar:
			case CPP14Parser.Arrow:
			case CPP14Parser.Question:
			case CPP14Parser.Colon:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Semi:
			case CPP14Parser.Dot:
			case CPP14Parser.DotStar:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Quote:
			case CPP14Parser.IncludeQuote:
			case CPP14Parser.MultiLineMacro:
			case CPP14Parser.Identifier:
			case CPP14Parser.DecimalLiteral:
			case CPP14Parser.OctalLiteral:
			case CPP14Parser.HexadecimalLiteral:
			case CPP14Parser.BinaryLiteral:
			case CPP14Parser.Integersuffix:
			case CPP14Parser.UserDefinedIntegerLiteral:
			case CPP14Parser.UserDefinedFloatingLiteral:
			case CPP14Parser.UserDefinedStringLiteral:
			case CPP14Parser.UserDefinedCharacterLiteral:
			case CPP14Parser.Whitespace:
			case CPP14Parser.Newline:
			case CPP14Parser.BlockComment:
			case CPP14Parser.LineComment:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1392;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1391;
						_la = this._input.LA(1);
						if (_la <= 0 || (((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (CPP14Parser.LeftParen - 85)) | (1 << (CPP14Parser.RightParen - 85)) | (1 << (CPP14Parser.LeftBracket - 85)) | (1 << (CPP14Parser.RightBracket - 85)) | (1 << (CPP14Parser.LeftBrace - 85)) | (1 << (CPP14Parser.RightBrace - 85)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1394;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclaratorList(): InitDeclaratorListContext {
		let _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, CPP14Parser.RULE_initDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1398;
			this.initDeclarator();
			this.state = 1403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1399;
				this.match(CPP14Parser.Comma);
				this.state = 1400;
				this.initDeclarator();
				}
				}
				this.state = 1405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, CPP14Parser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1406;
			this.declarator();
			this.state = 1408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (CPP14Parser.LeftParen - 85)) | (1 << (CPP14Parser.LeftBrace - 85)) | (1 << (CPP14Parser.Assign - 85)))) !== 0)) {
				{
				this.state = 1407;
				this.initializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, CPP14Parser.RULE_declarator);
		try {
			this.state = 1415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1410;
				this.pointerDeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1411;
				this.noPointerDeclarator(0);
				this.state = 1412;
				this.parametersAndQualifiers();
				this.state = 1413;
				this.trailingReturnType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerDeclarator(): PointerDeclaratorContext {
		let _localctx: PointerDeclaratorContext = new PointerDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, CPP14Parser.RULE_pointerDeclarator);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1423;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1417;
					this.pointerOperator();
					this.state = 1419;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Const) {
						{
						this.state = 1418;
						this.match(CPP14Parser.Const);
						}
					}

					}
					}
				}
				this.state = 1425;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			}
			this.state = 1426;
			this.noPointerDeclarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noPointerDeclarator(): NoPointerDeclaratorContext;
	public noPointerDeclarator(_p: number): NoPointerDeclaratorContext;
	// @RuleVersion(0)
	public noPointerDeclarator(_p?: number): NoPointerDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoPointerDeclaratorContext = new NoPointerDeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoPointerDeclaratorContext = _localctx;
		let _startState: number = 232;
		this.enterRecursionRule(_localctx, 232, CPP14Parser.RULE_noPointerDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1437;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Decltype:
			case CPP14Parser.Operator:
			case CPP14Parser.Tilde:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				{
				this.state = 1429;
				this.declaratorid();
				this.state = 1431;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
				case 1:
					{
					this.state = 1430;
					this.attributeSpecifierSeq();
					}
					break;
				}
				}
				break;
			case CPP14Parser.LeftParen:
				{
				this.state = 1433;
				this.match(CPP14Parser.LeftParen);
				this.state = 1434;
				this.pointerDeclarator();
				this.state = 1435;
				this.match(CPP14Parser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1453;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NoPointerDeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noPointerDeclarator);
					this.state = 1439;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1449;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CPP14Parser.LeftParen:
						{
						this.state = 1440;
						this.parametersAndQualifiers();
						}
						break;
					case CPP14Parser.LeftBracket:
						{
						this.state = 1441;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1443;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)) | (1 << (CPP14Parser.Not - 75)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
							{
							this.state = 1442;
							this.constantExpression();
							}
						}

						this.state = 1445;
						this.match(CPP14Parser.RightBracket);
						this.state = 1447;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
						case 1:
							{
							this.state = 1446;
							this.attributeSpecifierSeq();
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parametersAndQualifiers(): ParametersAndQualifiersContext {
		let _localctx: ParametersAndQualifiersContext = new ParametersAndQualifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, CPP14Parser.RULE_parametersAndQualifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1456;
			this.match(CPP14Parser.LeftParen);
			this.state = 1458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPP14Parser.Enum - 33)) | (1 << (CPP14Parser.Explicit - 33)) | (1 << (CPP14Parser.Extern - 33)) | (1 << (CPP14Parser.Float - 33)) | (1 << (CPP14Parser.Friend - 33)) | (1 << (CPP14Parser.Inline - 33)) | (1 << (CPP14Parser.Int - 33)) | (1 << (CPP14Parser.Long - 33)) | (1 << (CPP14Parser.Mutable - 33)) | (1 << (CPP14Parser.Register - 33)) | (1 << (CPP14Parser.Short - 33)) | (1 << (CPP14Parser.Signed - 33)) | (1 << (CPP14Parser.Static - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Thread_local - 66)) | (1 << (CPP14Parser.Typedef - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Virtual - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)) | (1 << (CPP14Parser.LeftBracket - 66)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				this.state = 1457;
				this.parameterDeclarationClause();
				}
			}

			this.state = 1460;
			this.match(CPP14Parser.RightParen);
			this.state = 1462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				{
				this.state = 1461;
				this.cvqualifierseq();
				}
				break;
			}
			this.state = 1465;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1464;
				this.refqualifier();
				}
				break;
			}
			this.state = 1468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				{
				this.state = 1467;
				this.exceptionSpecification();
				}
				break;
			}
			this.state = 1471;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				{
				this.state = 1470;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailingReturnType(): TrailingReturnTypeContext {
		let _localctx: TrailingReturnTypeContext = new TrailingReturnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, CPP14Parser.RULE_trailingReturnType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1473;
			this.match(CPP14Parser.Arrow);
			this.state = 1474;
			this.trailingTypeSpecifierSeq();
			this.state = 1476;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1475;
				this.abstractDeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerOperator(): PointerOperatorContext {
		let _localctx: PointerOperatorContext = new PointerOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, CPP14Parser.RULE_pointerOperator);
		let _la: number;
		try {
			this.state = 1492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.And:
			case CPP14Parser.AndAnd:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1478;
				_la = this._input.LA(1);
				if (!(_la === CPP14Parser.And || _la === CPP14Parser.AndAnd)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1480;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
				case 1:
					{
					this.state = 1479;
					this.attributeSpecifierSeq();
					}
					break;
				}
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
					{
					this.state = 1482;
					this.nestedNameSpecifier(0);
					}
				}

				this.state = 1485;
				this.match(CPP14Parser.Star);
				this.state = 1487;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
				case 1:
					{
					this.state = 1486;
					this.attributeSpecifierSeq();
					}
					break;
				}
				this.state = 1490;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
				case 1:
					{
					this.state = 1489;
					this.cvqualifierseq();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cvqualifierseq(): CvqualifierseqContext {
		let _localctx: CvqualifierseqContext = new CvqualifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, CPP14Parser.RULE_cvqualifierseq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1495;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1494;
					this.cvQualifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1497;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cvQualifier(): CvQualifierContext {
		let _localctx: CvQualifierContext = new CvQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, CPP14Parser.RULE_cvQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1499;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Const || _la === CPP14Parser.Volatile)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refqualifier(): RefqualifierContext {
		let _localctx: RefqualifierContext = new RefqualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, CPP14Parser.RULE_refqualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1501;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.And || _la === CPP14Parser.AndAnd)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaratorid(): DeclaratoridContext {
		let _localctx: DeclaratoridContext = new DeclaratoridContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, CPP14Parser.RULE_declaratorid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1503;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1506;
			this.idExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public theTypeId(): TheTypeIdContext {
		let _localctx: TheTypeIdContext = new TheTypeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, CPP14Parser.RULE_theTypeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1508;
			this.typeSpecifierSeq();
			this.state = 1510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				{
				this.state = 1509;
				this.abstractDeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractDeclarator(): AbstractDeclaratorContext {
		let _localctx: AbstractDeclaratorContext = new AbstractDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, CPP14Parser.RULE_abstractDeclarator);
		try {
			this.state = 1520;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1512;
				this.pointerAbstractDeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1514;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
				case 1:
					{
					this.state = 1513;
					this.noPointerAbstractDeclarator(0);
					}
					break;
				}
				this.state = 1516;
				this.parametersAndQualifiers();
				this.state = 1517;
				this.trailingReturnType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1519;
				this.abstractPackDeclarator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerAbstractDeclarator(): PointerAbstractDeclaratorContext {
		let _localctx: PointerAbstractDeclaratorContext = new PointerAbstractDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, CPP14Parser.RULE_pointerAbstractDeclarator);
		let _la: number;
		try {
			this.state = 1531;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1522;
				this.noPointerAbstractDeclarator(0);
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.AndAnd:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1523;
					this.pointerOperator();
					}
					}
					this.state = 1526;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CPP14Parser.Decltype || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (CPP14Parser.Star - 93)) | (1 << (CPP14Parser.And - 93)) | (1 << (CPP14Parser.AndAnd - 93)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier);
				this.state = 1529;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
				case 1:
					{
					this.state = 1528;
					this.noPointerAbstractDeclarator(0);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noPointerAbstractDeclarator(): NoPointerAbstractDeclaratorContext;
	public noPointerAbstractDeclarator(_p: number): NoPointerAbstractDeclaratorContext;
	// @RuleVersion(0)
	public noPointerAbstractDeclarator(_p?: number): NoPointerAbstractDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoPointerAbstractDeclaratorContext = new NoPointerAbstractDeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoPointerAbstractDeclaratorContext = _localctx;
		let _startState: number = 254;
		this.enterRecursionRule(_localctx, 254, CPP14Parser.RULE_noPointerAbstractDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1547;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				{
				this.state = 1534;
				this.parametersAndQualifiers();
				}
				break;

			case 2:
				{
				this.state = 1535;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)) | (1 << (CPP14Parser.Not - 75)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
					{
					this.state = 1536;
					this.constantExpression();
					}
				}

				this.state = 1539;
				this.match(CPP14Parser.RightBracket);
				this.state = 1541;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1540;
					this.attributeSpecifierSeq();
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 1543;
				this.match(CPP14Parser.LeftParen);
				this.state = 1544;
				this.pointerAbstractDeclarator();
				this.state = 1545;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1564;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NoPointerAbstractDeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noPointerAbstractDeclarator);
					this.state = 1549;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1560;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
					case 1:
						{
						this.state = 1550;
						this.parametersAndQualifiers();
						}
						break;

					case 2:
						{
						this.state = 1551;
						this.noPointerAbstractDeclarator(0);
						this.state = 1552;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1554;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)) | (1 << (CPP14Parser.Not - 75)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
							{
							this.state = 1553;
							this.constantExpression();
							}
						}

						this.state = 1556;
						this.match(CPP14Parser.RightBracket);
						this.state = 1558;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 196, this._ctx) ) {
						case 1:
							{
							this.state = 1557;
							this.attributeSpecifierSeq();
							}
							break;
						}
						}
						break;
					}
					}
					}
				}
				this.state = 1566;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 198, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractPackDeclarator(): AbstractPackDeclaratorContext {
		let _localctx: AbstractPackDeclaratorContext = new AbstractPackDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, CPP14Parser.RULE_abstractPackDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Decltype || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (CPP14Parser.Star - 93)) | (1 << (CPP14Parser.And - 93)) | (1 << (CPP14Parser.AndAnd - 93)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				{
				this.state = 1567;
				this.pointerOperator();
				}
				}
				this.state = 1572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1573;
			this.noPointerAbstractPackDeclarator(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noPointerAbstractPackDeclarator(): NoPointerAbstractPackDeclaratorContext;
	public noPointerAbstractPackDeclarator(_p: number): NoPointerAbstractPackDeclaratorContext;
	// @RuleVersion(0)
	public noPointerAbstractPackDeclarator(_p?: number): NoPointerAbstractPackDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoPointerAbstractPackDeclaratorContext = new NoPointerAbstractPackDeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoPointerAbstractPackDeclaratorContext = _localctx;
		let _startState: number = 258;
		this.enterRecursionRule(_localctx, 258, CPP14Parser.RULE_noPointerAbstractPackDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1576;
			this.match(CPP14Parser.Ellipsis);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1592;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NoPointerAbstractPackDeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noPointerAbstractPackDeclarator);
					this.state = 1578;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1588;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CPP14Parser.LeftParen:
						{
						this.state = 1579;
						this.parametersAndQualifiers();
						}
						break;
					case CPP14Parser.LeftBracket:
						{
						this.state = 1580;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1582;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)) | (1 << (CPP14Parser.Not - 75)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
							{
							this.state = 1581;
							this.constantExpression();
							}
						}

						this.state = 1584;
						this.match(CPP14Parser.RightBracket);
						this.state = 1586;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
						case 1:
							{
							this.state = 1585;
							this.attributeSpecifierSeq();
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1594;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclarationClause(): ParameterDeclarationClauseContext {
		let _localctx: ParameterDeclarationClauseContext = new ParameterDeclarationClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, CPP14Parser.RULE_parameterDeclarationClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1595;
			this.parameterDeclarationList();
			this.state = 1600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Comma || _la === CPP14Parser.Ellipsis) {
				{
				this.state = 1597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Comma) {
					{
					this.state = 1596;
					this.match(CPP14Parser.Comma);
					}
				}

				this.state = 1599;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclarationList(): ParameterDeclarationListContext {
		let _localctx: ParameterDeclarationListContext = new ParameterDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, CPP14Parser.RULE_parameterDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1602;
			this.parameterDeclaration();
			this.state = 1607;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1603;
					this.match(CPP14Parser.Comma);
					this.state = 1604;
					this.parameterDeclaration();
					}
					}
				}
				this.state = 1609;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, CPP14Parser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1610;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1613;
			this.declSpecifierSeq();
			{
			this.state = 1618;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				{
				this.state = 1614;
				this.declarator();
				}
				break;

			case 2:
				{
				this.state = 1616;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
				case 1:
					{
					this.state = 1615;
					this.abstractDeclarator();
					}
					break;
				}
				}
				break;
			}
			this.state = 1622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Assign) {
				{
				this.state = 1620;
				this.match(CPP14Parser.Assign);
				this.state = 1621;
				this.initializerClause();
				}
			}

			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, CPP14Parser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1624;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1628;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				{
				this.state = 1627;
				this.declSpecifierSeq();
				}
				break;
			}
			this.state = 1630;
			this.declarator();
			this.state = 1632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Final || _la === CPP14Parser.Override) {
				{
				this.state = 1631;
				this.virtualSpecifierSeq();
				}
			}

			this.state = 1634;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, CPP14Parser.RULE_functionBody);
		let _la: number;
		try {
			this.state = 1644;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBrace:
			case CPP14Parser.Colon:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1636;
					this.constructorInitializer();
					}
				}

				this.state = 1639;
				this.compoundStatement();
				}
				break;
			case CPP14Parser.Try:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1640;
				this.functionTryBlock();
				}
				break;
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1641;
				this.match(CPP14Parser.Assign);
				this.state = 1642;
				_la = this._input.LA(1);
				if (!(_la === CPP14Parser.Default || _la === CPP14Parser.Delete)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1643;
				this.match(CPP14Parser.Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, CPP14Parser.RULE_initializer);
		try {
			this.state = 1651;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBrace:
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1646;
				this.braceOrEqualInitializer();
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1647;
				this.match(CPP14Parser.LeftParen);
				this.state = 1648;
				this.expressionList();
				this.state = 1649;
				this.match(CPP14Parser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public braceOrEqualInitializer(): BraceOrEqualInitializerContext {
		let _localctx: BraceOrEqualInitializerContext = new BraceOrEqualInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, CPP14Parser.RULE_braceOrEqualInitializer);
		try {
			this.state = 1656;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1653;
				this.match(CPP14Parser.Assign);
				this.state = 1654;
				this.initializerClause();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1655;
				this.bracedInitList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerClause(): InitializerClauseContext {
		let _localctx: InitializerClauseContext = new InitializerClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, CPP14Parser.RULE_initializerClause);
		try {
			this.state = 1660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.IntegerLiteral:
			case CPP14Parser.CharacterLiteral:
			case CPP14Parser.FloatingLiteral:
			case CPP14Parser.StringLiteral:
			case CPP14Parser.BooleanLiteral:
			case CPP14Parser.PointerLiteral:
			case CPP14Parser.UserDefinedLiteral:
			case CPP14Parser.Alignof:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Const_cast:
			case CPP14Parser.Decltype:
			case CPP14Parser.Delete:
			case CPP14Parser.Double:
			case CPP14Parser.Dynamic_cast:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.New:
			case CPP14Parser.Noexcept:
			case CPP14Parser.Operator:
			case CPP14Parser.Reinterpret_cast:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Sizeof:
			case CPP14Parser.Static_cast:
			case CPP14Parser.This:
			case CPP14Parser.Throw:
			case CPP14Parser.Typeid_:
			case CPP14Parser.Typename_:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Plus:
			case CPP14Parser.Minus:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Or:
			case CPP14Parser.Tilde:
			case CPP14Parser.Not:
			case CPP14Parser.PlusPlus:
			case CPP14Parser.MinusMinus:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1658;
				this.assignmentExpression();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1659;
				this.bracedInitList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerList(): InitializerListContext {
		let _localctx: InitializerListContext = new InitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, CPP14Parser.RULE_initializerList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1662;
			this.initializerClause();
			this.state = 1664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1663;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1673;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1666;
					this.match(CPP14Parser.Comma);
					this.state = 1667;
					this.initializerClause();
					this.state = 1669;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Ellipsis) {
						{
						this.state = 1668;
						this.match(CPP14Parser.Ellipsis);
						}
					}

					}
					}
				}
				this.state = 1675;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bracedInitList(): BracedInitListContext {
		let _localctx: BracedInitListContext = new BracedInitListContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, CPP14Parser.RULE_bracedInitList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1676;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPP14Parser.Throw - 71)) | (1 << (CPP14Parser.Typeid_ - 71)) | (1 << (CPP14Parser.Typename_ - 71)) | (1 << (CPP14Parser.Unsigned - 71)) | (1 << (CPP14Parser.Void - 71)) | (1 << (CPP14Parser.Wchar - 71)) | (1 << (CPP14Parser.LeftParen - 71)) | (1 << (CPP14Parser.LeftBracket - 71)) | (1 << (CPP14Parser.LeftBrace - 71)) | (1 << (CPP14Parser.Plus - 71)) | (1 << (CPP14Parser.Minus - 71)) | (1 << (CPP14Parser.Star - 71)) | (1 << (CPP14Parser.And - 71)) | (1 << (CPP14Parser.Or - 71)) | (1 << (CPP14Parser.Tilde - 71)) | (1 << (CPP14Parser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
				{
				this.state = 1677;
				this.initializerList();
				this.state = 1679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Comma) {
					{
					this.state = 1678;
					this.match(CPP14Parser.Comma);
					}
				}

				}
			}

			this.state = 1683;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public className(): ClassNameContext {
		let _localctx: ClassNameContext = new ClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, CPP14Parser.RULE_className);
		try {
			this.state = 1687;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1685;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1686;
				this.simpleTemplateId();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classSpecifier(): ClassSpecifierContext {
		let _localctx: ClassSpecifierContext = new ClassSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, CPP14Parser.RULE_classSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1689;
			this.classHead();
			this.state = 1690;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1692;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CPP14Parser.Alignas - 10)) | (1 << (CPP14Parser.Auto - 10)) | (1 << (CPP14Parser.Bool - 10)) | (1 << (CPP14Parser.Char - 10)) | (1 << (CPP14Parser.Char16 - 10)) | (1 << (CPP14Parser.Char32 - 10)) | (1 << (CPP14Parser.Class - 10)) | (1 << (CPP14Parser.Const - 10)) | (1 << (CPP14Parser.Constexpr - 10)) | (1 << (CPP14Parser.Decltype - 10)) | (1 << (CPP14Parser.Double - 10)) | (1 << (CPP14Parser.Enum - 10)) | (1 << (CPP14Parser.Explicit - 10)) | (1 << (CPP14Parser.Extern - 10)) | (1 << (CPP14Parser.Float - 10)) | (1 << (CPP14Parser.Friend - 10)))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CPP14Parser.Inline - 44)) | (1 << (CPP14Parser.Int - 44)) | (1 << (CPP14Parser.Long - 44)) | (1 << (CPP14Parser.Mutable - 44)) | (1 << (CPP14Parser.Operator - 44)) | (1 << (CPP14Parser.Private - 44)) | (1 << (CPP14Parser.Protected - 44)) | (1 << (CPP14Parser.Public - 44)) | (1 << (CPP14Parser.Register - 44)) | (1 << (CPP14Parser.Short - 44)) | (1 << (CPP14Parser.Signed - 44)) | (1 << (CPP14Parser.Static - 44)) | (1 << (CPP14Parser.Static_assert - 44)) | (1 << (CPP14Parser.Struct - 44)) | (1 << (CPP14Parser.Template - 44)) | (1 << (CPP14Parser.Thread_local - 44)) | (1 << (CPP14Parser.Typedef - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CPP14Parser.Typename_ - 76)) | (1 << (CPP14Parser.Union - 76)) | (1 << (CPP14Parser.Unsigned - 76)) | (1 << (CPP14Parser.Using - 76)) | (1 << (CPP14Parser.Virtual - 76)) | (1 << (CPP14Parser.Void - 76)) | (1 << (CPP14Parser.Volatile - 76)) | (1 << (CPP14Parser.Wchar - 76)) | (1 << (CPP14Parser.LeftParen - 76)) | (1 << (CPP14Parser.LeftBracket - 76)) | (1 << (CPP14Parser.Star - 76)) | (1 << (CPP14Parser.And - 76)) | (1 << (CPP14Parser.Tilde - 76)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPP14Parser.AndAnd - 118)) | (1 << (CPP14Parser.Colon - 118)) | (1 << (CPP14Parser.Doublecolon - 118)) | (1 << (CPP14Parser.Semi - 118)) | (1 << (CPP14Parser.Ellipsis - 118)) | (1 << (CPP14Parser.Identifier - 118)))) !== 0)) {
				{
				this.state = 1691;
				this.memberSpecification();
				}
			}

			this.state = 1694;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classHead(): ClassHeadContext {
		let _localctx: ClassHeadContext = new ClassHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, CPP14Parser.RULE_classHead);
		let _la: number;
		try {
			this.state = 1719;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Class:
			case CPP14Parser.Struct:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1696;
				this.classKey();
				this.state = 1698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1697;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 1704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
					{
					this.state = 1700;
					this.classHeadName();
					this.state = 1702;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Final) {
						{
						this.state = 1701;
						this.classVirtSpecifier();
						}
					}

					}
				}

				this.state = 1707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1706;
					this.baseClause();
					}
				}

				}
				break;
			case CPP14Parser.Union:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1709;
				this.match(CPP14Parser.Union);
				this.state = 1711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1710;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 1717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
					{
					this.state = 1713;
					this.classHeadName();
					this.state = 1715;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Final) {
						{
						this.state = 1714;
						this.classVirtSpecifier();
						}
					}

					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classHeadName(): ClassHeadNameContext {
		let _localctx: ClassHeadNameContext = new ClassHeadNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, CPP14Parser.RULE_classHeadName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1722;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				{
				this.state = 1721;
				this.nestedNameSpecifier(0);
				}
				break;
			}
			this.state = 1724;
			this.className();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classVirtSpecifier(): ClassVirtSpecifierContext {
		let _localctx: ClassVirtSpecifierContext = new ClassVirtSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, CPP14Parser.RULE_classVirtSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1726;
			this.match(CPP14Parser.Final);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classKey(): ClassKeyContext {
		let _localctx: ClassKeyContext = new ClassKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, CPP14Parser.RULE_classKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1728;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Class || _la === CPP14Parser.Struct)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberSpecification(): MemberSpecificationContext {
		let _localctx: MemberSpecificationContext = new MemberSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, CPP14Parser.RULE_memberSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1734;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.Alignas:
				case CPP14Parser.Auto:
				case CPP14Parser.Bool:
				case CPP14Parser.Char:
				case CPP14Parser.Char16:
				case CPP14Parser.Char32:
				case CPP14Parser.Class:
				case CPP14Parser.Const:
				case CPP14Parser.Constexpr:
				case CPP14Parser.Decltype:
				case CPP14Parser.Double:
				case CPP14Parser.Enum:
				case CPP14Parser.Explicit:
				case CPP14Parser.Extern:
				case CPP14Parser.Float:
				case CPP14Parser.Friend:
				case CPP14Parser.Inline:
				case CPP14Parser.Int:
				case CPP14Parser.Long:
				case CPP14Parser.Mutable:
				case CPP14Parser.Operator:
				case CPP14Parser.Register:
				case CPP14Parser.Short:
				case CPP14Parser.Signed:
				case CPP14Parser.Static:
				case CPP14Parser.Static_assert:
				case CPP14Parser.Struct:
				case CPP14Parser.Template:
				case CPP14Parser.Thread_local:
				case CPP14Parser.Typedef:
				case CPP14Parser.Typename_:
				case CPP14Parser.Union:
				case CPP14Parser.Unsigned:
				case CPP14Parser.Using:
				case CPP14Parser.Virtual:
				case CPP14Parser.Void:
				case CPP14Parser.Volatile:
				case CPP14Parser.Wchar:
				case CPP14Parser.LeftParen:
				case CPP14Parser.LeftBracket:
				case CPP14Parser.Star:
				case CPP14Parser.And:
				case CPP14Parser.Tilde:
				case CPP14Parser.AndAnd:
				case CPP14Parser.Colon:
				case CPP14Parser.Doublecolon:
				case CPP14Parser.Semi:
				case CPP14Parser.Ellipsis:
				case CPP14Parser.Identifier:
					{
					this.state = 1730;
					this.memberdeclaration();
					}
					break;
				case CPP14Parser.Private:
				case CPP14Parser.Protected:
				case CPP14Parser.Public:
					{
					this.state = 1731;
					this.accessSpecifier();
					this.state = 1732;
					this.match(CPP14Parser.Colon);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CPP14Parser.Alignas - 10)) | (1 << (CPP14Parser.Auto - 10)) | (1 << (CPP14Parser.Bool - 10)) | (1 << (CPP14Parser.Char - 10)) | (1 << (CPP14Parser.Char16 - 10)) | (1 << (CPP14Parser.Char32 - 10)) | (1 << (CPP14Parser.Class - 10)) | (1 << (CPP14Parser.Const - 10)) | (1 << (CPP14Parser.Constexpr - 10)) | (1 << (CPP14Parser.Decltype - 10)) | (1 << (CPP14Parser.Double - 10)) | (1 << (CPP14Parser.Enum - 10)) | (1 << (CPP14Parser.Explicit - 10)) | (1 << (CPP14Parser.Extern - 10)) | (1 << (CPP14Parser.Float - 10)) | (1 << (CPP14Parser.Friend - 10)))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (CPP14Parser.Inline - 44)) | (1 << (CPP14Parser.Int - 44)) | (1 << (CPP14Parser.Long - 44)) | (1 << (CPP14Parser.Mutable - 44)) | (1 << (CPP14Parser.Operator - 44)) | (1 << (CPP14Parser.Private - 44)) | (1 << (CPP14Parser.Protected - 44)) | (1 << (CPP14Parser.Public - 44)) | (1 << (CPP14Parser.Register - 44)) | (1 << (CPP14Parser.Short - 44)) | (1 << (CPP14Parser.Signed - 44)) | (1 << (CPP14Parser.Static - 44)) | (1 << (CPP14Parser.Static_assert - 44)) | (1 << (CPP14Parser.Struct - 44)) | (1 << (CPP14Parser.Template - 44)) | (1 << (CPP14Parser.Thread_local - 44)) | (1 << (CPP14Parser.Typedef - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (CPP14Parser.Typename_ - 76)) | (1 << (CPP14Parser.Union - 76)) | (1 << (CPP14Parser.Unsigned - 76)) | (1 << (CPP14Parser.Using - 76)) | (1 << (CPP14Parser.Virtual - 76)) | (1 << (CPP14Parser.Void - 76)) | (1 << (CPP14Parser.Volatile - 76)) | (1 << (CPP14Parser.Wchar - 76)) | (1 << (CPP14Parser.LeftParen - 76)) | (1 << (CPP14Parser.LeftBracket - 76)) | (1 << (CPP14Parser.Star - 76)) | (1 << (CPP14Parser.And - 76)) | (1 << (CPP14Parser.Tilde - 76)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPP14Parser.AndAnd - 118)) | (1 << (CPP14Parser.Colon - 118)) | (1 << (CPP14Parser.Doublecolon - 118)) | (1 << (CPP14Parser.Semi - 118)) | (1 << (CPP14Parser.Ellipsis - 118)) | (1 << (CPP14Parser.Identifier - 118)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberdeclaration(): MemberdeclarationContext {
		let _localctx: MemberdeclarationContext = new MemberdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, CPP14Parser.RULE_memberdeclaration);
		let _la: number;
		try {
			this.state = 1754;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1739;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
				case 1:
					{
					this.state = 1738;
					this.attributeSpecifierSeq();
					}
					break;
				}
				this.state = 1742;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
				case 1:
					{
					this.state = 1741;
					this.declSpecifierSeq();
					}
					break;
				}
				this.state = 1745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.Decltype || _la === CPP14Parser.Operator || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (CPP14Parser.LeftParen - 85)) | (1 << (CPP14Parser.LeftBracket - 85)) | (1 << (CPP14Parser.Star - 85)) | (1 << (CPP14Parser.And - 85)) | (1 << (CPP14Parser.Tilde - 85)))) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & ((1 << (CPP14Parser.AndAnd - 118)) | (1 << (CPP14Parser.Colon - 118)) | (1 << (CPP14Parser.Doublecolon - 118)) | (1 << (CPP14Parser.Ellipsis - 118)) | (1 << (CPP14Parser.Identifier - 118)))) !== 0)) {
					{
					this.state = 1744;
					this.memberDeclaratorList();
					}
				}

				this.state = 1747;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1748;
				this.functionDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1749;
				this.usingDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1750;
				this.staticAssertDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1751;
				this.templateDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1752;
				this.aliasDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1753;
				this.emptyDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaratorList(): MemberDeclaratorListContext {
		let _localctx: MemberDeclaratorListContext = new MemberDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, CPP14Parser.RULE_memberDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1756;
			this.memberDeclarator();
			this.state = 1761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1757;
				this.match(CPP14Parser.Comma);
				this.state = 1758;
				this.memberDeclarator();
				}
				}
				this.state = 1763;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclarator(): MemberDeclaratorContext {
		let _localctx: MemberDeclaratorContext = new MemberDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, CPP14Parser.RULE_memberDeclarator);
		let _la: number;
		try {
			this.state = 1784;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 248, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1764;
				this.declarator();
				this.state = 1774;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 1766;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Final || _la === CPP14Parser.Override) {
						{
						this.state = 1765;
						this.virtualSpecifierSeq();
						}
					}

					this.state = 1769;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Assign) {
						{
						this.state = 1768;
						this.pureSpecifier();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 1772;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.LeftBrace || _la === CPP14Parser.Assign) {
						{
						this.state = 1771;
						this.braceOrEqualInitializer();
						}
					}

					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1776;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 1780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1779;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 1782;
				this.match(CPP14Parser.Colon);
				this.state = 1783;
				this.constantExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public virtualSpecifierSeq(): VirtualSpecifierSeqContext {
		let _localctx: VirtualSpecifierSeqContext = new VirtualSpecifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, CPP14Parser.RULE_virtualSpecifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1786;
				this.virtualSpecifier();
				}
				}
				this.state = 1789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CPP14Parser.Final || _la === CPP14Parser.Override);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public virtualSpecifier(): VirtualSpecifierContext {
		let _localctx: VirtualSpecifierContext = new VirtualSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, CPP14Parser.RULE_virtualSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1791;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Final || _la === CPP14Parser.Override)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pureSpecifier(): PureSpecifierContext {
		let _localctx: PureSpecifierContext = new PureSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, CPP14Parser.RULE_pureSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1793;
			this.match(CPP14Parser.Assign);
			this.state = 1794;
			_localctx._val = this.match(CPP14Parser.OctalLiteral);
			if((_localctx._val != null ? _localctx._val.text : undefined)!="0") throw new InputMismatchException(this);
					
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseClause(): BaseClauseContext {
		let _localctx: BaseClauseContext = new BaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, CPP14Parser.RULE_baseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1797;
			this.match(CPP14Parser.Colon);
			this.state = 1798;
			this.baseSpecifierList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseSpecifierList(): BaseSpecifierListContext {
		let _localctx: BaseSpecifierListContext = new BaseSpecifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, CPP14Parser.RULE_baseSpecifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1800;
			this.baseSpecifier();
			this.state = 1802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1801;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1804;
				this.match(CPP14Parser.Comma);
				this.state = 1805;
				this.baseSpecifier();
				this.state = 1807;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1806;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				}
				this.state = 1813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseSpecifier(): BaseSpecifierContext {
		let _localctx: BaseSpecifierContext = new BaseSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, CPP14Parser.RULE_baseSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1814;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1829;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Decltype:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				{
				this.state = 1817;
				this.baseTypeSpecifier();
				}
				break;
			case CPP14Parser.Virtual:
				{
				this.state = 1818;
				this.match(CPP14Parser.Virtual);
				this.state = 1820;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CPP14Parser.Private - 54)) | (1 << (CPP14Parser.Protected - 54)) | (1 << (CPP14Parser.Public - 54)))) !== 0)) {
					{
					this.state = 1819;
					this.accessSpecifier();
					}
				}

				this.state = 1822;
				this.baseTypeSpecifier();
				}
				break;
			case CPP14Parser.Private:
			case CPP14Parser.Protected:
			case CPP14Parser.Public:
				{
				this.state = 1823;
				this.accessSpecifier();
				this.state = 1825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Virtual) {
					{
					this.state = 1824;
					this.match(CPP14Parser.Virtual);
					}
				}

				this.state = 1827;
				this.baseTypeSpecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrDeclType(): ClassOrDeclTypeContext {
		let _localctx: ClassOrDeclTypeContext = new ClassOrDeclTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, CPP14Parser.RULE_classOrDeclType);
		try {
			this.state = 1836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1832;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
				case 1:
					{
					this.state = 1831;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1834;
				this.className();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1835;
				this.decltypeSpecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseTypeSpecifier(): BaseTypeSpecifierContext {
		let _localctx: BaseTypeSpecifierContext = new BaseTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, CPP14Parser.RULE_baseTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1838;
			this.classOrDeclType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public accessSpecifier(): AccessSpecifierContext {
		let _localctx: AccessSpecifierContext = new AccessSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, CPP14Parser.RULE_accessSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1840;
			_la = this._input.LA(1);
			if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CPP14Parser.Private - 54)) | (1 << (CPP14Parser.Protected - 54)) | (1 << (CPP14Parser.Public - 54)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversionFunctionId(): ConversionFunctionIdContext {
		let _localctx: ConversionFunctionIdContext = new ConversionFunctionIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, CPP14Parser.RULE_conversionFunctionId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1842;
			this.match(CPP14Parser.Operator);
			this.state = 1843;
			this.conversionTypeId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversionTypeId(): ConversionTypeIdContext {
		let _localctx: ConversionTypeIdContext = new ConversionTypeIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, CPP14Parser.RULE_conversionTypeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1845;
			this.typeSpecifierSeq();
			this.state = 1847;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				{
				this.state = 1846;
				this.conversionDeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversionDeclarator(): ConversionDeclaratorContext {
		let _localctx: ConversionDeclaratorContext = new ConversionDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, CPP14Parser.RULE_conversionDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1849;
			this.pointerOperator();
			this.state = 1851;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				{
				this.state = 1850;
				this.conversionDeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorInitializer(): ConstructorInitializerContext {
		let _localctx: ConstructorInitializerContext = new ConstructorInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, CPP14Parser.RULE_constructorInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1853;
			this.match(CPP14Parser.Colon);
			this.state = 1854;
			this.memInitializerList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memInitializerList(): MemInitializerListContext {
		let _localctx: MemInitializerListContext = new MemInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, CPP14Parser.RULE_memInitializerList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1856;
			this.memInitializer();
			this.state = 1858;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1857;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1867;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1860;
				this.match(CPP14Parser.Comma);
				this.state = 1861;
				this.memInitializer();
				this.state = 1863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1862;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				}
				this.state = 1869;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memInitializer(): MemInitializerContext {
		let _localctx: MemInitializerContext = new MemInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, CPP14Parser.RULE_memInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1870;
			this.meminitializerid();
			this.state = 1877;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				{
				this.state = 1871;
				this.match(CPP14Parser.LeftParen);
				this.state = 1873;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPP14Parser.Throw - 71)) | (1 << (CPP14Parser.Typeid_ - 71)) | (1 << (CPP14Parser.Typename_ - 71)) | (1 << (CPP14Parser.Unsigned - 71)) | (1 << (CPP14Parser.Void - 71)) | (1 << (CPP14Parser.Wchar - 71)) | (1 << (CPP14Parser.LeftParen - 71)) | (1 << (CPP14Parser.LeftBracket - 71)) | (1 << (CPP14Parser.LeftBrace - 71)) | (1 << (CPP14Parser.Plus - 71)) | (1 << (CPP14Parser.Minus - 71)) | (1 << (CPP14Parser.Star - 71)) | (1 << (CPP14Parser.And - 71)) | (1 << (CPP14Parser.Or - 71)) | (1 << (CPP14Parser.Tilde - 71)) | (1 << (CPP14Parser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
					{
					this.state = 1872;
					this.expressionList();
					}
				}

				this.state = 1875;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBrace:
				{
				this.state = 1876;
				this.bracedInitList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public meminitializerid(): MeminitializeridContext {
		let _localctx: MeminitializeridContext = new MeminitializeridContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, CPP14Parser.RULE_meminitializerid);
		try {
			this.state = 1881;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1879;
				this.classOrDeclType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1880;
				this.match(CPP14Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorFunctionId(): OperatorFunctionIdContext {
		let _localctx: OperatorFunctionIdContext = new OperatorFunctionIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, CPP14Parser.RULE_operatorFunctionId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1883;
			this.match(CPP14Parser.Operator);
			this.state = 1884;
			this.theOperator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalOperatorId(): LiteralOperatorIdContext {
		let _localctx: LiteralOperatorIdContext = new LiteralOperatorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, CPP14Parser.RULE_literalOperatorId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1886;
			this.match(CPP14Parser.Operator);
			this.state = 1890;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.StringLiteral:
				{
				this.state = 1887;
				this.match(CPP14Parser.StringLiteral);
				this.state = 1888;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.UserDefinedStringLiteral:
				{
				this.state = 1889;
				this.match(CPP14Parser.UserDefinedStringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateDeclaration(): TemplateDeclarationContext {
		let _localctx: TemplateDeclarationContext = new TemplateDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, CPP14Parser.RULE_templateDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1892;
			this.match(CPP14Parser.Template);
			this.state = 1893;
			this.match(CPP14Parser.Less);
			this.state = 1894;
			this.templateparameterList();
			this.state = 1895;
			this.match(CPP14Parser.Greater);
			this.state = 1896;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateparameterList(): TemplateparameterListContext {
		let _localctx: TemplateparameterListContext = new TemplateparameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, CPP14Parser.RULE_templateparameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1898;
			this.templateParameter();
			this.state = 1903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1899;
				this.match(CPP14Parser.Comma);
				this.state = 1900;
				this.templateParameter();
				}
				}
				this.state = 1905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateParameter(): TemplateParameterContext {
		let _localctx: TemplateParameterContext = new TemplateParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, CPP14Parser.RULE_templateParameter);
		try {
			this.state = 1908;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1906;
				this.typeParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1907;
				this.parameterDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, CPP14Parser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1919;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Class:
			case CPP14Parser.Template:
				{
				this.state = 1915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Template) {
					{
					this.state = 1910;
					this.match(CPP14Parser.Template);
					this.state = 1911;
					this.match(CPP14Parser.Less);
					this.state = 1912;
					this.templateparameterList();
					this.state = 1913;
					this.match(CPP14Parser.Greater);
					}
				}

				this.state = 1917;
				this.match(CPP14Parser.Class);
				}
				break;
			case CPP14Parser.Typename_:
				{
				this.state = 1918;
				this.match(CPP14Parser.Typename_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1932;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1922;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1921;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 1925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1924;
					this.match(CPP14Parser.Identifier);
					}
				}

				}
				}
				break;

			case 2:
				{
				{
				this.state = 1928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1927;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 1930;
				this.match(CPP14Parser.Assign);
				this.state = 1931;
				this.theTypeId();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleTemplateId(): SimpleTemplateIdContext {
		let _localctx: SimpleTemplateIdContext = new SimpleTemplateIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, CPP14Parser.RULE_simpleTemplateId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1934;
			this.templateName();
			this.state = 1935;
			this.match(CPP14Parser.Less);
			this.state = 1937;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPP14Parser.Enum - 33)) | (1 << (CPP14Parser.Float - 33)) | (1 << (CPP14Parser.Int - 33)) | (1 << (CPP14Parser.Long - 33)) | (1 << (CPP14Parser.New - 33)) | (1 << (CPP14Parser.Noexcept - 33)) | (1 << (CPP14Parser.Operator - 33)) | (1 << (CPP14Parser.Reinterpret_cast - 33)) | (1 << (CPP14Parser.Short - 33)) | (1 << (CPP14Parser.Signed - 33)) | (1 << (CPP14Parser.Sizeof - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.Static_cast - 65)) | (1 << (CPP14Parser.Struct - 65)) | (1 << (CPP14Parser.This - 65)) | (1 << (CPP14Parser.Typeid_ - 65)) | (1 << (CPP14Parser.Typename_ - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)) | (1 << (CPP14Parser.Not - 97)) | (1 << (CPP14Parser.PlusPlus - 97)) | (1 << (CPP14Parser.MinusMinus - 97)) | (1 << (CPP14Parser.Doublecolon - 97)))) !== 0) || _la === CPP14Parser.Identifier) {
				{
				this.state = 1936;
				this.templateArgumentList();
				}
			}

			this.state = 1939;
			this.match(CPP14Parser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateId(): TemplateIdContext {
		let _localctx: TemplateIdContext = new TemplateIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, CPP14Parser.RULE_templateId);
		let _la: number;
		try {
			this.state = 1952;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1941;
				this.simpleTemplateId();
				}
				break;
			case CPP14Parser.Operator:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1944;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 277, this._ctx) ) {
				case 1:
					{
					this.state = 1942;
					this.operatorFunctionId();
					}
					break;

				case 2:
					{
					this.state = 1943;
					this.literalOperatorId();
					}
					break;
				}
				this.state = 1946;
				this.match(CPP14Parser.Less);
				this.state = 1948;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPP14Parser.Enum - 33)) | (1 << (CPP14Parser.Float - 33)) | (1 << (CPP14Parser.Int - 33)) | (1 << (CPP14Parser.Long - 33)) | (1 << (CPP14Parser.New - 33)) | (1 << (CPP14Parser.Noexcept - 33)) | (1 << (CPP14Parser.Operator - 33)) | (1 << (CPP14Parser.Reinterpret_cast - 33)) | (1 << (CPP14Parser.Short - 33)) | (1 << (CPP14Parser.Signed - 33)) | (1 << (CPP14Parser.Sizeof - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.Static_cast - 65)) | (1 << (CPP14Parser.Struct - 65)) | (1 << (CPP14Parser.This - 65)) | (1 << (CPP14Parser.Typeid_ - 65)) | (1 << (CPP14Parser.Typename_ - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftParen - 65)) | (1 << (CPP14Parser.LeftBracket - 65)) | (1 << (CPP14Parser.Plus - 65)) | (1 << (CPP14Parser.Minus - 65)) | (1 << (CPP14Parser.Star - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)) | (1 << (CPP14Parser.Not - 97)) | (1 << (CPP14Parser.PlusPlus - 97)) | (1 << (CPP14Parser.MinusMinus - 97)) | (1 << (CPP14Parser.Doublecolon - 97)))) !== 0) || _la === CPP14Parser.Identifier) {
					{
					this.state = 1947;
					this.templateArgumentList();
					}
				}

				this.state = 1950;
				this.match(CPP14Parser.Greater);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateName(): TemplateNameContext {
		let _localctx: TemplateNameContext = new TemplateNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, CPP14Parser.RULE_templateName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1954;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateArgumentList(): TemplateArgumentListContext {
		let _localctx: TemplateArgumentListContext = new TemplateArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, CPP14Parser.RULE_templateArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1956;
			this.templateArgument();
			this.state = 1958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1957;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1960;
				this.match(CPP14Parser.Comma);
				this.state = 1961;
				this.templateArgument();
				this.state = 1963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1962;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				}
				this.state = 1969;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateArgument(): TemplateArgumentContext {
		let _localctx: TemplateArgumentContext = new TemplateArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, CPP14Parser.RULE_templateArgument);
		try {
			this.state = 1973;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1970;
				this.theTypeId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1971;
				this.constantExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1972;
				this.idExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNameSpecifier(): TypeNameSpecifierContext {
		let _localctx: TypeNameSpecifierContext = new TypeNameSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, CPP14Parser.RULE_typeNameSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1975;
			this.match(CPP14Parser.Typename_);
			this.state = 1976;
			this.nestedNameSpecifier(0);
			this.state = 1982;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
			case 1:
				{
				this.state = 1977;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				{
				this.state = 1979;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Template) {
					{
					this.state = 1978;
					this.match(CPP14Parser.Template);
					}
				}

				this.state = 1981;
				this.simpleTemplateId();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitInstantiation(): ExplicitInstantiationContext {
		let _localctx: ExplicitInstantiationContext = new ExplicitInstantiationContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, CPP14Parser.RULE_explicitInstantiation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1985;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Extern) {
				{
				this.state = 1984;
				this.match(CPP14Parser.Extern);
				}
			}

			this.state = 1987;
			this.match(CPP14Parser.Template);
			this.state = 1988;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitSpecialization(): ExplicitSpecializationContext {
		let _localctx: ExplicitSpecializationContext = new ExplicitSpecializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, CPP14Parser.RULE_explicitSpecialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1990;
			this.match(CPP14Parser.Template);
			this.state = 1991;
			this.match(CPP14Parser.Less);
			this.state = 1992;
			this.match(CPP14Parser.Greater);
			this.state = 1993;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryBlock(): TryBlockContext {
		let _localctx: TryBlockContext = new TryBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, CPP14Parser.RULE_tryBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1995;
			this.match(CPP14Parser.Try);
			this.state = 1996;
			this.compoundStatement();
			this.state = 1997;
			this.handlerSeq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTryBlock(): FunctionTryBlockContext {
		let _localctx: FunctionTryBlockContext = new FunctionTryBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, CPP14Parser.RULE_functionTryBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1999;
			this.match(CPP14Parser.Try);
			this.state = 2001;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Colon) {
				{
				this.state = 2000;
				this.constructorInitializer();
				}
			}

			this.state = 2003;
			this.compoundStatement();
			this.state = 2004;
			this.handlerSeq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public handlerSeq(): HandlerSeqContext {
		let _localctx: HandlerSeqContext = new HandlerSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, CPP14Parser.RULE_handlerSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2007;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2006;
				this.handler();
				}
				}
				this.state = 2009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CPP14Parser.Catch);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public handler(): HandlerContext {
		let _localctx: HandlerContext = new HandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, CPP14Parser.RULE_handler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2011;
			this.match(CPP14Parser.Catch);
			this.state = 2012;
			this.match(CPP14Parser.LeftParen);
			this.state = 2013;
			this.exceptionDeclaration();
			this.state = 2014;
			this.match(CPP14Parser.RightParen);
			this.state = 2015;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionDeclaration(): ExceptionDeclarationContext {
		let _localctx: ExceptionDeclarationContext = new ExceptionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, CPP14Parser.RULE_exceptionDeclaration);
		let _la: number;
		try {
			this.state = 2026;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Alignas:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Struct:
			case CPP14Parser.Typename_:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2018;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2017;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 2020;
				this.typeSpecifierSeq();
				this.state = 2023;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
				case 1:
					{
					this.state = 2021;
					this.declarator();
					}
					break;

				case 2:
					{
					this.state = 2022;
					this.abstractDeclarator();
					}
					break;
				}
				}
				break;
			case CPP14Parser.Ellipsis:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2025;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwExpression(): ThrowExpressionContext {
		let _localctx: ThrowExpressionContext = new ThrowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, CPP14Parser.RULE_throwExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2028;
			this.match(CPP14Parser.Throw);
			this.state = 2030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CPP14Parser.Float - 39)) | (1 << (CPP14Parser.Int - 39)) | (1 << (CPP14Parser.Long - 39)) | (1 << (CPP14Parser.New - 39)) | (1 << (CPP14Parser.Noexcept - 39)) | (1 << (CPP14Parser.Operator - 39)) | (1 << (CPP14Parser.Reinterpret_cast - 39)) | (1 << (CPP14Parser.Short - 39)) | (1 << (CPP14Parser.Signed - 39)) | (1 << (CPP14Parser.Sizeof - 39)) | (1 << (CPP14Parser.Static_cast - 39)) | (1 << (CPP14Parser.This - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CPP14Parser.Throw - 71)) | (1 << (CPP14Parser.Typeid_ - 71)) | (1 << (CPP14Parser.Typename_ - 71)) | (1 << (CPP14Parser.Unsigned - 71)) | (1 << (CPP14Parser.Void - 71)) | (1 << (CPP14Parser.Wchar - 71)) | (1 << (CPP14Parser.LeftParen - 71)) | (1 << (CPP14Parser.LeftBracket - 71)) | (1 << (CPP14Parser.Plus - 71)) | (1 << (CPP14Parser.Minus - 71)) | (1 << (CPP14Parser.Star - 71)) | (1 << (CPP14Parser.And - 71)) | (1 << (CPP14Parser.Or - 71)) | (1 << (CPP14Parser.Tilde - 71)) | (1 << (CPP14Parser.Not - 71)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (CPP14Parser.PlusPlus - 120)) | (1 << (CPP14Parser.MinusMinus - 120)) | (1 << (CPP14Parser.Doublecolon - 120)) | (1 << (CPP14Parser.Identifier - 120)))) !== 0)) {
				{
				this.state = 2029;
				this.assignmentExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionSpecification(): ExceptionSpecificationContext {
		let _localctx: ExceptionSpecificationContext = new ExceptionSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, CPP14Parser.RULE_exceptionSpecification);
		try {
			this.state = 2034;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Throw:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2032;
				this.dynamicExceptionSpecification();
				}
				break;
			case CPP14Parser.Noexcept:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2033;
				this.noeExceptSpecification();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dynamicExceptionSpecification(): DynamicExceptionSpecificationContext {
		let _localctx: DynamicExceptionSpecificationContext = new DynamicExceptionSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, CPP14Parser.RULE_dynamicExceptionSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2036;
			this.match(CPP14Parser.Throw);
			this.state = 2037;
			this.match(CPP14Parser.LeftParen);
			this.state = 2039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CPP14Parser.Enum - 33)) | (1 << (CPP14Parser.Float - 33)) | (1 << (CPP14Parser.Int - 33)) | (1 << (CPP14Parser.Long - 33)) | (1 << (CPP14Parser.Short - 33)) | (1 << (CPP14Parser.Signed - 33)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				this.state = 2038;
				this.typeIdList();
				}
			}

			this.state = 2041;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIdList(): TypeIdListContext {
		let _localctx: TypeIdListContext = new TypeIdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, CPP14Parser.RULE_typeIdList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2043;
			this.theTypeId();
			this.state = 2045;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 2044;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 2054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 2047;
				this.match(CPP14Parser.Comma);
				this.state = 2048;
				this.theTypeId();
				this.state = 2050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 2049;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				}
				this.state = 2056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noeExceptSpecification(): NoeExceptSpecificationContext {
		let _localctx: NoeExceptSpecificationContext = new NoeExceptSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, CPP14Parser.RULE_noeExceptSpecification);
		try {
			this.state = 2063;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2057;
				this.match(CPP14Parser.Noexcept);
				this.state = 2058;
				this.match(CPP14Parser.LeftParen);
				this.state = 2059;
				this.constantExpression();
				this.state = 2060;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2062;
				this.match(CPP14Parser.Noexcept);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public theOperator(): TheOperatorContext {
		let _localctx: TheOperatorContext = new TheOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, CPP14Parser.RULE_theOperator);
		try {
			this.state = 2118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 301, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2065;
				this.match(CPP14Parser.New);
				this.state = 2068;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
				case 1:
					{
					this.state = 2066;
					this.match(CPP14Parser.LeftBracket);
					this.state = 2067;
					this.match(CPP14Parser.RightBracket);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2070;
				this.match(CPP14Parser.Delete);
				this.state = 2073;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 300, this._ctx) ) {
				case 1:
					{
					this.state = 2071;
					this.match(CPP14Parser.LeftBracket);
					this.state = 2072;
					this.match(CPP14Parser.RightBracket);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2075;
				this.match(CPP14Parser.Plus);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2076;
				this.match(CPP14Parser.Minus);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2077;
				this.match(CPP14Parser.Star);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2078;
				this.match(CPP14Parser.Div);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2079;
				this.match(CPP14Parser.Mod);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2080;
				this.match(CPP14Parser.Caret);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2081;
				this.match(CPP14Parser.And);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2082;
				this.match(CPP14Parser.Or);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2083;
				this.match(CPP14Parser.Tilde);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2084;
				this.match(CPP14Parser.Not);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2085;
				this.match(CPP14Parser.Assign);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2086;
				this.match(CPP14Parser.Greater);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2087;
				this.match(CPP14Parser.Less);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2088;
				this.match(CPP14Parser.GreaterEqual);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2089;
				this.match(CPP14Parser.PlusAssign);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2090;
				this.match(CPP14Parser.MinusAssign);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2091;
				this.match(CPP14Parser.StarAssign);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 2092;
				this.match(CPP14Parser.Assign);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 2093;
				this.match(CPP14Parser.ModAssign);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 2094;
				this.match(CPP14Parser.XorAssign);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 2095;
				this.match(CPP14Parser.AndAssign);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 2096;
				this.match(CPP14Parser.OrAssign);
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 2097;
				this.match(CPP14Parser.Less);
				this.state = 2098;
				this.match(CPP14Parser.Less);
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 2099;
				this.match(CPP14Parser.Greater);
				this.state = 2100;
				this.match(CPP14Parser.Greater);
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 2101;
				this.match(CPP14Parser.RightShiftAssign);
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 2102;
				this.match(CPP14Parser.LeftShiftAssign);
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 2103;
				this.match(CPP14Parser.Equal);
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 2104;
				this.match(CPP14Parser.NotEqual);
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 2105;
				this.match(CPP14Parser.LessEqual);
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 2106;
				this.match(CPP14Parser.GreaterEqual);
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 2107;
				this.match(CPP14Parser.AndAnd);
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 2108;
				this.match(CPP14Parser.OrOr);
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 2109;
				this.match(CPP14Parser.PlusPlus);
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 2110;
				this.match(CPP14Parser.MinusMinus);
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 2111;
				this.match(CPP14Parser.Comma);
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 2112;
				this.match(CPP14Parser.ArrowStar);
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 2113;
				this.match(CPP14Parser.Arrow);
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 2114;
				this.match(CPP14Parser.LeftParen);
				this.state = 2115;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 2116;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2117;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, CPP14Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2120;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.nestedNameSpecifier_sempred(_localctx as NestedNameSpecifierContext, predIndex);

		case 15:
			return this.postfixExpression_sempred(_localctx as PostfixExpressionContext, predIndex);

		case 25:
			return this.noPointerNewDeclarator_sempred(_localctx as NoPointerNewDeclaratorContext, predIndex);

		case 116:
			return this.noPointerDeclarator_sempred(_localctx as NoPointerDeclaratorContext, predIndex);

		case 127:
			return this.noPointerAbstractDeclarator_sempred(_localctx as NoPointerAbstractDeclaratorContext, predIndex);

		case 129:
			return this.noPointerAbstractPackDeclarator_sempred(_localctx as NoPointerAbstractPackDeclaratorContext, predIndex);
		}
		return true;
	}
	private nestedNameSpecifier_sempred(_localctx: NestedNameSpecifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfixExpression_sempred(_localctx: PostfixExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private noPointerNewDeclarator_sempred(_localctx: NoPointerNewDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private noPointerDeclarator_sempred(_localctx: NoPointerDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private noPointerAbstractDeclarator_sempred(_localctx: NoPointerAbstractDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private noPointerAbstractPackDeclarator_sempred(_localctx: NoPointerAbstractPackDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x96\u084D\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x03\x02\x05\x02" +
		"\u0184\n\x02\x03\x02\x03\x02\x03\x03\x06\x03\u0189\n\x03\r\x03\x0E\x03" +
		"\u018A\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\u0194\n\x03\x03\x04\x03\x04\x05\x04\u0198\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u01A1\n\x05\x03\x05\x05\x05\u01A4" +
		"\n\x05\x03\x06\x03\x06\x05\x06\u01A8\n\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\u01B0\n\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\u01B7\n\x07\x03\x07\x05\x07\u01BA\n\x07\x03\x07\x07\x07" +
		"\u01BD\n\x07\f\x07\x0E\x07\u01C0\v\x07\x03\b\x03\b\x05\b\u01C4\n\b\x03" +
		"\b\x03\b\x03\t\x03\t\x05\t\u01CA\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u01D2\n\n\x05\n\u01D4\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x07\f" +
		"\u01DB\n\f\f\f\x0E\f\u01DE\v\f\x03\f\x05\f\u01E1\n\f\x03\r\x03\r\x05\r" +
		"\u01E5\n\r\x03\x0E\x05\x0E\u01E8\n\x0E\x03\x0E\x03\x0E\x05\x0E\u01EC\n" +
		"\x0E\x03\x0F\x05\x0F\u01EF\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x05\x10\u01F6\n\x10\x03\x10\x03\x10\x05\x10\u01FA\n\x10\x03\x10\x05\x10" +
		"\u01FD\n\x10\x03\x10\x05\x10\u0200\n\x10\x03\x10\x05\x10\u0203\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0209\n\x11\x03\x11\x03\x11\x05\x11" +
		"\u020D\n\x11\x03\x11\x03\x11\x05\x11\u0211\n\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u021F\n\x11\x03\x11\x03\x11\x05\x11\u0223\n\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0229\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u0230\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0236" +
		"\n\x11\x03\x11\x03\x11\x05\x11\u023A\n\x11\x03\x11\x03\x11\x07\x11\u023E" +
		"\n\x11\f\x11\x0E\x11\u0241\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14" +
		"\x05\x14\u0248\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u024D\n\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x05\x14\u025A\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\u0261\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x05\x15\u026D\n\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0277\n\x15\x03\x16\x03\x16" +
		"\x03\x17\x05\x17\u027C\n\x17\x03\x17\x03\x17\x05\x17\u0280\n\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0287\n\x17\x03\x17\x05\x17\u028A" +
		"\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0292\n" +
		"\x19\x03\x1A\x03\x1A\x05\x1A\u0296\n\x1A\x03\x1A\x05\x1A\u0299\n\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02A0\n\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02A7\n\x1B\x07\x1B\u02A9\n\x1B\f\x1B" +
		"\x0E\x1B\u02AC\v\x1B\x03\x1C\x03\x1C\x05\x1C\u02B0\n\x1C\x03\x1C\x03\x1C" +
		"\x05\x1C\u02B4\n\x1C\x03\x1D\x05\x1D\u02B7\n\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\u02BC\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02CB\n\x1F" +
		"\x03 \x03 \x03 \x07 \u02D0\n \f \x0E \u02D3\v \x03!\x03!\x03!\x07!\u02D8" +
		"\n!\f!\x0E!\u02DB\v!\x03\"\x03\"\x03\"\x07\"\u02E0\n\"\f\"\x0E\"\u02E3" +
		"\v\"\x03#\x03#\x03#\x03#\x07#\u02E9\n#\f#\x0E#\u02EC\v#\x03$\x03$\x03" +
		"$\x03$\x05$\u02F2\n$\x03%\x03%\x03%\x07%\u02F7\n%\f%\x0E%\u02FA\v%\x03" +
		"&\x03&\x03&\x07&\u02FF\n&\f&\x0E&\u0302\v&\x03\'\x03\'\x03\'\x07\'\u0307" +
		"\n\'\f\'\x0E\'\u030A\v\'\x03(\x03(\x03(\x07(\u030F\n(\f(\x0E(\u0312\v" +
		"(\x03)\x03)\x03)\x07)\u0317\n)\f)\x0E)\u031A\v)\x03*\x03*\x03*\x07*\u031F" +
		"\n*\f*\x0E*\u0322\v*\x03+\x03+\x03+\x07+\u0327\n+\f+\x0E+\u032A\v+\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x05,\u0332\n,\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x05-\u033A\n-\x03.\x03.\x03/\x03/\x03/\x07/\u0341\n/\f/\x0E/\u0344\v" +
		"/\x030\x030\x031\x031\x051\u034A\n1\x031\x031\x031\x031\x031\x031\x05" +
		"1\u0352\n1\x031\x051\u0355\n1\x032\x052\u0358\n2\x032\x032\x032\x032\x05" +
		"2\u035E\n2\x032\x032\x032\x033\x053\u0364\n3\x033\x033\x034\x034\x054" +
		"\u036A\n4\x034\x034\x035\x065\u036F\n5\r5\x0E5\u0370\x036\x036\x036\x03" +
		"6\x036\x036\x036\x056\u037A\n6\x036\x036\x036\x036\x036\x036\x056\u0382" +
		"\n6\x037\x037\x057\u0386\n7\x037\x037\x037\x037\x037\x057\u038D\n7\x05" +
		"7\u038F\n7\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x058\u03A3\n8\x038\x038\x058\u03A7\n8" +
		"\x038\x038\x038\x038\x058\u03AD\n8\x038\x038\x038\x058\u03B2\n8\x039\x03" +
		"9\x059\u03B6\n9\x03:\x05:\u03B9\n:\x03:\x03:\x03:\x03;\x03;\x05;\u03C0" +
		"\n;\x03<\x03<\x03<\x03<\x03<\x05<\u03C7\n<\x03<\x03<\x05<\u03CB\n<\x03" +
		"<\x03<\x03=\x03=\x03>\x06>\u03D2\n>\r>\x0E>\u03D3\x03?\x03?\x03?\x03?" +
		"\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u03E1\n?\x03@\x03@\x03@\x03@" +
		"\x03@\x03@\x03@\x03@\x03@\x05@\u03EC\n@\x03A\x03A\x03A\x03A\x03A\x06A" +
		"\u03F3\nA\rA\x0EA\u03F4\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u03FD\nA\x03" +
		"B\x03B\x03B\x07B\u0402\nB\fB\x0EB\u0405\vB\x03B\x03B\x05B\u0409\nB\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x05C\u0413\nC\x03D\x03D\x03D\x05" +
		"D\u0418\nD\x03D\x03D\x03D\x03D\x03E\x05E\u041F\nE\x03E\x05E\u0422\nE\x03" +
		"E\x03E\x03E\x05E\u0427\nE\x03E\x03E\x03E\x05E\u042C\nE\x03F\x03F\x03F" +
		"\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03H\x03H\x03H\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x05I\u0441\nI\x03J\x06J\u0444\nJ\rJ\x0EJ\u0445\x03J\x05J\u0449" +
		"\nJ\x03K\x03K\x03L\x03L\x03M\x03M\x03N\x03N\x03N\x05N\u0454\nN\x03O\x03" +
		"O\x03O\x03O\x05O\u045A\nO\x03P\x06P\u045D\nP\rP\x0EP\u045E\x03P\x05P\u0462" +
		"\nP\x03Q\x06Q\u0465\nQ\rQ\x0EQ\u0466\x03Q\x05Q\u046A\nQ\x03R\x05R\u046D" +
		"\nR\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0483\nR\x03S\x03S\x03S\x03S\x05" +
		"S\u0489\nS\x03T\x03T\x03T\x03T\x05T\u048F\nT\x03T\x03T\x03U\x03U\x05U" +
		"\u0495\nU\x03U\x05U\u0498\nU\x03U\x03U\x03U\x03U\x05U\u049E\nU\x03U\x03" +
		"U\x05U\u04A2\nU\x03U\x03U\x05U\u04A6\nU\x03U\x05U\u04A9\nU\x03V\x03V\x03" +
		"W\x03W\x03W\x03W\x05W\u04B1\nW\x05W\u04B3\nW\x03W\x03W\x03X\x03X\x05X" +
		"\u04B9\nX\x03X\x05X\u04BC\nX\x03X\x05X\u04BF\nX\x03X\x05X\u04C2\nX\x03" +
		"Y\x03Y\x05Y\u04C6\nY\x03Y\x03Y\x05Y\u04CA\nY\x03Y\x03Y\x03Z\x03Z\x05Z" +
		"\u04D0\nZ\x03[\x03[\x03[\x03\\\x03\\\x03\\\x07\\\u04D8\n\\\f\\\x0E\\\u04DB" +
		"\v\\\x03]\x03]\x03]\x05]\u04E0\n]\x03^\x03^\x03_\x03_\x05_\u04E6\n_\x03" +
		"`\x03`\x03a\x05a\u04EB\na\x03a\x03a\x03a\x05a\u04F0\na\x03a\x03a\x05a" +
		"\u04F4\na\x03a\x03a\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03c\x03d\x05d" +
		"\u0501\nd\x03d\x03d\x03e\x03e\x05e\u0507\ne\x03e\x03e\x05e\u050B\ne\x03" +
		"e\x03e\x03e\x03f\x05f\u0511\nf\x03f\x03f\x03f\x05f\u0516\nf\x03f\x03f" +
		"\x03f\x03g\x03g\x03g\x03g\x03g\x03g\x03h\x03h\x03h\x03h\x05h\u0525\nh" +
		"\x03h\x03h\x05h\u0529\nh\x03i\x06i\u052C\ni\ri\x0Ei\u052D\x03j\x03j\x03" +
		"j\x05j\u0533\nj\x03j\x03j\x03j\x05j\u0538\nj\x03k\x03k\x03k\x03k\x05k" +
		"\u053E\nk\x03k\x05k\u0541\nk\x03k\x03k\x03l\x03l\x03l\x07l\u0548\nl\f" +
		"l\x0El\u054B\vl\x03l\x05l\u054E\nl\x03m\x03m\x03m\x05m\u0553\nm\x03m\x03" +
		"m\x05m\u0557\nm\x03n\x03n\x03o\x03o\x05o\u055D\no\x03o\x03o\x03p\x06p" +
		"\u0562\np\rp\x0Ep\u0563\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03" +
		"q\x03q\x03q\x03q\x06q\u0573\nq\rq\x0Eq\u0574\x05q\u0577\nq\x03r\x03r\x03" +
		"r\x07r\u057C\nr\fr\x0Er\u057F\vr\x03s\x03s\x05s\u0583\ns\x03t\x03t\x03" +
		"t\x03t\x03t\x05t\u058A\nt\x03u\x03u\x05u\u058E\nu\x07u\u0590\nu\fu\x0E" +
		"u\u0593\vu\x03u\x03u\x03v\x03v\x03v\x05v\u059A\nv\x03v\x03v\x03v\x03v" +
		"\x05v\u05A0\nv\x03v\x03v\x03v\x03v\x05v\u05A6\nv\x03v\x03v\x05v\u05AA" +
		"\nv\x05v\u05AC\nv\x07v\u05AE\nv\fv\x0Ev\u05B1\vv\x03w\x03w\x05w\u05B5" +
		"\nw\x03w\x03w\x05w\u05B9\nw\x03w\x05w\u05BC\nw\x03w\x05w\u05BF\nw\x03" +
		"w\x05w\u05C2\nw\x03x\x03x\x03x\x05x\u05C7\nx\x03y\x03y\x05y\u05CB\ny\x03" +
		"y\x05y\u05CE\ny\x03y\x03y\x05y\u05D2\ny\x03y\x05y\u05D5\ny\x05y\u05D7" +
		"\ny\x03z\x06z\u05DA\nz\rz\x0Ez\u05DB\x03{\x03{\x03|\x03|\x03}\x05}\u05E3" +
		"\n}\x03}\x03}\x03~\x03~\x05~\u05E9\n~\x03\x7F\x03\x7F\x05\x7F\u05ED\n" +
		"\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u05F3\n\x7F\x03\x80\x03\x80" +
		"\x06\x80\u05F7\n\x80\r\x80\x0E\x80\u05F8\x03\x80\x05\x80\u05FC\n\x80\x05" +
		"\x80\u05FE\n\x80\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u0604\n\x81\x03" +
		"\x81\x03\x81\x05\x81\u0608\n\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81" +
		"\u060E\n\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u0615\n\x81" +
		"\x03\x81\x03\x81\x05\x81\u0619\n\x81\x05\x81\u061B\n\x81\x07\x81\u061D" +
		"\n\x81\f\x81\x0E\x81\u0620\v\x81\x03\x82\x07\x82\u0623\n\x82\f\x82\x0E" +
		"\x82\u0626\v\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83" +
		"\x03\x83\x03\x83\x05\x83\u0631\n\x83\x03\x83\x03\x83\x05\x83\u0635\n\x83" +
		"\x05\x83\u0637\n\x83\x07\x83\u0639\n\x83\f\x83\x0E\x83\u063C\v\x83\x03" +
		"\x84\x03\x84\x05\x84\u0640\n\x84\x03\x84\x05\x84\u0643\n\x84\x03\x85\x03" +
		"\x85\x03\x85\x07\x85\u0648\n\x85\f\x85\x0E\x85\u064B\v\x85\x03\x86\x05" +
		"\x86\u064E\n\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0653\n\x86\x05\x86\u0655" +
		"\n\x86\x03\x86\x03\x86\x05\x86\u0659\n\x86\x03\x87\x05\x87\u065C\n\x87" +
		"\x03\x87\x05\x87\u065F\n\x87\x03\x87\x03\x87\x05\x87\u0663\n\x87\x03\x87" +
		"\x03\x87\x03\x88\x05\x88\u0668\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x05\x88\u066F\n\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89" +
		"\u0676\n\x89\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u067B\n\x8A\x03\x8B\x03\x8B" +
		"\x05\x8B\u067F\n\x8B\x03\x8C\x03\x8C\x05\x8C\u0683\n\x8C\x03\x8C\x03\x8C" +
		"\x03\x8C\x05\x8C\u0688\n\x8C\x07\x8C\u068A\n\x8C\f\x8C\x0E\x8C\u068D\v" +
		"\x8C\x03\x8D\x03\x8D\x03\x8D\x05\x8D\u0692\n\x8D\x05\x8D\u0694\n\x8D\x03" +
		"\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E\u069A\n\x8E\x03\x8F\x03\x8F\x03\x8F" +
		"\x05\x8F\u069F\n\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90\x05\x90\u06A5\n\x90" +
		"\x03\x90\x03\x90\x05\x90\u06A9\n\x90\x05\x90\u06AB\n\x90\x03\x90\x05\x90" +
		"\u06AE\n\x90\x03\x90\x03\x90\x05\x90\u06B2\n\x90\x03\x90\x03\x90\x05\x90" +
		"\u06B6\n\x90\x05\x90\u06B8\n\x90\x05\x90\u06BA\n\x90\x03\x91\x05\x91\u06BD" +
		"\n\x91\x03\x91\x03\x91\x03\x92\x03\x92\x03\x93\x03\x93\x03\x94\x03\x94" +
		"\x03\x94\x03\x94\x06\x94\u06C9\n\x94\r\x94\x0E\x94\u06CA\x03\x95\x05\x95" +
		"\u06CE\n\x95\x03\x95\x05\x95\u06D1\n\x95\x03\x95\x05\x95\u06D4\n\x95\x03" +
		"\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x05\x95\u06DD\n\x95" +
		"\x03\x96\x03\x96\x03\x96\x07\x96\u06E2\n\x96\f\x96\x0E\x96\u06E5\v\x96" +
		"\x03\x97\x03\x97\x05\x97\u06E9\n\x97\x03\x97\x05\x97\u06EC\n\x97\x03\x97" +
		"\x05\x97\u06EF\n\x97\x05\x97\u06F1\n\x97\x03\x97\x05\x97\u06F4\n\x97\x03" +
		"\x97\x05\x97\u06F7\n\x97\x03\x97\x03\x97\x05\x97\u06FB\n\x97\x03\x98\x06" +
		"\x98\u06FE\n\x98\r\x98\x0E\x98\u06FF\x03\x99\x03\x99\x03\x9A\x03\x9A\x03" +
		"\x9A\x03\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x05\x9C\u070D\n\x9C" +
		"\x03\x9C\x03\x9C\x03\x9C\x05\x9C\u0712\n\x9C\x07\x9C\u0714\n\x9C\f\x9C" +
		"\x0E\x9C\u0717\v\x9C\x03\x9D\x05\x9D\u071A\n\x9D\x03\x9D\x03\x9D\x03\x9D" +
		"\x05\x9D\u071F\n\x9D\x03\x9D\x03\x9D\x03\x9D\x05\x9D\u0724\n\x9D\x03\x9D" +
		"\x03\x9D\x05\x9D\u0728\n\x9D\x03\x9E\x05\x9E\u072B\n\x9E\x03\x9E\x03\x9E" +
		"\x05\x9E\u072F\n\x9E\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03" +
		"\xA1\x03\xA2\x03\xA2\x05\xA2\u073A\n\xA2\x03\xA3\x03\xA3\x05\xA3\u073E" +
		"\n\xA3\x03\xA4\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x05\xA5\u0745\n\xA5\x03" +
		"\xA5\x03\xA5\x03\xA5\x05\xA5\u074A\n\xA5\x07\xA5\u074C\n\xA5\f\xA5\x0E" +
		"\xA5\u074F\v\xA5\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u0754\n\xA6\x03\xA6\x03" +
		"\xA6\x05\xA6\u0758\n\xA6\x03\xA7\x03\xA7\x05\xA7\u075C\n\xA7\x03\xA8\x03" +
		"\xA8\x03\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u0765\n\xA9\x03\xAA" +
		"\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAB\x07\xAB" +
		"\u0770\n\xAB\f\xAB\x0E\xAB\u0773\v\xAB\x03\xAC\x03\xAC\x05\xAC\u0777\n" +
		"\xAC\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u077E\n\xAD\x03\xAD" +
		"\x03\xAD\x05\xAD\u0782\n\xAD\x03\xAD\x05\xAD\u0785\n\xAD\x03\xAD\x05\xAD" +
		"\u0788\n\xAD\x03\xAD\x05\xAD\u078B\n\xAD\x03\xAD\x03\xAD\x05\xAD\u078F" +
		"\n\xAD\x03\xAE\x03\xAE\x03\xAE\x05\xAE\u0794\n\xAE\x03\xAE\x03\xAE\x03" +
		"\xAF\x03\xAF\x03\xAF\x05\xAF\u079B\n\xAF\x03\xAF\x03\xAF\x05\xAF\u079F" +
		"\n\xAF\x03\xAF\x03\xAF\x05\xAF\u07A3\n\xAF\x03\xB0\x03\xB0\x03\xB1\x03" +
		"\xB1\x05\xB1\u07A9\n\xB1\x03\xB1\x03\xB1\x03\xB1\x05\xB1\u07AE\n\xB1\x07" +
		"\xB1\u07B0\n\xB1\f\xB1\x0E\xB1\u07B3\v\xB1\x03\xB2\x03\xB2\x03\xB2\x05" +
		"\xB2\u07B8\n\xB2\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u07BE\n\xB3\x03" +
		"\xB3\x05\xB3\u07C1\n\xB3\x03\xB4\x05\xB4\u07C4\n\xB4\x03\xB4\x03\xB4\x03" +
		"\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB6\x03\xB6\x03\xB6\x03" +
		"\xB6\x03\xB7\x03\xB7\x05\xB7\u07D4\n\xB7\x03\xB7\x03\xB7\x03\xB7\x03\xB8" +
		"\x06\xB8\u07DA\n\xB8\r\xB8\x0E\xB8\u07DB\x03\xB9\x03\xB9\x03\xB9\x03\xB9" +
		"\x03\xB9\x03\xB9\x03\xBA\x05\xBA\u07E5\n\xBA\x03\xBA\x03\xBA\x03\xBA\x05" +
		"\xBA\u07EA\n\xBA\x03\xBA\x05\xBA\u07ED\n\xBA\x03\xBB\x03\xBB\x05\xBB\u07F1" +
		"\n\xBB\x03\xBC\x03\xBC\x05\xBC\u07F5\n\xBC\x03\xBD\x03\xBD\x03\xBD\x05" +
		"\xBD\u07FA\n\xBD\x03\xBD\x03\xBD\x03\xBE\x03\xBE\x05\xBE\u0800\n\xBE\x03" +
		"\xBE\x03\xBE\x03\xBE\x05\xBE\u0805\n\xBE\x07\xBE\u0807\n\xBE\f\xBE\x0E" +
		"\xBE\u080A\v\xBE\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x05\xBF" +
		"\u0812\n\xBF\x03\xC0\x03\xC0\x03\xC0\x05\xC0\u0817\n\xC0\x03\xC0\x03\xC0" +
		"\x03\xC0\x05\xC0\u081C\n\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03" +
		"\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03" +
		"\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03" +
		"\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03" +
		"\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03" +
		"\xC0\x03\xC0\x05\xC0\u0849\n\xC0\x03\xC1\x03\xC1\x03\xC1\x02\x02\b\f " +
		"4\xEA\u0100\u0104\xC2\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02" +
		"v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A" +
		"\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C" +
		"\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE" +
		"\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0" +
		"\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2" +
		"\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4" +
		"\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6" +
		"\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106" +
		"\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114" +
		"\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122" +
		"\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130" +
		"\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E" +
		"\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C" +
		"\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A" +
		"\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168" +
		"\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176" +
		"\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x17\x04\x02ccgg\x06\x02\x1A\x1A!!<<CC\x04\x02~~\x83\x83\x03\x02z" +
		"{\x04\x02]_cf\x04\x02}}\x84\x84\x03\x02_a\x03\x02]^\x04\x02hivw\x03\x02" +
		"tu\x04\x02ggjs\x07\x02&&11;;AAHH\x05\x02$$..RR\x04\x02\x17\x17DD\x03\x02" +
		"W\\\x04\x02ccxx\x04\x02\x18\x18TT\x03\x02\x1D\x1E\x04\x02((77\x03\x02" +
		"8:\x03\x02\x03\t\x02\u0939\x02\u0183\x03\x02\x02\x02\x04\u0193\x03\x02" +
		"\x02\x02\x06\u0197\x03\x02\x02\x02\b\u01A3\x03\x02\x02\x02\n\u01A5\x03" +
		"\x02\x02\x02\f\u01AB\x03\x02\x02\x02\x0E\u01C1\x03\x02\x02\x02\x10\u01C7" +
		"\x03\x02\x02\x02\x12\u01D3\x03\x02\x02\x02\x14\u01D5\x03\x02\x02\x02\x16" +
		"\u01D7\x03\x02\x02\x02\x18\u01E4\x03\x02\x02\x02\x1A\u01EB\x03\x02\x02" +
		"\x02\x1C\u01EE\x03\x02\x02\x02\x1E\u01F3\x03\x02\x02\x02 \u0222\x03\x02" +
		"\x02\x02\"\u0242\x03\x02\x02\x02$\u0244\x03\x02\x02\x02&\u0259\x03\x02" +
		"\x02\x02(\u0276\x03\x02\x02\x02*\u0278\x03\x02\x02\x02,\u027B\x03\x02" +
		"\x02\x02.\u028B\x03\x02\x02\x020\u028F\x03\x02\x02\x022\u0298\x03\x02" +
		"\x02\x024\u029A\x03\x02\x02\x026\u02B3\x03\x02\x02\x028\u02B6\x03\x02" +
		"\x02\x02:\u02BF\x03\x02\x02\x02<\u02CA\x03\x02\x02\x02>\u02CC\x03\x02" +
		"\x02\x02@\u02D4\x03\x02\x02\x02B\u02DC\x03\x02\x02\x02D\u02E4\x03\x02" +
		"\x02\x02F\u02F1\x03\x02\x02\x02H\u02F3\x03\x02\x02\x02J\u02FB\x03\x02" +
		"\x02\x02L\u0303\x03\x02\x02\x02N\u030B\x03\x02\x02\x02P\u0313\x03\x02" +
		"\x02\x02R\u031B\x03\x02\x02\x02T\u0323\x03\x02\x02\x02V\u032B\x03\x02" +
		"\x02\x02X\u0339\x03\x02\x02\x02Z\u033B\x03\x02\x02\x02\\\u033D\x03\x02" +
		"\x02\x02^\u0345\x03\x02\x02\x02`\u0354\x03\x02\x02\x02b\u0357\x03\x02" +
		"\x02\x02d\u0363\x03\x02\x02\x02f\u0367\x03\x02\x02\x02h\u036E\x03\x02" +
		"\x02\x02j\u0381\x03\x02\x02\x02l\u038E\x03\x02\x02\x02n\u03B1\x03\x02" +
		"\x02\x02p\u03B5\x03\x02\x02\x02r\u03B8\x03\x02\x02\x02t\u03BF\x03\x02" +
		"\x02\x02v\u03CA\x03\x02\x02\x02x\u03CE\x03\x02\x02\x02z\u03D1\x03\x02" +
		"\x02\x02|\u03E0\x03\x02\x02\x02~\u03EB\x03\x02\x02\x02\x80\u03FC\x03\x02" +
		"\x02\x02\x82\u03FE\x03\x02\x02\x02\x84\u0412\x03\x02\x02\x02\x86\u0414" +
		"\x03\x02\x02\x02\x88\u042B\x03\x02\x02\x02\x8A\u042D\x03\x02\x02\x02\x8C" +
		"\u0435\x03\x02\x02\x02\x8E\u0437\x03\x02\x02\x02\x90\u0440\x03\x02\x02" +
		"\x02\x92\u0443\x03\x02\x02\x02\x94\u044A\x03\x02\x02\x02\x96\u044C\x03" +
		"\x02\x02\x02\x98\u044E\x03\x02\x02\x02\x9A\u0453\x03\x02\x02\x02\x9C\u0459" +
		"\x03\x02\x02\x02\x9E\u045C\x03\x02\x02\x02\xA0\u0464\x03\x02\x02\x02\xA2" +
		"\u0482\x03\x02\x02\x02\xA4\u0488\x03\x02\x02\x02\xA6\u048A\x03\x02\x02" +
		"\x02\xA8\u04A8\x03\x02\x02\x02\xAA\u04AA\x03\x02\x02\x02\xAC\u04AC\x03" +
		"\x02\x02\x02\xAE\u04B6\x03\x02\x02\x02\xB0\u04C3\x03\x02\x02\x02\xB2\u04CD" +
		"\x03\x02\x02\x02\xB4\u04D1\x03\x02\x02\x02\xB6\u04D4\x03\x02\x02\x02\xB8" +
		"\u04DC\x03\x02\x02\x02\xBA\u04E1\x03\x02\x02\x02\xBC\u04E5\x03\x02\x02" +
		"\x02\xBE\u04E7\x03\x02\x02\x02\xC0\u04EA\x03\x02\x02\x02\xC2\u04F7\x03" +
		"\x02\x02\x02\xC4\u04F9\x03\x02\x02\x02\xC6\u0500\x03\x02\x02\x02\xC8\u0504" +
		"\x03\x02\x02\x02\xCA\u0510\x03\x02\x02\x02\xCC\u051A\x03\x02\x02\x02\xCE" +
		"\u0520\x03\x02\x02\x02\xD0\u052B\x03\x02\x02\x02\xD2\u0537\x03\x02\x02" +
		"\x02\xD4\u0539\x03\x02\x02\x02\xD6\u0544\x03\x02\x02\x02\xD8\u0552\x03" +
		"\x02\x02\x02\xDA\u0558\x03\x02\x02\x02\xDC\u055A\x03\x02\x02\x02\xDE\u0561" +
		"\x03\x02\x02\x02\xE0\u0576\x03\x02\x02\x02\xE2\u0578\x03\x02\x02\x02\xE4" +
		"\u0580\x03\x02\x02\x02\xE6\u0589\x03\x02\x02\x02\xE8\u0591\x03\x02\x02" +
		"\x02\xEA\u059F\x03\x02\x02\x02\xEC\u05B2\x03\x02\x02\x02\xEE\u05C3\x03" +
		"\x02\x02\x02\xF0\u05D6\x03\x02\x02\x02\xF2\u05D9\x03\x02\x02\x02\xF4\u05DD" +
		"\x03\x02\x02\x02\xF6\u05DF\x03\x02\x02\x02\xF8\u05E2\x03\x02\x02\x02\xFA" +
		"\u05E6\x03\x02\x02\x02\xFC\u05F2\x03\x02\x02\x02\xFE\u05FD\x03\x02\x02" +
		"\x02\u0100\u060D\x03\x02\x02\x02\u0102\u0624\x03\x02\x02\x02\u0104\u0629" +
		"\x03\x02\x02\x02\u0106\u063D\x03\x02\x02\x02\u0108\u0644\x03\x02\x02\x02" +
		"\u010A\u064D\x03\x02\x02\x02\u010C\u065B\x03\x02\x02\x02\u010E\u066E\x03" +
		"\x02\x02\x02\u0110\u0675\x03\x02\x02\x02\u0112\u067A\x03\x02\x02\x02\u0114" +
		"\u067E\x03\x02\x02\x02\u0116\u0680\x03\x02\x02\x02\u0118\u068E\x03\x02" +
		"\x02\x02\u011A\u0699\x03\x02\x02\x02\u011C\u069B\x03\x02\x02\x02\u011E" +
		"\u06B9\x03\x02\x02\x02\u0120\u06BC\x03\x02\x02\x02\u0122\u06C0\x03\x02" +
		"\x02\x02\u0124\u06C2\x03\x02\x02\x02\u0126\u06C8\x03\x02\x02\x02\u0128" +
		"\u06DC\x03\x02\x02\x02\u012A\u06DE\x03\x02\x02\x02\u012C\u06FA\x03\x02" +
		"\x02\x02\u012E\u06FD\x03\x02\x02\x02\u0130\u0701\x03\x02\x02\x02\u0132" +
		"\u0703\x03\x02\x02\x02\u0134\u0707\x03\x02\x02\x02\u0136\u070A\x03\x02" +
		"\x02\x02\u0138\u0719\x03\x02\x02\x02\u013A\u072E\x03\x02\x02\x02\u013C" +
		"\u0730\x03\x02\x02\x02\u013E\u0732\x03\x02\x02\x02\u0140\u0734\x03\x02" +
		"\x02\x02\u0142\u0737\x03\x02\x02\x02\u0144\u073B\x03\x02\x02\x02\u0146" +
		"\u073F\x03\x02\x02\x02\u0148\u0742\x03\x02\x02\x02\u014A\u0750\x03\x02" +
		"\x02\x02\u014C\u075B\x03\x02\x02\x02\u014E\u075D\x03\x02\x02\x02\u0150" +
		"\u0760\x03\x02\x02\x02\u0152\u0766\x03\x02\x02\x02\u0154\u076C\x03\x02" +
		"\x02\x02\u0156\u0776\x03\x02\x02\x02\u0158\u0781\x03\x02\x02\x02\u015A" +
		"\u0790\x03\x02\x02\x02\u015C\u07A2\x03\x02\x02\x02\u015E\u07A4\x03\x02" +
		"\x02\x02\u0160\u07A6\x03\x02\x02\x02\u0162\u07B7\x03\x02\x02\x02\u0164" +
		"\u07B9\x03\x02\x02\x02\u0166\u07C3\x03\x02\x02\x02\u0168\u07C8\x03\x02" +
		"\x02\x02\u016A\u07CD\x03\x02\x02\x02\u016C\u07D1\x03\x02\x02\x02\u016E" +
		"\u07D9\x03\x02\x02\x02\u0170\u07DD\x03\x02\x02\x02\u0172\u07EC\x03\x02" +
		"\x02\x02\u0174\u07EE\x03\x02\x02\x02\u0176\u07F4\x03\x02\x02\x02\u0178" +
		"\u07F6\x03\x02\x02\x02\u017A\u07FD\x03\x02\x02\x02\u017C\u0811\x03\x02" +
		"\x02\x02\u017E\u0848\x03\x02\x02\x02\u0180\u084A\x03\x02\x02\x02\u0182" +
		"\u0184\x05z>\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02" +
		"\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x07\x02\x02\x03\u0186\x03\x03" +
		"\x02\x02\x02\u0187\u0189\x05\u0180\xC1\x02\u0188\u0187\x03\x02\x02\x02" +
		"\u0189\u018A\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03" +
		"\x02\x02\x02\u018B\u0194\x03\x02\x02\x02\u018C\u0194\x07G\x02\x02\u018D" +
		"\u018E\x07W\x02\x02\u018E\u018F\x05\\/\x02\u018F\u0190\x07X\x02\x02\u0190" +
		"\u0194\x03\x02\x02\x02\u0191\u0194\x05\x06\x04\x02\u0192\u0194\x05\x0E" +
		"\b\x02\u0193\u0188\x03\x02\x02\x02\u0193\u018C\x03\x02\x02\x02\u0193\u018D" +
		"\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0192\x03\x02\x02\x02" +
		"\u0194\x05\x03\x02\x02\x02\u0195\u0198\x05\b\x05\x02\u0196\u0198\x05\n" +
		"\x06\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0196\x03\x02\x02\x02\u0198" +
		"\x07\x03\x02\x02\x02\u0199\u01A4\x07\x89\x02\x02\u019A\u01A4\x05\u014E" +
		"\xA8\x02\u019B\u01A4\x05\u0140\xA1\x02\u019C\u01A4\x05\u0150\xA9\x02\u019D" +
		"\u01A0\x07e\x02\x02\u019E\u01A1\x05\u011A\x8E\x02\u019F\u01A1\x05\xA6" +
		"T\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A1\u01A4" +
		"\x03\x02\x02\x02\u01A2\u01A4\x05\u015C\xAF\x02\u01A3\u0199\x03\x02\x02" +
		"\x02\u01A3\u019A\x03\x02\x02\x02\u01A3\u019B\x03\x02\x02\x02\u01A3\u019C" +
		"\x03\x02\x02\x02\u01A3\u019D\x03\x02\x02\x02\u01A3\u01A2\x03\x02\x02\x02" +
		"\u01A4\t\x03\x02\x02\x02\u01A5\u01A7\x05\f\x07\x02\u01A6\u01A8\x07F\x02" +
		"\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9" +
		"\x03\x02\x02\x02\u01A9\u01AA\x05\b\x05\x02\u01AA\v\x03\x02\x02\x02\u01AB" +
		"\u01AF\b\x07\x01\x02\u01AC\u01B0\x05\xA4S\x02\u01AD\u01B0\x05\xBC_\x02" +
		"\u01AE\u01B0\x05\xA6T\x02\u01AF\u01AC\x03\x02\x02\x02\u01AF\u01AD\x03" +
		"\x02\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0" +
		"\u01B1\x03\x02\x02\x02\u01B1\u01B2\x07\x81\x02\x02\u01B2\u01BE\x03\x02" +
		"\x02\x02\u01B3\u01B9\f\x03\x02\x02\u01B4\u01BA\x07\x89\x02\x02\u01B5\u01B7" +
		"\x07F\x02\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02" +
		"\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BA\x05\u015A\xAE\x02\u01B9\u01B4" +
		"\x03\x02\x02\x02\u01B9\u01B6\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02" +
		"\u01BB\u01BD\x07\x81\x02\x02\u01BC\u01B3\x03\x02\x02\x02\u01BD\u01C0\x03" +
		"\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF" +
		"\r\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C3\x05\x10\t\x02" +
		"\u01C2\u01C4\x05\x1E\x10\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03" +
		"\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x05f4\x02\u01C6\x0F" +
		"\x03\x02\x02\x02\u01C7\u01C9\x07Y\x02\x02\u01C8\u01CA\x05\x12\n\x02\u01C9" +
		"\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02" +
		"\x02\x02\u01CB\u01CC\x07Z\x02\x02\u01CC\x11\x03\x02\x02\x02\u01CD\u01D4" +
		"\x05\x16\f\x02\u01CE\u01D1\x05\x14\v\x02\u01CF\u01D0\x07|\x02\x02\u01D0" +
		"\u01D2\x05\x16\f\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02" +
		"\x02\u01D2\u01D4\x03\x02\x02\x02\u01D3\u01CD\x03\x02\x02\x02\u01D3\u01CE" +
		"\x03\x02\x02\x02\u01D4\x13\x03\x02\x02\x02\u01D5\u01D6\t\x02\x02\x02\u01D6" +
		"\x15\x03\x02\x02\x02\u01D7\u01DC\x05\x18\r\x02\u01D8\u01D9\x07|\x02\x02" +
		"\u01D9\u01DB\x05\x18\r\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DE\x03" +
		"\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD" +
		"\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E1\x07\x85" +
		"\x02\x02\u01E0\u01DF\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1" +
		"\x17\x03\x02\x02\x02\u01E2\u01E5\x05\x1A\x0E\x02\u01E3\u01E5\x05\x1C\x0F" +
		"\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E3\x03\x02\x02\x02\u01E5\x19" +
		"\x03\x02\x02\x02\u01E6\u01E8\x07c\x02\x02\u01E7\u01E6\x03\x02\x02\x02" +
		"\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EC\x07" +
		"\x89\x02\x02\u01EA\u01EC\x07G\x02\x02\u01EB\u01E7\x03\x02\x02\x02\u01EB" +
		"\u01EA\x03\x02\x02\x02\u01EC\x1B\x03\x02\x02\x02\u01ED\u01EF\x07c\x02" +
		"\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0" +
		"\x03\x02\x02\x02\u01F0\u01F1\x07\x89\x02\x02\u01F1\u01F2\x05\u0110\x89" +
		"\x02\u01F2\x1D\x03\x02\x02\x02\u01F3\u01F5\x07W\x02\x02\u01F4\u01F6\x05" +
		"\u0106\x84\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02" +
		"\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9\x07X\x02\x02\u01F8\u01FA\x07" +
		"1\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA" +
		"\u01FC\x03\x02\x02\x02\u01FB\u01FD\x05\u0176\xBC\x02\u01FC\u01FB\x03\x02" +
		"\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FF\x03\x02\x02\x02\u01FE" +
		"\u0200\x05\xD0i\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02" +
		"\x02\u0200\u0202\x03\x02\x02\x02\u0201\u0203\x05\xEEx\x02\u0202\u0201" +
		"\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\x1F\x03\x02\x02\x02" +
		"\u0204\u0205\b\x11\x01\x02\u0205\u0223\x05\x04\x03\x02\u0206\u0209\x05" +
		"\xA2R\x02\u0207\u0209\x05\u0164\xB3\x02\u0208\u0206\x03\x02\x02\x02\u0208" +
		"\u0207\x03\x02\x02\x02\u0209\u0210\x03\x02\x02\x02\u020A\u020C\x07W\x02" +
		"\x02\u020B\u020D\x05$\x13\x02\u020C\u020B\x03\x02\x02\x02\u020C\u020D" +
		"\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u0211\x07X\x02\x02" +
		"\u020F\u0211\x05\u0118\x8D\x02\u0210\u020A\x03\x02\x02\x02\u0210\u020F" +
		"\x03\x02\x02\x02\u0211\u0223\x03\x02\x02\x02\u0212\u0213\t\x03\x02\x02" +
		"\u0213\u0214\x07h\x02\x02\u0214\u0215\x05\xFA~\x02\u0215\u0216\x07i\x02" +
		"\x02\u0216\u0217\x07W\x02\x02\u0217\u0218\x05\\/\x02\u0218\u0219\x07X" +
		"\x02\x02\u0219\u0223\x03\x02\x02\x02\u021A\u021B\x05\"\x12\x02\u021B\u021E" +
		"\x07W\x02\x02\u021C\u021F\x05\\/\x02\u021D\u021F\x05\xFA~\x02\u021E\u021C" +
		"\x03\x02\x02\x02\u021E\u021D\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02" +
		"\u0220\u0221\x07X\x02\x02\u0221\u0223\x03\x02\x02\x02\u0222\u0204\x03" +
		"\x02\x02\x02\u0222\u0208\x03\x02\x02\x02\u0222\u0212\x03\x02\x02\x02\u0222" +
		"\u021A\x03\x02\x02\x02\u0223\u023F\x03\x02\x02\x02\u0224\u0225\f\t\x02" +
		"\x02\u0225\u0228\x07Y\x02\x02\u0226\u0229\x05\\/\x02\u0227\u0229\x05\u0118" +
		"\x8D\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229" +
		"\u022A\x03\x02\x02\x02\u022A\u022B\x07Z\x02\x02\u022B\u023E\x03\x02\x02" +
		"\x02\u022C\u022D\f\b\x02\x02\u022D\u022F\x07W\x02\x02\u022E\u0230\x05" +
		"$\x13\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230" +
		"\u0231\x03\x02\x02\x02\u0231\u023E\x07X\x02\x02\u0232\u0233\f\x06\x02" +
		"\x02\u0233\u0239\t\x04\x02\x02\u0234\u0236\x07F\x02\x02\u0235\u0234\x03" +
		"\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237" +
		"\u023A\x05\x06\x04\x02\u0238\u023A\x05&\x14\x02\u0239\u0235\x03\x02\x02" +
		"\x02\u0239\u0238\x03\x02\x02\x02\u023A\u023E\x03\x02\x02\x02\u023B\u023C" +
		"\f\x05\x02\x02\u023C\u023E\t\x05\x02\x02\u023D\u0224\x03\x02\x02\x02\u023D" +
		"\u022C\x03\x02\x02\x02\u023D\u0232\x03\x02\x02\x02\u023D\u023B\x03\x02" +
		"\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F" +
		"\u0240\x03\x02\x02\x02\u0240!\x03\x02\x02\x02\u0241\u023F\x03\x02\x02" +
		"\x02\u0242\u0243\x07M\x02\x02\u0243#\x03\x02\x02\x02\u0244\u0245\x05\u0116" +
		"\x8C\x02\u0245%\x03\x02\x02\x02\u0246\u0248\x05\f\x07\x02\u0247\u0246" +
		"\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\u024C\x03\x02\x02\x02" +
		"\u0249\u024A\x05\xA4S\x02\u024A\u024B\x07\x81\x02\x02\u024B\u024D\x03" +
		"\x02\x02\x02\u024C\u0249\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D" +
		"\u024E\x03\x02\x02\x02\u024E\u024F\x07e\x02\x02\u024F\u025A\x05\xA4S\x02" +
		"\u0250\u0251\x05\f\x07\x02\u0251\u0252\x07F\x02\x02\u0252\u0253\x05\u015A" +
		"\xAE\x02\u0253\u0254\x07\x81\x02\x02\u0254\u0255\x07e\x02\x02\u0255\u0256" +
		"\x05\xA4S\x02\u0256\u025A\x03\x02\x02\x02\u0257\u0258\x07e\x02\x02\u0258" +
		"\u025A\x05\xA6T\x02\u0259\u0247\x03\x02\x02\x02\u0259\u0250\x03\x02\x02" +
		"\x02\u0259\u0257\x03\x02\x02\x02\u025A\'\x03\x02\x02\x02\u025B\u0277\x05" +
		" \x11\x02\u025C\u0261\x07z\x02\x02\u025D\u0261\x07{\x02\x02\u025E\u0261" +
		"\x05*\x16\x02\u025F\u0261\x07@\x02\x02\u0260\u025C\x03\x02\x02\x02\u0260" +
		"\u025D\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u025F\x03\x02" +
		"\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0277\x05(\x15\x02\u0263\u026C" +
		"\x07@\x02\x02\u0264\u0265\x07W\x02\x02\u0265\u0266\x05\xFA~\x02\u0266" +
		"\u0267\x07X\x02\x02\u0267\u026D\x03\x02\x02\x02\u0268\u0269\x07\x85\x02" +
		"\x02\u0269\u026A\x07W\x02\x02\u026A\u026B\x07\x89\x02\x02\u026B\u026D" +
		"\x07X\x02\x02\u026C\u0264\x03\x02\x02\x02\u026C\u0268\x03\x02\x02\x02" +
		"\u026D\u0277\x03\x02\x02\x02\u026E\u026F\x07\r\x02\x02\u026F\u0270\x07" +
		"W\x02\x02\u0270\u0271\x05\xFA~\x02\u0271\u0272\x07X\x02\x02\u0272\u0277" +
		"\x03\x02\x02\x02\u0273\u0277\x05:\x1E\x02\u0274\u0277\x05,\x17\x02\u0275" +
		"\u0277\x058\x1D\x02\u0276\u025B\x03\x02\x02\x02\u0276\u0260\x03\x02\x02" +
		"\x02\u0276\u0263\x03\x02\x02\x02\u0276\u026E\x03\x02\x02\x02\u0276\u0273" +
		"\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0276\u0275\x03\x02\x02\x02" +
		"\u0277)\x03\x02\x02\x02\u0278\u0279\t\x06\x02\x02\u0279+\x03\x02\x02\x02" +
		"\u027A\u027C\x07\x81\x02\x02\u027B\u027A\x03\x02\x02\x02\u027B\u027C\x03" +
		"\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027F\x073\x02\x02\u027E" +
		"\u0280\x05.\x18\x02\u027F\u027E\x03\x02\x02\x02\u027F\u0280\x03\x02\x02" +
		"\x02\u0280\u0286\x03\x02\x02\x02\u0281\u0287\x050\x19\x02\u0282\u0283" +
		"\x07W\x02\x02\u0283\u0284\x05\xFA~\x02\u0284\u0285\x07X\x02\x02\u0285" +
		"\u0287\x03\x02\x02\x02\u0286\u0281\x03\x02\x02\x02\u0286\u0282\x03\x02" +
		"\x02\x02\u0287\u0289\x03\x02\x02\x02\u0288\u028A\x056\x1C\x02\u0289\u0288" +
		"\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A-\x03\x02\x02\x02\u028B" +
		"\u028C\x07W\x02\x02\u028C\u028D\x05$\x13\x02\u028D\u028E\x07X\x02\x02" +
		"\u028E/\x03\x02\x02\x02\u028F\u0291\x05\x9EP\x02\u0290\u0292\x052\x1A" +
		"\x02\u0291\u0290\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u02921\x03" +
		"\x02\x02\x02\u0293\u0295\x05\xF0y\x02\u0294\u0296\x052\x1A\x02\u0295\u0294" +
		"\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0299\x03\x02\x02\x02" +
		"\u0297\u0299\x054\x1B\x02\u0298\u0293\x03\x02\x02\x02\u0298\u0297\x03" +
		"\x02\x02\x02\u02993\x03\x02\x02\x02\u029A\u029B\b\x1B\x01\x02\u029B\u029C" +
		"\x07Y\x02\x02\u029C\u029D\x05\\/\x02\u029D\u029F\x07Z\x02\x02\u029E\u02A0" +
		"\x05\xD0i\x02\u029F\u029E\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02" +
		"\u02A0\u02AA\x03\x02\x02\x02\u02A1\u02A2\f\x03\x02\x02\u02A2\u02A3\x07" +
		"Y\x02\x02\u02A3\u02A4\x05^0\x02\u02A4\u02A6\x07Z\x02\x02\u02A5\u02A7\x05" +
		"\xD0i\x02\u02A6\u02A5\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7" +
		"\u02A9\x03\x02\x02\x02\u02A8\u02A1\x03\x02\x02\x02\u02A9\u02AC\x03\x02" +
		"\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB" +
		"5\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02AF\x07W\x02\x02" +
		"\u02AE\u02B0\x05$\x13\x02\u02AF\u02AE\x03\x02\x02\x02\u02AF\u02B0\x03" +
		"\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B4\x07X\x02\x02\u02B2" +
		"\u02B4\x05\u0118\x8D\x02\u02B3\u02AD\x03\x02\x02\x02\u02B3\u02B2\x03\x02" +
		"\x02\x02\u02B47\x03\x02\x02\x02\u02B5\u02B7\x07\x81\x02\x02\u02B6\u02B5" +
		"\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02" +
		"\u02B8\u02BB\x07\x1E\x02\x02\u02B9\u02BA\x07Y\x02\x02\u02BA\u02BC\x07" +
		"Z\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC" +
		"\u02BD\x03\x02\x02\x02\u02BD\u02BE\x05<\x1F\x02\u02BE9\x03\x02\x02\x02" +
		"\u02BF\u02C0\x074\x02\x02\u02C0\u02C1\x07W\x02\x02\u02C1\u02C2\x05\\/" +
		"\x02\u02C2\u02C3\x07X\x02\x02\u02C3;\x03\x02\x02\x02\u02C4\u02CB\x05(" +
		"\x15\x02\u02C5\u02C6\x07W\x02\x02\u02C6\u02C7\x05\xFA~\x02\u02C7\u02C8" +
		"\x07X\x02\x02\u02C8\u02C9\x05<\x1F\x02\u02C9\u02CB\x03\x02\x02\x02\u02CA" +
		"\u02C4\x03\x02\x02\x02\u02CA\u02C5\x03\x02\x02\x02\u02CB=\x03\x02\x02" +
		"\x02\u02CC\u02D1\x05<\x1F\x02\u02CD\u02CE\t\x07\x02\x02\u02CE\u02D0\x05" +
		"<\x1F\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1" +
		"\u02CF\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2?\x03\x02\x02" +
		"\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4\u02D9\x05> \x02\u02D5\u02D6\t\b" +
		"\x02\x02\u02D6\u02D8\x05> \x02\u02D7\u02D5\x03\x02\x02\x02\u02D8\u02DB" +
		"\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02" +
		"\u02DAA\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DC\u02E1\x05@!" +
		"\x02\u02DD\u02DE\t\t\x02\x02\u02DE\u02E0\x05@!\x02\u02DF\u02DD\x03\x02" +
		"\x02\x02\u02E0\u02E3\x03\x02\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1" +
		"\u02E2\x03\x02\x02\x02\u02E2C\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02" +
		"\x02\u02E4\u02EA\x05B\"\x02\u02E5\u02E6\x05F$\x02\u02E6\u02E7\x05B\"\x02" +
		"\u02E7\u02E9\x03\x02\x02\x02\u02E8\u02E5\x03\x02\x02\x02\u02E9\u02EC\x03" +
		"\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB" +
		"E\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02EE\x07i\x02\x02" +
		"\u02EE\u02F2\x07i\x02\x02\u02EF\u02F0\x07h\x02\x02\u02F0\u02F2\x07h\x02" +
		"\x02\u02F1\u02ED\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2G\x03" +
		"\x02\x02\x02\u02F3\u02F8\x05D#\x02\u02F4\u02F5\t\n\x02\x02\u02F5\u02F7" +
		"\x05D#\x02\u02F6\u02F4\x03\x02\x02\x02\u02F7\u02FA\x03\x02\x02\x02\u02F8" +
		"\u02F6\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9I\x03\x02\x02" +
		"\x02\u02FA\u02F8\x03\x02\x02\x02\u02FB\u0300\x05H%\x02\u02FC\u02FD\t\v" +
		"\x02\x02\u02FD\u02FF\x05H%\x02\u02FE\u02FC\x03\x02\x02\x02\u02FF\u0302" +
		"\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02" +
		"\u0301K\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0303\u0308\x05J&" +
		"\x02\u0304\u0305\x07c\x02\x02\u0305\u0307\x05J&\x02\u0306\u0304\x03\x02" +
		"\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0308" +
		"\u0309\x03\x02\x02\x02\u0309M\x03\x02\x02\x02\u030A\u0308\x03\x02\x02" +
		"\x02\u030B\u0310\x05L\'\x02\u030C\u030D\x07b\x02\x02\u030D\u030F\x05L" +
		"\'\x02\u030E\u030C\x03\x02\x02\x02\u030F\u0312\x03\x02\x02\x02\u0310\u030E" +
		"\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311O\x03\x02\x02\x02\u0312" +
		"\u0310\x03\x02\x02\x02\u0313\u0318\x05N(\x02\u0314\u0315\x07d\x02\x02" +
		"\u0315\u0317\x05N(\x02\u0316\u0314\x03\x02\x02\x02\u0317\u031A\x03\x02" +
		"\x02\x02\u0318\u0316\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319" +
		"Q\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031B\u0320\x05P)\x02\u031C" +
		"\u031D\x07x\x02\x02\u031D\u031F\x05P)\x02\u031E\u031C\x03\x02\x02\x02" +
		"\u031F\u0322\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0320\u0321\x03" +
		"\x02\x02\x02\u0321S\x03\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0323" +
		"\u0328\x05R*\x02\u0324\u0325\x07y\x02\x02\u0325\u0327\x05R*\x02\u0326" +
		"\u0324\x03\x02\x02\x02\u0327\u032A\x03\x02\x02\x02\u0328\u0326\x03\x02" +
		"\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329U\x03\x02\x02\x02\u032A\u0328" +
		"\x03\x02\x02\x02\u032B\u0331\x05T+\x02\u032C\u032D\x07\x7F\x02\x02\u032D" +
		"\u032E\x05\\/\x02\u032E\u032F\x07\x80\x02\x02\u032F\u0330\x05X-\x02\u0330" +
		"\u0332\x03\x02\x02\x02\u0331\u032C\x03\x02\x02\x02\u0331\u0332\x03\x02" +
		"\x02\x02\u0332W\x03\x02\x02\x02\u0333\u033A\x05V,\x02\u0334\u0335\x05" +
		"T+\x02\u0335\u0336\x05Z.\x02\u0336\u0337\x05\u0114\x8B\x02\u0337\u033A" +
		"\x03\x02\x02\x02\u0338\u033A\x05\u0174\xBB\x02\u0339\u0333\x03\x02\x02" +
		"\x02\u0339\u0334\x03\x02\x02\x02\u0339\u0338\x03\x02\x02\x02\u033AY\x03" +
		"\x02\x02\x02\u033B\u033C\t\f\x02\x02\u033C[\x03\x02\x02\x02\u033D\u0342" +
		"\x05X-\x02\u033E\u033F\x07|\x02\x02\u033F\u0341\x05X-\x02\u0340\u033E" +
		"\x03\x02\x02\x02\u0341\u0344\x03\x02\x02\x02\u0342\u0340\x03\x02\x02\x02" +
		"\u0342\u0343\x03\x02\x02\x02\u0343]\x03\x02\x02\x02\u0344\u0342\x03\x02" +
		"\x02\x02\u0345\u0346\x05V,\x02\u0346_\x03\x02\x02\x02\u0347\u0355\x05" +
		"b2\x02\u0348\u034A\x05\xD0i\x02\u0349\u0348\x03\x02\x02\x02\u0349\u034A" +
		"\x03\x02\x02\x02\u034A\u0351\x03\x02\x02\x02\u034B\u0352\x05d3\x02\u034C" +
		"\u0352\x05f4\x02\u034D\u0352\x05j6\x02\u034E\u0352\x05n8\x02\u034F\u0352" +
		"\x05v<\x02\u0350\u0352\x05\u016A\xB6\x02\u0351\u034B\x03\x02\x02\x02\u0351" +
		"\u034C\x03\x02\x02\x02\u0351\u034D\x03\x02\x02\x02\u0351\u034E\x03\x02" +
		"\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351\u0350\x03\x02\x02\x02\u0352" +
		"\u0355\x03\x02\x02\x02\u0353\u0355\x05x=\x02\u0354\u0347\x03\x02\x02\x02" +
		"\u0354\u0349\x03\x02\x02\x02\u0354\u0353\x03\x02\x02\x02\u0355a\x03\x02" +
		"\x02\x02\u0356\u0358\x05\xD0i\x02\u0357\u0356\x03\x02\x02\x02\u0357\u0358" +
		"\x03\x02\x02\x02\u0358\u035D\x03\x02\x02\x02\u0359\u035E\x07\x89\x02\x02" +
		"\u035A\u035B\x07\x12\x02\x02\u035B\u035E\x05^0\x02\u035C\u035E\x07\x1D" +
		"\x02\x02\u035D\u0359\x03\x02\x02\x02\u035D\u035A\x03\x02\x02\x02\u035D" +
		"\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0360\x07\x80" +
		"\x02\x02\u0360\u0361\x05`1\x02\u0361c\x03\x02\x02\x02\u0362\u0364\x05" +
		"\\/\x02\u0363\u0362\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364" +
		"\u0365\x03\x02\x02\x02\u0365\u0366\x07\x82\x02\x02\u0366e\x03\x02\x02" +
		"\x02\u0367\u0369\x07[\x02\x02\u0368\u036A\x05h5\x02\u0369\u0368\x03\x02" +
		"\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B" +
		"\u036C\x07\\\x02\x02\u036Cg\x03\x02\x02\x02\u036D\u036F\x05`1\x02\u036E" +
		"\u036D\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u036E\x03\x02" +
		"\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371i\x03\x02\x02\x02\u0372\u0373" +
		"\x07-\x02\x02\u0373\u0374\x07W\x02\x02\u0374\u0375\x05l7\x02\u0375\u0376" +
		"\x07X\x02\x02\u0376\u0379\x05`1\x02\u0377\u0378\x07\"\x02\x02\u0378\u037A" +
		"\x05`1\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A" +
		"\u0382\x03\x02\x02\x02\u037B\u037C\x07E\x02\x02\u037C\u037D\x07W\x02\x02" +
		"\u037D\u037E\x05l7\x02\u037E\u037F\x07X\x02\x02\u037F\u0380\x05`1\x02" +
		"\u0380\u0382";
	private static readonly _serializedATNSegment2: string =
		"\x03\x02\x02\x02\u0381\u0372\x03\x02\x02\x02\u0381\u037B\x03\x02\x02\x02" +
		"\u0382k\x03\x02\x02\x02\u0383\u038F\x05\\/\x02\u0384\u0386\x05\xD0i\x02" +
		"\u0385\u0384\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386\u0387\x03" +
		"\x02\x02\x02\u0387\u0388\x05\x92J\x02\u0388\u038C\x05\xE6t\x02\u0389\u038A" +
		"\x07g\x02\x02\u038A\u038D\x05\u0114\x8B\x02\u038B\u038D\x05\u0118\x8D" +
		"\x02\u038C\u0389\x03\x02\x02\x02\u038C\u038B\x03\x02\x02\x02\u038D\u038F" +
		"\x03\x02\x02\x02\u038E\u0383\x03\x02\x02\x02\u038E\u0385\x03\x02\x02\x02" +
		"\u038Fm\x03\x02\x02\x02\u0390\u0391\x07V\x02\x02\u0391\u0392\x07W\x02" +
		"\x02\u0392\u0393\x05l7\x02\u0393\u0394\x07X\x02\x02\u0394\u0395\x05`1" +
		"\x02\u0395\u03B2\x03\x02\x02\x02\u0396\u0397\x07\x1F\x02\x02\u0397\u0398" +
		"\x05`1\x02\u0398\u0399\x07V\x02\x02\u0399\u039A\x07W\x02\x02\u039A\u039B" +
		"\x05\\/\x02\u039B\u039C\x07X\x02\x02\u039C\u039D\x07\x82\x02\x02\u039D" +
		"\u03B2\x03\x02\x02\x02\u039E\u039F\x07*\x02\x02\u039F\u03AC\x07W\x02\x02" +
		"\u03A0\u03A2\x05p9\x02\u03A1\u03A3\x05l7\x02\u03A2\u03A1\x03\x02\x02\x02" +
		"\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A6\x07" +
		"\x82\x02\x02\u03A5\u03A7\x05\\/\x02\u03A6\u03A5\x03\x02\x02\x02\u03A6" +
		"\u03A7\x03\x02\x02\x02\u03A7\u03AD\x03\x02\x02\x02\u03A8\u03A9\x05r:\x02" +
		"\u03A9\u03AA\x07\x80\x02\x02\u03AA\u03AB\x05t;\x02\u03AB\u03AD\x03\x02" +
		"\x02\x02\u03AC\u03A0\x03\x02\x02\x02\u03AC\u03A8\x03\x02\x02\x02\u03AD" +
		"\u03AE\x03\x02\x02\x02\u03AE\u03AF\x07X\x02\x02\u03AF\u03B0\x05`1\x02" +
		"\u03B0\u03B2\x03\x02\x02\x02\u03B1\u0390\x03\x02\x02\x02\u03B1\u0396\x03" +
		"\x02\x02\x02\u03B1\u039E\x03\x02\x02\x02\u03B2o\x03\x02\x02\x02\u03B3" +
		"\u03B6\x05d3\x02\u03B4\u03B6\x05\x88E\x02\u03B5\u03B3\x03\x02\x02\x02" +
		"\u03B5\u03B4\x03\x02\x02\x02\u03B6q\x03\x02\x02\x02\u03B7\u03B9\x05\xD0" +
		"i\x02\u03B8\u03B7\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BA" +
		"\x03\x02\x02\x02\u03BA\u03BB\x05\x92J\x02\u03BB\u03BC\x05\xE6t\x02\u03BC" +
		"s\x03\x02\x02\x02\u03BD\u03C0\x05\\/\x02\u03BE\u03C0\x05\u0118\x8D\x02" +
		"\u03BF\u03BD\x03\x02\x02\x02\u03BF\u03BE\x03\x02\x02\x02\u03C0u\x03\x02" +
		"\x02\x02\u03C1\u03CB\x07\x11\x02\x02\u03C2\u03CB\x07\x1B\x02\x02\u03C3" +
		"\u03C6\x07=\x02\x02\u03C4\u03C7\x05\\/\x02\u03C5\u03C7\x05\u0118\x8D\x02" +
		"\u03C6\u03C4\x03\x02\x02\x02\u03C6\u03C5\x03\x02\x02\x02\u03C6\u03C7\x03" +
		"\x02\x02\x02\u03C7\u03CB\x03\x02\x02\x02\u03C8\u03C9\x07,\x02\x02\u03C9" +
		"\u03CB\x07\x89\x02\x02\u03CA\u03C1\x03\x02\x02\x02\u03CA\u03C2\x03\x02" +
		"\x02\x02\u03CA\u03C3\x03\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CB" +
		"\u03CC\x03\x02\x02\x02\u03CC\u03CD\x07\x82\x02\x02\u03CDw\x03\x02\x02" +
		"\x02\u03CE\u03CF\x05\x84C\x02\u03CFy\x03\x02\x02\x02\u03D0\u03D2\x05|" +
		"?\x02\u03D1\u03D0\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03D1" +
		"\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4{\x03\x02\x02\x02\u03D5" +
		"\u03E1\x05\x84C\x02\u03D6\u03E1\x05\u010C\x87\x02\u03D7\u03E1\x05\u0152" +
		"\xAA\x02\u03D8\u03E1\x05\u0166\xB4\x02\u03D9\u03E1\x05\u0168\xB5\x02\u03DA" +
		"\u03E1\x05\xCEh\x02\u03DB\u03E1\x05\xC0a\x02\u03DC\u03E1\x05\x8CG\x02" +
		"\u03DD\u03E1\x05\x8EH\x02\u03DE\u03E1\x05~@\x02\u03DF\u03E1\x05\x80A\x02" +
		"\u03E0\u03D5\x03\x02\x02\x02\u03E0\u03D6\x03\x02\x02\x02\u03E0\u03D7\x03" +
		"\x02\x02\x02\u03E0\u03D8\x03\x02\x02\x02\u03E0\u03D9\x03\x02\x02\x02\u03E0" +
		"\u03DA\x03\x02\x02\x02\u03E0\u03DB\x03\x02\x02\x02\u03E0\u03DC\x03\x02" +
		"\x02\x02\u03E0\u03DD\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E0" +
		"\u03DF\x03\x02\x02\x02\u03E1}\x03\x02\x02\x02\u03E2\u03E3\x07\n\x02\x02" +
		"\u03E3\u03E4\x07h\x02\x02\u03E4\u03E5\x05\x82B\x02\u03E5\u03E6\x07i\x02" +
		"\x02\u03E6\u03EC\x03\x02\x02\x02\u03E7\u03E8\x07\x87\x02\x02\u03E8\u03E9" +
		"\x05\x82B\x02\u03E9\u03EA\x07\x86\x02\x02\u03EA\u03EC\x03\x02\x02\x02" +
		"\u03EB\u03E2\x03\x02\x02\x02\u03EB\u03E7\x03\x02\x02\x02\u03EC\x7F\x03" +
		"\x02\x02\x02\u03ED\u03EE\x07\v\x02\x02\u03EE\u03EF\x07\x89\x02\x02\u03EF" +
		"\u03FD\x07\x03\x02\x02\u03F0\u03F2\x07\v\x02\x02\u03F1\u03F3\x07\x89\x02" +
		"\x02\u03F2\u03F1\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F2" +
		"\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03FD\x03\x02\x02\x02" +
		"\u03F6\u03F7\x07\v\x02\x02\u03F7\u03F8\x07\x89\x02\x02\u03F8\u03FD\x05" +
		"\xA2R\x02\u03F9\u03FA\x07\v\x02\x02\u03FA\u03FB\x07\x89\x02\x02\u03FB" +
		"\u03FD\x07\x06\x02\x02\u03FC\u03ED\x03\x02\x02\x02\u03FC\u03F0\x03\x02" +
		"\x02\x02\u03FC\u03F6\x03\x02\x02\x02\u03FC\u03F9\x03\x02\x02\x02\u03FD" +
		"\x81\x03\x02\x02\x02\u03FE\u0403\x07\x89\x02\x02\u03FF\u0400\x07`\x02" +
		"\x02\u0400\u0402\x07\x89\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0405" +
		"\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02" +
		"\u0404\u0408\x03\x02\x02\x02\u0405\u0403\x03\x02\x02\x02\u0406\u0407\x07" +
		"\x83\x02\x02\u0407\u0409\x07\x89\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408" +
		"\u0409\x03\x02\x02\x02\u0409\x83\x03\x02\x02\x02\u040A\u0413\x05\x88E" +
		"\x02\u040B\u0413\x05\xCCg\x02\u040C\u0413\x05\xC4c\x02\u040D\u0413\x05" +
		"\xC8e\x02\u040E\u0413\x05\xCAf\x02\u040F\u0413\x05\x8AF\x02\u0410\u0413" +
		"\x05\x86D\x02\u0411\u0413\x05\xB0Y\x02\u0412\u040A\x03\x02\x02\x02\u0412" +
		"\u040B\x03\x02\x02\x02\u0412\u040C\x03\x02\x02\x02\u0412\u040D\x03\x02" +
		"\x02\x02\u0412\u040E\x03\x02\x02\x02\u0412\u040F\x03\x02\x02\x02\u0412" +
		"\u0410\x03\x02\x02\x02\u0412\u0411\x03\x02\x02\x02\u0413\x85\x03\x02\x02" +
		"\x02\u0414\u0415\x07Q\x02\x02\u0415\u0417\x07\x89\x02\x02\u0416\u0418" +
		"\x05\xD0i\x02\u0417\u0416\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02" +
		"\u0418\u0419\x03\x02\x02\x02\u0419\u041A\x07g\x02\x02\u041A\u041B\x05" +
		"\xFA~\x02\u041B\u041C\x07\x82\x02\x02\u041C\x87\x03\x02\x02\x02\u041D" +
		"\u041F\x05\x92J\x02\u041E\u041D\x03\x02\x02\x02\u041E\u041F\x03\x02\x02" +
		"\x02\u041F\u0421\x03\x02\x02\x02\u0420\u0422\x05\xE2r\x02\u0421\u0420" +
		"\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02" +
		"\u0423\u042C\x07\x82\x02\x02\u0424\u0426\x05\xD0i\x02\u0425\u0427\x05" +
		"\x92J\x02\u0426\u0425\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427" +
		"\u0428\x03\x02\x02\x02\u0428\u0429\x05\xE2r\x02\u0429\u042A\x07\x82\x02" +
		"\x02\u042A\u042C\x03\x02\x02\x02\u042B\u041E\x03\x02\x02\x02\u042B\u0424" +
		"\x03\x02\x02\x02\u042C\x89\x03\x02\x02\x02\u042D\u042E\x07B\x02\x02\u042E" +
		"\u042F\x07W\x02\x02\u042F\u0430\x05^0\x02\u0430\u0431\x07|\x02\x02\u0431" +
		"\u0432\x07\x06\x02\x02\u0432\u0433\x07X\x02\x02\u0433\u0434\x07\x82\x02" +
		"\x02\u0434\x8B\x03\x02\x02\x02\u0435\u0436\x07\x82\x02\x02\u0436\x8D\x03" +
		"\x02\x02\x02\u0437\u0438\x05\xD0i\x02\u0438\u0439\x07\x82\x02\x02\u0439" +
		"\x8F\x03\x02\x02\x02\u043A\u0441\x05\x94K\x02\u043B\u0441\x05\x9AN\x02" +
		"\u043C\u0441\x05\x96L\x02\u043D\u0441\x07+\x02\x02\u043E\u0441\x07L\x02" +
		"\x02\u043F\u0441\x07\x19\x02\x02\u0440\u043A\x03\x02\x02\x02\u0440\u043B" +
		"\x03\x02\x02\x02\u0440\u043C\x03\x02\x02\x02\u0440\u043D\x03\x02\x02\x02" +
		"\u0440\u043E\x03\x02\x02\x02\u0440\u043F\x03\x02\x02\x02\u0441\x91\x03" +
		"\x02\x02\x02\u0442\u0444\x05\x90I\x02\u0443\u0442\x03\x02\x02\x02\u0444" +
		"\u0445\x03\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\u0445\u0446\x03\x02" +
		"\x02\x02\u0446\u0448\x03\x02\x02\x02\u0447\u0449\x05\xD0i\x02\u0448\u0447" +
		"\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\x93\x03\x02\x02\x02" +
		"\u044A\u044B\t\r\x02\x02\u044B\x95\x03\x02\x02\x02\u044C\u044D\t\x0E\x02" +
		"\x02\u044D\x97\x03\x02\x02\x02\u044E\u044F\x07\x89\x02\x02\u044F\x99\x03" +
		"\x02\x02\x02\u0450\u0454\x05\x9CO\x02\u0451\u0454\x05\u011C\x8F\x02\u0452" +
		"\u0454\x05\xACW\x02\u0453\u0450\x03\x02\x02\x02\u0453\u0451\x03\x02\x02" +
		"\x02\u0453\u0452\x03\x02\x02\x02\u0454\x9B\x03\x02\x02\x02\u0455\u045A" +
		"\x05\xA2R\x02\u0456\u045A\x05\xA8U\x02\u0457\u045A\x05\u0164\xB3\x02\u0458" +
		"\u045A\x05\xF4{\x02\u0459\u0455\x03\x02\x02\x02\u0459\u0456\x03\x02\x02" +
		"\x02\u0459\u0457\x03\x02\x02\x02\u0459\u0458\x03\x02\x02\x02\u045A\x9D" +
		"\x03\x02\x02\x02\u045B\u045D\x05\x9AN\x02\u045C\u045B\x03\x02\x02\x02" +
		"\u045D\u045E\x03\x02\x02\x02\u045E\u045C\x03\x02\x02\x02\u045E\u045F\x03" +
		"\x02\x02\x02\u045F\u0461\x03\x02\x02\x02\u0460\u0462\x05\xD0i\x02\u0461" +
		"\u0460\x03\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\x9F\x03\x02\x02" +
		"\x02\u0463\u0465\x05\x9CO\x02\u0464\u0463\x03\x02\x02\x02\u0465\u0466" +
		"\x03\x02\x02\x02\u0466\u0464\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02" +
		"\u0467\u0469\x03\x02\x02\x02\u0468\u046A\x05\xD0i\x02\u0469\u0468\x03" +
		"\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\xA1\x03\x02\x02\x02\u046B" +
		"\u046D\x05\f\x07\x02\u046C\u046B\x03\x02\x02\x02\u046C\u046D\x03\x02\x02" +
		"\x02\u046D\u046E\x03\x02\x02\x02\u046E\u0483\x05\xA4S\x02\u046F\u0470" +
		"\x05\f\x07\x02\u0470\u0471\x07F\x02\x02\u0471\u0472\x05\u015A\xAE\x02" +
		"\u0472\u0483\x03\x02\x02\x02\u0473\u0483\x07\x14\x02\x02\u0474\u0483\x07" +
		"\x15\x02\x02\u0475\u0483\x07\x16\x02\x02\u0476\u0483\x07U\x02\x02\u0477" +
		"\u0483\x07\x10\x02\x02\u0478\u0483\x07>\x02\x02\u0479\u0483\x07/\x02\x02" +
		"\u047A\u0483\x070\x02\x02\u047B\u0483\x07?\x02\x02\u047C\u0483\x07P\x02" +
		"\x02\u047D\u0483\x07)\x02\x02\u047E\u0483\x07 \x02\x02\u047F\u0483\x07" +
		"S\x02\x02\u0480\u0483\x07\x0F\x02\x02\u0481\u0483\x05\xA6T\x02\u0482\u046C" +
		"\x03\x02\x02\x02\u0482\u046F\x03\x02\x02\x02\u0482\u0473\x03\x02\x02\x02" +
		"\u0482\u0474\x03\x02\x02\x02\u0482\u0475\x03\x02\x02\x02\u0482\u0476\x03" +
		"\x02\x02\x02\u0482\u0477\x03\x02\x02\x02\u0482\u0478\x03\x02\x02\x02\u0482" +
		"\u0479\x03\x02\x02\x02\u0482\u047A\x03\x02\x02\x02\u0482\u047B\x03\x02" +
		"\x02\x02\u0482\u047C\x03\x02\x02\x02\u0482\u047D\x03\x02\x02\x02\u0482" +
		"\u047E\x03\x02\x02\x02\u0482\u047F\x03\x02\x02\x02\u0482\u0480\x03\x02" +
		"\x02\x02\u0482\u0481\x03\x02\x02\x02\u0483\xA3\x03\x02\x02\x02\u0484\u0489" +
		"\x05\u011A\x8E\x02\u0485\u0489\x05\xAAV\x02\u0486\u0489\x05\x98M\x02\u0487" +
		"\u0489\x05\u015A\xAE\x02\u0488\u0484\x03\x02\x02\x02\u0488\u0485\x03\x02" +
		"\x02\x02\u0488\u0486\x03\x02\x02\x02\u0488\u0487\x03\x02\x02\x02\u0489" +
		"\xA5\x03\x02\x02\x02\u048A\u048B\x07\x1C\x02\x02\u048B\u048E\x07W\x02" +
		"\x02\u048C\u048F\x05\\/\x02\u048D\u048F\x07\x0F\x02\x02\u048E\u048C\x03" +
		"\x02\x02\x02\u048E\u048D\x03\x02\x02\x02\u048F\u0490\x03\x02\x02\x02\u0490" +
		"\u0491\x07X\x02\x02\u0491\xA7\x03\x02\x02\x02\u0492\u04A1\x05\u0124\x93" +
		"\x02\u0493\u0495\x05\xD0i\x02\u0494\u0493\x03\x02\x02\x02\u0494\u0495" +
		"\x03\x02\x02\x02\u0495\u0497\x03\x02\x02\x02\u0496\u0498\x05\f\x07\x02" +
		"\u0497\u0496\x03\x02\x02\x02\u0497\u0498\x03\x02\x02\x02\u0498\u0499\x03" +
		"\x02\x02\x02\u0499\u04A2\x07\x89\x02\x02\u049A\u04A2\x05\u015A\xAE\x02" +
		"\u049B\u049D\x05\f\x07\x02\u049C\u049E\x07F\x02\x02\u049D\u049C\x03\x02" +
		"\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F" +
		"\u04A0\x05\u015A\xAE\x02\u04A0\u04A2\x03\x02\x02\x02\u04A1\u0494\x03\x02" +
		"\x02\x02\u04A1\u049A\x03\x02\x02\x02\u04A1\u049B\x03\x02\x02\x02\u04A2" +
		"\u04A9\x03\x02\x02\x02\u04A3\u04A5\x07#\x02\x02\u04A4\u04A6\x05\f\x07" +
		"\x02\u04A5\u04A4\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A7" +
		"\x03\x02\x02\x02\u04A7\u04A9\x07\x89\x02\x02\u04A8\u0492\x03\x02\x02\x02" +
		"\u04A8\u04A3\x03\x02\x02\x02\u04A9\xA9\x03\x02\x02\x02\u04AA\u04AB\x07" +
		"\x89\x02\x02\u04AB\xAB\x03\x02\x02\x02\u04AC\u04AD\x05\xAEX\x02\u04AD" +
		"\u04B2\x07[\x02\x02\u04AE\u04B0\x05\xB6\\\x02\u04AF\u04B1\x07|\x02\x02" +
		"\u04B0\u04AF\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B3\x03" +
		"\x02\x02\x02\u04B2\u04AE\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3" +
		"\u04B4\x03\x02\x02\x02\u04B4\u04B5\x07\\\x02\x02\u04B5\xAD\x03\x02\x02" +
		"\x02\u04B6\u04B8\x05\xB2Z\x02\u04B7\u04B9\x05\xD0i\x02\u04B8\u04B7\x03" +
		"\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04BE\x03\x02\x02\x02\u04BA" +
		"\u04BC\x05\f\x07\x02\u04BB\u04BA\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02" +
		"\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04BF\x07\x89\x02\x02\u04BE\u04BB" +
		"\x03\x02\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF\u04C1\x03\x02\x02\x02" +
		"\u04C0\u04C2\x05\xB4[\x02\u04C1\u04C0\x03\x02\x02\x02\u04C1\u04C2\x03" +
		"\x02\x02\x02\u04C2\xAF\x03\x02\x02\x02\u04C3\u04C5\x05\xB2Z\x02\u04C4" +
		"\u04C6\x05\xD0i\x02\u04C5\u04C4\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02" +
		"\x02\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04C9\x07\x89\x02\x02\u04C8\u04CA" +
		"\x05\xB4[\x02\u04C9\u04C8\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02" +
		"\u04CA\u04CB\x03\x02\x02\x02\u04CB\u04CC\x07\x82\x02\x02\u04CC\xB1\x03" +
		"\x02\x02\x02\u04CD\u04CF\x07#\x02\x02\u04CE\u04D0\t\x0F\x02\x02\u04CF" +
		"\u04CE\x03\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0\xB3\x03\x02\x02" +
		"\x02\u04D1\u04D2\x07\x80\x02\x02\u04D2\u04D3\x05\x9EP\x02\u04D3\xB5\x03" +
		"\x02\x02\x02\u04D4\u04D9\x05\xB8]\x02\u04D5\u04D6\x07|\x02\x02\u04D6\u04D8" +
		"\x05\xB8]\x02\u04D7\u04D5\x03\x02\x02\x02\u04D8\u04DB\x03\x02\x02\x02" +
		"\u04D9\u04D7\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA\xB7\x03" +
		"\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DC\u04DF\x05\xBA^\x02\u04DD" +
		"\u04DE\x07g\x02\x02\u04DE\u04E0\x05^0\x02\u04DF\u04DD\x03\x02\x02\x02" +
		"\u04DF\u04E0\x03\x02\x02\x02\u04E0\xB9\x03\x02\x02\x02\u04E1\u04E2\x07" +
		"\x89\x02\x02\u04E2\xBB\x03\x02\x02\x02\u04E3\u04E6\x05\xBE`\x02\u04E4" +
		"\u04E6\x05\xC2b\x02\u04E5\u04E3\x03\x02\x02\x02\u04E5\u04E4\x03\x02\x02" +
		"\x02\u04E6\xBD\x03\x02\x02\x02\u04E7\u04E8\x07\x89\x02\x02\u04E8\xBF\x03" +
		"\x02\x02\x02\u04E9\u04EB\x07.\x02\x02\u04EA\u04E9\x03\x02\x02\x02\u04EA" +
		"\u04EB\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC\u04EF\x072\x02" +
		"\x02\u04ED\u04F0\x07\x89\x02\x02\u04EE\u04F0\x05\xBE`\x02\u04EF\u04ED" +
		"\x03\x02\x02\x02\u04EF\u04EE\x03\x02\x02\x02\u04EF\u04F0\x03\x02\x02\x02" +
		"\u04F0\u04F1\x03\x02\x02\x02\u04F1\u04F3\x07[\x02\x02\u04F2\u04F4\x05" +
		"z>\x02\u04F3\u04F2\x03\x02\x02\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4\u04F5" +
		"\x03\x02\x02\x02\u04F5\u04F6\x07\\\x02\x02\u04F6\xC1\x03\x02\x02\x02\u04F7" +
		"\u04F8\x07\x89\x02\x02\u04F8\xC3\x03\x02\x02\x02\u04F9\u04FA\x072\x02" +
		"\x02\u04FA\u04FB\x07\x89\x02\x02\u04FB\u04FC\x07g\x02\x02\u04FC\u04FD" +
		"\x05\xC6d\x02\u04FD\u04FE\x07\x82\x02\x02\u04FE\xC5\x03\x02\x02\x02\u04FF" +
		"\u0501\x05\f\x07\x02\u0500\u04FF\x03\x02\x02\x02\u0500\u0501\x03\x02\x02" +
		"\x02\u0501\u0502\x03\x02\x02\x02\u0502\u0503\x05\xBC_\x02\u0503\xC7\x03" +
		"\x02\x02\x02\u0504\u050A\x07Q\x02\x02\u0505\u0507\x07N\x02\x02\u0506\u0505" +
		"\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\u0508\x03\x02\x02\x02" +
		"\u0508\u050B\x05\f\x07\x02\u0509\u050B\x07\x81\x02\x02\u050A\u0506\x03" +
		"\x02\x02\x02\u050A\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02\u050C" +
		"\u050D\x05\b\x05\x02\u050D\u050E\x07\x82\x02\x02\u050E\xC9\x03\x02\x02" +
		"\x02\u050F\u0511\x05\xD0i\x02\u0510\u050F\x03\x02\x02\x02\u0510\u0511" +
		"\x03\x02\x02\x02\u0511\u0512\x03\x02\x02\x02\u0512\u0513\x07Q\x02\x02" +
		"\u0513\u0515\x072\x02\x02\u0514\u0516\x05\f\x07\x02\u0515\u0514\x03\x02" +
		"\x02\x02\u0515\u0516\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517" +
		"\u0518\x05\xBC_\x02\u0518\u0519\x07\x82\x02\x02\u0519\xCB\x03\x02\x02" +
		"\x02\u051A\u051B\x07\x0E\x02\x02\u051B\u051C\x07W\x02\x02\u051C\u051D" +
		"\x07\x06\x02\x02\u051D\u051E\x07X\x02\x02\u051E\u051F\x07\x82\x02\x02" +
		"\u051F\xCD\x03\x02\x02\x02\u0520\u0521\x07&\x02\x02\u0521\u0528\x07\x06" +
		"\x02\x02\u0522\u0524\x07[\x02\x02\u0523\u0525\x05z>\x02\u0524\u0523\x03" +
		"\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526" +
		"\u0529\x07\\\x02\x02\u0527\u0529\x05|?\x02\u0528\u0522\x03\x02\x02\x02" +
		"\u0528\u0527\x03\x02\x02\x02\u0529\xCF\x03\x02\x02\x02\u052A\u052C\x05" +
		"\xD2j\x02\u052B\u052A\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D" +
		"\u052B\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E\xD1\x03\x02\x02" +
		"\x02\u052F\u0530\x07Y\x02\x02\u0530\u0532\x07Y\x02\x02\u0531\u0533\x05" +
		"\xD6l\x02\u0532\u0531\x03\x02\x02\x02\u0532\u0533\x03\x02\x02\x02\u0533" +
		"\u0534\x03\x02\x02\x02\u0534\u0535\x07Z\x02\x02\u0535\u0538\x07Z\x02\x02" +
		"\u0536\u0538\x05\xD4k\x02\u0537\u052F\x03\x02\x02\x02\u0537\u0536\x03" +
		"\x02\x02\x02\u0538\xD3\x03\x02\x02\x02\u0539\u053A\x07\f\x02\x02\u053A" +
		"\u053D\x07W\x02\x02\u053B\u053E\x05\xFA~\x02\u053C\u053E\x05^0\x02\u053D" +
		"\u053B\x03\x02\x02\x02\u053D\u053C\x03\x02\x02\x02\u053E\u0540\x03\x02" +
		"\x02\x02\u053F\u0541\x07\x85\x02\x02\u0540\u053F\x03\x02\x02\x02\u0540" +
		"\u0541\x03\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542\u0543\x07X\x02" +
		"\x02\u0543\xD5\x03\x02\x02\x02\u0544\u0549\x05\xD8m\x02\u0545\u0546\x07" +
		"|\x02\x02\u0546\u0548\x05\xD8m\x02\u0547\u0545\x03\x02\x02\x02\u0548\u054B" +
		"\x03\x02\x02\x02\u0549\u0547\x03\x02\x02\x02\u0549\u054A\x03\x02\x02\x02" +
		"\u054A\u054D\x03\x02\x02\x02\u054B\u0549\x03\x02\x02\x02\u054C\u054E\x07" +
		"\x85\x02\x02\u054D\u054C\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E" +
		"\xD7\x03\x02\x02\x02\u054F\u0550\x05\xDAn\x02\u0550\u0551\x07\x81\x02" +
		"\x02\u0551\u0553\x03\x02\x02\x02\u0552\u054F\x03\x02\x02\x02\u0552\u0553" +
		"\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554\u0556\x07\x89\x02\x02" +
		"\u0555\u0557\x05\xDCo\x02\u0556\u0555\x03\x02\x02\x02\u0556\u0557\x03" +
		"\x02\x02\x02\u0557\xD9\x03\x02\x02\x02\u0558\u0559\x07\x89\x02\x02\u0559" +
		"\xDB\x03\x02\x02\x02\u055A\u055C\x07W\x02\x02\u055B\u055D\x05\xDEp\x02" +
		"\u055C\u055B\x03\x02\x02\x02\u055C\u055D\x03\x02\x02\x02\u055D\u055E\x03" +
		"\x02\x02\x02\u055E\u055F\x07X\x02\x02\u055F\xDD\x03\x02\x02\x02\u0560" +
		"\u0562\x05\xE0q\x02\u0561\u0560\x03\x02\x02\x02\u0562\u0563\x03\x02\x02" +
		"\x02\u0563\u0561\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564\xDF" +
		"\x03\x02\x02\x02\u0565\u0566\x07W\x02\x02\u0566\u0567\x05\xDEp\x02\u0567" +
		"\u0568\x07X\x02\x02\u0568\u0577\x03\x02\x02\x02\u0569\u056A\x07Y\x02\x02" +
		"\u056A\u056B\x05\xDEp\x02\u056B\u056C\x07Z\x02\x02\u056C\u0577\x03\x02" +
		"\x02\x02\u056D\u056E\x07[\x02\x02\u056E\u056F\x05\xDEp\x02\u056F\u0570" +
		"\x07\\\x02\x02\u0570\u0577\x03\x02\x02\x02\u0571\u0573\n\x10\x02\x02\u0572" +
		"\u0571\x03\x02\x02\x02\u0573\u0574\x03\x02\x02\x02\u0574\u0572\x03\x02" +
		"\x02\x02\u0574\u0575\x03\x02\x02\x02\u0575\u0577\x03\x02\x02\x02\u0576" +
		"\u0565\x03\x02\x02\x02\u0576\u0569\x03\x02\x02\x02\u0576\u056D\x03\x02" +
		"\x02\x02\u0576\u0572\x03\x02\x02\x02\u0577\xE1\x03\x02\x02\x02\u0578\u057D" +
		"\x05\xE4s\x02\u0579\u057A\x07|\x02\x02\u057A\u057C\x05\xE4s\x02\u057B" +
		"\u0579\x03\x02\x02\x02\u057C\u057F\x03\x02\x02\x02\u057D\u057B\x03\x02" +
		"\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E\xE3\x03\x02\x02\x02\u057F\u057D" +
		"\x03\x02\x02\x02\u0580\u0582\x05\xE6t\x02\u0581\u0583\x05\u0110\x89\x02" +
		"\u0582\u0581\x03\x02\x02\x02\u0582\u0583\x03\x02\x02\x02\u0583\xE5\x03" +
		"\x02\x02\x02\u0584\u058A\x05\xE8u\x02\u0585\u0586\x05\xEAv\x02\u0586\u0587" +
		"\x05\xECw\x02\u0587\u0588\x05\xEEx\x02\u0588\u058A\x03\x02\x02\x02\u0589" +
		"\u0584\x03\x02\x02\x02\u0589\u0585\x03\x02\x02\x02\u058A\xE7\x03\x02\x02" +
		"\x02\u058B\u058D\x05\xF0y\x02\u058C\u058E\x07\x18\x02\x02\u058D\u058C" +
		"\x03\x02\x02\x02\u058D\u058E\x03\x02\x02\x02\u058E\u0590\x03\x02\x02\x02" +
		"\u058F\u058B\x03\x02\x02\x02\u0590\u0593\x03\x02\x02\x02\u0591\u058F\x03" +
		"\x02\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\u0594\x03\x02\x02\x02\u0593" +
		"\u0591\x03\x02\x02\x02\u0594\u0595\x05\xEAv\x02\u0595\xE9\x03\x02\x02" +
		"\x02\u0596\u0597\bv\x01\x02\u0597\u0599\x05\xF8}\x02\u0598\u059A\x05\xD0" +
		"i\x02\u0599\u0598\x03\x02\x02\x02\u0599\u059A\x03\x02\x02\x02\u059A\u05A0" +
		"\x03\x02\x02\x02\u059B\u059C\x07W\x02\x02\u059C\u059D\x05\xE8u\x02\u059D" +
		"\u059E\x07X\x02\x02\u059E\u05A0\x03\x02\x02\x02\u059F\u0596\x03\x02\x02" +
		"\x02\u059F\u059B\x03\x02\x02\x02\u05A0\u05AF\x03\x02\x02\x02\u05A1\u05AB" +
		"\f\x04\x02\x02\u05A2\u05AC\x05\xECw\x02\u05A3\u05A5\x07Y\x02\x02\u05A4" +
		"\u05A6\x05^0\x02\u05A5\u05A4\x03\x02\x02\x02\u05A5\u05A6\x03\x02\x02\x02" +
		"\u05A6\u05A7\x03\x02\x02\x02\u05A7\u05A9\x07Z\x02\x02\u05A8\u05AA\x05" +
		"\xD0i\x02\u05A9\u05A8\x03\x02\x02\x02\u05A9\u05AA\x03\x02\x02\x02\u05AA" +
		"\u05AC\x03\x02\x02\x02\u05AB\u05A2\x03\x02\x02\x02\u05AB\u05A3\x03\x02" +
		"\x02\x02\u05AC\u05AE\x03\x02\x02\x02\u05AD\u05A1\x03\x02\x02\x02\u05AE" +
		"\u05B1\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05AF\u05B0\x03\x02" +
		"\x02\x02\u05B0\xEB\x03\x02\x02\x02\u05B1\u05AF\x03\x02\x02\x02\u05B2\u05B4" +
		"\x07W\x02\x02\u05B3\u05B5\x05\u0106\x84\x02\u05B4\u05B3\x03\x02\x02\x02" +
		"\u05B4\u05B5\x03\x02\x02\x02\u05B5\u05B6\x03\x02\x02\x02\u05B6\u05B8\x07" +
		"X\x02\x02\u05B7\u05B9\x05\xF2z\x02\u05B8\u05B7\x03\x02\x02\x02\u05B8\u05B9" +
		"\x03\x02\x02\x02\u05B9\u05BB\x03\x02\x02\x02\u05BA\u05BC\x05\xF6|\x02" +
		"\u05BB\u05BA\x03\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02\u05BC\u05BE\x03" +
		"\x02\x02\x02\u05BD\u05BF\x05\u0176\xBC\x02\u05BE\u05BD\x03\x02\x02\x02" +
		"\u05BE\u05BF\x03\x02\x02\x02\u05BF\u05C1\x03\x02\x02\x02\u05C0\u05C2\x05" +
		"\xD0i\x02\u05C1\u05C0\x03\x02\x02\x02\u05C1\u05C2\x03\x02\x02\x02\u05C2" +
		"\xED\x03\x02\x02\x02\u05C3\u05C4\x07~\x02\x02\u05C4\u05C6\x05\xA0Q\x02" +
		"\u05C5\u05C7\x05\xFC\x7F\x02\u05C6\u05C5\x03\x02\x02\x02\u05C6\u05C7\x03" +
		"\x02\x02\x02\u05C7\xEF\x03\x02\x02\x02\u05C8\u05CA\t\x11\x02\x02\u05C9" +
		"\u05CB\x05\xD0i\x02\u05CA\u05C9\x03\x02\x02\x02\u05CA\u05CB\x03\x02\x02" +
		"\x02\u05CB\u05D7\x03\x02\x02\x02\u05CC\u05CE\x05\f\x07\x02\u05CD\u05CC" +
		"\x03\x02\x02\x02\u05CD\u05CE\x03\x02\x02\x02\u05CE\u05CF\x03\x02\x02\x02" +
		"\u05CF\u05D1\x07_\x02\x02\u05D0\u05D2\x05\xD0i\x02\u05D1\u05D0\x03\x02" +
		"\x02\x02\u05D1\u05D2\x03\x02\x02\x02\u05D2\u05D4\x03\x02\x02\x02\u05D3" +
		"\u05D5\x05\xF2z\x02\u05D4\u05D3\x03\x02\x02\x02\u05D4\u05D5\x03\x02\x02" +
		"\x02\u05D5\u05D7\x03\x02\x02\x02\u05D6\u05C8\x03\x02\x02\x02\u05D6\u05CD" +
		"\x03\x02\x02\x02\u05D7\xF1\x03\x02\x02\x02\u05D8\u05DA\x05\xF4{\x02\u05D9" +
		"\u05D8\x03\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02\u05DB\u05D9\x03\x02" +
		"\x02\x02\u05DB\u05DC\x03\x02\x02\x02\u05DC\xF3\x03\x02\x02\x02\u05DD\u05DE" +
		"\t\x12\x02\x02\u05DE\xF5\x03\x02\x02\x02\u05DF\u05E0\t\x11\x02\x02\u05E0" +
		"\xF7\x03\x02\x02\x02\u05E1\u05E3\x07\x85\x02\x02\u05E2\u05E1\x03\x02\x02" +
		"\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E4\x03\x02\x02\x02\u05E4\u05E5" +
		"\x05\x06\x04\x02\u05E5\xF9\x03\x02\x02\x02\u05E6\u05E8\x05\x9EP\x02\u05E7" +
		"\u05E9\x05\xFC\x7F\x02\u05E8\u05E7\x03\x02\x02\x02\u05E8\u05E9\x03\x02" +
		"\x02\x02\u05E9\xFB\x03\x02\x02\x02\u05EA\u05F3\x05\xFE\x80\x02\u05EB\u05ED" +
		"\x05\u0100\x81\x02\u05EC\u05EB\x03\x02\x02\x02\u05EC\u05ED\x03\x02\x02" +
		"\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05EF\x05\xECw\x02\u05EF\u05F0" +
		"\x05\xEEx\x02\u05F0\u05F3\x03\x02\x02\x02\u05F1\u05F3\x05\u0102\x82\x02" +
		"\u05F2\u05EA\x03\x02\x02\x02\u05F2\u05EC\x03\x02\x02\x02\u05F2\u05F1\x03" +
		"\x02\x02\x02\u05F3\xFD\x03\x02\x02\x02\u05F4\u05FE\x05\u0100\x81\x02\u05F5" +
		"\u05F7\x05\xF0y\x02\u05F6\u05F5\x03\x02\x02\x02\u05F7\u05F8\x03\x02\x02" +
		"\x02\u05F8\u05F6\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02\x02\u05F9\u05FB" +
		"\x03\x02\x02\x02\u05FA\u05FC\x05\u0100\x81\x02\u05FB\u05FA\x03\x02\x02" +
		"\x02\u05FB\u05FC\x03\x02\x02\x02\u05FC\u05FE\x03\x02\x02\x02\u05FD\u05F4" +
		"\x03\x02\x02\x02\u05FD\u05F6\x03\x02\x02\x02\u05FE\xFF\x03\x02\x02\x02" +
		"\u05FF\u0600\b\x81\x01\x02\u0600\u060E\x05\xECw\x02\u0601\u0603\x07Y\x02" +
		"\x02\u0602\u0604\x05^0\x02\u0603\u0602\x03\x02\x02\x02\u0603\u0604\x03" +
		"\x02\x02\x02\u0604\u0605\x03\x02\x02\x02\u0605\u0607\x07Z\x02\x02\u0606" +
		"\u0608\x05\xD0i\x02\u0607\u0606\x03\x02\x02\x02\u0607\u0608\x03\x02\x02" +
		"\x02\u0608\u060E\x03\x02\x02\x02\u0609\u060A\x07W\x02\x02\u060A\u060B" +
		"\x05\xFE\x80\x02\u060B\u060C\x07X\x02\x02\u060C\u060E\x03\x02\x02\x02" +
		"\u060D\u05FF\x03\x02\x02\x02\u060D\u0601\x03\x02\x02\x02\u060D\u0609\x03" +
		"\x02\x02\x02\u060E\u061E\x03\x02\x02\x02\u060F\u061A\f\x06\x02\x02\u0610" +
		"\u061B\x05\xECw\x02\u0611\u0612\x05\u0100\x81\x02\u0612\u0614\x07Y\x02" +
		"\x02\u0613\u0615\x05^0\x02\u0614\u0613\x03\x02\x02\x02\u0614\u0615\x03" +
		"\x02\x02\x02\u0615\u0616\x03\x02\x02\x02\u0616\u0618\x07Z\x02\x02\u0617" +
		"\u0619\x05\xD0i\x02\u0618\u0617\x03\x02\x02\x02\u0618\u0619\x03\x02\x02" +
		"\x02\u0619\u061B\x03\x02\x02\x02\u061A\u0610\x03\x02\x02\x02\u061A\u0611" +
		"\x03\x02";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\u061B\u061D\x03\x02\x02\x02\u061C\u060F\x03\x02\x02\x02\u061D" +
		"\u0620\x03\x02\x02\x02\u061E\u061C\x03\x02\x02\x02\u061E\u061F\x03\x02" +
		"\x02\x02\u061F\u0101\x03\x02\x02\x02\u0620\u061E\x03\x02\x02\x02\u0621" +
		"\u0623\x05\xF0y\x02\u0622\u0621\x03\x02\x02\x02\u0623\u0626\x03\x02\x02" +
		"\x02\u0624\u0622\x03\x02\x02\x02\u0624\u0625\x03\x02\x02\x02\u0625\u0627" +
		"\x03\x02\x02\x02\u0626\u0624\x03\x02\x02\x02\u0627\u0628\x05\u0104\x83" +
		"\x02\u0628\u0103\x03\x02\x02\x02\u0629\u062A\b\x83\x01\x02\u062A\u062B" +
		"\x07\x85\x02\x02\u062B\u063A\x03\x02\x02\x02\u062C\u0636\f\x04\x02\x02" +
		"\u062D\u0637\x05\xECw\x02\u062E\u0630\x07Y\x02\x02\u062F\u0631\x05^0\x02" +
		"\u0630\u062F\x03\x02\x02\x02\u0630\u0631\x03\x02\x02\x02\u0631\u0632\x03" +
		"\x02\x02\x02\u0632\u0634\x07Z\x02\x02\u0633\u0635\x05\xD0i\x02\u0634\u0633" +
		"\x03\x02\x02\x02\u0634\u0635\x03\x02\x02\x02\u0635\u0637\x03\x02\x02\x02" +
		"\u0636\u062D\x03\x02\x02\x02\u0636\u062E\x03\x02\x02\x02\u0637\u0639\x03" +
		"\x02\x02\x02\u0638\u062C\x03\x02\x02\x02\u0639\u063C\x03\x02\x02\x02\u063A" +
		"\u0638\x03\x02\x02\x02\u063A\u063B\x03\x02\x02\x02\u063B\u0105\x03\x02" +
		"\x02\x02\u063C\u063A\x03\x02\x02\x02\u063D\u0642\x05\u0108\x85\x02\u063E" +
		"\u0640\x07|\x02\x02\u063F\u063E\x03\x02\x02\x02\u063F\u0640\x03\x02\x02" +
		"\x02\u0640\u0641\x03\x02\x02\x02\u0641\u0643\x07\x85\x02\x02\u0642\u063F" +
		"\x03\x02\x02\x02\u0642\u0643\x03\x02\x02\x02\u0643\u0107\x03\x02\x02\x02" +
		"\u0644\u0649\x05\u010A\x86\x02\u0645\u0646\x07|\x02\x02\u0646\u0648\x05" +
		"\u010A\x86\x02\u0647\u0645\x03\x02\x02\x02\u0648\u064B\x03\x02\x02\x02" +
		"\u0649\u0647\x03\x02\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A\u0109\x03" +
		"\x02\x02\x02\u064B\u0649\x03\x02\x02\x02\u064C\u064E\x05\xD0i\x02\u064D" +
		"\u064C\x03\x02\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E\u064F\x03\x02" +
		"\x02\x02\u064F\u0654\x05\x92J\x02\u0650\u0655\x05\xE6t\x02\u0651\u0653" +
		"\x05\xFC\x7F\x02\u0652\u0651\x03\x02\x02\x02\u0652\u0653\x03\x02\x02\x02" +
		"\u0653\u0655\x03\x02\x02\x02\u0654\u0650\x03\x02\x02\x02\u0654\u0652\x03" +
		"\x02\x02\x02\u0655\u0658\x03\x02\x02\x02\u0656\u0657\x07g\x02\x02\u0657" +
		"\u0659\x05\u0114\x8B\x02\u0658\u0656\x03\x02\x02\x02\u0658\u0659\x03\x02" +
		"\x02\x02\u0659\u010B\x03\x02\x02\x02\u065A\u065C\x05\xD0i\x02\u065B\u065A" +
		"\x03\x02\x02\x02\u065B\u065C\x03\x02\x02\x02\u065C\u065E\x03\x02\x02\x02" +
		"\u065D\u065F\x05\x92J\x02\u065E\u065D\x03\x02\x02\x02\u065E\u065F\x03" +
		"\x02\x02\x02\u065F\u0660\x03\x02\x02\x02\u0660\u0662\x05\xE6t\x02\u0661" +
		"\u0663\x05\u012E\x98\x02\u0662\u0661\x03\x02\x02\x02\u0662\u0663\x03\x02" +
		"\x02\x02\u0663\u0664\x03\x02\x02\x02\u0664\u0665\x05\u010E\x88\x02\u0665" +
		"\u010D\x03\x02\x02\x02\u0666\u0668\x05\u0146\xA4\x02\u0667\u0666\x03\x02" +
		"\x02\x02\u0667\u0668\x03\x02\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669" +
		"\u066F\x05f4\x02\u066A\u066F\x05\u016C\xB7\x02\u066B\u066C\x07g\x02\x02" +
		"\u066C\u066D\t\x13\x02\x02\u066D\u066F\x07\x82\x02\x02\u066E\u0667\x03" +
		"\x02\x02\x02\u066E\u066A\x03\x02\x02\x02\u066E\u066B\x03\x02\x02\x02\u066F" +
		"\u010F\x03\x02\x02\x02\u0670\u0676\x05\u0112\x8A\x02\u0671\u0672\x07W" +
		"\x02\x02\u0672\u0673\x05$\x13\x02\u0673\u0674\x07X\x02\x02\u0674\u0676" +
		"\x03\x02\x02\x02\u0675\u0670\x03\x02\x02\x02\u0675\u0671\x03\x02\x02\x02" +
		"\u0676\u0111\x03\x02\x02\x02\u0677\u0678\x07g\x02\x02\u0678\u067B\x05" +
		"\u0114\x8B\x02\u0679\u067B\x05\u0118\x8D\x02\u067A\u0677\x03\x02\x02\x02" +
		"\u067A\u0679\x03\x02\x02\x02\u067B\u0113\x03\x02\x02\x02\u067C\u067F\x05" +
		"X-\x02\u067D\u067F\x05\u0118\x8D\x02\u067E\u067C\x03\x02\x02\x02\u067E" +
		"\u067D\x03\x02\x02\x02\u067F\u0115\x03\x02\x02\x02\u0680\u0682\x05\u0114" +
		"\x8B\x02\u0681\u0683\x07\x85\x02\x02\u0682\u0681\x03\x02\x02\x02\u0682" +
		"\u0683\x03\x02\x02\x02\u0683\u068B\x03\x02\x02\x02\u0684\u0685\x07|\x02" +
		"\x02\u0685\u0687\x05\u0114\x8B\x02\u0686\u0688\x07\x85\x02\x02\u0687\u0686" +
		"\x03\x02\x02\x02\u0687\u0688\x03\x02\x02\x02\u0688\u068A\x03\x02\x02\x02" +
		"\u0689\u0684\x03\x02\x02\x02\u068A\u068D\x03\x02\x02\x02\u068B\u0689\x03" +
		"\x02\x02\x02\u068B\u068C\x03\x02\x02\x02\u068C\u0117\x03\x02\x02\x02\u068D" +
		"\u068B\x03\x02\x02\x02\u068E\u0693\x07[\x02\x02\u068F\u0691\x05\u0116" +
		"\x8C\x02\u0690\u0692\x07|\x02\x02\u0691\u0690\x03\x02\x02\x02\u0691\u0692" +
		"\x03\x02\x02\x02\u0692\u0694\x03\x02\x02\x02\u0693\u068F\x03\x02\x02\x02" +
		"\u0693\u0694\x03\x02\x02\x02\u0694\u0695\x03\x02\x02\x02\u0695\u0696\x07" +
		"\\\x02\x02\u0696\u0119\x03\x02\x02\x02\u0697\u069A\x07\x89\x02\x02\u0698" +
		"\u069A\x05\u015A\xAE\x02\u0699\u0697\x03\x02\x02\x02\u0699\u0698\x03\x02" +
		"\x02\x02\u069A\u011B\x03\x02\x02\x02\u069B\u069C\x05\u011E\x90\x02\u069C" +
		"\u069E\x07[\x02\x02\u069D\u069F\x05\u0126\x94\x02\u069E\u069D\x03\x02" +
		"\x02\x02\u069E\u069F\x03\x02\x02\x02\u069F\u06A0\x03\x02\x02\x02\u06A0" +
		"\u06A1\x07\\\x02\x02\u06A1\u011D\x03\x02\x02\x02\u06A2\u06A4\x05\u0124" +
		"\x93\x02\u06A3\u06A5\x05\xD0i\x02\u06A4\u06A3\x03\x02\x02\x02\u06A4\u06A5" +
		"\x03\x02\x02\x02\u06A5\u06AA\x03\x02\x02\x02\u06A6\u06A8\x05\u0120\x91" +
		"\x02\u06A7\u06A9\x05\u0122\x92\x02\u06A8\u06A7\x03\x02\x02\x02\u06A8\u06A9" +
		"\x03\x02\x02\x02\u06A9\u06AB\x03\x02\x02\x02\u06AA\u06A6\x03\x02\x02\x02" +
		"\u06AA\u06AB\x03\x02\x02\x02\u06AB\u06AD\x03\x02\x02\x02\u06AC\u06AE\x05" +
		"\u0134\x9B\x02\u06AD\u06AC\x03\x02\x02\x02\u06AD\u06AE\x03\x02\x02\x02" +
		"\u06AE\u06BA\x03\x02\x02\x02\u06AF\u06B1\x07O\x02\x02\u06B0\u06B2\x05" +
		"\xD0i\x02\u06B1\u06B0\x03\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02\u06B2" +
		"\u06B7\x03\x02\x02\x02\u06B3\u06B5\x05\u0120\x91\x02\u06B4\u06B6\x05\u0122" +
		"\x92\x02\u06B5\u06B4\x03\x02\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6" +
		"\u06B8\x03\x02\x02\x02\u06B7\u06B3\x03\x02\x02\x02\u06B7\u06B8\x03\x02" +
		"\x02\x02\u06B8\u06BA\x03\x02\x02\x02\u06B9\u06A2\x03\x02\x02\x02\u06B9" +
		"\u06AF\x03\x02\x02\x02\u06BA\u011F\x03\x02\x02\x02\u06BB\u06BD\x05\f\x07" +
		"\x02\u06BC\u06BB\x03\x02\x02\x02\u06BC\u06BD\x03\x02\x02\x02\u06BD\u06BE" +
		"\x03\x02\x02\x02\u06BE\u06BF\x05\u011A\x8E\x02\u06BF\u0121\x03\x02\x02" +
		"\x02\u06C0\u06C1\x07(\x02\x02\u06C1\u0123\x03\x02\x02\x02\u06C2\u06C3" +
		"\t\x0F\x02\x02\u06C3\u0125\x03\x02\x02\x02\u06C4\u06C9\x05\u0128\x95\x02" +
		"\u06C5\u06C6\x05\u013E\xA0\x02\u06C6\u06C7\x07\x80\x02\x02\u06C7\u06C9" +
		"\x03\x02\x02\x02\u06C8\u06C4\x03\x02\x02\x02\u06C8\u06C5\x03\x02\x02\x02" +
		"\u06C9\u06CA\x03\x02\x02\x02\u06CA\u06C8\x03\x02\x02\x02\u06CA\u06CB\x03" +
		"\x02\x02\x02\u06CB\u0127\x03\x02\x02\x02\u06CC\u06CE\x05\xD0i\x02\u06CD" +
		"\u06CC\x03\x02\x02\x02\u06CD\u06CE\x03\x02\x02\x02\u06CE\u06D0\x03\x02" +
		"\x02\x02\u06CF\u06D1\x05\x92J\x02\u06D0\u06CF\x03\x02\x02\x02\u06D0\u06D1" +
		"\x03\x02\x02\x02\u06D1\u06D3\x03\x02\x02\x02\u06D2\u06D4\x05\u012A\x96" +
		"\x02\u06D3\u06D2\x03\x02\x02\x02\u06D3\u06D4\x03\x02\x02\x02\u06D4\u06D5" +
		"\x03\x02\x02\x02\u06D5\u06DD\x07\x82\x02\x02\u06D6\u06DD\x05\u010C\x87" +
		"\x02\u06D7\u06DD\x05\xC8e\x02\u06D8\u06DD\x05\x8AF\x02\u06D9\u06DD\x05" +
		"\u0152\xAA\x02\u06DA\u06DD\x05\x86D\x02\u06DB\u06DD\x05\x8CG\x02\u06DC" +
		"\u06CD\x03\x02\x02\x02\u06DC\u06D6\x03\x02\x02\x02\u06DC\u06D7\x03\x02" +
		"\x02\x02\u06DC\u06D8\x03\x02\x02\x02\u06DC\u06D9\x03\x02\x02\x02\u06DC" +
		"\u06DA\x03\x02\x02\x02\u06DC\u06DB\x03\x02\x02\x02\u06DD\u0129\x03\x02" +
		"\x02\x02\u06DE\u06E3\x05\u012C\x97\x02\u06DF\u06E0\x07|\x02\x02\u06E0" +
		"\u06E2\x05\u012C\x97\x02\u06E1\u06DF\x03\x02\x02\x02\u06E2\u06E5\x03\x02" +
		"\x02\x02\u06E3\u06E1\x03\x02\x02\x02\u06E3\u06E4\x03\x02\x02\x02\u06E4" +
		"\u012B\x03\x02\x02\x02\u06E5\u06E3\x03\x02\x02\x02\u06E6\u06F0\x05\xE6" +
		"t\x02\u06E7\u06E9\x05\u012E\x98\x02\u06E8\u06E7\x03\x02\x02\x02\u06E8" +
		"\u06E9\x03\x02\x02\x02\u06E9\u06EB\x03\x02\x02\x02\u06EA\u06EC\x05\u0132" +
		"\x9A\x02\u06EB\u06EA\x03\x02\x02\x02\u06EB\u06EC\x03\x02\x02\x02\u06EC" +
		"\u06F1\x03\x02\x02\x02\u06ED\u06EF\x05\u0112\x8A\x02\u06EE\u06ED\x03\x02" +
		"\x02\x02\u06EE\u06EF\x03\x02\x02\x02\u06EF\u06F1\x03\x02\x02\x02\u06F0" +
		"\u06E8\x03\x02\x02\x02\u06F0\u06EE\x03\x02\x02\x02\u06F1\u06FB\x03\x02" +
		"\x02\x02\u06F2\u06F4\x07\x89\x02\x02\u06F3\u06F2\x03\x02\x02\x02\u06F3" +
		"\u06F4\x03\x02\x02\x02\u06F4\u06F6\x03\x02\x02\x02\u06F5\u06F7\x05\xD0" +
		"i\x02\u06F6\u06F5\x03\x02\x02\x02\u06F6\u06F7\x03\x02\x02\x02\u06F7\u06F8" +
		"\x03\x02\x02\x02\u06F8\u06F9\x07\x80\x02\x02\u06F9\u06FB\x05^0\x02\u06FA" +
		"\u06E6\x03\x02\x02\x02\u06FA\u06F3\x03\x02\x02\x02\u06FB\u012D\x03\x02" +
		"\x02\x02\u06FC\u06FE\x05\u0130\x99\x02\u06FD\u06FC\x03\x02\x02\x02\u06FE" +
		"\u06FF\x03\x02\x02\x02\u06FF\u06FD\x03\x02\x02\x02\u06FF\u0700\x03\x02" +
		"\x02\x02\u0700\u012F\x03\x02\x02\x02\u0701\u0702\t\x14\x02\x02\u0702\u0131" +
		"\x03\x02\x02\x02\u0703\u0704\x07g\x02\x02\u0704\u0705\x07\x8B\x02\x02" +
		"\u0705\u0706\b\x9A\x01\x02\u0706\u0133\x03\x02\x02\x02\u0707\u0708\x07" +
		"\x80\x02\x02\u0708\u0709\x05\u0136\x9C\x02\u0709\u0135\x03\x02\x02\x02" +
		"\u070A\u070C\x05\u0138\x9D\x02\u070B\u070D\x07\x85\x02\x02\u070C\u070B" +
		"\x03\x02\x02\x02\u070C\u070D\x03\x02\x02\x02\u070D\u0715\x03\x02\x02\x02" +
		"\u070E\u070F\x07|\x02\x02\u070F\u0711\x05\u0138\x9D\x02\u0710\u0712\x07" +
		"\x85\x02\x02\u0711\u0710\x03\x02\x02\x02\u0711\u0712\x03\x02\x02\x02\u0712" +
		"\u0714\x03\x02\x02\x02\u0713\u070E\x03\x02\x02\x02\u0714\u0717\x03\x02" +
		"\x02\x02\u0715\u0713\x03\x02\x02\x02\u0715\u0716\x03\x02\x02\x02\u0716" +
		"\u0137\x03\x02\x02\x02\u0717\u0715\x03\x02\x02\x02\u0718\u071A\x05\xD0" +
		"i\x02\u0719\u0718\x03\x02\x02\x02\u0719\u071A\x03\x02\x02\x02\u071A\u0727" +
		"\x03\x02\x02\x02\u071B\u0728\x05\u013C\x9F\x02\u071C\u071E\x07R\x02\x02" +
		"\u071D\u071F\x05\u013E\xA0\x02\u071E\u071D\x03\x02\x02\x02\u071E\u071F" +
		"\x03\x02\x02\x02\u071F\u0720\x03\x02\x02\x02\u0720\u0728\x05\u013C\x9F" +
		"\x02\u0721\u0723\x05\u013E\xA0\x02\u0722\u0724\x07R\x02\x02\u0723\u0722" +
		"\x03\x02\x02\x02\u0723\u0724\x03\x02\x02\x02\u0724\u0725\x03\x02\x02\x02" +
		"\u0725\u0726\x05\u013C\x9F\x02\u0726\u0728\x03\x02\x02\x02\u0727\u071B" +
		"\x03\x02\x02\x02\u0727\u071C\x03\x02\x02\x02\u0727\u0721\x03\x02\x02\x02" +
		"\u0728\u0139\x03\x02\x02\x02\u0729\u072B\x05\f\x07\x02\u072A\u0729\x03" +
		"\x02\x02\x02\u072A\u072B\x03\x02\x02\x02\u072B\u072C\x03\x02\x02\x02\u072C" +
		"\u072F\x05\u011A\x8E\x02\u072D\u072F\x05\xA6T\x02\u072E\u072A\x03\x02" +
		"\x02\x02\u072E\u072D\x03\x02\x02\x02\u072F\u013B\x03\x02\x02\x02\u0730" +
		"\u0731\x05\u013A\x9E\x02\u0731\u013D\x03\x02\x02\x02\u0732\u0733\t\x15" +
		"\x02\x02\u0733\u013F\x03\x02\x02\x02\u0734\u0735\x076\x02\x02\u0735\u0736" +
		"\x05\u0142\xA2\x02\u0736\u0141\x03\x02\x02\x02\u0737\u0739\x05\x9EP\x02" +
		"\u0738\u073A\x05\u0144\xA3\x02\u0739\u0738\x03\x02\x02\x02\u0739\u073A" +
		"\x03\x02\x02\x02\u073A\u0143\x03\x02\x02\x02\u073B\u073D\x05\xF0y\x02" +
		"\u073C\u073E\x05\u0144\xA3\x02\u073D\u073C\x03\x02\x02\x02\u073D\u073E" +
		"\x03\x02\x02\x02\u073E\u0145\x03\x02\x02\x02\u073F\u0740\x07\x80\x02\x02" +
		"\u0740\u0741\x05\u0148\xA5\x02\u0741\u0147\x03\x02\x02\x02\u0742\u0744" +
		"\x05\u014A\xA6\x02\u0743\u0745\x07\x85\x02\x02\u0744\u0743\x03\x02\x02" +
		"\x02\u0744\u0745\x03\x02\x02\x02\u0745\u074D\x03\x02\x02\x02\u0746\u0747" +
		"\x07|\x02\x02\u0747\u0749\x05\u014A\xA6\x02\u0748\u074A\x07\x85\x02\x02" +
		"\u0749\u0748\x03\x02\x02\x02\u0749\u074A\x03\x02\x02\x02\u074A\u074C\x03" +
		"\x02\x02\x02\u074B\u0746\x03\x02\x02\x02\u074C\u074F\x03\x02\x02\x02\u074D" +
		"\u074B\x03\x02\x02\x02\u074D\u074E\x03\x02\x02\x02\u074E\u0149\x03\x02" +
		"\x02\x02\u074F\u074D\x03\x02\x02\x02\u0750\u0757\x05\u014C\xA7\x02\u0751" +
		"\u0753\x07W\x02\x02\u0752\u0754\x05$\x13\x02\u0753\u0752\x03\x02\x02\x02" +
		"\u0753\u0754\x03\x02\x02\x02\u0754\u0755\x03\x02\x02\x02\u0755\u0758\x07" +
		"X\x02\x02\u0756\u0758\x05\u0118\x8D\x02\u0757\u0751\x03\x02\x02\x02\u0757" +
		"\u0756\x03\x02\x02\x02\u0758\u014B\x03\x02\x02\x02\u0759\u075C\x05\u013A" +
		"\x9E\x02\u075A\u075C\x07\x89\x02\x02\u075B\u0759\x03\x02\x02\x02\u075B" +
		"\u075A\x03\x02\x02\x02\u075C\u014D\x03\x02\x02\x02\u075D\u075E\x076\x02" +
		"\x02\u075E\u075F\x05\u017E\xC0\x02\u075F\u014F\x03\x02\x02\x02\u0760\u0764" +
		"\x076\x02\x02\u0761\u0762\x07\x06\x02\x02\u0762\u0765\x07\x89\x02\x02" +
		"\u0763\u0765\x07\x91\x02\x02\u0764\u0761\x03\x02\x02\x02\u0764\u0763\x03" +
		"\x02\x02\x02\u0765\u0151\x03\x02\x02\x02\u0766\u0767\x07F\x02\x02\u0767" +
		"\u0768\x07h\x02\x02\u0768\u0769\x05\u0154\xAB\x02\u0769\u076A\x07i\x02" +
		"\x02\u076A\u076B\x05|?\x02\u076B\u0153\x03\x02\x02\x02\u076C\u0771\x05" +
		"\u0156\xAC\x02\u076D\u076E\x07|\x02\x02\u076E\u0770\x05\u0156\xAC\x02" +
		"\u076F\u076D\x03\x02\x02\x02\u0770\u0773\x03\x02\x02\x02\u0771\u076F\x03" +
		"\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772\u0155\x03\x02\x02\x02\u0773" +
		"\u0771\x03\x02\x02\x02\u0774\u0777\x05\u0158\xAD\x02\u0775\u0777\x05\u010A" +
		"\x86\x02\u0776\u0774\x03\x02\x02\x02\u0776\u0775\x03\x02\x02\x02\u0777" +
		"\u0157\x03\x02\x02\x02\u0778\u0779\x07F\x02\x02\u0779\u077A\x07h\x02\x02" +
		"\u077A\u077B\x05\u0154\xAB\x02\u077B\u077C\x07i\x02\x02\u077C\u077E\x03" +
		"\x02\x02\x02\u077D\u0778\x03\x02\x02\x02\u077D\u077E\x03\x02\x02\x02\u077E" +
		"\u077F\x03\x02\x02\x02\u077F\u0782\x07\x17\x02\x02\u0780\u0782\x07N\x02" +
		"\x02\u0781\u077D\x03\x02\x02\x02\u0781\u0780\x03\x02\x02\x02\u0782\u078E" +
		"\x03\x02\x02\x02\u0783\u0785\x07\x85\x02\x02\u0784\u0783\x03\x02\x02\x02" +
		"\u0784\u0785\x03\x02\x02\x02\u0785\u0787\x03\x02\x02\x02\u0786\u0788\x07" +
		"\x89\x02\x02\u0787\u0786\x03\x02\x02\x02\u0787\u0788\x03\x02\x02\x02\u0788" +
		"\u078F\x03\x02\x02\x02\u0789\u078B\x07\x89\x02\x02\u078A\u0789\x03\x02" +
		"\x02\x02\u078A\u078B\x03\x02\x02\x02\u078B\u078C\x03\x02\x02\x02\u078C" +
		"\u078D\x07g\x02\x02\u078D\u078F\x05\xFA~\x02\u078E\u0784\x03\x02\x02\x02" +
		"\u078E\u078A\x03\x02\x02\x02\u078F\u0159\x03\x02\x02\x02\u0790\u0791\x05" +
		"\u015E\xB0\x02\u0791\u0793\x07h\x02\x02\u0792\u0794\x05\u0160\xB1\x02" +
		"\u0793\u0792\x03\x02\x02\x02\u0793\u0794\x03\x02\x02\x02\u0794\u0795\x03" +
		"\x02\x02\x02\u0795\u0796\x07i\x02\x02\u0796\u015B\x03\x02\x02\x02\u0797" +
		"\u07A3\x05\u015A\xAE\x02\u0798\u079B\x05\u014E\xA8\x02\u0799\u079B\x05" +
		"\u0150\xA9\x02\u079A\u0798\x03\x02\x02\x02\u079A\u0799\x03\x02\x02\x02" +
		"\u079B\u079C\x03\x02\x02\x02\u079C\u079E\x07h\x02\x02\u079D\u079F\x05" +
		"\u0160\xB1\x02\u079E\u079D\x03\x02\x02\x02\u079E\u079F\x03\x02\x02\x02" +
		"\u079F\u07A0\x03\x02\x02\x02\u07A0\u07A1\x07i\x02\x02\u07A1\u07A3\x03" +
		"\x02\x02\x02\u07A2\u0797\x03\x02\x02\x02\u07A2\u079A\x03\x02\x02\x02\u07A3" +
		"\u015D\x03\x02\x02\x02\u07A4\u07A5\x07\x89\x02\x02\u07A5\u015F\x03\x02" +
		"\x02\x02\u07A6\u07A8\x05\u0162\xB2\x02\u07A7\u07A9\x07\x85\x02\x02\u07A8" +
		"\u07A7\x03\x02\x02\x02\u07A8\u07A9\x03\x02\x02\x02\u07A9\u07B1\x03\x02" +
		"\x02\x02\u07AA\u07AB\x07|\x02\x02\u07AB\u07AD\x05\u0162\xB2\x02\u07AC" +
		"\u07AE\x07\x85\x02\x02\u07AD\u07AC\x03\x02\x02\x02\u07AD\u07AE\x03\x02" +
		"\x02\x02\u07AE\u07B0\x03\x02\x02\x02\u07AF\u07AA\x03\x02\x02\x02\u07B0" +
		"\u07B3\x03\x02\x02\x02\u07B1\u07AF\x03\x02\x02\x02\u07B1\u07B2\x03\x02" +
		"\x02\x02\u07B2\u0161\x03\x02\x02\x02\u07B3\u07B1\x03\x02\x02\x02\u07B4" +
		"\u07B8\x05\xFA~\x02\u07B5\u07B8\x05^0\x02\u07B6\u07B8\x05\x06\x04\x02" +
		"\u07B7\u07B4\x03\x02\x02\x02\u07B7\u07B5\x03\x02\x02\x02\u07B7\u07B6\x03" +
		"\x02\x02\x02\u07B8\u0163\x03\x02\x02\x02\u07B9\u07BA\x07N\x02\x02\u07BA" +
		"\u07C0\x05\f\x07\x02\u07BB\u07C1\x07\x89\x02\x02\u07BC\u07BE\x07F\x02" +
		"\x02\u07BD\u07BC\x03\x02\x02\x02\u07BD\u07BE\x03\x02\x02\x02\u07BE\u07BF" +
		"\x03\x02\x02\x02\u07BF\u07C1\x05\u015A\xAE\x02\u07C0\u07BB\x03\x02\x02" +
		"\x02\u07C0\u07BD\x03\x02\x02\x02\u07C1\u0165\x03\x02\x02\x02\u07C2\u07C4" +
		"\x07&\x02\x02\u07C3\u07C2\x03\x02\x02\x02\u07C3\u07C4\x03\x02\x02\x02" +
		"\u07C4\u07C5\x03\x02\x02\x02\u07C5\u07C6\x07F\x02\x02\u07C6\u07C7\x05" +
		"|?\x02\u07C7\u0167\x03\x02\x02\x02\u07C8\u07C9\x07F\x02\x02\u07C9\u07CA" +
		"\x07h\x02\x02\u07CA\u07CB\x07i\x02\x02\u07CB\u07CC\x05|?\x02\u07CC\u0169" +
		"\x03\x02\x02\x02\u07CD\u07CE\x07K\x02\x02\u07CE\u07CF\x05f4\x02\u07CF" +
		"\u07D0\x05\u016E\xB8\x02\u07D0\u016B\x03\x02\x02\x02\u07D1\u07D3\x07K" +
		"\x02\x02\u07D2\u07D4\x05\u0146\xA4\x02\u07D3\u07D2\x03\x02\x02\x02\u07D3" +
		"\u07D4\x03\x02\x02\x02\u07D4\u07D5\x03\x02\x02\x02\u07D5\u07D6\x05f4\x02" +
		"\u07D6\u07D7\x05\u016E\xB8\x02\u07D7\u016D\x03\x02\x02\x02\u07D8\u07DA" +
		"\x05\u0170\xB9\x02\u07D9\u07D8\x03\x02\x02\x02\u07DA\u07DB\x03\x02\x02" +
		"\x02\u07DB\u07D9\x03\x02\x02\x02\u07DB\u07DC\x03\x02\x02\x02\u07DC\u016F" +
		"\x03\x02\x02\x02\u07DD\u07DE\x07\x13\x02\x02\u07DE\u07DF\x07W\x02\x02" +
		"\u07DF\u07E0\x05\u0172\xBA\x02\u07E0\u07E1\x07X\x02\x02\u07E1\u07E2\x05" +
		"f4\x02\u07E2\u0171\x03\x02\x02\x02\u07E3\u07E5\x05\xD0i\x02\u07E4\u07E3" +
		"\x03\x02\x02\x02\u07E4\u07E5\x03\x02\x02\x02\u07E5\u07E6\x03\x02\x02\x02" +
		"\u07E6\u07E9\x05\x9EP\x02\u07E7\u07EA\x05\xE6t\x02\u07E8\u07EA\x05\xFC" +
		"\x7F\x02\u07E9\u07E7\x03\x02\x02\x02\u07E9\u07E8\x03\x02\x02\x02\u07E9" +
		"\u07EA\x03\x02\x02\x02\u07EA\u07ED\x03\x02\x02\x02\u07EB\u07ED\x07\x85" +
		"\x02\x02\u07EC\u07E4\x03\x02\x02\x02\u07EC\u07EB\x03\x02\x02\x02\u07ED" +
		"\u0173\x03\x02\x02\x02\u07EE\u07F0\x07I\x02\x02\u07EF\u07F1\x05X-\x02" +
		"\u07F0\u07EF\x03\x02\x02\x02\u07F0\u07F1\x03\x02\x02\x02\u07F1\u0175\x03" +
		"\x02\x02\x02\u07F2\u07F5\x05\u0178\xBD\x02\u07F3\u07F5\x05\u017C\xBF\x02" +
		"\u07F4\u07F2\x03\x02\x02\x02\u07F4\u07F3\x03\x02\x02\x02\u07F5\u0177\x03" +
		"\x02\x02\x02\u07F6\u07F7\x07I\x02\x02\u07F7\u07F9\x07W\x02\x02\u07F8\u07FA" +
		"\x05\u017A\xBE\x02\u07F9\u07F8\x03\x02\x02\x02\u07F9\u07FA\x03\x02\x02" +
		"\x02\u07FA\u07FB\x03\x02\x02\x02\u07FB\u07FC\x07X\x02\x02\u07FC\u0179" +
		"\x03\x02\x02\x02\u07FD\u07FF\x05\xFA~\x02\u07FE\u0800\x07\x85\x02\x02" +
		"\u07FF\u07FE\x03\x02\x02\x02\u07FF\u0800\x03\x02\x02\x02\u0800\u0808\x03" +
		"\x02\x02\x02\u0801\u0802\x07|\x02\x02\u0802\u0804\x05\xFA~\x02\u0803\u0805" +
		"\x07\x85\x02\x02\u0804\u0803\x03\x02\x02\x02\u0804\u0805\x03\x02\x02\x02" +
		"\u0805\u0807\x03\x02\x02\x02\u0806\u0801\x03\x02\x02\x02\u0807\u080A\x03" +
		"\x02\x02\x02\u0808\u0806\x03\x02\x02\x02\u0808\u0809\x03\x02\x02\x02\u0809" +
		"\u017B\x03\x02\x02\x02\u080A\u0808\x03\x02\x02\x02\u080B\u080C\x074\x02" +
		"\x02\u080C\u080D\x07W\x02\x02\u080D\u080E\x05^0\x02\u080E\u080F\x07X\x02" +
		"\x02\u080F\u0812\x03\x02\x02\x02\u0810\u0812\x074\x02\x02\u0811\u080B" +
		"\x03\x02\x02\x02\u0811\u0810\x03\x02\x02\x02\u0812\u017D\x03\x02\x02\x02" +
		"\u0813\u0816\x073\x02\x02\u0814\u0815\x07Y\x02\x02\u0815\u0817\x07Z\x02" +
		"\x02\u0816\u0814\x03\x02\x02\x02\u0816\u0817\x03\x02\x02\x02\u0817\u0849" +
		"\x03\x02\x02\x02\u0818\u081B\x07\x1E\x02\x02\u0819\u081A\x07Y\x02\x02" +
		"\u081A\u081C\x07Z\x02\x02\u081B\u0819\x03\x02\x02\x02\u081B\u081C\x03" +
		"\x02\x02\x02\u081C\u0849\x03\x02\x02\x02\u081D\u0849\x07]\x02\x02\u081E" +
		"\u0849\x07^\x02\x02\u081F\u0849\x07_\x02\x02\u0820\u0849\x07`\x02\x02" +
		"\u0821\u0849\x07a\x02\x02\u0822\u0849\x07b\x02\x02\u0823\u0849\x07c\x02" +
		"\x02\u0824\u0849\x07d\x02\x02\u0825\u0849\x07e\x02\x02\u0826\u0849\x07" +
		"f\x02\x02\u0827\u0849\x07g\x02\x02\u0828\u0849\x07i\x02\x02\u0829\u0849" +
		"\x07h\x02\x02\u082A\u0849\x07w\x02\x02\u082B\u0849\x07j\x02\x02\u082C" +
		"\u0849\x07k\x02\x02\u082D\u0849\x07l\x02\x02\u082E\u0849\x07g\x02\x02" +
		"\u082F\u0849\x07n\x02\x02\u0830\u0849\x07o\x02\x02\u0831\u0849\x07p\x02" +
		"\x02\u0832\u0849\x07q\x02\x02\u0833\u0834\x07h\x02\x02\u0834\u0849\x07" +
		"h\x02\x02\u0835\u0836\x07i\x02\x02\u0836\u0849\x07i\x02\x02\u0837\u0849" +
		"\x07s\x02\x02\u0838\u0849\x07r\x02\x02\u0839\u0849\x07t\x02\x02\u083A" +
		"\u0849\x07u\x02\x02\u083B\u0849\x07v\x02\x02\u083C\u0849\x07w\x02\x02" +
		"\u083D\u0849\x07x\x02\x02\u083E\u0849\x07y\x02\x02\u083F\u0849\x07z\x02" +
		"\x02\u0840\u0849\x07{\x02\x02\u0841\u0849\x07|\x02\x02\u0842\u0849\x07" +
		"}\x02\x02\u0843\u0849\x07~\x02\x02\u0844\u0845\x07W\x02\x02\u0845\u0849" +
		"\x07X\x02\x02\u0846\u0847\x07Y\x02\x02\u0847\u0849\x07Z\x02\x02\u0848" +
		"\u0813\x03\x02\x02\x02\u0848\u0818\x03\x02\x02\x02\u0848\u081D\x03\x02" +
		"\x02\x02\u0848\u081E\x03\x02\x02\x02\u0848\u081F\x03\x02\x02\x02\u0848" +
		"\u0820\x03\x02\x02\x02\u0848\u0821\x03\x02\x02\x02\u0848\u0822\x03\x02" +
		"\x02\x02\u0848\u0823\x03\x02\x02\x02\u0848\u0824\x03\x02\x02\x02\u0848" +
		"\u0825\x03\x02\x02\x02\u0848\u0826\x03\x02\x02\x02\u0848\u0827\x03\x02" +
		"\x02\x02\u0848\u0828\x03\x02\x02\x02\u0848\u0829\x03\x02\x02\x02\u0848" +
		"\u082A\x03\x02\x02\x02\u0848\u082B\x03\x02\x02\x02\u0848\u082C\x03\x02" +
		"\x02\x02\u0848\u082D\x03\x02\x02\x02\u0848\u082E\x03\x02\x02\x02\u0848" +
		"\u082F\x03\x02\x02\x02\u0848\u0830\x03\x02\x02\x02\u0848\u0831\x03\x02" +
		"\x02\x02\u0848\u0832\x03\x02\x02\x02\u0848\u0833\x03\x02\x02\x02\u0848" +
		"\u0835\x03\x02\x02\x02\u0848\u0837\x03\x02\x02\x02\u0848\u0838\x03\x02" +
		"\x02\x02\u0848\u0839\x03\x02\x02\x02\u0848\u083A\x03\x02\x02\x02\u0848" +
		"\u083B\x03\x02\x02\x02\u0848\u083C\x03\x02\x02\x02\u0848\u083D\x03\x02" +
		"\x02\x02\u0848\u083E\x03\x02\x02\x02\u0848\u083F\x03\x02\x02\x02\u0848" +
		"\u0840\x03\x02\x02\x02\u0848\u0841\x03\x02\x02\x02\u0848\u0842\x03\x02" +
		"\x02\x02\u0848\u0843\x03\x02\x02\x02\u0848\u0844\x03\x02\x02\x02\u0848" +
		"\u0846\x03\x02\x02\x02\u0849\u017F\x03\x02\x02\x02\u084A\u084B\t\x16\x02" +
		"\x02\u084B\u0181\x03\x02\x02\x02\u0130\u0183\u018A\u0193\u0197\u01A0\u01A3" +
		"\u01A7\u01AF\u01B6\u01B9\u01BE\u01C3\u01C9\u01D1\u01D3\u01DC\u01E0\u01E4" +
		"\u01E7\u01EB\u01EE\u01F5\u01F9\u01FC\u01FF\u0202\u0208\u020C\u0210\u021E" +
		"\u0222\u0228\u022F\u0235\u0239\u023D\u023F\u0247\u024C\u0259\u0260\u026C" +
		"\u0276\u027B\u027F\u0286\u0289\u0291\u0295\u0298\u029F\u02A6\u02AA\u02AF" +
		"\u02B3\u02B6\u02BB\u02CA\u02D1\u02D9\u02E1\u02EA\u02F1\u02F8\u0300\u0308" +
		"\u0310\u0318\u0320\u0328\u0331\u0339\u0342\u0349\u0351\u0354\u0357\u035D" +
		"\u0363\u0369\u0370\u0379\u0381\u0385\u038C\u038E\u03A2\u03A6\u03AC\u03B1" +
		"\u03B5\u03B8\u03BF\u03C6\u03CA\u03D3\u03E0\u03EB\u03F4\u03FC\u0403\u0408" +
		"\u0412\u0417\u041E\u0421\u0426\u042B\u0440\u0445\u0448\u0453\u0459\u045E" +
		"\u0461\u0466\u0469\u046C\u0482\u0488\u048E\u0494\u0497\u049D\u04A1\u04A5" +
		"\u04A8\u04B0\u04B2\u04B8\u04BB\u04BE\u04C1\u04C5\u04C9\u04CF\u04D9\u04DF" +
		"\u04E5\u04EA\u04EF\u04F3\u0500\u0506\u050A\u0510\u0515\u0524\u0528\u052D" +
		"\u0532\u0537\u053D\u0540\u0549\u054D\u0552\u0556\u055C\u0563\u0574\u0576" +
		"\u057D\u0582\u0589\u058D\u0591\u0599\u059F\u05A5\u05A9\u05AB\u05AF\u05B4" +
		"\u05B8\u05BB\u05BE\u05C1\u05C6\u05CA\u05CD\u05D1\u05D4\u05D6\u05DB\u05E2" +
		"\u05E8\u05EC\u05F2\u05F8\u05FB\u05FD\u0603\u0607\u060D\u0614\u0618\u061A" +
		"\u061E\u0624\u0630\u0634\u0636\u063A\u063F\u0642\u0649\u064D\u0652\u0654" +
		"\u0658\u065B\u065E\u0662\u0667\u066E\u0675\u067A\u067E\u0682\u0687\u068B" +
		"\u0691\u0693\u0699\u069E\u06A4\u06A8\u06AA\u06AD\u06B1\u06B5\u06B7\u06B9" +
		"\u06BC\u06C8\u06CA\u06CD\u06D0\u06D3\u06DC\u06E3\u06E8\u06EB\u06EE\u06F0" +
		"\u06F3\u06F6\u06FA\u06FF\u070C\u0711\u0715\u0719\u071E\u0723\u0727\u072A" +
		"\u072E\u0739\u073D\u0744\u0749\u074D\u0753\u0757\u075B\u0764\u0771\u0776" +
		"\u077D\u0781\u0784\u0787\u078A\u078E\u0793\u079A\u079E\u07A2\u07A8\u07AD" +
		"\u07B1\u07B7\u07BD\u07C0\u07C3\u07D3\u07DB\u07E4\u07E9\u07EC\u07F0\u07F4" +
		"\u07F9\u07FF\u0804\u0808\u0811\u0816\u081B\u0848";
	public static readonly _serializedATN: string = Utils.join(
		[
			CPP14Parser._serializedATNSegment0,
			CPP14Parser._serializedATNSegment1,
			CPP14Parser._serializedATNSegment2,
			CPP14Parser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CPP14Parser.__ATN) {
			CPP14Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CPP14Parser._serializedATN));
		}

		return CPP14Parser.__ATN;
	}

}

export class TranslationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CPP14Parser.EOF, 0); }
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_translationUnit; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTranslationUnit) {
			listener.enterTranslationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTranslationUnit) {
			listener.exitTranslationUnit(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public This(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.This, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public idExpression(): IdExpressionContext | undefined {
		return this.tryGetRuleContext(0, IdExpressionContext);
	}
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
}


export class IdExpressionContext extends ParserRuleContext {
	public unqualifiedId(): UnqualifiedIdContext | undefined {
		return this.tryGetRuleContext(0, UnqualifiedIdContext);
	}
	public qualifiedId(): QualifiedIdContext | undefined {
		return this.tryGetRuleContext(0, QualifiedIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_idExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterIdExpression) {
			listener.enterIdExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitIdExpression) {
			listener.exitIdExpression(this);
		}
	}
}


export class UnqualifiedIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public operatorFunctionId(): OperatorFunctionIdContext | undefined {
		return this.tryGetRuleContext(0, OperatorFunctionIdContext);
	}
	public conversionFunctionId(): ConversionFunctionIdContext | undefined {
		return this.tryGetRuleContext(0, ConversionFunctionIdContext);
	}
	public literalOperatorId(): LiteralOperatorIdContext | undefined {
		return this.tryGetRuleContext(0, LiteralOperatorIdContext);
	}
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Tilde, 0); }
	public className(): ClassNameContext | undefined {
		return this.tryGetRuleContext(0, ClassNameContext);
	}
	public decltypeSpecifier(): DecltypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypeSpecifierContext);
	}
	public templateId(): TemplateIdContext | undefined {
		return this.tryGetRuleContext(0, TemplateIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unqualifiedId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterUnqualifiedId) {
			listener.enterUnqualifiedId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitUnqualifiedId) {
			listener.exitUnqualifiedId(this);
		}
	}
}


export class QualifiedIdContext extends ParserRuleContext {
	public nestedNameSpecifier(): NestedNameSpecifierContext {
		return this.getRuleContext(0, NestedNameSpecifierContext);
	}
	public unqualifiedId(): UnqualifiedIdContext {
		return this.getRuleContext(0, UnqualifiedIdContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_qualifiedId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterQualifiedId) {
			listener.enterQualifiedId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitQualifiedId) {
			listener.exitQualifiedId(this);
		}
	}
}


export class NestedNameSpecifierContext extends ParserRuleContext {
	public Doublecolon(): TerminalNode { return this.getToken(CPP14Parser.Doublecolon, 0); }
	public theTypeName(): TheTypeNameContext | undefined {
		return this.tryGetRuleContext(0, TheTypeNameContext);
	}
	public namespaceName(): NamespaceNameContext | undefined {
		return this.tryGetRuleContext(0, NamespaceNameContext);
	}
	public decltypeSpecifier(): DecltypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypeSpecifierContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_nestedNameSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNestedNameSpecifier) {
			listener.enterNestedNameSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNestedNameSpecifier) {
			listener.exitNestedNameSpecifier(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaIntroducer(): LambdaIntroducerContext {
		return this.getRuleContext(0, LambdaIntroducerContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public lambdaDeclarator(): LambdaDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, LambdaDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdaExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
}


export class LambdaIntroducerContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode { return this.getToken(CPP14Parser.RightBracket, 0); }
	public lambdaCapture(): LambdaCaptureContext | undefined {
		return this.tryGetRuleContext(0, LambdaCaptureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdaIntroducer; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterLambdaIntroducer) {
			listener.enterLambdaIntroducer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitLambdaIntroducer) {
			listener.exitLambdaIntroducer(this);
		}
	}
}


export class LambdaCaptureContext extends ParserRuleContext {
	public captureList(): CaptureListContext | undefined {
		return this.tryGetRuleContext(0, CaptureListContext);
	}
	public captureDefault(): CaptureDefaultContext | undefined {
		return this.tryGetRuleContext(0, CaptureDefaultContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdaCapture; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterLambdaCapture) {
			listener.enterLambdaCapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitLambdaCapture) {
			listener.exitLambdaCapture(this);
		}
	}
}


export class CaptureDefaultContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_captureDefault; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterCaptureDefault) {
			listener.enterCaptureDefault(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitCaptureDefault) {
			listener.exitCaptureDefault(this);
		}
	}
}


export class CaptureListContext extends ParserRuleContext {
	public capture(): CaptureContext[];
	public capture(i: number): CaptureContext;
	public capture(i?: number): CaptureContext | CaptureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaptureContext);
		} else {
			return this.getRuleContext(i, CaptureContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_captureList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterCaptureList) {
			listener.enterCaptureList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitCaptureList) {
			listener.exitCaptureList(this);
		}
	}
}


export class CaptureContext extends ParserRuleContext {
	public simpleCapture(): SimpleCaptureContext | undefined {
		return this.tryGetRuleContext(0, SimpleCaptureContext);
	}
	public initcapture(): InitcaptureContext | undefined {
		return this.tryGetRuleContext(0, InitcaptureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_capture; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterCapture) {
			listener.enterCapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitCapture) {
			listener.exitCapture(this);
		}
	}
}


export class SimpleCaptureContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.This, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simpleCapture; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterSimpleCapture) {
			listener.enterSimpleCapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitSimpleCapture) {
			listener.exitSimpleCapture(this);
		}
	}
}


export class InitcaptureContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initcapture; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterInitcapture) {
			listener.enterInitcapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitInitcapture) {
			listener.exitInitcapture(this);
		}
	}
}


export class LambdaDeclaratorContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public parameterDeclarationClause(): ParameterDeclarationClauseContext | undefined {
		return this.tryGetRuleContext(0, ParameterDeclarationClauseContext);
	}
	public Mutable(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mutable, 0); }
	public exceptionSpecification(): ExceptionSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecificationContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public trailingReturnType(): TrailingReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdaDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterLambdaDeclarator) {
			listener.enterLambdaDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitLambdaDeclarator) {
			listener.exitLambdaDeclarator(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public simpleTypeSpecifier(): SimpleTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpleTypeSpecifierContext);
	}
	public typeNameSpecifier(): TypeNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeNameSpecifierContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Dot, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Arrow, 0); }
	public idExpression(): IdExpressionContext | undefined {
		return this.tryGetRuleContext(0, IdExpressionContext);
	}
	public pseudoDestructorName(): PseudoDestructorNameContext | undefined {
		return this.tryGetRuleContext(0, PseudoDestructorNameContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public Dynamic_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Dynamic_cast, 0); }
	public Static_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Static_cast, 0); }
	public Reinterpret_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Reinterpret_cast, 0); }
	public Const_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Const_cast, 0); }
	public typeIdOfTheTypeId(): TypeIdOfTheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TypeIdOfTheTypeIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
}


export class TypeIdOfTheTypeIdContext extends ParserRuleContext {
	public Typeid_(): TerminalNode { return this.getToken(CPP14Parser.Typeid_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeIdOfTheTypeId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTypeIdOfTheTypeId) {
			listener.enterTypeIdOfTheTypeId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTypeIdOfTheTypeId) {
			listener.exitTypeIdOfTheTypeId(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public initializerList(): InitializerListContext {
		return this.getRuleContext(0, InitializerListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expressionList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


export class PseudoDestructorNameContext extends ParserRuleContext {
	public Tilde(): TerminalNode { return this.getToken(CPP14Parser.Tilde, 0); }
	public theTypeName(): TheTypeNameContext[];
	public theTypeName(i: number): TheTypeNameContext;
	public theTypeName(i?: number): TheTypeNameContext | TheTypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TheTypeNameContext);
		} else {
			return this.getRuleContext(i, TheTypeNameContext);
		}
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public decltypeSpecifier(): DecltypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pseudoDestructorName; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterPseudoDestructorName) {
			listener.enterPseudoDestructorName(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitPseudoDestructorName) {
			listener.exitPseudoDestructorName(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	public Sizeof(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Sizeof, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Alignof(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Alignof, 0); }
	public noExceptExpression(): NoExceptExpressionContext | undefined {
		return this.tryGetRuleContext(0, NoExceptExpressionContext);
	}
	public newExpression(): NewExpressionContext | undefined {
		return this.tryGetRuleContext(0, NewExpressionContext);
	}
	public deleteExpression(): DeleteExpressionContext | undefined {
		return this.tryGetRuleContext(0, DeleteExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Or, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Plus, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Tilde, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Minus, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
}


export class NewExpressionContext extends ParserRuleContext {
	public New(): TerminalNode { return this.getToken(CPP14Parser.New, 0); }
	public newTypeId(): NewTypeIdContext | undefined {
		return this.tryGetRuleContext(0, NewTypeIdContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public newPlacement(): NewPlacementContext | undefined {
		return this.tryGetRuleContext(0, NewPlacementContext);
	}
	public newInitializer(): NewInitializerContext | undefined {
		return this.tryGetRuleContext(0, NewInitializerContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
}


export class NewPlacementContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newPlacement; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNewPlacement) {
			listener.enterNewPlacement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNewPlacement) {
			listener.exitNewPlacement(this);
		}
	}
}


export class NewTypeIdContext extends ParserRuleContext {
	public typeSpecifierSeq(): TypeSpecifierSeqContext {
		return this.getRuleContext(0, TypeSpecifierSeqContext);
	}
	public newDeclarator(): NewDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NewDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newTypeId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNewTypeId) {
			listener.enterNewTypeId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNewTypeId) {
			listener.exitNewTypeId(this);
		}
	}
}


export class NewDeclaratorContext extends ParserRuleContext {
	public pointerOperator(): PointerOperatorContext | undefined {
		return this.tryGetRuleContext(0, PointerOperatorContext);
	}
	public newDeclarator(): NewDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NewDeclaratorContext);
	}
	public noPointerNewDeclarator(): NoPointerNewDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerNewDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNewDeclarator) {
			listener.enterNewDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNewDeclarator) {
			listener.exitNewDeclarator(this);
		}
	}
}


export class NoPointerNewDeclaratorContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(CPP14Parser.LeftBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightBracket(): TerminalNode { return this.getToken(CPP14Parser.RightBracket, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public noPointerNewDeclarator(): NoPointerNewDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerNewDeclaratorContext);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noPointerNewDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNoPointerNewDeclarator) {
			listener.enterNoPointerNewDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNoPointerNewDeclarator) {
			listener.exitNoPointerNewDeclarator(this);
		}
	}
}


export class NewInitializerContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newInitializer; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNewInitializer) {
			listener.enterNewInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNewInitializer) {
			listener.exitNewInitializer(this);
		}
	}
}


export class DeleteExpressionContext extends ParserRuleContext {
	public Delete(): TerminalNode { return this.getToken(CPP14Parser.Delete, 0); }
	public castExpression(): CastExpressionContext {
		return this.getRuleContext(0, CastExpressionContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_deleteExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDeleteExpression) {
			listener.enterDeleteExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDeleteExpression) {
			listener.exitDeleteExpression(this);
		}
	}
}


export class NoExceptExpressionContext extends ParserRuleContext {
	public Noexcept(): TerminalNode { return this.getToken(CPP14Parser.Noexcept, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noExceptExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNoExceptExpression) {
			listener.enterNoExceptExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNoExceptExpression) {
			listener.exitNoExceptExpression(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_castExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
}


export class PointerMemberExpressionContext extends ParserRuleContext {
	public castExpression(): CastExpressionContext[];
	public castExpression(i: number): CastExpressionContext;
	public castExpression(i?: number): CastExpressionContext | CastExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CastExpressionContext);
		} else {
			return this.getRuleContext(i, CastExpressionContext);
		}
	}
	public DotStar(): TerminalNode[];
	public DotStar(i: number): TerminalNode;
	public DotStar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.DotStar);
		} else {
			return this.getToken(CPP14Parser.DotStar, i);
		}
	}
	public ArrowStar(): TerminalNode[];
	public ArrowStar(i: number): TerminalNode;
	public ArrowStar(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.ArrowStar);
		} else {
			return this.getToken(CPP14Parser.ArrowStar, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pointerMemberExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterPointerMemberExpression) {
			listener.enterPointerMemberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitPointerMemberExpression) {
			listener.exitPointerMemberExpression(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public pointerMemberExpression(): PointerMemberExpressionContext[];
	public pointerMemberExpression(i: number): PointerMemberExpressionContext;
	public pointerMemberExpression(i?: number): PointerMemberExpressionContext | PointerMemberExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerMemberExpressionContext);
		} else {
			return this.getRuleContext(i, PointerMemberExpressionContext);
		}
	}
	public Star(): TerminalNode[];
	public Star(i: number): TerminalNode;
	public Star(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Star);
		} else {
			return this.getToken(CPP14Parser.Star, i);
		}
	}
	public Div(): TerminalNode[];
	public Div(i: number): TerminalNode;
	public Div(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Div);
		} else {
			return this.getToken(CPP14Parser.Div, i);
		}
	}
	public Mod(): TerminalNode[];
	public Mod(i: number): TerminalNode;
	public Mod(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Mod);
		} else {
			return this.getToken(CPP14Parser.Mod, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public Plus(): TerminalNode[];
	public Plus(i: number): TerminalNode;
	public Plus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Plus);
		} else {
			return this.getToken(CPP14Parser.Plus, i);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Minus);
		} else {
			return this.getToken(CPP14Parser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public shiftOperator(): ShiftOperatorContext[];
	public shiftOperator(i: number): ShiftOperatorContext;
	public shiftOperator(i?: number): ShiftOperatorContext | ShiftOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftOperatorContext);
		} else {
			return this.getRuleContext(i, ShiftOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
}


export class ShiftOperatorContext extends ParserRuleContext {
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Greater);
		} else {
			return this.getToken(CPP14Parser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Less);
		} else {
			return this.getToken(CPP14Parser.Less, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_shiftOperator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterShiftOperator) {
			listener.enterShiftOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitShiftOperator) {
			listener.exitShiftOperator(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext[];
	public shiftExpression(i: number): ShiftExpressionContext;
	public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftExpressionContext);
		} else {
			return this.getRuleContext(i, ShiftExpressionContext);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Less);
		} else {
			return this.getToken(CPP14Parser.Less, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Greater);
		} else {
			return this.getToken(CPP14Parser.Greater, i);
		}
	}
	public LessEqual(): TerminalNode[];
	public LessEqual(i: number): TerminalNode;
	public LessEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LessEqual);
		} else {
			return this.getToken(CPP14Parser.LessEqual, i);
		}
	}
	public GreaterEqual(): TerminalNode[];
	public GreaterEqual(i: number): TerminalNode;
	public GreaterEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.GreaterEqual);
		} else {
			return this.getToken(CPP14Parser.GreaterEqual, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
		}
	}
	public Equal(): TerminalNode[];
	public Equal(i: number): TerminalNode;
	public Equal(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Equal);
		} else {
			return this.getToken(CPP14Parser.Equal, i);
		}
	}
	public NotEqual(): TerminalNode[];
	public NotEqual(i: number): TerminalNode;
	public NotEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.NotEqual);
		} else {
			return this.getToken(CPP14Parser.NotEqual, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext[];
	public equalityExpression(i: number): EqualityExpressionContext;
	public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExpressionContext);
		} else {
			return this.getRuleContext(i, EqualityExpressionContext);
		}
	}
	public And(): TerminalNode[];
	public And(i: number): TerminalNode;
	public And(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.And);
		} else {
			return this.getToken(CPP14Parser.And, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_andExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext[];
	public andExpression(i: number): AndExpressionContext;
	public andExpression(i?: number): AndExpressionContext | AndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndExpressionContext);
		} else {
			return this.getRuleContext(i, AndExpressionContext);
		}
	}
	public Caret(): TerminalNode[];
	public Caret(i: number): TerminalNode;
	public Caret(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Caret);
		} else {
			return this.getToken(CPP14Parser.Caret, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_exclusiveOrExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterExclusiveOrExpression) {
			listener.enterExclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitExclusiveOrExpression) {
			listener.exitExclusiveOrExpression(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext[];
	public exclusiveOrExpression(i: number): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(i?: number): ExclusiveOrExpressionContext | ExclusiveOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExclusiveOrExpressionContext);
		} else {
			return this.getRuleContext(i, ExclusiveOrExpressionContext);
		}
	}
	public Or(): TerminalNode[];
	public Or(i: number): TerminalNode;
	public Or(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Or);
		} else {
			return this.getToken(CPP14Parser.Or, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_inclusiveOrExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterInclusiveOrExpression) {
			listener.enterInclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitInclusiveOrExpression) {
			listener.exitInclusiveOrExpression(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext[];
	public inclusiveOrExpression(i: number): InclusiveOrExpressionContext;
	public inclusiveOrExpression(i?: number): InclusiveOrExpressionContext | InclusiveOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InclusiveOrExpressionContext);
		} else {
			return this.getRuleContext(i, InclusiveOrExpressionContext);
		}
	}
	public AndAnd(): TerminalNode[];
	public AndAnd(i: number): TerminalNode;
	public AndAnd(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.AndAnd);
		} else {
			return this.getToken(CPP14Parser.AndAnd, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext[];
	public logicalAndExpression(i: number): LogicalAndExpressionContext;
	public logicalAndExpression(i?: number): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalAndExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalAndExpressionContext);
		}
	}
	public OrOr(): TerminalNode[];
	public OrOr(i: number): TerminalNode;
	public OrOr(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.OrOr);
		} else {
			return this.getToken(CPP14Parser.OrOr, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	public Question(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Question, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public logicalOrExpression(): LogicalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalOrExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public initializerClause(): InitializerClauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerClauseContext);
	}
	public throwExpression(): ThrowExpressionContext | undefined {
		return this.tryGetRuleContext(0, ThrowExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_assignmentExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ModAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusAssign, 0); }
	public RightShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightShiftAssign, 0); }
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShiftAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.XorAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OrAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_constantExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public selectionStatement(): SelectionStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public jumpStatement(): JumpStatementContext | undefined {
		return this.tryGetRuleContext(0, JumpStatementContext);
	}
	public tryBlock(): TryBlockContext | undefined {
		return this.tryGetRuleContext(0, TryBlockContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public declarationStatement(): DeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, DeclarationStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_statement; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Case, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Default, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_labeledStatement; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public statementSeq(): StatementSeqContext | undefined {
		return this.tryGetRuleContext(0, StatementSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_compoundStatement; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
}


export class StatementSeqContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_statementSeq; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterStatementSeq) {
			listener.enterStatementSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitStatementSeq) {
			listener.exitStatementSeq(this);
		}
	}
}


export class SelectionStatementContext extends ParserRuleContext {
	public If(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Else, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Switch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_selectionStatement; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterSelectionStatement) {
			listener.enterSelectionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitSelectionStatement) {
			listener.exitSelectionStatement(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public declSpecifierSeq(): DeclSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public initializerClause(): InitializerClauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerClauseContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_condition; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	public While(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.While, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Do(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Do, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Semi, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.For, 0); }
	public forInitStatement(): ForInitStatementContext | undefined {
		return this.tryGetRuleContext(0, ForInitStatementContext);
	}
	public forRangeDeclaration(): ForRangeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ForRangeDeclarationContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	public forRangeInitializer(): ForRangeInitializerContext | undefined {
		return this.tryGetRuleContext(0, ForRangeInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_iterationStatement; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterIterationStatement) {
			listener.enterIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitIterationStatement) {
			listener.exitIterationStatement(this);
		}
	}
}


export class ForInitStatementContext extends ParserRuleContext {
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public simpleDeclaration(): SimpleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpleDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_forInitStatement; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterForInitStatement) {
			listener.enterForInitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitForInitStatement) {
			listener.exitForInitStatement(this);
		}
	}
}


export class ForRangeDeclarationContext extends ParserRuleContext {
	public declSpecifierSeq(): DeclSpecifierSeqContext {
		return this.getRuleContext(0, DeclSpecifierSeqContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_forRangeDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterForRangeDeclaration) {
			listener.enterForRangeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitForRangeDeclaration) {
			listener.exitForRangeDeclaration(this);
		}
	}
}


export class ForRangeInitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_forRangeInitializer; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterForRangeInitializer) {
			listener.enterForRangeInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitForRangeInitializer) {
			listener.exitForRangeInitializer(this);
		}
	}
}


export class JumpStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Break, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Continue, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Return, 0); }
	public Goto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Goto, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_jumpStatement; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterJumpStatement) {
			listener.enterJumpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitJumpStatement) {
			listener.exitJumpStatement(this);
		}
	}
}


export class DeclarationStatementContext extends ParserRuleContext {
	public blockDeclaration(): BlockDeclarationContext {
		return this.getRuleContext(0, BlockDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declarationStatement; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDeclarationStatement) {
			listener.enterDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDeclarationStatement) {
			listener.exitDeclarationStatement(this);
		}
	}
}


export class DeclarationseqContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declarationseq; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDeclarationseq) {
			listener.enterDeclarationseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDeclarationseq) {
			listener.exitDeclarationseq(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public blockDeclaration(): BlockDeclarationContext | undefined {
		return this.tryGetRuleContext(0, BlockDeclarationContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public templateDeclaration(): TemplateDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplateDeclarationContext);
	}
	public explicitInstantiation(): ExplicitInstantiationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitInstantiationContext);
	}
	public explicitSpecialization(): ExplicitSpecializationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitSpecializationContext);
	}
	public linkageSpecification(): LinkageSpecificationContext | undefined {
		return this.tryGetRuleContext(0, LinkageSpecificationContext);
	}
	public namespaceDefinition(): NamespaceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespaceDefinitionContext);
	}
	public emptyDeclaration(): EmptyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptyDeclarationContext);
	}
	public attributeDeclaration(): AttributeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AttributeDeclarationContext);
	}
	public includeDefinition(): IncludeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, IncludeDefinitionContext);
	}
	public defineDeclaration(): DefineDeclarationContext | undefined {
		return this.tryGetRuleContext(0, DefineDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class IncludeDefinitionContext extends ParserRuleContext {
	public Include(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Include, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public fileName(): FileNameContext {
		return this.getRuleContext(0, FileNameContext);
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public IncludeQuote(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.IncludeQuote, 0); }
	public Quote(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Quote, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_includeDefinition; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterIncludeDefinition) {
			listener.enterIncludeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitIncludeDefinition) {
			listener.exitIncludeDefinition(this);
		}
	}
}


export class DefineDeclarationContext extends ParserRuleContext {
	public Define(): TerminalNode { return this.getToken(CPP14Parser.Define, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Identifier);
		} else {
			return this.getToken(CPP14Parser.Identifier, i);
		}
	}
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.IntegerLiteral, 0); }
	public simpleTypeSpecifier(): SimpleTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpleTypeSpecifierContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_defineDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDefineDeclaration) {
			listener.enterDefineDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDefineDeclaration) {
			listener.exitDefineDeclaration(this);
		}
	}
}


export class FileNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Identifier);
		} else {
			return this.getToken(CPP14Parser.Identifier, i);
		}
	}
	public Div(): TerminalNode[];
	public Div(i: number): TerminalNode;
	public Div(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Div);
		} else {
			return this.getToken(CPP14Parser.Div, i);
		}
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Dot, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_fileName; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterFileName) {
			listener.enterFileName(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitFileName) {
			listener.exitFileName(this);
		}
	}
}


export class BlockDeclarationContext extends ParserRuleContext {
	public simpleDeclaration(): SimpleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpleDeclarationContext);
	}
	public asmDefinition(): AsmDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AsmDefinitionContext);
	}
	public namespaceAliasDefinition(): NamespaceAliasDefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespaceAliasDefinitionContext);
	}
	public usingDeclaration(): UsingDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingDeclarationContext);
	}
	public usingDirective(): UsingDirectiveContext | undefined {
		return this.tryGetRuleContext(0, UsingDirectiveContext);
	}
	public staticAssertDeclaration(): StaticAssertDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
	}
	public aliasDeclaration(): AliasDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AliasDeclarationContext);
	}
	public opaqueEnumDeclaration(): OpaqueEnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, OpaqueEnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_blockDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterBlockDeclaration) {
			listener.enterBlockDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitBlockDeclaration) {
			listener.exitBlockDeclaration(this);
		}
	}
}


export class AliasDeclarationContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	public theTypeId(): TheTypeIdContext {
		return this.getRuleContext(0, TheTypeIdContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_aliasDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAliasDeclaration) {
			listener.enterAliasDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAliasDeclaration) {
			listener.exitAliasDeclaration(this);
		}
	}
}


export class SimpleDeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public declSpecifierSeq(): DeclSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simpleDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterSimpleDeclaration) {
			listener.enterSimpleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitSimpleDeclaration) {
			listener.exitSimpleDeclaration(this);
		}
	}
}


export class StaticAssertDeclarationContext extends ParserRuleContext {
	public Static_assert(): TerminalNode { return this.getToken(CPP14Parser.Static_assert, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public constantExpression(): ConstantExpressionContext {
		return this.getRuleContext(0, ConstantExpressionContext);
	}
	public Comma(): TerminalNode { return this.getToken(CPP14Parser.Comma, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(CPP14Parser.StringLiteral, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_staticAssertDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterStaticAssertDeclaration) {
			listener.enterStaticAssertDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitStaticAssertDeclaration) {
			listener.exitStaticAssertDeclaration(this);
		}
	}
}


export class EmptyDeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_emptyDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterEmptyDeclaration) {
			listener.enterEmptyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitEmptyDeclaration) {
			listener.exitEmptyDeclaration(this);
		}
	}
}


export class AttributeDeclarationContext extends ParserRuleContext {
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext {
		return this.getRuleContext(0, AttributeSpecifierSeqContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributeDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAttributeDeclaration) {
			listener.enterAttributeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAttributeDeclaration) {
			listener.exitAttributeDeclaration(this);
		}
	}
}


export class DeclSpecifierContext extends ParserRuleContext {
	public storageClassSpecifier(): StorageClassSpecifierContext | undefined {
		return this.tryGetRuleContext(0, StorageClassSpecifierContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public functionSpecifier(): FunctionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, FunctionSpecifierContext);
	}
	public Friend(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Friend, 0); }
	public Typedef(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typedef, 0); }
	public Constexpr(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Constexpr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDeclSpecifier) {
			listener.enterDeclSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDeclSpecifier) {
			listener.exitDeclSpecifier(this);
		}
	}
}


export class DeclSpecifierSeqContext extends ParserRuleContext {
	public declSpecifier(): DeclSpecifierContext[];
	public declSpecifier(i: number): DeclSpecifierContext;
	public declSpecifier(i?: number): DeclSpecifierContext | DeclSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclSpecifierContext);
		} else {
			return this.getRuleContext(i, DeclSpecifierContext);
		}
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declSpecifierSeq; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDeclSpecifierSeq) {
			listener.enterDeclSpecifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDeclSpecifierSeq) {
			listener.exitDeclSpecifierSeq(this);
		}
	}
}


export class StorageClassSpecifierContext extends ParserRuleContext {
	public Register(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Register, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Static, 0); }
	public Thread_local(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Thread_local, 0); }
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Extern, 0); }
	public Mutable(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mutable, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_storageClassSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterStorageClassSpecifier) {
			listener.enterStorageClassSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitStorageClassSpecifier) {
			listener.exitStorageClassSpecifier(this);
		}
	}
}


export class FunctionSpecifierContext extends ParserRuleContext {
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	public Virtual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Virtual, 0); }
	public Explicit(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Explicit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functionSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterFunctionSpecifier) {
			listener.enterFunctionSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitFunctionSpecifier) {
			listener.exitFunctionSpecifier(this);
		}
	}
}


export class TypedefNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typedefName; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTypedefName) {
			listener.enterTypedefName(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTypedefName) {
			listener.exitTypedefName(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public trailingTypeSpecifier(): TrailingTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TrailingTypeSpecifierContext);
	}
	public classSpecifier(): ClassSpecifierContext | undefined {
		return this.tryGetRuleContext(0, ClassSpecifierContext);
	}
	public enumSpecifier(): EnumSpecifierContext | undefined {
		return this.tryGetRuleContext(0, EnumSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
}


export class TrailingTypeSpecifierContext extends ParserRuleContext {
	public simpleTypeSpecifier(): SimpleTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpleTypeSpecifierContext);
	}
	public elaboratedTypeSpecifier(): ElaboratedTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, ElaboratedTypeSpecifierContext);
	}
	public typeNameSpecifier(): TypeNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeNameSpecifierContext);
	}
	public cvQualifier(): CvQualifierContext | undefined {
		return this.tryGetRuleContext(0, CvQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_trailingTypeSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTrailingTypeSpecifier) {
			listener.enterTrailingTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTrailingTypeSpecifier) {
			listener.exitTrailingTypeSpecifier(this);
		}
	}
}


export class TypeSpecifierSeqContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext[];
	public typeSpecifier(i: number): TypeSpecifierContext;
	public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecifierContext);
		} else {
			return this.getRuleContext(i, TypeSpecifierContext);
		}
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeSpecifierSeq; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTypeSpecifierSeq) {
			listener.enterTypeSpecifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTypeSpecifierSeq) {
			listener.exitTypeSpecifierSeq(this);
		}
	}
}


export class TrailingTypeSpecifierSeqContext extends ParserRuleContext {
	public trailingTypeSpecifier(): TrailingTypeSpecifierContext[];
	public trailingTypeSpecifier(i: number): TrailingTypeSpecifierContext;
	public trailingTypeSpecifier(i?: number): TrailingTypeSpecifierContext | TrailingTypeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrailingTypeSpecifierContext);
		} else {
			return this.getRuleContext(i, TrailingTypeSpecifierContext);
		}
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_trailingTypeSpecifierSeq; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTrailingTypeSpecifierSeq) {
			listener.enterTrailingTypeSpecifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTrailingTypeSpecifierSeq) {
			listener.exitTrailingTypeSpecifierSeq(this);
		}
	}
}


export class SimpleTypeSpecifierContext extends ParserRuleContext {
	public theTypeName(): TheTypeNameContext | undefined {
		return this.tryGetRuleContext(0, TheTypeNameContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public Char(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char, 0); }
	public Char16(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char16, 0); }
	public Char32(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char32, 0); }
	public Wchar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Wchar, 0); }
	public Bool(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Bool, 0); }
	public Short(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Short, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Int, 0); }
	public Long(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Long, 0); }
	public Signed(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Signed, 0); }
	public Unsigned(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Unsigned, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Float, 0); }
	public Double(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Double, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Void, 0); }
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Auto, 0); }
	public decltypeSpecifier(): DecltypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simpleTypeSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterSimpleTypeSpecifier) {
			listener.enterSimpleTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitSimpleTypeSpecifier) {
			listener.exitSimpleTypeSpecifier(this);
		}
	}
}


export class TheTypeNameContext extends ParserRuleContext {
	public className(): ClassNameContext | undefined {
		return this.tryGetRuleContext(0, ClassNameContext);
	}
	public enumName(): EnumNameContext | undefined {
		return this.tryGetRuleContext(0, EnumNameContext);
	}
	public typedefName(): TypedefNameContext | undefined {
		return this.tryGetRuleContext(0, TypedefNameContext);
	}
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_theTypeName; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTheTypeName) {
			listener.enterTheTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTheTypeName) {
			listener.exitTheTypeName(this);
		}
	}
}


export class DecltypeSpecifierContext extends ParserRuleContext {
	public Decltype(): TerminalNode { return this.getToken(CPP14Parser.Decltype, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Auto, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_decltypeSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDecltypeSpecifier) {
			listener.enterDecltypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDecltypeSpecifier) {
			listener.exitDecltypeSpecifier(this);
		}
	}
}


export class ElaboratedTypeSpecifierContext extends ParserRuleContext {
	public classKey(): ClassKeyContext | undefined {
		return this.tryGetRuleContext(0, ClassKeyContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Enum, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_elaboratedTypeSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterElaboratedTypeSpecifier) {
			listener.enterElaboratedTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitElaboratedTypeSpecifier) {
			listener.exitElaboratedTypeSpecifier(this);
		}
	}
}


export class EnumNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumName; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterEnumName) {
			listener.enterEnumName(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitEnumName) {
			listener.exitEnumName(this);
		}
	}
}


export class EnumSpecifierContext extends ParserRuleContext {
	public enumHead(): EnumHeadContext {
		return this.getRuleContext(0, EnumHeadContext);
	}
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public enumeratorList(): EnumeratorListContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterEnumSpecifier) {
			listener.enterEnumSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitEnumSpecifier) {
			listener.exitEnumSpecifier(this);
		}
	}
}


export class EnumHeadContext extends ParserRuleContext {
	public enumkey(): EnumkeyContext {
		return this.getRuleContext(0, EnumkeyContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public enumbase(): EnumbaseContext | undefined {
		return this.tryGetRuleContext(0, EnumbaseContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumHead; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterEnumHead) {
			listener.enterEnumHead(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitEnumHead) {
			listener.exitEnumHead(this);
		}
	}
}


export class OpaqueEnumDeclarationContext extends ParserRuleContext {
	public enumkey(): EnumkeyContext {
		return this.getRuleContext(0, EnumkeyContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public enumbase(): EnumbaseContext | undefined {
		return this.tryGetRuleContext(0, EnumbaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_opaqueEnumDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterOpaqueEnumDeclaration) {
			listener.enterOpaqueEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitOpaqueEnumDeclaration) {
			listener.exitOpaqueEnumDeclaration(this);
		}
	}
}


export class EnumkeyContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(CPP14Parser.Enum, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Struct, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumkey; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterEnumkey) {
			listener.enterEnumkey(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitEnumkey) {
			listener.exitEnumkey(this);
		}
	}
}


export class EnumbaseContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public typeSpecifierSeq(): TypeSpecifierSeqContext {
		return this.getRuleContext(0, TypeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumbase; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterEnumbase) {
			listener.enterEnumbase(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitEnumbase) {
			listener.exitEnumbase(this);
		}
	}
}


export class EnumeratorListContext extends ParserRuleContext {
	public enumeratorDefinition(): EnumeratorDefinitionContext[];
	public enumeratorDefinition(i: number): EnumeratorDefinitionContext;
	public enumeratorDefinition(i?: number): EnumeratorDefinitionContext | EnumeratorDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumeratorDefinitionContext);
		} else {
			return this.getRuleContext(i, EnumeratorDefinitionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumeratorList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterEnumeratorList) {
			listener.enterEnumeratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitEnumeratorList) {
			listener.exitEnumeratorList(this);
		}
	}
}


export class EnumeratorDefinitionContext extends ParserRuleContext {
	public enumerator(): EnumeratorContext {
		return this.getRuleContext(0, EnumeratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumeratorDefinition; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterEnumeratorDefinition) {
			listener.enterEnumeratorDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitEnumeratorDefinition) {
			listener.exitEnumeratorDefinition(this);
		}
	}
}


export class EnumeratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumerator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterEnumerator) {
			listener.enterEnumerator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitEnumerator) {
			listener.exitEnumerator(this);
		}
	}
}


export class NamespaceNameContext extends ParserRuleContext {
	public originalNamespaceName(): OriginalNamespaceNameContext | undefined {
		return this.tryGetRuleContext(0, OriginalNamespaceNameContext);
	}
	public namespaceAlias(): NamespaceAliasContext | undefined {
		return this.tryGetRuleContext(0, NamespaceAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespaceName; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNamespaceName) {
			listener.enterNamespaceName(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNamespaceName) {
			listener.exitNamespaceName(this);
		}
	}
}


export class OriginalNamespaceNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_originalNamespaceName; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterOriginalNamespaceName) {
			listener.enterOriginalNamespaceName(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitOriginalNamespaceName) {
			listener.exitOriginalNamespaceName(this);
		}
	}
}


export class NamespaceDefinitionContext extends ParserRuleContext {
	public _namespaceBody!: DeclarationseqContext;
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public originalNamespaceName(): OriginalNamespaceNameContext | undefined {
		return this.tryGetRuleContext(0, OriginalNamespaceNameContext);
	}
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespaceDefinition; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNamespaceDefinition) {
			listener.enterNamespaceDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNamespaceDefinition) {
			listener.exitNamespaceDefinition(this);
		}
	}
}


export class NamespaceAliasContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespaceAlias; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNamespaceAlias) {
			listener.enterNamespaceAlias(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNamespaceAlias) {
			listener.exitNamespaceAlias(this);
		}
	}
}


export class NamespaceAliasDefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
		return this.getRuleContext(0, QualifiednamespacespecifierContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespaceAliasDefinition; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNamespaceAliasDefinition) {
			listener.enterNamespaceAliasDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNamespaceAliasDefinition) {
			listener.exitNamespaceAliasDefinition(this);
		}
	}
}


export class QualifiednamespacespecifierContext extends ParserRuleContext {
	public namespaceName(): NamespaceNameContext {
		return this.getRuleContext(0, NamespaceNameContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_qualifiednamespacespecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterQualifiednamespacespecifier) {
			listener.enterQualifiednamespacespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitQualifiednamespacespecifier) {
			listener.exitQualifiednamespacespecifier(this);
		}
	}
}


export class UsingDeclarationContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public unqualifiedId(): UnqualifiedIdContext {
		return this.getRuleContext(0, UnqualifiedIdContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public Typename_(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typename_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_usingDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterUsingDeclaration) {
			listener.enterUsingDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitUsingDeclaration) {
			listener.exitUsingDeclaration(this);
		}
	}
}


export class UsingDirectiveContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public namespaceName(): NamespaceNameContext {
		return this.getRuleContext(0, NamespaceNameContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_usingDirective; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterUsingDirective) {
			listener.enterUsingDirective(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitUsingDirective) {
			listener.exitUsingDirective(this);
		}
	}
}


export class AsmDefinitionContext extends ParserRuleContext {
	public Asm(): TerminalNode { return this.getToken(CPP14Parser.Asm, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(CPP14Parser.StringLiteral, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_asmDefinition; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAsmDefinition) {
			listener.enterAsmDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAsmDefinition) {
			listener.exitAsmDefinition(this);
		}
	}
}


export class LinkageSpecificationContext extends ParserRuleContext {
	public Extern(): TerminalNode { return this.getToken(CPP14Parser.Extern, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(CPP14Parser.StringLiteral, 0); }
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBrace, 0); }
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_linkageSpecification; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterLinkageSpecification) {
			listener.enterLinkageSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitLinkageSpecification) {
			listener.exitLinkageSpecification(this);
		}
	}
}


export class AttributeSpecifierSeqContext extends ParserRuleContext {
	public attributeSpecifier(): AttributeSpecifierContext[];
	public attributeSpecifier(i: number): AttributeSpecifierContext;
	public attributeSpecifier(i?: number): AttributeSpecifierContext | AttributeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeSpecifierContext);
		} else {
			return this.getRuleContext(i, AttributeSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributeSpecifierSeq; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAttributeSpecifierSeq) {
			listener.enterAttributeSpecifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAttributeSpecifierSeq) {
			listener.exitAttributeSpecifierSeq(this);
		}
	}
}


export class AttributeSpecifierContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LeftBracket);
		} else {
			return this.getToken(CPP14Parser.LeftBracket, i);
		}
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.RightBracket);
		} else {
			return this.getToken(CPP14Parser.RightBracket, i);
		}
	}
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	public alignmentspecifier(): AlignmentspecifierContext | undefined {
		return this.tryGetRuleContext(0, AlignmentspecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributeSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAttributeSpecifier) {
			listener.enterAttributeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAttributeSpecifier) {
			listener.exitAttributeSpecifier(this);
		}
	}
}


export class AlignmentspecifierContext extends ParserRuleContext {
	public Alignas(): TerminalNode { return this.getToken(CPP14Parser.Alignas, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_alignmentspecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAlignmentspecifier) {
			listener.enterAlignmentspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAlignmentspecifier) {
			listener.exitAlignmentspecifier(this);
		}
	}
}


export class AttributeListContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributeList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAttributeList) {
			listener.enterAttributeList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAttributeList) {
			listener.exitAttributeList(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public attributeNamespace(): AttributeNamespaceContext | undefined {
		return this.tryGetRuleContext(0, AttributeNamespaceContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public attributeArgumentClause(): AttributeArgumentClauseContext | undefined {
		return this.tryGetRuleContext(0, AttributeArgumentClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attribute; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
}


export class AttributeNamespaceContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributeNamespace; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAttributeNamespace) {
			listener.enterAttributeNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAttributeNamespace) {
			listener.exitAttributeNamespace(this);
		}
	}
}


export class AttributeArgumentClauseContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public balancedTokenSeq(): BalancedTokenSeqContext | undefined {
		return this.tryGetRuleContext(0, BalancedTokenSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributeArgumentClause; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAttributeArgumentClause) {
			listener.enterAttributeArgumentClause(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAttributeArgumentClause) {
			listener.exitAttributeArgumentClause(this);
		}
	}
}


export class BalancedTokenSeqContext extends ParserRuleContext {
	public balancedtoken(): BalancedtokenContext[];
	public balancedtoken(i: number): BalancedtokenContext;
	public balancedtoken(i?: number): BalancedtokenContext | BalancedtokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BalancedtokenContext);
		} else {
			return this.getRuleContext(i, BalancedtokenContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_balancedTokenSeq; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterBalancedTokenSeq) {
			listener.enterBalancedTokenSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitBalancedTokenSeq) {
			listener.exitBalancedTokenSeq(this);
		}
	}
}


export class BalancedtokenContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LeftParen);
		} else {
			return this.getToken(CPP14Parser.LeftParen, i);
		}
	}
	public balancedTokenSeq(): BalancedTokenSeqContext | undefined {
		return this.tryGetRuleContext(0, BalancedTokenSeqContext);
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.RightParen);
		} else {
			return this.getToken(CPP14Parser.RightParen, i);
		}
	}
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LeftBracket);
		} else {
			return this.getToken(CPP14Parser.LeftBracket, i);
		}
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.RightBracket);
		} else {
			return this.getToken(CPP14Parser.RightBracket, i);
		}
	}
	public LeftBrace(): TerminalNode[];
	public LeftBrace(i: number): TerminalNode;
	public LeftBrace(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LeftBrace);
		} else {
			return this.getToken(CPP14Parser.LeftBrace, i);
		}
	}
	public RightBrace(): TerminalNode[];
	public RightBrace(i: number): TerminalNode;
	public RightBrace(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.RightBrace);
		} else {
			return this.getToken(CPP14Parser.RightBrace, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_balancedtoken; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterBalancedtoken) {
			listener.enterBalancedtoken(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitBalancedtoken) {
			listener.exitBalancedtoken(this);
		}
	}
}


export class InitDeclaratorListContext extends ParserRuleContext {
	public initDeclarator(): InitDeclaratorContext[];
	public initDeclarator(i: number): InitDeclaratorContext;
	public initDeclarator(i?: number): InitDeclaratorContext | InitDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitDeclaratorContext);
		} else {
			return this.getRuleContext(i, InitDeclaratorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initDeclaratorList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterInitDeclaratorList) {
			listener.enterInitDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitInitDeclaratorList) {
			listener.exitInitDeclaratorList(this);
		}
	}
}


export class InitDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterInitDeclarator) {
			listener.enterInitDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitInitDeclarator) {
			listener.exitInitDeclarator(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public pointerDeclarator(): PointerDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PointerDeclaratorContext);
	}
	public noPointerDeclarator(): NoPointerDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerDeclaratorContext);
	}
	public parametersAndQualifiers(): ParametersAndQualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
	}
	public trailingReturnType(): TrailingReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingReturnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
}


export class PointerDeclaratorContext extends ParserRuleContext {
	public noPointerDeclarator(): NoPointerDeclaratorContext {
		return this.getRuleContext(0, NoPointerDeclaratorContext);
	}
	public pointerOperator(): PointerOperatorContext[];
	public pointerOperator(i: number): PointerOperatorContext;
	public pointerOperator(i?: number): PointerOperatorContext | PointerOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerOperatorContext);
		} else {
			return this.getRuleContext(i, PointerOperatorContext);
		}
	}
	public Const(): TerminalNode[];
	public Const(i: number): TerminalNode;
	public Const(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Const);
		} else {
			return this.getToken(CPP14Parser.Const, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pointerDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterPointerDeclarator) {
			listener.enterPointerDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitPointerDeclarator) {
			listener.exitPointerDeclarator(this);
		}
	}
}


export class NoPointerDeclaratorContext extends ParserRuleContext {
	public declaratorid(): DeclaratoridContext | undefined {
		return this.tryGetRuleContext(0, DeclaratoridContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public noPointerDeclarator(): NoPointerDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerDeclaratorContext);
	}
	public parametersAndQualifiers(): ParametersAndQualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public pointerDeclarator(): PointerDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PointerDeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noPointerDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNoPointerDeclarator) {
			listener.enterNoPointerDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNoPointerDeclarator) {
			listener.exitNoPointerDeclarator(this);
		}
	}
}


export class ParametersAndQualifiersContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public parameterDeclarationClause(): ParameterDeclarationClauseContext | undefined {
		return this.tryGetRuleContext(0, ParameterDeclarationClauseContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	public refqualifier(): RefqualifierContext | undefined {
		return this.tryGetRuleContext(0, RefqualifierContext);
	}
	public exceptionSpecification(): ExceptionSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecificationContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parametersAndQualifiers; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterParametersAndQualifiers) {
			listener.enterParametersAndQualifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitParametersAndQualifiers) {
			listener.exitParametersAndQualifiers(this);
		}
	}
}


export class TrailingReturnTypeContext extends ParserRuleContext {
	public Arrow(): TerminalNode { return this.getToken(CPP14Parser.Arrow, 0); }
	public trailingTypeSpecifierSeq(): TrailingTypeSpecifierSeqContext {
		return this.getRuleContext(0, TrailingTypeSpecifierSeqContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_trailingReturnType; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTrailingReturnType) {
			listener.enterTrailingReturnType(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTrailingReturnType) {
			listener.exitTrailingReturnType(this);
		}
	}
}


export class PointerOperatorContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAnd, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pointerOperator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterPointerOperator) {
			listener.enterPointerOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitPointerOperator) {
			listener.exitPointerOperator(this);
		}
	}
}


export class CvqualifierseqContext extends ParserRuleContext {
	public cvQualifier(): CvQualifierContext[];
	public cvQualifier(i: number): CvQualifierContext;
	public cvQualifier(i?: number): CvQualifierContext | CvQualifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CvQualifierContext);
		} else {
			return this.getRuleContext(i, CvQualifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_cvqualifierseq; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterCvqualifierseq) {
			listener.enterCvqualifierseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitCvqualifierseq) {
			listener.exitCvqualifierseq(this);
		}
	}
}


export class CvQualifierContext extends ParserRuleContext {
	public Const(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Const, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Volatile, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_cvQualifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterCvQualifier) {
			listener.enterCvQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitCvQualifier) {
			listener.exitCvQualifier(this);
		}
	}
}


export class RefqualifierContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_refqualifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterRefqualifier) {
			listener.enterRefqualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitRefqualifier) {
			listener.exitRefqualifier(this);
		}
	}
}


export class DeclaratoridContext extends ParserRuleContext {
	public idExpression(): IdExpressionContext {
		return this.getRuleContext(0, IdExpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declaratorid; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDeclaratorid) {
			listener.enterDeclaratorid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDeclaratorid) {
			listener.exitDeclaratorid(this);
		}
	}
}


export class TheTypeIdContext extends ParserRuleContext {
	public typeSpecifierSeq(): TypeSpecifierSeqContext {
		return this.getRuleContext(0, TypeSpecifierSeqContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_theTypeId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTheTypeId) {
			listener.enterTheTypeId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTheTypeId) {
			listener.exitTheTypeId(this);
		}
	}
}


export class AbstractDeclaratorContext extends ParserRuleContext {
	public pointerAbstractDeclarator(): PointerAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PointerAbstractDeclaratorContext);
	}
	public parametersAndQualifiers(): ParametersAndQualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
	}
	public trailingReturnType(): TrailingReturnTypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingReturnTypeContext);
	}
	public noPointerAbstractDeclarator(): NoPointerAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerAbstractDeclaratorContext);
	}
	public abstractPackDeclarator(): AbstractPackDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractPackDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_abstractDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAbstractDeclarator) {
			listener.enterAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAbstractDeclarator) {
			listener.exitAbstractDeclarator(this);
		}
	}
}


export class PointerAbstractDeclaratorContext extends ParserRuleContext {
	public noPointerAbstractDeclarator(): NoPointerAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerAbstractDeclaratorContext);
	}
	public pointerOperator(): PointerOperatorContext[];
	public pointerOperator(i: number): PointerOperatorContext;
	public pointerOperator(i?: number): PointerOperatorContext | PointerOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerOperatorContext);
		} else {
			return this.getRuleContext(i, PointerOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pointerAbstractDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterPointerAbstractDeclarator) {
			listener.enterPointerAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitPointerAbstractDeclarator) {
			listener.exitPointerAbstractDeclarator(this);
		}
	}
}


export class NoPointerAbstractDeclaratorContext extends ParserRuleContext {
	public noPointerAbstractDeclarator(): NoPointerAbstractDeclaratorContext[];
	public noPointerAbstractDeclarator(i: number): NoPointerAbstractDeclaratorContext;
	public noPointerAbstractDeclarator(i?: number): NoPointerAbstractDeclaratorContext | NoPointerAbstractDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NoPointerAbstractDeclaratorContext);
		} else {
			return this.getRuleContext(i, NoPointerAbstractDeclaratorContext);
		}
	}
	public parametersAndQualifiers(): ParametersAndQualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public pointerAbstractDeclarator(): PointerAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PointerAbstractDeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noPointerAbstractDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNoPointerAbstractDeclarator) {
			listener.enterNoPointerAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNoPointerAbstractDeclarator) {
			listener.exitNoPointerAbstractDeclarator(this);
		}
	}
}


export class AbstractPackDeclaratorContext extends ParserRuleContext {
	public noPointerAbstractPackDeclarator(): NoPointerAbstractPackDeclaratorContext {
		return this.getRuleContext(0, NoPointerAbstractPackDeclaratorContext);
	}
	public pointerOperator(): PointerOperatorContext[];
	public pointerOperator(i: number): PointerOperatorContext;
	public pointerOperator(i?: number): PointerOperatorContext | PointerOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerOperatorContext);
		} else {
			return this.getRuleContext(i, PointerOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_abstractPackDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAbstractPackDeclarator) {
			listener.enterAbstractPackDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAbstractPackDeclarator) {
			listener.exitAbstractPackDeclarator(this);
		}
	}
}


export class NoPointerAbstractPackDeclaratorContext extends ParserRuleContext {
	public noPointerAbstractPackDeclarator(): NoPointerAbstractPackDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoPointerAbstractPackDeclaratorContext);
	}
	public parametersAndQualifiers(): ParametersAndQualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersAndQualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noPointerAbstractPackDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNoPointerAbstractPackDeclarator) {
			listener.enterNoPointerAbstractPackDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNoPointerAbstractPackDeclarator) {
			listener.exitNoPointerAbstractPackDeclarator(this);
		}
	}
}


export class ParameterDeclarationClauseContext extends ParserRuleContext {
	public parameterDeclarationList(): ParameterDeclarationListContext {
		return this.getRuleContext(0, ParameterDeclarationListContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameterDeclarationClause; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterParameterDeclarationClause) {
			listener.enterParameterDeclarationClause(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitParameterDeclarationClause) {
			listener.exitParameterDeclarationClause(this);
		}
	}
}


export class ParameterDeclarationListContext extends ParserRuleContext {
	public parameterDeclaration(): ParameterDeclarationContext[];
	public parameterDeclaration(i: number): ParameterDeclarationContext;
	public parameterDeclaration(i?: number): ParameterDeclarationContext | ParameterDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclarationContext);
		} else {
			return this.getRuleContext(i, ParameterDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameterDeclarationList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterParameterDeclarationList) {
			listener.enterParameterDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitParameterDeclarationList) {
			listener.exitParameterDeclarationList(this);
		}
	}
}


export class ParameterDeclarationContext extends ParserRuleContext {
	public declSpecifierSeq(): DeclSpecifierSeqContext {
		return this.getRuleContext(0, DeclSpecifierSeqContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public initializerClause(): InitializerClauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerClauseContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameterDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public declSpecifierSeq(): DeclSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
	}
	public virtualSpecifierSeq(): VirtualSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, VirtualSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public constructorInitializer(): ConstructorInitializerContext | undefined {
		return this.tryGetRuleContext(0, ConstructorInitializerContext);
	}
	public functionTryBlock(): FunctionTryBlockContext | undefined {
		return this.tryGetRuleContext(0, FunctionTryBlockContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Semi, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Default, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Delete, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functionBody; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public braceOrEqualInitializer(): BraceOrEqualInitializerContext | undefined {
		return this.tryGetRuleContext(0, BraceOrEqualInitializerContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initializer; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
}


export class BraceOrEqualInitializerContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public initializerClause(): InitializerClauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerClauseContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_braceOrEqualInitializer; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterBraceOrEqualInitializer) {
			listener.enterBraceOrEqualInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitBraceOrEqualInitializer) {
			listener.exitBraceOrEqualInitializer(this);
		}
	}
}


export class InitializerClauseContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initializerClause; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterInitializerClause) {
			listener.enterInitializerClause(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitInitializerClause) {
			listener.exitInitializerClause(this);
		}
	}
}


export class InitializerListContext extends ParserRuleContext {
	public initializerClause(): InitializerClauseContext[];
	public initializerClause(i: number): InitializerClauseContext;
	public initializerClause(i?: number): InitializerClauseContext | InitializerClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerClauseContext);
		} else {
			return this.getRuleContext(i, InitializerClauseContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Ellipsis);
		} else {
			return this.getToken(CPP14Parser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initializerList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterInitializerList) {
			listener.enterInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitInitializerList) {
			listener.exitInitializerList(this);
		}
	}
}


export class BracedInitListContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_bracedInitList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterBracedInitList) {
			listener.enterBracedInitList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitBracedInitList) {
			listener.exitBracedInitList(this);
		}
	}
}


export class ClassNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_className; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterClassName) {
			listener.enterClassName(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitClassName) {
			listener.exitClassName(this);
		}
	}
}


export class ClassSpecifierContext extends ParserRuleContext {
	public classHead(): ClassHeadContext {
		return this.getRuleContext(0, ClassHeadContext);
	}
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public memberSpecification(): MemberSpecificationContext | undefined {
		return this.tryGetRuleContext(0, MemberSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterClassSpecifier) {
			listener.enterClassSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitClassSpecifier) {
			listener.exitClassSpecifier(this);
		}
	}
}


export class ClassHeadContext extends ParserRuleContext {
	public classKey(): ClassKeyContext | undefined {
		return this.tryGetRuleContext(0, ClassKeyContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public classHeadName(): ClassHeadNameContext | undefined {
		return this.tryGetRuleContext(0, ClassHeadNameContext);
	}
	public baseClause(): BaseClauseContext | undefined {
		return this.tryGetRuleContext(0, BaseClauseContext);
	}
	public classVirtSpecifier(): ClassVirtSpecifierContext | undefined {
		return this.tryGetRuleContext(0, ClassVirtSpecifierContext);
	}
	public Union(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Union, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classHead; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterClassHead) {
			listener.enterClassHead(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitClassHead) {
			listener.exitClassHead(this);
		}
	}
}


export class ClassHeadNameContext extends ParserRuleContext {
	public className(): ClassNameContext {
		return this.getRuleContext(0, ClassNameContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classHeadName; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterClassHeadName) {
			listener.enterClassHeadName(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitClassHeadName) {
			listener.exitClassHeadName(this);
		}
	}
}


export class ClassVirtSpecifierContext extends ParserRuleContext {
	public Final(): TerminalNode { return this.getToken(CPP14Parser.Final, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classVirtSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterClassVirtSpecifier) {
			listener.enterClassVirtSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitClassVirtSpecifier) {
			listener.exitClassVirtSpecifier(this);
		}
	}
}


export class ClassKeyContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Struct, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classKey; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterClassKey) {
			listener.enterClassKey(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitClassKey) {
			listener.exitClassKey(this);
		}
	}
}


export class MemberSpecificationContext extends ParserRuleContext {
	public memberdeclaration(): MemberdeclarationContext[];
	public memberdeclaration(i: number): MemberdeclarationContext;
	public memberdeclaration(i?: number): MemberdeclarationContext | MemberdeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberdeclarationContext);
		} else {
			return this.getRuleContext(i, MemberdeclarationContext);
		}
	}
	public accessSpecifier(): AccessSpecifierContext[];
	public accessSpecifier(i: number): AccessSpecifierContext;
	public accessSpecifier(i?: number): AccessSpecifierContext | AccessSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AccessSpecifierContext);
		} else {
			return this.getRuleContext(i, AccessSpecifierContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Colon);
		} else {
			return this.getToken(CPP14Parser.Colon, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberSpecification; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterMemberSpecification) {
			listener.enterMemberSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitMemberSpecification) {
			listener.exitMemberSpecification(this);
		}
	}
}


export class MemberdeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Semi, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public declSpecifierSeq(): DeclSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, DeclSpecifierSeqContext);
	}
	public memberDeclaratorList(): MemberDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclaratorListContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public usingDeclaration(): UsingDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingDeclarationContext);
	}
	public staticAssertDeclaration(): StaticAssertDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
	}
	public templateDeclaration(): TemplateDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplateDeclarationContext);
	}
	public aliasDeclaration(): AliasDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AliasDeclarationContext);
	}
	public emptyDeclaration(): EmptyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptyDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberdeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterMemberdeclaration) {
			listener.enterMemberdeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitMemberdeclaration) {
			listener.exitMemberdeclaration(this);
		}
	}
}


export class MemberDeclaratorListContext extends ParserRuleContext {
	public memberDeclarator(): MemberDeclaratorContext[];
	public memberDeclarator(i: number): MemberDeclaratorContext;
	public memberDeclarator(i?: number): MemberDeclaratorContext | MemberDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberDeclaratorContext);
		} else {
			return this.getRuleContext(i, MemberDeclaratorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberDeclaratorList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterMemberDeclaratorList) {
			listener.enterMemberDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitMemberDeclaratorList) {
			listener.exitMemberDeclaratorList(this);
		}
	}
}


export class MemberDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public virtualSpecifierSeq(): VirtualSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, VirtualSpecifierSeqContext);
	}
	public pureSpecifier(): PureSpecifierContext | undefined {
		return this.tryGetRuleContext(0, PureSpecifierContext);
	}
	public braceOrEqualInitializer(): BraceOrEqualInitializerContext | undefined {
		return this.tryGetRuleContext(0, BraceOrEqualInitializerContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterMemberDeclarator) {
			listener.enterMemberDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitMemberDeclarator) {
			listener.exitMemberDeclarator(this);
		}
	}
}


export class VirtualSpecifierSeqContext extends ParserRuleContext {
	public virtualSpecifier(): VirtualSpecifierContext[];
	public virtualSpecifier(i: number): VirtualSpecifierContext;
	public virtualSpecifier(i?: number): VirtualSpecifierContext | VirtualSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VirtualSpecifierContext);
		} else {
			return this.getRuleContext(i, VirtualSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_virtualSpecifierSeq; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterVirtualSpecifierSeq) {
			listener.enterVirtualSpecifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitVirtualSpecifierSeq) {
			listener.exitVirtualSpecifierSeq(this);
		}
	}
}


export class VirtualSpecifierContext extends ParserRuleContext {
	public Override(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Override, 0); }
	public Final(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Final, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_virtualSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterVirtualSpecifier) {
			listener.enterVirtualSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitVirtualSpecifier) {
			listener.exitVirtualSpecifier(this);
		}
	}
}


export class PureSpecifierContext extends ParserRuleContext {
	public _val!: Token;
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	public OctalLiteral(): TerminalNode { return this.getToken(CPP14Parser.OctalLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pureSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterPureSpecifier) {
			listener.enterPureSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitPureSpecifier) {
			listener.exitPureSpecifier(this);
		}
	}
}


export class BaseClauseContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public baseSpecifierList(): BaseSpecifierListContext {
		return this.getRuleContext(0, BaseSpecifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_baseClause; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterBaseClause) {
			listener.enterBaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitBaseClause) {
			listener.exitBaseClause(this);
		}
	}
}


export class BaseSpecifierListContext extends ParserRuleContext {
	public baseSpecifier(): BaseSpecifierContext[];
	public baseSpecifier(i: number): BaseSpecifierContext;
	public baseSpecifier(i?: number): BaseSpecifierContext | BaseSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BaseSpecifierContext);
		} else {
			return this.getRuleContext(i, BaseSpecifierContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Ellipsis);
		} else {
			return this.getToken(CPP14Parser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_baseSpecifierList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterBaseSpecifierList) {
			listener.enterBaseSpecifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitBaseSpecifierList) {
			listener.exitBaseSpecifierList(this);
		}
	}
}


export class BaseSpecifierContext extends ParserRuleContext {
	public baseTypeSpecifier(): BaseTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeSpecifierContext);
	}
	public Virtual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Virtual, 0); }
	public accessSpecifier(): AccessSpecifierContext | undefined {
		return this.tryGetRuleContext(0, AccessSpecifierContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_baseSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterBaseSpecifier) {
			listener.enterBaseSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitBaseSpecifier) {
			listener.exitBaseSpecifier(this);
		}
	}
}


export class ClassOrDeclTypeContext extends ParserRuleContext {
	public className(): ClassNameContext | undefined {
		return this.tryGetRuleContext(0, ClassNameContext);
	}
	public nestedNameSpecifier(): NestedNameSpecifierContext | undefined {
		return this.tryGetRuleContext(0, NestedNameSpecifierContext);
	}
	public decltypeSpecifier(): DecltypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classOrDeclType; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterClassOrDeclType) {
			listener.enterClassOrDeclType(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitClassOrDeclType) {
			listener.exitClassOrDeclType(this);
		}
	}
}


export class BaseTypeSpecifierContext extends ParserRuleContext {
	public classOrDeclType(): ClassOrDeclTypeContext {
		return this.getRuleContext(0, ClassOrDeclTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_baseTypeSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterBaseTypeSpecifier) {
			listener.enterBaseTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitBaseTypeSpecifier) {
			listener.exitBaseTypeSpecifier(this);
		}
	}
}


export class AccessSpecifierContext extends ParserRuleContext {
	public Private(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Private, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Protected, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Public, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_accessSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterAccessSpecifier) {
			listener.enterAccessSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitAccessSpecifier) {
			listener.exitAccessSpecifier(this);
		}
	}
}


export class ConversionFunctionIdContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public conversionTypeId(): ConversionTypeIdContext {
		return this.getRuleContext(0, ConversionTypeIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conversionFunctionId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterConversionFunctionId) {
			listener.enterConversionFunctionId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitConversionFunctionId) {
			listener.exitConversionFunctionId(this);
		}
	}
}


export class ConversionTypeIdContext extends ParserRuleContext {
	public typeSpecifierSeq(): TypeSpecifierSeqContext {
		return this.getRuleContext(0, TypeSpecifierSeqContext);
	}
	public conversionDeclarator(): ConversionDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ConversionDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conversionTypeId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterConversionTypeId) {
			listener.enterConversionTypeId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitConversionTypeId) {
			listener.exitConversionTypeId(this);
		}
	}
}


export class ConversionDeclaratorContext extends ParserRuleContext {
	public pointerOperator(): PointerOperatorContext {
		return this.getRuleContext(0, PointerOperatorContext);
	}
	public conversionDeclarator(): ConversionDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ConversionDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conversionDeclarator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterConversionDeclarator) {
			listener.enterConversionDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitConversionDeclarator) {
			listener.exitConversionDeclarator(this);
		}
	}
}


export class ConstructorInitializerContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public memInitializerList(): MemInitializerListContext {
		return this.getRuleContext(0, MemInitializerListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_constructorInitializer; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterConstructorInitializer) {
			listener.enterConstructorInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitConstructorInitializer) {
			listener.exitConstructorInitializer(this);
		}
	}
}


export class MemInitializerListContext extends ParserRuleContext {
	public memInitializer(): MemInitializerContext[];
	public memInitializer(i: number): MemInitializerContext;
	public memInitializer(i?: number): MemInitializerContext | MemInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemInitializerContext);
		} else {
			return this.getRuleContext(i, MemInitializerContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Ellipsis);
		} else {
			return this.getToken(CPP14Parser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memInitializerList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterMemInitializerList) {
			listener.enterMemInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitMemInitializerList) {
			listener.exitMemInitializerList(this);
		}
	}
}


export class MemInitializerContext extends ParserRuleContext {
	public meminitializerid(): MeminitializeridContext {
		return this.getRuleContext(0, MeminitializeridContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public bracedInitList(): BracedInitListContext | undefined {
		return this.tryGetRuleContext(0, BracedInitListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memInitializer; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterMemInitializer) {
			listener.enterMemInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitMemInitializer) {
			listener.exitMemInitializer(this);
		}
	}
}


export class MeminitializeridContext extends ParserRuleContext {
	public classOrDeclType(): ClassOrDeclTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrDeclTypeContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_meminitializerid; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterMeminitializerid) {
			listener.enterMeminitializerid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitMeminitializerid) {
			listener.exitMeminitializerid(this);
		}
	}
}


export class OperatorFunctionIdContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public theOperator(): TheOperatorContext {
		return this.getRuleContext(0, TheOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_operatorFunctionId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterOperatorFunctionId) {
			listener.enterOperatorFunctionId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitOperatorFunctionId) {
			listener.exitOperatorFunctionId(this);
		}
	}
}


export class LiteralOperatorIdContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.StringLiteral, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public UserDefinedStringLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.UserDefinedStringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_literalOperatorId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterLiteralOperatorId) {
			listener.enterLiteralOperatorId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitLiteralOperatorId) {
			listener.exitLiteralOperatorId(this);
		}
	}
}


export class TemplateDeclarationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public Less(): TerminalNode { return this.getToken(CPP14Parser.Less, 0); }
	public templateparameterList(): TemplateparameterListContext {
		return this.getRuleContext(0, TemplateparameterListContext);
	}
	public Greater(): TerminalNode { return this.getToken(CPP14Parser.Greater, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTemplateDeclaration) {
			listener.enterTemplateDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTemplateDeclaration) {
			listener.exitTemplateDeclaration(this);
		}
	}
}


export class TemplateparameterListContext extends ParserRuleContext {
	public templateParameter(): TemplateParameterContext[];
	public templateParameter(i: number): TemplateParameterContext;
	public templateParameter(i?: number): TemplateParameterContext | TemplateParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateParameterContext);
		} else {
			return this.getRuleContext(i, TemplateParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateparameterList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTemplateparameterList) {
			listener.enterTemplateparameterList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTemplateparameterList) {
			listener.exitTemplateparameterList(this);
		}
	}
}


export class TemplateParameterContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext | undefined {
		return this.tryGetRuleContext(0, TypeParameterContext);
	}
	public parameterDeclaration(): ParameterDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ParameterDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateParameter; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTemplateParameter) {
			listener.enterTemplateParameter(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTemplateParameter) {
			listener.exitTemplateParameter(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Typename_(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typename_, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public templateparameterList(): TemplateparameterListContext | undefined {
		return this.tryGetRuleContext(0, TemplateparameterListContext);
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
}


export class SimpleTemplateIdContext extends ParserRuleContext {
	public templateName(): TemplateNameContext {
		return this.getRuleContext(0, TemplateNameContext);
	}
	public Less(): TerminalNode { return this.getToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(CPP14Parser.Greater, 0); }
	public templateArgumentList(): TemplateArgumentListContext | undefined {
		return this.tryGetRuleContext(0, TemplateArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simpleTemplateId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterSimpleTemplateId) {
			listener.enterSimpleTemplateId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitSimpleTemplateId) {
			listener.exitSimpleTemplateId(this);
		}
	}
}


export class TemplateIdContext extends ParserRuleContext {
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public operatorFunctionId(): OperatorFunctionIdContext | undefined {
		return this.tryGetRuleContext(0, OperatorFunctionIdContext);
	}
	public literalOperatorId(): LiteralOperatorIdContext | undefined {
		return this.tryGetRuleContext(0, LiteralOperatorIdContext);
	}
	public templateArgumentList(): TemplateArgumentListContext | undefined {
		return this.tryGetRuleContext(0, TemplateArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateId; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTemplateId) {
			listener.enterTemplateId(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTemplateId) {
			listener.exitTemplateId(this);
		}
	}
}


export class TemplateNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateName; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTemplateName) {
			listener.enterTemplateName(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTemplateName) {
			listener.exitTemplateName(this);
		}
	}
}


export class TemplateArgumentListContext extends ParserRuleContext {
	public templateArgument(): TemplateArgumentContext[];
	public templateArgument(i: number): TemplateArgumentContext;
	public templateArgument(i?: number): TemplateArgumentContext | TemplateArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateArgumentContext);
		} else {
			return this.getRuleContext(i, TemplateArgumentContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Ellipsis);
		} else {
			return this.getToken(CPP14Parser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateArgumentList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTemplateArgumentList) {
			listener.enterTemplateArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTemplateArgumentList) {
			listener.exitTemplateArgumentList(this);
		}
	}
}


export class TemplateArgumentContext extends ParserRuleContext {
	public theTypeId(): TheTypeIdContext | undefined {
		return this.tryGetRuleContext(0, TheTypeIdContext);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public idExpression(): IdExpressionContext | undefined {
		return this.tryGetRuleContext(0, IdExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateArgument; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTemplateArgument) {
			listener.enterTemplateArgument(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTemplateArgument) {
			listener.exitTemplateArgument(this);
		}
	}
}


export class TypeNameSpecifierContext extends ParserRuleContext {
	public Typename_(): TerminalNode { return this.getToken(CPP14Parser.Typename_, 0); }
	public nestedNameSpecifier(): NestedNameSpecifierContext {
		return this.getRuleContext(0, NestedNameSpecifierContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpleTemplateId(): SimpleTemplateIdContext | undefined {
		return this.tryGetRuleContext(0, SimpleTemplateIdContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeNameSpecifier; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTypeNameSpecifier) {
			listener.enterTypeNameSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTypeNameSpecifier) {
			listener.exitTypeNameSpecifier(this);
		}
	}
}


export class ExplicitInstantiationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Extern, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_explicitInstantiation; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterExplicitInstantiation) {
			listener.enterExplicitInstantiation(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitExplicitInstantiation) {
			listener.exitExplicitInstantiation(this);
		}
	}
}


export class ExplicitSpecializationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public Less(): TerminalNode { return this.getToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(CPP14Parser.Greater, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_explicitSpecialization; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterExplicitSpecialization) {
			listener.enterExplicitSpecialization(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitExplicitSpecialization) {
			listener.exitExplicitSpecialization(this);
		}
	}
}


export class TryBlockContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(CPP14Parser.Try, 0); }
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public handlerSeq(): HandlerSeqContext {
		return this.getRuleContext(0, HandlerSeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_tryBlock; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTryBlock) {
			listener.enterTryBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTryBlock) {
			listener.exitTryBlock(this);
		}
	}
}


export class FunctionTryBlockContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(CPP14Parser.Try, 0); }
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public handlerSeq(): HandlerSeqContext {
		return this.getRuleContext(0, HandlerSeqContext);
	}
	public constructorInitializer(): ConstructorInitializerContext | undefined {
		return this.tryGetRuleContext(0, ConstructorInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functionTryBlock; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterFunctionTryBlock) {
			listener.enterFunctionTryBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitFunctionTryBlock) {
			listener.exitFunctionTryBlock(this);
		}
	}
}


export class HandlerSeqContext extends ParserRuleContext {
	public handler(): HandlerContext[];
	public handler(i: number): HandlerContext;
	public handler(i?: number): HandlerContext | HandlerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HandlerContext);
		} else {
			return this.getRuleContext(i, HandlerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_handlerSeq; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterHandlerSeq) {
			listener.enterHandlerSeq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitHandlerSeq) {
			listener.exitHandlerSeq(this);
		}
	}
}


export class HandlerContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(CPP14Parser.Catch, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public exceptionDeclaration(): ExceptionDeclarationContext {
		return this.getRuleContext(0, ExceptionDeclarationContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_handler; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterHandler) {
			listener.enterHandler(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitHandler) {
			listener.exitHandler(this);
		}
	}
}


export class ExceptionDeclarationContext extends ParserRuleContext {
	public typeSpecifierSeq(): TypeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierSeqContext);
	}
	public attributeSpecifierSeq(): AttributeSpecifierSeqContext | undefined {
		return this.tryGetRuleContext(0, AttributeSpecifierSeqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_exceptionDeclaration; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterExceptionDeclaration) {
			listener.enterExceptionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitExceptionDeclaration) {
			listener.exitExceptionDeclaration(this);
		}
	}
}


export class ThrowExpressionContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(CPP14Parser.Throw, 0); }
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_throwExpression; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterThrowExpression) {
			listener.enterThrowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitThrowExpression) {
			listener.exitThrowExpression(this);
		}
	}
}


export class ExceptionSpecificationContext extends ParserRuleContext {
	public dynamicExceptionSpecification(): DynamicExceptionSpecificationContext | undefined {
		return this.tryGetRuleContext(0, DynamicExceptionSpecificationContext);
	}
	public noeExceptSpecification(): NoeExceptSpecificationContext | undefined {
		return this.tryGetRuleContext(0, NoeExceptSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_exceptionSpecification; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterExceptionSpecification) {
			listener.enterExceptionSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitExceptionSpecification) {
			listener.exitExceptionSpecification(this);
		}
	}
}


export class DynamicExceptionSpecificationContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(CPP14Parser.Throw, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public typeIdList(): TypeIdListContext | undefined {
		return this.tryGetRuleContext(0, TypeIdListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_dynamicExceptionSpecification; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterDynamicExceptionSpecification) {
			listener.enterDynamicExceptionSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitDynamicExceptionSpecification) {
			listener.exitDynamicExceptionSpecification(this);
		}
	}
}


export class TypeIdListContext extends ParserRuleContext {
	public theTypeId(): TheTypeIdContext[];
	public theTypeId(i: number): TheTypeIdContext;
	public theTypeId(i?: number): TheTypeIdContext | TheTypeIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TheTypeIdContext);
		} else {
			return this.getRuleContext(i, TheTypeIdContext);
		}
	}
	public Ellipsis(): TerminalNode[];
	public Ellipsis(i: number): TerminalNode;
	public Ellipsis(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Ellipsis);
		} else {
			return this.getToken(CPP14Parser.Ellipsis, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Comma);
		} else {
			return this.getToken(CPP14Parser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeIdList; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTypeIdList) {
			listener.enterTypeIdList(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTypeIdList) {
			listener.exitTypeIdList(this);
		}
	}
}


export class NoeExceptSpecificationContext extends ParserRuleContext {
	public Noexcept(): TerminalNode { return this.getToken(CPP14Parser.Noexcept, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noeExceptSpecification; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterNoeExceptSpecification) {
			listener.enterNoeExceptSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitNoeExceptSpecification) {
			listener.exitNoeExceptSpecification(this);
		}
	}
}


export class TheOperatorContext extends ParserRuleContext {
	public New(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.New, 0); }
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Delete, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Minus, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mod, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Caret, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Or, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Tilde, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Not, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Greater);
		} else {
			return this.getToken(CPP14Parser.Greater, i);
		}
	}
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.Less);
		} else {
			return this.getToken(CPP14Parser.Less, i);
		}
	}
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.GreaterEqual, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusAssign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.StarAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ModAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.XorAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OrAssign, 0); }
	public RightShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightShiftAssign, 0); }
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShiftAssign, 0); }
	public Equal(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.NotEqual, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LessEqual, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAnd, 0); }
	public OrOr(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OrOr, 0); }
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	public ArrowStar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ArrowStar, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Arrow, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_theOperator; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterTheOperator) {
			listener.enterTheOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitTheOperator) {
			listener.exitTheOperator(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.IntegerLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.CharacterLiteral, 0); }
	public FloatingLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.FloatingLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.StringLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.BooleanLiteral, 0); }
	public PointerLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PointerLiteral, 0); }
	public UserDefinedLiteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.UserDefinedLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_literal; }
	// @Override
	public enterRule(listener: CPP14ParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14ParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


