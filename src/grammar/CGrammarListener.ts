// Generated from lib/CGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PrimaryExpressionContext } from "./CGrammarParser";
import { GenericSelectionContext } from "./CGrammarParser";
import { GenericAssocListContext } from "./CGrammarParser";
import { GenericAssociationContext } from "./CGrammarParser";
import { PostfixExpressionContext } from "./CGrammarParser";
import { ArgumentExpressionListContext } from "./CGrammarParser";
import { UnaryExpressionContext } from "./CGrammarParser";
import { UnaryOperatorContext } from "./CGrammarParser";
import { CastExpressionContext } from "./CGrammarParser";
import { MultiplicativeExpressionContext } from "./CGrammarParser";
import { AdditiveExpressionContext } from "./CGrammarParser";
import { ShiftExpressionContext } from "./CGrammarParser";
import { RelationalExpressionContext } from "./CGrammarParser";
import { EqualityExpressionContext } from "./CGrammarParser";
import { AndExpressionContext } from "./CGrammarParser";
import { ExclusiveOrExpressionContext } from "./CGrammarParser";
import { InclusiveOrExpressionContext } from "./CGrammarParser";
import { LogicalAndExpressionContext } from "./CGrammarParser";
import { LogicalOrExpressionContext } from "./CGrammarParser";
import { ConditionalExpressionContext } from "./CGrammarParser";
import { AssignmentExpressionContext } from "./CGrammarParser";
import { AssignmentOperatorContext } from "./CGrammarParser";
import { ExpressionContext } from "./CGrammarParser";
import { ConstantExpressionContext } from "./CGrammarParser";
import { DeclarationContext } from "./CGrammarParser";
import { DeclarationSpecifiersContext } from "./CGrammarParser";
import { DeclarationSpecifiers2Context } from "./CGrammarParser";
import { DeclarationSpecifierContext } from "./CGrammarParser";
import { InitDeclaratorListContext } from "./CGrammarParser";
import { InitDeclaratorContext } from "./CGrammarParser";
import { StorageClassSpecifierContext } from "./CGrammarParser";
import { TypeSpecifierContext } from "./CGrammarParser";
import { StructOrUnionSpecifierContext } from "./CGrammarParser";
import { StructOrUnionContext } from "./CGrammarParser";
import { StructDeclarationListContext } from "./CGrammarParser";
import { StructDeclarationContext } from "./CGrammarParser";
import { SpecifierQualifierListContext } from "./CGrammarParser";
import { StructDeclaratorListContext } from "./CGrammarParser";
import { StructDeclaratorContext } from "./CGrammarParser";
import { EnumSpecifierContext } from "./CGrammarParser";
import { EnumeratorListContext } from "./CGrammarParser";
import { EnumeratorContext } from "./CGrammarParser";
import { EnumerationConstantContext } from "./CGrammarParser";
import { AtomicTypeSpecifierContext } from "./CGrammarParser";
import { TypeQualifierContext } from "./CGrammarParser";
import { FunctionSpecifierContext } from "./CGrammarParser";
import { AlignmentSpecifierContext } from "./CGrammarParser";
import { DeclaratorContext } from "./CGrammarParser";
import { DirectDeclaratorContext } from "./CGrammarParser";
import { GccDeclaratorExtensionContext } from "./CGrammarParser";
import { GccAttributeSpecifierContext } from "./CGrammarParser";
import { GccAttributeListContext } from "./CGrammarParser";
import { GccAttributeContext } from "./CGrammarParser";
import { NestedParenthesesBlockContext } from "./CGrammarParser";
import { PointerContext } from "./CGrammarParser";
import { TypeQualifierListContext } from "./CGrammarParser";
import { ParameterTypeListContext } from "./CGrammarParser";
import { ParameterListContext } from "./CGrammarParser";
import { ParameterDeclarationContext } from "./CGrammarParser";
import { IdentifierListContext } from "./CGrammarParser";
import { TypeNameContext } from "./CGrammarParser";
import { AbstractDeclaratorContext } from "./CGrammarParser";
import { DirectAbstractDeclaratorContext } from "./CGrammarParser";
import { TypedefNameContext } from "./CGrammarParser";
import { InitializerContext } from "./CGrammarParser";
import { InitializerListContext } from "./CGrammarParser";
import { DesignationContext } from "./CGrammarParser";
import { DesignatorListContext } from "./CGrammarParser";
import { DesignatorContext } from "./CGrammarParser";
import { StaticAssertDeclarationContext } from "./CGrammarParser";
import { StatementContext } from "./CGrammarParser";
import { LabeledStatementContext } from "./CGrammarParser";
import { CompoundStatementContext } from "./CGrammarParser";
import { BlockItemListContext } from "./CGrammarParser";
import { BlockItemContext } from "./CGrammarParser";
import { ExpressionStatementContext } from "./CGrammarParser";
import { SelectionStatementContext } from "./CGrammarParser";
import { IterationStatementContext } from "./CGrammarParser";
import { ForConditionContext } from "./CGrammarParser";
import { ForDeclarationContext } from "./CGrammarParser";
import { ForExpressionContext } from "./CGrammarParser";
import { JumpStatementContext } from "./CGrammarParser";
import { CompilationUnitContext } from "./CGrammarParser";
import { TranslationUnitContext } from "./CGrammarParser";
import { ExternalDeclarationContext } from "./CGrammarParser";
import { FunctionDefinitionContext } from "./CGrammarParser";
import { DeclarationListContext } from "./CGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CGrammarParser`.
 */
export interface CGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CGrammarParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.genericSelection`.
	 * @param ctx the parse tree
	 */
	enterGenericSelection?: (ctx: GenericSelectionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.genericSelection`.
	 * @param ctx the parse tree
	 */
	exitGenericSelection?: (ctx: GenericSelectionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.genericAssocList`.
	 * @param ctx the parse tree
	 */
	enterGenericAssocList?: (ctx: GenericAssocListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.genericAssocList`.
	 * @param ctx the parse tree
	 */
	exitGenericAssocList?: (ctx: GenericAssocListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.genericAssociation`.
	 * @param ctx the parse tree
	 */
	enterGenericAssociation?: (ctx: GenericAssociationContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.genericAssociation`.
	 * @param ctx the parse tree
	 */
	exitGenericAssociation?: (ctx: GenericAssociationContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 */
	enterArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 */
	exitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.andExpression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.andExpression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	enterExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	exitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	enterInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 */
	exitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.declarationSpecifiers`.
	 * @param ctx the parse tree
	 */
	enterDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.declarationSpecifiers`.
	 * @param ctx the parse tree
	 */
	exitDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.declarationSpecifiers2`.
	 * @param ctx the parse tree
	 */
	enterDeclarationSpecifiers2?: (ctx: DeclarationSpecifiers2Context) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.declarationSpecifiers2`.
	 * @param ctx the parse tree
	 */
	exitDeclarationSpecifiers2?: (ctx: DeclarationSpecifiers2Context) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.declarationSpecifier`.
	 * @param ctx the parse tree
	 */
	enterDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.declarationSpecifier`.
	 * @param ctx the parse tree
	 */
	exitDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.initDeclaratorList`.
	 * @param ctx the parse tree
	 */
	enterInitDeclaratorList?: (ctx: InitDeclaratorListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.initDeclaratorList`.
	 * @param ctx the parse tree
	 */
	exitInitDeclaratorList?: (ctx: InitDeclaratorListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.initDeclarator`.
	 * @param ctx the parse tree
	 */
	enterInitDeclarator?: (ctx: InitDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.initDeclarator`.
	 * @param ctx the parse tree
	 */
	exitInitDeclarator?: (ctx: InitDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.storageClassSpecifier`.
	 * @param ctx the parse tree
	 */
	enterStorageClassSpecifier?: (ctx: StorageClassSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.storageClassSpecifier`.
	 * @param ctx the parse tree
	 */
	exitStorageClassSpecifier?: (ctx: StorageClassSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.structOrUnionSpecifier`.
	 * @param ctx the parse tree
	 */
	enterStructOrUnionSpecifier?: (ctx: StructOrUnionSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.structOrUnionSpecifier`.
	 * @param ctx the parse tree
	 */
	exitStructOrUnionSpecifier?: (ctx: StructOrUnionSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.structOrUnion`.
	 * @param ctx the parse tree
	 */
	enterStructOrUnion?: (ctx: StructOrUnionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.structOrUnion`.
	 * @param ctx the parse tree
	 */
	exitStructOrUnion?: (ctx: StructOrUnionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.structDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterStructDeclarationList?: (ctx: StructDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.structDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitStructDeclarationList?: (ctx: StructDeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.structDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStructDeclaration?: (ctx: StructDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.structDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStructDeclaration?: (ctx: StructDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.specifierQualifierList`.
	 * @param ctx the parse tree
	 */
	enterSpecifierQualifierList?: (ctx: SpecifierQualifierListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.specifierQualifierList`.
	 * @param ctx the parse tree
	 */
	exitSpecifierQualifierList?: (ctx: SpecifierQualifierListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.structDeclaratorList`.
	 * @param ctx the parse tree
	 */
	enterStructDeclaratorList?: (ctx: StructDeclaratorListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.structDeclaratorList`.
	 * @param ctx the parse tree
	 */
	exitStructDeclaratorList?: (ctx: StructDeclaratorListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.structDeclarator`.
	 * @param ctx the parse tree
	 */
	enterStructDeclarator?: (ctx: StructDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.structDeclarator`.
	 * @param ctx the parse tree
	 */
	exitStructDeclarator?: (ctx: StructDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.enumSpecifier`.
	 * @param ctx the parse tree
	 */
	enterEnumSpecifier?: (ctx: EnumSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.enumSpecifier`.
	 * @param ctx the parse tree
	 */
	exitEnumSpecifier?: (ctx: EnumSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.enumeratorList`.
	 * @param ctx the parse tree
	 */
	enterEnumeratorList?: (ctx: EnumeratorListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.enumeratorList`.
	 * @param ctx the parse tree
	 */
	exitEnumeratorList?: (ctx: EnumeratorListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.enumerator`.
	 * @param ctx the parse tree
	 */
	enterEnumerator?: (ctx: EnumeratorContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.enumerator`.
	 * @param ctx the parse tree
	 */
	exitEnumerator?: (ctx: EnumeratorContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.enumerationConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumerationConstant?: (ctx: EnumerationConstantContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.enumerationConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumerationConstant?: (ctx: EnumerationConstantContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.atomicTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterAtomicTypeSpecifier?: (ctx: AtomicTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.atomicTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitAtomicTypeSpecifier?: (ctx: AtomicTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.typeQualifier`.
	 * @param ctx the parse tree
	 */
	enterTypeQualifier?: (ctx: TypeQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.typeQualifier`.
	 * @param ctx the parse tree
	 */
	exitTypeQualifier?: (ctx: TypeQualifierContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.functionSpecifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionSpecifier?: (ctx: FunctionSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.functionSpecifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionSpecifier?: (ctx: FunctionSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.alignmentSpecifier`.
	 * @param ctx the parse tree
	 */
	enterAlignmentSpecifier?: (ctx: AlignmentSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.alignmentSpecifier`.
	 * @param ctx the parse tree
	 */
	exitAlignmentSpecifier?: (ctx: AlignmentSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.declarator`.
	 * @param ctx the parse tree
	 */
	enterDeclarator?: (ctx: DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.declarator`.
	 * @param ctx the parse tree
	 */
	exitDeclarator?: (ctx: DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.directDeclarator`.
	 * @param ctx the parse tree
	 */
	enterDirectDeclarator?: (ctx: DirectDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.directDeclarator`.
	 * @param ctx the parse tree
	 */
	exitDirectDeclarator?: (ctx: DirectDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.gccDeclaratorExtension`.
	 * @param ctx the parse tree
	 */
	enterGccDeclaratorExtension?: (ctx: GccDeclaratorExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.gccDeclaratorExtension`.
	 * @param ctx the parse tree
	 */
	exitGccDeclaratorExtension?: (ctx: GccDeclaratorExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.gccAttributeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterGccAttributeSpecifier?: (ctx: GccAttributeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.gccAttributeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitGccAttributeSpecifier?: (ctx: GccAttributeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.gccAttributeList`.
	 * @param ctx the parse tree
	 */
	enterGccAttributeList?: (ctx: GccAttributeListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.gccAttributeList`.
	 * @param ctx the parse tree
	 */
	exitGccAttributeList?: (ctx: GccAttributeListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.gccAttribute`.
	 * @param ctx the parse tree
	 */
	enterGccAttribute?: (ctx: GccAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.gccAttribute`.
	 * @param ctx the parse tree
	 */
	exitGccAttribute?: (ctx: GccAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.nestedParenthesesBlock`.
	 * @param ctx the parse tree
	 */
	enterNestedParenthesesBlock?: (ctx: NestedParenthesesBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.nestedParenthesesBlock`.
	 * @param ctx the parse tree
	 */
	exitNestedParenthesesBlock?: (ctx: NestedParenthesesBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.pointer`.
	 * @param ctx the parse tree
	 */
	enterPointer?: (ctx: PointerContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.pointer`.
	 * @param ctx the parse tree
	 */
	exitPointer?: (ctx: PointerContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.typeQualifierList`.
	 * @param ctx the parse tree
	 */
	enterTypeQualifierList?: (ctx: TypeQualifierListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.typeQualifierList`.
	 * @param ctx the parse tree
	 */
	exitTypeQualifierList?: (ctx: TypeQualifierListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.parameterTypeList`.
	 * @param ctx the parse tree
	 */
	enterParameterTypeList?: (ctx: ParameterTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.parameterTypeList`.
	 * @param ctx the parse tree
	 */
	exitParameterTypeList?: (ctx: ParameterTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 */
	enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 */
	exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.abstractDeclarator`.
	 * @param ctx the parse tree
	 */
	enterAbstractDeclarator?: (ctx: AbstractDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.abstractDeclarator`.
	 * @param ctx the parse tree
	 */
	exitAbstractDeclarator?: (ctx: AbstractDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.directAbstractDeclarator`.
	 * @param ctx the parse tree
	 */
	enterDirectAbstractDeclarator?: (ctx: DirectAbstractDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.directAbstractDeclarator`.
	 * @param ctx the parse tree
	 */
	exitDirectAbstractDeclarator?: (ctx: DirectAbstractDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.typedefName`.
	 * @param ctx the parse tree
	 */
	enterTypedefName?: (ctx: TypedefNameContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.typedefName`.
	 * @param ctx the parse tree
	 */
	exitTypedefName?: (ctx: TypedefNameContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.initializerList`.
	 * @param ctx the parse tree
	 */
	enterInitializerList?: (ctx: InitializerListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.initializerList`.
	 * @param ctx the parse tree
	 */
	exitInitializerList?: (ctx: InitializerListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.designation`.
	 * @param ctx the parse tree
	 */
	enterDesignation?: (ctx: DesignationContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.designation`.
	 * @param ctx the parse tree
	 */
	exitDesignation?: (ctx: DesignationContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.designatorList`.
	 * @param ctx the parse tree
	 */
	enterDesignatorList?: (ctx: DesignatorListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.designatorList`.
	 * @param ctx the parse tree
	 */
	exitDesignatorList?: (ctx: DesignatorListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.designator`.
	 * @param ctx the parse tree
	 */
	enterDesignator?: (ctx: DesignatorContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.designator`.
	 * @param ctx the parse tree
	 */
	exitDesignator?: (ctx: DesignatorContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.staticAssertDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticAssertDeclaration?: (ctx: StaticAssertDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.staticAssertDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticAssertDeclaration?: (ctx: StaticAssertDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.labeledStatement`.
	 * @param ctx the parse tree
	 */
	enterLabeledStatement?: (ctx: LabeledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.labeledStatement`.
	 * @param ctx the parse tree
	 */
	exitLabeledStatement?: (ctx: LabeledStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatement?: (ctx: CompoundStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.blockItemList`.
	 * @param ctx the parse tree
	 */
	enterBlockItemList?: (ctx: BlockItemListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.blockItemList`.
	 * @param ctx the parse tree
	 */
	exitBlockItemList?: (ctx: BlockItemListContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.blockItem`.
	 * @param ctx the parse tree
	 */
	enterBlockItem?: (ctx: BlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.blockItem`.
	 * @param ctx the parse tree
	 */
	exitBlockItem?: (ctx: BlockItemContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	enterSelectionStatement?: (ctx: SelectionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	exitSelectionStatement?: (ctx: SelectionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterIterationStatement?: (ctx: IterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitIterationStatement?: (ctx: IterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.forCondition`.
	 * @param ctx the parse tree
	 */
	enterForCondition?: (ctx: ForConditionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.forCondition`.
	 * @param ctx the parse tree
	 */
	exitForCondition?: (ctx: ForConditionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.forDeclaration`.
	 * @param ctx the parse tree
	 */
	enterForDeclaration?: (ctx: ForDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.forDeclaration`.
	 * @param ctx the parse tree
	 */
	exitForDeclaration?: (ctx: ForDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.forExpression`.
	 * @param ctx the parse tree
	 */
	enterForExpression?: (ctx: ForExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.forExpression`.
	 * @param ctx the parse tree
	 */
	exitForExpression?: (ctx: ForExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.jumpStatement`.
	 * @param ctx the parse tree
	 */
	enterJumpStatement?: (ctx: JumpStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.jumpStatement`.
	 * @param ctx the parse tree
	 */
	exitJumpStatement?: (ctx: JumpStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.translationUnit`.
	 * @param ctx the parse tree
	 */
	enterTranslationUnit?: (ctx: TranslationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.translationUnit`.
	 * @param ctx the parse tree
	 */
	exitTranslationUnit?: (ctx: TranslationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.externalDeclaration`.
	 * @param ctx the parse tree
	 */
	enterExternalDeclaration?: (ctx: ExternalDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.externalDeclaration`.
	 * @param ctx the parse tree
	 */
	exitExternalDeclaration?: (ctx: ExternalDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CGrammarParser.declarationList`.
	 * @param ctx the parse tree
	 */
	enterDeclarationList?: (ctx: DeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `CGrammarParser.declarationList`.
	 * @param ctx the parse tree
	 */
	exitDeclarationList?: (ctx: DeclarationListContext) => void;
}

