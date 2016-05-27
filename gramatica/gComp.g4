grammar gComp;

program /* Entry point */
	: ps_function+ EOF
	;

/* Rules for functions */

ps_function
	: Identifier Left_parenthesis parameterList Right_parenthesis Endl arrayDeclarations block
	;

parameterList
	: parameter (Comma parameter)*
	| /* epsilon */
	;

parameter
	: arrayParameter
	| Identifier
	;

arrayParameter
	: Identifier (Left_bracket (Integer)? Right_bracket)*
	;

arrayDeclarations
	: arrayDeclaration*
	;

arrayDeclaration
	: Identifier dims Endl
	;

dims
	: Left_bracket Integer Right_bracket (Left_bracket Integer Right_bracket)*
	;

/* Rules for blocks (begin ... end) */

block
	: Begin Endl blockStatements? End Endl
	;

blockStatements
	: statement statement*
	;

statement
	: variableDeclarations Endl
	| ifStatement
	| ifElseStatement
	| whileStatement
	| forStatement
	| repeatStatement
	| returnStatement
	| expressionStatement Endl
	;

returnStatement
	: Return expression Endl
	;

variableDeclarations
	: variableDeclaration (Comma variableDeclaration)*
	;

variableDeclaration
	: Identifier (Assignation expression)?
	;

expression
	: expression1
	| expression1 infixOperator expression
	;

infixOperator
	: Less_than
	| Greater_than
	| Less_equal
	| Greater_equal
	| Equal_to
	| Not_equal
	| Plus
	| Times
	| Divided
	| Minus
	| Mod
	| Div
	| And
	| Or
	;

expression1
	: prefixOperator expression2
	| roundExpression
	| expression2
	;

prefixOperator
	: Not
	;

roundExpression
	: Ceil_start expression2 Ceil_end
	| Floor_start expression2 Floor_end
	;

expression2
	: functionCall
	| literal
	| Identifier
	| arrayElement
	| subArray
	| arrayLength
	;

functionCall
	: Call Identifier callParameterList
	;

callParameterList
	: Left_parenthesis callParameters? Right_parenthesis
	;

callParameters
	: expression (Comma expression)*
	;

literal
	: Null
	| True
	| False
	| Integer
	| String
	;

arrayElement
	: Identifier dims
	;

subArray
	: Identifier dims Left_bracket expression Dot Dot expression Right_bracket
	;

arrayLength
	: Length Left_parenthesis (Identifier|arrayElement) Right_parenthesis
	;

ifStatement
	: If Left_parenthesis expression Right_parenthesis Then Endl block
	;

ifElseStatement
	: If Left_parenthesis expression Right_parenthesis Then Endl block Else Endl block
	;

whileStatement
	: While Left_parenthesis expression Right_parenthesis Do Endl block
	;

forStatement
	: For Identifier Assignation expression To expression Do Endl block
	;

repeatStatement
	: Repeat Endl blockStatements Until Left_parenthesis expression Right_parenthesis Endl
	;

expressionStatement
	: expression
	;


Length
	: 'length'
	;

If
	: 'if'
	;

For
	: 'for'
	;

To
	: 'to'
	;

Do
	: 'do'
	;

Begin
	: 'begin'
	;

End
	: 'end'
	;

While
	: 'while'
	;

Repeat
	: 'repeat'
	;

Until
	: 'until'
	;

Then
	: 'then'
	;

Else
	: 'else'
	;

Left_bracket
	: '['
	;

Right_bracket
	: ']'
	;

Left_parenthesis
	: '('
	;

Right_parenthesis
	: ')'
	;

Call
	: 'call'
	;

Dot
	: '.'
	;



/* Operators */

Assignation
	: '<-'
	| '←'
	;

Return
	: '↑'
	| 'return'
	;

/* Boolean operators */

And
	: 'and'
	;

Or
	: 'or'
	;

Not
	: 'not'
	;


/* Relational operators */

Less_than
	: '<'
	;

Greater_than
	: '>'
	;

Less_equal
	: '≤'
	| '<='
	;

Greater_equal
	: '≥'
	| '>='
	;

Equal_to
	: '='
	;

Not_equal
	: '≠'
	| '<>'
	| '!='
	;

/* Arithmetic operators */

Plus
	: '+'
	;

Times
	: '*'
	;

Divided
	: '/'
	;


Minus
	: '-'
	;

Mod
	: 'mod'
	;

Div
	: 'div'
	;

Comma
	: ','
	;

Endl
	: '\n'
	;


/* Rounding symbols */

Ceil_start
	: '┌'
	;

Ceil_end
	: '┐'
	;

Floor_start
	: '└'
	;

Floor_end
	: '┘'
	;

/* Literals */

Null
	: 'NULL'
	;

True
	: 'true'
	;

False
	: 'false'
	;

Integer
	: [1-9][0-9]*
	| '0'
	;

String
	: '\'' StringCharacter* '\''
	;

fragment
StringCharacter
	:	~[\'\\]
	|	'\\'.
	;

Identifier
	: [A-Za-z_][A-Za-z0-9_]*
	;

/* Skip blank spaces, comments and tabs */

LineComment
    : '#'~[\n]*'\n' -> skip
    ;

WS 
	: [ \r\t]+ -> skip 
	;