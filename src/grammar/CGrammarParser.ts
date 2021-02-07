// Generated from lib/CGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { CGrammarListener } from "./CGrammarListener";
import { CGrammarVisitor } from "./CGrammarVisitor";


export class CGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly Auto = 15;
	public static readonly Break = 16;
	public static readonly Case = 17;
	public static readonly Char = 18;
	public static readonly Const = 19;
	public static readonly Continue = 20;
	public static readonly Default = 21;
	public static readonly Do = 22;
	public static readonly Double = 23;
	public static readonly Else = 24;
	public static readonly Enum = 25;
	public static readonly Extern = 26;
	public static readonly Float = 27;
	public static readonly For = 28;
	public static readonly Goto = 29;
	public static readonly If = 30;
	public static readonly Inline = 31;
	public static readonly Int = 32;
	public static readonly Long = 33;
	public static readonly Register = 34;
	public static readonly Restrict = 35;
	public static readonly Return = 36;
	public static readonly Short = 37;
	public static readonly Signed = 38;
	public static readonly Sizeof = 39;
	public static readonly Static = 40;
	public static readonly Struct = 41;
	public static readonly Switch = 42;
	public static readonly Typedef = 43;
	public static readonly Union = 44;
	public static readonly Unsigned = 45;
	public static readonly Void = 46;
	public static readonly Volatile = 47;
	public static readonly While = 48;
	public static readonly Alignas = 49;
	public static readonly Alignof = 50;
	public static readonly Atomic = 51;
	public static readonly Bool = 52;
	public static readonly Complex = 53;
	public static readonly Generic = 54;
	public static readonly Imaginary = 55;
	public static readonly Noreturn = 56;
	public static readonly StaticAssert = 57;
	public static readonly ThreadLocal = 58;
	public static readonly LeftParen = 59;
	public static readonly RightParen = 60;
	public static readonly LeftBracket = 61;
	public static readonly RightBracket = 62;
	public static readonly LeftBrace = 63;
	public static readonly RightBrace = 64;
	public static readonly Less = 65;
	public static readonly LessEqual = 66;
	public static readonly Greater = 67;
	public static readonly GreaterEqual = 68;
	public static readonly LeftShift = 69;
	public static readonly RightShift = 70;
	public static readonly Plus = 71;
	public static readonly PlusPlus = 72;
	public static readonly Minus = 73;
	public static readonly MinusMinus = 74;
	public static readonly Star = 75;
	public static readonly Div = 76;
	public static readonly Mod = 77;
	public static readonly And = 78;
	public static readonly Or = 79;
	public static readonly AndAnd = 80;
	public static readonly OrOr = 81;
	public static readonly Caret = 82;
	public static readonly Not = 83;
	public static readonly Tilde = 84;
	public static readonly Question = 85;
	public static readonly Colon = 86;
	public static readonly Semi = 87;
	public static readonly Comma = 88;
	public static readonly Assign = 89;
	public static readonly StarAssign = 90;
	public static readonly DivAssign = 91;
	public static readonly ModAssign = 92;
	public static readonly PlusAssign = 93;
	public static readonly MinusAssign = 94;
	public static readonly LeftShiftAssign = 95;
	public static readonly RightShiftAssign = 96;
	public static readonly AndAssign = 97;
	public static readonly XorAssign = 98;
	public static readonly OrAssign = 99;
	public static readonly Equal = 100;
	public static readonly NotEqual = 101;
	public static readonly Arrow = 102;
	public static readonly Dot = 103;
	public static readonly Ellipsis = 104;
	public static readonly Identifier = 105;
	public static readonly Constant = 106;
	public static readonly DigitSequence = 107;
	public static readonly StringLiteral = 108;
	public static readonly ComplexDefine = 109;
	public static readonly IncludeDirective = 110;
	public static readonly AsmBlock = 111;
	public static readonly LineAfterPreprocessing = 112;
	public static readonly LineDirective = 113;
	public static readonly PragmaDirective = 114;
	public static readonly Whitespace = 115;
	public static readonly Newline = 116;
	public static readonly BlockComment = 117;
	public static readonly LineComment = 118;
	public static readonly RULE_primaryExpression = 0;
	public static readonly RULE_genericSelection = 1;
	public static readonly RULE_genericAssocList = 2;
	public static readonly RULE_genericAssociation = 3;
	public static readonly RULE_postfixExpression = 4;
	public static readonly RULE_argumentExpressionList = 5;
	public static readonly RULE_unaryExpression = 6;
	public static readonly RULE_unaryOperator = 7;
	public static readonly RULE_castExpression = 8;
	public static readonly RULE_multiplicativeExpression = 9;
	public static readonly RULE_additiveExpression = 10;
	public static readonly RULE_shiftExpression = 11;
	public static readonly RULE_relationalExpression = 12;
	public static readonly RULE_equalityExpression = 13;
	public static readonly RULE_andExpression = 14;
	public static readonly RULE_exclusiveOrExpression = 15;
	public static readonly RULE_inclusiveOrExpression = 16;
	public static readonly RULE_logicalAndExpression = 17;
	public static readonly RULE_logicalOrExpression = 18;
	public static readonly RULE_conditionalExpression = 19;
	public static readonly RULE_assignmentExpression = 20;
	public static readonly RULE_assignmentOperator = 21;
	public static readonly RULE_expression = 22;
	public static readonly RULE_constantExpression = 23;
	public static readonly RULE_declaration = 24;
	public static readonly RULE_declarationSpecifiers = 25;
	public static readonly RULE_declarationSpecifiers2 = 26;
	public static readonly RULE_declarationSpecifier = 27;
	public static readonly RULE_initDeclaratorList = 28;
	public static readonly RULE_initDeclarator = 29;
	public static readonly RULE_storageClassSpecifier = 30;
	public static readonly RULE_typeSpecifier = 31;
	public static readonly RULE_structOrUnionSpecifier = 32;
	public static readonly RULE_structOrUnion = 33;
	public static readonly RULE_structDeclarationList = 34;
	public static readonly RULE_structDeclaration = 35;
	public static readonly RULE_specifierQualifierList = 36;
	public static readonly RULE_structDeclaratorList = 37;
	public static readonly RULE_structDeclarator = 38;
	public static readonly RULE_enumSpecifier = 39;
	public static readonly RULE_enumeratorList = 40;
	public static readonly RULE_enumerator = 41;
	public static readonly RULE_enumerationConstant = 42;
	public static readonly RULE_atomicTypeSpecifier = 43;
	public static readonly RULE_typeQualifier = 44;
	public static readonly RULE_functionSpecifier = 45;
	public static readonly RULE_alignmentSpecifier = 46;
	public static readonly RULE_declarator = 47;
	public static readonly RULE_directDeclarator = 48;
	public static readonly RULE_gccDeclaratorExtension = 49;
	public static readonly RULE_gccAttributeSpecifier = 50;
	public static readonly RULE_gccAttributeList = 51;
	public static readonly RULE_gccAttribute = 52;
	public static readonly RULE_nestedParenthesesBlock = 53;
	public static readonly RULE_pointer = 54;
	public static readonly RULE_typeQualifierList = 55;
	public static readonly RULE_parameterTypeList = 56;
	public static readonly RULE_parameterList = 57;
	public static readonly RULE_parameterDeclaration = 58;
	public static readonly RULE_identifierList = 59;
	public static readonly RULE_typeName = 60;
	public static readonly RULE_abstractDeclarator = 61;
	public static readonly RULE_directAbstractDeclarator = 62;
	public static readonly RULE_typedefName = 63;
	public static readonly RULE_initializer = 64;
	public static readonly RULE_initializerList = 65;
	public static readonly RULE_designation = 66;
	public static readonly RULE_designatorList = 67;
	public static readonly RULE_designator = 68;
	public static readonly RULE_staticAssertDeclaration = 69;
	public static readonly RULE_statement = 70;
	public static readonly RULE_labeledStatement = 71;
	public static readonly RULE_compoundStatement = 72;
	public static readonly RULE_blockItemList = 73;
	public static readonly RULE_blockItem = 74;
	public static readonly RULE_expressionStatement = 75;
	public static readonly RULE_selectionStatement = 76;
	public static readonly RULE_iterationStatement = 77;
	public static readonly RULE_forCondition = 78;
	public static readonly RULE_forDeclaration = 79;
	public static readonly RULE_forExpression = 80;
	public static readonly RULE_jumpStatement = 81;
	public static readonly RULE_compilationUnit = 82;
	public static readonly RULE_translationUnit = 83;
	public static readonly RULE_externalDeclaration = 84;
	public static readonly RULE_functionDefinition = 85;
	public static readonly RULE_declarationList = 86;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"primaryExpression", "genericSelection", "genericAssocList", "genericAssociation", 
		"postfixExpression", "argumentExpressionList", "unaryExpression", "unaryOperator", 
		"castExpression", "multiplicativeExpression", "additiveExpression", "shiftExpression", 
		"relationalExpression", "equalityExpression", "andExpression", "exclusiveOrExpression", 
		"inclusiveOrExpression", "logicalAndExpression", "logicalOrExpression", 
		"conditionalExpression", "assignmentExpression", "assignmentOperator", 
		"expression", "constantExpression", "declaration", "declarationSpecifiers", 
		"declarationSpecifiers2", "declarationSpecifier", "initDeclaratorList", 
		"initDeclarator", "storageClassSpecifier", "typeSpecifier", "structOrUnionSpecifier", 
		"structOrUnion", "structDeclarationList", "structDeclaration", "specifierQualifierList", 
		"structDeclaratorList", "structDeclarator", "enumSpecifier", "enumeratorList", 
		"enumerator", "enumerationConstant", "atomicTypeSpecifier", "typeQualifier", 
		"functionSpecifier", "alignmentSpecifier", "declarator", "directDeclarator", 
		"gccDeclaratorExtension", "gccAttributeSpecifier", "gccAttributeList", 
		"gccAttribute", "nestedParenthesesBlock", "pointer", "typeQualifierList", 
		"parameterTypeList", "parameterList", "parameterDeclaration", "identifierList", 
		"typeName", "abstractDeclarator", "directAbstractDeclarator", "typedefName", 
		"initializer", "initializerList", "designation", "designatorList", "designator", 
		"staticAssertDeclaration", "statement", "labeledStatement", "compoundStatement", 
		"blockItemList", "blockItem", "expressionStatement", "selectionStatement", 
		"iterationStatement", "forCondition", "forDeclaration", "forExpression", 
		"jumpStatement", "compilationUnit", "translationUnit", "externalDeclaration", 
		"functionDefinition", "declarationList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'__extension__'", "'__builtin_va_arg'", "'__builtin_offsetof'", 
		"'__m128'", "'__m128d'", "'__m128i'", "'__typeof__'", "'__inline__'", 
		"'__stdcall'", "'__declspec'", "'__asm'", "'__attribute__'", "'__asm__'", 
		"'__volatile__'", "'auto'", "'break'", "'case'", "'char'", "'const'", 
		"'continue'", "'default'", "'do'", "'double'", "'else'", "'enum'", "'extern'", 
		"'float'", "'for'", "'goto'", "'if'", "'inline'", "'int'", "'long'", "'register'", 
		"'restrict'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'struct'", "'switch'", "'typedef'", "'union'", "'unsigned'", "'void'", 
		"'volatile'", "'while'", "'_Alignas'", "'_Alignof'", "'_Atomic'", "'_Bool'", 
		"'_Complex'", "'_Generic'", "'_Imaginary'", "'_Noreturn'", "'_Static_assert'", 
		"'_Thread_local'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'<'", "'<='", 
		"'>'", "'>='", "'<<'", "'>>'", "'+'", "'++'", "'-'", "'--'", "'*'", "'/'", 
		"'%'", "'&'", "'|'", "'&&'", "'||'", "'^'", "'!'", "'~'", "'?'", "':'", 
		"';'", "','", "'='", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", 
		"'>>='", "'&='", "'^='", "'|='", "'=='", "'!='", "'->'", "'.'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "Auto", "Break", "Case", "Char", "Const", "Continue", "Default", 
		"Do", "Double", "Else", "Enum", "Extern", "Float", "For", "Goto", "If", 
		"Inline", "Int", "Long", "Register", "Restrict", "Return", "Short", "Signed", 
		"Sizeof", "Static", "Struct", "Switch", "Typedef", "Union", "Unsigned", 
		"Void", "Volatile", "While", "Alignas", "Alignof", "Atomic", "Bool", "Complex", 
		"Generic", "Imaginary", "Noreturn", "StaticAssert", "ThreadLocal", "LeftParen", 
		"RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace", 
		"Less", "LessEqual", "Greater", "GreaterEqual", "LeftShift", "RightShift", 
		"Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", "Mod", "And", 
		"Or", "AndAnd", "OrOr", "Caret", "Not", "Tilde", "Question", "Colon", 
		"Semi", "Comma", "Assign", "StarAssign", "DivAssign", "ModAssign", "PlusAssign", 
		"MinusAssign", "LeftShiftAssign", "RightShiftAssign", "AndAssign", "XorAssign", 
		"OrAssign", "Equal", "NotEqual", "Arrow", "Dot", "Ellipsis", "Identifier", 
		"Constant", "DigitSequence", "StringLiteral", "ComplexDefine", "IncludeDirective", 
		"AsmBlock", "LineAfterPreprocessing", "LineDirective", "PragmaDirective", 
		"Whitespace", "Newline", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CGrammarParser._LITERAL_NAMES, CGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return CGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CGrammarParser.RULE_primaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 174;
				this.match(CGrammarParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 175;
				this.match(CGrammarParser.Constant);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 177;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 176;
						this.match(CGrammarParser.StringLiteral);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 179;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 181;
				this.match(CGrammarParser.LeftParen);
				this.state = 182;
				this.expression(0);
				this.state = 183;
				this.match(CGrammarParser.RightParen);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 185;
				this.genericSelection();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CGrammarParser.T__0) {
					{
					this.state = 186;
					this.match(CGrammarParser.T__0);
					}
				}

				this.state = 189;
				this.match(CGrammarParser.LeftParen);
				this.state = 190;
				this.compoundStatement();
				this.state = 191;
				this.match(CGrammarParser.RightParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 193;
				this.match(CGrammarParser.T__1);
				this.state = 194;
				this.match(CGrammarParser.LeftParen);
				this.state = 195;
				this.unaryExpression();
				this.state = 196;
				this.match(CGrammarParser.Comma);
				this.state = 197;
				this.typeName();
				this.state = 198;
				this.match(CGrammarParser.RightParen);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 200;
				this.match(CGrammarParser.T__2);
				this.state = 201;
				this.match(CGrammarParser.LeftParen);
				this.state = 202;
				this.typeName();
				this.state = 203;
				this.match(CGrammarParser.Comma);
				this.state = 204;
				this.unaryExpression();
				this.state = 205;
				this.match(CGrammarParser.RightParen);
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
	public genericSelection(): GenericSelectionContext {
		let _localctx: GenericSelectionContext = new GenericSelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CGrammarParser.RULE_genericSelection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(CGrammarParser.Generic);
			this.state = 210;
			this.match(CGrammarParser.LeftParen);
			this.state = 211;
			this.assignmentExpression();
			this.state = 212;
			this.match(CGrammarParser.Comma);
			this.state = 213;
			this.genericAssocList(0);
			this.state = 214;
			this.match(CGrammarParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public genericAssocList(): GenericAssocListContext;
	public genericAssocList(_p: number): GenericAssocListContext;
	// @RuleVersion(0)
	public genericAssocList(_p?: number): GenericAssocListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: GenericAssocListContext = new GenericAssocListContext(this._ctx, _parentState);
		let _prevctx: GenericAssocListContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, CGrammarParser.RULE_genericAssocList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 217;
			this.genericAssociation();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 224;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new GenericAssocListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_genericAssocList);
					this.state = 219;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 220;
					this.match(CGrammarParser.Comma);
					this.state = 221;
					this.genericAssociation();
					}
					}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
	public genericAssociation(): GenericAssociationContext {
		let _localctx: GenericAssociationContext = new GenericAssociationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CGrammarParser.RULE_genericAssociation);
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.T__0:
			case CGrammarParser.T__3:
			case CGrammarParser.T__4:
			case CGrammarParser.T__5:
			case CGrammarParser.T__6:
			case CGrammarParser.Char:
			case CGrammarParser.Const:
			case CGrammarParser.Double:
			case CGrammarParser.Enum:
			case CGrammarParser.Float:
			case CGrammarParser.Int:
			case CGrammarParser.Long:
			case CGrammarParser.Restrict:
			case CGrammarParser.Short:
			case CGrammarParser.Signed:
			case CGrammarParser.Struct:
			case CGrammarParser.Union:
			case CGrammarParser.Unsigned:
			case CGrammarParser.Void:
			case CGrammarParser.Volatile:
			case CGrammarParser.Atomic:
			case CGrammarParser.Bool:
			case CGrammarParser.Complex:
			case CGrammarParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 227;
				this.typeName();
				this.state = 228;
				this.match(CGrammarParser.Colon);
				this.state = 229;
				this.assignmentExpression();
				}
				break;
			case CGrammarParser.Default:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				this.match(CGrammarParser.Default);
				this.state = 232;
				this.match(CGrammarParser.Colon);
				this.state = 233;
				this.assignmentExpression();
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
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, CGrammarParser.RULE_postfixExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 237;
				this.primaryExpression();
				}
				break;

			case 2:
				{
				this.state = 238;
				this.match(CGrammarParser.LeftParen);
				this.state = 239;
				this.typeName();
				this.state = 240;
				this.match(CGrammarParser.RightParen);
				this.state = 241;
				this.match(CGrammarParser.LeftBrace);
				this.state = 242;
				this.initializerList(0);
				this.state = 243;
				this.match(CGrammarParser.RightBrace);
				}
				break;

			case 3:
				{
				this.state = 245;
				this.match(CGrammarParser.LeftParen);
				this.state = 246;
				this.typeName();
				this.state = 247;
				this.match(CGrammarParser.RightParen);
				this.state = 248;
				this.match(CGrammarParser.LeftBrace);
				this.state = 249;
				this.initializerList(0);
				this.state = 250;
				this.match(CGrammarParser.Comma);
				this.state = 251;
				this.match(CGrammarParser.RightBrace);
				}
				break;

			case 4:
				{
				this.state = 253;
				this.match(CGrammarParser.T__0);
				this.state = 254;
				this.match(CGrammarParser.LeftParen);
				this.state = 255;
				this.typeName();
				this.state = 256;
				this.match(CGrammarParser.RightParen);
				this.state = 257;
				this.match(CGrammarParser.LeftBrace);
				this.state = 258;
				this.initializerList(0);
				this.state = 259;
				this.match(CGrammarParser.RightBrace);
				}
				break;

			case 5:
				{
				this.state = 261;
				this.match(CGrammarParser.T__0);
				this.state = 262;
				this.match(CGrammarParser.LeftParen);
				this.state = 263;
				this.typeName();
				this.state = 264;
				this.match(CGrammarParser.RightParen);
				this.state = 265;
				this.match(CGrammarParser.LeftBrace);
				this.state = 266;
				this.initializerList(0);
				this.state = 267;
				this.match(CGrammarParser.Comma);
				this.state = 268;
				this.match(CGrammarParser.RightBrace);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 295;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 293;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_postfixExpression);
						this.state = 272;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 273;
						this.match(CGrammarParser.LeftBracket);
						this.state = 274;
						this.expression(0);
						this.state = 275;
						this.match(CGrammarParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_postfixExpression);
						this.state = 277;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 278;
						this.match(CGrammarParser.LeftParen);
						this.state = 280;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
							{
							this.state = 279;
							this.argumentExpressionList(0);
							}
						}

						this.state = 282;
						this.match(CGrammarParser.RightParen);
						}
						break;

					case 3:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_postfixExpression);
						this.state = 283;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 284;
						this.match(CGrammarParser.Dot);
						this.state = 285;
						this.match(CGrammarParser.Identifier);
						}
						break;

					case 4:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_postfixExpression);
						this.state = 286;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 287;
						this.match(CGrammarParser.Arrow);
						this.state = 288;
						this.match(CGrammarParser.Identifier);
						}
						break;

					case 5:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_postfixExpression);
						this.state = 289;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 290;
						this.match(CGrammarParser.PlusPlus);
						}
						break;

					case 6:
						{
						_localctx = new PostfixExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_postfixExpression);
						this.state = 291;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 292;
						this.match(CGrammarParser.MinusMinus);
						}
						break;
					}
					}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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

	public argumentExpressionList(): ArgumentExpressionListContext;
	public argumentExpressionList(_p: number): ArgumentExpressionListContext;
	// @RuleVersion(0)
	public argumentExpressionList(_p?: number): ArgumentExpressionListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this._ctx, _parentState);
		let _prevctx: ArgumentExpressionListContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, CGrammarParser.RULE_argumentExpressionList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 299;
			this.assignmentExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 306;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArgumentExpressionListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_argumentExpressionList);
					this.state = 301;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 302;
					this.match(CGrammarParser.Comma);
					this.state = 303;
					this.assignmentExpression();
					}
					}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CGrammarParser.RULE_unaryExpression);
		try {
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 309;
				this.postfixExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 310;
				this.match(CGrammarParser.PlusPlus);
				this.state = 311;
				this.unaryExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 312;
				this.match(CGrammarParser.MinusMinus);
				this.state = 313;
				this.unaryExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 314;
				this.unaryOperator();
				this.state = 315;
				this.castExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 317;
				this.match(CGrammarParser.Sizeof);
				this.state = 318;
				this.unaryExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 319;
				this.match(CGrammarParser.Sizeof);
				this.state = 320;
				this.match(CGrammarParser.LeftParen);
				this.state = 321;
				this.typeName();
				this.state = 322;
				this.match(CGrammarParser.RightParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 324;
				this.match(CGrammarParser.Alignof);
				this.state = 325;
				this.match(CGrammarParser.LeftParen);
				this.state = 326;
				this.typeName();
				this.state = 327;
				this.match(CGrammarParser.RightParen);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 329;
				this.match(CGrammarParser.AndAnd);
				this.state = 330;
				this.match(CGrammarParser.Identifier);
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
		this.enterRule(_localctx, 14, CGrammarParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			_la = this._input.LA(1);
			if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0))) {
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
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CGrammarParser.RULE_castExpression);
		try {
			this.state = 348;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 335;
				this.match(CGrammarParser.LeftParen);
				this.state = 336;
				this.typeName();
				this.state = 337;
				this.match(CGrammarParser.RightParen);
				this.state = 338;
				this.castExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 340;
				this.match(CGrammarParser.T__0);
				this.state = 341;
				this.match(CGrammarParser.LeftParen);
				this.state = 342;
				this.typeName();
				this.state = 343;
				this.match(CGrammarParser.RightParen);
				this.state = 344;
				this.castExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 346;
				this.unaryExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 347;
				this.match(CGrammarParser.DigitSequence);
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

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, CGrammarParser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 351;
			this.castExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 364;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 362;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_multiplicativeExpression);
						this.state = 353;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 354;
						this.match(CGrammarParser.Star);
						this.state = 355;
						this.castExpression();
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_multiplicativeExpression);
						this.state = 356;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 357;
						this.match(CGrammarParser.Div);
						this.state = 358;
						this.castExpression();
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_multiplicativeExpression);
						this.state = 359;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 360;
						this.match(CGrammarParser.Mod);
						this.state = 361;
						this.castExpression();
						}
						break;
					}
					}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, CGrammarParser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 368;
			this.multiplicativeExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 378;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 376;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_additiveExpression);
						this.state = 370;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 371;
						this.match(CGrammarParser.Plus);
						this.state = 372;
						this.multiplicativeExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_additiveExpression);
						this.state = 373;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 374;
						this.match(CGrammarParser.Minus);
						this.state = 375;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 380;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	// @RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, CGrammarParser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 382;
			this.additiveExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 392;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 390;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
					case 1:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_shiftExpression);
						this.state = 384;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 385;
						this.match(CGrammarParser.LeftShift);
						this.state = 386;
						this.additiveExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_shiftExpression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 388;
						this.match(CGrammarParser.RightShift);
						this.state = 389;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, CGrammarParser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 396;
			this.shiftExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 412;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 410;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_relationalExpression);
						this.state = 398;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 399;
						this.match(CGrammarParser.Less);
						this.state = 400;
						this.shiftExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_relationalExpression);
						this.state = 401;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 402;
						this.match(CGrammarParser.Greater);
						this.state = 403;
						this.shiftExpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_relationalExpression);
						this.state = 404;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 405;
						this.match(CGrammarParser.LessEqual);
						this.state = 406;
						this.shiftExpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_relationalExpression);
						this.state = 407;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 408;
						this.match(CGrammarParser.GreaterEqual);
						this.state = 409;
						this.shiftExpression(0);
						}
						break;
					}
					}
				}
				this.state = 414;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, CGrammarParser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 416;
			this.relationalExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 426;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 424;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_equalityExpression);
						this.state = 418;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 419;
						this.match(CGrammarParser.Equal);
						this.state = 420;
						this.relationalExpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_equalityExpression);
						this.state = 421;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 422;
						this.match(CGrammarParser.NotEqual);
						this.state = 423;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
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

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	// @RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, _parentState);
		let _prevctx: AndExpressionContext = _localctx;
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, CGrammarParser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 430;
			this.equalityExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 437;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_andExpression);
					this.state = 432;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 433;
					this.match(CGrammarParser.And);
					this.state = 434;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 439;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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

	public exclusiveOrExpression(): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(_p: number): ExclusiveOrExpressionContext;
	// @RuleVersion(0)
	public exclusiveOrExpression(_p?: number): ExclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ExclusiveOrExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, CGrammarParser.RULE_exclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 441;
			this.andExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 448;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_exclusiveOrExpression);
					this.state = 443;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 444;
					this.match(CGrammarParser.Caret);
					this.state = 445;
					this.andExpression(0);
					}
					}
				}
				this.state = 450;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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

	public inclusiveOrExpression(): InclusiveOrExpressionContext;
	public inclusiveOrExpression(_p: number): InclusiveOrExpressionContext;
	// @RuleVersion(0)
	public inclusiveOrExpression(_p?: number): InclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: InclusiveOrExpressionContext = _localctx;
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, CGrammarParser.RULE_inclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 452;
			this.exclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 459;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_inclusiveOrExpression);
					this.state = 454;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 455;
					this.match(CGrammarParser.Or);
					this.state = 456;
					this.exclusiveOrExpression(0);
					}
					}
				}
				this.state = 461;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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

	public logicalAndExpression(): LogicalAndExpressionContext;
	public logicalAndExpression(_p: number): LogicalAndExpressionContext;
	// @RuleVersion(0)
	public logicalAndExpression(_p?: number): LogicalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalAndExpressionContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, CGrammarParser.RULE_logicalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 463;
			this.inclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 470;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalAndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_logicalAndExpression);
					this.state = 465;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 466;
					this.match(CGrammarParser.AndAnd);
					this.state = 467;
					this.inclusiveOrExpression(0);
					}
					}
				}
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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

	public logicalOrExpression(): LogicalOrExpressionContext;
	public logicalOrExpression(_p: number): LogicalOrExpressionContext;
	// @RuleVersion(0)
	public logicalOrExpression(_p?: number): LogicalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalOrExpressionContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, CGrammarParser.RULE_logicalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 474;
			this.logicalAndExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 481;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicalOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_logicalOrExpression);
					this.state = 476;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 477;
					this.match(CGrammarParser.OrOr);
					this.state = 478;
					this.logicalAndExpression(0);
					}
					}
				}
				this.state = 483;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CGrammarParser.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.logicalOrExpression(0);
			this.state = 490;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 485;
				this.match(CGrammarParser.Question);
				this.state = 486;
				this.expression(0);
				this.state = 487;
				this.match(CGrammarParser.Colon);
				this.state = 488;
				this.conditionalExpression();
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
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CGrammarParser.RULE_assignmentExpression);
		try {
			this.state = 498;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 492;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 493;
				this.unaryExpression();
				this.state = 494;
				this.assignmentOperator();
				this.state = 495;
				this.assignmentExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 497;
				this.match(CGrammarParser.DigitSequence);
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
		this.enterRule(_localctx, 42, CGrammarParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			_la = this._input.LA(1);
			if (!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (CGrammarParser.Assign - 89)) | (1 << (CGrammarParser.StarAssign - 89)) | (1 << (CGrammarParser.DivAssign - 89)) | (1 << (CGrammarParser.ModAssign - 89)) | (1 << (CGrammarParser.PlusAssign - 89)) | (1 << (CGrammarParser.MinusAssign - 89)) | (1 << (CGrammarParser.LeftShiftAssign - 89)) | (1 << (CGrammarParser.RightShiftAssign - 89)) | (1 << (CGrammarParser.AndAssign - 89)) | (1 << (CGrammarParser.XorAssign - 89)) | (1 << (CGrammarParser.OrAssign - 89)))) !== 0))) {
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 44;
		this.enterRecursionRule(_localctx, 44, CGrammarParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 503;
			this.assignmentExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 510;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_expression);
					this.state = 505;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 506;
					this.match(CGrammarParser.Comma);
					this.state = 507;
					this.assignmentExpression();
					}
					}
				}
				this.state = 512;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CGrammarParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CGrammarParser.RULE_declaration);
		try {
			this.state = 523;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 515;
				this.declarationSpecifiers();
				this.state = 516;
				this.initDeclaratorList(0);
				this.state = 517;
				this.match(CGrammarParser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 519;
				this.declarationSpecifiers();
				this.state = 520;
				this.match(CGrammarParser.Semi);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 522;
				this.staticAssertDeclaration();
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
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		let _localctx: DeclarationSpecifiersContext = new DeclarationSpecifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CGrammarParser.RULE_declarationSpecifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 525;
					this.declarationSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 528;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
	public declarationSpecifiers2(): DeclarationSpecifiers2Context {
		let _localctx: DeclarationSpecifiers2Context = new DeclarationSpecifiers2Context(this._ctx, this.state);
		this.enterRule(_localctx, 52, CGrammarParser.RULE_declarationSpecifiers2);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 530;
					this.declarationSpecifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 533;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
	public declarationSpecifier(): DeclarationSpecifierContext {
		let _localctx: DeclarationSpecifierContext = new DeclarationSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CGrammarParser.RULE_declarationSpecifier);
		try {
			this.state = 540;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 535;
				this.storageClassSpecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 536;
				this.typeSpecifier(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 537;
				this.typeQualifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 538;
				this.functionSpecifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 539;
				this.alignmentSpecifier();
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

	public initDeclaratorList(): InitDeclaratorListContext;
	public initDeclaratorList(_p: number): InitDeclaratorListContext;
	// @RuleVersion(0)
	public initDeclaratorList(_p?: number): InitDeclaratorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitDeclaratorListContext = new InitDeclaratorListContext(this._ctx, _parentState);
		let _prevctx: InitDeclaratorListContext = _localctx;
		let _startState: number = 56;
		this.enterRecursionRule(_localctx, 56, CGrammarParser.RULE_initDeclaratorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 543;
			this.initDeclarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 550;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InitDeclaratorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_initDeclaratorList);
					this.state = 545;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 546;
					this.match(CGrammarParser.Comma);
					this.state = 547;
					this.initDeclarator();
					}
					}
				}
				this.state = 552;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CGrammarParser.RULE_initDeclarator);
		try {
			this.state = 558;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 553;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 554;
				this.declarator();
				this.state = 555;
				this.match(CGrammarParser.Assign);
				this.state = 556;
				this.initializer();
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
	public storageClassSpecifier(): StorageClassSpecifierContext {
		let _localctx: StorageClassSpecifierContext = new StorageClassSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CGrammarParser.RULE_storageClassSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			_la = this._input.LA(1);
			if (!(_la === CGrammarParser.Auto || _la === CGrammarParser.Extern || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CGrammarParser.Register - 34)) | (1 << (CGrammarParser.Static - 34)) | (1 << (CGrammarParser.Typedef - 34)) | (1 << (CGrammarParser.ThreadLocal - 34)))) !== 0))) {
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

	public typeSpecifier(): TypeSpecifierContext;
	public typeSpecifier(_p: number): TypeSpecifierContext;
	// @RuleVersion(0)
	public typeSpecifier(_p?: number): TypeSpecifierContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, _parentState);
		let _prevctx: TypeSpecifierContext = _localctx;
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, CGrammarParser.RULE_typeSpecifier, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.T__3:
			case CGrammarParser.T__4:
			case CGrammarParser.T__5:
			case CGrammarParser.Char:
			case CGrammarParser.Double:
			case CGrammarParser.Float:
			case CGrammarParser.Int:
			case CGrammarParser.Long:
			case CGrammarParser.Short:
			case CGrammarParser.Signed:
			case CGrammarParser.Unsigned:
			case CGrammarParser.Void:
			case CGrammarParser.Bool:
			case CGrammarParser.Complex:
				{
				this.state = 563;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__3) | (1 << CGrammarParser.T__4) | (1 << CGrammarParser.T__5) | (1 << CGrammarParser.Char) | (1 << CGrammarParser.Double) | (1 << CGrammarParser.Float))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CGrammarParser.Int - 32)) | (1 << (CGrammarParser.Long - 32)) | (1 << (CGrammarParser.Short - 32)) | (1 << (CGrammarParser.Signed - 32)) | (1 << (CGrammarParser.Unsigned - 32)) | (1 << (CGrammarParser.Void - 32)) | (1 << (CGrammarParser.Bool - 32)) | (1 << (CGrammarParser.Complex - 32)))) !== 0))) {
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
			case CGrammarParser.T__0:
				{
				this.state = 564;
				this.match(CGrammarParser.T__0);
				this.state = 565;
				this.match(CGrammarParser.LeftParen);
				this.state = 566;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__3) | (1 << CGrammarParser.T__4) | (1 << CGrammarParser.T__5))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 567;
				this.match(CGrammarParser.RightParen);
				}
				break;
			case CGrammarParser.Atomic:
				{
				this.state = 568;
				this.atomicTypeSpecifier();
				}
				break;
			case CGrammarParser.Struct:
			case CGrammarParser.Union:
				{
				this.state = 569;
				this.structOrUnionSpecifier();
				}
				break;
			case CGrammarParser.Enum:
				{
				this.state = 570;
				this.enumSpecifier();
				}
				break;
			case CGrammarParser.Identifier:
				{
				this.state = 571;
				this.typedefName();
				}
				break;
			case CGrammarParser.T__6:
				{
				this.state = 572;
				this.match(CGrammarParser.T__6);
				this.state = 573;
				this.match(CGrammarParser.LeftParen);
				this.state = 574;
				this.constantExpression();
				this.state = 575;
				this.match(CGrammarParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 583;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeSpecifierContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_typeSpecifier);
					this.state = 579;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 580;
					this.pointer();
					}
					}
				}
				this.state = 585;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
	public structOrUnionSpecifier(): StructOrUnionSpecifierContext {
		let _localctx: StructOrUnionSpecifierContext = new StructOrUnionSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CGrammarParser.RULE_structOrUnionSpecifier);
		let _la: number;
		try {
			this.state = 597;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 586;
				this.structOrUnion();
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CGrammarParser.Identifier) {
					{
					this.state = 587;
					this.match(CGrammarParser.Identifier);
					}
				}

				this.state = 590;
				this.match(CGrammarParser.LeftBrace);
				this.state = 591;
				this.structDeclarationList(0);
				this.state = 592;
				this.match(CGrammarParser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 594;
				this.structOrUnion();
				this.state = 595;
				this.match(CGrammarParser.Identifier);
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
	public structOrUnion(): StructOrUnionContext {
		let _localctx: StructOrUnionContext = new StructOrUnionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CGrammarParser.RULE_structOrUnion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			_la = this._input.LA(1);
			if (!(_la === CGrammarParser.Struct || _la === CGrammarParser.Union)) {
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

	public structDeclarationList(): StructDeclarationListContext;
	public structDeclarationList(_p: number): StructDeclarationListContext;
	// @RuleVersion(0)
	public structDeclarationList(_p?: number): StructDeclarationListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: StructDeclarationListContext = new StructDeclarationListContext(this._ctx, _parentState);
		let _prevctx: StructDeclarationListContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, CGrammarParser.RULE_structDeclarationList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 602;
			this.structDeclaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 608;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new StructDeclarationListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_structDeclarationList);
					this.state = 604;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 605;
					this.structDeclaration();
					}
					}
				}
				this.state = 610;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
	public structDeclaration(): StructDeclarationContext {
		let _localctx: StructDeclarationContext = new StructDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CGrammarParser.RULE_structDeclaration);
		let _la: number;
		try {
			this.state = 618;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.T__0:
			case CGrammarParser.T__3:
			case CGrammarParser.T__4:
			case CGrammarParser.T__5:
			case CGrammarParser.T__6:
			case CGrammarParser.Char:
			case CGrammarParser.Const:
			case CGrammarParser.Double:
			case CGrammarParser.Enum:
			case CGrammarParser.Float:
			case CGrammarParser.Int:
			case CGrammarParser.Long:
			case CGrammarParser.Restrict:
			case CGrammarParser.Short:
			case CGrammarParser.Signed:
			case CGrammarParser.Struct:
			case CGrammarParser.Union:
			case CGrammarParser.Unsigned:
			case CGrammarParser.Void:
			case CGrammarParser.Volatile:
			case CGrammarParser.Atomic:
			case CGrammarParser.Bool:
			case CGrammarParser.Complex:
			case CGrammarParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 611;
				this.specifierQualifierList();
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CGrammarParser.LeftParen - 59)) | (1 << (CGrammarParser.Star - 59)) | (1 << (CGrammarParser.Caret - 59)) | (1 << (CGrammarParser.Colon - 59)))) !== 0) || _la === CGrammarParser.Identifier) {
					{
					this.state = 612;
					this.structDeclaratorList(0);
					}
				}

				this.state = 615;
				this.match(CGrammarParser.Semi);
				}
				break;
			case CGrammarParser.StaticAssert:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 617;
				this.staticAssertDeclaration();
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
	public specifierQualifierList(): SpecifierQualifierListContext {
		let _localctx: SpecifierQualifierListContext = new SpecifierQualifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CGrammarParser.RULE_specifierQualifierList);
		try {
			this.state = 628;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 620;
				this.typeSpecifier(0);
				this.state = 622;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 621;
					this.specifierQualifierList();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 624;
				this.typeQualifier();
				this.state = 626;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
				case 1:
					{
					this.state = 625;
					this.specifierQualifierList();
					}
					break;
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

	public structDeclaratorList(): StructDeclaratorListContext;
	public structDeclaratorList(_p: number): StructDeclaratorListContext;
	// @RuleVersion(0)
	public structDeclaratorList(_p?: number): StructDeclaratorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: StructDeclaratorListContext = new StructDeclaratorListContext(this._ctx, _parentState);
		let _prevctx: StructDeclaratorListContext = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, CGrammarParser.RULE_structDeclaratorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 631;
			this.structDeclarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 638;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new StructDeclaratorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_structDeclaratorList);
					this.state = 633;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 634;
					this.match(CGrammarParser.Comma);
					this.state = 635;
					this.structDeclarator();
					}
					}
				}
				this.state = 640;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
	public structDeclarator(): StructDeclaratorContext {
		let _localctx: StructDeclaratorContext = new StructDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CGrammarParser.RULE_structDeclarator);
		let _la: number;
		try {
			this.state = 647;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 641;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CGrammarParser.LeftParen - 59)) | (1 << (CGrammarParser.Star - 59)) | (1 << (CGrammarParser.Caret - 59)))) !== 0) || _la === CGrammarParser.Identifier) {
					{
					this.state = 642;
					this.declarator();
					}
				}

				this.state = 645;
				this.match(CGrammarParser.Colon);
				this.state = 646;
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
	public enumSpecifier(): EnumSpecifierContext {
		let _localctx: EnumSpecifierContext = new EnumSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CGrammarParser.RULE_enumSpecifier);
		let _la: number;
		try {
			this.state = 668;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 649;
				this.match(CGrammarParser.Enum);
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CGrammarParser.Identifier) {
					{
					this.state = 650;
					this.match(CGrammarParser.Identifier);
					}
				}

				this.state = 653;
				this.match(CGrammarParser.LeftBrace);
				this.state = 654;
				this.enumeratorList(0);
				this.state = 655;
				this.match(CGrammarParser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 657;
				this.match(CGrammarParser.Enum);
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CGrammarParser.Identifier) {
					{
					this.state = 658;
					this.match(CGrammarParser.Identifier);
					}
				}

				this.state = 661;
				this.match(CGrammarParser.LeftBrace);
				this.state = 662;
				this.enumeratorList(0);
				this.state = 663;
				this.match(CGrammarParser.Comma);
				this.state = 664;
				this.match(CGrammarParser.RightBrace);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 666;
				this.match(CGrammarParser.Enum);
				this.state = 667;
				this.match(CGrammarParser.Identifier);
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

	public enumeratorList(): EnumeratorListContext;
	public enumeratorList(_p: number): EnumeratorListContext;
	// @RuleVersion(0)
	public enumeratorList(_p?: number): EnumeratorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EnumeratorListContext = new EnumeratorListContext(this._ctx, _parentState);
		let _prevctx: EnumeratorListContext = _localctx;
		let _startState: number = 80;
		this.enterRecursionRule(_localctx, 80, CGrammarParser.RULE_enumeratorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 671;
			this.enumerator();
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
					_localctx = new EnumeratorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_enumeratorList);
					this.state = 673;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 674;
					this.match(CGrammarParser.Comma);
					this.state = 675;
					this.enumerator();
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
	public enumerator(): EnumeratorContext {
		let _localctx: EnumeratorContext = new EnumeratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CGrammarParser.RULE_enumerator);
		try {
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 681;
				this.enumerationConstant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 682;
				this.enumerationConstant();
				this.state = 683;
				this.match(CGrammarParser.Assign);
				this.state = 684;
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
	public enumerationConstant(): EnumerationConstantContext {
		let _localctx: EnumerationConstantContext = new EnumerationConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CGrammarParser.RULE_enumerationConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.match(CGrammarParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atomicTypeSpecifier(): AtomicTypeSpecifierContext {
		let _localctx: AtomicTypeSpecifierContext = new AtomicTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CGrammarParser.RULE_atomicTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.match(CGrammarParser.Atomic);
			this.state = 691;
			this.match(CGrammarParser.LeftParen);
			this.state = 692;
			this.typeName();
			this.state = 693;
			this.match(CGrammarParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeQualifier(): TypeQualifierContext {
		let _localctx: TypeQualifierContext = new TypeQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CGrammarParser.RULE_typeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			_la = this._input.LA(1);
			if (!(_la === CGrammarParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CGrammarParser.Restrict - 35)) | (1 << (CGrammarParser.Volatile - 35)) | (1 << (CGrammarParser.Atomic - 35)))) !== 0))) {
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
		this.enterRule(_localctx, 90, CGrammarParser.RULE_functionSpecifier);
		let _la: number;
		try {
			this.state = 703;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.T__7:
			case CGrammarParser.T__8:
			case CGrammarParser.Inline:
			case CGrammarParser.Noreturn:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 697;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__7) | (1 << CGrammarParser.T__8) | (1 << CGrammarParser.Inline))) !== 0) || _la === CGrammarParser.Noreturn)) {
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
			case CGrammarParser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 698;
				this.gccAttributeSpecifier();
				}
				break;
			case CGrammarParser.T__9:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 699;
				this.match(CGrammarParser.T__9);
				this.state = 700;
				this.match(CGrammarParser.LeftParen);
				this.state = 701;
				this.match(CGrammarParser.Identifier);
				this.state = 702;
				this.match(CGrammarParser.RightParen);
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
	public alignmentSpecifier(): AlignmentSpecifierContext {
		let _localctx: AlignmentSpecifierContext = new AlignmentSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CGrammarParser.RULE_alignmentSpecifier);
		try {
			this.state = 715;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.match(CGrammarParser.Alignas);
				this.state = 706;
				this.match(CGrammarParser.LeftParen);
				this.state = 707;
				this.typeName();
				this.state = 708;
				this.match(CGrammarParser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 710;
				this.match(CGrammarParser.Alignas);
				this.state = 711;
				this.match(CGrammarParser.LeftParen);
				this.state = 712;
				this.constantExpression();
				this.state = 713;
				this.match(CGrammarParser.RightParen);
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
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CGrammarParser.RULE_declarator);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CGrammarParser.Star || _la === CGrammarParser.Caret) {
				{
				this.state = 717;
				this.pointer();
				}
			}

			this.state = 720;
			this.directDeclarator(0);
			this.state = 724;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 721;
					this.gccDeclaratorExtension();
					}
					}
				}
				this.state = 726;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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

	public directDeclarator(): DirectDeclaratorContext;
	public directDeclarator(_p: number): DirectDeclaratorContext;
	// @RuleVersion(0)
	public directDeclarator(_p?: number): DirectDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this._ctx, _parentState);
		let _prevctx: DirectDeclaratorContext = _localctx;
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, CGrammarParser.RULE_directDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 728;
				this.match(CGrammarParser.Identifier);
				}
				break;

			case 2:
				{
				this.state = 729;
				this.match(CGrammarParser.LeftParen);
				this.state = 730;
				this.declarator();
				this.state = 731;
				this.match(CGrammarParser.RightParen);
				}
				break;

			case 3:
				{
				this.state = 733;
				this.match(CGrammarParser.Identifier);
				this.state = 734;
				this.match(CGrammarParser.Colon);
				this.state = 735;
				this.match(CGrammarParser.DigitSequence);
				}
				break;

			case 4:
				{
				this.state = 736;
				this.match(CGrammarParser.LeftParen);
				this.state = 738;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__3) | (1 << CGrammarParser.T__4) | (1 << CGrammarParser.T__5) | (1 << CGrammarParser.T__6) | (1 << CGrammarParser.Char) | (1 << CGrammarParser.Double) | (1 << CGrammarParser.Enum) | (1 << CGrammarParser.Float))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CGrammarParser.Int - 32)) | (1 << (CGrammarParser.Long - 32)) | (1 << (CGrammarParser.Short - 32)) | (1 << (CGrammarParser.Signed - 32)) | (1 << (CGrammarParser.Struct - 32)) | (1 << (CGrammarParser.Union - 32)) | (1 << (CGrammarParser.Unsigned - 32)) | (1 << (CGrammarParser.Void - 32)) | (1 << (CGrammarParser.Atomic - 32)) | (1 << (CGrammarParser.Bool - 32)) | (1 << (CGrammarParser.Complex - 32)))) !== 0) || _la === CGrammarParser.Identifier) {
					{
					this.state = 737;
					this.typeSpecifier(0);
					}
				}

				this.state = 740;
				this.pointer();
				this.state = 741;
				this.directDeclarator(0);
				this.state = 742;
				this.match(CGrammarParser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 791;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 789;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
					case 1:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directDeclarator);
						this.state = 746;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 747;
						this.match(CGrammarParser.LeftBracket);
						this.state = 749;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CGrammarParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CGrammarParser.Restrict - 35)) | (1 << (CGrammarParser.Volatile - 35)) | (1 << (CGrammarParser.Atomic - 35)))) !== 0)) {
							{
							this.state = 748;
							this.typeQualifierList(0);
							}
						}

						this.state = 752;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
							{
							this.state = 751;
							this.assignmentExpression();
							}
						}

						this.state = 754;
						this.match(CGrammarParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directDeclarator);
						this.state = 755;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 756;
						this.match(CGrammarParser.LeftBracket);
						this.state = 757;
						this.match(CGrammarParser.Static);
						this.state = 759;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CGrammarParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CGrammarParser.Restrict - 35)) | (1 << (CGrammarParser.Volatile - 35)) | (1 << (CGrammarParser.Atomic - 35)))) !== 0)) {
							{
							this.state = 758;
							this.typeQualifierList(0);
							}
						}

						this.state = 761;
						this.assignmentExpression();
						this.state = 762;
						this.match(CGrammarParser.RightBracket);
						}
						break;

					case 3:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directDeclarator);
						this.state = 764;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 765;
						this.match(CGrammarParser.LeftBracket);
						this.state = 766;
						this.typeQualifierList(0);
						this.state = 767;
						this.match(CGrammarParser.Static);
						this.state = 768;
						this.assignmentExpression();
						this.state = 769;
						this.match(CGrammarParser.RightBracket);
						}
						break;

					case 4:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directDeclarator);
						this.state = 771;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 772;
						this.match(CGrammarParser.LeftBracket);
						this.state = 774;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CGrammarParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CGrammarParser.Restrict - 35)) | (1 << (CGrammarParser.Volatile - 35)) | (1 << (CGrammarParser.Atomic - 35)))) !== 0)) {
							{
							this.state = 773;
							this.typeQualifierList(0);
							}
						}

						this.state = 776;
						this.match(CGrammarParser.Star);
						this.state = 777;
						this.match(CGrammarParser.RightBracket);
						}
						break;

					case 5:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directDeclarator);
						this.state = 778;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 779;
						this.match(CGrammarParser.LeftParen);
						this.state = 780;
						this.parameterTypeList();
						this.state = 781;
						this.match(CGrammarParser.RightParen);
						}
						break;

					case 6:
						{
						_localctx = new DirectDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directDeclarator);
						this.state = 783;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 784;
						this.match(CGrammarParser.LeftParen);
						this.state = 786;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CGrammarParser.Identifier) {
							{
							this.state = 785;
							this.identifierList(0);
							}
						}

						this.state = 788;
						this.match(CGrammarParser.RightParen);
						}
						break;
					}
					}
				}
				this.state = 793;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext {
		let _localctx: GccDeclaratorExtensionContext = new GccDeclaratorExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CGrammarParser.RULE_gccDeclaratorExtension);
		let _la: number;
		try {
			this.state = 803;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 794;
				this.match(CGrammarParser.T__10);
				this.state = 795;
				this.match(CGrammarParser.LeftParen);
				this.state = 797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 796;
					this.match(CGrammarParser.StringLiteral);
					}
					}
					this.state = 799;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CGrammarParser.StringLiteral);
				this.state = 801;
				this.match(CGrammarParser.RightParen);
				}
				break;
			case CGrammarParser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 802;
				this.gccAttributeSpecifier();
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
	public gccAttributeSpecifier(): GccAttributeSpecifierContext {
		let _localctx: GccAttributeSpecifierContext = new GccAttributeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CGrammarParser.RULE_gccAttributeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(CGrammarParser.T__11);
			this.state = 806;
			this.match(CGrammarParser.LeftParen);
			this.state = 807;
			this.match(CGrammarParser.LeftParen);
			this.state = 808;
			this.gccAttributeList();
			this.state = 809;
			this.match(CGrammarParser.RightParen);
			this.state = 810;
			this.match(CGrammarParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gccAttributeList(): GccAttributeListContext {
		let _localctx: GccAttributeListContext = new GccAttributeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CGrammarParser.RULE_gccAttributeList);
		let _la: number;
		try {
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 812;
				this.gccAttribute();
				this.state = 817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CGrammarParser.Comma) {
					{
					{
					this.state = 813;
					this.match(CGrammarParser.Comma);
					this.state = 814;
					this.gccAttribute();
					}
					}
					this.state = 819;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public gccAttribute(): GccAttributeContext {
		let _localctx: GccAttributeContext = new GccAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CGrammarParser.RULE_gccAttribute);
		let _la: number;
		try {
			this.state = 832;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.T__0:
			case CGrammarParser.T__1:
			case CGrammarParser.T__2:
			case CGrammarParser.T__3:
			case CGrammarParser.T__4:
			case CGrammarParser.T__5:
			case CGrammarParser.T__6:
			case CGrammarParser.T__7:
			case CGrammarParser.T__8:
			case CGrammarParser.T__9:
			case CGrammarParser.T__10:
			case CGrammarParser.T__11:
			case CGrammarParser.T__12:
			case CGrammarParser.T__13:
			case CGrammarParser.Auto:
			case CGrammarParser.Break:
			case CGrammarParser.Case:
			case CGrammarParser.Char:
			case CGrammarParser.Const:
			case CGrammarParser.Continue:
			case CGrammarParser.Default:
			case CGrammarParser.Do:
			case CGrammarParser.Double:
			case CGrammarParser.Else:
			case CGrammarParser.Enum:
			case CGrammarParser.Extern:
			case CGrammarParser.Float:
			case CGrammarParser.For:
			case CGrammarParser.Goto:
			case CGrammarParser.If:
			case CGrammarParser.Inline:
			case CGrammarParser.Int:
			case CGrammarParser.Long:
			case CGrammarParser.Register:
			case CGrammarParser.Restrict:
			case CGrammarParser.Return:
			case CGrammarParser.Short:
			case CGrammarParser.Signed:
			case CGrammarParser.Sizeof:
			case CGrammarParser.Static:
			case CGrammarParser.Struct:
			case CGrammarParser.Switch:
			case CGrammarParser.Typedef:
			case CGrammarParser.Union:
			case CGrammarParser.Unsigned:
			case CGrammarParser.Void:
			case CGrammarParser.Volatile:
			case CGrammarParser.While:
			case CGrammarParser.Alignas:
			case CGrammarParser.Alignof:
			case CGrammarParser.Atomic:
			case CGrammarParser.Bool:
			case CGrammarParser.Complex:
			case CGrammarParser.Generic:
			case CGrammarParser.Imaginary:
			case CGrammarParser.Noreturn:
			case CGrammarParser.StaticAssert:
			case CGrammarParser.ThreadLocal:
			case CGrammarParser.LeftBracket:
			case CGrammarParser.RightBracket:
			case CGrammarParser.LeftBrace:
			case CGrammarParser.RightBrace:
			case CGrammarParser.Less:
			case CGrammarParser.LessEqual:
			case CGrammarParser.Greater:
			case CGrammarParser.GreaterEqual:
			case CGrammarParser.LeftShift:
			case CGrammarParser.RightShift:
			case CGrammarParser.Plus:
			case CGrammarParser.PlusPlus:
			case CGrammarParser.Minus:
			case CGrammarParser.MinusMinus:
			case CGrammarParser.Star:
			case CGrammarParser.Div:
			case CGrammarParser.Mod:
			case CGrammarParser.And:
			case CGrammarParser.Or:
			case CGrammarParser.AndAnd:
			case CGrammarParser.OrOr:
			case CGrammarParser.Caret:
			case CGrammarParser.Not:
			case CGrammarParser.Tilde:
			case CGrammarParser.Question:
			case CGrammarParser.Colon:
			case CGrammarParser.Semi:
			case CGrammarParser.Assign:
			case CGrammarParser.StarAssign:
			case CGrammarParser.DivAssign:
			case CGrammarParser.ModAssign:
			case CGrammarParser.PlusAssign:
			case CGrammarParser.MinusAssign:
			case CGrammarParser.LeftShiftAssign:
			case CGrammarParser.RightShiftAssign:
			case CGrammarParser.AndAssign:
			case CGrammarParser.XorAssign:
			case CGrammarParser.OrAssign:
			case CGrammarParser.Equal:
			case CGrammarParser.NotEqual:
			case CGrammarParser.Arrow:
			case CGrammarParser.Dot:
			case CGrammarParser.Ellipsis:
			case CGrammarParser.Identifier:
			case CGrammarParser.Constant:
			case CGrammarParser.DigitSequence:
			case CGrammarParser.StringLiteral:
			case CGrammarParser.ComplexDefine:
			case CGrammarParser.IncludeDirective:
			case CGrammarParser.AsmBlock:
			case CGrammarParser.LineAfterPreprocessing:
			case CGrammarParser.LineDirective:
			case CGrammarParser.PragmaDirective:
			case CGrammarParser.Whitespace:
			case CGrammarParser.Newline:
			case CGrammarParser.BlockComment:
			case CGrammarParser.LineComment:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 823;
				_la = this._input.LA(1);
				if (_la <= 0 || (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CGrammarParser.LeftParen - 59)) | (1 << (CGrammarParser.RightParen - 59)) | (1 << (CGrammarParser.Comma - 59)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CGrammarParser.LeftParen) {
					{
					this.state = 824;
					this.match(CGrammarParser.LeftParen);
					this.state = 826;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
						{
						this.state = 825;
						this.argumentExpressionList(0);
						}
					}

					this.state = 828;
					this.match(CGrammarParser.RightParen);
					}
				}

				}
				break;
			case CGrammarParser.RightParen:
			case CGrammarParser.Comma:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public nestedParenthesesBlock(): NestedParenthesesBlockContext {
		let _localctx: NestedParenthesesBlockContext = new NestedParenthesesBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CGrammarParser.RULE_nestedParenthesesBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2) | (1 << CGrammarParser.T__3) | (1 << CGrammarParser.T__4) | (1 << CGrammarParser.T__5) | (1 << CGrammarParser.T__6) | (1 << CGrammarParser.T__7) | (1 << CGrammarParser.T__8) | (1 << CGrammarParser.T__9) | (1 << CGrammarParser.T__10) | (1 << CGrammarParser.T__11) | (1 << CGrammarParser.T__12) | (1 << CGrammarParser.T__13) | (1 << CGrammarParser.Auto) | (1 << CGrammarParser.Break) | (1 << CGrammarParser.Case) | (1 << CGrammarParser.Char) | (1 << CGrammarParser.Const) | (1 << CGrammarParser.Continue) | (1 << CGrammarParser.Default) | (1 << CGrammarParser.Do) | (1 << CGrammarParser.Double) | (1 << CGrammarParser.Else) | (1 << CGrammarParser.Enum) | (1 << CGrammarParser.Extern) | (1 << CGrammarParser.Float) | (1 << CGrammarParser.For) | (1 << CGrammarParser.Goto) | (1 << CGrammarParser.If) | (1 << CGrammarParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CGrammarParser.Int - 32)) | (1 << (CGrammarParser.Long - 32)) | (1 << (CGrammarParser.Register - 32)) | (1 << (CGrammarParser.Restrict - 32)) | (1 << (CGrammarParser.Return - 32)) | (1 << (CGrammarParser.Short - 32)) | (1 << (CGrammarParser.Signed - 32)) | (1 << (CGrammarParser.Sizeof - 32)) | (1 << (CGrammarParser.Static - 32)) | (1 << (CGrammarParser.Struct - 32)) | (1 << (CGrammarParser.Switch - 32)) | (1 << (CGrammarParser.Typedef - 32)) | (1 << (CGrammarParser.Union - 32)) | (1 << (CGrammarParser.Unsigned - 32)) | (1 << (CGrammarParser.Void - 32)) | (1 << (CGrammarParser.Volatile - 32)) | (1 << (CGrammarParser.While - 32)) | (1 << (CGrammarParser.Alignas - 32)) | (1 << (CGrammarParser.Alignof - 32)) | (1 << (CGrammarParser.Atomic - 32)) | (1 << (CGrammarParser.Bool - 32)) | (1 << (CGrammarParser.Complex - 32)) | (1 << (CGrammarParser.Generic - 32)) | (1 << (CGrammarParser.Imaginary - 32)) | (1 << (CGrammarParser.Noreturn - 32)) | (1 << (CGrammarParser.StaticAssert - 32)) | (1 << (CGrammarParser.ThreadLocal - 32)) | (1 << (CGrammarParser.LeftParen - 32)) | (1 << (CGrammarParser.LeftBracket - 32)) | (1 << (CGrammarParser.RightBracket - 32)) | (1 << (CGrammarParser.LeftBrace - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CGrammarParser.RightBrace - 64)) | (1 << (CGrammarParser.Less - 64)) | (1 << (CGrammarParser.LessEqual - 64)) | (1 << (CGrammarParser.Greater - 64)) | (1 << (CGrammarParser.GreaterEqual - 64)) | (1 << (CGrammarParser.LeftShift - 64)) | (1 << (CGrammarParser.RightShift - 64)) | (1 << (CGrammarParser.Plus - 64)) | (1 << (CGrammarParser.PlusPlus - 64)) | (1 << (CGrammarParser.Minus - 64)) | (1 << (CGrammarParser.MinusMinus - 64)) | (1 << (CGrammarParser.Star - 64)) | (1 << (CGrammarParser.Div - 64)) | (1 << (CGrammarParser.Mod - 64)) | (1 << (CGrammarParser.And - 64)) | (1 << (CGrammarParser.Or - 64)) | (1 << (CGrammarParser.AndAnd - 64)) | (1 << (CGrammarParser.OrOr - 64)) | (1 << (CGrammarParser.Caret - 64)) | (1 << (CGrammarParser.Not - 64)) | (1 << (CGrammarParser.Tilde - 64)) | (1 << (CGrammarParser.Question - 64)) | (1 << (CGrammarParser.Colon - 64)) | (1 << (CGrammarParser.Semi - 64)) | (1 << (CGrammarParser.Comma - 64)) | (1 << (CGrammarParser.Assign - 64)) | (1 << (CGrammarParser.StarAssign - 64)) | (1 << (CGrammarParser.DivAssign - 64)) | (1 << (CGrammarParser.ModAssign - 64)) | (1 << (CGrammarParser.PlusAssign - 64)) | (1 << (CGrammarParser.MinusAssign - 64)) | (1 << (CGrammarParser.LeftShiftAssign - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CGrammarParser.RightShiftAssign - 96)) | (1 << (CGrammarParser.AndAssign - 96)) | (1 << (CGrammarParser.XorAssign - 96)) | (1 << (CGrammarParser.OrAssign - 96)) | (1 << (CGrammarParser.Equal - 96)) | (1 << (CGrammarParser.NotEqual - 96)) | (1 << (CGrammarParser.Arrow - 96)) | (1 << (CGrammarParser.Dot - 96)) | (1 << (CGrammarParser.Ellipsis - 96)) | (1 << (CGrammarParser.Identifier - 96)) | (1 << (CGrammarParser.Constant - 96)) | (1 << (CGrammarParser.DigitSequence - 96)) | (1 << (CGrammarParser.StringLiteral - 96)) | (1 << (CGrammarParser.ComplexDefine - 96)) | (1 << (CGrammarParser.IncludeDirective - 96)) | (1 << (CGrammarParser.AsmBlock - 96)) | (1 << (CGrammarParser.LineAfterPreprocessing - 96)) | (1 << (CGrammarParser.LineDirective - 96)) | (1 << (CGrammarParser.PragmaDirective - 96)) | (1 << (CGrammarParser.Whitespace - 96)) | (1 << (CGrammarParser.Newline - 96)) | (1 << (CGrammarParser.BlockComment - 96)) | (1 << (CGrammarParser.LineComment - 96)))) !== 0)) {
				{
				this.state = 839;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CGrammarParser.T__0:
				case CGrammarParser.T__1:
				case CGrammarParser.T__2:
				case CGrammarParser.T__3:
				case CGrammarParser.T__4:
				case CGrammarParser.T__5:
				case CGrammarParser.T__6:
				case CGrammarParser.T__7:
				case CGrammarParser.T__8:
				case CGrammarParser.T__9:
				case CGrammarParser.T__10:
				case CGrammarParser.T__11:
				case CGrammarParser.T__12:
				case CGrammarParser.T__13:
				case CGrammarParser.Auto:
				case CGrammarParser.Break:
				case CGrammarParser.Case:
				case CGrammarParser.Char:
				case CGrammarParser.Const:
				case CGrammarParser.Continue:
				case CGrammarParser.Default:
				case CGrammarParser.Do:
				case CGrammarParser.Double:
				case CGrammarParser.Else:
				case CGrammarParser.Enum:
				case CGrammarParser.Extern:
				case CGrammarParser.Float:
				case CGrammarParser.For:
				case CGrammarParser.Goto:
				case CGrammarParser.If:
				case CGrammarParser.Inline:
				case CGrammarParser.Int:
				case CGrammarParser.Long:
				case CGrammarParser.Register:
				case CGrammarParser.Restrict:
				case CGrammarParser.Return:
				case CGrammarParser.Short:
				case CGrammarParser.Signed:
				case CGrammarParser.Sizeof:
				case CGrammarParser.Static:
				case CGrammarParser.Struct:
				case CGrammarParser.Switch:
				case CGrammarParser.Typedef:
				case CGrammarParser.Union:
				case CGrammarParser.Unsigned:
				case CGrammarParser.Void:
				case CGrammarParser.Volatile:
				case CGrammarParser.While:
				case CGrammarParser.Alignas:
				case CGrammarParser.Alignof:
				case CGrammarParser.Atomic:
				case CGrammarParser.Bool:
				case CGrammarParser.Complex:
				case CGrammarParser.Generic:
				case CGrammarParser.Imaginary:
				case CGrammarParser.Noreturn:
				case CGrammarParser.StaticAssert:
				case CGrammarParser.ThreadLocal:
				case CGrammarParser.LeftBracket:
				case CGrammarParser.RightBracket:
				case CGrammarParser.LeftBrace:
				case CGrammarParser.RightBrace:
				case CGrammarParser.Less:
				case CGrammarParser.LessEqual:
				case CGrammarParser.Greater:
				case CGrammarParser.GreaterEqual:
				case CGrammarParser.LeftShift:
				case CGrammarParser.RightShift:
				case CGrammarParser.Plus:
				case CGrammarParser.PlusPlus:
				case CGrammarParser.Minus:
				case CGrammarParser.MinusMinus:
				case CGrammarParser.Star:
				case CGrammarParser.Div:
				case CGrammarParser.Mod:
				case CGrammarParser.And:
				case CGrammarParser.Or:
				case CGrammarParser.AndAnd:
				case CGrammarParser.OrOr:
				case CGrammarParser.Caret:
				case CGrammarParser.Not:
				case CGrammarParser.Tilde:
				case CGrammarParser.Question:
				case CGrammarParser.Colon:
				case CGrammarParser.Semi:
				case CGrammarParser.Comma:
				case CGrammarParser.Assign:
				case CGrammarParser.StarAssign:
				case CGrammarParser.DivAssign:
				case CGrammarParser.ModAssign:
				case CGrammarParser.PlusAssign:
				case CGrammarParser.MinusAssign:
				case CGrammarParser.LeftShiftAssign:
				case CGrammarParser.RightShiftAssign:
				case CGrammarParser.AndAssign:
				case CGrammarParser.XorAssign:
				case CGrammarParser.OrAssign:
				case CGrammarParser.Equal:
				case CGrammarParser.NotEqual:
				case CGrammarParser.Arrow:
				case CGrammarParser.Dot:
				case CGrammarParser.Ellipsis:
				case CGrammarParser.Identifier:
				case CGrammarParser.Constant:
				case CGrammarParser.DigitSequence:
				case CGrammarParser.StringLiteral:
				case CGrammarParser.ComplexDefine:
				case CGrammarParser.IncludeDirective:
				case CGrammarParser.AsmBlock:
				case CGrammarParser.LineAfterPreprocessing:
				case CGrammarParser.LineDirective:
				case CGrammarParser.PragmaDirective:
				case CGrammarParser.Whitespace:
				case CGrammarParser.Newline:
				case CGrammarParser.BlockComment:
				case CGrammarParser.LineComment:
					{
					this.state = 834;
					_la = this._input.LA(1);
					if (_la <= 0 || (_la === CGrammarParser.LeftParen || _la === CGrammarParser.RightParen)) {
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
				case CGrammarParser.LeftParen:
					{
					this.state = 835;
					this.match(CGrammarParser.LeftParen);
					this.state = 836;
					this.nestedParenthesesBlock();
					this.state = 837;
					this.match(CGrammarParser.RightParen);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 843;
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
	public pointer(): PointerContext {
		let _localctx: PointerContext = new PointerContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CGrammarParser.RULE_pointer);
		let _la: number;
		try {
			this.state = 862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 844;
				this.match(CGrammarParser.Star);
				this.state = 846;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 845;
					this.typeQualifierList(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 848;
				this.match(CGrammarParser.Star);
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CGrammarParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CGrammarParser.Restrict - 35)) | (1 << (CGrammarParser.Volatile - 35)) | (1 << (CGrammarParser.Atomic - 35)))) !== 0)) {
					{
					this.state = 849;
					this.typeQualifierList(0);
					}
				}

				this.state = 852;
				this.pointer();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 853;
				this.match(CGrammarParser.Caret);
				this.state = 855;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 854;
					this.typeQualifierList(0);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 857;
				this.match(CGrammarParser.Caret);
				this.state = 859;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CGrammarParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CGrammarParser.Restrict - 35)) | (1 << (CGrammarParser.Volatile - 35)) | (1 << (CGrammarParser.Atomic - 35)))) !== 0)) {
					{
					this.state = 858;
					this.typeQualifierList(0);
					}
				}

				this.state = 861;
				this.pointer();
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

	public typeQualifierList(): TypeQualifierListContext;
	public typeQualifierList(_p: number): TypeQualifierListContext;
	// @RuleVersion(0)
	public typeQualifierList(_p?: number): TypeQualifierListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeQualifierListContext = new TypeQualifierListContext(this._ctx, _parentState);
		let _prevctx: TypeQualifierListContext = _localctx;
		let _startState: number = 110;
		this.enterRecursionRule(_localctx, 110, CGrammarParser.RULE_typeQualifierList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 865;
			this.typeQualifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 871;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeQualifierListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_typeQualifierList);
					this.state = 867;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 868;
					this.typeQualifier();
					}
					}
				}
				this.state = 873;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
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
	public parameterTypeList(): ParameterTypeListContext {
		let _localctx: ParameterTypeListContext = new ParameterTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CGrammarParser.RULE_parameterTypeList);
		try {
			this.state = 879;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 874;
				this.parameterList(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 875;
				this.parameterList(0);
				this.state = 876;
				this.match(CGrammarParser.Comma);
				this.state = 877;
				this.match(CGrammarParser.Ellipsis);
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

	public parameterList(): ParameterListContext;
	public parameterList(_p: number): ParameterListContext;
	// @RuleVersion(0)
	public parameterList(_p?: number): ParameterListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, _parentState);
		let _prevctx: ParameterListContext = _localctx;
		let _startState: number = 114;
		this.enterRecursionRule(_localctx, 114, CGrammarParser.RULE_parameterList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 882;
			this.parameterDeclaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 889;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ParameterListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_parameterList);
					this.state = 884;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 885;
					this.match(CGrammarParser.Comma);
					this.state = 886;
					this.parameterDeclaration();
					}
					}
				}
				this.state = 891;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
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
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CGrammarParser.RULE_parameterDeclaration);
		try {
			this.state = 899;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 892;
				this.declarationSpecifiers();
				this.state = 893;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 895;
				this.declarationSpecifiers2();
				this.state = 897;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
				case 1:
					{
					this.state = 896;
					this.abstractDeclarator();
					}
					break;
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

	public identifierList(): IdentifierListContext;
	public identifierList(_p: number): IdentifierListContext;
	// @RuleVersion(0)
	public identifierList(_p?: number): IdentifierListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, _parentState);
		let _prevctx: IdentifierListContext = _localctx;
		let _startState: number = 118;
		this.enterRecursionRule(_localctx, 118, CGrammarParser.RULE_identifierList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 902;
			this.match(CGrammarParser.Identifier);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 909;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new IdentifierListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_identifierList);
					this.state = 904;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 905;
					this.match(CGrammarParser.Comma);
					this.state = 906;
					this.match(CGrammarParser.Identifier);
					}
					}
				}
				this.state = 911;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
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
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CGrammarParser.RULE_typeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 912;
			this.specifierQualifierList();
			this.state = 914;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CGrammarParser.LeftParen - 59)) | (1 << (CGrammarParser.LeftBracket - 59)) | (1 << (CGrammarParser.Star - 59)) | (1 << (CGrammarParser.Caret - 59)))) !== 0)) {
				{
				this.state = 913;
				this.abstractDeclarator();
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
	public abstractDeclarator(): AbstractDeclaratorContext {
		let _localctx: AbstractDeclaratorContext = new AbstractDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CGrammarParser.RULE_abstractDeclarator);
		let _la: number;
		try {
			let _alt: number;
			this.state = 927;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.pointer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CGrammarParser.Star || _la === CGrammarParser.Caret) {
					{
					this.state = 917;
					this.pointer();
					}
				}

				this.state = 920;
				this.directAbstractDeclarator(0);
				this.state = 924;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 921;
						this.gccDeclaratorExtension();
						}
						}
					}
					this.state = 926;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
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

	public directAbstractDeclarator(): DirectAbstractDeclaratorContext;
	public directAbstractDeclarator(_p: number): DirectAbstractDeclaratorContext;
	// @RuleVersion(0)
	public directAbstractDeclarator(_p?: number): DirectAbstractDeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DirectAbstractDeclaratorContext = new DirectAbstractDeclaratorContext(this._ctx, _parentState);
		let _prevctx: DirectAbstractDeclaratorContext = _localctx;
		let _startState: number = 124;
		this.enterRecursionRule(_localctx, 124, CGrammarParser.RULE_directAbstractDeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 975;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 930;
				this.match(CGrammarParser.LeftParen);
				this.state = 931;
				this.abstractDeclarator();
				this.state = 932;
				this.match(CGrammarParser.RightParen);
				this.state = 936;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 933;
						this.gccDeclaratorExtension();
						}
						}
					}
					this.state = 938;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 939;
				this.match(CGrammarParser.LeftBracket);
				this.state = 941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CGrammarParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CGrammarParser.Restrict - 35)) | (1 << (CGrammarParser.Volatile - 35)) | (1 << (CGrammarParser.Atomic - 35)))) !== 0)) {
					{
					this.state = 940;
					this.typeQualifierList(0);
					}
				}

				this.state = 944;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 943;
					this.assignmentExpression();
					}
				}

				this.state = 946;
				this.match(CGrammarParser.RightBracket);
				}
				break;

			case 3:
				{
				this.state = 947;
				this.match(CGrammarParser.LeftBracket);
				this.state = 948;
				this.match(CGrammarParser.Static);
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CGrammarParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CGrammarParser.Restrict - 35)) | (1 << (CGrammarParser.Volatile - 35)) | (1 << (CGrammarParser.Atomic - 35)))) !== 0)) {
					{
					this.state = 949;
					this.typeQualifierList(0);
					}
				}

				this.state = 952;
				this.assignmentExpression();
				this.state = 953;
				this.match(CGrammarParser.RightBracket);
				}
				break;

			case 4:
				{
				this.state = 955;
				this.match(CGrammarParser.LeftBracket);
				this.state = 956;
				this.typeQualifierList(0);
				this.state = 957;
				this.match(CGrammarParser.Static);
				this.state = 958;
				this.assignmentExpression();
				this.state = 959;
				this.match(CGrammarParser.RightBracket);
				}
				break;

			case 5:
				{
				this.state = 961;
				this.match(CGrammarParser.LeftBracket);
				this.state = 962;
				this.match(CGrammarParser.Star);
				this.state = 963;
				this.match(CGrammarParser.RightBracket);
				}
				break;

			case 6:
				{
				this.state = 964;
				this.match(CGrammarParser.LeftParen);
				this.state = 966;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__3) | (1 << CGrammarParser.T__4) | (1 << CGrammarParser.T__5) | (1 << CGrammarParser.T__6) | (1 << CGrammarParser.T__7) | (1 << CGrammarParser.T__8) | (1 << CGrammarParser.T__9) | (1 << CGrammarParser.T__11) | (1 << CGrammarParser.Auto) | (1 << CGrammarParser.Char) | (1 << CGrammarParser.Const) | (1 << CGrammarParser.Double) | (1 << CGrammarParser.Enum) | (1 << CGrammarParser.Extern) | (1 << CGrammarParser.Float) | (1 << CGrammarParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CGrammarParser.Int - 32)) | (1 << (CGrammarParser.Long - 32)) | (1 << (CGrammarParser.Register - 32)) | (1 << (CGrammarParser.Restrict - 32)) | (1 << (CGrammarParser.Short - 32)) | (1 << (CGrammarParser.Signed - 32)) | (1 << (CGrammarParser.Static - 32)) | (1 << (CGrammarParser.Struct - 32)) | (1 << (CGrammarParser.Typedef - 32)) | (1 << (CGrammarParser.Union - 32)) | (1 << (CGrammarParser.Unsigned - 32)) | (1 << (CGrammarParser.Void - 32)) | (1 << (CGrammarParser.Volatile - 32)) | (1 << (CGrammarParser.Alignas - 32)) | (1 << (CGrammarParser.Atomic - 32)) | (1 << (CGrammarParser.Bool - 32)) | (1 << (CGrammarParser.Complex - 32)) | (1 << (CGrammarParser.Noreturn - 32)) | (1 << (CGrammarParser.ThreadLocal - 32)))) !== 0) || _la === CGrammarParser.Identifier) {
					{
					this.state = 965;
					this.parameterTypeList();
					}
				}

				this.state = 968;
				this.match(CGrammarParser.RightParen);
				this.state = 972;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 969;
						this.gccDeclaratorExtension();
						}
						}
					}
					this.state = 974;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1020;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1018;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
					case 1:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directAbstractDeclarator);
						this.state = 977;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 978;
						this.match(CGrammarParser.LeftBracket);
						this.state = 980;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CGrammarParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CGrammarParser.Restrict - 35)) | (1 << (CGrammarParser.Volatile - 35)) | (1 << (CGrammarParser.Atomic - 35)))) !== 0)) {
							{
							this.state = 979;
							this.typeQualifierList(0);
							}
						}

						this.state = 983;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
							{
							this.state = 982;
							this.assignmentExpression();
							}
						}

						this.state = 985;
						this.match(CGrammarParser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directAbstractDeclarator);
						this.state = 986;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 987;
						this.match(CGrammarParser.LeftBracket);
						this.state = 988;
						this.match(CGrammarParser.Static);
						this.state = 990;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CGrammarParser.Const || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CGrammarParser.Restrict - 35)) | (1 << (CGrammarParser.Volatile - 35)) | (1 << (CGrammarParser.Atomic - 35)))) !== 0)) {
							{
							this.state = 989;
							this.typeQualifierList(0);
							}
						}

						this.state = 992;
						this.assignmentExpression();
						this.state = 993;
						this.match(CGrammarParser.RightBracket);
						}
						break;

					case 3:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directAbstractDeclarator);
						this.state = 995;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 996;
						this.match(CGrammarParser.LeftBracket);
						this.state = 997;
						this.typeQualifierList(0);
						this.state = 998;
						this.match(CGrammarParser.Static);
						this.state = 999;
						this.assignmentExpression();
						this.state = 1000;
						this.match(CGrammarParser.RightBracket);
						}
						break;

					case 4:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directAbstractDeclarator);
						this.state = 1002;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1003;
						this.match(CGrammarParser.LeftBracket);
						this.state = 1004;
						this.match(CGrammarParser.Star);
						this.state = 1005;
						this.match(CGrammarParser.RightBracket);
						}
						break;

					case 5:
						{
						_localctx = new DirectAbstractDeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_directAbstractDeclarator);
						this.state = 1006;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1007;
						this.match(CGrammarParser.LeftParen);
						this.state = 1009;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__3) | (1 << CGrammarParser.T__4) | (1 << CGrammarParser.T__5) | (1 << CGrammarParser.T__6) | (1 << CGrammarParser.T__7) | (1 << CGrammarParser.T__8) | (1 << CGrammarParser.T__9) | (1 << CGrammarParser.T__11) | (1 << CGrammarParser.Auto) | (1 << CGrammarParser.Char) | (1 << CGrammarParser.Const) | (1 << CGrammarParser.Double) | (1 << CGrammarParser.Enum) | (1 << CGrammarParser.Extern) | (1 << CGrammarParser.Float) | (1 << CGrammarParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CGrammarParser.Int - 32)) | (1 << (CGrammarParser.Long - 32)) | (1 << (CGrammarParser.Register - 32)) | (1 << (CGrammarParser.Restrict - 32)) | (1 << (CGrammarParser.Short - 32)) | (1 << (CGrammarParser.Signed - 32)) | (1 << (CGrammarParser.Static - 32)) | (1 << (CGrammarParser.Struct - 32)) | (1 << (CGrammarParser.Typedef - 32)) | (1 << (CGrammarParser.Union - 32)) | (1 << (CGrammarParser.Unsigned - 32)) | (1 << (CGrammarParser.Void - 32)) | (1 << (CGrammarParser.Volatile - 32)) | (1 << (CGrammarParser.Alignas - 32)) | (1 << (CGrammarParser.Atomic - 32)) | (1 << (CGrammarParser.Bool - 32)) | (1 << (CGrammarParser.Complex - 32)) | (1 << (CGrammarParser.Noreturn - 32)) | (1 << (CGrammarParser.ThreadLocal - 32)))) !== 0) || _la === CGrammarParser.Identifier) {
							{
							this.state = 1008;
							this.parameterTypeList();
							}
						}

						this.state = 1011;
						this.match(CGrammarParser.RightParen);
						this.state = 1015;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1012;
								this.gccDeclaratorExtension();
								}
								}
							}
							this.state = 1017;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
						}
						}
						break;
					}
					}
				}
				this.state = 1022;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
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
	public typedefName(): TypedefNameContext {
		let _localctx: TypedefNameContext = new TypedefNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CGrammarParser.RULE_typedefName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this.match(CGrammarParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 128, CGrammarParser.RULE_initializer);
		try {
			this.state = 1035;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1025;
				this.assignmentExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1026;
				this.match(CGrammarParser.LeftBrace);
				this.state = 1027;
				this.initializerList(0);
				this.state = 1028;
				this.match(CGrammarParser.RightBrace);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1030;
				this.match(CGrammarParser.LeftBrace);
				this.state = 1031;
				this.initializerList(0);
				this.state = 1032;
				this.match(CGrammarParser.Comma);
				this.state = 1033;
				this.match(CGrammarParser.RightBrace);
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

	public initializerList(): InitializerListContext;
	public initializerList(_p: number): InitializerListContext;
	// @RuleVersion(0)
	public initializerList(_p?: number): InitializerListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitializerListContext = new InitializerListContext(this._ctx, _parentState);
		let _prevctx: InitializerListContext = _localctx;
		let _startState: number = 130;
		this.enterRecursionRule(_localctx, 130, CGrammarParser.RULE_initializerList, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CGrammarParser.LeftBracket || _la === CGrammarParser.Dot) {
				{
				this.state = 1038;
				this.designation();
				}
			}

			this.state = 1041;
			this.initializer();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1051;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InitializerListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_initializerList);
					this.state = 1043;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1044;
					this.match(CGrammarParser.Comma);
					this.state = 1046;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CGrammarParser.LeftBracket || _la === CGrammarParser.Dot) {
						{
						this.state = 1045;
						this.designation();
						}
					}

					this.state = 1048;
					this.initializer();
					}
					}
				}
				this.state = 1053;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
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
	public designation(): DesignationContext {
		let _localctx: DesignationContext = new DesignationContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CGrammarParser.RULE_designation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			this.designatorList(0);
			this.state = 1055;
			this.match(CGrammarParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public designatorList(): DesignatorListContext;
	public designatorList(_p: number): DesignatorListContext;
	// @RuleVersion(0)
	public designatorList(_p?: number): DesignatorListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DesignatorListContext = new DesignatorListContext(this._ctx, _parentState);
		let _prevctx: DesignatorListContext = _localctx;
		let _startState: number = 134;
		this.enterRecursionRule(_localctx, 134, CGrammarParser.RULE_designatorList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1058;
			this.designator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1064;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new DesignatorListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_designatorList);
					this.state = 1060;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1061;
					this.designator();
					}
					}
				}
				this.state = 1066;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
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
	public designator(): DesignatorContext {
		let _localctx: DesignatorContext = new DesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CGrammarParser.RULE_designator);
		try {
			this.state = 1073;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1067;
				this.match(CGrammarParser.LeftBracket);
				this.state = 1068;
				this.constantExpression();
				this.state = 1069;
				this.match(CGrammarParser.RightBracket);
				}
				break;
			case CGrammarParser.Dot:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1071;
				this.match(CGrammarParser.Dot);
				this.state = 1072;
				this.match(CGrammarParser.Identifier);
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
		this.enterRule(_localctx, 138, CGrammarParser.RULE_staticAssertDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1075;
			this.match(CGrammarParser.StaticAssert);
			this.state = 1076;
			this.match(CGrammarParser.LeftParen);
			this.state = 1077;
			this.constantExpression();
			this.state = 1078;
			this.match(CGrammarParser.Comma);
			this.state = 1080;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1079;
				this.match(CGrammarParser.StringLiteral);
				}
				}
				this.state = 1082;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CGrammarParser.StringLiteral);
			this.state = 1084;
			this.match(CGrammarParser.RightParen);
			this.state = 1085;
			this.match(CGrammarParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 140, CGrammarParser.RULE_statement);
		let _la: number;
		try {
			this.state = 1124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1087;
				this.labeledStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1088;
				this.compoundStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1089;
				this.expressionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1090;
				this.selectionStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1091;
				this.iterationStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1092;
				this.jumpStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1093;
				_la = this._input.LA(1);
				if (!(_la === CGrammarParser.T__10 || _la === CGrammarParser.T__12)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1094;
				_la = this._input.LA(1);
				if (!(_la === CGrammarParser.T__13 || _la === CGrammarParser.Volatile)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1095;
				this.match(CGrammarParser.LeftParen);
				this.state = 1104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1096;
					this.logicalOrExpression(0);
					this.state = 1101;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CGrammarParser.Comma) {
						{
						{
						this.state = 1097;
						this.match(CGrammarParser.Comma);
						this.state = 1098;
						this.logicalOrExpression(0);
						}
						}
						this.state = 1103;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CGrammarParser.Colon) {
					{
					{
					this.state = 1106;
					this.match(CGrammarParser.Colon);
					this.state = 1115;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
						{
						this.state = 1107;
						this.logicalOrExpression(0);
						this.state = 1112;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CGrammarParser.Comma) {
							{
							{
							this.state = 1108;
							this.match(CGrammarParser.Comma);
							this.state = 1109;
							this.logicalOrExpression(0);
							}
							}
							this.state = 1114;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					}
					}
					this.state = 1121;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1122;
				this.match(CGrammarParser.RightParen);
				this.state = 1123;
				this.match(CGrammarParser.Semi);
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
		this.enterRule(_localctx, 142, CGrammarParser.RULE_labeledStatement);
		try {
			this.state = 1137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1126;
				this.match(CGrammarParser.Identifier);
				this.state = 1127;
				this.match(CGrammarParser.Colon);
				this.state = 1128;
				this.statement();
				}
				break;
			case CGrammarParser.Case:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1129;
				this.match(CGrammarParser.Case);
				this.state = 1130;
				this.constantExpression();
				this.state = 1131;
				this.match(CGrammarParser.Colon);
				this.state = 1132;
				this.statement();
				}
				break;
			case CGrammarParser.Default:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1134;
				this.match(CGrammarParser.Default);
				this.state = 1135;
				this.match(CGrammarParser.Colon);
				this.state = 1136;
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
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CGrammarParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1139;
			this.match(CGrammarParser.LeftBrace);
			this.state = 1141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2) | (1 << CGrammarParser.T__3) | (1 << CGrammarParser.T__4) | (1 << CGrammarParser.T__5) | (1 << CGrammarParser.T__6) | (1 << CGrammarParser.T__7) | (1 << CGrammarParser.T__8) | (1 << CGrammarParser.T__9) | (1 << CGrammarParser.T__10) | (1 << CGrammarParser.T__11) | (1 << CGrammarParser.T__12) | (1 << CGrammarParser.Auto) | (1 << CGrammarParser.Break) | (1 << CGrammarParser.Case) | (1 << CGrammarParser.Char) | (1 << CGrammarParser.Const) | (1 << CGrammarParser.Continue) | (1 << CGrammarParser.Default) | (1 << CGrammarParser.Do) | (1 << CGrammarParser.Double) | (1 << CGrammarParser.Enum) | (1 << CGrammarParser.Extern) | (1 << CGrammarParser.Float) | (1 << CGrammarParser.For) | (1 << CGrammarParser.Goto) | (1 << CGrammarParser.If) | (1 << CGrammarParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CGrammarParser.Int - 32)) | (1 << (CGrammarParser.Long - 32)) | (1 << (CGrammarParser.Register - 32)) | (1 << (CGrammarParser.Restrict - 32)) | (1 << (CGrammarParser.Return - 32)) | (1 << (CGrammarParser.Short - 32)) | (1 << (CGrammarParser.Signed - 32)) | (1 << (CGrammarParser.Sizeof - 32)) | (1 << (CGrammarParser.Static - 32)) | (1 << (CGrammarParser.Struct - 32)) | (1 << (CGrammarParser.Switch - 32)) | (1 << (CGrammarParser.Typedef - 32)) | (1 << (CGrammarParser.Union - 32)) | (1 << (CGrammarParser.Unsigned - 32)) | (1 << (CGrammarParser.Void - 32)) | (1 << (CGrammarParser.Volatile - 32)) | (1 << (CGrammarParser.While - 32)) | (1 << (CGrammarParser.Alignas - 32)) | (1 << (CGrammarParser.Alignof - 32)) | (1 << (CGrammarParser.Atomic - 32)) | (1 << (CGrammarParser.Bool - 32)) | (1 << (CGrammarParser.Complex - 32)) | (1 << (CGrammarParser.Generic - 32)) | (1 << (CGrammarParser.Noreturn - 32)) | (1 << (CGrammarParser.StaticAssert - 32)) | (1 << (CGrammarParser.ThreadLocal - 32)) | (1 << (CGrammarParser.LeftParen - 32)) | (1 << (CGrammarParser.LeftBrace - 32)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)) | (1 << (CGrammarParser.Semi - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
				{
				this.state = 1140;
				this.blockItemList(0);
				}
			}

			this.state = 1143;
			this.match(CGrammarParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public blockItemList(): BlockItemListContext;
	public blockItemList(_p: number): BlockItemListContext;
	// @RuleVersion(0)
	public blockItemList(_p?: number): BlockItemListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, _parentState);
		let _prevctx: BlockItemListContext = _localctx;
		let _startState: number = 146;
		this.enterRecursionRule(_localctx, 146, CGrammarParser.RULE_blockItemList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1146;
			this.blockItem();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1152;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BlockItemListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_blockItemList);
					this.state = 1148;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1149;
					this.blockItem();
					}
					}
				}
				this.state = 1154;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
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
	public blockItem(): BlockItemContext {
		let _localctx: BlockItemContext = new BlockItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CGrammarParser.RULE_blockItem);
		try {
			this.state = 1157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1155;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1156;
				this.declaration();
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CGrammarParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
				{
				this.state = 1159;
				this.expression(0);
				}
			}

			this.state = 1162;
			this.match(CGrammarParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 152, CGrammarParser.RULE_selectionStatement);
		try {
			this.state = 1179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1164;
				this.match(CGrammarParser.If);
				this.state = 1165;
				this.match(CGrammarParser.LeftParen);
				this.state = 1166;
				this.expression(0);
				this.state = 1167;
				this.match(CGrammarParser.RightParen);
				this.state = 1168;
				this.statement();
				this.state = 1171;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1169;
					this.match(CGrammarParser.Else);
					this.state = 1170;
					this.statement();
					}
					break;
				}
				}
				break;
			case CGrammarParser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1173;
				this.match(CGrammarParser.Switch);
				this.state = 1174;
				this.match(CGrammarParser.LeftParen);
				this.state = 1175;
				this.expression(0);
				this.state = 1176;
				this.match(CGrammarParser.RightParen);
				this.state = 1177;
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
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CGrammarParser.RULE_iterationStatement);
		try {
			this.state = 1201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.While:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1181;
				this.match(CGrammarParser.While);
				this.state = 1182;
				this.match(CGrammarParser.LeftParen);
				this.state = 1183;
				this.expression(0);
				this.state = 1184;
				this.match(CGrammarParser.RightParen);
				this.state = 1185;
				this.statement();
				}
				break;
			case CGrammarParser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1187;
				this.match(CGrammarParser.Do);
				this.state = 1188;
				this.statement();
				this.state = 1189;
				this.match(CGrammarParser.While);
				this.state = 1190;
				this.match(CGrammarParser.LeftParen);
				this.state = 1191;
				this.expression(0);
				this.state = 1192;
				this.match(CGrammarParser.RightParen);
				this.state = 1193;
				this.match(CGrammarParser.Semi);
				}
				break;
			case CGrammarParser.For:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1195;
				this.match(CGrammarParser.For);
				this.state = 1196;
				this.match(CGrammarParser.LeftParen);
				this.state = 1197;
				this.forCondition();
				this.state = 1198;
				this.match(CGrammarParser.RightParen);
				this.state = 1199;
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
	public forCondition(): ForConditionContext {
		let _localctx: ForConditionContext = new ForConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CGrammarParser.RULE_forCondition);
		let _la: number;
		try {
			this.state = 1223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1203;
				this.forDeclaration();
				this.state = 1204;
				this.match(CGrammarParser.Semi);
				this.state = 1206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1205;
					this.forExpression(0);
					}
				}

				this.state = 1208;
				this.match(CGrammarParser.Semi);
				this.state = 1210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1209;
					this.forExpression(0);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1212;
					this.expression(0);
					}
				}

				this.state = 1215;
				this.match(CGrammarParser.Semi);
				this.state = 1217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1216;
					this.forExpression(0);
					}
				}

				this.state = 1219;
				this.match(CGrammarParser.Semi);
				this.state = 1221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1220;
					this.forExpression(0);
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
	public forDeclaration(): ForDeclarationContext {
		let _localctx: ForDeclarationContext = new ForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CGrammarParser.RULE_forDeclaration);
		try {
			this.state = 1229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1225;
				this.declarationSpecifiers();
				this.state = 1226;
				this.initDeclaratorList(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1228;
				this.declarationSpecifiers();
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

	public forExpression(): ForExpressionContext;
	public forExpression(_p: number): ForExpressionContext;
	// @RuleVersion(0)
	public forExpression(_p?: number): ForExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, _parentState);
		let _prevctx: ForExpressionContext = _localctx;
		let _startState: number = 160;
		this.enterRecursionRule(_localctx, 160, CGrammarParser.RULE_forExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1232;
			this.assignmentExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1239;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ForExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_forExpression);
					this.state = 1234;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1235;
					this.match(CGrammarParser.Comma);
					this.state = 1236;
					this.assignmentExpression();
					}
					}
				}
				this.state = 1241;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
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
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CGrammarParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.state = 1258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1242;
				this.match(CGrammarParser.Goto);
				this.state = 1243;
				this.match(CGrammarParser.Identifier);
				this.state = 1244;
				this.match(CGrammarParser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1245;
				this.match(CGrammarParser.Continue);
				this.state = 1246;
				this.match(CGrammarParser.Semi);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1247;
				this.match(CGrammarParser.Break);
				this.state = 1248;
				this.match(CGrammarParser.Semi);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1249;
				this.match(CGrammarParser.Return);
				this.state = 1251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__1) | (1 << CGrammarParser.T__2))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CGrammarParser.Sizeof - 39)) | (1 << (CGrammarParser.Alignof - 39)) | (1 << (CGrammarParser.Generic - 39)) | (1 << (CGrammarParser.LeftParen - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (CGrammarParser.Plus - 71)) | (1 << (CGrammarParser.PlusPlus - 71)) | (1 << (CGrammarParser.Minus - 71)) | (1 << (CGrammarParser.MinusMinus - 71)) | (1 << (CGrammarParser.Star - 71)) | (1 << (CGrammarParser.And - 71)) | (1 << (CGrammarParser.AndAnd - 71)) | (1 << (CGrammarParser.Not - 71)) | (1 << (CGrammarParser.Tilde - 71)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (CGrammarParser.Identifier - 105)) | (1 << (CGrammarParser.Constant - 105)) | (1 << (CGrammarParser.DigitSequence - 105)) | (1 << (CGrammarParser.StringLiteral - 105)))) !== 0)) {
					{
					this.state = 1250;
					this.expression(0);
					}
				}

				this.state = 1253;
				this.match(CGrammarParser.Semi);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1254;
				this.match(CGrammarParser.Goto);
				this.state = 1255;
				this.unaryExpression();
				this.state = 1256;
				this.match(CGrammarParser.Semi);
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
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CGrammarParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__3) | (1 << CGrammarParser.T__4) | (1 << CGrammarParser.T__5) | (1 << CGrammarParser.T__6) | (1 << CGrammarParser.T__7) | (1 << CGrammarParser.T__8) | (1 << CGrammarParser.T__9) | (1 << CGrammarParser.T__11) | (1 << CGrammarParser.Auto) | (1 << CGrammarParser.Char) | (1 << CGrammarParser.Const) | (1 << CGrammarParser.Double) | (1 << CGrammarParser.Enum) | (1 << CGrammarParser.Extern) | (1 << CGrammarParser.Float) | (1 << CGrammarParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CGrammarParser.Int - 32)) | (1 << (CGrammarParser.Long - 32)) | (1 << (CGrammarParser.Register - 32)) | (1 << (CGrammarParser.Restrict - 32)) | (1 << (CGrammarParser.Short - 32)) | (1 << (CGrammarParser.Signed - 32)) | (1 << (CGrammarParser.Static - 32)) | (1 << (CGrammarParser.Struct - 32)) | (1 << (CGrammarParser.Typedef - 32)) | (1 << (CGrammarParser.Union - 32)) | (1 << (CGrammarParser.Unsigned - 32)) | (1 << (CGrammarParser.Void - 32)) | (1 << (CGrammarParser.Volatile - 32)) | (1 << (CGrammarParser.Alignas - 32)) | (1 << (CGrammarParser.Atomic - 32)) | (1 << (CGrammarParser.Bool - 32)) | (1 << (CGrammarParser.Complex - 32)) | (1 << (CGrammarParser.Noreturn - 32)) | (1 << (CGrammarParser.StaticAssert - 32)) | (1 << (CGrammarParser.ThreadLocal - 32)) | (1 << (CGrammarParser.LeftParen - 32)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CGrammarParser.Star - 75)) | (1 << (CGrammarParser.Caret - 75)) | (1 << (CGrammarParser.Semi - 75)) | (1 << (CGrammarParser.Identifier - 75)))) !== 0)) {
				{
				this.state = 1260;
				this.translationUnit(0);
				}
			}

			this.state = 1263;
			this.match(CGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public translationUnit(): TranslationUnitContext;
	public translationUnit(_p: number): TranslationUnitContext;
	// @RuleVersion(0)
	public translationUnit(_p?: number): TranslationUnitContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TranslationUnitContext = new TranslationUnitContext(this._ctx, _parentState);
		let _prevctx: TranslationUnitContext = _localctx;
		let _startState: number = 166;
		this.enterRecursionRule(_localctx, 166, CGrammarParser.RULE_translationUnit, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1266;
			this.externalDeclaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1272;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TranslationUnitContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_translationUnit);
					this.state = 1268;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1269;
					this.externalDeclaration();
					}
					}
				}
				this.state = 1274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
	public externalDeclaration(): ExternalDeclarationContext {
		let _localctx: ExternalDeclarationContext = new ExternalDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CGrammarParser.RULE_externalDeclaration);
		try {
			this.state = 1278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1275;
				this.functionDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1276;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1277;
				this.match(CGrammarParser.Semi);
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
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CGrammarParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1280;
				this.declarationSpecifiers();
				}
				break;
			}
			this.state = 1283;
			this.declarator();
			this.state = 1285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CGrammarParser.T__0) | (1 << CGrammarParser.T__3) | (1 << CGrammarParser.T__4) | (1 << CGrammarParser.T__5) | (1 << CGrammarParser.T__6) | (1 << CGrammarParser.T__7) | (1 << CGrammarParser.T__8) | (1 << CGrammarParser.T__9) | (1 << CGrammarParser.T__11) | (1 << CGrammarParser.Auto) | (1 << CGrammarParser.Char) | (1 << CGrammarParser.Const) | (1 << CGrammarParser.Double) | (1 << CGrammarParser.Enum) | (1 << CGrammarParser.Extern) | (1 << CGrammarParser.Float) | (1 << CGrammarParser.Inline))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CGrammarParser.Int - 32)) | (1 << (CGrammarParser.Long - 32)) | (1 << (CGrammarParser.Register - 32)) | (1 << (CGrammarParser.Restrict - 32)) | (1 << (CGrammarParser.Short - 32)) | (1 << (CGrammarParser.Signed - 32)) | (1 << (CGrammarParser.Static - 32)) | (1 << (CGrammarParser.Struct - 32)) | (1 << (CGrammarParser.Typedef - 32)) | (1 << (CGrammarParser.Union - 32)) | (1 << (CGrammarParser.Unsigned - 32)) | (1 << (CGrammarParser.Void - 32)) | (1 << (CGrammarParser.Volatile - 32)) | (1 << (CGrammarParser.Alignas - 32)) | (1 << (CGrammarParser.Atomic - 32)) | (1 << (CGrammarParser.Bool - 32)) | (1 << (CGrammarParser.Complex - 32)) | (1 << (CGrammarParser.Noreturn - 32)) | (1 << (CGrammarParser.StaticAssert - 32)) | (1 << (CGrammarParser.ThreadLocal - 32)))) !== 0) || _la === CGrammarParser.Identifier) {
				{
				this.state = 1284;
				this.declarationList(0);
				}
			}

			this.state = 1287;
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

	public declarationList(): DeclarationListContext;
	public declarationList(_p: number): DeclarationListContext;
	// @RuleVersion(0)
	public declarationList(_p?: number): DeclarationListContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, _parentState);
		let _prevctx: DeclarationListContext = _localctx;
		let _startState: number = 172;
		this.enterRecursionRule(_localctx, 172, CGrammarParser.RULE_declarationList, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1290;
			this.declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1296;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclarationListContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_declarationList);
					this.state = 1292;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1293;
					this.declaration();
					}
					}
				}
				this.state = 1298;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.genericAssocList_sempred(_localctx as GenericAssocListContext, predIndex);

		case 4:
			return this.postfixExpression_sempred(_localctx as PostfixExpressionContext, predIndex);

		case 5:
			return this.argumentExpressionList_sempred(_localctx as ArgumentExpressionListContext, predIndex);

		case 9:
			return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);

		case 10:
			return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

		case 11:
			return this.shiftExpression_sempred(_localctx as ShiftExpressionContext, predIndex);

		case 12:
			return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

		case 13:
			return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

		case 14:
			return this.andExpression_sempred(_localctx as AndExpressionContext, predIndex);

		case 15:
			return this.exclusiveOrExpression_sempred(_localctx as ExclusiveOrExpressionContext, predIndex);

		case 16:
			return this.inclusiveOrExpression_sempred(_localctx as InclusiveOrExpressionContext, predIndex);

		case 17:
			return this.logicalAndExpression_sempred(_localctx as LogicalAndExpressionContext, predIndex);

		case 18:
			return this.logicalOrExpression_sempred(_localctx as LogicalOrExpressionContext, predIndex);

		case 22:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 28:
			return this.initDeclaratorList_sempred(_localctx as InitDeclaratorListContext, predIndex);

		case 31:
			return this.typeSpecifier_sempred(_localctx as TypeSpecifierContext, predIndex);

		case 34:
			return this.structDeclarationList_sempred(_localctx as StructDeclarationListContext, predIndex);

		case 37:
			return this.structDeclaratorList_sempred(_localctx as StructDeclaratorListContext, predIndex);

		case 40:
			return this.enumeratorList_sempred(_localctx as EnumeratorListContext, predIndex);

		case 48:
			return this.directDeclarator_sempred(_localctx as DirectDeclaratorContext, predIndex);

		case 55:
			return this.typeQualifierList_sempred(_localctx as TypeQualifierListContext, predIndex);

		case 57:
			return this.parameterList_sempred(_localctx as ParameterListContext, predIndex);

		case 59:
			return this.identifierList_sempred(_localctx as IdentifierListContext, predIndex);

		case 62:
			return this.directAbstractDeclarator_sempred(_localctx as DirectAbstractDeclaratorContext, predIndex);

		case 65:
			return this.initializerList_sempred(_localctx as InitializerListContext, predIndex);

		case 67:
			return this.designatorList_sempred(_localctx as DesignatorListContext, predIndex);

		case 73:
			return this.blockItemList_sempred(_localctx as BlockItemListContext, predIndex);

		case 80:
			return this.forExpression_sempred(_localctx as ForExpressionContext, predIndex);

		case 83:
			return this.translationUnit_sempred(_localctx as TranslationUnitContext, predIndex);

		case 86:
			return this.declarationList_sempred(_localctx as DeclarationListContext, predIndex);
		}
		return true;
	}
	private genericAssocList_sempred(_localctx: GenericAssocListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfixExpression_sempred(_localctx: PostfixExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private argumentExpressionList_sempred(_localctx: ArgumentExpressionListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 3);

		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(_localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 4);

		case 16:
			return this.precpred(this._ctx, 3);

		case 17:
			return this.precpred(this._ctx, 2);

		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 2);

		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(_localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveOrExpression_sempred(_localctx: ExclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveOrExpression_sempred(_localctx: InclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalAndExpression_sempred(_localctx: LogicalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalOrExpression_sempred(_localctx: LogicalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initDeclaratorList_sempred(_localctx: InitDeclaratorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private typeSpecifier_sempred(_localctx: TypeSpecifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private structDeclarationList_sempred(_localctx: StructDeclarationListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private structDeclaratorList_sempred(_localctx: StructDeclaratorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private enumeratorList_sempred(_localctx: EnumeratorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private directDeclarator_sempred(_localctx: DirectDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return this.precpred(this._ctx, 8);

		case 33:
			return this.precpred(this._ctx, 7);

		case 34:
			return this.precpred(this._ctx, 6);

		case 35:
			return this.precpred(this._ctx, 5);

		case 36:
			return this.precpred(this._ctx, 4);

		case 37:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private typeQualifierList_sempred(_localctx: TypeQualifierListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 38:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private parameterList_sempred(_localctx: ParameterListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 39:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private identifierList_sempred(_localctx: IdentifierListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 40:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private directAbstractDeclarator_sempred(_localctx: DirectAbstractDeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 41:
			return this.precpred(this._ctx, 5);

		case 42:
			return this.precpred(this._ctx, 4);

		case 43:
			return this.precpred(this._ctx, 3);

		case 44:
			return this.precpred(this._ctx, 2);

		case 45:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializerList_sempred(_localctx: InitializerListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private designatorList_sempred(_localctx: DesignatorListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 47:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private blockItemList_sempred(_localctx: BlockItemListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 48:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private forExpression_sempred(_localctx: ForExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 49:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private translationUnit_sempred(_localctx: TranslationUnitContext, predIndex: number): boolean {
		switch (predIndex) {
		case 50:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private declarationList_sempred(_localctx: DeclarationListContext, predIndex: number): boolean {
		switch (predIndex) {
		case 51:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03x\u0516\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x03\x02\x03\x02\x03\x02\x06\x02\xB4\n\x02\r\x02\x0E\x02\xB5\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\xBE\n\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\xD2" +
		"\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xE1\n\x04\f\x04\x0E\x04" +
		"\xE4\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\xED\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06\u0111\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\u011B\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0128\n\x06\f" +
		"\x06\x0E\x06\u012B\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x07\x07\u0133\n\x07\f\x07\x0E\x07\u0136\v\x07\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u014E\n\b\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u015F\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x07\v\u016D\n\v\f\v\x0E\v\u0170\v\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u017B\n\f\f\f\x0E\f\u017E" +
		"\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0189" +
		"\n\r\f\r\x0E\r\u018C\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\u019D\n\x0E\f\x0E\x0E\x0E\u01A0\v\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01AB\n\x0F\f" +
		"\x0F\x0E\x0F\u01AE\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x07\x10\u01B6\n\x10\f\x10\x0E\x10\u01B9\v\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x07\x11\u01C1\n\x11\f\x11\x0E\x11\u01C4\v\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u01CC\n\x12\f" +
		"\x12\x0E\x12\u01CF\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x07\x13\u01D7\n\x13\f\x13\x0E\x13\u01DA\v\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x07\x14\u01E2\n\x14\f\x14\x0E\x14\u01E5\v\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01ED\n\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01F5\n\x16\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u01FF" +
		"\n\x18\f\x18\x0E\x18\u0202\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u020E\n\x1A\x03\x1B\x06" +
		"\x1B\u0211\n\x1B\r\x1B\x0E\x1B\u0212\x03\x1C\x06\x1C\u0216\n\x1C\r\x1C" +
		"\x0E\x1C\u0217\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u021F\n" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0227\n\x1E" +
		"\f\x1E\x0E\x1E\u022A\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05" +
		"\x1F\u0231\n\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0244\n!\x03!\x03!\x07!\u0248\n!" +
		"\f!\x0E!\u024B\v!\x03\"\x03\"\x05\"\u024F\n\"\x03\"\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03\"\x05\"\u0258\n\"\x03#\x03#\x03$\x03$\x03$\x03$\x03$" +
		"\x07$\u0261\n$\f$\x0E$\u0264\v$\x03%\x03%\x05%\u0268\n%\x03%\x03%\x03" +
		"%\x05%\u026D\n%\x03&\x03&\x05&\u0271\n&\x03&\x03&\x05&\u0275\n&\x05&\u0277" +
		"\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u027F\n\'\f\'\x0E\'\u0282" +
		"\v\'\x03(\x03(\x05(\u0286\n(\x03(\x03(\x05(\u028A\n(\x03)\x03)\x05)\u028E" +
		"\n)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0296\n)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x05)\u029F\n)\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u02A7\n*" +
		"\f*\x0E*\u02AA\v*\x03+\x03+\x03+\x03+\x03+\x05+\u02B1\n+\x03,\x03,\x03" +
		"-\x03-\x03-\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u02C2" +
		"\n/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u02CE\n0\x03" +
		"1\x051\u02D1\n1\x031\x031\x071\u02D5\n1\f1\x0E1\u02D8\v1\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x052\u02E5\n2\x032\x032\x03" +
		"2\x032\x052\u02EB\n2\x032\x032\x032\x052\u02F0\n2\x032\x052\u02F3\n2\x03" +
		"2\x032\x032\x032\x032\x052\u02FA\n2\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x052\u0309\n2\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x052\u0315\n2\x032\x072\u0318\n2\f2\x0E2\u031B" +
		"\v2\x033\x033\x033\x063\u0320\n3\r3\x0E3\u0321\x033\x033\x053\u0326\n" +
		"3\x034\x034\x034\x034\x034\x034\x034\x035\x035\x035\x075\u0332\n5\f5\x0E" +
		"5\u0335\v5\x035\x055\u0338\n5\x036\x036\x036\x056\u033D\n6\x036\x056\u0340" +
		"\n6\x036\x056\u0343\n6\x037\x037\x037\x037\x037\x077\u034A\n7\f7\x0E7" +
		"\u034D\v7\x038\x038\x058\u0351\n8\x038\x038\x058\u0355\n8\x038\x038\x03" +
		"8\x058\u035A\n8\x038\x038\x058\u035E\n8\x038\x058\u0361\n8\x039\x039\x03" +
		"9\x039\x039\x079\u0368\n9\f9\x0E9\u036B\v9\x03:\x03:\x03:\x03:\x03:\x05" +
		":\u0372\n:\x03;\x03;\x03;\x03;\x03;\x03;\x07;\u037A\n;\f;\x0E;\u037D\v" +
		";\x03<\x03<\x03<\x03<\x03<\x05<\u0384\n<\x05<\u0386\n<\x03=\x03=\x03=" +
		"\x03=\x03=\x03=\x07=\u038E\n=\f=\x0E=\u0391\v=\x03>\x03>\x05>\u0395\n" +
		">\x03?\x03?\x05?\u0399\n?\x03?\x03?\x07?\u039D\n?\f?\x0E?\u03A0\v?\x05" +
		"?\u03A2\n?\x03@\x03@\x03@\x03@\x03@\x07@\u03A9\n@\f@\x0E@\u03AC\v@\x03" +
		"@\x03@\x05@\u03B0\n@\x03@\x05@\u03B3\n@\x03@\x03@\x03@\x03@\x05@\u03B9" +
		"\n@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x05@\u03C9\n@\x03@\x03@\x07@\u03CD\n@\f@\x0E@\u03D0\v@\x05@\u03D2\n" +
		"@\x03@\x03@\x03@\x05@\u03D7\n@\x03@\x05@\u03DA\n@\x03@\x03@\x03@\x03@" +
		"\x03@\x05@\u03E1\n@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@" +
		"\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u03F4\n@\x03@\x03@\x07@\u03F8" +
		"\n@\f@\x0E@\u03FB\v@\x07@\u03FD\n@\f@\x0E@\u0400\v@\x03A\x03A\x03B\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u040E\nB\x03C\x03C\x05" +
		"C\u0412\nC\x03C\x03C\x03C\x03C\x03C\x05C\u0419\nC\x03C\x07C\u041C\nC\f" +
		"C\x0EC\u041F\vC\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x07E\u0429\nE" +
		"\fE\x0EE\u042C\vE\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u0434\nF\x03G\x03" +
		"G\x03G\x03G\x03G\x06G\u043B\nG\rG\x0EG\u043C\x03G\x03G\x03G\x03H\x03H" +
		"\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x07H\u044E\nH\fH\x0E" +
		"H\u0451\vH\x05H\u0453\nH\x03H\x03H\x03H\x03H\x07H\u0459\nH\fH\x0EH\u045C" +
		"\vH\x05H\u045E\nH\x07H\u0460\nH\fH\x0EH\u0463\vH\x03H\x03H\x05H\u0467" +
		"\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0474" +
		"\nI\x03J\x03J\x05J\u0478\nJ\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x07K\u0481" +
		"\nK\fK\x0EK\u0484\vK\x03L\x03L\x05L\u0488\nL\x03M\x05M\u048B\nM\x03M\x03" +
		"M\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u0496\nN\x03N\x03N\x03N\x03" +
		"N\x03N\x03N\x05N\u049E\nN\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u04B4\n" +
		"O\x03P\x03P\x03P\x05P\u04B9\nP\x03P\x03P\x05P\u04BD\nP\x03P\x05P\u04C0" +
		"\nP\x03P\x03P\x05P\u04C4\nP\x03P\x03P\x05P\u04C8\nP\x05P\u04CA\nP\x03" +
		"Q\x03Q\x03Q\x03Q\x05Q\u04D0\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x07R\u04D8" +
		"\nR\fR\x0ER\u04DB\vR\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05" +
		"S\u04E6\nS\x03S\x03S\x03S\x03S\x03S\x05S\u04ED\nS\x03T\x05T\u04F0\nT\x03" +
		"T\x03T\x03U\x03U\x03U\x03U\x03U\x07U\u04F9\nU\fU\x0EU\u04FC\vU\x03V\x03" +
		"V\x03V\x05V\u0501\nV\x03W\x05W\u0504\nW\x03W\x03W\x05W\u0508\nW\x03W\x03" +
		"W\x03X\x03X\x03X\x03X\x03X\x07X\u0511\nX\fX\x0EX\u0514\vX\x03X\x02\x02" +
		" \x06\n\f\x14\x16\x18\x1A\x1C\x1E \"$&.:@FLRbptx~\x84\x88\x94\xA2\xA8" +
		"\xAEY\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
		"\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
		"\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\x02\x0E\x07" +
		"\x02IIKKMMPPUV\x03\x02[e\b\x02\x11\x11\x1C\x1C$$**--<<\n\x02\x06\b\x14" +
		"\x14\x19\x19\x1D\x1D\"#\'(/067\x03\x02\x06\b\x04\x02++..\x06\x02\x15\x15" +
		"%%1155\x05\x02\n\v!!::\x04\x02=>ZZ\x03\x02=>\x04\x02\r\r\x0F\x0F\x04\x02" +
		"\x10\x1011\x02\u058B\x02\xD1\x03\x02\x02\x02\x04\xD3\x03\x02\x02\x02\x06" +
		"\xDA\x03\x02\x02\x02\b\xEC\x03\x02\x02\x02\n\u0110\x03\x02\x02\x02\f\u012C" +
		"\x03\x02\x02\x02\x0E\u014D\x03\x02\x02\x02\x10\u014F\x03\x02\x02\x02\x12" +
		"\u015E\x03\x02\x02\x02\x14\u0160\x03\x02\x02\x02\x16\u0171\x03\x02\x02" +
		"\x02\x18\u017F\x03\x02\x02\x02\x1A\u018D\x03\x02\x02\x02\x1C\u01A1\x03" +
		"\x02\x02\x02\x1E\u01AF\x03\x02\x02\x02 \u01BA\x03\x02\x02\x02\"\u01C5" +
		"\x03\x02\x02\x02$\u01D0\x03\x02\x02\x02&\u01DB\x03\x02\x02\x02(\u01E6" +
		"\x03\x02\x02\x02*\u01F4\x03\x02\x02\x02,\u01F6\x03\x02\x02\x02.\u01F8" +
		"\x03\x02\x02\x020\u0203\x03\x02\x02\x022\u020D\x03\x02\x02\x024\u0210" +
		"\x03\x02\x02\x026\u0215\x03\x02\x02\x028\u021E\x03\x02\x02\x02:\u0220" +
		"\x03\x02\x02\x02<\u0230\x03\x02\x02\x02>\u0232\x03\x02\x02\x02@\u0243" +
		"\x03\x02\x02\x02B\u0257\x03\x02\x02\x02D\u0259\x03\x02\x02\x02F\u025B" +
		"\x03\x02\x02\x02H\u026C\x03\x02\x02\x02J\u0276\x03\x02\x02\x02L\u0278" +
		"\x03\x02\x02\x02N\u0289\x03\x02\x02\x02P\u029E\x03\x02\x02\x02R\u02A0" +
		"\x03\x02\x02\x02T\u02B0\x03\x02\x02\x02V\u02B2\x03\x02\x02\x02X\u02B4" +
		"\x03\x02\x02\x02Z\u02B9\x03\x02\x02\x02\\\u02C1\x03\x02\x02\x02^\u02CD" +
		"\x03\x02\x02\x02`\u02D0\x03\x02\x02\x02b\u02EA\x03\x02\x02\x02d\u0325" +
		"\x03\x02\x02\x02f\u0327\x03\x02\x02\x02h\u0337\x03\x02\x02\x02j\u0342" +
		"\x03\x02\x02\x02l\u034B\x03\x02\x02\x02n\u0360\x03\x02\x02\x02p\u0362" +
		"\x03\x02\x02\x02r\u0371\x03\x02\x02\x02t\u0373\x03\x02\x02\x02v\u0385" +
		"\x03\x02\x02\x02x\u0387\x03\x02\x02\x02z\u0392\x03\x02\x02\x02|\u03A1" +
		"\x03\x02\x02\x02~\u03D1\x03\x02\x02\x02\x80\u0401\x03\x02\x02\x02\x82" +
		"\u040D\x03\x02\x02\x02\x84\u040F\x03\x02\x02\x02\x86\u0420\x03\x02\x02" +
		"\x02\x88\u0423\x03\x02\x02\x02\x8A\u0433\x03\x02\x02\x02\x8C\u0435\x03" +
		"\x02\x02\x02\x8E\u0466\x03\x02\x02\x02\x90\u0473\x03\x02\x02\x02\x92\u0475" +
		"\x03\x02\x02\x02\x94\u047B\x03\x02\x02\x02\x96\u0487\x03\x02\x02\x02\x98" +
		"\u048A\x03\x02\x02\x02\x9A\u049D\x03\x02\x02\x02\x9C\u04B3\x03\x02\x02" +
		"\x02\x9E\u04C9\x03\x02\x02\x02\xA0\u04CF\x03\x02\x02\x02\xA2\u04D1\x03" +
		"\x02\x02\x02\xA4\u04EC\x03\x02\x02\x02\xA6\u04EF\x03\x02\x02\x02\xA8\u04F3" +
		"\x03\x02\x02\x02\xAA\u0500\x03\x02\x02\x02\xAC\u0503\x03\x02\x02\x02\xAE" +
		"\u050B\x03\x02\x02\x02\xB0\xD2\x07k\x02\x02\xB1\xD2\x07l\x02\x02\xB2\xB4" +
		"\x07n\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB3" +
		"\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xD2\x03\x02\x02\x02\xB7\xB8" +
		"\x07=\x02\x02\xB8\xB9\x05.\x18\x02\xB9\xBA\x07>\x02\x02\xBA\xD2\x03\x02" +
		"\x02\x02\xBB\xD2\x05\x04\x03\x02\xBC\xBE\x07\x03\x02\x02\xBD\xBC\x03\x02" +
		"\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x07=" +
		"\x02\x02\xC0\xC1\x05\x92J\x02\xC1\xC2\x07>\x02\x02\xC2\xD2\x03\x02\x02" +
		"\x02\xC3\xC4\x07\x04\x02\x02\xC4\xC5\x07=\x02\x02\xC5\xC6\x05\x0E\b\x02" +
		"\xC6\xC7\x07Z\x02\x02\xC7\xC8\x05z>\x02\xC8\xC9\x07>\x02\x02\xC9\xD2\x03" +
		"\x02\x02\x02\xCA\xCB\x07\x05\x02\x02\xCB\xCC\x07=\x02\x02\xCC\xCD\x05" +
		"z>\x02\xCD\xCE\x07Z\x02\x02\xCE\xCF\x05\x0E\b\x02\xCF\xD0\x07>\x02\x02" +
		"\xD0\xD2\x03\x02\x02\x02\xD1\xB0\x03\x02\x02\x02\xD1\xB1\x03\x02\x02\x02" +
		"\xD1\xB3\x03\x02\x02\x02\xD1\xB7\x03\x02\x02\x02\xD1\xBB\x03\x02\x02\x02" +
		"\xD1\xBD\x03\x02\x02\x02\xD1\xC3\x03\x02\x02\x02\xD1\xCA\x03\x02\x02\x02" +
		"\xD2\x03\x03\x02\x02\x02\xD3\xD4\x078\x02\x02\xD4\xD5\x07=\x02\x02\xD5" +
		"\xD6\x05*\x16\x02\xD6\xD7\x07Z\x02\x02\xD7\xD8\x05\x06\x04\x02\xD8\xD9" +
		"\x07>\x02\x02\xD9\x05\x03\x02\x02\x02\xDA\xDB\b\x04\x01\x02\xDB\xDC\x05" +
		"\b\x05\x02\xDC\xE2\x03\x02\x02\x02\xDD\xDE\f\x03\x02\x02\xDE\xDF\x07Z" +
		"\x02\x02\xDF\xE1\x05\b\x05\x02\xE0\xDD\x03\x02\x02\x02\xE1\xE4\x03\x02" +
		"\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\x07\x03\x02" +
		"\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE6\x05z>\x02\xE6\xE7\x07X\x02\x02" +
		"\xE7\xE8\x05*\x16\x02\xE8\xED\x03\x02\x02\x02\xE9\xEA\x07\x17\x02\x02" +
		"\xEA\xEB\x07X\x02\x02\xEB\xED\x05*\x16\x02\xEC\xE5\x03\x02\x02\x02\xEC" +
		"\xE9\x03\x02\x02\x02\xED\t\x03\x02\x02\x02\xEE\xEF\b\x06\x01\x02\xEF\u0111" +
		"\x05\x02\x02\x02\xF0\xF1\x07=\x02\x02\xF1\xF2\x05z>\x02\xF2\xF3\x07>\x02" +
		"\x02\xF3\xF4\x07A\x02\x02\xF4\xF5\x05\x84C\x02\xF5\xF6\x07B\x02\x02\xF6" +
		"\u0111\x03\x02\x02\x02\xF7\xF8\x07=\x02\x02\xF8\xF9\x05z>\x02\xF9\xFA" +
		"\x07>\x02\x02\xFA\xFB\x07A\x02\x02\xFB\xFC\x05\x84C\x02\xFC\xFD\x07Z\x02" +
		"\x02\xFD\xFE\x07B\x02\x02\xFE\u0111\x03\x02\x02\x02\xFF\u0100\x07\x03" +
		"\x02\x02\u0100\u0101\x07=\x02\x02\u0101\u0102\x05z>\x02\u0102\u0103\x07" +
		">\x02\x02\u0103\u0104\x07A\x02\x02\u0104\u0105\x05\x84C\x02\u0105\u0106" +
		"\x07B\x02\x02\u0106\u0111\x03\x02\x02\x02\u0107\u0108\x07\x03\x02\x02" +
		"\u0108\u0109\x07=\x02\x02\u0109\u010A\x05z>\x02\u010A\u010B\x07>\x02\x02" +
		"\u010B\u010C\x07A\x02\x02\u010C\u010D\x05\x84C\x02\u010D\u010E\x07Z\x02" +
		"\x02\u010E\u010F\x07B\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110\xEE\x03" +
		"\x02\x02\x02\u0110\xF0\x03\x02\x02\x02\u0110\xF7\x03\x02\x02\x02\u0110" +
		"\xFF\x03\x02\x02\x02\u0110\u0107\x03\x02\x02\x02\u0111\u0129\x03\x02\x02" +
		"\x02\u0112\u0113\f\f\x02\x02\u0113\u0114\x07?\x02\x02\u0114\u0115\x05" +
		".\x18\x02\u0115\u0116\x07@\x02\x02\u0116\u0128\x03\x02\x02\x02\u0117\u0118" +
		"\f\v\x02\x02\u0118\u011A\x07=\x02\x02\u0119\u011B\x05\f\x07\x02\u011A" +
		"\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02" +
		"\x02\x02\u011C\u0128\x07>\x02\x02\u011D\u011E\f\n\x02\x02\u011E\u011F" +
		"\x07i\x02\x02\u011F\u0128\x07k\x02\x02\u0120\u0121\f\t\x02\x02\u0121\u0122" +
		"\x07h\x02\x02\u0122\u0128\x07k\x02\x02\u0123\u0124\f\b\x02\x02\u0124\u0128" +
		"\x07J\x02\x02\u0125\u0126\f\x07\x02\x02\u0126\u0128\x07L\x02\x02\u0127" +
		"\u0112\x03\x02\x02\x02\u0127\u0117\x03\x02\x02\x02\u0127\u011D\x03\x02" +
		"\x02\x02\u0127\u0120\x03\x02\x02\x02\u0127\u0123\x03\x02\x02\x02\u0127" +
		"\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02" +
		"\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\v\x03\x02\x02\x02\u012B\u0129" +
		"\x03\x02\x02\x02\u012C\u012D\b\x07\x01\x02\u012D\u012E\x05*\x16\x02\u012E" +
		"\u0134\x03\x02\x02\x02\u012F\u0130\f\x03\x02\x02\u0130\u0131\x07Z\x02" +
		"\x02\u0131\u0133\x05*\x16\x02\u0132\u012F\x03\x02\x02\x02\u0133\u0136" +
		"\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02" +
		"\u0135\r\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0137\u014E\x05\n" +
		"\x06\x02\u0138\u0139\x07J\x02\x02\u0139\u014E\x05\x0E\b\x02\u013A\u013B" +
		"\x07L\x02\x02\u013B\u014E\x05\x0E\b\x02\u013C\u013D\x05\x10\t\x02\u013D" +
		"\u013E\x05\x12\n\x02\u013E\u014E\x03\x02\x02\x02\u013F\u0140\x07)\x02" +
		"\x02\u0140\u014E\x05\x0E\b\x02\u0141\u0142\x07)\x02\x02\u0142\u0143\x07" +
		"=\x02\x02\u0143\u0144\x05z>\x02\u0144\u0145\x07>\x02\x02\u0145\u014E\x03" +
		"\x02\x02\x02\u0146\u0147\x074\x02\x02\u0147\u0148\x07=\x02\x02\u0148\u0149" +
		"\x05z>\x02\u0149\u014A\x07>\x02\x02\u014A\u014E\x03\x02\x02\x02\u014B" +
		"\u014C\x07R\x02\x02\u014C\u014E\x07k\x02\x02\u014D\u0137\x03\x02\x02\x02" +
		"\u014D\u0138\x03\x02\x02\x02\u014D\u013A\x03\x02\x02\x02\u014D\u013C\x03" +
		"\x02\x02\x02\u014D\u013F\x03\x02\x02\x02\u014D\u0141\x03\x02\x02\x02\u014D" +
		"\u0146\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\x0F\x03\x02\x02" +
		"\x02\u014F\u0150\t\x02\x02\x02\u0150\x11\x03\x02\x02\x02\u0151\u0152\x07" +
		"=\x02\x02\u0152\u0153\x05z>\x02\u0153\u0154\x07>\x02\x02\u0154\u0155\x05" +
		"\x12\n\x02\u0155\u015F\x03\x02\x02\x02\u0156\u0157\x07\x03\x02\x02\u0157" +
		"\u0158\x07=\x02\x02\u0158\u0159\x05z>\x02\u0159\u015A\x07>\x02\x02\u015A" +
		"\u015B\x05\x12\n\x02\u015B\u015F\x03\x02\x02\x02\u015C\u015F\x05\x0E\b" +
		"\x02\u015D\u015F\x07m\x02\x02\u015E\u0151\x03\x02\x02\x02\u015E\u0156" +
		"\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015D\x03\x02\x02\x02" +
		"\u015F\x13\x03\x02\x02\x02\u0160\u0161\b\v\x01\x02\u0161\u0162\x05\x12" +
		"\n\x02\u0162\u016E\x03\x02\x02\x02\u0163\u0164\f\x05\x02\x02\u0164\u0165" +
		"\x07M\x02\x02\u0165\u016D\x05\x12\n\x02\u0166\u0167\f\x04\x02\x02\u0167" +
		"\u0168\x07N\x02\x02\u0168\u016D\x05\x12\n\x02\u0169\u016A\f\x03\x02\x02" +
		"\u016A\u016B\x07O\x02\x02\u016B\u016D\x05\x12\n\x02\u016C\u0163\x03\x02" +
		"\x02\x02\u016C\u0166\x03\x02\x02\x02\u016C\u0169\x03\x02\x02\x02\u016D" +
		"\u0170\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02" +
		"\x02\x02\u016F\x15\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0172" +
		"\b\f";
	private static readonly _serializedATNSegment1: string =
		"\x01\x02\u0172\u0173\x05\x14\v\x02\u0173\u017C\x03\x02\x02\x02\u0174\u0175" +
		"\f\x04\x02\x02\u0175\u0176\x07I\x02\x02\u0176\u017B\x05\x14\v\x02\u0177" +
		"\u0178\f\x03\x02\x02\u0178\u0179\x07K\x02\x02\u0179\u017B\x05\x14\v\x02" +
		"\u017A\u0174\x03\x02\x02\x02\u017A\u0177\x03\x02\x02\x02\u017B\u017E\x03" +
		"\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D" +
		"\x17\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0180\b\r\x01\x02" +
		"\u0180\u0181\x05\x16\f\x02\u0181\u018A\x03\x02\x02\x02\u0182\u0183\f\x04" +
		"\x02\x02\u0183\u0184\x07G\x02\x02\u0184\u0189\x05\x16\f\x02\u0185\u0186" +
		"\f\x03\x02\x02\u0186\u0187\x07H\x02\x02\u0187\u0189\x05\x16\f\x02\u0188" +
		"\u0182\x03\x02\x02\x02\u0188\u0185\x03\x02\x02\x02\u0189\u018C\x03\x02" +
		"\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
		"\x19\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D\u018E\b\x0E\x01" +
		"\x02\u018E\u018F\x05\x18\r\x02\u018F\u019E\x03\x02\x02\x02\u0190\u0191" +
		"\f\x06\x02\x02\u0191\u0192\x07C\x02\x02\u0192\u019D\x05\x18\r\x02\u0193" +
		"\u0194\f\x05\x02\x02\u0194\u0195\x07E\x02\x02\u0195\u019D\x05\x18\r\x02" +
		"\u0196\u0197\f\x04\x02\x02\u0197\u0198\x07D\x02\x02\u0198\u019D\x05\x18" +
		"\r\x02\u0199\u019A\f\x03\x02\x02\u019A\u019B\x07F\x02\x02\u019B\u019D" +
		"\x05\x18\r\x02\u019C\u0190\x03\x02\x02\x02\u019C\u0193\x03\x02\x02\x02" +
		"\u019C\u0196\x03\x02\x02\x02\u019C\u0199\x03\x02\x02\x02\u019D\u01A0\x03" +
		"\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F" +
		"\x1B\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u01A2\b\x0F\x01" +
		"\x02\u01A2\u01A3\x05\x1A\x0E\x02\u01A3\u01AC\x03\x02\x02\x02\u01A4\u01A5" +
		"\f\x04\x02\x02\u01A5\u01A6\x07f\x02\x02\u01A6\u01AB\x05\x1A\x0E\x02\u01A7" +
		"\u01A8\f\x03\x02\x02\u01A8\u01A9\x07g\x02\x02\u01A9\u01AB\x05\x1A\x0E" +
		"\x02\u01AA\u01A4\x03\x02\x02\x02\u01AA\u01A7\x03\x02\x02\x02\u01AB\u01AE" +
		"\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02" +
		"\u01AD\x1D\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B0\b\x10" +
		"\x01\x02\u01B0\u01B1\x05\x1C\x0F\x02\u01B1\u01B7\x03\x02\x02\x02\u01B2" +
		"\u01B3\f\x03\x02\x02\u01B3\u01B4\x07P\x02\x02\u01B4\u01B6\x05\x1C\x0F" +
		"\x02\u01B5\u01B2\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5" +
		"\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\x1F\x03\x02\x02\x02" +
		"\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01BB\b\x11\x01\x02\u01BB\u01BC\x05" +
		"\x1E\x10\x02\u01BC\u01C2\x03\x02\x02\x02\u01BD\u01BE\f\x03\x02\x02\u01BE" +
		"\u01BF\x07T\x02\x02\u01BF\u01C1\x05\x1E\x10\x02\u01C0\u01BD\x03\x02\x02" +
		"\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3" +
		"\x03\x02\x02\x02\u01C3!\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5" +
		"\u01C6\b\x12\x01\x02\u01C6\u01C7\x05 \x11\x02\u01C7\u01CD\x03\x02\x02" +
		"\x02\u01C8\u01C9\f\x03\x02\x02\u01C9\u01CA\x07Q\x02\x02\u01CA\u01CC\x05" +
		" \x11\x02\u01CB\u01C8\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD" +
		"\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE#\x03\x02\x02" +
		"\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0\u01D1\b\x13\x01\x02\u01D1\u01D2" +
		"\x05\"\x12\x02\u01D2\u01D8\x03\x02\x02\x02\u01D3\u01D4\f\x03\x02\x02\u01D4" +
		"\u01D5\x07R\x02\x02\u01D5\u01D7\x05\"\x12\x02\u01D6\u01D3\x03\x02\x02" +
		"\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9" +
		"\x03\x02\x02\x02\u01D9%\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB" +
		"\u01DC\b\x14\x01\x02\u01DC\u01DD\x05$\x13\x02\u01DD\u01E3\x03\x02\x02" +
		"\x02\u01DE\u01DF\f\x03\x02\x02\u01DF\u01E0\x07S\x02\x02\u01E0\u01E2\x05" +
		"$\x13\x02\u01E1\u01DE\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02\u01E3" +
		"\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\'\x03\x02\x02" +
		"\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01EC\x05&\x14\x02\u01E7\u01E8" +
		"\x07W\x02\x02\u01E8\u01E9\x05.\x18\x02\u01E9\u01EA\x07X\x02\x02\u01EA" +
		"\u01EB\x05(\x15\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC\u01E7\x03\x02\x02" +
		"\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED)\x03\x02\x02\x02\u01EE\u01F5\x05" +
		"(\x15\x02\u01EF\u01F0\x05\x0E\b\x02\u01F0\u01F1\x05,\x17\x02\u01F1\u01F2" +
		"\x05*\x16\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F5\x07m\x02\x02\u01F4" +
		"\u01EE\x03\x02\x02\x02\u01F4\u01EF\x03\x02\x02\x02\u01F4\u01F3\x03\x02" +
		"\x02\x02\u01F5+\x03\x02\x02\x02\u01F6\u01F7\t\x03\x02\x02\u01F7-\x03\x02" +
		"\x02\x02\u01F8\u01F9\b\x18\x01\x02\u01F9\u01FA\x05*\x16\x02\u01FA\u0200" +
		"\x03\x02\x02\x02\u01FB\u01FC\f\x03\x02\x02\u01FC\u01FD\x07Z\x02\x02\u01FD" +
		"\u01FF\x05*\x16\x02\u01FE\u01FB\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02" +
		"\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201/\x03" +
		"\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0203\u0204\x05(\x15\x02\u0204" +
		"1\x03\x02\x02\x02\u0205\u0206\x054\x1B\x02\u0206\u0207\x05:\x1E\x02\u0207" +
		"\u0208\x07Y\x02\x02\u0208\u020E\x03\x02\x02\x02\u0209\u020A\x054\x1B\x02" +
		"\u020A\u020B\x07Y\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020E\x05" +
		"\x8CG\x02\u020D\u0205\x03\x02\x02\x02\u020D\u0209\x03\x02\x02\x02\u020D" +
		"\u020C\x03\x02\x02\x02\u020E3\x03\x02\x02\x02\u020F\u0211\x058\x1D\x02" +
		"\u0210\u020F\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0210\x03" +
		"\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u02135\x03\x02\x02\x02\u0214" +
		"\u0216\x058\x1D\x02\u0215\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02" +
		"\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u02187\x03" +
		"\x02\x02\x02\u0219\u021F\x05> \x02\u021A\u021F\x05@!\x02\u021B\u021F\x05" +
		"Z.\x02\u021C\u021F\x05\\/\x02\u021D\u021F\x05^0\x02\u021E\u0219\x03\x02" +
		"\x02\x02\u021E\u021A\x03\x02\x02\x02\u021E\u021B\x03\x02\x02\x02\u021E" +
		"\u021C\x03\x02\x02\x02\u021E\u021D\x03\x02\x02\x02\u021F9\x03\x02\x02" +
		"\x02\u0220\u0221\b\x1E\x01\x02\u0221\u0222\x05<\x1F\x02\u0222\u0228\x03" +
		"\x02\x02\x02\u0223\u0224\f\x03\x02\x02\u0224\u0225\x07Z\x02\x02\u0225" +
		"\u0227\x05<\x1F\x02\u0226\u0223\x03\x02\x02\x02\u0227\u022A\x03\x02\x02" +
		"\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229;\x03" +
		"\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u0231\x05`1\x02\u022C\u022D" +
		"\x05`1\x02\u022D\u022E\x07[\x02\x02\u022E\u022F\x05\x82B\x02\u022F\u0231" +
		"\x03\x02\x02\x02\u0230\u022B\x03\x02\x02\x02\u0230\u022C\x03\x02\x02\x02" +
		"\u0231=\x03\x02\x02\x02\u0232\u0233\t\x04\x02\x02\u0233?\x03\x02\x02\x02" +
		"\u0234\u0235\b!\x01\x02\u0235\u0244\t\x05\x02\x02\u0236\u0237\x07\x03" +
		"\x02\x02\u0237\u0238\x07=\x02\x02\u0238\u0239\t\x06\x02\x02\u0239\u0244" +
		"\x07>\x02\x02\u023A\u0244\x05X-\x02\u023B\u0244\x05B\"\x02\u023C\u0244" +
		"\x05P)\x02\u023D\u0244\x05\x80A\x02\u023E\u023F\x07\t\x02\x02\u023F\u0240" +
		"\x07=\x02\x02\u0240\u0241\x050\x19\x02\u0241\u0242\x07>\x02\x02\u0242" +
		"\u0244\x03\x02\x02\x02\u0243\u0234\x03\x02\x02\x02\u0243\u0236\x03\x02" +
		"\x02\x02\u0243\u023A\x03\x02\x02\x02\u0243\u023B\x03\x02\x02\x02\u0243" +
		"\u023C\x03\x02\x02\x02\u0243\u023D\x03\x02\x02\x02\u0243\u023E\x03\x02" +
		"\x02\x02\u0244\u0249\x03\x02\x02\x02\u0245\u0246\f\x03\x02\x02\u0246\u0248" +
		"\x05n8\x02\u0247\u0245\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02\u0249" +
		"\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024AA\x03\x02\x02" +
		"\x02\u024B\u0249\x03\x02\x02\x02\u024C\u024E\x05D#\x02\u024D\u024F\x07" +
		"k\x02\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F" +
		"\u0250\x03\x02\x02\x02\u0250\u0251\x07A\x02\x02\u0251\u0252\x05F$\x02" +
		"\u0252\u0253\x07B\x02\x02\u0253\u0258\x03\x02\x02\x02\u0254\u0255\x05" +
		"D#\x02\u0255\u0256\x07k\x02\x02\u0256\u0258\x03\x02\x02\x02\u0257\u024C" +
		"\x03\x02\x02\x02\u0257\u0254\x03\x02\x02\x02\u0258C\x03\x02\x02\x02\u0259" +
		"\u025A\t\x07\x02\x02\u025AE\x03\x02\x02\x02\u025B\u025C\b$\x01\x02\u025C" +
		"\u025D\x05H%\x02\u025D\u0262\x03\x02\x02\x02\u025E\u025F\f\x03\x02\x02" +
		"\u025F\u0261\x05H%\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0264\x03\x02" +
		"\x02\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263" +
		"G\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0265\u0267\x05J&\x02\u0266" +
		"\u0268\x05L\'\x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268\x03\x02\x02" +
		"\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026A\x07Y\x02\x02\u026A\u026D" +
		"\x03\x02\x02\x02\u026B\u026D\x05\x8CG\x02\u026C\u0265\x03\x02\x02\x02" +
		"\u026C\u026B\x03\x02\x02\x02\u026DI\x03\x02\x02\x02\u026E\u0270\x05@!" +
		"\x02\u026F\u0271\x05J&\x02\u0270\u026F\x03\x02\x02\x02\u0270\u0271\x03" +
		"\x02\x02\x02\u0271\u0277\x03\x02\x02\x02\u0272\u0274\x05Z.\x02\u0273\u0275" +
		"\x05J&\x02\u0274\u0273\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275" +
		"\u0277\x03\x02\x02\x02\u0276\u026E\x03\x02\x02\x02\u0276\u0272\x03\x02" +
		"\x02\x02\u0277K\x03\x02\x02\x02\u0278\u0279\b\'\x01\x02\u0279\u027A\x05" +
		"N(\x02\u027A\u0280\x03\x02\x02\x02\u027B\u027C\f\x03\x02\x02\u027C\u027D" +
		"\x07Z\x02\x02\u027D\u027F\x05N(\x02\u027E\u027B\x03\x02\x02\x02\u027F" +
		"\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02" +
		"\x02\x02\u0281M\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283\u028A" +
		"\x05`1\x02\u0284\u0286\x05`1\x02\u0285\u0284\x03\x02\x02\x02\u0285\u0286" +
		"\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0288\x07X\x02\x02" +
		"\u0288\u028A\x050\x19\x02\u0289\u0283\x03\x02\x02\x02\u0289\u0285\x03" +
		"\x02\x02\x02\u028AO\x03\x02\x02\x02\u028B\u028D\x07\x1B\x02\x02\u028C" +
		"\u028E\x07k\x02\x02\u028D\u028C\x03\x02\x02\x02\u028D\u028E\x03\x02\x02" +
		"\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0290\x07A\x02\x02\u0290\u0291" +
		"\x05R*\x02\u0291\u0292\x07B\x02\x02\u0292\u029F\x03\x02\x02\x02\u0293" +
		"\u0295\x07\x1B\x02\x02\u0294\u0296\x07k\x02\x02\u0295\u0294\x03\x02\x02" +
		"\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u0298" +
		"\x07A\x02\x02\u0298\u0299\x05R*\x02\u0299\u029A\x07Z\x02\x02\u029A\u029B" +
		"\x07B\x02\x02\u029B\u029F\x03\x02\x02\x02\u029C\u029D\x07\x1B\x02\x02" +
		"\u029D\u029F\x07k\x02\x02\u029E\u028B\x03\x02\x02\x02\u029E\u0293\x03" +
		"\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029FQ\x03\x02\x02\x02\u02A0" +
		"\u02A1\b*\x01\x02\u02A1\u02A2\x05T+\x02\u02A2\u02A8\x03\x02\x02\x02\u02A3" +
		"\u02A4\f\x03\x02\x02\u02A4\u02A5\x07Z\x02\x02\u02A5\u02A7\x05T+\x02\u02A6" +
		"\u02A3\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02\x02\u02A8\u02A6\x03\x02" +
		"\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9S\x03\x02\x02\x02\u02AA\u02A8" +
		"\x03\x02\x02\x02\u02AB\u02B1\x05V,\x02\u02AC\u02AD\x05V,\x02\u02AD\u02AE" +
		"\x07[\x02\x02\u02AE\u02AF\x050\x19\x02\u02AF\u02B1\x03\x02\x02\x02\u02B0" +
		"\u02AB\x03\x02\x02\x02\u02B0\u02AC\x03\x02\x02\x02\u02B1U\x03\x02\x02" +
		"\x02\u02B2\u02B3\x07k\x02\x02\u02B3W\x03\x02\x02\x02\u02B4\u02B5\x075" +
		"\x02\x02\u02B5\u02B6\x07=\x02\x02\u02B6\u02B7\x05z>\x02\u02B7\u02B8\x07" +
		">\x02\x02\u02B8Y\x03\x02\x02\x02\u02B9\u02BA\t\b\x02\x02\u02BA[\x03\x02" +
		"\x02\x02\u02BB\u02C2\t\t\x02\x02\u02BC\u02C2\x05f4\x02\u02BD\u02BE\x07" +
		"\f\x02\x02\u02BE\u02BF\x07=\x02\x02\u02BF\u02C0\x07k\x02\x02\u02C0\u02C2" +
		"\x07>\x02\x02\u02C1\u02BB\x03\x02\x02\x02\u02C1\u02BC\x03\x02\x02\x02" +
		"\u02C1\u02BD\x03\x02\x02\x02\u02C2]\x03\x02\x02\x02\u02C3\u02C4\x073\x02" +
		"\x02\u02C4\u02C5\x07=\x02\x02\u02C5\u02C6\x05z>\x02\u02C6\u02C7\x07>\x02" +
		"\x02\u02C7\u02CE\x03\x02\x02\x02\u02C8\u02C9\x073\x02\x02\u02C9\u02CA" +
		"\x07=\x02\x02\u02CA\u02CB\x050\x19\x02\u02CB\u02CC\x07>\x02\x02\u02CC" +
		"\u02CE\x03\x02\x02\x02\u02CD\u02C3\x03\x02\x02\x02\u02CD\u02C8\x03\x02" +
		"\x02\x02\u02CE_\x03\x02\x02\x02\u02CF\u02D1\x05n8\x02\u02D0\u02CF\x03" +
		"\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2" +
		"\u02D6\x05b2\x02\u02D3\u02D5\x05d3\x02\u02D4\u02D3\x03\x02\x02\x02\u02D5" +
		"\u02D8\x03\x02\x02\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03\x02" +
		"\x02\x02\u02D7a\x03\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D9\u02DA" +
		"\b2\x01\x02\u02DA\u02EB\x07k\x02\x02\u02DB\u02DC\x07=\x02\x02\u02DC\u02DD" +
		"\x05`1\x02\u02DD\u02DE\x07>\x02\x02\u02DE\u02EB\x03\x02\x02\x02\u02DF" +
		"\u02E0\x07k\x02\x02\u02E0\u02E1\x07X\x02\x02\u02E1\u02EB\x07m\x02\x02" +
		"\u02E2\u02E4\x07=\x02\x02\u02E3\u02E5\x05@!\x02\u02E4\u02E3\x03\x02\x02" +
		"\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E7" +
		"\x05n8\x02\u02E7\u02E8\x05b2\x02\u02E8\u02E9\x07>\x02\x02\u02E9\u02EB" +
		"\x03\x02\x02\x02\u02EA\u02D9\x03\x02\x02\x02\u02EA\u02DB\x03\x02\x02\x02" +
		"\u02EA\u02DF\x03\x02\x02\x02\u02EA\u02E2\x03\x02\x02\x02\u02EB\u0319\x03" +
		"\x02\x02\x02\u02EC\u02ED\f\n\x02\x02\u02ED\u02EF\x07?\x02\x02\u02EE\u02F0" +
		"\x05p9\x02\u02EF\u02EE\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0" +
		"\u02F2\x03\x02\x02\x02\u02F1\u02F3\x05*\x16\x02\u02F2\u02F1\x03\x02\x02" +
		"\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u0318" +
		"\x07@\x02\x02\u02F5\u02F6\f\t\x02\x02\u02F6\u02F7\x07?\x02\x02\u02F7\u02F9" +
		"\x07*\x02\x02\u02F8\u02FA\x05p9\x02\u02F9\u02F8\x03\x02\x02\x02\u02F9" +
		"\u02FA\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FC\x05*\x16" +
		"\x02\u02FC\u02FD\x07@\x02\x02\u02FD\u0318\x03\x02\x02\x02\u02FE\u02FF" +
		"\f\b\x02\x02\u02FF\u0300\x07?\x02\x02\u0300\u0301\x05p9\x02\u0301\u0302" +
		"\x07*\x02\x02\u0302\u0303\x05*\x16\x02\u0303\u0304\x07@\x02\x02\u0304" +
		"\u0318\x03\x02\x02\x02\u0305\u0306\f\x07\x02\x02\u0306\u0308\x07?\x02" +
		"\x02\u0307\u0309\x05p9\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03" +
		"\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030B\x07M\x02\x02\u030B" +
		"\u0318\x07@\x02\x02\u030C\u030D\f\x06\x02\x02\u030D\u030E\x07=\x02\x02" +
		"\u030E\u030F\x05r:\x02\u030F\u0310\x07>\x02\x02\u0310\u0318\x03\x02\x02" +
		"\x02\u0311\u0312\f\x05\x02\x02\u0312\u0314\x07=\x02\x02\u0313\u0315\x05" +
		"x=\x02\u0314\u0313\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0316" +
		"\x03\x02\x02\x02\u0316\u0318\x07>\x02\x02\u0317\u02EC\x03\x02\x02\x02" +
		"\u0317\u02F5\x03\x02\x02\x02\u0317\u02FE\x03\x02\x02\x02\u0317\u0305\x03" +
		"\x02\x02\x02\u0317\u030C\x03\x02\x02\x02\u0317\u0311\x03\x02\x02\x02\u0318" +
		"\u031B\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u0319\u031A\x03\x02" +
		"\x02\x02\u031Ac\x03\x02\x02\x02\u031B\u0319\x03\x02\x02\x02\u031C\u031D" +
		"\x07\r\x02\x02\u031D\u031F\x07=\x02\x02\u031E\u0320\x07n\x02\x02\u031F" +
		"\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u031F\x03\x02" +
		"\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323" +
		"\u0326\x07>\x02\x02\u0324\u0326\x05f4\x02\u0325\u031C\x03\x02\x02\x02" +
		"\u0325\u0324\x03\x02\x02\x02\u0326e\x03\x02\x02\x02\u0327\u0328\x07\x0E" +
		"\x02\x02\u0328\u0329\x07=\x02\x02\u0329\u032A\x07=\x02\x02\u032A\u032B" +
		"\x05h5\x02\u032B\u032C\x07>\x02\x02\u032C\u032D\x07>\x02\x02\u032Dg\x03" +
		"\x02\x02\x02\u032E\u0333\x05j6\x02\u032F\u0330\x07Z\x02\x02\u0330\u0332" +
		"\x05j6\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0335\x03\x02\x02\x02\u0333" +
		"\u0331\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0338\x03\x02" +
		"\x02\x02\u0335\u0333\x03\x02\x02\x02\u0336\u0338\x03\x02\x02\x02\u0337" +
		"\u032E\x03\x02\x02\x02\u0337\u0336\x03\x02\x02\x02\u0338i\x03\x02\x02" +
		"\x02\u0339\u033F\n\n\x02\x02\u033A\u033C\x07=\x02\x02\u033B\u033D\x05" +
		"\f\x07\x02\u033C\u033B\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D" +
		"\u033E\x03\x02\x02\x02\u033E\u0340\x07>\x02\x02\u033F\u033A\x03\x02\x02" +
		"\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0343\x03\x02\x02\x02\u0341\u0343" +
		"\x03\x02\x02\x02\u0342\u0339\x03\x02\x02\x02\u0342\u0341\x03\x02\x02\x02" +
		"\u0343k\x03\x02\x02\x02\u0344\u034A\n\v\x02\x02\u0345\u0346\x07=\x02\x02" +
		"\u0346\u0347\x05l7\x02\u0347\u0348\x07>\x02\x02\u0348\u034A\x03\x02\x02" +
		"\x02\u0349\u0344\x03\x02\x02\x02\u0349\u0345\x03\x02\x02\x02\u034A\u034D" +
		"\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02" +
		"\u034Cm\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034E\u0350\x07M\x02" +
		"\x02\u034F\u0351\x05p9\x02\u0350\u034F\x03\x02\x02\x02\u0350\u0351\x03" +
		"\x02\x02\x02\u0351\u0361\x03\x02\x02\x02\u0352\u0354\x07M\x02\x02\u0353" +
		"\u0355\x05p9\x02\u0354\u0353\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02" +
		"\u0355\u0356\x03\x02\x02\x02\u0356\u0361\x05n8\x02\u0357\u0359\x07T\x02" +
		"\x02\u0358\u035A\x05p9\x02\u0359\u0358\x03\x02\x02\x02\u0359\u035A\x03" +
		"\x02\x02\x02\u035A\u0361\x03\x02\x02\x02\u035B\u035D\x07T\x02\x02\u035C" +
		"\u035E\x05p9\x02\u035D\u035C\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02" +
		"\u035E\u035F\x03\x02\x02\x02\u035F\u0361\x05n8\x02\u0360\u034E\x03\x02" +
		"\x02\x02\u0360\u0352\x03\x02\x02\x02\u0360\u0357\x03\x02\x02\x02\u0360" +
		"\u035B\x03\x02\x02\x02\u0361o\x03\x02\x02\x02\u0362\u0363\b9\x01\x02\u0363" +
		"\u0364\x05Z.\x02\u0364\u0369\x03\x02\x02\x02\u0365\u0366\f\x03\x02\x02" +
		"\u0366\u0368\x05Z.\x02\u0367\u0365\x03\x02\x02\x02\u0368\u036B\x03\x02" +
		"\x02\x02\u0369\u0367\x03\x02\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A" +
		"q\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036C\u0372\x05t;\x02\u036D" +
		"\u036E\x05t;\x02\u036E\u036F\x07Z\x02\x02\u036F\u0370\x07j\x02\x02\u0370" +
		"\u0372\x03\x02\x02\x02\u0371\u036C\x03\x02\x02\x02\u0371\u036D\x03\x02" +
		"\x02\x02\u0372s\x03\x02\x02\x02\u0373\u0374\b;\x01\x02\u0374\u0375\x05" +
		"v<\x02\u0375\u037B\x03\x02\x02\x02\u0376\u0377\f\x03\x02\x02\u0377\u0378" +
		"\x07Z\x02\x02\u0378\u037A\x05v<\x02\u0379\u0376\x03\x02\x02\x02\u037A" +
		"\u037D\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037B\u037C\x03\x02" +
		"\x02\x02\u037Cu\x03\x02\x02\x02\u037D\u037B\x03\x02\x02\x02\u037E\u037F" +
		"\x054\x1B\x02\u037F\u0380\x05`1\x02\u0380\u0386\x03\x02\x02\x02\u0381" +
		"\u0383\x056\x1C\x02\u0382\u0384\x05|?\x02\u0383\u0382\x03\x02\x02\x02" +
		"\u0383\u0384\x03\x02\x02\x02\u0384\u0386\x03\x02\x02\x02\u0385\u037E\x03" +
		"\x02\x02\x02\u0385\u0381\x03\x02\x02\x02\u0386w\x03\x02\x02\x02\u0387" +
		"\u0388\b=\x01\x02\u0388\u0389\x07k\x02\x02\u0389\u038F\x03\x02\x02\x02" +
		"\u038A\u038B\f\x03\x02\x02\u038B\u038C\x07Z\x02\x02\u038C\u038E\x07k\x02" +
		"\x02\u038D\u038A\x03\x02\x02\x02\u038E\u0391\x03\x02\x02\x02\u038F\u038D" +
		"\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390y\x03\x02\x02\x02\u0391" +
		"\u038F\x03\x02\x02\x02\u0392\u0394\x05J&\x02\u0393\u0395\x05|?\x02\u0394" +
		"\u0393\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395{\x03\x02\x02" +
		"\x02\u0396\u03A2\x05n8\x02\u0397\u0399\x05n8\x02\u0398\u0397\x03\x02\x02" +
		"\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\u039E" +
		"\x05~@\x02\u039B\u039D\x05d3\x02\u039C\u039B\x03\x02\x02\x02\u039D\u03A0" +
		"\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02" +
		"\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A1\u0396\x03" +
		"\x02\x02\x02\u03A1\u0398\x03\x02\x02\x02\u03A2}\x03\x02\x02\x02\u03A3" +
		"\u03A4\b@\x01\x02\u03A4\u03A5\x07=\x02\x02\u03A5\u03A6\x05|?\x02\u03A6" +
		"\u03AA\x07>\x02\x02\u03A7\u03A9\x05d3\x02\u03A8\u03A7\x03\x02\x02\x02" +
		"\u03A9\u03AC\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03" +
		"\x02\x02\x02\u03AB\u03D2\x03\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AD" +
		"\u03AF\x07?\x02\x02\u03AE\u03B0\x05p9\x02\u03AF\u03AE\x03\x02\x02\x02" +
		"\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B2\x03\x02\x02\x02\u03B1\u03B3\x05" +
		"*\x16\x02\u03B2\u03B1\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3" +
		"\u03B4\x03\x02\x02\x02\u03B4\u03D2\x07@\x02\x02\u03B5\u03B6\x07?\x02\x02" +
		"\u03B6\u03B8\x07*\x02\x02\u03B7\u03B9\x05p9\x02\u03B8\u03B7\x03\x02\x02" +
		"\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BB" +
		"\x05*\x16\x02\u03BB\u03BC\x07@\x02\x02\u03BC\u03D2\x03\x02\x02\x02\u03BD" +
		"\u03BE\x07?\x02\x02\u03BE\u03BF\x05p9\x02\u03BF\u03C0\x07*\x02\x02\u03C0" +
		"\u03C1\x05*\x16\x02\u03C1\u03C2\x07@\x02\x02\u03C2\u03D2\x03\x02\x02\x02" +
		"\u03C3\u03C4\x07?\x02\x02\u03C4\u03C5\x07M\x02\x02\u03C5\u03D2\x07@\x02" +
		"\x02\u03C6\u03C8\x07=\x02\x02\u03C7\u03C9\x05r:\x02\u03C8\u03C7\x03\x02" +
		"\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA" +
		"\u03CE\x07>\x02\x02\u03CB\u03CD\x05d3\x02\u03CC\u03CB\x03\x02\x02\x02" +
		"\u03CD\u03D0\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CF\x03" +
		"\x02\x02\x02\u03CF\u03D2\x03\x02\x02\x02\u03D0\u03CE\x03\x02\x02\x02\u03D1" +
		"\u03A3\x03\x02\x02\x02\u03D1\u03AD\x03\x02\x02\x02\u03D1\u03B5\x03\x02" +
		"\x02\x02\u03D1\u03BD\x03\x02\x02\x02\u03D1\u03C3\x03\x02\x02\x02\u03D1" +
		"\u03C6\x03\x02\x02\x02\u03D2\u03FE\x03\x02\x02\x02\u03D3\u03D4\f\x07\x02" +
		"\x02\u03D4\u03D6\x07?\x02\x02\u03D5\u03D7\x05p9\x02\u03D6\u03D5\x03\x02" +
		"\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D9\x03\x02\x02\x02\u03D8" +
		"\u03DA\x05*\x16\x02\u03D9\u03D8\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02" +
		"\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03FD\x07@\x02\x02\u03DC\u03DD" +
		"\f\x06\x02\x02\u03DD\u03DE\x07?\x02\x02\u03DE\u03E0\x07*\x02\x02\u03DF" +
		"\u03E1\x05p9\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02" +
		"\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3\x05*\x16\x02\u03E3\u03E4\x07" +
		"@\x02\x02\u03E4\u03FD\x03\x02\x02\x02\u03E5\u03E6\f\x05\x02\x02\u03E6" +
		"\u03E7\x07?\x02\x02\u03E7\u03E8\x05p9\x02\u03E8\u03E9\x07*\x02\x02\u03E9" +
		"\u03EA\x05*\x16\x02\u03EA\u03EB\x07@\x02\x02\u03EB\u03FD\x03\x02\x02\x02" +
		"\u03EC\u03ED\f\x04\x02\x02\u03ED\u03EE\x07?\x02\x02\u03EE\u03EF\x07M\x02" +
		"\x02\u03EF\u03FD\x07@\x02\x02\u03F0\u03F1\f\x03\x02\x02\u03F1\u03F3\x07" +
		"=\x02\x02\u03F2\u03F4\x05r:\x02\u03F3\u03F2\x03\x02\x02\x02\u03F3\u03F4" +
		"\x03\x02\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F9\x07>\x02\x02" +
		"\u03F6\u03F8\x05d3\x02\u03F7\u03F6\x03\x02\x02\x02\u03F8\u03FB\x03\x02" +
		"\x02\x02\u03F9\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA" +
		"\u03FD\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FC\u03D3\x03\x02" +
		"\x02\x02\u03FC\u03DC\x03\x02\x02\x02\u03FC\u03E5\x03\x02\x02\x02\u03FC" +
		"\u03EC\x03\x02\x02\x02\u03FC\u03F0\x03\x02\x02\x02\u03FD\u0400\x03\x02" +
		"\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF" +
		"\x7F\x03\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0401\u0402\x07k\x02" +
		"\x02\u0402\x81\x03\x02\x02\x02\u0403\u040E\x05*\x16\x02\u0404\u0405\x07" +
		"A\x02\x02\u0405\u0406\x05\x84C\x02\u0406\u0407\x07B\x02\x02\u0407\u040E" +
		"\x03\x02\x02\x02\u0408\u0409\x07A\x02\x02\u0409\u040A\x05\x84C\x02\u040A" +
		"\u040B\x07Z\x02\x02\u040B\u040C\x07B\x02\x02\u040C\u040E\x03\x02\x02\x02" +
		"\u040D\u0403\x03\x02\x02\x02\u040D\u0404\x03\x02\x02\x02\u040D\u0408\x03" +
		"\x02\x02\x02\u040E\x83\x03\x02\x02\x02\u040F\u0411\bC\x01\x02\u0410\u0412" +
		"\x05\x86D\x02\u0411\u0410\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02" +
		"\u0412\u0413\x03\x02\x02\x02\u0413\u0414\x05\x82B\x02\u0414\u041D\x03" +
		"\x02\x02\x02\u0415\u0416\f\x03\x02\x02\u0416\u0418\x07Z\x02\x02\u0417" +
		"\u0419\x05\x86D\x02\u0418\u0417\x03\x02\x02\x02\u0418\u0419\x03\x02\x02" +
		"\x02\u0419\u041A\x03\x02\x02\x02\u041A\u041C\x05\x82B\x02\u041B\u0415" +
		"\x03\x02\x02\x02\u041C\u041F\x03\x02\x02\x02\u041D\u041B\x03\x02\x02\x02" +
		"\u041D\u041E\x03\x02\x02\x02\u041E\x85\x03\x02\x02\x02\u041F\u041D\x03" +
		"\x02\x02\x02\u0420\u0421\x05\x88E\x02\u0421\u0422\x07[\x02\x02\u0422\x87" +
		"\x03\x02\x02\x02\u0423\u0424\bE\x01\x02\u0424\u0425\x05\x8AF\x02\u0425" +
		"\u042A\x03\x02\x02\x02\u0426\u0427\f\x03\x02\x02\u0427\u0429\x05\x8AF" +
		"\x02\u0428\u0426\x03\x02\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428" +
		"\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\x89\x03\x02\x02\x02" +
		"\u042C\u042A\x03\x02\x02\x02\u042D\u042E\x07?\x02\x02\u042E\u042F\x05" +
		"0\x19\x02\u042F\u0430\x07@\x02\x02\u0430\u0434\x03\x02\x02\x02\u0431\u0432" +
		"\x07i\x02\x02\u0432\u0434\x07k\x02\x02\u0433\u042D\x03\x02\x02\x02\u0433" +
		"\u0431\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0434\x8B\x03\x02\x02\x02\u0435\u0436\x07;\x02\x02\u0436\u0437\x07=\x02" +
		"\x02\u0437\u0438\x050\x19\x02\u0438\u043A\x07Z\x02\x02\u0439\u043B\x07" +
		"n\x02\x02\u043A\u0439\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C" +
		"\u043A\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043E\x03\x02" +
		"\x02\x02\u043E\u043F\x07>\x02\x02\u043F\u0440\x07Y\x02\x02\u0440\x8D\x03" +
		"\x02\x02\x02\u0441\u0467\x05\x90I\x02\u0442\u0467\x05\x92J\x02\u0443\u0467" +
		"\x05\x98M\x02\u0444\u0467\x05\x9AN\x02\u0445\u0467\x05\x9CO\x02\u0446" +
		"\u0467\x05\xA4S\x02\u0447\u0448\t\f\x02\x02\u0448\u0449\t\r\x02\x02\u0449" +
		"\u0452\x07=\x02\x02\u044A\u044F\x05&\x14\x02\u044B\u044C\x07Z\x02\x02" +
		"\u044C\u044E\x05&\x14\x02\u044D\u044B\x03\x02\x02\x02\u044E\u0451\x03" +
		"\x02\x02\x02\u044F\u044D\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450" +
		"\u0453\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0452\u044A\x03\x02" +
		"\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0461\x03\x02\x02\x02\u0454" +
		"\u045D\x07X\x02\x02\u0455\u045A\x05&\x14\x02\u0456\u0457\x07Z\x02\x02" +
		"\u0457\u0459\x05&\x14\x02\u0458\u0456\x03\x02\x02\x02\u0459\u045C\x03" +
		"\x02\x02\x02\u045A\u0458\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B" +
		"\u045E\x03\x02\x02\x02\u045C\u045A\x03\x02\x02\x02\u045D\u0455\x03\x02" +
		"\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u0460\x03\x02\x02\x02\u045F" +
		"\u0454\x03\x02\x02\x02\u0460\u0463\x03\x02\x02\x02\u0461\u045F\x03\x02" +
		"\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0464\x03\x02\x02\x02\u0463" +
		"\u0461\x03\x02\x02\x02\u0464\u0465\x07>\x02\x02\u0465\u0467\x07Y\x02\x02" +
		"\u0466\u0441\x03\x02\x02\x02\u0466\u0442\x03\x02\x02\x02\u0466\u0443\x03" +
		"\x02\x02\x02\u0466\u0444\x03\x02\x02\x02\u0466\u0445\x03\x02\x02\x02\u0466" +
		"\u0446\x03\x02\x02\x02\u0466\u0447\x03\x02\x02\x02\u0467\x8F\x03\x02\x02" +
		"\x02\u0468\u0469\x07k\x02\x02\u0469\u046A\x07X\x02\x02\u046A\u0474\x05" +
		"\x8EH\x02\u046B\u046C\x07\x13\x02\x02\u046C\u046D\x050\x19\x02\u046D\u046E" +
		"\x07X\x02\x02\u046E\u046F\x05\x8EH\x02\u046F\u0474\x03\x02\x02\x02\u0470" +
		"\u0471\x07\x17\x02\x02\u0471\u0472\x07X\x02\x02\u0472\u0474\x05\x8EH\x02" +
		"\u0473\u0468\x03\x02\x02\x02\u0473\u046B\x03\x02\x02\x02\u0473\u0470\x03" +
		"\x02\x02\x02\u0474\x91\x03\x02\x02\x02\u0475\u0477\x07A\x02\x02\u0476" +
		"\u0478\x05\x94K\x02\u0477\u0476\x03\x02\x02\x02\u0477\u0478\x03\x02\x02" +
		"\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047A\x07B\x02\x02\u047A\x93\x03" +
		"\x02\x02\x02\u047B\u047C\bK\x01\x02\u047C\u047D\x05\x96L\x02\u047D\u0482" +
		"\x03\x02\x02\x02\u047E\u047F\f\x03\x02\x02\u047F\u0481\x05\x96L\x02\u0480" +
		"\u047E\x03\x02\x02\x02\u0481\u0484\x03\x02\x02\x02\u0482\u0480\x03\x02" +
		"\x02\x02\u0482\u0483\x03\x02\x02\x02\u0483\x95\x03\x02\x02\x02\u0484\u0482" +
		"\x03\x02\x02\x02\u0485\u0488\x05\x8EH\x02\u0486\u0488\x052\x1A\x02\u0487" +
		"\u0485\x03\x02\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488\x97\x03\x02\x02" +
		"\x02\u0489\u048B\x05.\x18\x02\u048A\u0489\x03\x02\x02\x02\u048A\u048B" +
		"\x03\x02\x02\x02\u048B\u048C\x03\x02\x02\x02\u048C\u048D\x07Y\x02\x02" +
		"\u048D\x99\x03\x02\x02\x02\u048E\u048F\x07 \x02\x02\u048F\u0490\x07=\x02" +
		"\x02\u0490\u0491\x05.\x18\x02\u0491\u0492\x07>\x02\x02\u0492\u0495\x05" +
		"\x8EH\x02\u0493\u0494\x07\x1A\x02\x02\u0494\u0496\x05\x8EH\x02\u0495\u0493" +
		"\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u049E\x03\x02\x02\x02" +
		"\u0497\u0498\x07,\x02\x02\u0498\u0499\x07=\x02\x02\u0499\u049A\x05.\x18" +
		"\x02\u049A\u049B\x07>\x02\x02\u049B\u049C\x05\x8EH\x02\u049C\u049E\x03" +
		"\x02\x02\x02\u049D\u048E\x03\x02\x02\x02\u049D\u0497\x03\x02\x02\x02\u049E" +
		"\x9B\x03\x02\x02\x02\u049F\u04A0\x072\x02\x02\u04A0\u04A1\x07=\x02\x02" +
		"\u04A1\u04A2\x05.\x18\x02\u04A2\u04A3\x07>\x02\x02\u04A3\u04A4\x05\x8E" +
		"H\x02\u04A4\u04B4\x03\x02\x02\x02\u04A5\u04A6\x07\x18\x02\x02\u04A6\u04A7" +
		"\x05\x8EH\x02\u04A7\u04A8\x072\x02\x02\u04A8\u04A9\x07=\x02\x02\u04A9" +
		"\u04AA\x05.\x18\x02\u04AA\u04AB\x07>\x02\x02\u04AB\u04AC\x07Y\x02\x02" +
		"\u04AC\u04B4\x03\x02\x02\x02\u04AD\u04AE\x07\x1E\x02\x02\u04AE\u04AF\x07" +
		"=\x02\x02\u04AF\u04B0\x05\x9EP\x02\u04B0\u04B1\x07>\x02\x02\u04B1\u04B2" +
		"\x05\x8EH\x02\u04B2\u04B4\x03\x02\x02\x02\u04B3\u049F\x03\x02\x02\x02" +
		"\u04B3\u04A5\x03\x02\x02\x02\u04B3\u04AD\x03\x02\x02\x02\u04B4\x9D\x03" +
		"\x02\x02\x02\u04B5\u04B6\x05\xA0Q\x02\u04B6\u04B8\x07Y\x02\x02\u04B7\u04B9" +
		"\x05\xA2R\x02\u04B8\u04B7\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02" +
		"\u04B9\u04BA\x03\x02\x02\x02\u04BA\u04BC\x07Y\x02\x02\u04BB\u04BD\x05" +
		"\xA2R\x02\u04BC\u04BB\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD" +
		"\u04CA\x03\x02\x02\x02\u04BE\u04C0\x05.\x18\x02\u04BF\u04BE\x03\x02\x02" +
		"\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C3" +
		"\x07Y\x02\x02\u04C2\u04C4\x05\xA2R\x02\u04C3\u04C2\x03\x02\x02\x02\u04C3" +
		"\u04C4\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u04C7\x07Y\x02" +
		"\x02\u04C6\u04C8\x05\xA2R\x02\u04C7\u04C6\x03\x02\x02\x02\u04C7\u04C8" +
		"\x03\x02\x02\x02\u04C8\u04CA\x03\x02\x02\x02\u04C9\u04B5\x03\x02\x02\x02" +
		"\u04C9\u04BF\x03\x02\x02\x02\u04CA\x9F\x03\x02\x02\x02\u04CB\u04CC\x05" +
		"4\x1B\x02\u04CC\u04CD\x05:\x1E\x02\u04CD\u04D0\x03\x02\x02\x02\u04CE\u04D0" +
		"\x054\x1B\x02\u04CF\u04CB\x03\x02\x02\x02\u04CF\u04CE\x03\x02\x02\x02" +
		"\u04D0\xA1\x03\x02\x02\x02\u04D1\u04D2\bR\x01\x02\u04D2\u04D3\x05*\x16" +
		"\x02\u04D3\u04D9\x03\x02\x02\x02\u04D4\u04D5\f\x03\x02\x02\u04D5\u04D6" +
		"\x07Z\x02\x02\u04D6\u04D8\x05*\x16\x02\u04D7\u04D4\x03\x02\x02\x02\u04D8" +
		"\u04DB\x03\x02\x02\x02\u04D9\u04D7\x03\x02\x02\x02\u04D9\u04DA\x03\x02" +
		"\x02\x02\u04DA\xA3\x03\x02\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DC\u04DD" +
		"\x07\x1F\x02\x02\u04DD\u04DE\x07k\x02\x02\u04DE\u04ED\x07Y\x02\x02\u04DF" +
		"\u04E0\x07\x16\x02\x02\u04E0\u04ED\x07Y\x02\x02\u04E1\u04E2\x07\x12\x02" +
		"\x02\u04E2\u04ED\x07Y\x02\x02\u04E3\u04E5\x07&\x02\x02\u04E4\u04E6\x05" +
		".\x18\x02\u04E5\u04E4\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6" +
		"\u04E7\x03\x02\x02\x02\u04E7\u04ED\x07Y\x02\x02\u04E8\u04E9\x07\x1F\x02" +
		"\x02\u04E9\u04EA\x05\x0E\b\x02\u04EA\u04EB\x07Y\x02\x02\u04EB\u04ED\x03" +
		"\x02\x02\x02\u04EC\u04DC\x03\x02\x02\x02\u04EC\u04DF\x03\x02\x02\x02\u04EC" +
		"\u04E1\x03\x02\x02\x02\u04EC\u04E3\x03\x02\x02\x02\u04EC\u04E8\x03\x02" +
		"\x02\x02\u04ED\xA5\x03\x02\x02\x02\u04EE\u04F0\x05\xA8U\x02\u04EF\u04EE" +
		"\x03\x02\x02\x02\u04EF\u04F0\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02" +
		"\u04F1\u04F2\x07\x02\x02\x03\u04F2\xA7\x03\x02\x02\x02\u04F3\u04F4\bU" +
		"\x01\x02\u04F4\u04F5\x05\xAAV\x02\u04F5\u04FA\x03\x02\x02\x02\u04F6\u04F7" +
		"\f\x03\x02\x02\u04F7\u04F9\x05\xAAV\x02\u04F8\u04F6\x03\x02\x02\x02\u04F9" +
		"\u04FC\x03\x02\x02\x02\u04FA\u04F8\x03\x02\x02\x02\u04FA\u04FB\x03\x02" +
		"\x02\x02\u04FB\xA9\x03\x02\x02\x02\u04FC\u04FA\x03\x02\x02\x02\u04FD\u0501" +
		"\x05\xACW\x02\u04FE\u0501\x052\x1A\x02\u04FF\u0501\x07Y\x02\x02\u0500" +
		"\u04FD\x03\x02\x02\x02\u0500\u04FE\x03\x02\x02\x02\u0500\u04FF\x03\x02" +
		"\x02\x02\u0501\xAB\x03\x02\x02\x02\u0502\u0504\x054\x1B\x02\u0503\u0502" +
		"\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02" +
		"\u0505\u0507\x05`1\x02\u0506\u0508\x05\xAEX\x02\u0507\u0506\x03\x02\x02" +
		"\x02\u0507\u0508\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050A" +
		"\x05\x92J\x02\u050A\xAD\x03\x02\x02\x02\u050B\u050C\bX\x01\x02\u050C\u050D" +
		"\x052\x1A\x02\u050D\u0512\x03\x02\x02\x02\u050E\u050F\f\x03\x02\x02\u050F" +
		"\u0511\x052\x1A\x02\u0510\u050E\x03\x02\x02\x02\u0511\u0514\x03\x02\x02" +
		"\x02\u0512\u0510\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\xAF" +
		"\x03\x02\x02\x02\u0514\u0512\x03\x02\x02\x02\x90\xB5\xBD\xD1\xE2\xEC\u0110" +
		"\u011A\u0127\u0129\u0134\u014D\u015E\u016C\u016E\u017A\u017C\u0188\u018A" +
		"\u019C\u019E\u01AA\u01AC\u01B7\u01C2\u01CD\u01D8\u01E3\u01EC\u01F4\u0200" +
		"\u020D\u0212\u0217\u021E\u0228\u0230\u0243\u0249\u024E\u0257\u0262\u0267" +
		"\u026C\u0270\u0274\u0276\u0280\u0285\u0289\u028D\u0295\u029E\u02A8\u02B0" +
		"\u02C1\u02CD\u02D0\u02D6\u02E4\u02EA\u02EF\u02F2\u02F9\u0308\u0314\u0317" +
		"\u0319\u0321\u0325\u0333\u0337\u033C\u033F\u0342\u0349\u034B\u0350\u0354" +
		"\u0359\u035D\u0360\u0369\u0371\u037B\u0383\u0385\u038F\u0394\u0398\u039E" +
		"\u03A1\u03AA\u03AF\u03B2\u03B8\u03C8\u03CE\u03D1\u03D6\u03D9\u03E0\u03F3" +
		"\u03F9\u03FC\u03FE\u040D\u0411\u0418\u041D\u042A\u0433\u043C\u044F\u0452" +
		"\u045A\u045D\u0461\u0466\u0473\u0477\u0482\u0487\u048A\u0495\u049D\u04B3" +
		"\u04B8\u04BC\u04BF\u04C3\u04C7\u04C9\u04CF\u04D9\u04E5\u04EC\u04EF\u04FA" +
		"\u0500\u0503\u0507\u0512";
	public static readonly _serializedATN: string = Utils.join(
		[
			CGrammarParser._serializedATNSegment0,
			CGrammarParser._serializedATNSegment1,
			CGrammarParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CGrammarParser.__ATN) {
			CGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CGrammarParser._serializedATN));
		}

		return CGrammarParser.__ATN;
	}

}

export class PrimaryExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Identifier, 0); }
	public Constant(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Constant, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.StringLiteral);
		} else {
			return this.getToken(CGrammarParser.StringLiteral, i);
		}
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightParen, 0); }
	public genericSelection(): GenericSelectionContext | undefined {
		return this.tryGetRuleContext(0, GenericSelectionContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericSelectionContext extends ParserRuleContext {
	public Generic(): TerminalNode { return this.getToken(CGrammarParser.Generic, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CGrammarParser.LeftParen, 0); }
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public Comma(): TerminalNode { return this.getToken(CGrammarParser.Comma, 0); }
	public genericAssocList(): GenericAssocListContext {
		return this.getRuleContext(0, GenericAssocListContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CGrammarParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_genericSelection; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterGenericSelection) {
			listener.enterGenericSelection(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitGenericSelection) {
			listener.exitGenericSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitGenericSelection) {
			return visitor.visitGenericSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericAssocListContext extends ParserRuleContext {
	public genericAssociation(): GenericAssociationContext {
		return this.getRuleContext(0, GenericAssociationContext);
	}
	public genericAssocList(): GenericAssocListContext | undefined {
		return this.tryGetRuleContext(0, GenericAssocListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_genericAssocList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterGenericAssocList) {
			listener.enterGenericAssocList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitGenericAssocList) {
			listener.exitGenericAssocList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitGenericAssocList) {
			return visitor.visitGenericAssocList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericAssociationContext extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public Colon(): TerminalNode { return this.getToken(CGrammarParser.Colon, 0); }
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_genericAssociation; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterGenericAssociation) {
			listener.enterGenericAssociation(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitGenericAssociation) {
			listener.exitGenericAssociation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitGenericAssociation) {
			return visitor.visitGenericAssociation(this);
		} else {
			return visitor.visitChildren(this);
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
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightBracket, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightParen, 0); }
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Dot, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Identifier, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Arrow, 0); }
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.MinusMinus, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftBrace, 0); }
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentExpressionListContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_argumentExpressionList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterArgumentExpressionList) {
			listener.enterArgumentExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitArgumentExpressionList) {
			listener.exitArgumentExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitArgumentExpressionList) {
			return visitor.visitArgumentExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.PlusPlus, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.MinusMinus, 0); }
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	public Sizeof(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Sizeof, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightParen, 0); }
	public Alignof(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Alignof, 0); }
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.AndAnd, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.And, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Star, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Minus, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Tilde, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightParen, 0); }
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.DigitSequence, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_castExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public castExpression(): CastExpressionContext {
		return this.getRuleContext(0, CastExpressionContext);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeExpressionContext);
	}
	public Star(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Star, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Mod, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public additiveExpression(): AdditiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveExpressionContext);
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	public LeftShift(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftShift, 0); }
	public RightShift(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightShift, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext {
		return this.getRuleContext(0, ShiftExpressionContext);
	}
	public relationalExpression(): RelationalExpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalExpressionContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Greater, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LessEqual, 0); }
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.GreaterEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public equalityExpression(): EqualityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityExpressionContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.NotEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	public andExpression(): AndExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndExpressionContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.And, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_andExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext {
		return this.getRuleContext(0, AndExpressionContext);
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveOrExpressionContext);
	}
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Caret, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_exclusiveOrExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterExclusiveOrExpression) {
			listener.enterExclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitExclusiveOrExpression) {
			listener.exitExclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExpression) {
			return visitor.visitExclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getRuleContext(0, ExclusiveOrExpressionContext);
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, InclusiveOrExpressionContext);
	}
	public Or(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Or, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_inclusiveOrExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterInclusiveOrExpression) {
			listener.enterInclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitInclusiveOrExpression) {
			listener.exitInclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExpression) {
			return visitor.visitInclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getRuleContext(0, InclusiveOrExpressionContext);
	}
	public logicalAndExpression(): LogicalAndExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalAndExpressionContext);
	}
	public AndAnd(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.AndAnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getRuleContext(0, LogicalAndExpressionContext);
	}
	public logicalOrExpression(): LogicalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalOrExpressionContext);
	}
	public OrOr(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.OrOr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	public Question(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Question, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Colon, 0); }
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.DigitSequence, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_assignmentExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Assign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.ModAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.MinusAssign, 0); }
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftShiftAssign, 0); }
	public RightShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightShiftAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.AndAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.XorAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.OrAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_expression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
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
	public get ruleIndex(): number { return CGrammarParser.RULE_constantExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Semi, 0); }
	public staticAssertDeclaration(): StaticAssertDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_declaration; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationSpecifiersContext extends ParserRuleContext {
	public declarationSpecifier(): DeclarationSpecifierContext[];
	public declarationSpecifier(i: number): DeclarationSpecifierContext;
	public declarationSpecifier(i?: number): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationSpecifierContext);
		} else {
			return this.getRuleContext(i, DeclarationSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_declarationSpecifiers; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDeclarationSpecifiers) {
			listener.enterDeclarationSpecifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDeclarationSpecifiers) {
			listener.exitDeclarationSpecifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDeclarationSpecifiers) {
			return visitor.visitDeclarationSpecifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationSpecifiers2Context extends ParserRuleContext {
	public declarationSpecifier(): DeclarationSpecifierContext[];
	public declarationSpecifier(i: number): DeclarationSpecifierContext;
	public declarationSpecifier(i?: number): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationSpecifierContext);
		} else {
			return this.getRuleContext(i, DeclarationSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_declarationSpecifiers2; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDeclarationSpecifiers2) {
			listener.enterDeclarationSpecifiers2(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDeclarationSpecifiers2) {
			listener.exitDeclarationSpecifiers2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDeclarationSpecifiers2) {
			return visitor.visitDeclarationSpecifiers2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationSpecifierContext extends ParserRuleContext {
	public storageClassSpecifier(): StorageClassSpecifierContext | undefined {
		return this.tryGetRuleContext(0, StorageClassSpecifierContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public typeQualifier(): TypeQualifierContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierContext);
	}
	public functionSpecifier(): FunctionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, FunctionSpecifierContext);
	}
	public alignmentSpecifier(): AlignmentSpecifierContext | undefined {
		return this.tryGetRuleContext(0, AlignmentSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_declarationSpecifier; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDeclarationSpecifier) {
			listener.enterDeclarationSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDeclarationSpecifier) {
			listener.exitDeclarationSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDeclarationSpecifier) {
			return visitor.visitDeclarationSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorListContext extends ParserRuleContext {
	public initDeclarator(): InitDeclaratorContext {
		return this.getRuleContext(0, InitDeclaratorContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_initDeclaratorList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterInitDeclaratorList) {
			listener.enterInitDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitInitDeclaratorList) {
			listener.exitInitDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitInitDeclaratorList) {
			return visitor.visitInitDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Assign, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_initDeclarator; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterInitDeclarator) {
			listener.enterInitDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitInitDeclarator) {
			listener.exitInitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitInitDeclarator) {
			return visitor.visitInitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageClassSpecifierContext extends ParserRuleContext {
	public Typedef(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Typedef, 0); }
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Extern, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Static, 0); }
	public ThreadLocal(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.ThreadLocal, 0); }
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Auto, 0); }
	public Register(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Register, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_storageClassSpecifier; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterStorageClassSpecifier) {
			listener.enterStorageClassSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitStorageClassSpecifier) {
			listener.exitStorageClassSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitStorageClassSpecifier) {
			return visitor.visitStorageClassSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	public Void(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Void, 0); }
	public Char(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Char, 0); }
	public Short(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Short, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Int, 0); }
	public Long(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Long, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Float, 0); }
	public Double(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Double, 0); }
	public Signed(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Signed, 0); }
	public Unsigned(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Unsigned, 0); }
	public Bool(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Bool, 0); }
	public Complex(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Complex, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightParen, 0); }
	public atomicTypeSpecifier(): AtomicTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, AtomicTypeSpecifierContext);
	}
	public structOrUnionSpecifier(): StructOrUnionSpecifierContext | undefined {
		return this.tryGetRuleContext(0, StructOrUnionSpecifierContext);
	}
	public enumSpecifier(): EnumSpecifierContext | undefined {
		return this.tryGetRuleContext(0, EnumSpecifierContext);
	}
	public typedefName(): TypedefNameContext | undefined {
		return this.tryGetRuleContext(0, TypedefNameContext);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructOrUnionSpecifierContext extends ParserRuleContext {
	public structOrUnion(): StructOrUnionContext {
		return this.getRuleContext(0, StructOrUnionContext);
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftBrace, 0); }
	public structDeclarationList(): StructDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclarationListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightBrace, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_structOrUnionSpecifier; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterStructOrUnionSpecifier) {
			listener.enterStructOrUnionSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitStructOrUnionSpecifier) {
			listener.exitStructOrUnionSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitStructOrUnionSpecifier) {
			return visitor.visitStructOrUnionSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructOrUnionContext extends ParserRuleContext {
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Struct, 0); }
	public Union(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Union, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_structOrUnion; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterStructOrUnion) {
			listener.enterStructOrUnion(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitStructOrUnion) {
			listener.exitStructOrUnion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitStructOrUnion) {
			return visitor.visitStructOrUnion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclarationListContext extends ParserRuleContext {
	public structDeclaration(): StructDeclarationContext {
		return this.getRuleContext(0, StructDeclarationContext);
	}
	public structDeclarationList(): StructDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_structDeclarationList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterStructDeclarationList) {
			listener.enterStructDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitStructDeclarationList) {
			listener.exitStructDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitStructDeclarationList) {
			return visitor.visitStructDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclarationContext extends ParserRuleContext {
	public specifierQualifierList(): SpecifierQualifierListContext | undefined {
		return this.tryGetRuleContext(0, SpecifierQualifierListContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Semi, 0); }
	public structDeclaratorList(): StructDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclaratorListContext);
	}
	public staticAssertDeclaration(): StaticAssertDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticAssertDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_structDeclaration; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterStructDeclaration) {
			listener.enterStructDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitStructDeclaration) {
			listener.exitStructDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitStructDeclaration) {
			return visitor.visitStructDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecifierQualifierListContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public specifierQualifierList(): SpecifierQualifierListContext | undefined {
		return this.tryGetRuleContext(0, SpecifierQualifierListContext);
	}
	public typeQualifier(): TypeQualifierContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_specifierQualifierList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterSpecifierQualifierList) {
			listener.enterSpecifierQualifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitSpecifierQualifierList) {
			listener.exitSpecifierQualifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitSpecifierQualifierList) {
			return visitor.visitSpecifierQualifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclaratorListContext extends ParserRuleContext {
	public structDeclarator(): StructDeclaratorContext {
		return this.getRuleContext(0, StructDeclaratorContext);
	}
	public structDeclaratorList(): StructDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, StructDeclaratorListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_structDeclaratorList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterStructDeclaratorList) {
			listener.enterStructDeclaratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitStructDeclaratorList) {
			listener.exitStructDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitStructDeclaratorList) {
			return visitor.visitStructDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Colon, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_structDeclarator; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterStructDeclarator) {
			listener.enterStructDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitStructDeclarator) {
			listener.exitStructDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitStructDeclarator) {
			return visitor.visitStructDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumSpecifierContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(CGrammarParser.Enum, 0); }
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftBrace, 0); }
	public enumeratorList(): EnumeratorListContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightBrace, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Identifier, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_enumSpecifier; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterEnumSpecifier) {
			listener.enterEnumSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitEnumSpecifier) {
			listener.exitEnumSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitEnumSpecifier) {
			return visitor.visitEnumSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorListContext extends ParserRuleContext {
	public enumerator(): EnumeratorContext {
		return this.getRuleContext(0, EnumeratorContext);
	}
	public enumeratorList(): EnumeratorListContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_enumeratorList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterEnumeratorList) {
			listener.enterEnumeratorList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitEnumeratorList) {
			listener.exitEnumeratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitEnumeratorList) {
			return visitor.visitEnumeratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumeratorContext extends ParserRuleContext {
	public enumerationConstant(): EnumerationConstantContext {
		return this.getRuleContext(0, EnumerationConstantContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Assign, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_enumerator; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterEnumerator) {
			listener.enterEnumerator(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitEnumerator) {
			listener.exitEnumerator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitEnumerator) {
			return visitor.visitEnumerator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationConstantContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CGrammarParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_enumerationConstant; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterEnumerationConstant) {
			listener.enterEnumerationConstant(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitEnumerationConstant) {
			listener.exitEnumerationConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitEnumerationConstant) {
			return visitor.visitEnumerationConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomicTypeSpecifierContext extends ParserRuleContext {
	public Atomic(): TerminalNode { return this.getToken(CGrammarParser.Atomic, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CGrammarParser.LeftParen, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CGrammarParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_atomicTypeSpecifier; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterAtomicTypeSpecifier) {
			listener.enterAtomicTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitAtomicTypeSpecifier) {
			listener.exitAtomicTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitAtomicTypeSpecifier) {
			return visitor.visitAtomicTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeQualifierContext extends ParserRuleContext {
	public Const(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Const, 0); }
	public Restrict(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Restrict, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Volatile, 0); }
	public Atomic(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Atomic, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_typeQualifier; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterTypeQualifier) {
			listener.enterTypeQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitTypeQualifier) {
			listener.exitTypeQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitTypeQualifier) {
			return visitor.visitTypeQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSpecifierContext extends ParserRuleContext {
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Inline, 0); }
	public Noreturn(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Noreturn, 0); }
	public gccAttributeSpecifier(): GccAttributeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, GccAttributeSpecifierContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftParen, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Identifier, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_functionSpecifier; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterFunctionSpecifier) {
			listener.enterFunctionSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitFunctionSpecifier) {
			listener.exitFunctionSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionSpecifier) {
			return visitor.visitFunctionSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlignmentSpecifierContext extends ParserRuleContext {
	public Alignas(): TerminalNode { return this.getToken(CGrammarParser.Alignas, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CGrammarParser.LeftParen, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CGrammarParser.RightParen, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_alignmentSpecifier; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterAlignmentSpecifier) {
			listener.enterAlignmentSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitAlignmentSpecifier) {
			listener.exitAlignmentSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitAlignmentSpecifier) {
			return visitor.visitAlignmentSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public directDeclarator(): DirectDeclaratorContext {
		return this.getRuleContext(0, DirectDeclaratorContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext[];
	public gccDeclaratorExtension(i: number): GccDeclaratorExtensionContext;
	public gccDeclaratorExtension(i?: number): GccDeclaratorExtensionContext | GccDeclaratorExtensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccDeclaratorExtensionContext);
		} else {
			return this.getRuleContext(i, GccDeclaratorExtensionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_declarator; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Identifier, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftParen, 0); }
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightParen, 0); }
	public directDeclarator(): DirectDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectDeclaratorContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightBracket, 0); }
	public typeQualifierList(): TypeQualifierListContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierListContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public Static(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Static, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Star, 0); }
	public parameterTypeList(): ParameterTypeListContext | undefined {
		return this.tryGetRuleContext(0, ParameterTypeListContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Colon, 0); }
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.DigitSequence, 0); }
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_directDeclarator; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDirectDeclarator) {
			listener.enterDirectDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDirectDeclarator) {
			listener.exitDirectDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDirectDeclarator) {
			return visitor.visitDirectDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccDeclaratorExtensionContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightParen, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.StringLiteral);
		} else {
			return this.getToken(CGrammarParser.StringLiteral, i);
		}
	}
	public gccAttributeSpecifier(): GccAttributeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, GccAttributeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_gccDeclaratorExtension; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterGccDeclaratorExtension) {
			listener.enterGccDeclaratorExtension(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitGccDeclaratorExtension) {
			listener.exitGccDeclaratorExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitGccDeclaratorExtension) {
			return visitor.visitGccDeclaratorExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccAttributeSpecifierContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.LeftParen);
		} else {
			return this.getToken(CGrammarParser.LeftParen, i);
		}
	}
	public gccAttributeList(): GccAttributeListContext {
		return this.getRuleContext(0, GccAttributeListContext);
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.RightParen);
		} else {
			return this.getToken(CGrammarParser.RightParen, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_gccAttributeSpecifier; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterGccAttributeSpecifier) {
			listener.enterGccAttributeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitGccAttributeSpecifier) {
			listener.exitGccAttributeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitGccAttributeSpecifier) {
			return visitor.visitGccAttributeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccAttributeListContext extends ParserRuleContext {
	public gccAttribute(): GccAttributeContext[];
	public gccAttribute(i: number): GccAttributeContext;
	public gccAttribute(i?: number): GccAttributeContext | GccAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccAttributeContext);
		} else {
			return this.getRuleContext(i, GccAttributeContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.Comma);
		} else {
			return this.getToken(CGrammarParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_gccAttributeList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterGccAttributeList) {
			listener.enterGccAttributeList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitGccAttributeList) {
			listener.exitGccAttributeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitGccAttributeList) {
			return visitor.visitGccAttributeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GccAttributeContext extends ParserRuleContext {
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.LeftParen);
		} else {
			return this.getToken(CGrammarParser.LeftParen, i);
		}
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.RightParen);
		} else {
			return this.getToken(CGrammarParser.RightParen, i);
		}
	}
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_gccAttribute; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterGccAttribute) {
			listener.enterGccAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitGccAttribute) {
			listener.exitGccAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitGccAttribute) {
			return visitor.visitGccAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedParenthesesBlockContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.LeftParen);
		} else {
			return this.getToken(CGrammarParser.LeftParen, i);
		}
	}
	public nestedParenthesesBlock(): NestedParenthesesBlockContext[];
	public nestedParenthesesBlock(i: number): NestedParenthesesBlockContext;
	public nestedParenthesesBlock(i?: number): NestedParenthesesBlockContext | NestedParenthesesBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NestedParenthesesBlockContext);
		} else {
			return this.getRuleContext(i, NestedParenthesesBlockContext);
		}
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.RightParen);
		} else {
			return this.getToken(CGrammarParser.RightParen, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_nestedParenthesesBlock; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterNestedParenthesesBlock) {
			listener.enterNestedParenthesesBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitNestedParenthesesBlock) {
			listener.exitNestedParenthesesBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitNestedParenthesesBlock) {
			return visitor.visitNestedParenthesesBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerContext extends ParserRuleContext {
	public Star(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Star, 0); }
	public typeQualifierList(): TypeQualifierListContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierListContext);
	}
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Caret, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_pointer; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterPointer) {
			listener.enterPointer(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitPointer) {
			listener.exitPointer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitPointer) {
			return visitor.visitPointer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeQualifierListContext extends ParserRuleContext {
	public typeQualifier(): TypeQualifierContext {
		return this.getRuleContext(0, TypeQualifierContext);
	}
	public typeQualifierList(): TypeQualifierListContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_typeQualifierList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterTypeQualifierList) {
			listener.enterTypeQualifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitTypeQualifierList) {
			listener.exitTypeQualifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitTypeQualifierList) {
			return visitor.visitTypeQualifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterTypeListContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_parameterTypeList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterParameterTypeList) {
			listener.enterParameterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitParameterTypeList) {
			listener.exitParameterTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitParameterTypeList) {
			return visitor.visitParameterTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameterDeclaration(): ParameterDeclarationContext {
		return this.getRuleContext(0, ParameterDeclarationContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclarationContext extends ParserRuleContext {
	public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public declarationSpecifiers2(): DeclarationSpecifiers2Context | undefined {
		return this.tryGetRuleContext(0, DeclarationSpecifiers2Context);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_parameterDeclaration; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitParameterDeclaration) {
			return visitor.visitParameterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CGrammarParser.Identifier, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public specifierQualifierList(): SpecifierQualifierListContext {
		return this.getRuleContext(0, SpecifierQualifierListContext);
	}
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_typeName; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbstractDeclaratorContext extends ParserRuleContext {
	public pointer(): PointerContext | undefined {
		return this.tryGetRuleContext(0, PointerContext);
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext);
	}
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext[];
	public gccDeclaratorExtension(i: number): GccDeclaratorExtensionContext;
	public gccDeclaratorExtension(i?: number): GccDeclaratorExtensionContext | GccDeclaratorExtensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccDeclaratorExtensionContext);
		} else {
			return this.getRuleContext(i, GccDeclaratorExtensionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_abstractDeclarator; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterAbstractDeclarator) {
			listener.enterAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitAbstractDeclarator) {
			listener.exitAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitAbstractDeclarator) {
			return visitor.visitAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectAbstractDeclaratorContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftParen, 0); }
	public abstractDeclarator(): AbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractDeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightParen, 0); }
	public gccDeclaratorExtension(): GccDeclaratorExtensionContext[];
	public gccDeclaratorExtension(i: number): GccDeclaratorExtensionContext;
	public gccDeclaratorExtension(i?: number): GccDeclaratorExtensionContext | GccDeclaratorExtensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GccDeclaratorExtensionContext);
		} else {
			return this.getRuleContext(i, GccDeclaratorExtensionContext);
		}
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightBracket, 0); }
	public typeQualifierList(): TypeQualifierListContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierListContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public Static(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Static, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Star, 0); }
	public parameterTypeList(): ParameterTypeListContext | undefined {
		return this.tryGetRuleContext(0, ParameterTypeListContext);
	}
	public directAbstractDeclarator(): DirectAbstractDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DirectAbstractDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_directAbstractDeclarator; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDirectAbstractDeclarator) {
			listener.enterDirectAbstractDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDirectAbstractDeclarator) {
			listener.exitDirectAbstractDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDirectAbstractDeclarator) {
			return visitor.visitDirectAbstractDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedefNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CGrammarParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_typedefName; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterTypedefName) {
			listener.enterTypedefName(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitTypedefName) {
			listener.exitTypedefName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitTypedefName) {
			return visitor.visitTypedefName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftBrace, 0); }
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_initializer; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerListContext extends ParserRuleContext {
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public designation(): DesignationContext | undefined {
		return this.tryGetRuleContext(0, DesignationContext);
	}
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_initializerList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterInitializerList) {
			listener.enterInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitInitializerList) {
			listener.exitInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitInitializerList) {
			return visitor.visitInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignationContext extends ParserRuleContext {
	public designatorList(): DesignatorListContext {
		return this.getRuleContext(0, DesignatorListContext);
	}
	public Assign(): TerminalNode { return this.getToken(CGrammarParser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_designation; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDesignation) {
			listener.enterDesignation(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDesignation) {
			listener.exitDesignation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDesignation) {
			return visitor.visitDesignation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorListContext extends ParserRuleContext {
	public designator(): DesignatorContext {
		return this.getRuleContext(0, DesignatorContext);
	}
	public designatorList(): DesignatorListContext | undefined {
		return this.tryGetRuleContext(0, DesignatorListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_designatorList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDesignatorList) {
			listener.enterDesignatorList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDesignatorList) {
			listener.exitDesignatorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDesignatorList) {
			return visitor.visitDesignatorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightBracket, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Dot, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_designator; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDesignator) {
			listener.enterDesignator(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDesignator) {
			listener.exitDesignator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDesignator) {
			return visitor.visitDesignator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticAssertDeclarationContext extends ParserRuleContext {
	public StaticAssert(): TerminalNode { return this.getToken(CGrammarParser.StaticAssert, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CGrammarParser.LeftParen, 0); }
	public constantExpression(): ConstantExpressionContext {
		return this.getRuleContext(0, ConstantExpressionContext);
	}
	public Comma(): TerminalNode { return this.getToken(CGrammarParser.Comma, 0); }
	public RightParen(): TerminalNode { return this.getToken(CGrammarParser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CGrammarParser.Semi, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.StringLiteral);
		} else {
			return this.getToken(CGrammarParser.StringLiteral, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_staticAssertDeclaration; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterStaticAssertDeclaration) {
			listener.enterStaticAssertDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitStaticAssertDeclaration) {
			listener.exitStaticAssertDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitStaticAssertDeclaration) {
			return visitor.visitStaticAssertDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
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
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.RightParen, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Semi, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Volatile, 0); }
	public logicalOrExpression(): LogicalOrExpressionContext[];
	public logicalOrExpression(i: number): LogicalOrExpressionContext;
	public logicalOrExpression(i?: number): LogicalOrExpressionContext | LogicalOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalOrExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalOrExpressionContext);
		}
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.Colon);
		} else {
			return this.getToken(CGrammarParser.Colon, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.Comma);
		} else {
			return this.getToken(CGrammarParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_statement; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Identifier, 0); }
	public Colon(): TerminalNode { return this.getToken(CGrammarParser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Case(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Case, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_labeledStatement; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CGrammarParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CGrammarParser.RightBrace, 0); }
	public blockItemList(): BlockItemListContext | undefined {
		return this.tryGetRuleContext(0, BlockItemListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_compoundStatement; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemListContext extends ParserRuleContext {
	public blockItem(): BlockItemContext {
		return this.getRuleContext(0, BlockItemContext);
	}
	public blockItemList(): BlockItemListContext | undefined {
		return this.tryGetRuleContext(0, BlockItemListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_blockItemList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterBlockItemList) {
			listener.enterBlockItemList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitBlockItemList) {
			listener.exitBlockItemList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitBlockItemList) {
			return visitor.visitBlockItemList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_blockItem; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterBlockItem) {
			listener.enterBlockItem(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitBlockItem) {
			listener.exitBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitBlockItem) {
			return visitor.visitBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CGrammarParser.Semi, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionStatementContext extends ParserRuleContext {
	public If(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CGrammarParser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CGrammarParser.RightParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Else, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Switch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_selectionStatement; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterSelectionStatement) {
			listener.enterSelectionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitSelectionStatement) {
			listener.exitSelectionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitSelectionStatement) {
			return visitor.visitSelectionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	public While(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.While, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CGrammarParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CGrammarParser.RightParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Do(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Do, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Semi, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.For, 0); }
	public forCondition(): ForConditionContext | undefined {
		return this.tryGetRuleContext(0, ForConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_iterationStatement; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterIterationStatement) {
			listener.enterIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitIterationStatement) {
			listener.exitIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitIterationStatement) {
			return visitor.visitIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForConditionContext extends ParserRuleContext {
	public forDeclaration(): ForDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ForDeclarationContext);
	}
	public Semi(): TerminalNode[];
	public Semi(i: number): TerminalNode;
	public Semi(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.Semi);
		} else {
			return this.getToken(CGrammarParser.Semi, i);
		}
	}
	public forExpression(): ForExpressionContext[];
	public forExpression(i: number): ForExpressionContext;
	public forExpression(i?: number): ForExpressionContext | ForExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForExpressionContext);
		} else {
			return this.getRuleContext(i, ForExpressionContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_forCondition; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterForCondition) {
			listener.enterForCondition(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitForCondition) {
			listener.exitForCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitForCondition) {
			return visitor.visitForCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForDeclarationContext extends ParserRuleContext {
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getRuleContext(0, DeclarationSpecifiersContext);
	}
	public initDeclaratorList(): InitDeclaratorListContext | undefined {
		return this.tryGetRuleContext(0, InitDeclaratorListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_forDeclaration; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterForDeclaration) {
			listener.enterForDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitForDeclaration) {
			listener.exitForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitForDeclaration) {
			return visitor.visitForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public forExpression(): ForExpressionContext | undefined {
		return this.tryGetRuleContext(0, ForExpressionContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_forExpression; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterForExpression) {
			listener.enterForExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitForExpression) {
			listener.exitForExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitForExpression) {
			return visitor.visitForExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JumpStatementContext extends ParserRuleContext {
	public Goto(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Goto, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Identifier, 0); }
	public Semi(): TerminalNode { return this.getToken(CGrammarParser.Semi, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Continue, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Break, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_jumpStatement; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterJumpStatement) {
			listener.enterJumpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitJumpStatement) {
			listener.exitJumpStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitJumpStatement) {
			return visitor.visitJumpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CGrammarParser.EOF, 0); }
	public translationUnit(): TranslationUnitContext | undefined {
		return this.tryGetRuleContext(0, TranslationUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TranslationUnitContext extends ParserRuleContext {
	public externalDeclaration(): ExternalDeclarationContext {
		return this.getRuleContext(0, ExternalDeclarationContext);
	}
	public translationUnit(): TranslationUnitContext | undefined {
		return this.tryGetRuleContext(0, TranslationUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_translationUnit; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterTranslationUnit) {
			listener.enterTranslationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitTranslationUnit) {
			listener.exitTranslationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitTranslationUnit) {
			return visitor.visitTranslationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternalDeclarationContext extends ParserRuleContext {
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_externalDeclaration; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterExternalDeclaration) {
			listener.enterExternalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitExternalDeclaration) {
			listener.exitExternalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitExternalDeclaration) {
			return visitor.visitExternalDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationListContext extends ParserRuleContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public declarationList(): DeclarationListContext | undefined {
		return this.tryGetRuleContext(0, DeclarationListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_declarationList; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterDeclarationList) {
			listener.enterDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitDeclarationList) {
			listener.exitDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitDeclarationList) {
			return visitor.visitDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


