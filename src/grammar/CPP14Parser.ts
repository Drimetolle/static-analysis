// Generated from lib/CPP14Parser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly Alignas = 9;
	public static readonly Alignof = 10;
	public static readonly Asm = 11;
	public static readonly Auto = 12;
	public static readonly Bool = 13;
	public static readonly Break = 14;
	public static readonly Case = 15;
	public static readonly Catch = 16;
	public static readonly Char = 17;
	public static readonly Char16 = 18;
	public static readonly Char32 = 19;
	public static readonly Class = 20;
	public static readonly Const = 21;
	public static readonly Constexpr = 22;
	public static readonly Const_cast = 23;
	public static readonly Continue = 24;
	public static readonly Decltype = 25;
	public static readonly Default = 26;
	public static readonly Delete = 27;
	public static readonly Do = 28;
	public static readonly Double = 29;
	public static readonly Dynamic_cast = 30;
	public static readonly Else = 31;
	public static readonly Enum = 32;
	public static readonly Explicit = 33;
	public static readonly Export = 34;
	public static readonly Extern = 35;
	public static readonly False_ = 36;
	public static readonly Final = 37;
	public static readonly Float = 38;
	public static readonly For = 39;
	public static readonly Friend = 40;
	public static readonly Goto = 41;
	public static readonly If = 42;
	public static readonly Inline = 43;
	public static readonly Int = 44;
	public static readonly Long = 45;
	public static readonly Mutable = 46;
	public static readonly Namespace = 47;
	public static readonly New = 48;
	public static readonly Noexcept = 49;
	public static readonly Nullptr = 50;
	public static readonly Operator = 51;
	public static readonly Override = 52;
	public static readonly Private = 53;
	public static readonly Protected = 54;
	public static readonly Public = 55;
	public static readonly Register = 56;
	public static readonly Reinterpret_cast = 57;
	public static readonly Return = 58;
	public static readonly Short = 59;
	public static readonly Signed = 60;
	public static readonly Sizeof = 61;
	public static readonly Static = 62;
	public static readonly Static_assert = 63;
	public static readonly Static_cast = 64;
	public static readonly Struct = 65;
	public static readonly Switch = 66;
	public static readonly Template = 67;
	public static readonly This = 68;
	public static readonly Thread_local = 69;
	public static readonly Throw = 70;
	public static readonly True_ = 71;
	public static readonly Try = 72;
	public static readonly Typedef = 73;
	public static readonly Typeid_ = 74;
	public static readonly Typename_ = 75;
	public static readonly Union = 76;
	public static readonly Unsigned = 77;
	public static readonly Using = 78;
	public static readonly Virtual = 79;
	public static readonly Void = 80;
	public static readonly Volatile = 81;
	public static readonly Wchar = 82;
	public static readonly While = 83;
	public static readonly LeftParen = 84;
	public static readonly RightParen = 85;
	public static readonly LeftBracket = 86;
	public static readonly RightBracket = 87;
	public static readonly LeftBrace = 88;
	public static readonly RightBrace = 89;
	public static readonly Plus = 90;
	public static readonly Minus = 91;
	public static readonly Star = 92;
	public static readonly Div = 93;
	public static readonly Mod = 94;
	public static readonly Caret = 95;
	public static readonly And = 96;
	public static readonly Or = 97;
	public static readonly Tilde = 98;
	public static readonly Not = 99;
	public static readonly Assign = 100;
	public static readonly Less = 101;
	public static readonly Greater = 102;
	public static readonly PlusAssign = 103;
	public static readonly MinusAssign = 104;
	public static readonly StarAssign = 105;
	public static readonly DivAssign = 106;
	public static readonly ModAssign = 107;
	public static readonly XorAssign = 108;
	public static readonly AndAssign = 109;
	public static readonly OrAssign = 110;
	public static readonly LeftShiftAssign = 111;
	public static readonly RightShiftAssign = 112;
	public static readonly Equal = 113;
	public static readonly NotEqual = 114;
	public static readonly LessEqual = 115;
	public static readonly GreaterEqual = 116;
	public static readonly AndAnd = 117;
	public static readonly OrOr = 118;
	public static readonly PlusPlus = 119;
	public static readonly MinusMinus = 120;
	public static readonly Comma = 121;
	public static readonly ArrowStar = 122;
	public static readonly Arrow = 123;
	public static readonly Question = 124;
	public static readonly Colon = 125;
	public static readonly Doublecolon = 126;
	public static readonly Semi = 127;
	public static readonly Dot = 128;
	public static readonly DotStar = 129;
	public static readonly Ellipsis = 130;
	public static readonly Quote = 131;
	public static readonly IncludeQuote = 132;
	public static readonly HFormat = 133;
	public static readonly Identifier = 134;
	public static readonly DecimalLiteral = 135;
	public static readonly OctalLiteral = 136;
	public static readonly HexadecimalLiteral = 137;
	public static readonly BinaryLiteral = 138;
	public static readonly Integersuffix = 139;
	public static readonly UserDefinedIntegerLiteral = 140;
	public static readonly UserDefinedFloatingLiteral = 141;
	public static readonly UserDefinedStringLiteral = 142;
	public static readonly UserDefinedCharacterLiteral = 143;
	public static readonly Whitespace = 144;
	public static readonly Newline = 145;
	public static readonly BlockComment = 146;
	public static readonly LineComment = 147;
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
	public static readonly RULE_fileName = 63;
	public static readonly RULE_blockDeclaration = 64;
	public static readonly RULE_aliasDeclaration = 65;
	public static readonly RULE_simpleDeclaration = 66;
	public static readonly RULE_staticAssertDeclaration = 67;
	public static readonly RULE_emptyDeclaration = 68;
	public static readonly RULE_attributeDeclaration = 69;
	public static readonly RULE_declSpecifier = 70;
	public static readonly RULE_declSpecifierSeq = 71;
	public static readonly RULE_storageClassSpecifier = 72;
	public static readonly RULE_functionSpecifier = 73;
	public static readonly RULE_typedefName = 74;
	public static readonly RULE_typeSpecifier = 75;
	public static readonly RULE_trailingTypeSpecifier = 76;
	public static readonly RULE_typeSpecifierSeq = 77;
	public static readonly RULE_trailingTypeSpecifierSeq = 78;
	public static readonly RULE_simpleTypeSpecifier = 79;
	public static readonly RULE_theTypeName = 80;
	public static readonly RULE_decltypeSpecifier = 81;
	public static readonly RULE_elaboratedTypeSpecifier = 82;
	public static readonly RULE_enumName = 83;
	public static readonly RULE_enumSpecifier = 84;
	public static readonly RULE_enumHead = 85;
	public static readonly RULE_opaqueEnumDeclaration = 86;
	public static readonly RULE_enumkey = 87;
	public static readonly RULE_enumbase = 88;
	public static readonly RULE_enumeratorList = 89;
	public static readonly RULE_enumeratorDefinition = 90;
	public static readonly RULE_enumerator = 91;
	public static readonly RULE_namespaceName = 92;
	public static readonly RULE_originalNamespaceName = 93;
	public static readonly RULE_namespaceDefinition = 94;
	public static readonly RULE_namespaceAlias = 95;
	public static readonly RULE_namespaceAliasDefinition = 96;
	public static readonly RULE_qualifiednamespacespecifier = 97;
	public static readonly RULE_usingDeclaration = 98;
	public static readonly RULE_usingDirective = 99;
	public static readonly RULE_asmDefinition = 100;
	public static readonly RULE_linkageSpecification = 101;
	public static readonly RULE_attributeSpecifierSeq = 102;
	public static readonly RULE_attributeSpecifier = 103;
	public static readonly RULE_alignmentspecifier = 104;
	public static readonly RULE_attributeList = 105;
	public static readonly RULE_attribute = 106;
	public static readonly RULE_attributeNamespace = 107;
	public static readonly RULE_attributeArgumentClause = 108;
	public static readonly RULE_balancedTokenSeq = 109;
	public static readonly RULE_balancedtoken = 110;
	public static readonly RULE_initDeclaratorList = 111;
	public static readonly RULE_initDeclarator = 112;
	public static readonly RULE_declarator = 113;
	public static readonly RULE_pointerDeclarator = 114;
	public static readonly RULE_noPointerDeclarator = 115;
	public static readonly RULE_parametersAndQualifiers = 116;
	public static readonly RULE_trailingReturnType = 117;
	public static readonly RULE_pointerOperator = 118;
	public static readonly RULE_cvqualifierseq = 119;
	public static readonly RULE_cvQualifier = 120;
	public static readonly RULE_refqualifier = 121;
	public static readonly RULE_declaratorid = 122;
	public static readonly RULE_theTypeId = 123;
	public static readonly RULE_abstractDeclarator = 124;
	public static readonly RULE_pointerAbstractDeclarator = 125;
	public static readonly RULE_noPointerAbstractDeclarator = 126;
	public static readonly RULE_abstractPackDeclarator = 127;
	public static readonly RULE_noPointerAbstractPackDeclarator = 128;
	public static readonly RULE_parameterDeclarationClause = 129;
	public static readonly RULE_parameterDeclarationList = 130;
	public static readonly RULE_parameterDeclaration = 131;
	public static readonly RULE_functionDefinition = 132;
	public static readonly RULE_functionBody = 133;
	public static readonly RULE_initializer = 134;
	public static readonly RULE_braceOrEqualInitializer = 135;
	public static readonly RULE_initializerClause = 136;
	public static readonly RULE_initializerList = 137;
	public static readonly RULE_bracedInitList = 138;
	public static readonly RULE_className = 139;
	public static readonly RULE_classSpecifier = 140;
	public static readonly RULE_classHead = 141;
	public static readonly RULE_classHeadName = 142;
	public static readonly RULE_classVirtSpecifier = 143;
	public static readonly RULE_classKey = 144;
	public static readonly RULE_memberSpecification = 145;
	public static readonly RULE_memberdeclaration = 146;
	public static readonly RULE_memberDeclaratorList = 147;
	public static readonly RULE_memberDeclarator = 148;
	public static readonly RULE_virtualSpecifierSeq = 149;
	public static readonly RULE_virtualSpecifier = 150;
	public static readonly RULE_pureSpecifier = 151;
	public static readonly RULE_baseClause = 152;
	public static readonly RULE_baseSpecifierList = 153;
	public static readonly RULE_baseSpecifier = 154;
	public static readonly RULE_classOrDeclType = 155;
	public static readonly RULE_baseTypeSpecifier = 156;
	public static readonly RULE_accessSpecifier = 157;
	public static readonly RULE_conversionFunctionId = 158;
	public static readonly RULE_conversionTypeId = 159;
	public static readonly RULE_conversionDeclarator = 160;
	public static readonly RULE_constructorInitializer = 161;
	public static readonly RULE_memInitializerList = 162;
	public static readonly RULE_memInitializer = 163;
	public static readonly RULE_meminitializerid = 164;
	public static readonly RULE_operatorFunctionId = 165;
	public static readonly RULE_literalOperatorId = 166;
	public static readonly RULE_templateDeclaration = 167;
	public static readonly RULE_templateparameterList = 168;
	public static readonly RULE_templateParameter = 169;
	public static readonly RULE_typeParameter = 170;
	public static readonly RULE_simpleTemplateId = 171;
	public static readonly RULE_templateId = 172;
	public static readonly RULE_templateName = 173;
	public static readonly RULE_templateArgumentList = 174;
	public static readonly RULE_templateArgument = 175;
	public static readonly RULE_typeNameSpecifier = 176;
	public static readonly RULE_explicitInstantiation = 177;
	public static readonly RULE_explicitSpecialization = 178;
	public static readonly RULE_tryBlock = 179;
	public static readonly RULE_functionTryBlock = 180;
	public static readonly RULE_handlerSeq = 181;
	public static readonly RULE_handler = 182;
	public static readonly RULE_exceptionDeclaration = 183;
	public static readonly RULE_throwExpression = 184;
	public static readonly RULE_exceptionSpecification = 185;
	public static readonly RULE_dynamicExceptionSpecification = 186;
	public static readonly RULE_typeIdList = 187;
	public static readonly RULE_noeExceptSpecification = 188;
	public static readonly RULE_theOperator = 189;
	public static readonly RULE_literal = 190;
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
		"declarationseq", "declaration", "includeDefinition", "fileName", "blockDeclaration", 
		"aliasDeclaration", "simpleDeclaration", "staticAssertDeclaration", "emptyDeclaration", 
		"attributeDeclaration", "declSpecifier", "declSpecifierSeq", "storageClassSpecifier", 
		"functionSpecifier", "typedefName", "typeSpecifier", "trailingTypeSpecifier", 
		"typeSpecifierSeq", "trailingTypeSpecifierSeq", "simpleTypeSpecifier", 
		"theTypeName", "decltypeSpecifier", "elaboratedTypeSpecifier", "enumName", 
		"enumSpecifier", "enumHead", "opaqueEnumDeclaration", "enumkey", "enumbase", 
		"enumeratorList", "enumeratorDefinition", "enumerator", "namespaceName", 
		"originalNamespaceName", "namespaceDefinition", "namespaceAlias", "namespaceAliasDefinition", 
		"qualifiednamespacespecifier", "usingDeclaration", "usingDirective", "asmDefinition", 
		"linkageSpecification", "attributeSpecifierSeq", "attributeSpecifier", 
		"alignmentspecifier", "attributeList", "attribute", "attributeNamespace", 
		"attributeArgumentClause", "balancedTokenSeq", "balancedtoken", "initDeclaratorList", 
		"initDeclarator", "declarator", "pointerDeclarator", "noPointerDeclarator", 
		"parametersAndQualifiers", "trailingReturnType", "pointerOperator", "cvqualifierseq", 
		"cvQualifier", "refqualifier", "declaratorid", "theTypeId", "abstractDeclarator", 
		"pointerAbstractDeclarator", "noPointerAbstractDeclarator", "abstractPackDeclarator", 
		"noPointerAbstractPackDeclarator", "parameterDeclarationClause", "parameterDeclarationList", 
		"parameterDeclaration", "functionDefinition", "functionBody", "initializer", 
		"braceOrEqualInitializer", "initializerClause", "initializerList", "bracedInitList", 
		"className", "classSpecifier", "classHead", "classHeadName", "classVirtSpecifier", 
		"classKey", "memberSpecification", "memberdeclaration", "memberDeclaratorList", 
		"memberDeclarator", "virtualSpecifierSeq", "virtualSpecifier", "pureSpecifier", 
		"baseClause", "baseSpecifierList", "baseSpecifier", "classOrDeclType", 
		"baseTypeSpecifier", "accessSpecifier", "conversionFunctionId", "conversionTypeId", 
		"conversionDeclarator", "constructorInitializer", "memInitializerList", 
		"memInitializer", "meminitializerid", "operatorFunctionId", "literalOperatorId", 
		"templateDeclaration", "templateparameterList", "templateParameter", "typeParameter", 
		"simpleTemplateId", "templateId", "templateName", "templateArgumentList", 
		"templateArgument", "typeNameSpecifier", "explicitInstantiation", "explicitSpecialization", 
		"tryBlock", "functionTryBlock", "handlerSeq", "handler", "exceptionDeclaration", 
		"throwExpression", "exceptionSpecification", "dynamicExceptionSpecification", 
		"typeIdList", "noeExceptSpecification", "theOperator", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'#include'", "'alignas'", "'alignof'", "'asm'", "'auto'", 
		"'bool'", "'break'", "'case'", "'catch'", "'char'", "'char16_t'", "'char32_t'", 
		"'class'", "'const'", "'constexpr'", "'const_cast'", "'continue'", "'decltype'", 
		"'default'", "'delete'", "'do'", "'double'", "'dynamic_cast'", "'else'", 
		"'enum'", "'explicit'", "'export'", "'extern'", "'false'", "'final'", 
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
		"'?'", "':'", "'::'", "';'", "'.'", "'.*'", "'...'", "'\"'", undefined, 
		"'h'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IntegerLiteral", "CharacterLiteral", "FloatingLiteral", "StringLiteral", 
		"BooleanLiteral", "PointerLiteral", "UserDefinedLiteral", "Include", "Alignas", 
		"Alignof", "Asm", "Auto", "Bool", "Break", "Case", "Catch", "Char", "Char16", 
		"Char32", "Class", "Const", "Constexpr", "Const_cast", "Continue", "Decltype", 
		"Default", "Delete", "Do", "Double", "Dynamic_cast", "Else", "Enum", "Explicit", 
		"Export", "Extern", "False_", "Final", "Float", "For", "Friend", "Goto", 
		"If", "Inline", "Int", "Long", "Mutable", "Namespace", "New", "Noexcept", 
		"Nullptr", "Operator", "Override", "Private", "Protected", "Public", "Register", 
		"Reinterpret_cast", "Return", "Short", "Signed", "Sizeof", "Static", "Static_assert", 
		"Static_cast", "Struct", "Switch", "Template", "This", "Thread_local", 
		"Throw", "True_", "Try", "Typedef", "Typeid_", "Typename_", "Union", "Unsigned", 
		"Using", "Virtual", "Void", "Volatile", "Wchar", "While", "LeftParen", 
		"RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace", 
		"Plus", "Minus", "Star", "Div", "Mod", "Caret", "And", "Or", "Tilde", 
		"Not", "Assign", "Less", "Greater", "PlusAssign", "MinusAssign", "StarAssign", 
		"DivAssign", "ModAssign", "XorAssign", "AndAssign", "OrAssign", "LeftShiftAssign", 
		"RightShiftAssign", "Equal", "NotEqual", "LessEqual", "GreaterEqual", 
		"AndAnd", "OrOr", "PlusPlus", "MinusMinus", "Comma", "ArrowStar", "Arrow", 
		"Question", "Colon", "Doublecolon", "Semi", "Dot", "DotStar", "Ellipsis", 
		"Quote", "IncludeQuote", "HFormat", "Identifier", "DecimalLiteral", "OctalLiteral", 
		"HexadecimalLiteral", "BinaryLiteral", "Integersuffix", "UserDefinedIntegerLiteral", 
		"UserDefinedFloatingLiteral", "UserDefinedStringLiteral", "UserDefinedCharacterLiteral", 
		"Whitespace", "Newline", "BlockComment", "LineComment",
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
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CPP14Parser.Include - 8)) | (1 << (CPP14Parser.Alignas - 8)) | (1 << (CPP14Parser.Asm - 8)) | (1 << (CPP14Parser.Auto - 8)) | (1 << (CPP14Parser.Bool - 8)) | (1 << (CPP14Parser.Char - 8)) | (1 << (CPP14Parser.Char16 - 8)) | (1 << (CPP14Parser.Char32 - 8)) | (1 << (CPP14Parser.Class - 8)) | (1 << (CPP14Parser.Const - 8)) | (1 << (CPP14Parser.Constexpr - 8)) | (1 << (CPP14Parser.Decltype - 8)) | (1 << (CPP14Parser.Double - 8)) | (1 << (CPP14Parser.Enum - 8)) | (1 << (CPP14Parser.Explicit - 8)) | (1 << (CPP14Parser.Extern - 8)) | (1 << (CPP14Parser.Float - 8)))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CPP14Parser.Friend - 40)) | (1 << (CPP14Parser.Inline - 40)) | (1 << (CPP14Parser.Int - 40)) | (1 << (CPP14Parser.Long - 40)) | (1 << (CPP14Parser.Mutable - 40)) | (1 << (CPP14Parser.Namespace - 40)) | (1 << (CPP14Parser.Operator - 40)) | (1 << (CPP14Parser.Register - 40)) | (1 << (CPP14Parser.Short - 40)) | (1 << (CPP14Parser.Signed - 40)) | (1 << (CPP14Parser.Static - 40)) | (1 << (CPP14Parser.Static_assert - 40)) | (1 << (CPP14Parser.Struct - 40)) | (1 << (CPP14Parser.Template - 40)) | (1 << (CPP14Parser.Thread_local - 40)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CPP14Parser.Typedef - 73)) | (1 << (CPP14Parser.Typename_ - 73)) | (1 << (CPP14Parser.Union - 73)) | (1 << (CPP14Parser.Unsigned - 73)) | (1 << (CPP14Parser.Using - 73)) | (1 << (CPP14Parser.Virtual - 73)) | (1 << (CPP14Parser.Void - 73)) | (1 << (CPP14Parser.Volatile - 73)) | (1 << (CPP14Parser.Wchar - 73)) | (1 << (CPP14Parser.LeftParen - 73)) | (1 << (CPP14Parser.LeftBracket - 73)) | (1 << (CPP14Parser.Star - 73)) | (1 << (CPP14Parser.And - 73)) | (1 << (CPP14Parser.Tilde - 73)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (CPP14Parser.AndAnd - 117)) | (1 << (CPP14Parser.Doublecolon - 117)) | (1 << (CPP14Parser.Semi - 117)) | (1 << (CPP14Parser.Ellipsis - 117)) | (1 << (CPP14Parser.IncludeQuote - 117)) | (1 << (CPP14Parser.Identifier - 117)))) !== 0)) {
				{
				this.state = 382;
				this.declarationseq();
				}
			}

			this.state = 385;
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
			this.state = 399;
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
				this.state = 388;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 387;
						this.literal();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 390;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case CPP14Parser.This:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 392;
				this.match(CPP14Parser.This);
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 393;
				this.match(CPP14Parser.LeftParen);
				this.state = 394;
				this.expression();
				this.state = 395;
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
				this.state = 397;
				this.idExpression();
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 398;
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
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 401;
				this.unqualifiedId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
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
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 405;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 406;
				this.operatorFunctionId();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 407;
				this.conversionFunctionId();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 408;
				this.literalOperatorId();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 409;
				this.match(CPP14Parser.Tilde);
				this.state = 412;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.Identifier:
					{
					this.state = 410;
					this.className();
					}
					break;
				case CPP14Parser.Decltype:
					{
					this.state = 411;
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
				this.state = 414;
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
			this.state = 417;
			this.nestedNameSpecifier(0);
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Template) {
				{
				this.state = 418;
				this.match(CPP14Parser.Template);
				}
			}

			this.state = 421;
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
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 424;
				this.theTypeName();
				}
				break;

			case 2:
				{
				this.state = 425;
				this.namespaceName();
				}
				break;

			case 3:
				{
				this.state = 426;
				this.decltypeSpecifier();
				}
				break;
			}
			this.state = 429;
			this.match(CPP14Parser.Doublecolon);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 442;
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
					this.state = 431;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 437;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						this.state = 432;
						this.match(CPP14Parser.Identifier);
						}
						break;

					case 2:
						{
						this.state = 434;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CPP14Parser.Template) {
							{
							this.state = 433;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 436;
						this.simpleTemplateId();
						}
						break;
					}
					this.state = 439;
					this.match(CPP14Parser.Doublecolon);
					}
					}
				}
				this.state = 444;
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
			this.state = 445;
			this.lambdaIntroducer();
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.LeftParen) {
				{
				this.state = 446;
				this.lambdaDeclarator();
				}
			}

			this.state = 449;
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
			this.state = 451;
			this.match(CPP14Parser.LeftBracket);
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.This || _la === CPP14Parser.And || _la === CPP14Parser.Assign || _la === CPP14Parser.Identifier) {
				{
				this.state = 452;
				this.lambdaCapture();
				}
			}

			this.state = 455;
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
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 457;
				this.captureList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 458;
				this.captureDefault();
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Comma) {
					{
					this.state = 459;
					this.match(CPP14Parser.Comma);
					this.state = 460;
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
			this.state = 465;
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
			this.state = 467;
			this.capture();
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 468;
				this.match(CPP14Parser.Comma);
				this.state = 469;
				this.capture();
				}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 475;
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
			this.state = 480;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 478;
				this.simpleCapture();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 479;
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
			this.state = 487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.And:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.And) {
					{
					this.state = 482;
					this.match(CPP14Parser.And);
					}
				}

				this.state = 485;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.This:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 486;
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
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.And) {
				{
				this.state = 489;
				this.match(CPP14Parser.And);
				}
			}

			this.state = 492;
			this.match(CPP14Parser.Identifier);
			this.state = 493;
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
			this.state = 495;
			this.match(CPP14Parser.LeftParen);
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.Struct - 65)) | (1 << (CPP14Parser.Thread_local - 65)) | (1 << (CPP14Parser.Typedef - 65)) | (1 << (CPP14Parser.Typename_ - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Virtual - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftBracket - 65)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				this.state = 496;
				this.parameterDeclarationClause();
				}
			}

			this.state = 499;
			this.match(CPP14Parser.RightParen);
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Mutable) {
				{
				this.state = 500;
				this.match(CPP14Parser.Mutable);
				}
			}

			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Noexcept || _la === CPP14Parser.Throw) {
				{
				this.state = 503;
				this.exceptionSpecification();
				}
			}

			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 506;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Arrow) {
				{
				this.state = 509;
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
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 513;
				this.primaryExpression();
				}
				break;

			case 2:
				{
				this.state = 516;
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
					this.state = 514;
					this.simpleTypeSpecifier();
					}
					break;
				case CPP14Parser.Typename_:
					{
					this.state = 515;
					this.typeNameSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 524;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.LeftParen:
					{
					this.state = 518;
					this.match(CPP14Parser.LeftParen);
					this.state = 520;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CPP14Parser.Throw - 70)) | (1 << (CPP14Parser.Typeid_ - 70)) | (1 << (CPP14Parser.Typename_ - 70)) | (1 << (CPP14Parser.Unsigned - 70)) | (1 << (CPP14Parser.Void - 70)) | (1 << (CPP14Parser.Wchar - 70)) | (1 << (CPP14Parser.LeftParen - 70)) | (1 << (CPP14Parser.LeftBracket - 70)) | (1 << (CPP14Parser.LeftBrace - 70)) | (1 << (CPP14Parser.Plus - 70)) | (1 << (CPP14Parser.Minus - 70)) | (1 << (CPP14Parser.Star - 70)) | (1 << (CPP14Parser.And - 70)) | (1 << (CPP14Parser.Or - 70)) | (1 << (CPP14Parser.Tilde - 70)) | (1 << (CPP14Parser.Not - 70)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
						{
						this.state = 519;
						this.expressionList();
						}
					}

					this.state = 522;
					this.match(CPP14Parser.RightParen);
					}
					break;
				case CPP14Parser.LeftBrace:
					{
					this.state = 523;
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
				this.state = 526;
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
				this.state = 527;
				this.match(CPP14Parser.Less);
				this.state = 528;
				this.theTypeId();
				this.state = 529;
				this.match(CPP14Parser.Greater);
				this.state = 530;
				this.match(CPP14Parser.LeftParen);
				this.state = 531;
				this.expression();
				this.state = 532;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 4:
				{
				this.state = 534;
				this.typeIdOfTheTypeId();
				this.state = 535;
				this.match(CPP14Parser.LeftParen);
				this.state = 538;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 536;
					this.expression();
					}
					break;

				case 2:
					{
					this.state = 537;
					this.theTypeId();
					}
					break;
				}
				this.state = 540;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 571;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 569;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 544;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 545;
						this.match(CPP14Parser.LeftBracket);
						this.state = 548;
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
							this.state = 546;
							this.expression();
							}
							break;
						case CPP14Parser.LeftBrace:
							{
							this.state = 547;
							this.bracedInitList();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 550;
						this.match(CPP14Parser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 552;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 553;
						this.match(CPP14Parser.LeftParen);
						this.state = 555;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CPP14Parser.Throw - 70)) | (1 << (CPP14Parser.Typeid_ - 70)) | (1 << (CPP14Parser.Typename_ - 70)) | (1 << (CPP14Parser.Unsigned - 70)) | (1 << (CPP14Parser.Void - 70)) | (1 << (CPP14Parser.Wchar - 70)) | (1 << (CPP14Parser.LeftParen - 70)) | (1 << (CPP14Parser.LeftBracket - 70)) | (1 << (CPP14Parser.LeftBrace - 70)) | (1 << (CPP14Parser.Plus - 70)) | (1 << (CPP14Parser.Minus - 70)) | (1 << (CPP14Parser.Star - 70)) | (1 << (CPP14Parser.And - 70)) | (1 << (CPP14Parser.Or - 70)) | (1 << (CPP14Parser.Tilde - 70)) | (1 << (CPP14Parser.Not - 70)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
							{
							this.state = 554;
							this.expressionList();
							}
						}

						this.state = 557;
						this.match(CPP14Parser.RightParen);
						}
						break;

					case 3:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixExpression);
						this.state = 558;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 559;
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
						this.state = 565;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
						case 1:
							{
							this.state = 561;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === CPP14Parser.Template) {
								{
								this.state = 560;
								this.match(CPP14Parser.Template);
								}
							}

							this.state = 563;
							this.idExpression();
							}
							break;

						case 2:
							{
							this.state = 564;
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
						this.state = 567;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 568;
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
				this.state = 573;
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
			this.state = 574;
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
			this.state = 576;
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
			this.state = 597;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 579;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 578;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 581;
					this.theTypeName();
					this.state = 582;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 586;
				this.match(CPP14Parser.Tilde);
				this.state = 587;
				this.theTypeName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 588;
				this.nestedNameSpecifier(0);
				this.state = 589;
				this.match(CPP14Parser.Template);
				this.state = 590;
				this.simpleTemplateId();
				this.state = 591;
				this.match(CPP14Parser.Doublecolon);
				this.state = 592;
				this.match(CPP14Parser.Tilde);
				this.state = 593;
				this.theTypeName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 595;
				this.match(CPP14Parser.Tilde);
				this.state = 596;
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
			this.state = 626;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 599;
				this.postfixExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 604;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.PlusPlus:
					{
					this.state = 600;
					this.match(CPP14Parser.PlusPlus);
					}
					break;
				case CPP14Parser.MinusMinus:
					{
					this.state = 601;
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
					this.state = 602;
					this.unaryOperator();
					}
					break;
				case CPP14Parser.Sizeof:
					{
					this.state = 603;
					this.match(CPP14Parser.Sizeof);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 606;
				this.unaryExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 607;
				this.match(CPP14Parser.Sizeof);
				this.state = 616;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.LeftParen:
					{
					this.state = 608;
					this.match(CPP14Parser.LeftParen);
					this.state = 609;
					this.theTypeId();
					this.state = 610;
					this.match(CPP14Parser.RightParen);
					}
					break;
				case CPP14Parser.Ellipsis:
					{
					this.state = 612;
					this.match(CPP14Parser.Ellipsis);
					this.state = 613;
					this.match(CPP14Parser.LeftParen);
					this.state = 614;
					this.match(CPP14Parser.Identifier);
					this.state = 615;
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
				this.state = 618;
				this.match(CPP14Parser.Alignof);
				this.state = 619;
				this.match(CPP14Parser.LeftParen);
				this.state = 620;
				this.theTypeId();
				this.state = 621;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 623;
				this.noExceptExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 624;
				this.newExpression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 625;
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
			this.state = 628;
			_la = this._input.LA(1);
			if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (CPP14Parser.Plus - 90)) | (1 << (CPP14Parser.Minus - 90)) | (1 << (CPP14Parser.Star - 90)) | (1 << (CPP14Parser.And - 90)) | (1 << (CPP14Parser.Or - 90)) | (1 << (CPP14Parser.Tilde - 90)) | (1 << (CPP14Parser.Not - 90)))) !== 0))) {
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
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Doublecolon) {
				{
				this.state = 630;
				this.match(CPP14Parser.Doublecolon);
				}
			}

			this.state = 633;
			this.match(CPP14Parser.New);
			this.state = 635;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 634;
				this.newPlacement();
				}
				break;
			}
			this.state = 642;
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
				this.state = 637;
				this.newTypeId();
				}
				break;
			case CPP14Parser.LeftParen:
				{
				{
				this.state = 638;
				this.match(CPP14Parser.LeftParen);
				this.state = 639;
				this.theTypeId();
				this.state = 640;
				this.match(CPP14Parser.RightParen);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 645;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.LeftParen || _la === CPP14Parser.LeftBrace) {
				{
				this.state = 644;
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
			this.state = 647;
			this.match(CPP14Parser.LeftParen);
			this.state = 648;
			this.expressionList();
			this.state = 649;
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
			this.state = 651;
			this.typeSpecifierSeq();
			this.state = 653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 652;
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
			this.state = 660;
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
				this.state = 655;
				this.pointerOperator();
				this.state = 657;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 656;
					this.newDeclarator();
					}
					break;
				}
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 659;
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
			this.state = 663;
			this.match(CPP14Parser.LeftBracket);
			this.state = 664;
			this.expression();
			this.state = 665;
			this.match(CPP14Parser.RightBracket);
			this.state = 667;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 666;
				this.attributeSpecifierSeq();
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 678;
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
					this.state = 669;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 670;
					this.match(CPP14Parser.LeftBracket);
					this.state = 671;
					this.constantExpression();
					this.state = 672;
					this.match(CPP14Parser.RightBracket);
					this.state = 674;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						this.state = 673;
						this.attributeSpecifierSeq();
						}
						break;
					}
					}
					}
				}
				this.state = 680;
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
			this.state = 687;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 681;
				this.match(CPP14Parser.LeftParen);
				this.state = 683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CPP14Parser.Throw - 70)) | (1 << (CPP14Parser.Typeid_ - 70)) | (1 << (CPP14Parser.Typename_ - 70)) | (1 << (CPP14Parser.Unsigned - 70)) | (1 << (CPP14Parser.Void - 70)) | (1 << (CPP14Parser.Wchar - 70)) | (1 << (CPP14Parser.LeftParen - 70)) | (1 << (CPP14Parser.LeftBracket - 70)) | (1 << (CPP14Parser.LeftBrace - 70)) | (1 << (CPP14Parser.Plus - 70)) | (1 << (CPP14Parser.Minus - 70)) | (1 << (CPP14Parser.Star - 70)) | (1 << (CPP14Parser.And - 70)) | (1 << (CPP14Parser.Or - 70)) | (1 << (CPP14Parser.Tilde - 70)) | (1 << (CPP14Parser.Not - 70)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
					{
					this.state = 682;
					this.expressionList();
					}
				}

				this.state = 685;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 686;
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
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Doublecolon) {
				{
				this.state = 689;
				this.match(CPP14Parser.Doublecolon);
				}
			}

			this.state = 692;
			this.match(CPP14Parser.Delete);
			this.state = 695;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 693;
				this.match(CPP14Parser.LeftBracket);
				this.state = 694;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			}
			this.state = 697;
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
			this.state = 699;
			this.match(CPP14Parser.Noexcept);
			this.state = 700;
			this.match(CPP14Parser.LeftParen);
			this.state = 701;
			this.expression();
			this.state = 702;
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
			this.state = 710;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 704;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 705;
				this.match(CPP14Parser.LeftParen);
				this.state = 706;
				this.theTypeId();
				this.state = 707;
				this.match(CPP14Parser.RightParen);
				this.state = 708;
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
			this.state = 712;
			this.castExpression();
			this.state = 717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.ArrowStar || _la === CPP14Parser.DotStar) {
				{
				{
				this.state = 713;
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
				this.state = 714;
				this.castExpression();
				}
				}
				this.state = 719;
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
			this.state = 720;
			this.pointerMemberExpression();
			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (CPP14Parser.Star - 92)) | (1 << (CPP14Parser.Div - 92)) | (1 << (CPP14Parser.Mod - 92)))) !== 0)) {
				{
				{
				this.state = 721;
				_la = this._input.LA(1);
				if (!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (CPP14Parser.Star - 92)) | (1 << (CPP14Parser.Div - 92)) | (1 << (CPP14Parser.Mod - 92)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 722;
				this.pointerMemberExpression();
				}
				}
				this.state = 727;
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
			this.state = 728;
			this.multiplicativeExpression();
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Plus || _la === CPP14Parser.Minus) {
				{
				{
				this.state = 729;
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
				this.state = 730;
				this.multiplicativeExpression();
				}
				}
				this.state = 735;
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
			this.state = 736;
			this.additiveExpression();
			this.state = 742;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 737;
					this.shiftOperator();
					this.state = 738;
					this.additiveExpression();
					}
					}
				}
				this.state = 744;
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
			this.state = 749;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Greater:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 745;
				this.match(CPP14Parser.Greater);
				this.state = 746;
				this.match(CPP14Parser.Greater);
				}
				break;
			case CPP14Parser.Less:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 747;
				this.match(CPP14Parser.Less);
				this.state = 748;
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
			this.state = 751;
			this.shiftExpression();
			this.state = 756;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 752;
					_la = this._input.LA(1);
					if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (CPP14Parser.Less - 101)) | (1 << (CPP14Parser.Greater - 101)) | (1 << (CPP14Parser.LessEqual - 101)) | (1 << (CPP14Parser.GreaterEqual - 101)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 753;
					this.shiftExpression();
					}
					}
				}
				this.state = 758;
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
			this.state = 759;
			this.relationalExpression();
			this.state = 764;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Equal || _la === CPP14Parser.NotEqual) {
				{
				{
				this.state = 760;
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
				this.state = 761;
				this.relationalExpression();
				}
				}
				this.state = 766;
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
			this.state = 767;
			this.equalityExpression();
			this.state = 772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.And) {
				{
				{
				this.state = 768;
				this.match(CPP14Parser.And);
				this.state = 769;
				this.equalityExpression();
				}
				}
				this.state = 774;
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
			this.state = 775;
			this.andExpression();
			this.state = 780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Caret) {
				{
				{
				this.state = 776;
				this.match(CPP14Parser.Caret);
				this.state = 777;
				this.andExpression();
				}
				}
				this.state = 782;
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
			this.state = 783;
			this.exclusiveOrExpression();
			this.state = 788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Or) {
				{
				{
				this.state = 784;
				this.match(CPP14Parser.Or);
				this.state = 785;
				this.exclusiveOrExpression();
				}
				}
				this.state = 790;
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
			this.state = 791;
			this.inclusiveOrExpression();
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.AndAnd) {
				{
				{
				this.state = 792;
				this.match(CPP14Parser.AndAnd);
				this.state = 793;
				this.inclusiveOrExpression();
				}
				}
				this.state = 798;
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
			this.state = 799;
			this.logicalAndExpression();
			this.state = 804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.OrOr) {
				{
				{
				this.state = 800;
				this.match(CPP14Parser.OrOr);
				this.state = 801;
				this.logicalAndExpression();
				}
				}
				this.state = 806;
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
			this.state = 807;
			this.logicalOrExpression();
			this.state = 813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Question) {
				{
				this.state = 808;
				this.match(CPP14Parser.Question);
				this.state = 809;
				this.expression();
				this.state = 810;
				this.match(CPP14Parser.Colon);
				this.state = 811;
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
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 815;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 816;
				this.logicalOrExpression();
				this.state = 817;
				this.assignmentOperator();
				this.state = 818;
				this.initializerClause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 820;
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
			this.state = 823;
			_la = this._input.LA(1);
			if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (CPP14Parser.Assign - 100)) | (1 << (CPP14Parser.PlusAssign - 100)) | (1 << (CPP14Parser.MinusAssign - 100)) | (1 << (CPP14Parser.StarAssign - 100)) | (1 << (CPP14Parser.DivAssign - 100)) | (1 << (CPP14Parser.ModAssign - 100)) | (1 << (CPP14Parser.XorAssign - 100)) | (1 << (CPP14Parser.AndAssign - 100)) | (1 << (CPP14Parser.OrAssign - 100)) | (1 << (CPP14Parser.LeftShiftAssign - 100)) | (1 << (CPP14Parser.RightShiftAssign - 100)))) !== 0))) {
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
			this.state = 825;
			this.assignmentExpression();
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 826;
				this.match(CPP14Parser.Comma);
				this.state = 827;
				this.assignmentExpression();
				}
				}
				this.state = 832;
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
			this.state = 833;
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
			this.state = 848;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 835;
				this.labeledStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 837;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
				case 1:
					{
					this.state = 836;
					this.attributeSpecifierSeq();
					}
					break;
				}
				this.state = 845;
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
					this.state = 839;
					this.expressionStatement();
					}
					break;
				case CPP14Parser.LeftBrace:
					{
					this.state = 840;
					this.compoundStatement();
					}
					break;
				case CPP14Parser.If:
				case CPP14Parser.Switch:
					{
					this.state = 841;
					this.selectionStatement();
					}
					break;
				case CPP14Parser.Do:
				case CPP14Parser.For:
				case CPP14Parser.While:
					{
					this.state = 842;
					this.iterationStatement();
					}
					break;
				case CPP14Parser.Break:
				case CPP14Parser.Continue:
				case CPP14Parser.Goto:
				case CPP14Parser.Return:
					{
					this.state = 843;
					this.jumpStatement();
					}
					break;
				case CPP14Parser.Try:
					{
					this.state = 844;
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
				this.state = 847;
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
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 850;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 857;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Identifier:
				{
				this.state = 853;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.Case:
				{
				this.state = 854;
				this.match(CPP14Parser.Case);
				this.state = 855;
				this.constantExpression();
				}
				break;
			case CPP14Parser.Default:
				{
				this.state = 856;
				this.match(CPP14Parser.Default);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 859;
			this.match(CPP14Parser.Colon);
			this.state = 860;
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
			this.state = 863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CPP14Parser.Throw - 70)) | (1 << (CPP14Parser.Typeid_ - 70)) | (1 << (CPP14Parser.Typename_ - 70)) | (1 << (CPP14Parser.Unsigned - 70)) | (1 << (CPP14Parser.Void - 70)) | (1 << (CPP14Parser.Wchar - 70)) | (1 << (CPP14Parser.LeftParen - 70)) | (1 << (CPP14Parser.LeftBracket - 70)) | (1 << (CPP14Parser.Plus - 70)) | (1 << (CPP14Parser.Minus - 70)) | (1 << (CPP14Parser.Star - 70)) | (1 << (CPP14Parser.And - 70)) | (1 << (CPP14Parser.Or - 70)) | (1 << (CPP14Parser.Tilde - 70)) | (1 << (CPP14Parser.Not - 70)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
				{
				this.state = 862;
				this.expression();
				}
			}

			this.state = 865;
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
			this.state = 867;
			this.match(CPP14Parser.LeftBrace);
			this.state = 869;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Return - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.Switch - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.Thread_local - 64)) | (1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CPP14Parser.And - 96)) | (1 << (CPP14Parser.Or - 96)) | (1 << (CPP14Parser.Tilde - 96)) | (1 << (CPP14Parser.Not - 96)) | (1 << (CPP14Parser.AndAnd - 96)) | (1 << (CPP14Parser.PlusPlus - 96)) | (1 << (CPP14Parser.MinusMinus - 96)) | (1 << (CPP14Parser.Doublecolon - 96)) | (1 << (CPP14Parser.Semi - 96)))) !== 0) || _la === CPP14Parser.Ellipsis || _la === CPP14Parser.Identifier) {
				{
				this.state = 868;
				this.statementSeq();
				}
			}

			this.state = 871;
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
			this.state = 874;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 873;
				this.statement();
				}
				}
				this.state = 876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Return - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.Switch - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.Thread_local - 64)) | (1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CPP14Parser.And - 96)) | (1 << (CPP14Parser.Or - 96)) | (1 << (CPP14Parser.Tilde - 96)) | (1 << (CPP14Parser.Not - 96)) | (1 << (CPP14Parser.AndAnd - 96)) | (1 << (CPP14Parser.PlusPlus - 96)) | (1 << (CPP14Parser.MinusMinus - 96)) | (1 << (CPP14Parser.Doublecolon - 96)) | (1 << (CPP14Parser.Semi - 96)))) !== 0) || _la === CPP14Parser.Ellipsis || _la === CPP14Parser.Identifier);
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
			this.state = 893;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 878;
				this.match(CPP14Parser.If);
				this.state = 879;
				this.match(CPP14Parser.LeftParen);
				this.state = 880;
				this.condition();
				this.state = 881;
				this.match(CPP14Parser.RightParen);
				this.state = 882;
				this.statement();
				this.state = 885;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 883;
					this.match(CPP14Parser.Else);
					this.state = 884;
					this.statement();
					}
					break;
				}
				}
				break;
			case CPP14Parser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 887;
				this.match(CPP14Parser.Switch);
				this.state = 888;
				this.match(CPP14Parser.LeftParen);
				this.state = 889;
				this.condition();
				this.state = 890;
				this.match(CPP14Parser.RightParen);
				this.state = 891;
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
			this.state = 906;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 895;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 897;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 896;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 899;
				this.declSpecifierSeq();
				this.state = 900;
				this.declarator();
				this.state = 904;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CPP14Parser.Assign:
					{
					this.state = 901;
					this.match(CPP14Parser.Assign);
					this.state = 902;
					this.initializerClause();
					}
					break;
				case CPP14Parser.LeftBrace:
					{
					this.state = 903;
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
			this.state = 941;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.While:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 908;
				this.match(CPP14Parser.While);
				this.state = 909;
				this.match(CPP14Parser.LeftParen);
				this.state = 910;
				this.condition();
				this.state = 911;
				this.match(CPP14Parser.RightParen);
				this.state = 912;
				this.statement();
				}
				break;
			case CPP14Parser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 914;
				this.match(CPP14Parser.Do);
				this.state = 915;
				this.statement();
				this.state = 916;
				this.match(CPP14Parser.While);
				this.state = 917;
				this.match(CPP14Parser.LeftParen);
				this.state = 918;
				this.expression();
				this.state = 919;
				this.match(CPP14Parser.RightParen);
				this.state = 920;
				this.match(CPP14Parser.Semi);
				}
				break;
			case CPP14Parser.For:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 922;
				this.match(CPP14Parser.For);
				this.state = 923;
				this.match(CPP14Parser.LeftParen);
				this.state = 936;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 924;
					this.forInitStatement();
					this.state = 926;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.Thread_local - 64)) | (1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CPP14Parser.And - 96)) | (1 << (CPP14Parser.Or - 96)) | (1 << (CPP14Parser.Tilde - 96)) | (1 << (CPP14Parser.Not - 96)) | (1 << (CPP14Parser.PlusPlus - 96)) | (1 << (CPP14Parser.MinusMinus - 96)) | (1 << (CPP14Parser.Doublecolon - 96)))) !== 0) || _la === CPP14Parser.Identifier) {
						{
						this.state = 925;
						this.condition();
						}
					}

					this.state = 928;
					this.match(CPP14Parser.Semi);
					this.state = 930;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CPP14Parser.Throw - 70)) | (1 << (CPP14Parser.Typeid_ - 70)) | (1 << (CPP14Parser.Typename_ - 70)) | (1 << (CPP14Parser.Unsigned - 70)) | (1 << (CPP14Parser.Void - 70)) | (1 << (CPP14Parser.Wchar - 70)) | (1 << (CPP14Parser.LeftParen - 70)) | (1 << (CPP14Parser.LeftBracket - 70)) | (1 << (CPP14Parser.Plus - 70)) | (1 << (CPP14Parser.Minus - 70)) | (1 << (CPP14Parser.Star - 70)) | (1 << (CPP14Parser.And - 70)) | (1 << (CPP14Parser.Or - 70)) | (1 << (CPP14Parser.Tilde - 70)) | (1 << (CPP14Parser.Not - 70)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
						{
						this.state = 929;
						this.expression();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 932;
					this.forRangeDeclaration();
					this.state = 933;
					this.match(CPP14Parser.Colon);
					this.state = 934;
					this.forRangeInitializer();
					}
					break;
				}
				this.state = 938;
				this.match(CPP14Parser.RightParen);
				this.state = 939;
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
			this.state = 945;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 943;
				this.expressionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 944;
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
			this.state = 948;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 947;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 950;
			this.declSpecifierSeq();
			this.state = 951;
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
			this.state = 955;
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
				this.state = 953;
				this.expression();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 954;
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
			this.state = 966;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Break:
				{
				this.state = 957;
				this.match(CPP14Parser.Break);
				}
				break;
			case CPP14Parser.Continue:
				{
				this.state = 958;
				this.match(CPP14Parser.Continue);
				}
				break;
			case CPP14Parser.Return:
				{
				this.state = 959;
				this.match(CPP14Parser.Return);
				this.state = 962;
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
					this.state = 960;
					this.expression();
					}
					break;
				case CPP14Parser.LeftBrace:
					{
					this.state = 961;
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
				this.state = 964;
				this.match(CPP14Parser.Goto);
				this.state = 965;
				this.match(CPP14Parser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 968;
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
			this.state = 970;
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
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 972;
				this.declaration();
				}
				}
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CPP14Parser.Include - 8)) | (1 << (CPP14Parser.Alignas - 8)) | (1 << (CPP14Parser.Asm - 8)) | (1 << (CPP14Parser.Auto - 8)) | (1 << (CPP14Parser.Bool - 8)) | (1 << (CPP14Parser.Char - 8)) | (1 << (CPP14Parser.Char16 - 8)) | (1 << (CPP14Parser.Char32 - 8)) | (1 << (CPP14Parser.Class - 8)) | (1 << (CPP14Parser.Const - 8)) | (1 << (CPP14Parser.Constexpr - 8)) | (1 << (CPP14Parser.Decltype - 8)) | (1 << (CPP14Parser.Double - 8)) | (1 << (CPP14Parser.Enum - 8)) | (1 << (CPP14Parser.Explicit - 8)) | (1 << (CPP14Parser.Extern - 8)) | (1 << (CPP14Parser.Float - 8)))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CPP14Parser.Friend - 40)) | (1 << (CPP14Parser.Inline - 40)) | (1 << (CPP14Parser.Int - 40)) | (1 << (CPP14Parser.Long - 40)) | (1 << (CPP14Parser.Mutable - 40)) | (1 << (CPP14Parser.Namespace - 40)) | (1 << (CPP14Parser.Operator - 40)) | (1 << (CPP14Parser.Register - 40)) | (1 << (CPP14Parser.Short - 40)) | (1 << (CPP14Parser.Signed - 40)) | (1 << (CPP14Parser.Static - 40)) | (1 << (CPP14Parser.Static_assert - 40)) | (1 << (CPP14Parser.Struct - 40)) | (1 << (CPP14Parser.Template - 40)) | (1 << (CPP14Parser.Thread_local - 40)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CPP14Parser.Typedef - 73)) | (1 << (CPP14Parser.Typename_ - 73)) | (1 << (CPP14Parser.Union - 73)) | (1 << (CPP14Parser.Unsigned - 73)) | (1 << (CPP14Parser.Using - 73)) | (1 << (CPP14Parser.Virtual - 73)) | (1 << (CPP14Parser.Void - 73)) | (1 << (CPP14Parser.Volatile - 73)) | (1 << (CPP14Parser.Wchar - 73)) | (1 << (CPP14Parser.LeftParen - 73)) | (1 << (CPP14Parser.LeftBracket - 73)) | (1 << (CPP14Parser.Star - 73)) | (1 << (CPP14Parser.And - 73)) | (1 << (CPP14Parser.Tilde - 73)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (CPP14Parser.AndAnd - 117)) | (1 << (CPP14Parser.Doublecolon - 117)) | (1 << (CPP14Parser.Semi - 117)) | (1 << (CPP14Parser.Ellipsis - 117)) | (1 << (CPP14Parser.IncludeQuote - 117)) | (1 << (CPP14Parser.Identifier - 117)))) !== 0));
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
			this.state = 987;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 977;
				this.blockDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 978;
				this.functionDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 979;
				this.templateDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 980;
				this.explicitInstantiation();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 981;
				this.explicitSpecialization();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 982;
				this.linkageSpecification();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 983;
				this.namespaceDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 984;
				this.emptyDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 985;
				this.attributeDeclaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 986;
				this.includeDefinition();
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
			this.state = 998;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Include:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 989;
				this.match(CPP14Parser.Include);
				this.state = 990;
				this.match(CPP14Parser.Less);
				this.state = 991;
				this.fileName();
				this.state = 992;
				this.match(CPP14Parser.Greater);
				}
				break;
			case CPP14Parser.IncludeQuote:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 994;
				this.match(CPP14Parser.IncludeQuote);
				this.state = 995;
				this.fileName();
				this.state = 996;
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
	public fileName(): FileNameContext {
		let _localctx: FileNameContext = new FileNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CPP14Parser.RULE_fileName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1000;
			this.match(CPP14Parser.Identifier);
			this.state = 1005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Div) {
				{
				{
				this.state = 1001;
				this.match(CPP14Parser.Div);
				this.state = 1002;
				this.match(CPP14Parser.Identifier);
				}
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1010;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Dot) {
				{
				this.state = 1008;
				this.match(CPP14Parser.Dot);
				this.state = 1009;
				this.match(CPP14Parser.HFormat);
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
		this.enterRule(_localctx, 128, CPP14Parser.RULE_blockDeclaration);
		try {
			this.state = 1020;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1012;
				this.simpleDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1013;
				this.asmDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1014;
				this.namespaceAliasDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1015;
				this.usingDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1016;
				this.usingDirective();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1017;
				this.staticAssertDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1018;
				this.aliasDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1019;
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
		this.enterRule(_localctx, 130, CPP14Parser.RULE_aliasDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1022;
			this.match(CPP14Parser.Using);
			this.state = 1023;
			this.match(CPP14Parser.Identifier);
			this.state = 1025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1024;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1027;
			this.match(CPP14Parser.Assign);
			this.state = 1028;
			this.theTypeId();
			this.state = 1029;
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
		this.enterRule(_localctx, 132, CPP14Parser.RULE_simpleDeclaration);
		let _la: number;
		try {
			this.state = 1045;
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
				this.state = 1032;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 1031;
					this.declSpecifierSeq();
					}
					break;
				}
				this.state = 1035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Operator || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CPP14Parser.LeftParen - 84)) | (1 << (CPP14Parser.Star - 84)) | (1 << (CPP14Parser.And - 84)) | (1 << (CPP14Parser.Tilde - 84)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (CPP14Parser.AndAnd - 117)) | (1 << (CPP14Parser.Doublecolon - 117)) | (1 << (CPP14Parser.Ellipsis - 117)) | (1 << (CPP14Parser.Identifier - 117)))) !== 0)) {
					{
					this.state = 1034;
					this.initDeclaratorList();
					}
				}

				this.state = 1037;
				this.match(CPP14Parser.Semi);
				}
				break;
			case CPP14Parser.Alignas:
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1038;
				this.attributeSpecifierSeq();
				this.state = 1040;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 1039;
					this.declSpecifierSeq();
					}
					break;
				}
				this.state = 1042;
				this.initDeclaratorList();
				this.state = 1043;
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
		this.enterRule(_localctx, 134, CPP14Parser.RULE_staticAssertDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this.match(CPP14Parser.Static_assert);
			this.state = 1048;
			this.match(CPP14Parser.LeftParen);
			this.state = 1049;
			this.constantExpression();
			this.state = 1050;
			this.match(CPP14Parser.Comma);
			this.state = 1051;
			this.match(CPP14Parser.StringLiteral);
			this.state = 1052;
			this.match(CPP14Parser.RightParen);
			this.state = 1053;
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
		this.enterRule(_localctx, 136, CPP14Parser.RULE_emptyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1055;
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
		this.enterRule(_localctx, 138, CPP14Parser.RULE_attributeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1057;
			this.attributeSpecifierSeq();
			this.state = 1058;
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
		this.enterRule(_localctx, 140, CPP14Parser.RULE_declSpecifier);
		try {
			this.state = 1066;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Extern:
			case CPP14Parser.Mutable:
			case CPP14Parser.Register:
			case CPP14Parser.Static:
			case CPP14Parser.Thread_local:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1060;
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
				this.state = 1061;
				this.typeSpecifier();
				}
				break;
			case CPP14Parser.Explicit:
			case CPP14Parser.Inline:
			case CPP14Parser.Virtual:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1062;
				this.functionSpecifier();
				}
				break;
			case CPP14Parser.Friend:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1063;
				this.match(CPP14Parser.Friend);
				}
				break;
			case CPP14Parser.Typedef:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1064;
				this.match(CPP14Parser.Typedef);
				}
				break;
			case CPP14Parser.Constexpr:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1065;
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
		this.enterRule(_localctx, 142, CPP14Parser.RULE_declSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1069;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1068;
					this.declSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1074;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 1073;
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
		this.enterRule(_localctx, 144, CPP14Parser.RULE_storageClassSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1076;
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CPP14Parser.Extern - 35)) | (1 << (CPP14Parser.Mutable - 35)) | (1 << (CPP14Parser.Register - 35)) | (1 << (CPP14Parser.Static - 35)))) !== 0) || _la === CPP14Parser.Thread_local)) {
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
		this.enterRule(_localctx, 146, CPP14Parser.RULE_functionSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
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
		this.enterRule(_localctx, 148, CPP14Parser.RULE_typedefName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1080;
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
		this.enterRule(_localctx, 150, CPP14Parser.RULE_typeSpecifier);
		try {
			this.state = 1085;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1082;
				this.trailingTypeSpecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1083;
				this.classSpecifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1084;
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
		this.enterRule(_localctx, 152, CPP14Parser.RULE_trailingTypeSpecifier);
		try {
			this.state = 1091;
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
				this.state = 1087;
				this.simpleTypeSpecifier();
				}
				break;
			case CPP14Parser.Class:
			case CPP14Parser.Enum:
			case CPP14Parser.Struct:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1088;
				this.elaboratedTypeSpecifier();
				}
				break;
			case CPP14Parser.Typename_:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1089;
				this.typeNameSpecifier();
				}
				break;
			case CPP14Parser.Const:
			case CPP14Parser.Volatile:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1090;
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
		this.enterRule(_localctx, 154, CPP14Parser.RULE_typeSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1094;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1093;
					this.typeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1096;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1099;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1098;
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
		this.enterRule(_localctx, 156, CPP14Parser.RULE_trailingTypeSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1102;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1101;
					this.trailingTypeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1104;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1106;
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
		this.enterRule(_localctx, 158, CPP14Parser.RULE_simpleTypeSpecifier);
		try {
			this.state = 1132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1110;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 1109;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1112;
				this.theTypeName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1113;
				this.nestedNameSpecifier(0);
				this.state = 1114;
				this.match(CPP14Parser.Template);
				this.state = 1115;
				this.simpleTemplateId();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1117;
				this.match(CPP14Parser.Char);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1118;
				this.match(CPP14Parser.Char16);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1119;
				this.match(CPP14Parser.Char32);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1120;
				this.match(CPP14Parser.Wchar);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1121;
				this.match(CPP14Parser.Bool);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1122;
				this.match(CPP14Parser.Short);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1123;
				this.match(CPP14Parser.Int);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1124;
				this.match(CPP14Parser.Long);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1125;
				this.match(CPP14Parser.Signed);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1126;
				this.match(CPP14Parser.Unsigned);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1127;
				this.match(CPP14Parser.Float);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1128;
				this.match(CPP14Parser.Double);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1129;
				this.match(CPP14Parser.Void);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1130;
				this.match(CPP14Parser.Auto);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1131;
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
		this.enterRule(_localctx, 160, CPP14Parser.RULE_theTypeName);
		try {
			this.state = 1138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1134;
				this.className();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1135;
				this.enumName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1136;
				this.typedefName();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1137;
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
		this.enterRule(_localctx, 162, CPP14Parser.RULE_decltypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1140;
			this.match(CPP14Parser.Decltype);
			this.state = 1141;
			this.match(CPP14Parser.LeftParen);
			this.state = 1144;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1142;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 1143;
				this.match(CPP14Parser.Auto);
				}
				break;
			}
			this.state = 1146;
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
		this.enterRule(_localctx, 164, CPP14Parser.RULE_elaboratedTypeSpecifier);
		let _la: number;
		try {
			this.state = 1170;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Class:
			case CPP14Parser.Struct:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1148;
				this.classKey();
				this.state = 1163;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1150;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
						{
						this.state = 1149;
						this.attributeSpecifierSeq();
						}
					}

					this.state = 1153;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
					case 1:
						{
						this.state = 1152;
						this.nestedNameSpecifier(0);
						}
						break;
					}
					this.state = 1155;
					this.match(CPP14Parser.Identifier);
					}
					break;

				case 2:
					{
					this.state = 1156;
					this.simpleTemplateId();
					}
					break;

				case 3:
					{
					this.state = 1157;
					this.nestedNameSpecifier(0);
					this.state = 1159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Template) {
						{
						this.state = 1158;
						this.match(CPP14Parser.Template);
						}
					}

					this.state = 1161;
					this.simpleTemplateId();
					}
					break;
				}
				}
				break;
			case CPP14Parser.Enum:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1165;
				this.match(CPP14Parser.Enum);
				this.state = 1167;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1166;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1169;
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
		this.enterRule(_localctx, 166, CPP14Parser.RULE_enumName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1172;
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
		this.enterRule(_localctx, 168, CPP14Parser.RULE_enumSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1174;
			this.enumHead();
			this.state = 1175;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Identifier) {
				{
				this.state = 1176;
				this.enumeratorList();
				this.state = 1178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Comma) {
					{
					this.state = 1177;
					this.match(CPP14Parser.Comma);
					}
				}

				}
			}

			this.state = 1182;
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
		this.enterRule(_localctx, 170, CPP14Parser.RULE_enumHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1184;
			this.enumkey();
			this.state = 1186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1185;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				this.state = 1189;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1188;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1191;
				this.match(CPP14Parser.Identifier);
				}
			}

			this.state = 1195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Colon) {
				{
				this.state = 1194;
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
		this.enterRule(_localctx, 172, CPP14Parser.RULE_opaqueEnumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1197;
			this.enumkey();
			this.state = 1199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1198;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1201;
			this.match(CPP14Parser.Identifier);
			this.state = 1203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Colon) {
				{
				this.state = 1202;
				this.enumbase();
				}
			}

			this.state = 1205;
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
		this.enterRule(_localctx, 174, CPP14Parser.RULE_enumkey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1207;
			this.match(CPP14Parser.Enum);
			this.state = 1209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Class || _la === CPP14Parser.Struct) {
				{
				this.state = 1208;
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
		this.enterRule(_localctx, 176, CPP14Parser.RULE_enumbase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1211;
			this.match(CPP14Parser.Colon);
			this.state = 1212;
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
		this.enterRule(_localctx, 178, CPP14Parser.RULE_enumeratorList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1214;
			this.enumeratorDefinition();
			this.state = 1219;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1215;
					this.match(CPP14Parser.Comma);
					this.state = 1216;
					this.enumeratorDefinition();
					}
					}
				}
				this.state = 1221;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
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
		this.enterRule(_localctx, 180, CPP14Parser.RULE_enumeratorDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1222;
			this.enumerator();
			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Assign) {
				{
				this.state = 1223;
				this.match(CPP14Parser.Assign);
				this.state = 1224;
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
		this.enterRule(_localctx, 182, CPP14Parser.RULE_enumerator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1227;
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
		this.enterRule(_localctx, 184, CPP14Parser.RULE_namespaceName);
		try {
			this.state = 1231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1229;
				this.originalNamespaceName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1230;
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
		this.enterRule(_localctx, 186, CPP14Parser.RULE_originalNamespaceName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1233;
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
		this.enterRule(_localctx, 188, CPP14Parser.RULE_namespaceDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Inline) {
				{
				this.state = 1235;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1238;
			this.match(CPP14Parser.Namespace);
			this.state = 1241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1239;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				{
				this.state = 1240;
				this.originalNamespaceName();
				}
				break;
			}
			this.state = 1243;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CPP14Parser.Include - 8)) | (1 << (CPP14Parser.Alignas - 8)) | (1 << (CPP14Parser.Asm - 8)) | (1 << (CPP14Parser.Auto - 8)) | (1 << (CPP14Parser.Bool - 8)) | (1 << (CPP14Parser.Char - 8)) | (1 << (CPP14Parser.Char16 - 8)) | (1 << (CPP14Parser.Char32 - 8)) | (1 << (CPP14Parser.Class - 8)) | (1 << (CPP14Parser.Const - 8)) | (1 << (CPP14Parser.Constexpr - 8)) | (1 << (CPP14Parser.Decltype - 8)) | (1 << (CPP14Parser.Double - 8)) | (1 << (CPP14Parser.Enum - 8)) | (1 << (CPP14Parser.Explicit - 8)) | (1 << (CPP14Parser.Extern - 8)) | (1 << (CPP14Parser.Float - 8)))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CPP14Parser.Friend - 40)) | (1 << (CPP14Parser.Inline - 40)) | (1 << (CPP14Parser.Int - 40)) | (1 << (CPP14Parser.Long - 40)) | (1 << (CPP14Parser.Mutable - 40)) | (1 << (CPP14Parser.Namespace - 40)) | (1 << (CPP14Parser.Operator - 40)) | (1 << (CPP14Parser.Register - 40)) | (1 << (CPP14Parser.Short - 40)) | (1 << (CPP14Parser.Signed - 40)) | (1 << (CPP14Parser.Static - 40)) | (1 << (CPP14Parser.Static_assert - 40)) | (1 << (CPP14Parser.Struct - 40)) | (1 << (CPP14Parser.Template - 40)) | (1 << (CPP14Parser.Thread_local - 40)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CPP14Parser.Typedef - 73)) | (1 << (CPP14Parser.Typename_ - 73)) | (1 << (CPP14Parser.Union - 73)) | (1 << (CPP14Parser.Unsigned - 73)) | (1 << (CPP14Parser.Using - 73)) | (1 << (CPP14Parser.Virtual - 73)) | (1 << (CPP14Parser.Void - 73)) | (1 << (CPP14Parser.Volatile - 73)) | (1 << (CPP14Parser.Wchar - 73)) | (1 << (CPP14Parser.LeftParen - 73)) | (1 << (CPP14Parser.LeftBracket - 73)) | (1 << (CPP14Parser.Star - 73)) | (1 << (CPP14Parser.And - 73)) | (1 << (CPP14Parser.Tilde - 73)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (CPP14Parser.AndAnd - 117)) | (1 << (CPP14Parser.Doublecolon - 117)) | (1 << (CPP14Parser.Semi - 117)) | (1 << (CPP14Parser.Ellipsis - 117)) | (1 << (CPP14Parser.IncludeQuote - 117)) | (1 << (CPP14Parser.Identifier - 117)))) !== 0)) {
				{
				this.state = 1244;
				_localctx._namespaceBody = this.declarationseq();
				}
			}

			this.state = 1247;
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
		this.enterRule(_localctx, 190, CPP14Parser.RULE_namespaceAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1249;
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
		this.enterRule(_localctx, 192, CPP14Parser.RULE_namespaceAliasDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1251;
			this.match(CPP14Parser.Namespace);
			this.state = 1252;
			this.match(CPP14Parser.Identifier);
			this.state = 1253;
			this.match(CPP14Parser.Assign);
			this.state = 1254;
			this.qualifiednamespacespecifier();
			this.state = 1255;
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
		this.enterRule(_localctx, 194, CPP14Parser.RULE_qualifiednamespacespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1257;
				this.nestedNameSpecifier(0);
				}
				break;
			}
			this.state = 1260;
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
		this.enterRule(_localctx, 196, CPP14Parser.RULE_usingDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this.match(CPP14Parser.Using);
			this.state = 1268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Typename_) {
					{
					this.state = 1263;
					this.match(CPP14Parser.Typename_);
					}
				}

				this.state = 1266;
				this.nestedNameSpecifier(0);
				}
				}
				break;

			case 2:
				{
				this.state = 1267;
				this.match(CPP14Parser.Doublecolon);
				}
				break;
			}
			this.state = 1270;
			this.unqualifiedId();
			this.state = 1271;
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
		this.enterRule(_localctx, 198, CPP14Parser.RULE_usingDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1273;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1276;
			this.match(CPP14Parser.Using);
			this.state = 1277;
			this.match(CPP14Parser.Namespace);
			this.state = 1279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1278;
				this.nestedNameSpecifier(0);
				}
				break;
			}
			this.state = 1281;
			this.namespaceName();
			this.state = 1282;
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
		this.enterRule(_localctx, 200, CPP14Parser.RULE_asmDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1284;
			this.match(CPP14Parser.Asm);
			this.state = 1285;
			this.match(CPP14Parser.LeftParen);
			this.state = 1286;
			this.match(CPP14Parser.StringLiteral);
			this.state = 1287;
			this.match(CPP14Parser.RightParen);
			this.state = 1288;
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
		this.enterRule(_localctx, 202, CPP14Parser.RULE_linkageSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1290;
			this.match(CPP14Parser.Extern);
			this.state = 1291;
			this.match(CPP14Parser.StringLiteral);
			this.state = 1298;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBrace:
				{
				this.state = 1292;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (CPP14Parser.Include - 8)) | (1 << (CPP14Parser.Alignas - 8)) | (1 << (CPP14Parser.Asm - 8)) | (1 << (CPP14Parser.Auto - 8)) | (1 << (CPP14Parser.Bool - 8)) | (1 << (CPP14Parser.Char - 8)) | (1 << (CPP14Parser.Char16 - 8)) | (1 << (CPP14Parser.Char32 - 8)) | (1 << (CPP14Parser.Class - 8)) | (1 << (CPP14Parser.Const - 8)) | (1 << (CPP14Parser.Constexpr - 8)) | (1 << (CPP14Parser.Decltype - 8)) | (1 << (CPP14Parser.Double - 8)) | (1 << (CPP14Parser.Enum - 8)) | (1 << (CPP14Parser.Explicit - 8)) | (1 << (CPP14Parser.Extern - 8)) | (1 << (CPP14Parser.Float - 8)))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (CPP14Parser.Friend - 40)) | (1 << (CPP14Parser.Inline - 40)) | (1 << (CPP14Parser.Int - 40)) | (1 << (CPP14Parser.Long - 40)) | (1 << (CPP14Parser.Mutable - 40)) | (1 << (CPP14Parser.Namespace - 40)) | (1 << (CPP14Parser.Operator - 40)) | (1 << (CPP14Parser.Register - 40)) | (1 << (CPP14Parser.Short - 40)) | (1 << (CPP14Parser.Signed - 40)) | (1 << (CPP14Parser.Static - 40)) | (1 << (CPP14Parser.Static_assert - 40)) | (1 << (CPP14Parser.Struct - 40)) | (1 << (CPP14Parser.Template - 40)) | (1 << (CPP14Parser.Thread_local - 40)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CPP14Parser.Typedef - 73)) | (1 << (CPP14Parser.Typename_ - 73)) | (1 << (CPP14Parser.Union - 73)) | (1 << (CPP14Parser.Unsigned - 73)) | (1 << (CPP14Parser.Using - 73)) | (1 << (CPP14Parser.Virtual - 73)) | (1 << (CPP14Parser.Void - 73)) | (1 << (CPP14Parser.Volatile - 73)) | (1 << (CPP14Parser.Wchar - 73)) | (1 << (CPP14Parser.LeftParen - 73)) | (1 << (CPP14Parser.LeftBracket - 73)) | (1 << (CPP14Parser.Star - 73)) | (1 << (CPP14Parser.And - 73)) | (1 << (CPP14Parser.Tilde - 73)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (CPP14Parser.AndAnd - 117)) | (1 << (CPP14Parser.Doublecolon - 117)) | (1 << (CPP14Parser.Semi - 117)) | (1 << (CPP14Parser.Ellipsis - 117)) | (1 << (CPP14Parser.IncludeQuote - 117)) | (1 << (CPP14Parser.Identifier - 117)))) !== 0)) {
					{
					this.state = 1293;
					this.declarationseq();
					}
				}

				this.state = 1296;
				this.match(CPP14Parser.RightBrace);
				}
				break;
			case CPP14Parser.Include:
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
				this.state = 1297;
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
		this.enterRule(_localctx, 204, CPP14Parser.RULE_attributeSpecifierSeq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1301;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1300;
					this.attributeSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1303;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
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
		this.enterRule(_localctx, 206, CPP14Parser.RULE_attributeSpecifier);
		let _la: number;
		try {
			this.state = 1313;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1305;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1306;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1307;
					this.attributeList();
					}
				}

				this.state = 1310;
				this.match(CPP14Parser.RightBracket);
				this.state = 1311;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			case CPP14Parser.Alignas:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1312;
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
		this.enterRule(_localctx, 208, CPP14Parser.RULE_alignmentspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1315;
			this.match(CPP14Parser.Alignas);
			this.state = 1316;
			this.match(CPP14Parser.LeftParen);
			this.state = 1319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1317;
				this.theTypeId();
				}
				break;

			case 2:
				{
				this.state = 1318;
				this.constantExpression();
				}
				break;
			}
			this.state = 1322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1321;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1324;
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
		this.enterRule(_localctx, 210, CPP14Parser.RULE_attributeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1326;
			this.attribute();
			this.state = 1331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1327;
				this.match(CPP14Parser.Comma);
				this.state = 1328;
				this.attribute();
				}
				}
				this.state = 1333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1334;
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
		this.enterRule(_localctx, 212, CPP14Parser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1340;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1337;
				this.attributeNamespace();
				this.state = 1338;
				this.match(CPP14Parser.Doublecolon);
				}
				break;
			}
			this.state = 1342;
			this.match(CPP14Parser.Identifier);
			this.state = 1344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.LeftParen) {
				{
				this.state = 1343;
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
		this.enterRule(_localctx, 214, CPP14Parser.RULE_attributeNamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1346;
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
		this.enterRule(_localctx, 216, CPP14Parser.RULE_attributeArgumentClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1348;
			this.match(CPP14Parser.LeftParen);
			this.state = 1350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Include) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Catch) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Else))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Export - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.False_ - 32)) | (1 << (CPP14Parser.Final - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Override - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Return - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.Switch - 64)) | (1 << (CPP14Parser.Template - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.Thread_local - 64)) | (1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True_ - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.Div - 64)) | (1 << (CPP14Parser.Mod - 64)) | (1 << (CPP14Parser.Caret - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CPP14Parser.And - 96)) | (1 << (CPP14Parser.Or - 96)) | (1 << (CPP14Parser.Tilde - 96)) | (1 << (CPP14Parser.Not - 96)) | (1 << (CPP14Parser.Assign - 96)) | (1 << (CPP14Parser.Less - 96)) | (1 << (CPP14Parser.Greater - 96)) | (1 << (CPP14Parser.PlusAssign - 96)) | (1 << (CPP14Parser.MinusAssign - 96)) | (1 << (CPP14Parser.StarAssign - 96)) | (1 << (CPP14Parser.DivAssign - 96)) | (1 << (CPP14Parser.ModAssign - 96)) | (1 << (CPP14Parser.XorAssign - 96)) | (1 << (CPP14Parser.AndAssign - 96)) | (1 << (CPP14Parser.OrAssign - 96)) | (1 << (CPP14Parser.LeftShiftAssign - 96)) | (1 << (CPP14Parser.RightShiftAssign - 96)) | (1 << (CPP14Parser.Equal - 96)) | (1 << (CPP14Parser.NotEqual - 96)) | (1 << (CPP14Parser.LessEqual - 96)) | (1 << (CPP14Parser.GreaterEqual - 96)) | (1 << (CPP14Parser.AndAnd - 96)) | (1 << (CPP14Parser.OrOr - 96)) | (1 << (CPP14Parser.PlusPlus - 96)) | (1 << (CPP14Parser.MinusMinus - 96)) | (1 << (CPP14Parser.Comma - 96)) | (1 << (CPP14Parser.ArrowStar - 96)) | (1 << (CPP14Parser.Arrow - 96)) | (1 << (CPP14Parser.Question - 96)) | (1 << (CPP14Parser.Colon - 96)) | (1 << (CPP14Parser.Doublecolon - 96)) | (1 << (CPP14Parser.Semi - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.Dot - 128)) | (1 << (CPP14Parser.DotStar - 128)) | (1 << (CPP14Parser.Ellipsis - 128)) | (1 << (CPP14Parser.Quote - 128)) | (1 << (CPP14Parser.IncludeQuote - 128)) | (1 << (CPP14Parser.HFormat - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.DecimalLiteral - 128)) | (1 << (CPP14Parser.OctalLiteral - 128)) | (1 << (CPP14Parser.HexadecimalLiteral - 128)) | (1 << (CPP14Parser.BinaryLiteral - 128)) | (1 << (CPP14Parser.Integersuffix - 128)) | (1 << (CPP14Parser.UserDefinedIntegerLiteral - 128)) | (1 << (CPP14Parser.UserDefinedFloatingLiteral - 128)) | (1 << (CPP14Parser.UserDefinedStringLiteral - 128)) | (1 << (CPP14Parser.UserDefinedCharacterLiteral - 128)) | (1 << (CPP14Parser.Whitespace - 128)) | (1 << (CPP14Parser.Newline - 128)) | (1 << (CPP14Parser.BlockComment - 128)) | (1 << (CPP14Parser.LineComment - 128)))) !== 0)) {
				{
				this.state = 1349;
				this.balancedTokenSeq();
				}
			}

			this.state = 1352;
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
		this.enterRule(_localctx, 218, CPP14Parser.RULE_balancedTokenSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1354;
				this.balancedtoken();
				}
				}
				this.state = 1357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Include) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Catch) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Default) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Do) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast) | (1 << CPP14Parser.Else))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Export - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.False_ - 32)) | (1 << (CPP14Parser.Final - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Override - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Reinterpret_cast - 32)) | (1 << (CPP14Parser.Return - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Sizeof - 32)) | (1 << (CPP14Parser.Static - 32)) | (1 << (CPP14Parser.Static_assert - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.Switch - 64)) | (1 << (CPP14Parser.Template - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.Thread_local - 64)) | (1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True_ - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)) | (1 << (CPP14Parser.Plus - 64)) | (1 << (CPP14Parser.Minus - 64)) | (1 << (CPP14Parser.Star - 64)) | (1 << (CPP14Parser.Div - 64)) | (1 << (CPP14Parser.Mod - 64)) | (1 << (CPP14Parser.Caret - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CPP14Parser.And - 96)) | (1 << (CPP14Parser.Or - 96)) | (1 << (CPP14Parser.Tilde - 96)) | (1 << (CPP14Parser.Not - 96)) | (1 << (CPP14Parser.Assign - 96)) | (1 << (CPP14Parser.Less - 96)) | (1 << (CPP14Parser.Greater - 96)) | (1 << (CPP14Parser.PlusAssign - 96)) | (1 << (CPP14Parser.MinusAssign - 96)) | (1 << (CPP14Parser.StarAssign - 96)) | (1 << (CPP14Parser.DivAssign - 96)) | (1 << (CPP14Parser.ModAssign - 96)) | (1 << (CPP14Parser.XorAssign - 96)) | (1 << (CPP14Parser.AndAssign - 96)) | (1 << (CPP14Parser.OrAssign - 96)) | (1 << (CPP14Parser.LeftShiftAssign - 96)) | (1 << (CPP14Parser.RightShiftAssign - 96)) | (1 << (CPP14Parser.Equal - 96)) | (1 << (CPP14Parser.NotEqual - 96)) | (1 << (CPP14Parser.LessEqual - 96)) | (1 << (CPP14Parser.GreaterEqual - 96)) | (1 << (CPP14Parser.AndAnd - 96)) | (1 << (CPP14Parser.OrOr - 96)) | (1 << (CPP14Parser.PlusPlus - 96)) | (1 << (CPP14Parser.MinusMinus - 96)) | (1 << (CPP14Parser.Comma - 96)) | (1 << (CPP14Parser.ArrowStar - 96)) | (1 << (CPP14Parser.Arrow - 96)) | (1 << (CPP14Parser.Question - 96)) | (1 << (CPP14Parser.Colon - 96)) | (1 << (CPP14Parser.Doublecolon - 96)) | (1 << (CPP14Parser.Semi - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.Dot - 128)) | (1 << (CPP14Parser.DotStar - 128)) | (1 << (CPP14Parser.Ellipsis - 128)) | (1 << (CPP14Parser.Quote - 128)) | (1 << (CPP14Parser.IncludeQuote - 128)) | (1 << (CPP14Parser.HFormat - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.DecimalLiteral - 128)) | (1 << (CPP14Parser.OctalLiteral - 128)) | (1 << (CPP14Parser.HexadecimalLiteral - 128)) | (1 << (CPP14Parser.BinaryLiteral - 128)) | (1 << (CPP14Parser.Integersuffix - 128)) | (1 << (CPP14Parser.UserDefinedIntegerLiteral - 128)) | (1 << (CPP14Parser.UserDefinedFloatingLiteral - 128)) | (1 << (CPP14Parser.UserDefinedStringLiteral - 128)) | (1 << (CPP14Parser.UserDefinedCharacterLiteral - 128)) | (1 << (CPP14Parser.Whitespace - 128)) | (1 << (CPP14Parser.Newline - 128)) | (1 << (CPP14Parser.BlockComment - 128)) | (1 << (CPP14Parser.LineComment - 128)))) !== 0));
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
		this.enterRule(_localctx, 220, CPP14Parser.RULE_balancedtoken);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1359;
				this.match(CPP14Parser.LeftParen);
				this.state = 1360;
				this.balancedTokenSeq();
				this.state = 1361;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1363;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1364;
				this.balancedTokenSeq();
				this.state = 1365;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1367;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1368;
				this.balancedTokenSeq();
				this.state = 1369;
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
			case CPP14Parser.HFormat:
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
				this.state = 1372;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1371;
						_la = this._input.LA(1);
						if (_la <= 0 || (((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CPP14Parser.LeftParen - 84)) | (1 << (CPP14Parser.RightParen - 84)) | (1 << (CPP14Parser.LeftBracket - 84)) | (1 << (CPP14Parser.RightBracket - 84)) | (1 << (CPP14Parser.LeftBrace - 84)) | (1 << (CPP14Parser.RightBrace - 84)))) !== 0))) {
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
					this.state = 1374;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
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
		this.enterRule(_localctx, 222, CPP14Parser.RULE_initDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1378;
			this.initDeclarator();
			this.state = 1383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1379;
				this.match(CPP14Parser.Comma);
				this.state = 1380;
				this.initDeclarator();
				}
				}
				this.state = 1385;
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
		this.enterRule(_localctx, 224, CPP14Parser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1386;
			this.declarator();
			this.state = 1388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CPP14Parser.LeftParen - 84)) | (1 << (CPP14Parser.LeftBrace - 84)) | (1 << (CPP14Parser.Assign - 84)))) !== 0)) {
				{
				this.state = 1387;
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
		this.enterRule(_localctx, 226, CPP14Parser.RULE_declarator);
		try {
			this.state = 1395;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1390;
				this.pointerDeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1391;
				this.noPointerDeclarator(0);
				this.state = 1392;
				this.parametersAndQualifiers();
				this.state = 1393;
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
		this.enterRule(_localctx, 228, CPP14Parser.RULE_pointerDeclarator);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1403;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1397;
					this.pointerOperator();
					this.state = 1399;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Const) {
						{
						this.state = 1398;
						this.match(CPP14Parser.Const);
						}
					}

					}
					}
				}
				this.state = 1405;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
			}
			this.state = 1406;
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
		let _startState: number = 230;
		this.enterRecursionRule(_localctx, 230, CPP14Parser.RULE_noPointerDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1417;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Decltype:
			case CPP14Parser.Operator:
			case CPP14Parser.Tilde:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				{
				this.state = 1409;
				this.declaratorid();
				this.state = 1411;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
				case 1:
					{
					this.state = 1410;
					this.attributeSpecifierSeq();
					}
					break;
				}
				}
				break;
			case CPP14Parser.LeftParen:
				{
				this.state = 1413;
				this.match(CPP14Parser.LeftParen);
				this.state = 1414;
				this.pointerDeclarator();
				this.state = 1415;
				this.match(CPP14Parser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1433;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
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
					this.state = 1419;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1429;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CPP14Parser.LeftParen:
						{
						this.state = 1420;
						this.parametersAndQualifiers();
						}
						break;
					case CPP14Parser.LeftBracket:
						{
						this.state = 1421;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1423;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CPP14Parser.Typeid_ - 74)) | (1 << (CPP14Parser.Typename_ - 74)) | (1 << (CPP14Parser.Unsigned - 74)) | (1 << (CPP14Parser.Void - 74)) | (1 << (CPP14Parser.Wchar - 74)) | (1 << (CPP14Parser.LeftParen - 74)) | (1 << (CPP14Parser.LeftBracket - 74)) | (1 << (CPP14Parser.Plus - 74)) | (1 << (CPP14Parser.Minus - 74)) | (1 << (CPP14Parser.Star - 74)) | (1 << (CPP14Parser.And - 74)) | (1 << (CPP14Parser.Or - 74)) | (1 << (CPP14Parser.Tilde - 74)) | (1 << (CPP14Parser.Not - 74)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
							{
							this.state = 1422;
							this.constantExpression();
							}
						}

						this.state = 1425;
						this.match(CPP14Parser.RightBracket);
						this.state = 1427;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
						case 1:
							{
							this.state = 1426;
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
				this.state = 1435;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
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
		this.enterRule(_localctx, 232, CPP14Parser.RULE_parametersAndQualifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1436;
			this.match(CPP14Parser.LeftParen);
			this.state = 1438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Register - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)) | (1 << (CPP14Parser.Static - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.Struct - 65)) | (1 << (CPP14Parser.Thread_local - 65)) | (1 << (CPP14Parser.Typedef - 65)) | (1 << (CPP14Parser.Typename_ - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Virtual - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)) | (1 << (CPP14Parser.LeftBracket - 65)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				this.state = 1437;
				this.parameterDeclarationClause();
				}
			}

			this.state = 1440;
			this.match(CPP14Parser.RightParen);
			this.state = 1442;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				{
				this.state = 1441;
				this.cvqualifierseq();
				}
				break;
			}
			this.state = 1445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1444;
				this.refqualifier();
				}
				break;
			}
			this.state = 1448;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				{
				this.state = 1447;
				this.exceptionSpecification();
				}
				break;
			}
			this.state = 1451;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1450;
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
		this.enterRule(_localctx, 234, CPP14Parser.RULE_trailingReturnType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1453;
			this.match(CPP14Parser.Arrow);
			this.state = 1454;
			this.trailingTypeSpecifierSeq();
			this.state = 1456;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				{
				this.state = 1455;
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
		this.enterRule(_localctx, 236, CPP14Parser.RULE_pointerOperator);
		let _la: number;
		try {
			this.state = 1472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.And:
			case CPP14Parser.AndAnd:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1458;
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
				this.state = 1460;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
				case 1:
					{
					this.state = 1459;
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
				this.state = 1463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
					{
					this.state = 1462;
					this.nestedNameSpecifier(0);
					}
				}

				this.state = 1465;
				this.match(CPP14Parser.Star);
				this.state = 1467;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
				case 1:
					{
					this.state = 1466;
					this.attributeSpecifierSeq();
					}
					break;
				}
				this.state = 1470;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
				case 1:
					{
					this.state = 1469;
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
		this.enterRule(_localctx, 238, CPP14Parser.RULE_cvqualifierseq);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1475;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1474;
					this.cvQualifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1477;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
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
		this.enterRule(_localctx, 240, CPP14Parser.RULE_cvQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1479;
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
		this.enterRule(_localctx, 242, CPP14Parser.RULE_refqualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1481;
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
		this.enterRule(_localctx, 244, CPP14Parser.RULE_declaratorid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1483;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1486;
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
		this.enterRule(_localctx, 246, CPP14Parser.RULE_theTypeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1488;
			this.typeSpecifierSeq();
			this.state = 1490;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				{
				this.state = 1489;
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
		this.enterRule(_localctx, 248, CPP14Parser.RULE_abstractDeclarator);
		try {
			this.state = 1500;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1492;
				this.pointerAbstractDeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1494;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
				case 1:
					{
					this.state = 1493;
					this.noPointerAbstractDeclarator(0);
					}
					break;
				}
				this.state = 1496;
				this.parametersAndQualifiers();
				this.state = 1497;
				this.trailingReturnType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1499;
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
		this.enterRule(_localctx, 250, CPP14Parser.RULE_pointerAbstractDeclarator);
		let _la: number;
		try {
			this.state = 1511;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1502;
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
				this.state = 1504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1503;
					this.pointerOperator();
					}
					}
					this.state = 1506;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CPP14Parser.Decltype || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (CPP14Parser.Star - 92)) | (1 << (CPP14Parser.And - 92)) | (1 << (CPP14Parser.AndAnd - 92)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier);
				this.state = 1509;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
				case 1:
					{
					this.state = 1508;
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
		let _startState: number = 252;
		this.enterRecursionRule(_localctx, 252, CPP14Parser.RULE_noPointerAbstractDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				{
				this.state = 1514;
				this.parametersAndQualifiers();
				}
				break;

			case 2:
				{
				this.state = 1515;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CPP14Parser.Typeid_ - 74)) | (1 << (CPP14Parser.Typename_ - 74)) | (1 << (CPP14Parser.Unsigned - 74)) | (1 << (CPP14Parser.Void - 74)) | (1 << (CPP14Parser.Wchar - 74)) | (1 << (CPP14Parser.LeftParen - 74)) | (1 << (CPP14Parser.LeftBracket - 74)) | (1 << (CPP14Parser.Plus - 74)) | (1 << (CPP14Parser.Minus - 74)) | (1 << (CPP14Parser.Star - 74)) | (1 << (CPP14Parser.And - 74)) | (1 << (CPP14Parser.Or - 74)) | (1 << (CPP14Parser.Tilde - 74)) | (1 << (CPP14Parser.Not - 74)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
					{
					this.state = 1516;
					this.constantExpression();
					}
				}

				this.state = 1519;
				this.match(CPP14Parser.RightBracket);
				this.state = 1521;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
				case 1:
					{
					this.state = 1520;
					this.attributeSpecifierSeq();
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 1523;
				this.match(CPP14Parser.LeftParen);
				this.state = 1524;
				this.pointerAbstractDeclarator();
				this.state = 1525;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1544;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
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
					this.state = 1529;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1540;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
					case 1:
						{
						this.state = 1530;
						this.parametersAndQualifiers();
						}
						break;

					case 2:
						{
						this.state = 1531;
						this.noPointerAbstractDeclarator(0);
						this.state = 1532;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1534;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CPP14Parser.Typeid_ - 74)) | (1 << (CPP14Parser.Typename_ - 74)) | (1 << (CPP14Parser.Unsigned - 74)) | (1 << (CPP14Parser.Void - 74)) | (1 << (CPP14Parser.Wchar - 74)) | (1 << (CPP14Parser.LeftParen - 74)) | (1 << (CPP14Parser.LeftBracket - 74)) | (1 << (CPP14Parser.Plus - 74)) | (1 << (CPP14Parser.Minus - 74)) | (1 << (CPP14Parser.Star - 74)) | (1 << (CPP14Parser.And - 74)) | (1 << (CPP14Parser.Or - 74)) | (1 << (CPP14Parser.Tilde - 74)) | (1 << (CPP14Parser.Not - 74)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
							{
							this.state = 1533;
							this.constantExpression();
							}
						}

						this.state = 1536;
						this.match(CPP14Parser.RightBracket);
						this.state = 1538;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
						case 1:
							{
							this.state = 1537;
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
				this.state = 1546;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
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
		this.enterRule(_localctx, 254, CPP14Parser.RULE_abstractPackDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Decltype || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (CPP14Parser.Star - 92)) | (1 << (CPP14Parser.And - 92)) | (1 << (CPP14Parser.AndAnd - 92)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				{
				this.state = 1547;
				this.pointerOperator();
				}
				}
				this.state = 1552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1553;
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
		let _startState: number = 256;
		this.enterRecursionRule(_localctx, 256, CPP14Parser.RULE_noPointerAbstractPackDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1556;
			this.match(CPP14Parser.Ellipsis);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1572;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
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
					this.state = 1558;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1568;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CPP14Parser.LeftParen:
						{
						this.state = 1559;
						this.parametersAndQualifiers();
						}
						break;
					case CPP14Parser.LeftBracket:
						{
						this.state = 1560;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1562;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CPP14Parser.Typeid_ - 74)) | (1 << (CPP14Parser.Typename_ - 74)) | (1 << (CPP14Parser.Unsigned - 74)) | (1 << (CPP14Parser.Void - 74)) | (1 << (CPP14Parser.Wchar - 74)) | (1 << (CPP14Parser.LeftParen - 74)) | (1 << (CPP14Parser.LeftBracket - 74)) | (1 << (CPP14Parser.Plus - 74)) | (1 << (CPP14Parser.Minus - 74)) | (1 << (CPP14Parser.Star - 74)) | (1 << (CPP14Parser.And - 74)) | (1 << (CPP14Parser.Or - 74)) | (1 << (CPP14Parser.Tilde - 74)) | (1 << (CPP14Parser.Not - 74)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
							{
							this.state = 1561;
							this.constantExpression();
							}
						}

						this.state = 1564;
						this.match(CPP14Parser.RightBracket);
						this.state = 1566;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
						case 1:
							{
							this.state = 1565;
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
				this.state = 1574;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
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
		this.enterRule(_localctx, 258, CPP14Parser.RULE_parameterDeclarationClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1575;
			this.parameterDeclarationList();
			this.state = 1580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Comma || _la === CPP14Parser.Ellipsis) {
				{
				this.state = 1577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Comma) {
					{
					this.state = 1576;
					this.match(CPP14Parser.Comma);
					}
				}

				this.state = 1579;
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
		this.enterRule(_localctx, 260, CPP14Parser.RULE_parameterDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1582;
			this.parameterDeclaration();
			this.state = 1587;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1583;
					this.match(CPP14Parser.Comma);
					this.state = 1584;
					this.parameterDeclaration();
					}
					}
				}
				this.state = 1589;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
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
		this.enterRule(_localctx, 262, CPP14Parser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1590;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1593;
			this.declSpecifierSeq();
			{
			this.state = 1598;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				{
				this.state = 1594;
				this.declarator();
				}
				break;

			case 2:
				{
				this.state = 1596;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
				case 1:
					{
					this.state = 1595;
					this.abstractDeclarator();
					}
					break;
				}
				}
				break;
			}
			this.state = 1602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Assign) {
				{
				this.state = 1600;
				this.match(CPP14Parser.Assign);
				this.state = 1601;
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
		this.enterRule(_localctx, 264, CPP14Parser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1604;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1608;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				{
				this.state = 1607;
				this.declSpecifierSeq();
				}
				break;
			}
			this.state = 1610;
			this.declarator();
			this.state = 1612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Final || _la === CPP14Parser.Override) {
				{
				this.state = 1611;
				this.virtualSpecifierSeq();
				}
			}

			this.state = 1614;
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
		this.enterRule(_localctx, 266, CPP14Parser.RULE_functionBody);
		let _la: number;
		try {
			this.state = 1624;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBrace:
			case CPP14Parser.Colon:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1616;
					this.constructorInitializer();
					}
				}

				this.state = 1619;
				this.compoundStatement();
				}
				break;
			case CPP14Parser.Try:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1620;
				this.functionTryBlock();
				}
				break;
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1621;
				this.match(CPP14Parser.Assign);
				this.state = 1622;
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
				this.state = 1623;
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
		this.enterRule(_localctx, 268, CPP14Parser.RULE_initializer);
		try {
			this.state = 1631;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBrace:
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1626;
				this.braceOrEqualInitializer();
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1627;
				this.match(CPP14Parser.LeftParen);
				this.state = 1628;
				this.expressionList();
				this.state = 1629;
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
		this.enterRule(_localctx, 270, CPP14Parser.RULE_braceOrEqualInitializer);
		try {
			this.state = 1636;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1633;
				this.match(CPP14Parser.Assign);
				this.state = 1634;
				this.initializerClause();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1635;
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
		this.enterRule(_localctx, 272, CPP14Parser.RULE_initializerClause);
		try {
			this.state = 1640;
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
				this.state = 1638;
				this.assignmentExpression();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1639;
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
		this.enterRule(_localctx, 274, CPP14Parser.RULE_initializerList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1642;
			this.initializerClause();
			this.state = 1644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1643;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1653;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1646;
					this.match(CPP14Parser.Comma);
					this.state = 1647;
					this.initializerClause();
					this.state = 1649;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Ellipsis) {
						{
						this.state = 1648;
						this.match(CPP14Parser.Ellipsis);
						}
					}

					}
					}
				}
				this.state = 1655;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
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
		this.enterRule(_localctx, 276, CPP14Parser.RULE_bracedInitList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1656;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CPP14Parser.Throw - 70)) | (1 << (CPP14Parser.Typeid_ - 70)) | (1 << (CPP14Parser.Typename_ - 70)) | (1 << (CPP14Parser.Unsigned - 70)) | (1 << (CPP14Parser.Void - 70)) | (1 << (CPP14Parser.Wchar - 70)) | (1 << (CPP14Parser.LeftParen - 70)) | (1 << (CPP14Parser.LeftBracket - 70)) | (1 << (CPP14Parser.LeftBrace - 70)) | (1 << (CPP14Parser.Plus - 70)) | (1 << (CPP14Parser.Minus - 70)) | (1 << (CPP14Parser.Star - 70)) | (1 << (CPP14Parser.And - 70)) | (1 << (CPP14Parser.Or - 70)) | (1 << (CPP14Parser.Tilde - 70)) | (1 << (CPP14Parser.Not - 70)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
				{
				this.state = 1657;
				this.initializerList();
				this.state = 1659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Comma) {
					{
					this.state = 1658;
					this.match(CPP14Parser.Comma);
					}
				}

				}
			}

			this.state = 1663;
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
		this.enterRule(_localctx, 278, CPP14Parser.RULE_className);
		try {
			this.state = 1667;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1665;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1666;
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
		this.enterRule(_localctx, 280, CPP14Parser.RULE_classSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1669;
			this.classHead();
			this.state = 1670;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (CPP14Parser.Alignas - 9)) | (1 << (CPP14Parser.Auto - 9)) | (1 << (CPP14Parser.Bool - 9)) | (1 << (CPP14Parser.Char - 9)) | (1 << (CPP14Parser.Char16 - 9)) | (1 << (CPP14Parser.Char32 - 9)) | (1 << (CPP14Parser.Class - 9)) | (1 << (CPP14Parser.Const - 9)) | (1 << (CPP14Parser.Constexpr - 9)) | (1 << (CPP14Parser.Decltype - 9)) | (1 << (CPP14Parser.Double - 9)) | (1 << (CPP14Parser.Enum - 9)) | (1 << (CPP14Parser.Explicit - 9)) | (1 << (CPP14Parser.Extern - 9)) | (1 << (CPP14Parser.Float - 9)) | (1 << (CPP14Parser.Friend - 9)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.Inline - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.Mutable - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Private - 43)) | (1 << (CPP14Parser.Protected - 43)) | (1 << (CPP14Parser.Public - 43)) | (1 << (CPP14Parser.Register - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Static - 43)) | (1 << (CPP14Parser.Static_assert - 43)) | (1 << (CPP14Parser.Struct - 43)) | (1 << (CPP14Parser.Template - 43)) | (1 << (CPP14Parser.Thread_local - 43)) | (1 << (CPP14Parser.Typedef - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Union - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Using - 75)) | (1 << (CPP14Parser.Virtual - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Volatile - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (CPP14Parser.AndAnd - 117)) | (1 << (CPP14Parser.Colon - 117)) | (1 << (CPP14Parser.Doublecolon - 117)) | (1 << (CPP14Parser.Semi - 117)) | (1 << (CPP14Parser.Ellipsis - 117)) | (1 << (CPP14Parser.Identifier - 117)))) !== 0)) {
				{
				this.state = 1671;
				this.memberSpecification();
				}
			}

			this.state = 1674;
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
		this.enterRule(_localctx, 282, CPP14Parser.RULE_classHead);
		let _la: number;
		try {
			this.state = 1699;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Class:
			case CPP14Parser.Struct:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1676;
				this.classKey();
				this.state = 1678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1677;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 1684;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
					{
					this.state = 1680;
					this.classHeadName();
					this.state = 1682;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Final) {
						{
						this.state = 1681;
						this.classVirtSpecifier();
						}
					}

					}
				}

				this.state = 1687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1686;
					this.baseClause();
					}
				}

				}
				break;
			case CPP14Parser.Union:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1689;
				this.match(CPP14Parser.Union);
				this.state = 1691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1690;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 1697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
					{
					this.state = 1693;
					this.classHeadName();
					this.state = 1695;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Final) {
						{
						this.state = 1694;
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
		this.enterRule(_localctx, 284, CPP14Parser.RULE_classHeadName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1702;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				{
				this.state = 1701;
				this.nestedNameSpecifier(0);
				}
				break;
			}
			this.state = 1704;
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
		this.enterRule(_localctx, 286, CPP14Parser.RULE_classVirtSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1706;
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
		this.enterRule(_localctx, 288, CPP14Parser.RULE_classKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1708;
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
		this.enterRule(_localctx, 290, CPP14Parser.RULE_memberSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1714;
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
					this.state = 1710;
					this.memberdeclaration();
					}
					break;
				case CPP14Parser.Private:
				case CPP14Parser.Protected:
				case CPP14Parser.Public:
					{
					this.state = 1711;
					this.accessSpecifier();
					this.state = 1712;
					this.match(CPP14Parser.Colon);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1716;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (CPP14Parser.Alignas - 9)) | (1 << (CPP14Parser.Auto - 9)) | (1 << (CPP14Parser.Bool - 9)) | (1 << (CPP14Parser.Char - 9)) | (1 << (CPP14Parser.Char16 - 9)) | (1 << (CPP14Parser.Char32 - 9)) | (1 << (CPP14Parser.Class - 9)) | (1 << (CPP14Parser.Const - 9)) | (1 << (CPP14Parser.Constexpr - 9)) | (1 << (CPP14Parser.Decltype - 9)) | (1 << (CPP14Parser.Double - 9)) | (1 << (CPP14Parser.Enum - 9)) | (1 << (CPP14Parser.Explicit - 9)) | (1 << (CPP14Parser.Extern - 9)) | (1 << (CPP14Parser.Float - 9)) | (1 << (CPP14Parser.Friend - 9)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.Inline - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.Mutable - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Private - 43)) | (1 << (CPP14Parser.Protected - 43)) | (1 << (CPP14Parser.Public - 43)) | (1 << (CPP14Parser.Register - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Static - 43)) | (1 << (CPP14Parser.Static_assert - 43)) | (1 << (CPP14Parser.Struct - 43)) | (1 << (CPP14Parser.Template - 43)) | (1 << (CPP14Parser.Thread_local - 43)) | (1 << (CPP14Parser.Typedef - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Union - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Using - 75)) | (1 << (CPP14Parser.Virtual - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Volatile - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (CPP14Parser.AndAnd - 117)) | (1 << (CPP14Parser.Colon - 117)) | (1 << (CPP14Parser.Doublecolon - 117)) | (1 << (CPP14Parser.Semi - 117)) | (1 << (CPP14Parser.Ellipsis - 117)) | (1 << (CPP14Parser.Identifier - 117)))) !== 0));
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
		this.enterRule(_localctx, 292, CPP14Parser.RULE_memberdeclaration);
		let _la: number;
		try {
			this.state = 1734;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1719;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 235, this._ctx) ) {
				case 1:
					{
					this.state = 1718;
					this.attributeSpecifierSeq();
					}
					break;
				}
				this.state = 1722;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
				case 1:
					{
					this.state = 1721;
					this.declSpecifierSeq();
					}
					break;
				}
				this.state = 1725;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.Decltype || _la === CPP14Parser.Operator || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (CPP14Parser.LeftParen - 84)) | (1 << (CPP14Parser.LeftBracket - 84)) | (1 << (CPP14Parser.Star - 84)) | (1 << (CPP14Parser.And - 84)) | (1 << (CPP14Parser.Tilde - 84)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (CPP14Parser.AndAnd - 117)) | (1 << (CPP14Parser.Colon - 117)) | (1 << (CPP14Parser.Doublecolon - 117)) | (1 << (CPP14Parser.Ellipsis - 117)) | (1 << (CPP14Parser.Identifier - 117)))) !== 0)) {
					{
					this.state = 1724;
					this.memberDeclaratorList();
					}
				}

				this.state = 1727;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1728;
				this.functionDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1729;
				this.usingDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1730;
				this.staticAssertDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1731;
				this.templateDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1732;
				this.aliasDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1733;
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
		this.enterRule(_localctx, 294, CPP14Parser.RULE_memberDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1736;
			this.memberDeclarator();
			this.state = 1741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1737;
				this.match(CPP14Parser.Comma);
				this.state = 1738;
				this.memberDeclarator();
				}
				}
				this.state = 1743;
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
		this.enterRule(_localctx, 296, CPP14Parser.RULE_memberDeclarator);
		let _la: number;
		try {
			this.state = 1764;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1744;
				this.declarator();
				this.state = 1754;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 243, this._ctx) ) {
				case 1:
					{
					this.state = 1746;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Final || _la === CPP14Parser.Override) {
						{
						this.state = 1745;
						this.virtualSpecifierSeq();
						}
					}

					this.state = 1749;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.Assign) {
						{
						this.state = 1748;
						this.pureSpecifier();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 1752;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CPP14Parser.LeftBrace || _la === CPP14Parser.Assign) {
						{
						this.state = 1751;
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
				this.state = 1757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1756;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 1760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1759;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 1762;
				this.match(CPP14Parser.Colon);
				this.state = 1763;
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
		this.enterRule(_localctx, 298, CPP14Parser.RULE_virtualSpecifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1766;
				this.virtualSpecifier();
				}
				}
				this.state = 1769;
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
		this.enterRule(_localctx, 300, CPP14Parser.RULE_virtualSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1771;
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
		this.enterRule(_localctx, 302, CPP14Parser.RULE_pureSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1773;
			this.match(CPP14Parser.Assign);
			this.state = 1774;
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
		this.enterRule(_localctx, 304, CPP14Parser.RULE_baseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1777;
			this.match(CPP14Parser.Colon);
			this.state = 1778;
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
		this.enterRule(_localctx, 306, CPP14Parser.RULE_baseSpecifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1780;
			this.baseSpecifier();
			this.state = 1782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1781;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1784;
				this.match(CPP14Parser.Comma);
				this.state = 1785;
				this.baseSpecifier();
				this.state = 1787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1786;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				}
				this.state = 1793;
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
		this.enterRule(_localctx, 308, CPP14Parser.RULE_baseSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1794;
				this.attributeSpecifierSeq();
				}
			}

			this.state = 1809;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Decltype:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				{
				this.state = 1797;
				this.baseTypeSpecifier();
				}
				break;
			case CPP14Parser.Virtual:
				{
				this.state = 1798;
				this.match(CPP14Parser.Virtual);
				this.state = 1800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CPP14Parser.Private - 53)) | (1 << (CPP14Parser.Protected - 53)) | (1 << (CPP14Parser.Public - 53)))) !== 0)) {
					{
					this.state = 1799;
					this.accessSpecifier();
					}
				}

				this.state = 1802;
				this.baseTypeSpecifier();
				}
				break;
			case CPP14Parser.Private:
			case CPP14Parser.Protected:
			case CPP14Parser.Public:
				{
				this.state = 1803;
				this.accessSpecifier();
				this.state = 1805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Virtual) {
					{
					this.state = 1804;
					this.match(CPP14Parser.Virtual);
					}
				}

				this.state = 1807;
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
		this.enterRule(_localctx, 310, CPP14Parser.RULE_classOrDeclType);
		try {
			this.state = 1816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1812;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 255, this._ctx) ) {
				case 1:
					{
					this.state = 1811;
					this.nestedNameSpecifier(0);
					}
					break;
				}
				this.state = 1814;
				this.className();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1815;
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
		this.enterRule(_localctx, 312, CPP14Parser.RULE_baseTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1818;
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
		this.enterRule(_localctx, 314, CPP14Parser.RULE_accessSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1820;
			_la = this._input.LA(1);
			if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CPP14Parser.Private - 53)) | (1 << (CPP14Parser.Protected - 53)) | (1 << (CPP14Parser.Public - 53)))) !== 0))) {
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
		this.enterRule(_localctx, 316, CPP14Parser.RULE_conversionFunctionId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1822;
			this.match(CPP14Parser.Operator);
			this.state = 1823;
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
		this.enterRule(_localctx, 318, CPP14Parser.RULE_conversionTypeId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1825;
			this.typeSpecifierSeq();
			this.state = 1827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				{
				this.state = 1826;
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
		this.enterRule(_localctx, 320, CPP14Parser.RULE_conversionDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1829;
			this.pointerOperator();
			this.state = 1831;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				{
				this.state = 1830;
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
		this.enterRule(_localctx, 322, CPP14Parser.RULE_constructorInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1833;
			this.match(CPP14Parser.Colon);
			this.state = 1834;
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
		this.enterRule(_localctx, 324, CPP14Parser.RULE_memInitializerList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1836;
			this.memInitializer();
			this.state = 1838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1837;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1840;
				this.match(CPP14Parser.Comma);
				this.state = 1841;
				this.memInitializer();
				this.state = 1843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1842;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				}
				this.state = 1849;
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
		this.enterRule(_localctx, 326, CPP14Parser.RULE_memInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1850;
			this.meminitializerid();
			this.state = 1857;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				{
				this.state = 1851;
				this.match(CPP14Parser.LeftParen);
				this.state = 1853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CPP14Parser.Throw - 70)) | (1 << (CPP14Parser.Typeid_ - 70)) | (1 << (CPP14Parser.Typename_ - 70)) | (1 << (CPP14Parser.Unsigned - 70)) | (1 << (CPP14Parser.Void - 70)) | (1 << (CPP14Parser.Wchar - 70)) | (1 << (CPP14Parser.LeftParen - 70)) | (1 << (CPP14Parser.LeftBracket - 70)) | (1 << (CPP14Parser.LeftBrace - 70)) | (1 << (CPP14Parser.Plus - 70)) | (1 << (CPP14Parser.Minus - 70)) | (1 << (CPP14Parser.Star - 70)) | (1 << (CPP14Parser.And - 70)) | (1 << (CPP14Parser.Or - 70)) | (1 << (CPP14Parser.Tilde - 70)) | (1 << (CPP14Parser.Not - 70)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
					{
					this.state = 1852;
					this.expressionList();
					}
				}

				this.state = 1855;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBrace:
				{
				this.state = 1856;
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
		this.enterRule(_localctx, 328, CPP14Parser.RULE_meminitializerid);
		try {
			this.state = 1861;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1859;
				this.classOrDeclType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1860;
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
		this.enterRule(_localctx, 330, CPP14Parser.RULE_operatorFunctionId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1863;
			this.match(CPP14Parser.Operator);
			this.state = 1864;
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
		this.enterRule(_localctx, 332, CPP14Parser.RULE_literalOperatorId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1866;
			this.match(CPP14Parser.Operator);
			this.state = 1870;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.StringLiteral:
				{
				this.state = 1867;
				this.match(CPP14Parser.StringLiteral);
				this.state = 1868;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.UserDefinedStringLiteral:
				{
				this.state = 1869;
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
		this.enterRule(_localctx, 334, CPP14Parser.RULE_templateDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1872;
			this.match(CPP14Parser.Template);
			this.state = 1873;
			this.match(CPP14Parser.Less);
			this.state = 1874;
			this.templateparameterList();
			this.state = 1875;
			this.match(CPP14Parser.Greater);
			this.state = 1876;
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
		this.enterRule(_localctx, 336, CPP14Parser.RULE_templateparameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1878;
			this.templateParameter();
			this.state = 1883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1879;
				this.match(CPP14Parser.Comma);
				this.state = 1880;
				this.templateParameter();
				}
				}
				this.state = 1885;
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
		this.enterRule(_localctx, 338, CPP14Parser.RULE_templateParameter);
		try {
			this.state = 1888;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1886;
				this.typeParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1887;
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
		this.enterRule(_localctx, 340, CPP14Parser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1899;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Class:
			case CPP14Parser.Template:
				{
				this.state = 1895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Template) {
					{
					this.state = 1890;
					this.match(CPP14Parser.Template);
					this.state = 1891;
					this.match(CPP14Parser.Less);
					this.state = 1892;
					this.templateparameterList();
					this.state = 1893;
					this.match(CPP14Parser.Greater);
					}
				}

				this.state = 1897;
				this.match(CPP14Parser.Class);
				}
				break;
			case CPP14Parser.Typename_:
				{
				this.state = 1898;
				this.match(CPP14Parser.Typename_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1912;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1901;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 1905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1904;
					this.match(CPP14Parser.Identifier);
					}
				}

				}
				}
				break;

			case 2:
				{
				{
				this.state = 1908;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1907;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 1910;
				this.match(CPP14Parser.Assign);
				this.state = 1911;
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
		this.enterRule(_localctx, 342, CPP14Parser.RULE_simpleTemplateId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1914;
			this.templateName();
			this.state = 1915;
			this.match(CPP14Parser.Less);
			this.state = 1917;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CPP14Parser.IntegerLiteral - 1)) | (1 << (CPP14Parser.CharacterLiteral - 1)) | (1 << (CPP14Parser.FloatingLiteral - 1)) | (1 << (CPP14Parser.StringLiteral - 1)) | (1 << (CPP14Parser.BooleanLiteral - 1)) | (1 << (CPP14Parser.PointerLiteral - 1)) | (1 << (CPP14Parser.UserDefinedLiteral - 1)) | (1 << (CPP14Parser.Alignof - 1)) | (1 << (CPP14Parser.Auto - 1)) | (1 << (CPP14Parser.Bool - 1)) | (1 << (CPP14Parser.Char - 1)) | (1 << (CPP14Parser.Char16 - 1)) | (1 << (CPP14Parser.Char32 - 1)) | (1 << (CPP14Parser.Class - 1)) | (1 << (CPP14Parser.Const - 1)) | (1 << (CPP14Parser.Const_cast - 1)) | (1 << (CPP14Parser.Decltype - 1)) | (1 << (CPP14Parser.Delete - 1)) | (1 << (CPP14Parser.Double - 1)) | (1 << (CPP14Parser.Dynamic_cast - 1)) | (1 << (CPP14Parser.Enum - 1)))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.Struct - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CPP14Parser.Typeid_ - 74)) | (1 << (CPP14Parser.Typename_ - 74)) | (1 << (CPP14Parser.Union - 74)) | (1 << (CPP14Parser.Unsigned - 74)) | (1 << (CPP14Parser.Void - 74)) | (1 << (CPP14Parser.Volatile - 74)) | (1 << (CPP14Parser.Wchar - 74)) | (1 << (CPP14Parser.LeftParen - 74)) | (1 << (CPP14Parser.LeftBracket - 74)) | (1 << (CPP14Parser.Plus - 74)) | (1 << (CPP14Parser.Minus - 74)) | (1 << (CPP14Parser.Star - 74)) | (1 << (CPP14Parser.And - 74)) | (1 << (CPP14Parser.Or - 74)) | (1 << (CPP14Parser.Tilde - 74)) | (1 << (CPP14Parser.Not - 74)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
				{
				this.state = 1916;
				this.templateArgumentList();
				}
			}

			this.state = 1919;
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
		this.enterRule(_localctx, 344, CPP14Parser.RULE_templateId);
		let _la: number;
		try {
			this.state = 1932;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1921;
				this.simpleTemplateId();
				}
				break;
			case CPP14Parser.Operator:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1924;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
				case 1:
					{
					this.state = 1922;
					this.operatorFunctionId();
					}
					break;

				case 2:
					{
					this.state = 1923;
					this.literalOperatorId();
					}
					break;
				}
				this.state = 1926;
				this.match(CPP14Parser.Less);
				this.state = 1928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (CPP14Parser.IntegerLiteral - 1)) | (1 << (CPP14Parser.CharacterLiteral - 1)) | (1 << (CPP14Parser.FloatingLiteral - 1)) | (1 << (CPP14Parser.StringLiteral - 1)) | (1 << (CPP14Parser.BooleanLiteral - 1)) | (1 << (CPP14Parser.PointerLiteral - 1)) | (1 << (CPP14Parser.UserDefinedLiteral - 1)) | (1 << (CPP14Parser.Alignof - 1)) | (1 << (CPP14Parser.Auto - 1)) | (1 << (CPP14Parser.Bool - 1)) | (1 << (CPP14Parser.Char - 1)) | (1 << (CPP14Parser.Char16 - 1)) | (1 << (CPP14Parser.Char32 - 1)) | (1 << (CPP14Parser.Class - 1)) | (1 << (CPP14Parser.Const - 1)) | (1 << (CPP14Parser.Const_cast - 1)) | (1 << (CPP14Parser.Decltype - 1)) | (1 << (CPP14Parser.Delete - 1)) | (1 << (CPP14Parser.Double - 1)) | (1 << (CPP14Parser.Dynamic_cast - 1)) | (1 << (CPP14Parser.Enum - 1)))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.Struct - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CPP14Parser.Typeid_ - 74)) | (1 << (CPP14Parser.Typename_ - 74)) | (1 << (CPP14Parser.Union - 74)) | (1 << (CPP14Parser.Unsigned - 74)) | (1 << (CPP14Parser.Void - 74)) | (1 << (CPP14Parser.Volatile - 74)) | (1 << (CPP14Parser.Wchar - 74)) | (1 << (CPP14Parser.LeftParen - 74)) | (1 << (CPP14Parser.LeftBracket - 74)) | (1 << (CPP14Parser.Plus - 74)) | (1 << (CPP14Parser.Minus - 74)) | (1 << (CPP14Parser.Star - 74)) | (1 << (CPP14Parser.And - 74)) | (1 << (CPP14Parser.Or - 74)) | (1 << (CPP14Parser.Tilde - 74)) | (1 << (CPP14Parser.Not - 74)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
					{
					this.state = 1927;
					this.templateArgumentList();
					}
				}

				this.state = 1930;
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
		this.enterRule(_localctx, 346, CPP14Parser.RULE_templateName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1934;
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
		this.enterRule(_localctx, 348, CPP14Parser.RULE_templateArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1936;
			this.templateArgument();
			this.state = 1938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1937;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1947;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 1940;
				this.match(CPP14Parser.Comma);
				this.state = 1941;
				this.templateArgument();
				this.state = 1943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1942;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				}
				this.state = 1949;
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
		this.enterRule(_localctx, 350, CPP14Parser.RULE_templateArgument);
		try {
			this.state = 1953;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1950;
				this.theTypeId();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1951;
				this.constantExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1952;
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
		this.enterRule(_localctx, 352, CPP14Parser.RULE_typeNameSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1955;
			this.match(CPP14Parser.Typename_);
			this.state = 1956;
			this.nestedNameSpecifier(0);
			this.state = 1962;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				{
				this.state = 1957;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				{
				this.state = 1959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Template) {
					{
					this.state = 1958;
					this.match(CPP14Parser.Template);
					}
				}

				this.state = 1961;
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
		this.enterRule(_localctx, 354, CPP14Parser.RULE_explicitInstantiation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1965;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Extern) {
				{
				this.state = 1964;
				this.match(CPP14Parser.Extern);
				}
			}

			this.state = 1967;
			this.match(CPP14Parser.Template);
			this.state = 1968;
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
		this.enterRule(_localctx, 356, CPP14Parser.RULE_explicitSpecialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1970;
			this.match(CPP14Parser.Template);
			this.state = 1971;
			this.match(CPP14Parser.Less);
			this.state = 1972;
			this.match(CPP14Parser.Greater);
			this.state = 1973;
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
		this.enterRule(_localctx, 358, CPP14Parser.RULE_tryBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1975;
			this.match(CPP14Parser.Try);
			this.state = 1976;
			this.compoundStatement();
			this.state = 1977;
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
		this.enterRule(_localctx, 360, CPP14Parser.RULE_functionTryBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1979;
			this.match(CPP14Parser.Try);
			this.state = 1981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Colon) {
				{
				this.state = 1980;
				this.constructorInitializer();
				}
			}

			this.state = 1983;
			this.compoundStatement();
			this.state = 1984;
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
		this.enterRule(_localctx, 362, CPP14Parser.RULE_handlerSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1987;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1986;
				this.handler();
				}
				}
				this.state = 1989;
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
		this.enterRule(_localctx, 364, CPP14Parser.RULE_handler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1991;
			this.match(CPP14Parser.Catch);
			this.state = 1992;
			this.match(CPP14Parser.LeftParen);
			this.state = 1993;
			this.exceptionDeclaration();
			this.state = 1994;
			this.match(CPP14Parser.RightParen);
			this.state = 1995;
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
		this.enterRule(_localctx, 366, CPP14Parser.RULE_exceptionDeclaration);
		let _la: number;
		try {
			this.state = 2006;
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
				this.state = 1998;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1997;
					this.attributeSpecifierSeq();
					}
				}

				this.state = 2000;
				this.typeSpecifierSeq();
				this.state = 2003;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 288, this._ctx) ) {
				case 1:
					{
					this.state = 2001;
					this.declarator();
					}
					break;

				case 2:
					{
					this.state = 2002;
					this.abstractDeclarator();
					}
					break;
				}
				}
				break;
			case CPP14Parser.Ellipsis:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2005;
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
		this.enterRule(_localctx, 368, CPP14Parser.RULE_throwExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2008;
			this.match(CPP14Parser.Throw);
			this.state = 2010;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.IntegerLiteral) | (1 << CPP14Parser.CharacterLiteral) | (1 << CPP14Parser.FloatingLiteral) | (1 << CPP14Parser.StringLiteral) | (1 << CPP14Parser.BooleanLiteral) | (1 << CPP14Parser.PointerLiteral) | (1 << CPP14Parser.UserDefinedLiteral) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Delete) | (1 << CPP14Parser.Double) | (1 << CPP14Parser.Dynamic_cast))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (CPP14Parser.Float - 38)) | (1 << (CPP14Parser.Int - 38)) | (1 << (CPP14Parser.Long - 38)) | (1 << (CPP14Parser.New - 38)) | (1 << (CPP14Parser.Noexcept - 38)) | (1 << (CPP14Parser.Operator - 38)) | (1 << (CPP14Parser.Reinterpret_cast - 38)) | (1 << (CPP14Parser.Short - 38)) | (1 << (CPP14Parser.Signed - 38)) | (1 << (CPP14Parser.Sizeof - 38)) | (1 << (CPP14Parser.Static_cast - 38)) | (1 << (CPP14Parser.This - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (CPP14Parser.Throw - 70)) | (1 << (CPP14Parser.Typeid_ - 70)) | (1 << (CPP14Parser.Typename_ - 70)) | (1 << (CPP14Parser.Unsigned - 70)) | (1 << (CPP14Parser.Void - 70)) | (1 << (CPP14Parser.Wchar - 70)) | (1 << (CPP14Parser.LeftParen - 70)) | (1 << (CPP14Parser.LeftBracket - 70)) | (1 << (CPP14Parser.Plus - 70)) | (1 << (CPP14Parser.Minus - 70)) | (1 << (CPP14Parser.Star - 70)) | (1 << (CPP14Parser.And - 70)) | (1 << (CPP14Parser.Or - 70)) | (1 << (CPP14Parser.Tilde - 70)) | (1 << (CPP14Parser.Not - 70)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CPP14Parser.PlusPlus - 119)) | (1 << (CPP14Parser.MinusMinus - 119)) | (1 << (CPP14Parser.Doublecolon - 119)) | (1 << (CPP14Parser.Identifier - 119)))) !== 0)) {
				{
				this.state = 2009;
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
		this.enterRule(_localctx, 370, CPP14Parser.RULE_exceptionSpecification);
		try {
			this.state = 2014;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Throw:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2012;
				this.dynamicExceptionSpecification();
				}
				break;
			case CPP14Parser.Noexcept:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2013;
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
		this.enterRule(_localctx, 372, CPP14Parser.RULE_dynamicExceptionSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2016;
			this.match(CPP14Parser.Throw);
			this.state = 2017;
			this.match(CPP14Parser.LeftParen);
			this.state = 2019;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Decltype) | (1 << CPP14Parser.Double))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Short - 32)) | (1 << (CPP14Parser.Signed - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CPP14Parser.Struct - 65)) | (1 << (CPP14Parser.Typename_ - 65)) | (1 << (CPP14Parser.Union - 65)) | (1 << (CPP14Parser.Unsigned - 65)) | (1 << (CPP14Parser.Void - 65)) | (1 << (CPP14Parser.Volatile - 65)) | (1 << (CPP14Parser.Wchar - 65)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				this.state = 2018;
				this.typeIdList();
				}
			}

			this.state = 2021;
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
		this.enterRule(_localctx, 374, CPP14Parser.RULE_typeIdList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2023;
			this.theTypeId();
			this.state = 2025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 2024;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 2034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CPP14Parser.Comma) {
				{
				{
				this.state = 2027;
				this.match(CPP14Parser.Comma);
				this.state = 2028;
				this.theTypeId();
				this.state = 2030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 2029;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				}
				this.state = 2036;
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
		this.enterRule(_localctx, 376, CPP14Parser.RULE_noeExceptSpecification);
		try {
			this.state = 2043;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2037;
				this.match(CPP14Parser.Noexcept);
				this.state = 2038;
				this.match(CPP14Parser.LeftParen);
				this.state = 2039;
				this.constantExpression();
				this.state = 2040;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2042;
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
		this.enterRule(_localctx, 378, CPP14Parser.RULE_theOperator);
		try {
			this.state = 2098;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2045;
				this.match(CPP14Parser.New);
				this.state = 2048;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 297, this._ctx) ) {
				case 1:
					{
					this.state = 2046;
					this.match(CPP14Parser.LeftBracket);
					this.state = 2047;
					this.match(CPP14Parser.RightBracket);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2050;
				this.match(CPP14Parser.Delete);
				this.state = 2053;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
				case 1:
					{
					this.state = 2051;
					this.match(CPP14Parser.LeftBracket);
					this.state = 2052;
					this.match(CPP14Parser.RightBracket);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2055;
				this.match(CPP14Parser.Plus);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2056;
				this.match(CPP14Parser.Minus);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2057;
				this.match(CPP14Parser.Star);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2058;
				this.match(CPP14Parser.Div);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2059;
				this.match(CPP14Parser.Mod);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2060;
				this.match(CPP14Parser.Caret);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2061;
				this.match(CPP14Parser.And);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2062;
				this.match(CPP14Parser.Or);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2063;
				this.match(CPP14Parser.Tilde);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2064;
				this.match(CPP14Parser.Not);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2065;
				this.match(CPP14Parser.Assign);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2066;
				this.match(CPP14Parser.Greater);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2067;
				this.match(CPP14Parser.Less);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2068;
				this.match(CPP14Parser.GreaterEqual);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2069;
				this.match(CPP14Parser.PlusAssign);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2070;
				this.match(CPP14Parser.MinusAssign);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2071;
				this.match(CPP14Parser.StarAssign);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 2072;
				this.match(CPP14Parser.Assign);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 2073;
				this.match(CPP14Parser.ModAssign);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 2074;
				this.match(CPP14Parser.XorAssign);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 2075;
				this.match(CPP14Parser.AndAssign);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 2076;
				this.match(CPP14Parser.OrAssign);
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 2077;
				this.match(CPP14Parser.Less);
				this.state = 2078;
				this.match(CPP14Parser.Less);
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 2079;
				this.match(CPP14Parser.Greater);
				this.state = 2080;
				this.match(CPP14Parser.Greater);
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 2081;
				this.match(CPP14Parser.RightShiftAssign);
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 2082;
				this.match(CPP14Parser.LeftShiftAssign);
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 2083;
				this.match(CPP14Parser.Equal);
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 2084;
				this.match(CPP14Parser.NotEqual);
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 2085;
				this.match(CPP14Parser.LessEqual);
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 2086;
				this.match(CPP14Parser.GreaterEqual);
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 2087;
				this.match(CPP14Parser.AndAnd);
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 2088;
				this.match(CPP14Parser.OrOr);
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 2089;
				this.match(CPP14Parser.PlusPlus);
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 2090;
				this.match(CPP14Parser.MinusMinus);
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 2091;
				this.match(CPP14Parser.Comma);
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 2092;
				this.match(CPP14Parser.ArrowStar);
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 2093;
				this.match(CPP14Parser.Arrow);
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 2094;
				this.match(CPP14Parser.LeftParen);
				this.state = 2095;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 2096;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2097;
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
		this.enterRule(_localctx, 380, CPP14Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2100;
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

		case 115:
			return this.noPointerDeclarator_sempred(_localctx as NoPointerDeclaratorContext, predIndex);

		case 126:
			return this.noPointerAbstractDeclarator_sempred(_localctx as NoPointerAbstractDeclaratorContext, predIndex);

		case 128:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x95\u0839\x04" +
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
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x03\x02\x05\x02\u0182\n\x02" +
		"\x03\x02\x03\x02\x03\x03\x06\x03\u0187\n\x03\r\x03\x0E\x03\u0188\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0192\n\x03\x03" +
		"\x04\x03\x04\x05\x04\u0196\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\u019F\n\x05\x03\x05\x05\x05\u01A2\n\x05\x03\x06" +
		"\x03\x06\x05\x06\u01A6\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\u01AE\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\u01B5\n\x07\x03\x07\x05\x07\u01B8\n\x07\x03\x07\x07\x07\u01BB\n\x07\f" +
		"\x07\x0E\x07\u01BE\v\x07\x03\b\x03\b\x05\b\u01C2\n\b\x03\b\x03\b\x03\t" +
		"\x03\t\x05\t\u01C8\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\u01D0" +
		"\n\n\x05\n\u01D2\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x07\f\u01D9\n\f\f\f" +
		"\x0E\f\u01DC\v\f\x03\f\x05\f\u01DF\n\f\x03\r\x03\r\x05\r\u01E3\n\r\x03" +
		"\x0E\x05\x0E\u01E6\n\x0E\x03\x0E\x03\x0E\x05\x0E\u01EA\n\x0E\x03\x0F\x05" +
		"\x0F\u01ED\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\u01F4" +
		"\n\x10\x03\x10\x03\x10\x05\x10\u01F8\n\x10\x03\x10\x05\x10\u01FB\n\x10" +
		"\x03\x10\x05\x10\u01FE\n\x10\x03\x10\x05\x10\u0201\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0207\n\x11\x03\x11\x03\x11\x05\x11\u020B\n\x11" +
		"\x03\x11\x03\x11\x05\x11\u020F\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u021D" +
		"\n\x11\x03\x11\x03\x11\x05\x11\u0221\n\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\u0227\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\u022E\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0234\n\x11\x03\x11" +
		"\x03\x11\x05\x11\u0238\n\x11\x03\x11\x03\x11\x07\x11\u023C\n\x11\f\x11" +
		"\x0E\x11\u023F\v\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x05\x14\u0246" +
		"\n\x14\x03\x14\x03\x14\x03\x14\x05\x14\u024B\n\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u0258\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u025F" +
		"\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u026B\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0275\n\x15\x03\x16\x03\x16\x03\x17" +
		"\x05\x17\u027A\n\x17\x03\x17\x03\x17\x05\x17\u027E\n\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u0285\n\x17\x03\x17\x05\x17\u0288\n\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0290\n\x19\x03" +
		"\x1A\x03\x1A\x05\x1A\u0294\n\x1A\x03\x1A\x05\x1A\u0297\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u029E\n\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u02A5\n\x1B\x07\x1B\u02A7\n\x1B\f\x1B\x0E\x1B" +
		"\u02AA\v\x1B\x03\x1C\x03\x1C\x05\x1C\u02AE\n\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u02B2\n\x1C\x03\x1D\x05\x1D\u02B5\n\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
		"\u02BA\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02C9\n\x1F\x03 " +
		"\x03 \x03 \x07 \u02CE\n \f \x0E \u02D1\v \x03!\x03!\x03!\x07!\u02D6\n" +
		"!\f!\x0E!\u02D9\v!\x03\"\x03\"\x03\"\x07\"\u02DE\n\"\f\"\x0E\"\u02E1\v" +
		"\"\x03#\x03#\x03#\x03#\x07#\u02E7\n#\f#\x0E#\u02EA\v#\x03$\x03$\x03$\x03" +
		"$\x05$\u02F0\n$\x03%\x03%\x03%\x07%\u02F5\n%\f%\x0E%\u02F8\v%\x03&\x03" +
		"&\x03&\x07&\u02FD\n&\f&\x0E&\u0300\v&\x03\'\x03\'\x03\'\x07\'\u0305\n" +
		"\'\f\'\x0E\'\u0308\v\'\x03(\x03(\x03(\x07(\u030D\n(\f(\x0E(\u0310\v(\x03" +
		")\x03)\x03)\x07)\u0315\n)\f)\x0E)\u0318\v)\x03*\x03*\x03*\x07*\u031D\n" +
		"*\f*\x0E*\u0320\v*\x03+\x03+\x03+\x07+\u0325\n+\f+\x0E+\u0328\v+\x03," +
		"\x03,\x03,\x03,\x03,\x03,\x05,\u0330\n,\x03-\x03-\x03-\x03-\x03-\x03-" +
		"\x05-\u0338\n-\x03.\x03.\x03/\x03/\x03/\x07/\u033F\n/\f/\x0E/\u0342\v" +
		"/\x030\x030\x031\x031\x051\u0348\n1\x031\x031\x031\x031\x031\x031\x05" +
		"1\u0350\n1\x031\x051\u0353\n1\x032\x052\u0356\n2\x032\x032\x032\x032\x05" +
		"2\u035C\n2\x032\x032\x032\x033\x053\u0362\n3\x033\x033\x034\x034\x054" +
		"\u0368\n4\x034\x034\x035\x065\u036D\n5\r5\x0E5\u036E\x036\x036\x036\x03" +
		"6\x036\x036\x036\x056\u0378\n6\x036\x036\x036\x036\x036\x036\x056\u0380" +
		"\n6\x037\x037\x057\u0384\n7\x037\x037\x037\x037\x037\x057\u038B\n7\x05" +
		"7\u038D\n7\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x038\x038\x038\x038\x038\x038\x058\u03A1\n8\x038\x038\x058\u03A5\n8" +
		"\x038\x038\x038\x038\x058\u03AB\n8\x038\x038\x038\x058\u03B0\n8\x039\x03" +
		"9\x059\u03B4\n9\x03:\x05:\u03B7\n:\x03:\x03:\x03:\x03;\x03;\x05;\u03BE" +
		"\n;\x03<\x03<\x03<\x03<\x03<\x05<\u03C5\n<\x03<\x03<\x05<\u03C9\n<\x03" +
		"<\x03<\x03=\x03=\x03>\x06>\u03D0\n>\r>\x0E>\u03D1\x03?\x03?\x03?\x03?" +
		"\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u03DE\n?\x03@\x03@\x03@\x03@\x03@" +
		"\x03@\x03@\x03@\x03@\x05@\u03E9\n@\x03A\x03A\x03A\x07A\u03EE\nA\fA\x0E" +
		"A\u03F1\vA\x03A\x03A\x05A\u03F5\nA\x03B\x03B\x03B\x03B\x03B\x03B\x03B" +
		"\x03B\x05B\u03FF\nB\x03C\x03C\x03C\x05C\u0404\nC\x03C\x03C\x03C\x03C\x03" +
		"D\x05D\u040B\nD\x03D\x05D\u040E\nD\x03D\x03D\x03D\x05D\u0413\nD\x03D\x03" +
		"D\x03D\x05D\u0418\nD\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03F\x03" +
		"F\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u042D\nH\x03I\x06" +
		"I\u0430\nI\rI\x0EI\u0431\x03I\x05I\u0435\nI\x03J\x03J\x03K\x03K\x03L\x03" +
		"L\x03M\x03M\x03M\x05M\u0440\nM\x03N\x03N\x03N\x03N\x05N\u0446\nN\x03O" +
		"\x06O\u0449\nO\rO\x0EO\u044A\x03O\x05O\u044E\nO\x03P\x06P\u0451\nP\rP" +
		"\x0EP\u0452\x03P\x05P\u0456\nP\x03Q\x05Q\u0459\nQ\x03Q\x03Q\x03Q\x03Q" +
		"\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x03Q\x05Q\u046F\nQ\x03R\x03R\x03R\x03R\x05R\u0475\nR\x03S\x03S" +
		"\x03S\x03S\x05S\u047B\nS\x03S\x03S\x03T\x03T\x05T\u0481\nT\x03T\x05T\u0484" +
		"\nT\x03T\x03T\x03T\x03T\x05T\u048A\nT\x03T\x03T\x05T\u048E\nT\x03T\x03" +
		"T\x05T\u0492\nT\x03T\x05T\u0495\nT\x03U\x03U\x03V\x03V\x03V\x03V\x05V" +
		"\u049D\nV\x05V\u049F\nV\x03V\x03V\x03W\x03W\x05W\u04A5\nW\x03W\x05W\u04A8" +
		"\nW\x03W\x05W\u04AB\nW\x03W\x05W\u04AE\nW\x03X\x03X\x05X\u04B2\nX\x03" +
		"X\x03X\x05X\u04B6\nX\x03X\x03X\x03Y\x03Y\x05Y\u04BC\nY\x03Z\x03Z\x03Z" +
		"\x03[\x03[\x03[\x07[\u04C4\n[\f[\x0E[\u04C7\v[\x03\\\x03\\\x03\\\x05\\" +
		"\u04CC\n\\\x03]\x03]\x03^\x03^\x05^\u04D2\n^\x03_\x03_\x03`\x05`\u04D7" +
		"\n`\x03`\x03`\x03`\x05`\u04DC\n`\x03`\x03`\x05`\u04E0\n`\x03`\x03`\x03" +
		"a\x03a\x03b\x03b\x03b\x03b\x03b\x03b\x03c\x05c\u04ED\nc\x03c\x03c\x03" +
		"d\x03d\x05d\u04F3\nd\x03d\x03d\x05d\u04F7\nd\x03d\x03d\x03d\x03e\x05e" +
		"\u04FD\ne\x03e\x03e\x03e\x05e\u0502\ne\x03e\x03e\x03e\x03f\x03f\x03f\x03" +
		"f\x03f\x03f\x03g\x03g\x03g\x03g\x05g\u0511\ng\x03g\x03g\x05g\u0515\ng" +
		"\x03h\x06h\u0518\nh\rh\x0Eh\u0519\x03i\x03i\x03i\x05i\u051F\ni\x03i\x03" +
		"i\x03i\x05i\u0524\ni\x03j\x03j\x03j\x03j\x05j\u052A\nj\x03j\x05j\u052D" +
		"\nj\x03j\x03j\x03k\x03k\x03k\x07k\u0534\nk\fk\x0Ek\u0537\vk\x03k\x05k" +
		"\u053A\nk\x03l\x03l\x03l\x05l\u053F\nl\x03l\x03l\x05l\u0543\nl\x03m\x03" +
		"m\x03n\x03n\x05n\u0549\nn\x03n\x03n\x03o\x06o\u054E\no\ro\x0Eo\u054F\x03" +
		"p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x06p\u055F" +
		"\np\rp\x0Ep\u0560\x05p\u0563\np\x03q\x03q\x03q\x07q\u0568\nq\fq\x0Eq\u056B" +
		"\vq\x03r\x03r\x05r\u056F\nr\x03s\x03s\x03s\x03s\x03s\x05s\u0576\ns\x03" +
		"t\x03t\x05t\u057A\nt\x07t\u057C\nt\ft\x0Et\u057F\vt\x03t\x03t\x03u\x03" +
		"u\x03u\x05u\u0586\nu\x03u\x03u\x03u\x03u\x05u\u058C\nu\x03u\x03u\x03u" +
		"\x03u\x05u\u0592\nu\x03u\x03u\x05u\u0596\nu\x05u\u0598\nu\x07u\u059A\n" +
		"u\fu\x0Eu\u059D\vu\x03v\x03v\x05v\u05A1\nv\x03v\x03v\x05v\u05A5\nv\x03" +
		"v\x05v\u05A8\nv\x03v\x05v\u05AB\nv\x03v\x05v\u05AE\nv\x03w\x03w\x03w\x05" +
		"w\u05B3\nw\x03x\x03x\x05x\u05B7\nx\x03x\x05x\u05BA\nx\x03x\x03x\x05x\u05BE" +
		"\nx\x03x\x05x\u05C1\nx\x05x\u05C3\nx\x03y\x06y\u05C6\ny\ry\x0Ey\u05C7" +
		"\x03z\x03z\x03{\x03{\x03|\x05|\u05CF\n|\x03|\x03|\x03}\x03}\x05}\u05D5" +
		"\n}\x03~\x03~\x05~\u05D9\n~\x03~\x03~\x03~\x03~\x05~\u05DF\n~\x03\x7F" +
		"\x03\x7F\x06\x7F\u05E3\n\x7F\r\x7F\x0E\x7F\u05E4\x03\x7F\x05\x7F\u05E8" +
		"\n\x7F\x05\x7F\u05EA\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u05F0" +
		"\n\x80\x03\x80\x03\x80\x05\x80\u05F4\n\x80\x03\x80\x03\x80\x03\x80\x03" +
		"\x80\x05\x80\u05FA\n\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80" +
		"\u0601\n\x80\x03\x80\x03\x80\x05\x80\u0605\n\x80\x05\x80\u0607\n\x80\x07" +
		"\x80\u0609\n\x80\f\x80\x0E\x80\u060C\v\x80\x03\x81\x07\x81\u060F\n\x81" +
		"\f\x81\x0E\x81\u0612\v\x81\x03\x81\x03\x81\x03\x82\x03\x82\x03\x82\x03" +
		"\x82\x03\x82\x03\x82\x03\x82\x05\x82\u061D\n\x82\x03\x82\x03\x82\x05\x82" +
		"\u0621\n\x82\x05\x82\u0623\n\x82\x07\x82\u0625\n\x82\f\x82\x0E\x82\u0628" +
		"\v\x82\x03\x83\x03\x83\x05\x83\u062C\n\x83\x03\x83\x05\x83\u062F\n\x83" +
		"\x03\x84\x03\x84\x03\x84\x07\x84\u0634\n\x84\f\x84\x0E\x84\u0637\v\x84" +
		"\x03\x85\x05\x85\u063A\n\x85\x03\x85\x03\x85\x03\x85\x05\x85\u063F\n\x85" +
		"\x05\x85\u0641\n\x85\x03\x85\x03\x85\x05\x85\u0645\n\x85\x03\x86\x05\x86" +
		"\u0648\n\x86\x03\x86\x05\x86\u064B\n\x86\x03\x86\x03\x86\x05\x86\u064F" +
		"\n\x86\x03\x86\x03\x86\x03\x87\x05\x87\u0654\n\x87\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x05\x87\u065B\n\x87\x03\x88\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x05\x88\u0662\n\x88\x03\x89\x03\x89\x03\x89\x05\x89\u0667\n\x89" +
		"\x03\x8A\x03\x8A\x05\x8A\u066B\n\x8A\x03\x8B\x03\x8B\x05\x8B\u066F\n\x8B" +
		"\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0674\n\x8B\x07\x8B\u0676\n\x8B\f\x8B" +
		"\x0E\x8B\u0679\v\x8B\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u067E\n\x8C\x05\x8C" +
		"\u0680\n\x8C\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x05\x8D\u0686\n\x8D\x03\x8E" +
		"\x03\x8E\x03\x8E\x05\x8E\u068B\n\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x05" +
		"\x8F\u0691\n\x8F\x03\x8F\x03\x8F\x05\x8F\u0695\n\x8F\x05\x8F\u0697\n\x8F" +
		"\x03\x8F\x05\x8F\u069A\n\x8F\x03\x8F\x03\x8F\x05\x8F\u069E\n\x8F\x03\x8F" +
		"\x03\x8F\x05\x8F\u06A2\n\x8F\x05\x8F\u06A4\n\x8F\x05\x8F\u06A6\n\x8F\x03" +
		"\x90\x05\x90\u06A9\n\x90\x03\x90\x03\x90\x03\x91\x03\x91\x03\x92\x03\x92" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x06\x93\u06B5\n\x93\r\x93\x0E\x93\u06B6" +
		"\x03\x94\x05\x94\u06BA\n\x94\x03\x94\x05\x94\u06BD\n\x94\x03\x94\x05\x94" +
		"\u06C0\n\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05" +
		"\x94\u06C9\n\x94\x03\x95\x03\x95\x03\x95\x07\x95\u06CE\n\x95\f\x95\x0E" +
		"\x95\u06D1\v\x95\x03\x96\x03\x96\x05\x96\u06D5\n\x96\x03\x96\x05\x96\u06D8" +
		"\n\x96\x03\x96\x05\x96\u06DB\n\x96\x05\x96\u06DD\n\x96\x03\x96\x05\x96" +
		"\u06E0\n\x96\x03\x96\x05\x96\u06E3\n\x96\x03\x96\x03\x96\x05\x96\u06E7" +
		"\n\x96\x03\x97\x06\x97\u06EA\n\x97\r\x97\x0E\x97\u06EB\x03\x98\x03\x98" +
		"\x03\x99\x03\x99\x03\x99\x03\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9B\x03\x9B" +
		"\x05\x9B\u06F9\n\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u06FE\n\x9B\x07\x9B" +
		"\u0700\n\x9B\f\x9B\x0E\x9B\u0703\v\x9B\x03\x9C\x05\x9C\u0706\n\x9C\x03" +
		"\x9C\x03\x9C\x03\x9C\x05\x9C\u070B\n\x9C\x03\x9C\x03\x9C\x03\x9C\x05\x9C" +
		"\u0710\n\x9C\x03\x9C\x03\x9C\x05\x9C\u0714\n\x9C\x03\x9D\x05\x9D\u0717" +
		"\n\x9D\x03\x9D\x03\x9D\x05\x9D\u071B\n\x9D\x03\x9E\x03\x9E\x03\x9F\x03" +
		"\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x05\xA1\u0726\n\xA1\x03\xA2" +
		"\x03\xA2\x05\xA2\u072A\n\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x05" +
		"\xA4\u0731\n\xA4\x03\xA4\x03\xA4\x03\xA4\x05\xA4\u0736\n\xA4\x07\xA4\u0738" +
		"\n\xA4\f\xA4\x0E\xA4\u073B\v\xA4\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u0740" +
		"\n\xA5\x03\xA5\x03\xA5\x05\xA5\u0744\n\xA5\x03\xA6\x03\xA6\x05\xA6\u0748" +
		"\n\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x05\xA8" +
		"\u0751\n\xA8\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xAA\x03" +
		"\xAA\x03\xAA\x07\xAA\u075C\n\xAA\f\xAA\x0E\xAA\u075F\v\xAA\x03\xAB\x03" +
		"\xAB\x05\xAB\u0763\n\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x05\xAC" +
		"\u076A\n\xAC\x03\xAC\x03\xAC\x05\xAC\u076E\n\xAC\x03\xAC\x05\xAC\u0771" +
		"\n\xAC\x03\xAC\x05\xAC\u0774\n\xAC\x03\xAC\x05\xAC\u0777\n\xAC\x03\xAC" +
		"\x03\xAC\x05\xAC\u077B\n\xAC\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u0780\n\xAD" +
		"\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAE\x05\xAE\u0787\n\xAE\x03\xAE\x03" +
		"\xAE\x05\xAE\u078B\n\xAE\x03\xAE\x03\xAE\x05\xAE\u078F\n\xAE\x03\xAF\x03" +
		"\xAF\x03\xB0\x03\xB0\x05\xB0\u0795\n\xB0\x03\xB0\x03\xB0\x03\xB0\x05\xB0" +
		"\u079A\n\xB0\x07\xB0\u079C\n\xB0\f\xB0\x0E\xB0\u079F\v\xB0\x03\xB1\x03" +
		"\xB1\x03\xB1\x05\xB1\u07A4\n\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x05\xB2" +
		"\u07AA\n\xB2\x03\xB2\x05\xB2\u07AD\n\xB2\x03\xB3\x05\xB3\u07B0\n\xB3\x03" +
		"\xB3\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB5\x03" +
		"\xB5\x03\xB5\x03\xB5\x03\xB6\x03\xB6\x05\xB6\u07C0\n\xB6\x03\xB6\x03\xB6" +
		"\x03\xB6\x03\xB7\x06\xB7\u07C6\n\xB7\r\xB7\x0E\xB7\u07C7\x03\xB8\x03\xB8" +
		"\x03\xB8\x03\xB8\x03\xB8\x03\xB8\x03\xB9\x05\xB9\u07D1\n\xB9\x03\xB9\x03" +
		"\xB9\x03\xB9\x05\xB9\u07D6\n\xB9\x03\xB9\x05\xB9\u07D9\n\xB9\x03\xBA\x03" +
		"\xBA\x05\xBA\u07DD\n\xBA\x03\xBB\x03\xBB\x05\xBB\u07E1\n\xBB\x03\xBC\x03" +
		"\xBC\x03\xBC\x05\xBC\u07E6\n\xBC\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x05\xBD" +
		"\u07EC\n\xBD\x03\xBD\x03\xBD\x03\xBD\x05\xBD\u07F1\n\xBD\x07\xBD\u07F3" +
		"\n\xBD\f\xBD\x0E\xBD\u07F6\v\xBD\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE" +
		"\x03\xBE\x05\xBE\u07FE\n\xBE\x03\xBF\x03\xBF\x03\xBF\x05\xBF\u0803\n\xBF" +
		"\x03\xBF\x03\xBF\x03\xBF\x05\xBF\u0808\n\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xBF\x03\xBF\x03\xBF\x05\xBF\u0835\n\xBF\x03\xC0\x03\xC0\x03\xC0" +
		"\x02\x02\b\f 4\xE8\xFE\u0102\xC1\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
		"V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02" +
		"r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88" +
		"\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A" +
		"\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC" +
		"\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE" +
		"\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0" +
		"\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2" +
		"\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4" +
		"\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
		"\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
		"\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
		"\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
		"\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C" +
		"\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A" +
		"\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158" +
		"\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166" +
		"\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174" +
		"\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\x02\x17\x04\x02" +
		"bbff\x06\x02\x19\x19  ;;BB\x04\x02}}\x82\x82\x03\x02yz\x04\x02\\^be\x04" +
		"\x02||\x83\x83\x03\x02^`\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\\]\x04\x02ghuv\x03\x02st\x04\x02ffir\x07\x02%%00::@@GG\x05\x02##" +
		"--QQ\x04\x02\x16\x16CC\x03\x02V[\x04\x02bbww\x04\x02\x17\x17SS\x03\x02" +
		"\x1C\x1D\x04\x02\'\'66\x03\x0279\x03\x02\x03\t\x02\u0921\x02\u0181\x03" +
		"\x02\x02\x02\x04\u0191\x03\x02\x02\x02\x06\u0195\x03\x02\x02\x02\b\u01A1" +
		"\x03\x02\x02\x02\n\u01A3\x03\x02\x02\x02\f\u01A9\x03\x02\x02\x02\x0E\u01BF" +
		"\x03\x02\x02\x02\x10\u01C5\x03\x02\x02\x02\x12\u01D1\x03\x02\x02\x02\x14" +
		"\u01D3\x03\x02\x02\x02\x16\u01D5\x03\x02\x02\x02\x18\u01E2\x03\x02\x02" +
		"\x02\x1A\u01E9\x03\x02\x02\x02\x1C\u01EC\x03\x02\x02\x02\x1E\u01F1\x03" +
		"\x02\x02\x02 \u0220\x03\x02\x02\x02\"\u0240\x03\x02\x02\x02$\u0242\x03" +
		"\x02\x02\x02&\u0257\x03\x02\x02\x02(\u0274\x03\x02\x02\x02*\u0276\x03" +
		"\x02\x02\x02,\u0279\x03\x02\x02\x02.\u0289\x03\x02\x02\x020\u028D\x03" +
		"\x02\x02\x022\u0296\x03\x02\x02\x024\u0298\x03\x02\x02\x026\u02B1\x03" +
		"\x02\x02\x028\u02B4\x03\x02\x02\x02:\u02BD\x03\x02\x02\x02<\u02C8\x03" +
		"\x02\x02\x02>\u02CA\x03\x02\x02\x02@\u02D2\x03\x02\x02\x02B\u02DA\x03" +
		"\x02\x02\x02D\u02E2\x03\x02\x02\x02F\u02EF\x03\x02\x02\x02H\u02F1\x03" +
		"\x02\x02\x02J\u02F9\x03\x02\x02\x02L\u0301\x03\x02\x02\x02N\u0309\x03" +
		"\x02\x02\x02P\u0311\x03\x02\x02\x02R\u0319\x03\x02\x02\x02T\u0321\x03" +
		"\x02\x02\x02V\u0329\x03\x02\x02\x02X\u0337\x03\x02\x02\x02Z\u0339\x03" +
		"\x02\x02\x02\\\u033B\x03\x02\x02\x02^\u0343\x03\x02\x02\x02`\u0352\x03" +
		"\x02\x02\x02b\u0355\x03\x02\x02\x02d\u0361\x03\x02\x02\x02f\u0365\x03" +
		"\x02\x02\x02h\u036C\x03\x02\x02\x02j\u037F\x03\x02\x02\x02l\u038C\x03" +
		"\x02\x02\x02n\u03AF\x03\x02\x02\x02p\u03B3\x03\x02\x02\x02r\u03B6\x03" +
		"\x02\x02\x02t\u03BD\x03\x02\x02\x02v\u03C8\x03\x02\x02\x02x\u03CC\x03" +
		"\x02\x02\x02z\u03CF\x03\x02\x02\x02|\u03DD\x03\x02\x02\x02~\u03E8\x03" +
		"\x02\x02\x02\x80\u03EA\x03\x02\x02\x02\x82\u03FE\x03\x02\x02\x02\x84\u0400" +
		"\x03\x02\x02\x02\x86\u0417\x03\x02\x02\x02\x88\u0419\x03\x02\x02\x02\x8A" +
		"\u0421\x03\x02\x02\x02\x8C\u0423\x03\x02\x02\x02\x8E\u042C\x03\x02\x02" +
		"\x02\x90\u042F\x03\x02\x02\x02\x92\u0436\x03\x02\x02\x02\x94\u0438\x03" +
		"\x02\x02\x02\x96\u043A\x03\x02\x02\x02\x98\u043F\x03\x02\x02\x02\x9A\u0445" +
		"\x03\x02\x02\x02\x9C\u0448\x03\x02\x02\x02\x9E\u0450\x03\x02\x02\x02\xA0" +
		"\u046E\x03\x02\x02\x02\xA2\u0474\x03\x02\x02\x02\xA4\u0476\x03\x02\x02" +
		"\x02\xA6\u0494\x03\x02\x02\x02\xA8\u0496\x03\x02\x02\x02\xAA\u0498\x03" +
		"\x02\x02\x02\xAC\u04A2\x03\x02\x02\x02\xAE\u04AF\x03\x02\x02\x02\xB0\u04B9" +
		"\x03\x02\x02\x02\xB2\u04BD\x03\x02\x02\x02\xB4\u04C0\x03\x02\x02\x02\xB6" +
		"\u04C8\x03\x02\x02\x02\xB8\u04CD\x03\x02\x02\x02\xBA\u04D1\x03\x02\x02" +
		"\x02\xBC\u04D3\x03\x02\x02\x02\xBE\u04D6\x03\x02\x02\x02\xC0\u04E3\x03" +
		"\x02\x02\x02\xC2\u04E5\x03\x02\x02\x02\xC4\u04EC\x03\x02\x02\x02\xC6\u04F0" +
		"\x03\x02\x02\x02\xC8\u04FC\x03\x02\x02\x02\xCA\u0506\x03\x02\x02\x02\xCC" +
		"\u050C\x03\x02\x02\x02\xCE\u0517\x03\x02\x02\x02\xD0\u0523\x03\x02\x02" +
		"\x02\xD2\u0525\x03\x02\x02\x02\xD4\u0530\x03\x02\x02\x02\xD6\u053E\x03" +
		"\x02\x02\x02\xD8\u0544\x03\x02\x02\x02\xDA\u0546\x03\x02\x02\x02\xDC\u054D" +
		"\x03\x02\x02\x02\xDE\u0562\x03\x02\x02\x02\xE0\u0564\x03\x02\x02\x02\xE2" +
		"\u056C\x03\x02\x02\x02\xE4\u0575\x03\x02\x02\x02\xE6\u057D\x03\x02\x02" +
		"\x02\xE8\u058B\x03\x02\x02\x02\xEA\u059E\x03\x02\x02\x02\xEC\u05AF\x03" +
		"\x02\x02\x02\xEE\u05C2\x03\x02\x02\x02\xF0\u05C5\x03\x02\x02\x02\xF2\u05C9" +
		"\x03\x02\x02\x02\xF4\u05CB\x03\x02\x02\x02\xF6\u05CE\x03\x02\x02\x02\xF8" +
		"\u05D2\x03\x02\x02\x02\xFA\u05DE\x03\x02\x02\x02\xFC\u05E9\x03\x02\x02" +
		"\x02\xFE\u05F9\x03\x02\x02\x02\u0100\u0610\x03\x02\x02\x02\u0102\u0615" +
		"\x03\x02\x02\x02\u0104\u0629\x03\x02\x02\x02\u0106\u0630\x03\x02\x02\x02" +
		"\u0108\u0639\x03\x02\x02\x02\u010A\u0647\x03\x02\x02\x02\u010C\u065A\x03" +
		"\x02\x02\x02\u010E\u0661\x03\x02\x02\x02\u0110\u0666\x03\x02\x02\x02\u0112" +
		"\u066A\x03\x02\x02\x02\u0114\u066C\x03\x02\x02\x02\u0116\u067A\x03\x02" +
		"\x02\x02\u0118\u0685\x03\x02\x02\x02\u011A\u0687\x03\x02\x02\x02\u011C" +
		"\u06A5\x03\x02\x02\x02\u011E\u06A8\x03\x02\x02\x02\u0120\u06AC\x03\x02" +
		"\x02\x02\u0122\u06AE\x03\x02\x02\x02\u0124\u06B4\x03\x02\x02\x02\u0126" +
		"\u06C8\x03\x02\x02\x02\u0128\u06CA\x03\x02\x02\x02\u012A\u06E6\x03\x02" +
		"\x02\x02\u012C\u06E9\x03\x02\x02\x02\u012E\u06ED\x03\x02\x02\x02\u0130" +
		"\u06EF\x03\x02\x02\x02\u0132\u06F3\x03\x02\x02\x02\u0134\u06F6\x03\x02" +
		"\x02\x02\u0136\u0705\x03\x02\x02\x02\u0138\u071A\x03\x02\x02\x02\u013A" +
		"\u071C\x03\x02\x02\x02\u013C\u071E\x03\x02\x02\x02\u013E\u0720\x03\x02" +
		"\x02\x02\u0140\u0723\x03\x02\x02\x02\u0142\u0727\x03\x02\x02\x02\u0144" +
		"\u072B\x03\x02\x02\x02\u0146\u072E\x03\x02\x02\x02\u0148\u073C\x03\x02" +
		"\x02\x02\u014A\u0747\x03\x02\x02\x02\u014C\u0749\x03\x02\x02\x02\u014E" +
		"\u074C\x03\x02\x02\x02\u0150\u0752\x03\x02\x02\x02\u0152\u0758\x03\x02" +
		"\x02\x02\u0154\u0762\x03\x02\x02\x02\u0156\u076D\x03\x02\x02\x02\u0158" +
		"\u077C\x03\x02\x02\x02\u015A\u078E\x03\x02\x02\x02\u015C\u0790\x03\x02" +
		"\x02\x02\u015E\u0792\x03\x02\x02\x02\u0160\u07A3\x03\x02\x02\x02\u0162" +
		"\u07A5\x03\x02\x02\x02\u0164\u07AF\x03\x02\x02\x02\u0166\u07B4\x03\x02" +
		"\x02\x02\u0168\u07B9\x03\x02\x02\x02\u016A\u07BD\x03\x02\x02\x02\u016C" +
		"\u07C5\x03\x02\x02\x02\u016E\u07C9\x03\x02\x02\x02\u0170\u07D8\x03\x02" +
		"\x02\x02\u0172\u07DA\x03\x02\x02\x02\u0174\u07E0\x03\x02\x02\x02\u0176" +
		"\u07E2\x03\x02\x02\x02\u0178\u07E9\x03\x02\x02\x02\u017A\u07FD\x03\x02" +
		"\x02\x02\u017C\u0834\x03\x02\x02\x02\u017E\u0836\x03\x02\x02\x02\u0180" +
		"\u0182\x05z>\x02\u0181\u0180\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02" +
		"\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x07\x02\x02\x03\u0184\x03\x03" +
		"\x02\x02\x02\u0185\u0187\x05\u017E\xC0\x02\u0186\u0185\x03\x02\x02\x02" +
		"\u0187\u0188\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03" +
		"\x02\x02\x02\u0189\u0192\x03\x02\x02\x02\u018A\u0192\x07F\x02\x02\u018B" +
		"\u018C\x07V\x02\x02\u018C\u018D\x05\\/\x02\u018D\u018E\x07W\x02\x02\u018E" +
		"\u0192\x03\x02\x02\x02\u018F\u0192\x05\x06\x04\x02\u0190\u0192\x05\x0E" +
		"\b\x02\u0191\u0186\x03\x02\x02\x02\u0191\u018A\x03\x02\x02\x02\u0191\u018B" +
		"\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0190\x03\x02\x02\x02" +
		"\u0192\x05\x03\x02\x02\x02\u0193\u0196\x05\b\x05\x02\u0194\u0196\x05\n" +
		"\x06\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196" +
		"\x07\x03\x02\x02\x02\u0197\u01A2\x07\x88\x02\x02\u0198\u01A2\x05\u014C" +
		"\xA7\x02\u0199\u01A2\x05\u013E\xA0\x02\u019A\u01A2\x05\u014E\xA8\x02\u019B" +
		"\u019E\x07d\x02\x02\u019C\u019F\x05\u0118\x8D\x02\u019D\u019F\x05\xA4" +
		"S\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019D\x03\x02\x02\x02\u019F\u01A2" +
		"\x03\x02\x02\x02\u01A0\u01A2\x05\u015A\xAE\x02\u01A1\u0197\x03\x02\x02" +
		"\x02\u01A1\u0198\x03\x02\x02\x02\u01A1\u0199\x03\x02\x02\x02\u01A1\u019A" +
		"\x03\x02\x02\x02\u01A1\u019B\x03\x02\x02\x02\u01A1\u01A0\x03\x02\x02\x02" +
		"\u01A2\t\x03\x02\x02\x02\u01A3\u01A5\x05\f\x07\x02\u01A4\u01A6\x07E\x02" +
		"\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7" +
		"\x03\x02\x02\x02\u01A7\u01A8\x05\b\x05\x02\u01A8\v\x03\x02\x02\x02\u01A9" +
		"\u01AD\b\x07\x01\x02\u01AA\u01AE\x05\xA2R\x02\u01AB\u01AE\x05\xBA^\x02" +
		"\u01AC\u01AE\x05\xA4S\x02\u01AD\u01AA\x03\x02\x02\x02\u01AD\u01AB\x03" +
		"\x02\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE" +
		"\u01AF\x03\x02\x02\x02\u01AF\u01B0\x07\x80\x02\x02\u01B0\u01BC\x03\x02" +
		"\x02\x02\u01B1\u01B7\f\x03\x02\x02\u01B2\u01B8\x07\x88\x02\x02\u01B3\u01B5" +
		"\x07E\x02\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02" +
		"\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B8\x05\u0158\xAD\x02\u01B7\u01B2" +
		"\x03\x02\x02\x02\u01B7\u01B4\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02" +
		"\u01B9\u01BB\x07\x80\x02\x02\u01BA\u01B1\x03\x02\x02\x02\u01BB\u01BE\x03" +
		"\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD" +
		"\r\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\u01C1\x05\x10\t\x02" +
		"\u01C0\u01C2\x05\x1E\x10\x02\u01C1\u01C0\x03\x02\x02\x02\u01C1\u01C2\x03" +
		"\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x05f4\x02\u01C4\x0F" +
		"\x03\x02\x02\x02\u01C5\u01C7\x07X\x02\x02\u01C6\u01C8\x05\x12\n\x02\u01C7" +
		"\u01C6\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x03\x02" +
		"\x02\x02\u01C9\u01CA\x07Y\x02\x02\u01CA\x11\x03\x02\x02\x02\u01CB\u01D2" +
		"\x05\x16\f\x02\u01CC\u01CF\x05\x14\v\x02\u01CD\u01CE\x07{\x02\x02\u01CE" +
		"\u01D0\x05\x16\f\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02" +
		"\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1\u01CB\x03\x02\x02\x02\u01D1\u01CC" +
		"\x03\x02\x02\x02\u01D2\x13\x03\x02\x02\x02\u01D3\u01D4\t\x02\x02\x02\u01D4" +
		"\x15\x03\x02\x02\x02\u01D5\u01DA\x05\x18\r\x02\u01D6\u01D7\x07{\x02\x02" +
		"\u01D7\u01D9\x05\x18\r\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DC\x03" +
		"\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB" +
		"\u01DE\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01DF\x07\x84" +
		"\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
		"\x17\x03\x02\x02\x02\u01E0\u01E3\x05\x1A\x0E\x02\u01E1\u01E3\x05\x1C\x0F" +
		"\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\x19" +
		"\x03\x02\x02\x02\u01E4\u01E6\x07b\x02\x02\u01E5\u01E4\x03\x02\x02\x02" +
		"\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01EA\x07" +
		"\x88\x02\x02\u01E8\u01EA\x07F\x02\x02\u01E9\u01E5\x03\x02\x02\x02\u01E9" +
		"\u01E8\x03\x02\x02\x02\u01EA\x1B\x03\x02\x02\x02\u01EB\u01ED\x07b\x02" +
		"\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE" +
		"\x03\x02\x02\x02\u01EE\u01EF\x07\x88\x02\x02\u01EF\u01F0\x05\u010E\x88" +
		"\x02\u01F0\x1D\x03\x02\x02\x02\u01F1\u01F3\x07V\x02\x02\u01F2\u01F4\x05" +
		"\u0104\x83\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02" +
		"\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F7\x07W\x02\x02\u01F6\u01F8\x07" +
		"0\x02\x02\u01F7\u01F6\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8" +
		"\u01FA\x03\x02\x02\x02\u01F9\u01FB\x05\u0174\xBB\x02\u01FA\u01F9\x03\x02" +
		"\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC" +
		"\u01FE\x05\xCEh\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02" +
		"\x02\u01FE\u0200\x03\x02\x02\x02\u01FF\u0201\x05\xECw\x02\u0200\u01FF" +
		"\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\x1F\x03\x02\x02\x02" +
		"\u0202\u0203\b\x11\x01\x02\u0203\u0221\x05\x04\x03\x02\u0204\u0207\x05" +
		"\xA0Q\x02\u0205\u0207\x05\u0162\xB2\x02\u0206\u0204\x03\x02\x02\x02\u0206" +
		"\u0205\x03\x02\x02\x02\u0207\u020E\x03\x02\x02\x02\u0208\u020A\x07V\x02" +
		"\x02\u0209\u020B\x05$\x13\x02\u020A\u0209\x03\x02\x02\x02\u020A\u020B" +
		"\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020F\x07W\x02\x02" +
		"\u020D\u020F\x05\u0116\x8C\x02\u020E\u0208\x03\x02\x02\x02\u020E\u020D" +
		"\x03\x02\x02\x02\u020F\u0221\x03\x02\x02\x02\u0210\u0211\t\x03\x02\x02" +
		"\u0211\u0212\x07g\x02\x02\u0212\u0213\x05\xF8}\x02\u0213\u0214\x07h\x02" +
		"\x02\u0214\u0215\x07V\x02\x02\u0215\u0216\x05\\/\x02\u0216\u0217\x07W" +
		"\x02\x02\u0217\u0221\x03\x02\x02\x02\u0218\u0219\x05\"\x12\x02\u0219\u021C" +
		"\x07V\x02\x02\u021A\u021D\x05\\/\x02\u021B\u021D\x05\xF8}\x02\u021C\u021A" +
		"\x03\x02\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02" +
		"\u021E\u021F\x07W\x02\x02\u021F\u0221\x03\x02\x02\x02\u0220\u0202\x03" +
		"\x02\x02\x02\u0220\u0206\x03\x02\x02\x02\u0220\u0210\x03\x02\x02\x02\u0220" +
		"\u0218\x03\x02\x02\x02\u0221\u023D\x03\x02\x02\x02\u0222\u0223\f\t\x02" +
		"\x02\u0223\u0226\x07X\x02\x02\u0224\u0227\x05\\/\x02\u0225\u0227\x05\u0116" +
		"\x8C\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0225\x03\x02\x02\x02\u0227" +
		"\u0228\x03\x02\x02\x02\u0228\u0229\x07Y\x02\x02\u0229\u023C\x03\x02\x02" +
		"\x02\u022A\u022B\f\b\x02\x02\u022B\u022D\x07V\x02\x02\u022C\u022E\x05" +
		"$\x13\x02\u022D\u022C\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E" +
		"\u022F\x03\x02\x02\x02\u022F\u023C\x07W\x02\x02\u0230\u0231\f\x06\x02" +
		"\x02\u0231\u0237\t\x04\x02\x02\u0232\u0234\x07E\x02\x02\u0233\u0232\x03" +
		"\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235" +
		"\u0238\x05\x06\x04\x02\u0236\u0238\x05&\x14\x02\u0237\u0233\x03\x02\x02" +
		"\x02\u0237\u0236\x03\x02\x02\x02\u0238\u023C\x03\x02\x02\x02\u0239\u023A" +
		"\f\x05\x02\x02\u023A\u023C\t\x05\x02\x02\u023B\u0222\x03\x02\x02\x02\u023B" +
		"\u022A\x03\x02\x02\x02\u023B\u0230\x03\x02\x02\x02\u023B\u0239\x03\x02" +
		"\x02\x02\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D" +
		"\u023E\x03\x02\x02\x02\u023E!\x03\x02\x02\x02\u023F\u023D\x03\x02\x02" +
		"\x02\u0240\u0241\x07L\x02\x02\u0241#\x03\x02\x02\x02\u0242\u0243\x05\u0114" +
		"\x8B\x02\u0243%\x03\x02\x02\x02\u0244\u0246\x05\f\x07\x02\u0245\u0244" +
		"\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u024A\x03\x02\x02\x02" +
		"\u0247\u0248\x05\xA2R\x02\u0248\u0249\x07\x80\x02\x02\u0249\u024B\x03" +
		"\x02\x02\x02\u024A\u0247\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B" +
		"\u024C\x03\x02\x02\x02\u024C\u024D\x07d\x02\x02\u024D\u0258\x05\xA2R\x02" +
		"\u024E\u024F\x05\f\x07\x02\u024F\u0250\x07E\x02\x02\u0250\u0251\x05\u0158" +
		"\xAD\x02\u0251\u0252\x07\x80\x02\x02\u0252\u0253\x07d\x02\x02\u0253\u0254" +
		"\x05\xA2R\x02\u0254\u0258\x03\x02\x02\x02\u0255\u0256\x07d\x02\x02\u0256" +
		"\u0258\x05\xA4S\x02\u0257\u0245\x03\x02\x02\x02\u0257\u024E\x03\x02\x02" +
		"\x02\u0257\u0255\x03\x02\x02\x02\u0258\'\x03\x02\x02\x02\u0259\u0275\x05" +
		" \x11\x02\u025A\u025F\x07y\x02\x02\u025B\u025F\x07z\x02\x02\u025C\u025F" +
		"\x05*\x16\x02\u025D\u025F\x07?\x02\x02\u025E\u025A\x03\x02\x02\x02\u025E" +
		"\u025B\x03\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025D\x03\x02" +
		"\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0275\x05(\x15\x02\u0261\u026A" +
		"\x07?\x02\x02\u0262\u0263\x07V\x02\x02\u0263\u0264\x05\xF8}\x02\u0264" +
		"\u0265\x07W\x02\x02\u0265\u026B\x03\x02\x02\x02\u0266\u0267\x07\x84\x02" +
		"\x02\u0267\u0268\x07V\x02\x02\u0268\u0269\x07\x88\x02\x02\u0269\u026B" +
		"\x07W\x02\x02\u026A\u0262\x03\x02\x02\x02\u026A\u0266\x03\x02\x02\x02" +
		"\u026B\u0275\x03\x02\x02\x02\u026C\u026D\x07\f\x02\x02\u026D\u026E\x07" +
		"V\x02\x02\u026E\u026F\x05\xF8}\x02\u026F\u0270\x07W\x02\x02\u0270\u0275" +
		"\x03\x02\x02\x02\u0271\u0275\x05:\x1E\x02\u0272\u0275\x05,\x17\x02\u0273" +
		"\u0275\x058\x1D\x02\u0274\u0259\x03\x02\x02\x02\u0274\u025E\x03\x02\x02" +
		"\x02\u0274\u0261\x03\x02\x02\x02\u0274\u026C\x03\x02\x02\x02\u0274\u0271" +
		"\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0274\u0273\x03\x02\x02\x02" +
		"\u0275)\x03\x02\x02\x02\u0276\u0277\t\x06\x02\x02\u0277+\x03\x02\x02\x02" +
		"\u0278\u027A\x07\x80\x02\x02\u0279\u0278\x03\x02\x02\x02\u0279\u027A\x03" +
		"\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027D\x072\x02\x02\u027C" +
		"\u027E\x05.\x18\x02\u027D\u027C\x03\x02\x02\x02\u027D\u027E\x03\x02\x02" +
		"\x02\u027E\u0284\x03\x02\x02\x02\u027F\u0285\x050\x19\x02\u0280\u0281" +
		"\x07V\x02\x02\u0281\u0282\x05\xF8}\x02\u0282\u0283\x07W\x02\x02\u0283" +
		"\u0285\x03\x02\x02\x02\u0284\u027F\x03\x02\x02\x02\u0284\u0280\x03\x02" +
		"\x02\x02\u0285\u0287\x03\x02\x02\x02\u0286\u0288\x056\x1C\x02\u0287\u0286" +
		"\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288-\x03\x02\x02\x02\u0289" +
		"\u028A\x07V\x02\x02\u028A\u028B\x05$\x13\x02\u028B\u028C\x07W\x02\x02" +
		"\u028C/\x03\x02\x02\x02\u028D\u028F\x05\x9CO\x02\u028E\u0290\x052\x1A" +
		"\x02\u028F\u028E\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u02901\x03" +
		"\x02\x02\x02\u0291\u0293\x05\xEEx\x02\u0292\u0294\x052\x1A\x02\u0293\u0292" +
		"\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0297\x03\x02\x02\x02" +
		"\u0295\u0297\x054\x1B\x02\u0296\u0291\x03\x02\x02\x02\u0296\u0295\x03" +
		"\x02\x02\x02\u02973\x03\x02\x02\x02\u0298\u0299\b\x1B\x01\x02\u0299\u029A" +
		"\x07X\x02\x02\u029A\u029B\x05\\/\x02\u029B\u029D\x07Y\x02\x02\u029C\u029E" +
		"\x05\xCEh\x02\u029D\u029C\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02" +
		"\u029E\u02A8\x03\x02\x02\x02\u029F\u02A0\f\x03\x02\x02\u02A0\u02A1\x07" +
		"X\x02\x02\u02A1\u02A2\x05^0\x02\u02A2\u02A4\x07Y\x02\x02\u02A3\u02A5\x05" +
		"\xCEh\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5" +
		"\u02A7\x03\x02\x02\x02\u02A6\u029F\x03\x02\x02\x02\u02A7\u02AA\x03\x02" +
		"\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9" +
		"5\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB\u02AD\x07V\x02\x02" +
		"\u02AC\u02AE\x05$\x13\x02\u02AD\u02AC\x03\x02\x02\x02\u02AD\u02AE\x03" +
		"\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B2\x07W\x02\x02\u02B0" +
		"\u02B2\x05\u0116\x8C\x02\u02B1\u02AB\x03\x02\x02\x02\u02B1\u02B0\x03\x02" +
		"\x02\x02\u02B27\x03\x02\x02\x02\u02B3\u02B5\x07\x80\x02\x02\u02B4\u02B3" +
		"\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02" +
		"\u02B6\u02B9\x07\x1D\x02\x02\u02B7\u02B8\x07X\x02\x02\u02B8\u02BA\x07" +
		"Y\x02\x02\u02B9\u02B7\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA" +
		"\u02BB\x03\x02\x02\x02\u02BB\u02BC\x05<\x1F\x02\u02BC9\x03\x02\x02\x02" +
		"\u02BD\u02BE\x073\x02\x02\u02BE\u02BF\x07V\x02\x02\u02BF\u02C0\x05\\/" +
		"\x02\u02C0\u02C1\x07W\x02\x02\u02C1;\x03\x02\x02\x02\u02C2\u02C9\x05(" +
		"\x15\x02\u02C3\u02C4\x07V\x02\x02\u02C4\u02C5\x05\xF8}\x02\u02C5\u02C6" +
		"\x07W\x02\x02\u02C6\u02C7\x05<\x1F\x02\u02C7\u02C9\x03\x02\x02\x02\u02C8" +
		"\u02C2\x03\x02\x02\x02\u02C8\u02C3\x03\x02\x02\x02\u02C9=\x03\x02\x02" +
		"\x02\u02CA\u02CF\x05<\x1F\x02\u02CB\u02CC\t\x07\x02\x02\u02CC\u02CE\x05" +
		"<\x1F\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02D1\x03\x02\x02\x02\u02CF" +
		"\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0?\x03\x02\x02" +
		"\x02\u02D1\u02CF\x03\x02\x02\x02\u02D2\u02D7\x05> \x02\u02D3\u02D4\t\b" +
		"\x02\x02\u02D4\u02D6\x05> \x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D9" +
		"\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02" +
		"\u02D8A\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02DF\x05@!" +
		"\x02\u02DB\u02DC\t\t\x02\x02\u02DC\u02DE\x05@!\x02\u02DD\u02DB\x03\x02" +
		"\x02\x02\u02DE\u02E1\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF" +
		"\u02E0\x03\x02\x02\x02\u02E0C\x03\x02\x02\x02\u02E1\u02DF\x03\x02\x02" +
		"\x02\u02E2\u02E8\x05B\"\x02\u02E3\u02E4\x05F$\x02\u02E4\u02E5\x05B\"\x02" +
		"\u02E5\u02E7\x03\x02\x02\x02\u02E6\u02E3\x03\x02\x02\x02\u02E7\u02EA\x03" +
		"\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9" +
		"E\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02EC\x07h\x02\x02" +
		"\u02EC\u02F0\x07h\x02\x02\u02ED\u02EE\x07g\x02\x02\u02EE\u02F0\x07g\x02" +
		"\x02\u02EF\u02EB\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0G\x03" +
		"\x02\x02\x02\u02F1\u02F6\x05D#\x02\u02F2\u02F3\t\n\x02\x02\u02F3\u02F5" +
		"\x05D#\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6" +
		"\u02F4\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7I\x03\x02\x02" +
		"\x02\u02F8\u02F6\x03\x02\x02\x02\u02F9\u02FE\x05H%\x02\u02FA\u02FB\t\v" +
		"\x02\x02\u02FB\u02FD\x05H%\x02\u02FC\u02FA\x03\x02\x02\x02\u02FD\u0300" +
		"\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02" +
		"\u02FFK\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301\u0306\x05J&" +
		"\x02\u0302\u0303\x07b\x02\x02\u0303\u0305\x05J&\x02\u0304\u0302\x03\x02" +
		"\x02\x02\u0305\u0308\x03\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306" +
		"\u0307\x03\x02\x02\x02\u0307M\x03\x02\x02\x02\u0308\u0306\x03\x02\x02" +
		"\x02\u0309\u030E\x05L\'\x02\u030A\u030B\x07a\x02\x02\u030B\u030D\x05L" +
		"\'\x02\u030C\u030A\x03\x02\x02\x02\u030D\u0310\x03\x02\x02\x02\u030E\u030C" +
		"\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030FO\x03\x02\x02\x02\u0310" +
		"\u030E\x03\x02\x02\x02\u0311\u0316\x05N(\x02\u0312\u0313\x07c\x02\x02" +
		"\u0313\u0315\x05N(\x02\u0314\u0312\x03\x02\x02\x02\u0315\u0318\x03\x02" +
		"\x02\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317" +
		"Q\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319\u031E\x05P)\x02\u031A" +
		"\u031B\x07w\x02\x02\u031B\u031D\x05P)\x02\u031C\u031A\x03\x02\x02\x02" +
		"\u031D\u0320\x03\x02\x02\x02\u031E\u031C\x03\x02\x02\x02\u031E\u031F\x03" +
		"\x02\x02\x02\u031FS\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0321" +
		"\u0326\x05R*\x02\u0322\u0323\x07x\x02\x02\u0323\u0325\x05R*\x02\u0324" +
		"\u0322\x03\x02\x02\x02\u0325\u0328\x03\x02\x02\x02\u0326\u0324\x03\x02" +
		"\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327U\x03\x02\x02\x02\u0328\u0326" +
		"\x03\x02\x02\x02\u0329\u032F\x05T+\x02\u032A\u032B\x07~\x02\x02\u032B" +
		"\u032C\x05\\/\x02\u032C\u032D\x07\x7F\x02\x02\u032D\u032E\x05X-\x02\u032E" +
		"\u0330\x03\x02\x02\x02\u032F\u032A\x03\x02\x02\x02\u032F\u0330\x03\x02" +
		"\x02\x02\u0330W\x03\x02\x02\x02\u0331\u0338\x05V,\x02\u0332\u0333\x05" +
		"T+\x02\u0333\u0334\x05Z.\x02\u0334\u0335\x05\u0112\x8A\x02\u0335\u0338" +
		"\x03\x02\x02\x02\u0336\u0338\x05\u0172\xBA\x02\u0337\u0331\x03\x02\x02" +
		"\x02\u0337\u0332\x03\x02\x02\x02\u0337\u0336\x03\x02\x02\x02\u0338Y\x03" +
		"\x02\x02\x02\u0339\u033A\t\f\x02\x02\u033A[\x03\x02\x02\x02\u033B\u0340" +
		"\x05X-\x02\u033C\u033D\x07{\x02\x02\u033D\u033F\x05X-\x02\u033E\u033C" +
		"\x03\x02\x02\x02\u033F\u0342\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02" +
		"\u0340\u0341\x03\x02\x02\x02\u0341]\x03\x02\x02\x02\u0342\u0340\x03\x02" +
		"\x02\x02\u0343\u0344\x05V,\x02\u0344_\x03\x02\x02\x02\u0345\u0353\x05" +
		"b2\x02\u0346\u0348\x05\xCEh\x02\u0347\u0346\x03\x02\x02\x02\u0347\u0348" +
		"\x03\x02\x02\x02\u0348\u034F\x03\x02\x02\x02\u0349\u0350\x05d3\x02\u034A" +
		"\u0350\x05f4\x02\u034B\u0350\x05j6\x02\u034C\u0350\x05n8\x02\u034D\u0350" +
		"\x05v<\x02\u034E\u0350\x05\u0168\xB5\x02\u034F\u0349\x03\x02\x02\x02\u034F" +
		"\u034A\x03\x02\x02\x02\u034F\u034B\x03\x02\x02\x02\u034F\u034C\x03\x02" +
		"\x02\x02\u034F\u034D\x03\x02\x02\x02\u034F\u034E\x03\x02\x02\x02\u0350" +
		"\u0353\x03\x02\x02\x02\u0351\u0353\x05x=\x02\u0352\u0345\x03\x02\x02\x02" +
		"\u0352\u0347\x03\x02\x02\x02\u0352\u0351\x03\x02\x02\x02\u0353a\x03\x02" +
		"\x02\x02\u0354\u0356\x05\xCEh\x02\u0355\u0354\x03\x02\x02\x02\u0355\u0356" +
		"\x03\x02\x02\x02\u0356\u035B\x03\x02\x02\x02\u0357\u035C\x07\x88\x02\x02" +
		"\u0358\u0359\x07\x11\x02\x02\u0359\u035C\x05^0\x02\u035A\u035C\x07\x1C" +
		"\x02\x02\u035B\u0357\x03\x02\x02\x02\u035B\u0358\x03\x02\x02\x02\u035B" +
		"\u035A\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035E\x07\x7F" +
		"\x02\x02\u035E\u035F\x05`1\x02\u035Fc\x03\x02\x02\x02\u0360\u0362\x05" +
		"\\/\x02\u0361\u0360\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362" +
		"\u0363\x03\x02\x02\x02\u0363\u0364\x07\x81\x02\x02\u0364e\x03\x02\x02" +
		"\x02\u0365\u0367\x07Z\x02\x02\u0366\u0368\x05h5\x02\u0367\u0366\x03\x02" +
		"\x02\x02\u0367\u0368\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369" +
		"\u036A\x07[\x02\x02\u036Ag\x03\x02\x02\x02\u036B\u036D\x05`1\x02\u036C" +
		"\u036B\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E\u036C\x03\x02" +
		"\x02\x02\u036E\u036F\x03\x02\x02\x02\u036Fi\x03\x02\x02\x02\u0370\u0371" +
		"\x07,\x02\x02\u0371\u0372\x07V\x02\x02\u0372\u0373\x05l7\x02\u0373\u0374" +
		"\x07W\x02\x02\u0374\u0377\x05`1\x02\u0375\u0376\x07!\x02\x02\u0376\u0378" +
		"\x05`1\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378" +
		"\u0380\x03\x02\x02\x02\u0379\u037A\x07D\x02\x02\u037A\u037B\x07V\x02\x02" +
		"\u037B\u037C\x05l7\x02\u037C\u037D\x07W\x02\x02\u037D\u037E\x05`1\x02" +
		"\u037E\u0380\x03\x02\x02\x02\u037F\u0370\x03\x02\x02\x02\u037F\u0379\x03" +
		"\x02\x02\x02\u0380k\x03\x02\x02\x02\u0381\u038D\x05\\/\x02\u0382\u0384" +
		"\x05\xCEh\x02\u0383\u0382\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02" +
		"\u0384\u0385\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u0385\u0386\x05\x90I\x02\u0386\u038A\x05\xE4s\x02\u0387\u0388\x07" +
		"f\x02\x02\u0388\u038B\x05\u0112\x8A\x02\u0389\u038B\x05\u0116\x8C\x02" +
		"\u038A\u0387\x03\x02\x02\x02\u038A\u0389\x03\x02\x02\x02\u038B\u038D\x03" +
		"\x02\x02\x02\u038C\u0381\x03\x02\x02\x02\u038C\u0383\x03\x02\x02\x02\u038D" +
		"m\x03\x02\x02\x02\u038E\u038F\x07U\x02\x02\u038F\u0390\x07V\x02\x02\u0390" +
		"\u0391\x05l7\x02\u0391\u0392\x07W\x02\x02\u0392\u0393\x05`1\x02\u0393" +
		"\u03B0\x03\x02\x02\x02\u0394\u0395\x07\x1E\x02\x02\u0395\u0396\x05`1\x02" +
		"\u0396\u0397\x07U\x02\x02\u0397\u0398\x07V\x02\x02\u0398\u0399\x05\\/" +
		"\x02\u0399\u039A\x07W\x02\x02\u039A\u039B\x07\x81\x02\x02\u039B\u03B0" +
		"\x03\x02\x02\x02\u039C\u039D\x07)\x02\x02\u039D\u03AA\x07V\x02\x02\u039E" +
		"\u03A0\x05p9\x02\u039F\u03A1\x05l7\x02\u03A0\u039F\x03\x02\x02\x02\u03A0" +
		"\u03A1\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2\u03A4\x07\x81" +
		"\x02\x02\u03A3\u03A5\x05\\/\x02\u03A4\u03A3\x03\x02\x02\x02\u03A4\u03A5" +
		"\x03\x02\x02\x02\u03A5\u03AB\x03\x02\x02\x02\u03A6\u03A7\x05r:\x02\u03A7" +
		"\u03A8\x07\x7F\x02\x02\u03A8\u03A9\x05t;\x02\u03A9\u03AB\x03\x02\x02\x02" +
		"\u03AA\u039E\x03\x02\x02\x02\u03AA\u03A6\x03\x02\x02\x02\u03AB\u03AC\x03" +
		"\x02\x02\x02\u03AC\u03AD\x07W\x02\x02\u03AD\u03AE\x05`1\x02\u03AE\u03B0" +
		"\x03\x02\x02\x02\u03AF\u038E\x03\x02\x02\x02\u03AF\u0394\x03\x02\x02\x02" +
		"\u03AF\u039C\x03\x02\x02\x02\u03B0o\x03\x02\x02\x02\u03B1\u03B4\x05d3" +
		"\x02\u03B2\u03B4\x05\x86D\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B2" +
		"\x03\x02\x02\x02\u03B4q\x03\x02\x02\x02\u03B5\u03B7\x05\xCEh\x02\u03B6" +
		"\u03B5\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7\u03B8\x03\x02" +
		"\x02\x02\u03B8\u03B9\x05\x90I\x02\u03B9\u03BA\x05\xE4s\x02\u03BAs\x03" +
		"\x02\x02\x02\u03BB\u03BE\x05\\/\x02\u03BC\u03BE\x05\u0116\x8C\x02\u03BD" +
		"\u03BB\x03\x02\x02\x02\u03BD\u03BC\x03\x02\x02\x02\u03BEu\x03\x02\x02" +
		"\x02\u03BF\u03C9\x07\x10\x02\x02\u03C0\u03C9\x07\x1A\x02\x02\u03C1\u03C4" +
		"\x07<\x02\x02\u03C2\u03C5\x05\\/\x02\u03C3\u03C5\x05\u0116\x8C\x02\u03C4" +
		"\u03C2\x03\x02\x02\x02\u03C4\u03C3\x03\x02\x02\x02\u03C4\u03C5\x03\x02" +
		"\x02\x02\u03C5\u03C9\x03\x02\x02\x02\u03C6\u03C7\x07+\x02\x02\u03C7\u03C9" +
		"\x07\x88\x02\x02\u03C8\u03BF\x03\x02\x02\x02\u03C8\u03C0\x03\x02\x02\x02" +
		"\u03C8\u03C1\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C9\u03CA\x03" +
		"\x02\x02\x02\u03CA\u03CB\x07\x81\x02\x02\u03CBw\x03\x02\x02\x02\u03CC" +
		"\u03CD\x05\x82B\x02\u03CDy\x03\x02\x02\x02\u03CE\u03D0\x05|?\x02\u03CF" +
		"\u03CE\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03CF\x03\x02" +
		"\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2{\x03\x02\x02\x02\u03D3\u03DE" +
		"\x05\x82B\x02\u03D4\u03DE\x05\u010A\x86\x02\u03D5\u03DE\x05\u0150\xA9" +
		"\x02\u03D6\u03DE\x05\u0164\xB3\x02\u03D7\u03DE\x05\u0166\xB4\x02\u03D8" +
		"\u03DE\x05\xCCg\x02\u03D9\u03DE\x05\xBE`\x02\u03DA\u03DE\x05\x8AF\x02" +
		"\u03DB\u03DE\x05\x8CG\x02\u03DC\u03DE\x05~@\x02\u03DD\u03D3\x03\x02\x02" +
		"\x02\u03DD\u03D4\x03\x02\x02\x02\u03DD\u03D5\x03\x02\x02\x02\u03DD\u03D6" +
		"\x03\x02\x02\x02\u03DD\u03D7\x03\x02\x02\x02\u03DD\u03D8\x03\x02\x02\x02" +
		"\u03DD\u03D9\x03\x02\x02\x02\u03DD\u03DA\x03\x02\x02\x02\u03DD\u03DB\x03" +
		"\x02\x02\x02\u03DD\u03DC\x03\x02\x02\x02\u03DE}\x03\x02\x02\x02\u03DF" +
		"\u03E0\x07\n\x02\x02\u03E0\u03E1\x07g\x02\x02\u03E1\u03E2\x05\x80A\x02" +
		"\u03E2\u03E3\x07h\x02\x02\u03E3\u03E9\x03\x02\x02\x02\u03E4\u03E5\x07" +
		"\x86\x02\x02\u03E5\u03E6\x05\x80A\x02\u03E6\u03E7\x07\x85\x02\x02\u03E7" +
		"\u03E9\x03\x02\x02\x02\u03E8\u03DF\x03\x02\x02\x02\u03E8\u03E4\x03\x02" +
		"\x02\x02\u03E9\x7F\x03\x02\x02\x02\u03EA\u03EF\x07\x88\x02\x02\u03EB\u03EC" +
		"\x07_\x02\x02\u03EC\u03EE\x07\x88\x02\x02\u03ED\u03EB\x03\x02\x02\x02" +
		"\u03EE\u03F1\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF\u03F0\x03" +
		"\x02\x02\x02\u03F0\u03F4\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02\x02\u03F2" +
		"\u03F3\x07\x82\x02\x02\u03F3\u03F5\x07\x87\x02\x02\u03F4\u03F2\x03\x02" +
		"\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\x81\x03\x02\x02\x02\u03F6\u03FF" +
		"\x05\x86D\x02\u03F7\u03FF\x05\xCAf\x02\u03F8\u03FF\x05\xC2b\x02\u03F9" +
		"\u03FF\x05\xC6d\x02\u03FA\u03FF\x05\xC8e\x02\u03FB\u03FF\x05\x88E\x02" +
		"\u03FC\u03FF\x05\x84C\x02\u03FD\u03FF\x05\xAEX\x02\u03FE\u03F6\x03\x02" +
		"\x02\x02\u03FE\u03F7\x03\x02\x02\x02\u03FE\u03F8\x03\x02\x02\x02\u03FE" +
		"\u03F9\x03\x02\x02\x02\u03FE\u03FA\x03\x02\x02\x02\u03FE\u03FB\x03\x02" +
		"\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FD\x03\x02\x02\x02\u03FF" +
		"\x83\x03\x02\x02\x02\u0400\u0401\x07P\x02\x02\u0401\u0403\x07\x88\x02" +
		"\x02\u0402\u0404\x05\xCEh\x02\u0403\u0402\x03\x02\x02\x02\u0403\u0404" +
		"\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\u0406\x07f\x02\x02" +
		"\u0406\u0407\x05\xF8}\x02\u0407\u0408\x07\x81\x02\x02\u0408\x85\x03\x02" +
		"\x02\x02\u0409\u040B\x05\x90I\x02\u040A\u0409\x03\x02\x02\x02\u040A\u040B" +
		"\x03\x02\x02\x02\u040B\u040D\x03\x02\x02\x02\u040C\u040E\x05\xE0q\x02" +
		"\u040D\u040C\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u040F\x03" +
		"\x02\x02\x02\u040F\u0418\x07\x81\x02\x02\u0410\u0412\x05\xCEh\x02\u0411" +
		"\u0413\x05\x90I\x02\u0412\u0411\x03\x02\x02\x02\u0412\u0413\x03\x02\x02" +
		"\x02\u0413\u0414\x03\x02\x02\x02\u0414\u0415\x05\xE0q\x02\u0415\u0416" +
		"\x07\x81\x02\x02\u0416\u0418\x03\x02\x02\x02\u0417\u040A\x03\x02\x02\x02" +
		"\u0417\u0410\x03\x02\x02\x02\u0418\x87\x03\x02\x02\x02\u0419\u041A\x07" +
		"A\x02\x02\u041A\u041B\x07V\x02\x02\u041B\u041C\x05^0\x02\u041C\u041D\x07" +
		"{\x02\x02\u041D\u041E\x07\x06\x02\x02\u041E\u041F\x07W\x02\x02\u041F\u0420" +
		"\x07\x81\x02\x02\u0420\x89\x03\x02\x02\x02\u0421\u0422\x07\x81\x02\x02" +
		"\u0422\x8B\x03\x02\x02\x02\u0423\u0424\x05\xCEh\x02\u0424\u0425\x07\x81" +
		"\x02\x02\u0425\x8D\x03\x02\x02\x02\u0426\u042D\x05\x92J\x02\u0427\u042D" +
		"\x05\x98M\x02\u0428\u042D\x05\x94K\x02\u0429\u042D\x07*\x02\x02\u042A" +
		"\u042D\x07K\x02\x02\u042B\u042D\x07\x18\x02\x02\u042C\u0426\x03\x02\x02" +
		"\x02\u042C\u0427\x03\x02\x02\x02\u042C\u0428\x03\x02\x02\x02\u042C\u0429" +
		"\x03\x02\x02\x02\u042C\u042A\x03\x02\x02\x02\u042C\u042B\x03\x02\x02\x02" +
		"\u042D\x8F\x03\x02\x02\x02\u042E\u0430\x05\x8EH\x02\u042F\u042E\x03\x02" +
		"\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u042F\x03\x02\x02\x02\u0431" +
		"\u0432\x03\x02\x02\x02\u0432\u0434\x03\x02\x02\x02\u0433\u0435\x05\xCE" +
		"h\x02\u0434\u0433\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\x91" +
		"\x03\x02\x02\x02\u0436\u0437\t\r\x02\x02\u0437\x93\x03\x02\x02\x02\u0438" +
		"\u0439\t\x0E\x02\x02\u0439\x95\x03\x02\x02\x02\u043A\u043B\x07\x88\x02" +
		"\x02\u043B\x97\x03\x02\x02\x02\u043C\u0440\x05\x9AN\x02\u043D\u0440\x05" +
		"\u011A\x8E\x02\u043E\u0440\x05\xAAV\x02\u043F\u043C\x03\x02\x02\x02\u043F" +
		"\u043D\x03\x02\x02\x02\u043F\u043E\x03\x02\x02\x02\u0440\x99\x03\x02\x02" +
		"\x02\u0441\u0446\x05\xA0Q\x02\u0442\u0446\x05\xA6T\x02\u0443\u0446\x05" +
		"\u0162\xB2\x02\u0444\u0446\x05\xF2z\x02\u0445\u0441\x03\x02\x02\x02\u0445" +
		"\u0442\x03\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\u0445\u0444\x03\x02" +
		"\x02\x02\u0446\x9B\x03\x02\x02\x02\u0447\u0449\x05\x98M\x02\u0448\u0447" +
		"\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u0448\x03\x02\x02\x02" +
		"\u044A\u044B\x03\x02\x02\x02\u044B\u044D\x03\x02\x02\x02\u044C\u044E\x05" +
		"\xCEh\x02\u044D\u044C\x03\x02\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E" +
		"\x9D\x03\x02\x02\x02\u044F\u0451\x05\x9AN\x02\u0450\u044F\x03\x02\x02" +
		"\x02\u0451\u0452\x03\x02\x02\x02\u0452\u0450\x03\x02\x02\x02\u0452\u0453" +
		"\x03\x02\x02\x02\u0453\u0455\x03\x02\x02\x02\u0454\u0456\x05\xCEh\x02" +
		"\u0455\u0454\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\x9F\x03" +
		"\x02\x02\x02\u0457\u0459\x05\f\x07\x02\u0458\u0457\x03\x02\x02\x02\u0458" +
		"\u0459\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u046F\x05\xA2" +
		"R\x02\u045B\u045C\x05\f\x07\x02\u045C\u045D\x07E\x02\x02\u045D\u045E\x05" +
		"\u0158\xAD\x02\u045E\u046F\x03\x02\x02\x02\u045F\u046F\x07\x13\x02\x02" +
		"\u0460\u046F\x07\x14\x02\x02\u0461\u046F\x07\x15\x02\x02\u0462\u046F\x07" +
		"T\x02\x02\u0463\u046F\x07\x0F\x02\x02\u0464\u046F\x07=\x02\x02\u0465\u046F" +
		"\x07.\x02\x02\u0466\u046F\x07/\x02\x02\u0467\u046F\x07>\x02\x02\u0468" +
		"\u046F\x07O\x02\x02\u0469\u046F\x07(\x02\x02\u046A\u046F\x07\x1F\x02\x02" +
		"\u046B\u046F\x07R\x02\x02\u046C\u046F\x07\x0E\x02\x02\u046D\u046F\x05" +
		"\xA4S\x02\u046E\u0458\x03\x02\x02\x02\u046E\u045B\x03\x02\x02\x02\u046E" +
		"\u045F\x03\x02\x02\x02\u046E\u0460\x03\x02\x02\x02\u046E\u0461\x03\x02" +
		"\x02\x02\u046E\u0462\x03\x02\x02\x02\u046E\u0463\x03\x02\x02\x02\u046E" +
		"\u0464\x03\x02\x02\x02\u046E\u0465\x03\x02\x02\x02\u046E\u0466\x03\x02" +
		"\x02\x02\u046E\u0467\x03\x02\x02\x02\u046E\u0468\x03\x02\x02\x02\u046E" +
		"\u0469\x03\x02\x02\x02\u046E\u046A\x03\x02\x02\x02\u046E\u046B\x03\x02" +
		"\x02\x02\u046E\u046C\x03\x02\x02\x02\u046E\u046D\x03\x02\x02\x02\u046F" +
		"\xA1\x03\x02\x02\x02\u0470\u0475\x05\u0118\x8D\x02\u0471\u0475\x05\xA8" +
		"U\x02\u0472\u0475\x05\x96L\x02\u0473\u0475\x05\u0158\xAD\x02\u0474\u0470" +
		"\x03\x02\x02\x02\u0474\u0471\x03\x02\x02\x02\u0474\u0472\x03\x02\x02\x02" +
		"\u0474\u0473\x03\x02\x02\x02\u0475\xA3\x03\x02\x02\x02\u0476\u0477\x07" +
		"\x1B\x02\x02\u0477\u047A\x07V\x02\x02\u0478\u047B\x05\\/\x02\u0479\u047B" +
		"\x07\x0E\x02\x02\u047A\u0478\x03\x02\x02\x02\u047A\u0479\x03\x02\x02\x02" +
		"\u047B\u047C\x03\x02\x02\x02\u047C\u047D\x07W\x02\x02\u047D\xA5\x03\x02" +
		"\x02\x02\u047E\u048D\x05\u0122\x92\x02\u047F\u0481\x05\xCEh\x02\u0480" +
		"\u047F\x03\x02\x02\x02\u0480\u0481\x03\x02\x02\x02\u0481\u0483\x03\x02" +
		"\x02\x02\u0482\u0484\x05\f\x07\x02\u0483\u0482\x03\x02\x02\x02\u0483\u0484" +
		"\x03\x02\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u048E\x07\x88\x02\x02" +
		"\u0486\u048E\x05\u0158\xAD\x02\u0487\u0489\x05\f\x07\x02\u0488\u048A\x07" +
		"E\x02\x02\u0489\u0488\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A" +
		"\u048B\x03\x02\x02\x02\u048B\u048C\x05\u0158\xAD\x02\u048C\u048E\x03\x02" +
		"\x02\x02\u048D\u0480\x03\x02\x02\x02\u048D\u0486\x03\x02\x02\x02\u048D" +
		"\u0487\x03\x02\x02\x02\u048E\u0495\x03\x02\x02\x02\u048F\u0491\x07\"\x02" +
		"\x02\u0490\u0492\x05\f\x07\x02\u0491\u0490\x03\x02\x02\x02\u0491\u0492" +
		"\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0495\x07\x88\x02\x02" +
		"\u0494\u047E\x03\x02\x02\x02\u0494\u048F\x03\x02\x02\x02\u0495\xA7\x03" +
		"\x02\x02\x02\u0496\u0497\x07\x88\x02\x02\u0497\xA9\x03\x02\x02\x02\u0498" +
		"\u0499\x05\xACW\x02\u0499\u049E\x07Z\x02\x02\u049A\u049C\x05\xB4[\x02" +
		"\u049B\u049D\x07{\x02\x02\u049C\u049B\x03\x02\x02\x02\u049C\u049D\x03" +
		"\x02\x02\x02\u049D\u049F\x03\x02\x02\x02\u049E\u049A\x03\x02\x02\x02\u049E" +
		"\u049F\x03\x02\x02\x02\u049F\u04A0\x03\x02\x02\x02\u04A0\u04A1\x07[\x02" +
		"\x02\u04A1\xAB\x03\x02\x02\x02\u04A2\u04A4\x05\xB0Y\x02\u04A3\u04A5\x05" +
		"\xCEh\x02\u04A4\u04A3\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5" +
		"\u04AA\x03\x02\x02\x02\u04A6\u04A8\x05\f\x07\x02\u04A7\u04A6\x03\x02\x02" +
		"\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04AB" +
		"\x07\x88\x02\x02\u04AA\u04A7\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02" +
		"\u04AB\u04AD\x03\x02\x02\x02\u04AC\u04AE\x05\xB2Z\x02\u04AD\u04AC\x03" +
		"\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE\xAD\x03\x02\x02\x02\u04AF" +
		"\u04B1\x05\xB0Y\x02\u04B0\u04B2\x05\xCEh\x02\u04B1\u04B0\x03\x02\x02\x02" +
		"\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B5\x07" +
		"\x88\x02\x02\u04B4\u04B6\x05\xB2Z\x02\u04B5\u04B4\x03\x02\x02\x02\u04B5" +
		"\u04B6\x03\x02\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\u04B8\x07\x81" +
		"\x02\x02\u04B8\xAF\x03\x02\x02\x02\u04B9\u04BB\x07\"\x02\x02\u04BA\u04BC" +
		"\t\x0F\x02\x02\u04BB\u04BA\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02" +
		"\u04BC\xB1\x03\x02\x02\x02\u04BD\u04BE\x07\x7F\x02\x02\u04BE\u04BF\x05" +
		"\x9CO\x02\u04BF\xB3\x03\x02\x02\x02\u04C0\u04C5\x05\xB6\\\x02\u04C1\u04C2" +
		"\x07{\x02\x02\u04C2\u04C4\x05\xB6\\\x02\u04C3\u04C1\x03\x02\x02\x02\u04C4" +
		"\u04C7\x03\x02\x02\x02\u04C5\u04C3\x03\x02\x02\x02\u04C5\u04C6\x03\x02" +
		"\x02\x02\u04C6\xB5\x03\x02\x02\x02\u04C7\u04C5\x03\x02\x02\x02\u04C8\u04CB" +
		"\x05\xB8]\x02\u04C9\u04CA\x07f\x02\x02\u04CA\u04CC\x05^0\x02\u04CB\u04C9" +
		"\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\xB7\x03\x02\x02\x02" +
		"\u04CD\u04CE\x07\x88\x02\x02\u04CE\xB9\x03\x02\x02\x02\u04CF\u04D2\x05" +
		"\xBC_\x02\u04D0\u04D2\x05\xC0a\x02\u04D1\u04CF\x03\x02\x02\x02\u04D1\u04D0" +
		"\x03\x02\x02\x02\u04D2\xBB\x03\x02\x02\x02\u04D3\u04D4\x07\x88\x02\x02" +
		"\u04D4\xBD\x03\x02\x02\x02\u04D5\u04D7\x07-\x02\x02\u04D6\u04D5\x03\x02" +
		"\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8" +
		"\u04DB\x071\x02\x02\u04D9\u04DC\x07\x88\x02\x02\u04DA\u04DC\x05\xBC_\x02" +
		"\u04DB\u04D9\x03\x02\x02\x02\u04DB\u04DA\x03\x02\x02\x02\u04DB\u04DC\x03" +
		"\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DF\x07Z\x02\x02\u04DE" +
		"\u04E0\x05z>\x02\u04DF\u04DE\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02" +
		"\u04E0\u04E1\x03\x02\x02\x02\u04E1\u04E2\x07[\x02\x02\u04E2\xBF\x03\x02" +
		"\x02\x02\u04E3\u04E4\x07\x88\x02\x02\u04E4\xC1\x03\x02\x02\x02\u04E5\u04E6" +
		"\x071\x02\x02\u04E6\u04E7\x07\x88\x02\x02\u04E7\u04E8\x07f\x02\x02\u04E8" +
		"\u04E9\x05\xC4c\x02\u04E9\u04EA\x07\x81\x02\x02\u04EA\xC3\x03\x02\x02" +
		"\x02\u04EB\u04ED\x05\f\x07\x02\u04EC\u04EB\x03\x02\x02\x02\u04EC\u04ED" +
		"\x03\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04EF\x05\xBA^\x02" +
		"\u04EF\xC5\x03\x02\x02\x02\u04F0\u04F6\x07P\x02\x02\u04F1\u04F3\x07M\x02" +
		"\x02\u04F2\u04F1\x03\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F4" +
		"\x03\x02\x02\x02\u04F4\u04F7\x05\f\x07\x02\u04F5\u04F7\x07\x80\x02\x02" +
		"\u04F6\u04F2\x03\x02\x02\x02\u04F6\u04F5\x03\x02\x02\x02\u04F7\u04F8\x03" +
		"\x02\x02\x02\u04F8\u04F9\x05\b\x05\x02\u04F9\u04FA\x07\x81\x02\x02\u04FA" +
		"\xC7\x03\x02\x02\x02\u04FB\u04FD\x05\xCEh\x02\u04FC\u04FB\x03\x02\x02" +
		"\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u04FF" +
		"\x07P\x02\x02\u04FF\u0501\x071\x02\x02\u0500\u0502\x05\f\x07\x02\u0501" +
		"\u0500\x03\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\u0503\x03\x02" +
		"\x02\x02\u0503\u0504\x05\xBA^\x02\u0504\u0505\x07\x81\x02\x02\u0505\xC9" +
		"\x03\x02\x02\x02\u0506\u0507\x07\r\x02\x02\u0507\u0508\x07V\x02\x02\u0508" +
		"\u0509\x07\x06\x02\x02\u0509\u050A\x07W\x02\x02\u050A\u050B\x07\x81\x02" +
		"\x02\u050B\xCB\x03\x02\x02\x02\u050C\u050D\x07%\x02\x02\u050D\u0514\x07" +
		"\x06\x02\x02\u050E\u0510\x07Z\x02\x02\u050F\u0511\x05z>\x02\u0510\u050F" +
		"\x03\x02\x02\x02\u0510\u0511\x03\x02\x02\x02\u0511\u0512\x03\x02\x02\x02" +
		"\u0512\u0515\x07[\x02\x02\u0513\u0515\x05|?\x02\u0514\u050E\x03\x02\x02" +
		"\x02\u0514\u0513\x03\x02\x02\x02\u0515\xCD\x03\x02\x02\x02\u0516\u0518" +
		"\x05\xD0i\x02\u0517\u0516\x03\x02\x02\x02\u0518\u0519\x03\x02\x02\x02" +
		"\u0519\u0517\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02\u051A\xCF\x03" +
		"\x02\x02\x02\u051B\u051C\x07X\x02\x02\u051C\u051E\x07X\x02\x02\u051D\u051F" +
		"\x05\xD4k\x02\u051E\u051D\x03\x02\x02\x02\u051E\u051F\x03\x02\x02\x02" +
		"\u051F\u0520\x03\x02\x02\x02\u0520\u0521\x07Y\x02\x02\u0521\u0524\x07" +
		"Y\x02\x02\u0522\u0524\x05\xD2j\x02\u0523\u051B\x03\x02\x02\x02\u0523\u0522" +
		"\x03\x02\x02\x02\u0524\xD1\x03\x02\x02\x02\u0525\u0526\x07\v\x02\x02\u0526" +
		"\u0529\x07V\x02\x02\u0527\u052A\x05\xF8}\x02\u0528\u052A\x05^0\x02\u0529" +
		"\u0527\x03\x02\x02\x02\u0529\u0528\x03\x02\x02\x02\u052A\u052C\x03\x02" +
		"\x02\x02\u052B\u052D\x07\x84\x02\x02\u052C\u052B\x03\x02\x02\x02\u052C" +
		"\u052D\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E\u052F\x07W\x02" +
		"\x02\u052F\xD3\x03\x02\x02\x02\u0530\u0535\x05\xD6l\x02\u0531\u0532\x07" +
		"{\x02\x02\u0532\u0534\x05\xD6l\x02\u0533\u0531\x03\x02\x02\x02\u0534\u0537" +
		"\x03\x02\x02\x02\u0535\u0533\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02" +
		"\u0536\u0539\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0538\u053A\x07" +
		"\x84\x02\x02\u0539\u0538\x03\x02\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A" +
		"\xD5\x03\x02\x02\x02\u053B\u053C\x05\xD8m\x02\u053C\u053D\x07\x80\x02" +
		"\x02\u053D\u053F\x03\x02\x02\x02\u053E\u053B\x03\x02\x02\x02\u053E\u053F" +
		"\x03\x02\x02\x02\u053F\u0540\x03\x02\x02\x02\u0540\u0542\x07\x88\x02\x02" +
		"\u0541\u0543\x05\xDAn\x02\u0542\u0541\x03\x02\x02\x02\u0542\u0543\x03" +
		"\x02\x02\x02\u0543\xD7\x03\x02\x02\x02\u0544\u0545\x07\x88\x02\x02\u0545" +
		"\xD9\x03\x02\x02\x02\u0546\u0548\x07V\x02\x02\u0547\u0549\x05\xDCo\x02" +
		"\u0548\u0547\x03\x02\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549\u054A\x03" +
		"\x02\x02\x02\u054A\u054B\x07W\x02\x02\u054B\xDB\x03\x02\x02\x02\u054C" +
		"\u054E\x05\xDEp\x02\u054D\u054C\x03\x02\x02\x02\u054E\u054F\x03\x02\x02" +
		"\x02\u054F\u054D\x03\x02\x02\x02\u054F\u0550\x03\x02\x02\x02\u0550\xDD" +
		"\x03\x02\x02\x02\u0551\u0552\x07V\x02\x02\u0552\u0553\x05\xDCo\x02\u0553" +
		"\u0554\x07W\x02\x02\u0554\u0563\x03\x02\x02\x02\u0555\u0556\x07X\x02\x02" +
		"\u0556\u0557\x05\xDCo\x02\u0557\u0558\x07Y\x02\x02\u0558\u0563\x03\x02" +
		"\x02\x02\u0559\u055A\x07Z\x02\x02\u055A\u055B\x05\xDCo\x02\u055B\u055C" +
		"\x07[\x02\x02\u055C\u0563\x03\x02\x02\x02\u055D\u055F\n\x10\x02\x02\u055E" +
		"\u055D\x03\x02\x02\x02\u055F\u0560\x03\x02\x02\x02\u0560\u055E\x03\x02" +
		"\x02\x02\u0560\u0561\x03\x02\x02\x02\u0561\u0563\x03\x02\x02\x02\u0562" +
		"\u0551\x03\x02\x02\x02\u0562\u0555\x03\x02\x02\x02\u0562\u0559\x03\x02" +
		"\x02\x02\u0562\u055E\x03\x02\x02\x02\u0563\xDF\x03\x02\x02\x02\u0564\u0569" +
		"\x05\xE2r\x02\u0565\u0566\x07{\x02\x02\u0566\u0568\x05\xE2r\x02\u0567" +
		"\u0565\x03\x02\x02\x02\u0568\u056B\x03\x02\x02\x02\u0569\u0567\x03\x02" +
		"\x02\x02\u0569\u056A\x03\x02\x02\x02\u056A\xE1\x03\x02\x02\x02\u056B\u0569" +
		"\x03\x02\x02\x02\u056C\u056E\x05\xE4s\x02\u056D\u056F\x05\u010E\x88\x02" +
		"\u056E\u056D\x03\x02\x02\x02\u056E\u056F\x03\x02\x02\x02\u056F\xE3\x03" +
		"\x02\x02\x02\u0570\u0576\x05\xE6t\x02\u0571\u0572\x05\xE8u\x02\u0572\u0573" +
		"\x05\xEAv\x02\u0573\u0574\x05\xECw\x02\u0574\u0576\x03\x02\x02\x02\u0575" +
		"\u0570\x03\x02\x02\x02\u0575\u0571\x03\x02\x02\x02\u0576\xE5\x03\x02\x02" +
		"\x02\u0577\u0579\x05\xEEx\x02\u0578\u057A\x07\x17\x02\x02\u0579\u0578" +
		"\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057C\x03\x02\x02\x02" +
		"\u057B\u0577\x03\x02\x02\x02\u057C\u057F\x03\x02\x02\x02\u057D\u057B\x03" +
		"\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E\u0580\x03\x02\x02\x02\u057F" +
		"\u057D\x03\x02\x02\x02\u0580\u0581\x05\xE8u\x02\u0581\xE7\x03\x02\x02" +
		"\x02\u0582\u0583\bu\x01\x02\u0583\u0585\x05\xF6|\x02\u0584\u0586\x05\xCE" +
		"h\x02\u0585\u0584\x03\x02\x02\x02\u0585\u0586\x03\x02\x02\x02\u0586\u058C" +
		"\x03\x02\x02\x02\u0587\u0588\x07V\x02\x02\u0588\u0589\x05\xE6t\x02\u0589" +
		"\u058A\x07W\x02\x02\u058A\u058C\x03\x02\x02\x02\u058B\u0582\x03\x02\x02" +
		"\x02\u058B\u0587\x03\x02\x02\x02\u058C\u059B\x03\x02\x02\x02\u058D\u0597" +
		"\f\x04\x02\x02\u058E\u0598\x05\xEAv\x02\u058F\u0591\x07X\x02\x02\u0590" +
		"\u0592\x05^0\x02\u0591\u0590\x03\x02\x02\x02\u0591\u0592\x03\x02\x02\x02" +
		"\u0592\u0593\x03\x02\x02\x02\u0593\u0595\x07Y\x02\x02\u0594\u0596\x05" +
		"\xCEh\x02\u0595\u0594\x03\x02\x02\x02\u0595\u0596\x03\x02\x02\x02\u0596" +
		"\u0598\x03\x02\x02\x02\u0597\u058E\x03\x02\x02\x02\u0597\u058F\x03\x02" +
		"\x02\x02\u0598\u059A\x03\x02\x02\x02\u0599\u058D\x03\x02\x02\x02\u059A" +
		"\u059D\x03\x02\x02\x02\u059B\u0599\x03\x02\x02\x02\u059B\u059C\x03\x02" +
		"\x02\x02\u059C\xE9\x03\x02\x02\x02\u059D\u059B\x03\x02\x02\x02\u059E\u05A0" +
		"\x07V\x02\x02\u059F\u05A1\x05\u0104\x83\x02\u05A0\u059F\x03\x02\x02\x02" +
		"\u05A0\u05A1\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02\x02\u05A2\u05A4\x07" +
		"W\x02\x02\u05A3\u05A5\x05\xF0y\x02\u05A4\u05A3\x03\x02\x02\x02\u05A4\u05A5" +
		"\x03\x02\x02\x02\u05A5\u05A7\x03\x02\x02\x02\u05A6\u05A8\x05\xF4{\x02" +
		"\u05A7\u05A6\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\u05AA\x03" +
		"\x02\x02\x02\u05A9\u05AB\x05\u0174\xBB\x02\u05AA\u05A9\x03\x02\x02\x02" +
		"\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05AD\x03\x02\x02\x02\u05AC\u05AE\x05" +
		"\xCEh\x02\u05AD\u05AC\x03\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE" +
		"\xEB\x03\x02\x02\x02\u05AF\u05B0\x07}\x02\x02\u05B0\u05B2\x05\x9EP\x02" +
		"\u05B1\u05B3\x05\xFA~\x02\u05B2\u05B1\x03\x02\x02\x02\u05B2\u05B3\x03" +
		"\x02\x02\x02\u05B3\xED\x03\x02\x02\x02\u05B4\u05B6\t\x11\x02\x02\u05B5" +
		"\u05B7\x05\xCEh\x02\u05B6\u05B5\x03\x02\x02\x02\u05B6\u05B7\x03\x02\x02" +
		"\x02\u05B7\u05C3\x03\x02\x02\x02\u05B8\u05BA\x05\f\x07\x02\u05B9\u05B8" +
		"\x03\x02\x02\x02\u05B9\u05BA\x03\x02\x02\x02\u05BA\u05BB\x03\x02\x02\x02" +
		"\u05BB\u05BD\x07^\x02\x02\u05BC\u05BE\x05\xCEh\x02\u05BD\u05BC\x03\x02" +
		"\x02\x02\u05BD\u05BE\x03\x02\x02\x02\u05BE\u05C0\x03\x02\x02\x02\u05BF" +
		"\u05C1\x05\xF0y\x02\u05C0\u05BF\x03\x02\x02\x02\u05C0\u05C1\x03\x02\x02" +
		"\x02\u05C1\u05C3\x03\x02\x02\x02\u05C2\u05B4\x03\x02\x02\x02\u05C2\u05B9" +
		"\x03\x02\x02\x02\u05C3\xEF\x03\x02\x02\x02\u05C4\u05C6\x05\xF2z\x02\u05C5" +
		"\u05C4\x03\x02\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C5\x03\x02" +
		"\x02\x02\u05C7\u05C8\x03\x02\x02\x02\u05C8\xF1\x03\x02\x02\x02\u05C9\u05CA" +
		"\t\x12\x02\x02\u05CA\xF3\x03\x02\x02\x02\u05CB\u05CC\t\x11\x02\x02\u05CC" +
		"\xF5\x03\x02\x02\x02\u05CD\u05CF\x07\x84\x02\x02\u05CE\u05CD\x03\x02\x02" +
		"\x02\u05CE\u05CF\x03\x02\x02\x02\u05CF\u05D0\x03\x02\x02\x02\u05D0\u05D1" +
		"\x05\x06\x04\x02\u05D1\xF7\x03\x02\x02\x02\u05D2\u05D4\x05\x9CO\x02\u05D3" +
		"\u05D5\x05\xFA~\x02\u05D4\u05D3\x03\x02\x02\x02\u05D4\u05D5\x03\x02\x02" +
		"\x02\u05D5\xF9\x03\x02\x02\x02\u05D6\u05DF\x05\xFC\x7F\x02\u05D7\u05D9" +
		"\x05\xFE\x80\x02\u05D8\u05D7\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02" +
		"\u05D9\u05DA\x03\x02\x02\x02\u05DA\u05DB\x05\xEAv\x02\u05DB\u05DC\x05" +
		"\xECw\x02\u05DC\u05DF\x03\x02\x02\x02\u05DD\u05DF\x05\u0100\x81\x02\u05DE" +
		"\u05D6\x03\x02\x02\x02\u05DE\u05D8\x03\x02\x02\x02\u05DE\u05DD\x03\x02" +
		"\x02\x02\u05DF\xFB\x03\x02\x02\x02\u05E0\u05EA\x05\xFE\x80\x02\u05E1\u05E3" +
		"\x05\xEEx\x02\u05E2\u05E1\x03\x02\x02\x02\u05E3\u05E4\x03\x02\x02\x02" +
		"\u05E4\u05E2\x03\x02\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5\u05E7\x03" +
		"\x02\x02\x02\u05E6\u05E8\x05\xFE\x80\x02\u05E7\u05E6\x03\x02\x02\x02\u05E7" +
		"\u05E8\x03\x02\x02\x02\u05E8\u05EA\x03\x02\x02\x02\u05E9\u05E0\x03\x02" +
		"\x02\x02\u05E9\u05E2\x03\x02\x02\x02\u05EA\xFD\x03\x02\x02\x02\u05EB\u05EC" +
		"\b\x80\x01\x02\u05EC\u05FA\x05\xEAv\x02\u05ED\u05EF\x07X\x02\x02\u05EE" +
		"\u05F0\x05^0\x02\u05EF\u05EE\x03\x02\x02\x02\u05EF\u05F0\x03\x02\x02\x02" +
		"\u05F0\u05F1\x03\x02\x02\x02\u05F1\u05F3\x07Y\x02\x02\u05F2\u05F4\x05" +
		"\xCEh\x02\u05F3\u05F2\x03\x02\x02\x02\u05F3\u05F4\x03\x02\x02\x02\u05F4" +
		"\u05FA\x03\x02\x02\x02\u05F5\u05F6\x07V\x02\x02\u05F6\u05F7\x05\xFC\x7F" +
		"\x02\u05F7\u05F8\x07W\x02\x02\u05F8\u05FA\x03\x02\x02\x02\u05F9\u05EB" +
		"\x03\x02\x02\x02\u05F9\u05ED\x03\x02\x02\x02\u05F9\u05F5\x03\x02\x02\x02" +
		"\u05FA\u060A\x03\x02\x02\x02\u05FB\u0606\f\x06\x02\x02\u05FC\u0607\x05" +
		"\xEAv\x02\u05FD\u05FE\x05\xFE\x80\x02\u05FE\u0600\x07X\x02\x02\u05FF\u0601" +
		"\x05^0\x02\u0600\u05FF\x03\x02\x02\x02\u0600\u0601\x03\x02\x02\x02\u0601" +
		"\u0602\x03\x02\x02\x02\u0602\u0604\x07Y\x02\x02\u0603\u0605\x05\xCEh\x02" +
		"\u0604\u0603\x03\x02\x02\x02\u0604\u0605\x03\x02\x02\x02\u0605\u0607\x03" +
		"\x02\x02\x02\u0606\u05FC\x03\x02\x02\x02\u0606\u05FD\x03\x02\x02\x02\u0607" +
		"\u0609\x03\x02\x02\x02\u0608\u05FB\x03\x02\x02\x02\u0609\u060C\x03\x02" +
		"\x02\x02\u060A\u0608\x03\x02\x02\x02\u060A\u060B\x03\x02\x02\x02\u060B" +
		"\xFF\x03\x02\x02\x02\u060C\u060A\x03\x02\x02\x02\u060D\u060F\x05\xEEx" +
		"\x02\u060E\u060D\x03\x02\x02\x02\u060F\u0612\x03\x02\x02\x02\u0610\u060E" +
		"\x03\x02\x02\x02\u0610\u0611\x03\x02\x02\x02\u0611\u0613\x03\x02\x02\x02" +
		"\u0612\u0610\x03\x02\x02\x02\u0613\u0614\x05\u0102\x82\x02\u0614\u0101" +
		"\x03\x02\x02\x02\u0615\u0616\b\x82\x01\x02\u0616\u0617\x07\x84\x02\x02" +
		"\u0617\u0626\x03\x02\x02\x02\u0618\u0622\f\x04\x02\x02\u0619\u0623\x05" +
		"\xEAv\x02\u061A\u061C\x07X\x02\x02\u061B\u061D\x05^0\x02\u061C\u061B\x03" +
		"\x02\x02\x02\u061C\u061D\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E" +
		"\u0620\x07Y\x02\x02\u061F\u0621\x05\xCEh\x02\u0620\u061F\x03\x02\x02\x02" +
		"\u0620\u0621\x03\x02\x02\x02\u0621\u0623\x03\x02\x02\x02\u0622";
	private static readonly _serializedATNSegment3: string =
		"\u0619\x03\x02\x02\x02\u0622\u061A\x03\x02\x02\x02\u0623\u0625\x03\x02" +
		"\x02\x02\u0624\u0618\x03\x02\x02\x02\u0625\u0628\x03\x02\x02\x02\u0626" +
		"\u0624\x03\x02\x02\x02\u0626\u0627\x03\x02\x02\x02\u0627\u0103\x03\x02" +
		"\x02\x02\u0628\u0626\x03\x02\x02\x02\u0629\u062E\x05\u0106\x84\x02\u062A" +
		"\u062C\x07{\x02\x02\u062B\u062A\x03\x02\x02\x02\u062B\u062C\x03\x02\x02" +
		"\x02\u062C\u062D\x03\x02\x02\x02\u062D\u062F\x07\x84\x02\x02\u062E\u062B" +
		"\x03\x02\x02\x02\u062E\u062F\x03\x02\x02\x02\u062F\u0105\x03\x02\x02\x02" +
		"\u0630\u0635\x05\u0108\x85\x02\u0631\u0632\x07{\x02\x02\u0632\u0634\x05" +
		"\u0108\x85\x02\u0633\u0631\x03\x02\x02\x02\u0634\u0637\x03\x02\x02\x02" +
		"\u0635\u0633\x03\x02\x02\x02\u0635\u0636\x03\x02\x02\x02\u0636\u0107\x03" +
		"\x02\x02\x02\u0637\u0635\x03\x02\x02\x02\u0638\u063A\x05\xCEh\x02\u0639" +
		"\u0638\x03\x02\x02\x02\u0639\u063A\x03\x02\x02\x02\u063A\u063B\x03\x02" +
		"\x02\x02\u063B\u0640\x05\x90I\x02\u063C\u0641\x05\xE4s\x02\u063D\u063F" +
		"\x05\xFA~\x02\u063E\u063D\x03\x02\x02\x02\u063E\u063F\x03\x02\x02\x02" +
		"\u063F\u0641\x03\x02\x02\x02\u0640\u063C\x03\x02\x02\x02\u0640\u063E\x03" +
		"\x02\x02\x02\u0641\u0644\x03\x02\x02\x02\u0642\u0643\x07f\x02\x02\u0643" +
		"\u0645\x05\u0112\x8A\x02\u0644\u0642\x03\x02\x02\x02\u0644\u0645\x03\x02" +
		"\x02\x02\u0645\u0109\x03\x02\x02\x02\u0646\u0648\x05\xCEh\x02\u0647\u0646" +
		"\x03\x02\x02\x02\u0647\u0648\x03\x02\x02\x02\u0648\u064A\x03\x02\x02\x02" +
		"\u0649\u064B\x05\x90I\x02\u064A\u0649\x03\x02\x02\x02\u064A\u064B\x03" +
		"\x02\x02\x02\u064B\u064C\x03\x02\x02\x02\u064C\u064E\x05\xE4s\x02\u064D" +
		"\u064F\x05\u012C\x97\x02\u064E\u064D\x03\x02\x02\x02\u064E\u064F\x03\x02" +
		"\x02\x02\u064F\u0650\x03\x02\x02\x02\u0650\u0651\x05\u010C\x87\x02\u0651" +
		"\u010B\x03\x02\x02\x02\u0652\u0654\x05\u0144\xA3\x02\u0653\u0652\x03\x02" +
		"\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654\u0655\x03\x02\x02\x02\u0655" +
		"\u065B\x05f4\x02\u0656\u065B\x05\u016A\xB6\x02\u0657\u0658\x07f\x02\x02" +
		"\u0658\u0659\t\x13\x02\x02\u0659\u065B\x07\x81\x02\x02\u065A\u0653\x03" +
		"\x02\x02\x02\u065A\u0656\x03\x02\x02\x02\u065A\u0657\x03\x02\x02\x02\u065B" +
		"\u010D\x03\x02\x02\x02\u065C\u0662\x05\u0110\x89\x02\u065D\u065E\x07V" +
		"\x02\x02\u065E\u065F\x05$\x13\x02\u065F\u0660\x07W\x02\x02\u0660\u0662" +
		"\x03\x02\x02\x02\u0661\u065C\x03\x02\x02\x02\u0661\u065D\x03\x02\x02\x02" +
		"\u0662\u010F\x03\x02\x02\x02\u0663\u0664\x07f\x02\x02\u0664\u0667\x05" +
		"\u0112\x8A\x02\u0665\u0667\x05\u0116\x8C\x02\u0666\u0663\x03\x02\x02\x02" +
		"\u0666\u0665\x03\x02\x02\x02\u0667\u0111\x03\x02\x02\x02\u0668\u066B\x05" +
		"X-\x02\u0669\u066B\x05\u0116\x8C\x02\u066A\u0668\x03\x02\x02\x02\u066A" +
		"\u0669\x03\x02\x02\x02\u066B\u0113\x03\x02\x02\x02\u066C\u066E\x05\u0112" +
		"\x8A\x02\u066D\u066F\x07\x84\x02\x02\u066E\u066D\x03\x02\x02\x02\u066E" +
		"\u066F\x03\x02\x02\x02\u066F\u0677\x03\x02\x02\x02\u0670\u0671\x07{\x02" +
		"\x02\u0671\u0673\x05\u0112\x8A\x02\u0672\u0674\x07\x84\x02\x02\u0673\u0672" +
		"\x03\x02\x02\x02\u0673\u0674\x03\x02\x02\x02\u0674\u0676\x03\x02\x02\x02" +
		"\u0675\u0670\x03\x02\x02\x02\u0676\u0679\x03\x02\x02\x02\u0677\u0675\x03" +
		"\x02\x02\x02\u0677\u0678\x03\x02\x02\x02\u0678\u0115\x03\x02\x02\x02\u0679" +
		"\u0677\x03\x02\x02\x02\u067A\u067F\x07Z\x02\x02\u067B\u067D\x05\u0114" +
		"\x8B\x02\u067C\u067E\x07{\x02\x02\u067D\u067C\x03\x02\x02\x02\u067D\u067E" +
		"\x03\x02\x02\x02\u067E\u0680\x03\x02\x02\x02\u067F\u067B\x03\x02\x02\x02" +
		"\u067F\u0680\x03\x02\x02\x02\u0680\u0681\x03\x02\x02\x02\u0681\u0682\x07" +
		"[\x02\x02\u0682\u0117\x03\x02\x02\x02\u0683\u0686\x07\x88\x02\x02\u0684" +
		"\u0686\x05\u0158\xAD\x02\u0685\u0683\x03\x02\x02\x02\u0685\u0684\x03\x02" +
		"\x02\x02\u0686\u0119\x03\x02\x02\x02\u0687\u0688\x05\u011C\x8F\x02\u0688" +
		"\u068A\x07Z\x02\x02\u0689\u068B\x05\u0124\x93\x02\u068A\u0689\x03\x02" +
		"\x02\x02\u068A\u068B\x03\x02\x02\x02\u068B\u068C\x03\x02\x02\x02\u068C" +
		"\u068D\x07[\x02\x02\u068D\u011B\x03\x02\x02\x02\u068E\u0690\x05\u0122" +
		"\x92\x02\u068F\u0691\x05\xCEh\x02\u0690\u068F\x03\x02\x02\x02\u0690\u0691" +
		"\x03\x02\x02\x02\u0691\u0696\x03\x02\x02\x02\u0692\u0694\x05\u011E\x90" +
		"\x02\u0693\u0695\x05\u0120\x91\x02\u0694\u0693\x03\x02\x02\x02\u0694\u0695" +
		"\x03\x02\x02\x02\u0695\u0697\x03\x02\x02\x02\u0696\u0692\x03\x02\x02\x02" +
		"\u0696\u0697\x03\x02\x02\x02\u0697\u0699\x03\x02\x02\x02\u0698\u069A\x05" +
		"\u0132\x9A\x02\u0699\u0698\x03\x02\x02\x02\u0699\u069A\x03\x02\x02\x02" +
		"\u069A\u06A6\x03\x02\x02\x02\u069B\u069D\x07N\x02\x02\u069C\u069E\x05" +
		"\xCEh\x02\u069D\u069C\x03\x02\x02\x02\u069D\u069E\x03\x02\x02\x02\u069E" +
		"\u06A3\x03\x02\x02\x02\u069F\u06A1\x05\u011E\x90\x02\u06A0\u06A2\x05\u0120" +
		"\x91\x02\u06A1\u06A0\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2" +
		"\u06A4\x03\x02\x02\x02\u06A3\u069F\x03\x02\x02\x02\u06A3\u06A4\x03\x02" +
		"\x02\x02\u06A4\u06A6\x03\x02\x02\x02\u06A5\u068E\x03\x02\x02\x02\u06A5" +
		"\u069B\x03\x02\x02\x02\u06A6\u011D\x03\x02\x02\x02\u06A7\u06A9\x05\f\x07" +
		"\x02\u06A8\u06A7\x03\x02\x02\x02\u06A8\u06A9\x03\x02\x02\x02\u06A9\u06AA" +
		"\x03\x02\x02\x02\u06AA\u06AB\x05\u0118\x8D\x02\u06AB\u011F\x03\x02\x02" +
		"\x02\u06AC\u06AD\x07\'\x02\x02\u06AD\u0121\x03\x02\x02\x02\u06AE\u06AF" +
		"\t\x0F\x02\x02\u06AF\u0123\x03\x02\x02\x02\u06B0\u06B5\x05\u0126\x94\x02" +
		"\u06B1\u06B2\x05\u013C\x9F\x02\u06B2\u06B3\x07\x7F\x02\x02\u06B3\u06B5" +
		"\x03\x02\x02\x02\u06B4\u06B0\x03\x02\x02\x02\u06B4\u06B1\x03\x02\x02\x02" +
		"\u06B5\u06B6\x03\x02\x02\x02\u06B6\u06B4\x03\x02\x02\x02\u06B6\u06B7\x03" +
		"\x02\x02\x02\u06B7\u0125\x03\x02\x02\x02\u06B8\u06BA\x05\xCEh\x02\u06B9" +
		"\u06B8\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06BC\x03\x02" +
		"\x02\x02\u06BB\u06BD\x05\x90I\x02\u06BC\u06BB\x03\x02\x02\x02\u06BC\u06BD" +
		"\x03\x02\x02\x02\u06BD\u06BF\x03\x02\x02\x02\u06BE\u06C0\x05\u0128\x95" +
		"\x02\u06BF\u06BE\x03\x02\x02\x02\u06BF\u06C0\x03\x02\x02\x02\u06C0\u06C1" +
		"\x03\x02\x02\x02\u06C1\u06C9\x07\x81\x02\x02\u06C2\u06C9\x05\u010A\x86" +
		"\x02\u06C3\u06C9\x05\xC6d\x02\u06C4\u06C9\x05\x88E\x02\u06C5\u06C9\x05" +
		"\u0150\xA9\x02\u06C6\u06C9\x05\x84C\x02\u06C7\u06C9\x05\x8AF\x02\u06C8" +
		"\u06B9\x03\x02\x02\x02\u06C8\u06C2\x03\x02\x02\x02\u06C8\u06C3\x03\x02" +
		"\x02\x02\u06C8\u06C4\x03\x02\x02\x02\u06C8\u06C5\x03\x02\x02\x02\u06C8" +
		"\u06C6\x03\x02\x02\x02\u06C8\u06C7\x03\x02\x02\x02\u06C9\u0127\x03\x02" +
		"\x02\x02\u06CA\u06CF\x05\u012A\x96\x02\u06CB\u06CC\x07{\x02\x02\u06CC" +
		"\u06CE\x05\u012A\x96\x02\u06CD\u06CB\x03\x02\x02\x02\u06CE\u06D1\x03\x02" +
		"\x02\x02\u06CF\u06CD\x03\x02\x02\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0" +
		"\u0129\x03\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D2\u06DC\x05\xE4" +
		"s\x02\u06D3\u06D5\x05\u012C\x97\x02\u06D4\u06D3\x03\x02\x02\x02\u06D4" +
		"\u06D5\x03\x02\x02\x02\u06D5\u06D7\x03\x02\x02\x02\u06D6\u06D8\x05\u0130" +
		"\x99\x02\u06D7\u06D6\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8" +
		"\u06DD\x03\x02\x02\x02\u06D9\u06DB\x05\u0110\x89\x02\u06DA\u06D9\x03\x02" +
		"\x02\x02\u06DA\u06DB\x03\x02\x02\x02\u06DB\u06DD\x03\x02\x02\x02\u06DC" +
		"\u06D4\x03\x02\x02\x02\u06DC\u06DA\x03\x02\x02\x02\u06DD\u06E7\x03\x02" +
		"\x02\x02\u06DE\u06E0\x07\x88\x02\x02\u06DF\u06DE\x03\x02\x02\x02\u06DF" +
		"\u06E0\x03\x02\x02\x02\u06E0\u06E2\x03\x02\x02\x02\u06E1\u06E3\x05\xCE" +
		"h\x02\u06E2\u06E1\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3\u06E4" +
		"\x03\x02\x02\x02\u06E4\u06E5\x07\x7F\x02\x02\u06E5\u06E7\x05^0\x02\u06E6" +
		"\u06D2\x03\x02\x02\x02\u06E6\u06DF\x03\x02\x02\x02\u06E7\u012B\x03\x02" +
		"\x02\x02\u06E8\u06EA\x05\u012E\x98\x02\u06E9\u06E8\x03\x02\x02\x02\u06EA" +
		"\u06EB\x03\x02\x02\x02\u06EB\u06E9\x03\x02\x02\x02\u06EB\u06EC\x03\x02" +
		"\x02\x02\u06EC\u012D\x03\x02\x02\x02\u06ED\u06EE\t\x14\x02\x02\u06EE\u012F" +
		"\x03\x02\x02\x02\u06EF\u06F0\x07f\x02\x02\u06F0\u06F1\x07\x8A\x02\x02" +
		"\u06F1\u06F2\b\x99\x01\x02\u06F2\u0131\x03\x02\x02\x02\u06F3\u06F4\x07" +
		"\x7F\x02\x02\u06F4\u06F5\x05\u0134\x9B\x02\u06F5\u0133\x03\x02\x02\x02" +
		"\u06F6\u06F8\x05\u0136\x9C\x02\u06F7\u06F9\x07\x84\x02\x02\u06F8\u06F7" +
		"\x03\x02\x02\x02\u06F8\u06F9\x03\x02\x02\x02\u06F9\u0701\x03\x02\x02\x02" +
		"\u06FA\u06FB\x07{\x02\x02\u06FB\u06FD\x05\u0136\x9C\x02\u06FC\u06FE\x07" +
		"\x84\x02\x02\u06FD\u06FC\x03\x02\x02\x02\u06FD\u06FE\x03\x02\x02\x02\u06FE" +
		"\u0700\x03\x02\x02\x02\u06FF\u06FA\x03\x02\x02\x02\u0700\u0703\x03\x02" +
		"\x02\x02\u0701\u06FF\x03\x02\x02\x02\u0701\u0702\x03\x02\x02\x02\u0702" +
		"\u0135\x03\x02\x02\x02\u0703\u0701\x03\x02\x02\x02\u0704\u0706\x05\xCE" +
		"h\x02\u0705\u0704\x03\x02\x02\x02\u0705\u0706\x03\x02\x02\x02\u0706\u0713" +
		"\x03\x02\x02\x02\u0707\u0714\x05\u013A\x9E\x02\u0708\u070A\x07Q\x02\x02" +
		"\u0709\u070B\x05\u013C\x9F\x02\u070A\u0709\x03\x02\x02\x02\u070A\u070B" +
		"\x03\x02\x02\x02\u070B\u070C\x03\x02\x02\x02\u070C\u0714\x05\u013A\x9E" +
		"\x02\u070D\u070F\x05\u013C\x9F\x02\u070E\u0710\x07Q\x02\x02\u070F\u070E" +
		"\x03\x02\x02\x02\u070F\u0710\x03\x02\x02\x02\u0710\u0711\x03\x02\x02\x02" +
		"\u0711\u0712\x05\u013A\x9E\x02\u0712\u0714\x03\x02\x02\x02\u0713\u0707" +
		"\x03\x02\x02\x02\u0713\u0708\x03\x02\x02\x02\u0713\u070D\x03\x02\x02\x02" +
		"\u0714\u0137\x03\x02\x02\x02\u0715\u0717\x05\f\x07\x02\u0716\u0715\x03" +
		"\x02\x02\x02\u0716\u0717\x03\x02\x02\x02\u0717\u0718\x03\x02\x02\x02\u0718" +
		"\u071B\x05\u0118\x8D\x02\u0719\u071B\x05\xA4S\x02\u071A\u0716\x03\x02" +
		"\x02\x02\u071A\u0719\x03\x02\x02\x02\u071B\u0139\x03\x02\x02\x02\u071C" +
		"\u071D\x05\u0138\x9D\x02\u071D\u013B\x03\x02\x02\x02\u071E\u071F\t\x15" +
		"\x02\x02\u071F\u013D\x03\x02\x02\x02\u0720\u0721\x075\x02\x02\u0721\u0722" +
		"\x05\u0140\xA1\x02\u0722\u013F\x03\x02\x02\x02\u0723\u0725\x05\x9CO\x02" +
		"\u0724\u0726\x05\u0142\xA2\x02\u0725\u0724\x03\x02\x02\x02\u0725\u0726" +
		"\x03\x02\x02\x02\u0726\u0141\x03\x02\x02\x02\u0727\u0729\x05\xEEx\x02" +
		"\u0728\u072A\x05\u0142\xA2\x02\u0729\u0728\x03\x02\x02\x02\u0729\u072A" +
		"\x03\x02\x02\x02\u072A\u0143\x03\x02\x02\x02\u072B\u072C\x07\x7F\x02\x02" +
		"\u072C\u072D\x05\u0146\xA4\x02\u072D\u0145\x03\x02\x02\x02\u072E\u0730" +
		"\x05\u0148\xA5\x02\u072F\u0731\x07\x84\x02\x02\u0730\u072F\x03\x02\x02" +
		"\x02\u0730\u0731\x03\x02\x02\x02\u0731\u0739\x03\x02\x02\x02\u0732\u0733" +
		"\x07{\x02\x02\u0733\u0735\x05\u0148\xA5\x02\u0734\u0736\x07\x84\x02\x02" +
		"\u0735\u0734\x03\x02\x02\x02\u0735\u0736\x03\x02\x02\x02\u0736\u0738\x03" +
		"\x02\x02\x02\u0737\u0732\x03\x02\x02\x02\u0738\u073B\x03\x02\x02\x02\u0739" +
		"\u0737\x03\x02\x02\x02\u0739\u073A\x03\x02\x02\x02\u073A\u0147\x03\x02" +
		"\x02\x02\u073B\u0739\x03\x02\x02\x02\u073C\u0743\x05\u014A\xA6\x02\u073D" +
		"\u073F\x07V\x02\x02\u073E\u0740\x05$\x13\x02\u073F\u073E\x03\x02\x02\x02" +
		"\u073F\u0740\x03\x02\x02\x02\u0740\u0741\x03\x02\x02\x02\u0741\u0744\x07" +
		"W\x02\x02\u0742\u0744\x05\u0116\x8C\x02\u0743\u073D\x03\x02\x02\x02\u0743" +
		"\u0742\x03\x02\x02\x02\u0744\u0149\x03\x02\x02\x02\u0745\u0748\x05\u0138" +
		"\x9D\x02\u0746\u0748\x07\x88\x02\x02\u0747\u0745\x03\x02\x02\x02\u0747" +
		"\u0746\x03\x02\x02\x02\u0748\u014B\x03\x02\x02\x02\u0749\u074A\x075\x02" +
		"\x02\u074A\u074B\x05\u017C\xBF\x02\u074B\u014D\x03\x02\x02\x02\u074C\u0750" +
		"\x075\x02\x02\u074D\u074E\x07\x06\x02\x02\u074E\u0751\x07\x88\x02\x02" +
		"\u074F\u0751\x07\x90\x02\x02\u0750\u074D\x03\x02\x02\x02\u0750\u074F\x03" +
		"\x02\x02\x02\u0751\u014F\x03\x02\x02\x02\u0752\u0753\x07E\x02\x02\u0753" +
		"\u0754\x07g\x02\x02\u0754\u0755\x05\u0152\xAA\x02\u0755\u0756\x07h\x02" +
		"\x02\u0756\u0757\x05|?\x02\u0757\u0151\x03\x02\x02\x02\u0758\u075D\x05" +
		"\u0154\xAB\x02\u0759\u075A\x07{\x02\x02\u075A\u075C\x05\u0154\xAB\x02" +
		"\u075B\u0759\x03\x02\x02\x02\u075C\u075F\x03\x02\x02\x02\u075D\u075B\x03" +
		"\x02\x02\x02\u075D\u075E\x03\x02\x02\x02\u075E\u0153\x03\x02\x02\x02\u075F" +
		"\u075D\x03\x02\x02\x02\u0760\u0763\x05\u0156\xAC\x02\u0761\u0763\x05\u0108" +
		"\x85\x02\u0762\u0760\x03\x02\x02\x02\u0762\u0761\x03\x02\x02\x02\u0763" +
		"\u0155\x03\x02\x02\x02\u0764\u0765\x07E\x02\x02\u0765\u0766\x07g\x02\x02" +
		"\u0766\u0767\x05\u0152\xAA\x02\u0767\u0768\x07h\x02\x02\u0768\u076A\x03" +
		"\x02\x02\x02\u0769\u0764\x03\x02\x02\x02\u0769\u076A\x03\x02\x02\x02\u076A" +
		"\u076B\x03\x02\x02\x02\u076B\u076E\x07\x16\x02\x02\u076C\u076E\x07M\x02" +
		"\x02\u076D\u0769\x03\x02\x02\x02\u076D\u076C\x03\x02\x02\x02\u076E\u077A" +
		"\x03\x02\x02\x02\u076F\u0771\x07\x84\x02\x02\u0770\u076F\x03\x02\x02\x02" +
		"\u0770\u0771\x03\x02\x02\x02\u0771\u0773\x03\x02\x02\x02\u0772\u0774\x07" +
		"\x88\x02\x02\u0773\u0772\x03\x02\x02\x02\u0773\u0774\x03\x02\x02\x02\u0774" +
		"\u077B\x03\x02\x02\x02\u0775\u0777\x07\x88\x02\x02\u0776\u0775\x03\x02" +
		"\x02\x02\u0776\u0777\x03\x02\x02\x02\u0777\u0778\x03\x02\x02\x02\u0778" +
		"\u0779\x07f\x02\x02\u0779\u077B\x05\xF8}\x02\u077A\u0770\x03\x02\x02\x02" +
		"\u077A\u0776\x03\x02\x02\x02\u077B\u0157\x03\x02\x02\x02\u077C\u077D\x05" +
		"\u015C\xAF\x02\u077D\u077F\x07g\x02\x02\u077E\u0780\x05\u015E\xB0\x02" +
		"\u077F\u077E\x03\x02\x02\x02\u077F\u0780\x03\x02\x02\x02\u0780\u0781\x03" +
		"\x02\x02\x02\u0781\u0782\x07h\x02\x02\u0782\u0159\x03\x02\x02\x02\u0783" +
		"\u078F\x05\u0158\xAD\x02\u0784\u0787\x05\u014C\xA7\x02\u0785\u0787\x05" +
		"\u014E\xA8\x02\u0786\u0784\x03\x02\x02\x02\u0786\u0785\x03\x02\x02\x02" +
		"\u0787\u0788\x03\x02\x02\x02\u0788\u078A\x07g\x02\x02\u0789\u078B\x05" +
		"\u015E\xB0\x02\u078A\u0789\x03\x02\x02\x02\u078A\u078B\x03\x02\x02\x02" +
		"\u078B\u078C\x03\x02\x02\x02\u078C\u078D\x07h\x02\x02\u078D\u078F\x03" +
		"\x02\x02\x02\u078E\u0783\x03\x02\x02\x02\u078E\u0786\x03\x02\x02\x02\u078F" +
		"\u015B\x03\x02\x02\x02\u0790\u0791\x07\x88\x02\x02\u0791\u015D\x03\x02" +
		"\x02\x02\u0792\u0794\x05\u0160\xB1\x02\u0793\u0795\x07\x84\x02\x02\u0794" +
		"\u0793\x03\x02\x02\x02\u0794\u0795\x03\x02\x02\x02\u0795\u079D\x03\x02" +
		"\x02\x02\u0796\u0797\x07{\x02\x02\u0797\u0799\x05\u0160\xB1\x02\u0798" +
		"\u079A\x07\x84\x02\x02\u0799\u0798\x03\x02\x02\x02\u0799\u079A\x03\x02" +
		"\x02\x02\u079A\u079C\x03\x02\x02\x02\u079B\u0796\x03\x02\x02\x02\u079C" +
		"\u079F\x03\x02\x02\x02\u079D\u079B\x03\x02\x02\x02\u079D\u079E\x03\x02" +
		"\x02\x02\u079E\u015F\x03\x02\x02\x02\u079F\u079D\x03\x02\x02\x02\u07A0" +
		"\u07A4\x05\xF8}\x02\u07A1\u07A4\x05^0\x02\u07A2\u07A4\x05\x06\x04\x02" +
		"\u07A3\u07A0\x03\x02\x02\x02\u07A3\u07A1\x03\x02\x02\x02\u07A3\u07A2\x03" +
		"\x02\x02\x02\u07A4\u0161\x03\x02\x02\x02\u07A5\u07A6\x07M\x02\x02\u07A6" +
		"\u07AC\x05\f\x07\x02\u07A7\u07AD\x07\x88\x02\x02\u07A8\u07AA\x07E\x02" +
		"\x02\u07A9\u07A8\x03\x02\x02\x02\u07A9\u07AA\x03\x02\x02\x02\u07AA\u07AB" +
		"\x03\x02\x02\x02\u07AB\u07AD\x05\u0158\xAD\x02\u07AC\u07A7\x03\x02\x02" +
		"\x02\u07AC\u07A9\x03\x02\x02\x02\u07AD\u0163\x03\x02\x02\x02\u07AE\u07B0" +
		"\x07%\x02\x02\u07AF\u07AE\x03\x02\x02\x02\u07AF\u07B0\x03\x02\x02\x02" +
		"\u07B0\u07B1\x03\x02\x02\x02\u07B1\u07B2\x07E\x02\x02\u07B2\u07B3\x05" +
		"|?\x02\u07B3\u0165\x03\x02\x02\x02\u07B4\u07B5\x07E\x02\x02\u07B5\u07B6" +
		"\x07g\x02\x02\u07B6\u07B7\x07h\x02\x02\u07B7\u07B8\x05|?\x02\u07B8\u0167" +
		"\x03\x02\x02\x02\u07B9\u07BA\x07J\x02\x02\u07BA\u07BB\x05f4\x02\u07BB" +
		"\u07BC\x05\u016C\xB7\x02\u07BC\u0169\x03\x02\x02\x02\u07BD\u07BF\x07J" +
		"\x02\x02\u07BE\u07C0\x05\u0144\xA3\x02\u07BF\u07BE\x03\x02\x02\x02\u07BF" +
		"\u07C0\x03\x02\x02\x02\u07C0\u07C1\x03\x02\x02\x02\u07C1\u07C2\x05f4\x02" +
		"\u07C2\u07C3\x05\u016C\xB7\x02\u07C3\u016B\x03\x02\x02\x02\u07C4\u07C6" +
		"\x05\u016E\xB8\x02\u07C5\u07C4\x03\x02\x02\x02\u07C6\u07C7\x03\x02\x02" +
		"\x02\u07C7\u07C5\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u016D" +
		"\x03\x02\x02\x02\u07C9\u07CA\x07\x12\x02\x02\u07CA\u07CB\x07V\x02\x02" +
		"\u07CB\u07CC\x05\u0170\xB9\x02\u07CC\u07CD\x07W\x02\x02\u07CD\u07CE\x05" +
		"f4\x02\u07CE\u016F\x03\x02\x02\x02\u07CF\u07D1\x05\xCEh\x02\u07D0\u07CF" +
		"\x03\x02\x02\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1\u07D2\x03\x02\x02\x02" +
		"\u07D2\u07D5\x05\x9CO\x02\u07D3\u07D6\x05\xE4s\x02\u07D4\u07D6\x05\xFA" +
		"~\x02\u07D5\u07D3\x03\x02\x02\x02\u07D5\u07D4\x03\x02\x02\x02\u07D5\u07D6" +
		"\x03\x02\x02\x02\u07D6\u07D9\x03\x02\x02\x02\u07D7\u07D9\x07\x84\x02\x02" +
		"\u07D8\u07D0\x03\x02\x02\x02\u07D8\u07D7\x03\x02\x02\x02\u07D9\u0171\x03" +
		"\x02\x02\x02\u07DA\u07DC\x07H\x02\x02\u07DB\u07DD\x05X-\x02\u07DC\u07DB" +
		"\x03\x02\x02\x02\u07DC\u07DD\x03\x02\x02\x02\u07DD\u0173\x03\x02\x02\x02" +
		"\u07DE\u07E1\x05\u0176\xBC\x02\u07DF\u07E1\x05\u017A\xBE\x02\u07E0\u07DE" +
		"\x03\x02\x02\x02\u07E0\u07DF\x03\x02\x02\x02\u07E1\u0175\x03\x02\x02\x02" +
		"\u07E2\u07E3\x07H\x02\x02\u07E3\u07E5\x07V\x02\x02\u07E4\u07E6\x05\u0178" +
		"\xBD\x02\u07E5\u07E4\x03\x02\x02\x02\u07E5\u07E6\x03\x02\x02\x02\u07E6" +
		"\u07E7\x03\x02\x02\x02\u07E7\u07E8\x07W\x02\x02\u07E8\u0177\x03\x02\x02" +
		"\x02\u07E9\u07EB\x05\xF8}\x02\u07EA\u07EC\x07\x84\x02\x02\u07EB\u07EA" +
		"\x03\x02\x02\x02\u07EB\u07EC\x03\x02\x02\x02\u07EC\u07F4\x03\x02\x02\x02" +
		"\u07ED\u07EE\x07{\x02\x02\u07EE\u07F0\x05\xF8}\x02\u07EF\u07F1\x07\x84" +
		"\x02\x02\u07F0\u07EF\x03\x02\x02\x02\u07F0\u07F1\x03\x02\x02\x02\u07F1" +
		"\u07F3\x03\x02\x02\x02\u07F2\u07ED\x03\x02\x02\x02\u07F3\u07F6\x03\x02" +
		"\x02\x02\u07F4\u07F2\x03\x02\x02\x02\u07F4\u07F5\x03\x02\x02\x02\u07F5" +
		"\u0179\x03\x02\x02\x02\u07F6\u07F4\x03\x02\x02\x02\u07F7\u07F8\x073\x02" +
		"\x02\u07F8\u07F9\x07V\x02\x02\u07F9\u07FA\x05^0\x02\u07FA\u07FB\x07W\x02" +
		"\x02\u07FB\u07FE\x03\x02\x02\x02\u07FC\u07FE\x073\x02\x02\u07FD\u07F7" +
		"\x03\x02\x02\x02\u07FD\u07FC\x03\x02\x02\x02\u07FE\u017B\x03\x02\x02\x02" +
		"\u07FF\u0802\x072\x02\x02\u0800\u0801\x07X\x02\x02\u0801\u0803\x07Y\x02" +
		"\x02\u0802\u0800\x03\x02\x02\x02\u0802\u0803\x03\x02\x02\x02\u0803\u0835" +
		"\x03\x02\x02\x02\u0804\u0807\x07\x1D\x02\x02\u0805\u0806\x07X\x02\x02" +
		"\u0806\u0808\x07Y\x02\x02\u0807\u0805\x03\x02\x02\x02\u0807\u0808\x03" +
		"\x02\x02\x02\u0808\u0835\x03\x02\x02\x02\u0809\u0835\x07\\\x02\x02\u080A" +
		"\u0835\x07]\x02\x02\u080B\u0835\x07^\x02\x02\u080C\u0835\x07_\x02\x02" +
		"\u080D\u0835\x07`\x02\x02\u080E\u0835\x07a\x02\x02\u080F\u0835\x07b\x02" +
		"\x02\u0810\u0835\x07c\x02\x02\u0811\u0835\x07d\x02\x02\u0812\u0835\x07" +
		"e\x02\x02\u0813\u0835\x07f\x02\x02\u0814\u0835\x07h\x02\x02\u0815\u0835" +
		"\x07g\x02\x02\u0816\u0835\x07v\x02\x02\u0817\u0835\x07i\x02\x02\u0818" +
		"\u0835\x07j\x02\x02\u0819\u0835\x07k\x02\x02\u081A\u0835\x07f\x02\x02" +
		"\u081B\u0835\x07m\x02\x02\u081C\u0835\x07n\x02\x02\u081D\u0835\x07o\x02" +
		"\x02\u081E\u0835\x07p\x02\x02\u081F\u0820\x07g\x02\x02\u0820\u0835\x07" +
		"g\x02\x02\u0821\u0822\x07h\x02\x02\u0822\u0835\x07h\x02\x02\u0823\u0835" +
		"\x07r\x02\x02\u0824\u0835\x07q\x02\x02\u0825\u0835\x07s\x02\x02\u0826" +
		"\u0835\x07t\x02\x02\u0827\u0835\x07u\x02\x02\u0828\u0835\x07v\x02\x02" +
		"\u0829\u0835\x07w\x02\x02\u082A\u0835\x07x\x02\x02\u082B\u0835\x07y\x02" +
		"\x02\u082C\u0835\x07z\x02\x02\u082D\u0835\x07{\x02\x02\u082E\u0835\x07" +
		"|\x02\x02\u082F\u0835\x07}\x02\x02\u0830\u0831\x07V\x02\x02\u0831\u0835" +
		"\x07W\x02\x02\u0832\u0833\x07X\x02\x02\u0833\u0835\x07Y\x02\x02\u0834" +
		"\u07FF\x03\x02\x02\x02\u0834\u0804\x03\x02\x02\x02\u0834\u0809\x03\x02" +
		"\x02\x02\u0834\u080A\x03\x02\x02\x02\u0834\u080B\x03\x02\x02\x02\u0834" +
		"\u080C\x03\x02\x02\x02\u0834\u080D\x03\x02\x02\x02\u0834\u080E\x03\x02" +
		"\x02\x02\u0834\u080F\x03\x02\x02\x02\u0834\u0810\x03\x02\x02\x02\u0834" +
		"\u0811\x03\x02\x02\x02\u0834\u0812\x03\x02\x02\x02\u0834\u0813\x03\x02" +
		"\x02\x02\u0834\u0814\x03\x02\x02\x02\u0834\u0815\x03\x02\x02\x02\u0834" +
		"\u0816\x03\x02\x02\x02\u0834\u0817\x03\x02\x02\x02\u0834\u0818\x03\x02" +
		"\x02\x02\u0834\u0819\x03\x02\x02\x02\u0834\u081A\x03\x02\x02\x02\u0834" +
		"\u081B\x03\x02\x02\x02\u0834\u081C\x03\x02\x02\x02\u0834\u081D\x03\x02" +
		"\x02\x02\u0834\u081E\x03\x02\x02\x02\u0834\u081F\x03\x02\x02\x02\u0834" +
		"\u0821\x03\x02\x02\x02\u0834\u0823\x03\x02\x02\x02\u0834\u0824\x03\x02" +
		"\x02\x02\u0834\u0825\x03\x02\x02\x02\u0834\u0826\x03\x02\x02\x02\u0834" +
		"\u0827\x03\x02\x02\x02\u0834\u0828\x03\x02\x02\x02\u0834\u0829\x03\x02" +
		"\x02\x02\u0834\u082A\x03\x02\x02\x02\u0834\u082B\x03\x02\x02\x02\u0834" +
		"\u082C\x03\x02\x02\x02\u0834\u082D\x03\x02\x02\x02\u0834\u082E\x03\x02" +
		"\x02\x02\u0834\u082F\x03\x02\x02\x02\u0834\u0830\x03\x02\x02\x02\u0834" +
		"\u0832\x03\x02\x02\x02\u0835\u017D\x03\x02\x02\x02\u0836\u0837\t\x16\x02" +
		"\x02\u0837\u017F\x03\x02\x02\x02\u012E\u0181\u0188\u0191\u0195\u019E\u01A1" +
		"\u01A5\u01AD\u01B4\u01B7\u01BC\u01C1\u01C7\u01CF\u01D1\u01DA\u01DE\u01E2" +
		"\u01E5\u01E9\u01EC\u01F3\u01F7\u01FA\u01FD\u0200\u0206\u020A\u020E\u021C" +
		"\u0220\u0226\u022D\u0233\u0237\u023B\u023D\u0245\u024A\u0257\u025E\u026A" +
		"\u0274\u0279\u027D\u0284\u0287\u028F\u0293\u0296\u029D\u02A4\u02A8\u02AD" +
		"\u02B1\u02B4\u02B9\u02C8\u02CF\u02D7\u02DF\u02E8\u02EF\u02F6\u02FE\u0306" +
		"\u030E\u0316\u031E\u0326\u032F\u0337\u0340\u0347\u034F\u0352\u0355\u035B" +
		"\u0361\u0367\u036E\u0377\u037F\u0383\u038A\u038C\u03A0\u03A4\u03AA\u03AF" +
		"\u03B3\u03B6\u03BD\u03C4\u03C8\u03D1\u03DD\u03E8\u03EF\u03F4\u03FE\u0403" +
		"\u040A\u040D\u0412\u0417\u042C\u0431\u0434\u043F\u0445\u044A\u044D\u0452" +
		"\u0455\u0458\u046E\u0474\u047A\u0480\u0483\u0489\u048D\u0491\u0494\u049C" +
		"\u049E\u04A4\u04A7\u04AA\u04AD\u04B1\u04B5\u04BB\u04C5\u04CB\u04D1\u04D6" +
		"\u04DB\u04DF\u04EC\u04F2\u04F6\u04FC\u0501\u0510\u0514\u0519\u051E\u0523" +
		"\u0529\u052C\u0535\u0539\u053E\u0542\u0548\u054F\u0560\u0562\u0569\u056E" +
		"\u0575\u0579\u057D\u0585\u058B\u0591\u0595\u0597\u059B\u05A0\u05A4\u05A7" +
		"\u05AA\u05AD\u05B2\u05B6\u05B9\u05BD\u05C0\u05C2\u05C7\u05CE\u05D4\u05D8" +
		"\u05DE\u05E4\u05E7\u05E9\u05EF\u05F3\u05F9\u0600\u0604\u0606\u060A\u0610" +
		"\u061C\u0620\u0622\u0626\u062B\u062E\u0635\u0639\u063E\u0640\u0644\u0647" +
		"\u064A\u064E\u0653\u065A\u0661\u0666\u066A\u066E\u0673\u0677\u067D\u067F" +
		"\u0685\u068A\u0690\u0694\u0696\u0699\u069D\u06A1\u06A3\u06A5\u06A8\u06B4" +
		"\u06B6\u06B9\u06BC\u06BF\u06C8\u06CF\u06D4\u06D7\u06DA\u06DC\u06DF\u06E2" +
		"\u06E6\u06EB\u06F8\u06FD\u0701\u0705\u070A\u070F\u0713\u0716\u071A\u0725" +
		"\u0729\u0730\u0735\u0739\u073F\u0743\u0747\u0750\u075D\u0762\u0769\u076D" +
		"\u0770\u0773\u0776\u077A\u077F\u0786\u078A\u078E\u0794\u0799\u079D\u07A3" +
		"\u07A9\u07AC\u07AF\u07BF\u07C7\u07D0\u07D5\u07D8\u07DC\u07E0\u07E5\u07EB" +
		"\u07F0\u07F4\u07FD\u0802\u0807\u0834";
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
	public HFormat(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.HFormat, 0); }
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


