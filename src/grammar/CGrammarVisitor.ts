// Generated from lib/CGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CGrammarParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.genericSelection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericSelection?: (ctx: GenericSelectionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.genericAssocList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericAssocList?: (ctx: GenericAssocListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.genericAssociation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericAssociation?: (ctx: GenericAssociationContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.castExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.declarationSpecifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.declarationSpecifiers2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationSpecifiers2?: (ctx: DeclarationSpecifiers2Context) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.declarationSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.initDeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclaratorList?: (ctx: InitDeclaratorListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.initDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclarator?: (ctx: InitDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.storageClassSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorageClassSpecifier?: (ctx: StorageClassSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.structOrUnionSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructOrUnionSpecifier?: (ctx: StructOrUnionSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.structOrUnion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructOrUnion?: (ctx: StructOrUnionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.structDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDeclarationList?: (ctx: StructDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.structDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDeclaration?: (ctx: StructDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.specifierQualifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecifierQualifierList?: (ctx: SpecifierQualifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.structDeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDeclaratorList?: (ctx: StructDeclaratorListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.structDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDeclarator?: (ctx: StructDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.enumSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumSpecifier?: (ctx: EnumSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.enumeratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeratorList?: (ctx: EnumeratorListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.enumerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerator?: (ctx: EnumeratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.enumerationConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationConstant?: (ctx: EnumerationConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.atomicTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomicTypeSpecifier?: (ctx: AtomicTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.typeQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeQualifier?: (ctx: TypeQualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.functionSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionSpecifier?: (ctx: FunctionSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.alignmentSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlignmentSpecifier?: (ctx: AlignmentSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarator?: (ctx: DeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.directDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectDeclarator?: (ctx: DirectDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.gccDeclaratorExtension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGccDeclaratorExtension?: (ctx: GccDeclaratorExtensionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.gccAttributeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGccAttributeSpecifier?: (ctx: GccAttributeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.gccAttributeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGccAttributeList?: (ctx: GccAttributeListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.gccAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGccAttribute?: (ctx: GccAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.nestedParenthesesBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedParenthesesBlock?: (ctx: NestedParenthesesBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.pointer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointer?: (ctx: PointerContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.typeQualifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeQualifierList?: (ctx: TypeQualifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.parameterTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterTypeList?: (ctx: ParameterTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.abstractDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstractDeclarator?: (ctx: AbstractDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.directAbstractDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectAbstractDeclarator?: (ctx: DirectAbstractDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.typedefName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedefName?: (ctx: TypedefNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.initializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerList?: (ctx: InitializerListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.designation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignation?: (ctx: DesignationContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.designatorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignatorList?: (ctx: DesignatorListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.designator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignator?: (ctx: DesignatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.staticAssertDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticAssertDeclaration?: (ctx: StaticAssertDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.labeledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStatement?: (ctx: LabeledStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.compoundStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.blockItemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItemList?: (ctx: BlockItemListContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.blockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItem?: (ctx: BlockItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.selectionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionStatement?: (ctx: SelectionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationStatement?: (ctx: IterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.forCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForCondition?: (ctx: ForConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.forDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForDeclaration?: (ctx: ForDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.forExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForExpression?: (ctx: ForExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.jumpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJumpStatement?: (ctx: JumpStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.translationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTranslationUnit?: (ctx: TranslationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.externalDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalDeclaration?: (ctx: ExternalDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CGrammarParser.declarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationList?: (ctx: DeclarationListContext) => Result;
}

