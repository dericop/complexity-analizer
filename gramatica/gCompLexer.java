// Generated from gComp.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class gCompLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.5.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		Length=1, If=2, For=3, To=4, Do=5, Begin=6, End=7, While=8, Repeat=9, 
		Until=10, Then=11, Else=12, Left_bracket=13, Right_bracket=14, Left_parenthesis=15, 
		Right_parenthesis=16, Call=17, Dot=18, Assignation=19, Return=20, And=21, 
		Or=22, Not=23, Less_than=24, Greater_than=25, Less_equal=26, Greater_equal=27, 
		Equal_to=28, Not_equal=29, Plus=30, Times=31, Divided=32, Minus=33, Mod=34, 
		Div=35, Comma=36, Endl=37, Ceil_start=38, Ceil_end=39, Floor_start=40, 
		Floor_end=41, Null=42, True=43, False=44, Integer=45, String=46, Identifier=47, 
		LineComment=48, WS=49;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"Length", "If", "For", "To", "Do", "Begin", "End", "While", "Repeat", 
		"Until", "Then", "Else", "Left_bracket", "Right_bracket", "Left_parenthesis", 
		"Right_parenthesis", "Call", "Dot", "Assignation", "Return", "And", "Or", 
		"Not", "Less_than", "Greater_than", "Less_equal", "Greater_equal", "Equal_to", 
		"Not_equal", "Plus", "Times", "Divided", "Minus", "Mod", "Div", "Comma", 
		"Endl", "Ceil_start", "Ceil_end", "Floor_start", "Floor_end", "Null", 
		"True", "False", "Integer", "String", "StringCharacter", "Identifier", 
		"LineComment", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'length'", "'if'", "'for'", "'to'", "'do'", "'begin'", "'end'", 
		"'while'", "'repeat'", "'until'", "'then'", "'else'", "'['", "']'", "'('", 
		"')'", "'call'", "'.'", null, null, "'and'", "'or'", "'not'", "'<'", "'>'", 
		null, null, "'='", null, "'+'", "'*'", "'/'", "'-'", "'mod'", "'div'", 
		"','", "'\n'", "'┌'", "'┐'", "'└'", "'┘'", "'NULL'", "'true'", "'false'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "Length", "If", "For", "To", "Do", "Begin", "End", "While", "Repeat", 
		"Until", "Then", "Else", "Left_bracket", "Right_bracket", "Left_parenthesis", 
		"Right_parenthesis", "Call", "Dot", "Assignation", "Return", "And", "Or", 
		"Not", "Less_than", "Greater_than", "Less_equal", "Greater_equal", "Equal_to", 
		"Not_equal", "Plus", "Times", "Divided", "Minus", "Mod", "Div", "Comma", 
		"Endl", "Ceil_start", "Ceil_end", "Floor_start", "Floor_end", "Null", 
		"True", "False", "Integer", "String", "Identifier", "LineComment", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public gCompLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "gComp.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\63\u013e\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\6\3"+
		"\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f"+
		"\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3"+
		"\22\3\22\3\22\3\22\3\22\3\23\3\23\3\24\3\24\3\24\5\24\u00b5\n\24\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\5\25\u00be\n\25\3\26\3\26\3\26\3\26\3\27"+
		"\3\27\3\27\3\30\3\30\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\33\5\33"+
		"\u00d2\n\33\3\34\3\34\3\34\5\34\u00d7\n\34\3\35\3\35\3\36\3\36\3\36\3"+
		"\36\3\36\5\36\u00e0\n\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3#\3#\3$"+
		"\3$\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\3+\3+\3+\3,\3,\3"+
		",\3,\3,\3-\3-\3-\3-\3-\3-\3.\3.\7.\u0110\n.\f.\16.\u0113\13.\3.\5.\u0116"+
		"\n.\3/\3/\7/\u011a\n/\f/\16/\u011d\13/\3/\3/\3\60\3\60\3\60\5\60\u0124"+
		"\n\60\3\61\3\61\7\61\u0128\n\61\f\61\16\61\u012b\13\61\3\62\3\62\7\62"+
		"\u012f\n\62\f\62\16\62\u0132\13\62\3\62\3\62\3\62\3\62\3\63\6\63\u0139"+
		"\n\63\r\63\16\63\u013a\3\63\3\63\2\2\64\3\3\5\4\7\5\t\6\13\7\r\b\17\t"+
		"\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27"+
		"-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W"+
		"-Y.[/]\60_\2a\61c\62e\63\3\2\t\3\2\63;\3\2\62;\4\2))^^\5\2C\\aac|\6\2"+
		"\62;C\\aac|\3\2\f\f\5\2\13\13\17\17\"\"\u0149\2\3\3\2\2\2\2\5\3\2\2\2"+
		"\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3"+
		"\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2"+
		"\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2"+
		"\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2"+
		"\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2"+
		"\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2"+
		"\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y"+
		"\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\3g\3\2"+
		"\2\2\5n\3\2\2\2\7q\3\2\2\2\tu\3\2\2\2\13x\3\2\2\2\r{\3\2\2\2\17\u0081"+
		"\3\2\2\2\21\u0085\3\2\2\2\23\u008b\3\2\2\2\25\u0092\3\2\2\2\27\u0098\3"+
		"\2\2\2\31\u009d\3\2\2\2\33\u00a2\3\2\2\2\35\u00a4\3\2\2\2\37\u00a6\3\2"+
		"\2\2!\u00a8\3\2\2\2#\u00aa\3\2\2\2%\u00af\3\2\2\2\'\u00b4\3\2\2\2)\u00bd"+
		"\3\2\2\2+\u00bf\3\2\2\2-\u00c3\3\2\2\2/\u00c6\3\2\2\2\61\u00ca\3\2\2\2"+
		"\63\u00cc\3\2\2\2\65\u00d1\3\2\2\2\67\u00d6\3\2\2\29\u00d8\3\2\2\2;\u00df"+
		"\3\2\2\2=\u00e1\3\2\2\2?\u00e3\3\2\2\2A\u00e5\3\2\2\2C\u00e7\3\2\2\2E"+
		"\u00e9\3\2\2\2G\u00ed\3\2\2\2I\u00f1\3\2\2\2K\u00f3\3\2\2\2M\u00f5\3\2"+
		"\2\2O\u00f7\3\2\2\2Q\u00f9\3\2\2\2S\u00fb\3\2\2\2U\u00fd\3\2\2\2W\u0102"+
		"\3\2\2\2Y\u0107\3\2\2\2[\u0115\3\2\2\2]\u0117\3\2\2\2_\u0123\3\2\2\2a"+
		"\u0125\3\2\2\2c\u012c\3\2\2\2e\u0138\3\2\2\2gh\7n\2\2hi\7g\2\2ij\7p\2"+
		"\2jk\7i\2\2kl\7v\2\2lm\7j\2\2m\4\3\2\2\2no\7k\2\2op\7h\2\2p\6\3\2\2\2"+
		"qr\7h\2\2rs\7q\2\2st\7t\2\2t\b\3\2\2\2uv\7v\2\2vw\7q\2\2w\n\3\2\2\2xy"+
		"\7f\2\2yz\7q\2\2z\f\3\2\2\2{|\7d\2\2|}\7g\2\2}~\7i\2\2~\177\7k\2\2\177"+
		"\u0080\7p\2\2\u0080\16\3\2\2\2\u0081\u0082\7g\2\2\u0082\u0083\7p\2\2\u0083"+
		"\u0084\7f\2\2\u0084\20\3\2\2\2\u0085\u0086\7y\2\2\u0086\u0087\7j\2\2\u0087"+
		"\u0088\7k\2\2\u0088\u0089\7n\2\2\u0089\u008a\7g\2\2\u008a\22\3\2\2\2\u008b"+
		"\u008c\7t\2\2\u008c\u008d\7g\2\2\u008d\u008e\7r\2\2\u008e\u008f\7g\2\2"+
		"\u008f\u0090\7c\2\2\u0090\u0091\7v\2\2\u0091\24\3\2\2\2\u0092\u0093\7"+
		"w\2\2\u0093\u0094\7p\2\2\u0094\u0095\7v\2\2\u0095\u0096\7k\2\2\u0096\u0097"+
		"\7n\2\2\u0097\26\3\2\2\2\u0098\u0099\7v\2\2\u0099\u009a\7j\2\2\u009a\u009b"+
		"\7g\2\2\u009b\u009c\7p\2\2\u009c\30\3\2\2\2\u009d\u009e\7g\2\2\u009e\u009f"+
		"\7n\2\2\u009f\u00a0\7u\2\2\u00a0\u00a1\7g\2\2\u00a1\32\3\2\2\2\u00a2\u00a3"+
		"\7]\2\2\u00a3\34\3\2\2\2\u00a4\u00a5\7_\2\2\u00a5\36\3\2\2\2\u00a6\u00a7"+
		"\7*\2\2\u00a7 \3\2\2\2\u00a8\u00a9\7+\2\2\u00a9\"\3\2\2\2\u00aa\u00ab"+
		"\7e\2\2\u00ab\u00ac\7c\2\2\u00ac\u00ad\7n\2\2\u00ad\u00ae\7n\2\2\u00ae"+
		"$\3\2\2\2\u00af\u00b0\7\60\2\2\u00b0&\3\2\2\2\u00b1\u00b2\7>\2\2\u00b2"+
		"\u00b5\7/\2\2\u00b3\u00b5\7\u2192\2\2\u00b4\u00b1\3\2\2\2\u00b4\u00b3"+
		"\3\2\2\2\u00b5(\3\2\2\2\u00b6\u00be\7\u2193\2\2\u00b7\u00b8\7t\2\2\u00b8"+
		"\u00b9\7g\2\2\u00b9\u00ba\7v\2\2\u00ba\u00bb\7w\2\2\u00bb\u00bc\7t\2\2"+
		"\u00bc\u00be\7p\2\2\u00bd\u00b6\3\2\2\2\u00bd\u00b7\3\2\2\2\u00be*\3\2"+
		"\2\2\u00bf\u00c0\7c\2\2\u00c0\u00c1\7p\2\2\u00c1\u00c2\7f\2\2\u00c2,\3"+
		"\2\2\2\u00c3\u00c4\7q\2\2\u00c4\u00c5\7t\2\2\u00c5.\3\2\2\2\u00c6\u00c7"+
		"\7p\2\2\u00c7\u00c8\7q\2\2\u00c8\u00c9\7v\2\2\u00c9\60\3\2\2\2\u00ca\u00cb"+
		"\7>\2\2\u00cb\62\3\2\2\2\u00cc\u00cd\7@\2\2\u00cd\64\3\2\2\2\u00ce\u00d2"+
		"\7\u2266\2\2\u00cf\u00d0\7>\2\2\u00d0\u00d2\7?\2\2\u00d1\u00ce\3\2\2\2"+
		"\u00d1\u00cf\3\2\2\2\u00d2\66\3\2\2\2\u00d3\u00d7\7\u2267\2\2\u00d4\u00d5"+
		"\7@\2\2\u00d5\u00d7\7?\2\2\u00d6\u00d3\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d7"+
		"8\3\2\2\2\u00d8\u00d9\7?\2\2\u00d9:\3\2\2\2\u00da\u00e0\7\u2262\2\2\u00db"+
		"\u00dc\7>\2\2\u00dc\u00e0\7@\2\2\u00dd\u00de\7#\2\2\u00de\u00e0\7?\2\2"+
		"\u00df\u00da\3\2\2\2\u00df\u00db\3\2\2\2\u00df\u00dd\3\2\2\2\u00e0<\3"+
		"\2\2\2\u00e1\u00e2\7-\2\2\u00e2>\3\2\2\2\u00e3\u00e4\7,\2\2\u00e4@\3\2"+
		"\2\2\u00e5\u00e6\7\61\2\2\u00e6B\3\2\2\2\u00e7\u00e8\7/\2\2\u00e8D\3\2"+
		"\2\2\u00e9\u00ea\7o\2\2\u00ea\u00eb\7q\2\2\u00eb\u00ec\7f\2\2\u00ecF\3"+
		"\2\2\2\u00ed\u00ee\7f\2\2\u00ee\u00ef\7k\2\2\u00ef\u00f0\7x\2\2\u00f0"+
		"H\3\2\2\2\u00f1\u00f2\7.\2\2\u00f2J\3\2\2\2\u00f3\u00f4\7\f\2\2\u00f4"+
		"L\3\2\2\2\u00f5\u00f6\7\u250e\2\2\u00f6N\3\2\2\2\u00f7\u00f8\7\u2512\2"+
		"\2\u00f8P\3\2\2\2\u00f9\u00fa\7\u2516\2\2\u00faR\3\2\2\2\u00fb\u00fc\7"+
		"\u251a\2\2\u00fcT\3\2\2\2\u00fd\u00fe\7P\2\2\u00fe\u00ff\7W\2\2\u00ff"+
		"\u0100\7N\2\2\u0100\u0101\7N\2\2\u0101V\3\2\2\2\u0102\u0103\7v\2\2\u0103"+
		"\u0104\7t\2\2\u0104\u0105\7w\2\2\u0105\u0106\7g\2\2\u0106X\3\2\2\2\u0107"+
		"\u0108\7h\2\2\u0108\u0109\7c\2\2\u0109\u010a\7n\2\2\u010a\u010b\7u\2\2"+
		"\u010b\u010c\7g\2\2\u010cZ\3\2\2\2\u010d\u0111\t\2\2\2\u010e\u0110\t\3"+
		"\2\2\u010f\u010e\3\2\2\2\u0110\u0113\3\2\2\2\u0111\u010f\3\2\2\2\u0111"+
		"\u0112\3\2\2\2\u0112\u0116\3\2\2\2\u0113\u0111\3\2\2\2\u0114\u0116\7\62"+
		"\2\2\u0115\u010d\3\2\2\2\u0115\u0114\3\2\2\2\u0116\\\3\2\2\2\u0117\u011b"+
		"\7)\2\2\u0118\u011a\5_\60\2\u0119\u0118\3\2\2\2\u011a\u011d\3\2\2\2\u011b"+
		"\u0119\3\2\2\2\u011b\u011c\3\2\2\2\u011c\u011e\3\2\2\2\u011d\u011b\3\2"+
		"\2\2\u011e\u011f\7)\2\2\u011f^\3\2\2\2\u0120\u0124\n\4\2\2\u0121\u0122"+
		"\7^\2\2\u0122\u0124\13\2\2\2\u0123\u0120\3\2\2\2\u0123\u0121\3\2\2\2\u0124"+
		"`\3\2\2\2\u0125\u0129\t\5\2\2\u0126\u0128\t\6\2\2\u0127\u0126\3\2\2\2"+
		"\u0128\u012b\3\2\2\2\u0129\u0127\3\2\2\2\u0129\u012a\3\2\2\2\u012ab\3"+
		"\2\2\2\u012b\u0129\3\2\2\2\u012c\u0130\7%\2\2\u012d\u012f\n\7\2\2\u012e"+
		"\u012d\3\2\2\2\u012f\u0132\3\2\2\2\u0130\u012e\3\2\2\2\u0130\u0131\3\2"+
		"\2\2\u0131\u0133\3\2\2\2\u0132\u0130\3\2\2\2\u0133\u0134\7\f\2\2\u0134"+
		"\u0135\3\2\2\2\u0135\u0136\b\62\2\2\u0136d\3\2\2\2\u0137\u0139\t\b\2\2"+
		"\u0138\u0137\3\2\2\2\u0139\u013a\3\2\2\2\u013a\u0138\3\2\2\2\u013a\u013b"+
		"\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013d\b\63\2\2\u013df\3\2\2\2\17\2"+
		"\u00b4\u00bd\u00d1\u00d6\u00df\u0111\u0115\u011b\u0123\u0129\u0130\u013a"+
		"\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}