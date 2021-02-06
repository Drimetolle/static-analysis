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
	public static readonly NEWLINE = 7;
	public static readonly INT = 8;
	public static readonly RULE_prog = 0;
	public static readonly RULE_expr = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "expr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'*'", "'/'", "'+'", "'-'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"NEWLINE", "INT",
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
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CGrammarParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CGrammarParser.T__4 || _la === CGrammarParser.INT) {
				{
				{
				this.state = 4;
				this.expr(0);
				this.state = 5;
				this.match(CGrammarParser.NEWLINE);
				}
				}
				this.state = 11;
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, CGrammarParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CGrammarParser.INT:
				{
				this.state = 13;
				this.match(CGrammarParser.INT);
				}
				break;
			case CGrammarParser.T__4:
				{
				this.state = 14;
				this.match(CGrammarParser.T__4);
				this.state = 15;
				this.expr(0);
				this.state = 16;
				this.match(CGrammarParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 28;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 26;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_expr);
						this.state = 20;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 21;
						_la = this._input.LA(1);
						if (!(_la === CGrammarParser.T__0 || _la === CGrammarParser.T__1)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 22;
						this.expr(5);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CGrammarParser.RULE_expr);
						this.state = 23;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 24;
						_la = this._input.LA(1);
						if (!(_la === CGrammarParser.T__2 || _la === CGrammarParser.T__3)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 25;
						this.expr(4);
						}
						break;
					}
					}
				}
				this.state = 30;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\n\"\x04\x02\t" +
		"\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x02\x07\x02\n\n\x02\f\x02\x0E\x02" +
		"\r\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x15\n" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1D\n\x03" +
		"\f\x03\x0E\x03 \v\x03\x03\x03\x02\x02\x03\x04\x04\x02\x02\x04\x02\x02" +
		"\x04\x03\x02\x03\x04\x03\x02\x05\x06\x02#\x02\v\x03\x02\x02\x02\x04\x14" +
		"\x03\x02\x02\x02\x06\x07\x05\x04\x03\x02\x07\b\x07\t\x02\x02\b\n\x03\x02" +
		"\x02\x02\t\x06\x03\x02\x02\x02\n\r\x03\x02\x02\x02\v\t\x03\x02\x02\x02" +
		"\v\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\v\x03\x02\x02\x02\x0E\x0F" +
		"\b\x03\x01\x02\x0F\x15\x07\n\x02\x02\x10\x11\x07\x07\x02\x02\x11\x12\x05" +
		"\x04\x03\x02\x12\x13\x07\b\x02\x02\x13\x15\x03\x02\x02\x02\x14\x0E\x03" +
		"\x02\x02\x02\x14\x10\x03\x02\x02\x02\x15\x1E\x03\x02\x02\x02\x16\x17\f" +
		"\x06\x02\x02\x17\x18\t\x02\x02\x02\x18\x1D\x05\x04\x03\x07\x19\x1A\f\x05" +
		"\x02\x02\x1A\x1B\t\x03\x02\x02\x1B\x1D\x05\x04\x03\x06\x1C\x16\x03\x02" +
		"\x02\x02\x1C\x19\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02" +
		"\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x05\x03\x02\x02\x02 \x1E\x03\x02" +
		"\x02\x02\x06\v\x14\x1C\x1E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CGrammarParser.__ATN) {
			CGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CGrammarParser._serializedATN));
		}

		return CGrammarParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CGrammarParser.NEWLINE);
		} else {
			return this.getToken(CGrammarParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_prog; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(CGrammarParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CGrammarParser.RULE_expr; }
	// @Override
	public enterRule(listener: CGrammarListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CGrammarListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CGrammarVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


