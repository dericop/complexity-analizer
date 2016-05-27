// Generated from gComp.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link gCompParser}.
 */
public interface gCompListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link gCompParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(gCompParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(gCompParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#ps_function}.
	 * @param ctx the parse tree
	 */
	void enterPs_function(gCompParser.Ps_functionContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#ps_function}.
	 * @param ctx the parse tree
	 */
	void exitPs_function(gCompParser.Ps_functionContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void enterParameterList(gCompParser.ParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void exitParameterList(gCompParser.ParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(gCompParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(gCompParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#arrayParameter}.
	 * @param ctx the parse tree
	 */
	void enterArrayParameter(gCompParser.ArrayParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#arrayParameter}.
	 * @param ctx the parse tree
	 */
	void exitArrayParameter(gCompParser.ArrayParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#arrayDeclarations}.
	 * @param ctx the parse tree
	 */
	void enterArrayDeclarations(gCompParser.ArrayDeclarationsContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#arrayDeclarations}.
	 * @param ctx the parse tree
	 */
	void exitArrayDeclarations(gCompParser.ArrayDeclarationsContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#arrayDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterArrayDeclaration(gCompParser.ArrayDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#arrayDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitArrayDeclaration(gCompParser.ArrayDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#dims}.
	 * @param ctx the parse tree
	 */
	void enterDims(gCompParser.DimsContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#dims}.
	 * @param ctx the parse tree
	 */
	void exitDims(gCompParser.DimsContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(gCompParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(gCompParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#blockStatements}.
	 * @param ctx the parse tree
	 */
	void enterBlockStatements(gCompParser.BlockStatementsContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#blockStatements}.
	 * @param ctx the parse tree
	 */
	void exitBlockStatements(gCompParser.BlockStatementsContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(gCompParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(gCompParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(gCompParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(gCompParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#variableDeclarations}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclarations(gCompParser.VariableDeclarationsContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#variableDeclarations}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclarations(gCompParser.VariableDeclarationsContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(gCompParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(gCompParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(gCompParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(gCompParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#infixOperator}.
	 * @param ctx the parse tree
	 */
	void enterInfixOperator(gCompParser.InfixOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#infixOperator}.
	 * @param ctx the parse tree
	 */
	void exitInfixOperator(gCompParser.InfixOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#expression1}.
	 * @param ctx the parse tree
	 */
	void enterExpression1(gCompParser.Expression1Context ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#expression1}.
	 * @param ctx the parse tree
	 */
	void exitExpression1(gCompParser.Expression1Context ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#prefixOperator}.
	 * @param ctx the parse tree
	 */
	void enterPrefixOperator(gCompParser.PrefixOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#prefixOperator}.
	 * @param ctx the parse tree
	 */
	void exitPrefixOperator(gCompParser.PrefixOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#roundExpression}.
	 * @param ctx the parse tree
	 */
	void enterRoundExpression(gCompParser.RoundExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#roundExpression}.
	 * @param ctx the parse tree
	 */
	void exitRoundExpression(gCompParser.RoundExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#expression2}.
	 * @param ctx the parse tree
	 */
	void enterExpression2(gCompParser.Expression2Context ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#expression2}.
	 * @param ctx the parse tree
	 */
	void exitExpression2(gCompParser.Expression2Context ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(gCompParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(gCompParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#callParameterList}.
	 * @param ctx the parse tree
	 */
	void enterCallParameterList(gCompParser.CallParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#callParameterList}.
	 * @param ctx the parse tree
	 */
	void exitCallParameterList(gCompParser.CallParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#callParameters}.
	 * @param ctx the parse tree
	 */
	void enterCallParameters(gCompParser.CallParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#callParameters}.
	 * @param ctx the parse tree
	 */
	void exitCallParameters(gCompParser.CallParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(gCompParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(gCompParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#arrayElement}.
	 * @param ctx the parse tree
	 */
	void enterArrayElement(gCompParser.ArrayElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#arrayElement}.
	 * @param ctx the parse tree
	 */
	void exitArrayElement(gCompParser.ArrayElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#subArray}.
	 * @param ctx the parse tree
	 */
	void enterSubArray(gCompParser.SubArrayContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#subArray}.
	 * @param ctx the parse tree
	 */
	void exitSubArray(gCompParser.SubArrayContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#arrayLength}.
	 * @param ctx the parse tree
	 */
	void enterArrayLength(gCompParser.ArrayLengthContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#arrayLength}.
	 * @param ctx the parse tree
	 */
	void exitArrayLength(gCompParser.ArrayLengthContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(gCompParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(gCompParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#ifElseStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfElseStatement(gCompParser.IfElseStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#ifElseStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfElseStatement(gCompParser.IfElseStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void enterWhileStatement(gCompParser.WhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void exitWhileStatement(gCompParser.WhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void enterForStatement(gCompParser.ForStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void exitForStatement(gCompParser.ForStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#repeatStatement}.
	 * @param ctx the parse tree
	 */
	void enterRepeatStatement(gCompParser.RepeatStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#repeatStatement}.
	 * @param ctx the parse tree
	 */
	void exitRepeatStatement(gCompParser.RepeatStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link gCompParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void enterExpressionStatement(gCompParser.ExpressionStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link gCompParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void exitExpressionStatement(gCompParser.ExpressionStatementContext ctx);
}