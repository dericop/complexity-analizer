//TORRES DE HANOI
pseudocode = 
"hanoi(n,origen,auxiliar,destino)\n"+
"begin\n"+
"	arreglo10[20]\n"+
"	if(n = 1)then\n"+
"	begin\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"	end\n"+
"	else\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"end"


var array_functions= ['if','while','for','floor','ceil','length','slice','Uint8Array','print'];
function first_replace(pseudocode){
	newlines=remove_do(pseudocode)
	newlines=translate_repeat(newlines)
	newlines=translate_equals(newlines)
	newlines=translate_greater_than(newlines)
	newlines=translate_less_equal(newlines)
	newlines=translate_different(newlines)
	newlines=translate_return(newlines)
	newlines=translate_asign(newlines)
	newlines=translate_comment(newlines)
	newlines=translate_print(newlines)
	newlines=translate_or_logic(newlines)
	newlines=translate_and_logic(newlines)
	newlines=translate_begin(newlines)
	newlines=translate_end(newlines)
	newlines=translate_mod(newlines)
	newlines=translate_call(newlines)
	newlines=translate_not(newlines)
	newlines=translate_true(newlines)
	newlines=translate_false(newlines)
	newlines=translate_null(newlines)
	newlines=translate_until(newlines)
	newlines=remove_then(newlines)
	newlines=translate_subarray(newlines)
	newlines=translate_array_length(newlines)
	newlines=translate_to_floor(newlines)
	newlines=translate_to_ceil(newlines)
	newlines=translate_function_Sentence(newlines)
	return newlines
}
function translate_repeat(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'repeat' + '\\b', "g"),"do")
}
function translate_equals(pseudocode){
	regex = new RegExp("=", "g")
	return pseudocode.replace(regex,"===")
}
function translate_greater_than(pseudocode){
	regex = new RegExp("≥", "g")
	return pseudocode.replace(regex,">=")
}
function translate_less_equal(pseudocode){
	regex = new RegExp("≤", "g")
	return pseudocode.replace(regex,"<=")
}
function translate_different(pseudocode){
	regex = new RegExp("≠", "g")
	return pseudocode.replace(regex,"!==")
}
function translate_return(pseudocode){
	regex = new RegExp("↑", "g")
	return pseudocode.replace(regex,"return ")
}
function translate_asign(pseudocode){
	regex = new RegExp("←", "g")
	return pseudocode.replace(regex,"=")
}
function translate_comment(pseudocode){
	regex = new RegExp("►", "g")
	return pseudocode.replace(regex,"//")
}
function translate_print(pseudocode){
	regex = new RegExp("print", "g")
	return pseudocode.replace(regex,"console.log")
}
function translate_or_logic(pseudocode){
	regex = new RegExp('\\b' + 'or' + '\\b', "g")
	return pseudocode.replace(regex, "||")
}
function translate_and_logic(pseudocode){
	regex = new RegExp('\\b' + 'and' + '\\b', "g")
	return pseudocode.replace(regex, "&&")
}
function translate_begin(pseudocode){
	regex = new RegExp('\\b' + 'begin' + '\\b', "g")
	return pseudocode.replace(regex, "{")
}
function translate_end(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'end' + '\\b', "g"), "}")
}
function translate_mod(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'mod' + '\\b', "g"), "%")
}
function translate_call(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'call ' + '\\b', 'g'), "")
}
function translate_not(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'not' + '\\b','g'), '!')
}
function translate_to(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'to' + '\\b', "g"),";")
}
function translate_true(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'T' + '\\b','g'),"true")
}
function translate_false(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'F' + '\\b','g'),"false")
}
function translate_null(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'NULL' + '\\b','g'),"null")
}
function translate_until(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'until' + '\\b','g'),"while")
}
function translate_array_length(pseudocode){
	var array_of_length = pseudocode.match(/[^a-zA-Z]length\([a-z]+[0-9]*\)/g)
	if (array_of_length!=null) {
		for (var i = 0; i< array_of_length.length ; i++) {
			temp_array = array_of_length[i].split("(")
			name_array = temp_array[1].split(")")[0]

			array_substract = temp_array[0].split("length")
			if(temp_array)
			new_string = array_substract[0]+""+name_array +".length"
			pseudocode=pseudocode.replace(array_of_length[i],new_string)
		}
	}
	return pseudocode
}
function translate_subarray(pseudocode){
	
	var array_of_subarray = pseudocode.match(/[a-z]+\[(([a-z]+[0-9]*)|([a-z]*[0-9]+))\.\.(([a-z]+[0-9]*)|([a-z]*[0-9]+))\]/g)
	if (array_of_subarray!=null) {
		for (var i = 0; i< array_of_subarray.length ; i++) {
			temp_array = array_of_subarray[i].split("[")
			name_array = temp_array[0]

			array_substract = temp_array[1].split("..")
			if(temp_array)
			new_string = name_array+".slice("+array_substract[0]+","+(array_substract[1].split("]"))[0]+"+1)"
			pseudocode=pseudocode.replace(array_of_subarray[i],new_string)
		}
	}
	return pseudocode
}
function translate_to_floor(pseudocode){
	pseudocode=pseudocode.replace(new RegExp('⌊','g'), 'Math.floor(')
	pseudocode=pseudocode.replace(new RegExp('⌋','g'), ')')
	return pseudocode
}
function translate_to_ceil(pseudocode){
	pseudocode=pseudocode.replace(new RegExp('⌈','g'), 'Math.ceil(')
	pseudocode=pseudocode.replace(new RegExp('⌉','g'), ')')
	return pseudocode
}
function set_function_param(line){
	params= ((line.split("(")[1]).split(")")[0]).split(",")
	for (var i = 0; i< params.length ; i++) {
		if (params[i] !== "") {
			name_param = params[i].match(/^\s*[a-z]+[0-9]*/g)[0]
			line=line.replace(params[i],name_param)
		}
	}
	return line
}
function translate_function_Sentence(pseudocode){
	var all_functions = pseudocode.match(/[a-zA-Z]+[0-9]*\(.*\).*\n\{/g)
	if (all_functions!=null) {
		for (var i = 0; i< all_functions.length ; i++) {
			line = all_functions[i]
			name = line.split("(")[0]
			if(array_functions.indexOf(name) == -1){
				var new_line=set_function_param(line);
				pseudocode=pseudocode.replace(line,'function '+new_line)
			}
		}
	}
	return pseudocode
}
function remove_tabs(line){

	return line.replace(/^\s+|\s+$/g, "")
}
function remove_then(line){

	return line.replace(new RegExp('\\b' + 'then' + '\\b','g'), '')
}
function remove_do(line){

	return line.replace(new RegExp('\\b' + 'do' + '\\b','g'), '')
}
function is_ignored_line(line){
	return (new RegExp('^\\s*\{|^\\s*\}|^\\s*\/\/','g')).test(line)
}
function is_init_array(line){

	return (/^\s*([a-z]+[0-9]*)\[[0-9]+\]/g).test(line)
}
function test_and_get_line(line){
/*	var newline=line//remove_tabs(line)
*/	if(!is_ignored_line(line)){
		if(is_init_array(line)){
			lenght= ((line.split('['))[1].split(']'))[0]
			lenght = parseInt(lenght, 10);
			line = line.split('[')[0]+"= new Uint8Array("+lenght+")"
		}
	}
	return line
}
function main(pseudocode){
	console.log(pseudocode)
	console.log("----------")
	var replace = first_replace(pseudocode)
	var lines = replace.split("\n")
	var new_code = ""
	for (var i = 0; i < lines.length; i++) {
		var newline = test_and_get_line(lines[i])
		new_code += newline+"\n"
	}
	console.log(new_code)
}
main(pseudocode)






//TORRES DE HANOI
/*pseudocode = 
"hanoi(n,origen,auxiliar,destino)\n"+
"begin\n"+
"	if(n = 1)then\n"+
"	begin\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"	end\n"+
"	else\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"end"*/




// BUSQUEDA BINARIA RECURSIVA
/*pseudocode = 
"bbr(a[],x,liminf,limsup)\n"+
"begin\n"+
"	pos←-1\n"+
"	if(limsup ≥ liminf)then\n"+
"	begin\n"+
"		mitad←(limsup+liminf)/2\n"+
"		if(a[mitad] = x)then\n"+
"		begin\n"+
"			pos←mitad\n"+
"		end\n"+
"		else\n"+
"		begin\n"+
"			if(a[mitad] > x)then\n"+
"			begin\n"+
"				pos←bbr(a,x,liminf,mitad-1)\n"+
"			end\n"+
"			else\n"+
"			begin\n"+
"				pos←bbr(a,x,mitad+1,limsup-1)\n"+
"			end\n"+
"		end\n"+
"	end\n"+
"	↑pos\n"+
"end*/




//FACTORIAL
/*pseudocode = 
"fatorial(n)\n"+
"begin\n"+
"	f←0\n"+
"	if((n=0) or (n=1))then\n"+
"	begin\n"+
"		f←1\n"+
"	end\n"+
"	else\n"+
"		begin\n"+
"			f←n*(call factorial(n-1)\n"+
"		end\n"+
"	↑f\n"+
"end"*/




//PRUEBA INICIAL
/*pseudocode = 
"x←0\n"+
"y←'cadena'\n"+
"z←T\n"+
"v←F\n"+
"►esto es un comentario\n"+
"diccionario{'a':'aksjhd','b':2,2:'skjd'}\n"+
"funcion1( a , sa[] )\n"+
"begin\n"+
"	variable←'camilo'\n"+
"end\n"+
"rutina1(param0,param1,arreglo[10][11][2])►comentariooooooooo\n"+
"begin\n"+
"	arreglo10[20]\n"+
"	param1←arreglo[2][3]\n"+
"	for param0←9 to length(arreglo[1..param1]) do\n"+
"	begin\n"+
"		if(param0<param1 and not(param1))then\n"+
"		begin\n"+
"			param0←param1\n"+
"			arreglo10[20]\n"+
"		end\n"+
"	end\n"+
"	while(param0<param1 and param1<2 or param2>3)do\n"+
"	begin\n"+
"		if(param0<param1 and not(param1))then\n"+
"		begin\n"+
"			param0←not(param1)\n"+
"		end\n"+
"	end\n"+
"	tamaño←length(arreglo2)\n"+
"	arreglo←NULL\n"+
"	repeat\n"+
"		if(param0<param1 and not(param1))then\n"+
"		begin\n"+
"			param0←param1 \n"+
"		end\n"+
"		else\n"+
"			begin\n"+
"				param1←param0\n"+
"			end\n"+
"	until(param0<param1 and param1<2 or param2>3)\n"+
"	nuevoarreglo←arreglo[1..param1]\n"+
"	modulo←param0 mod param1\n"+
"	call rutina2(param0,param1,nuevoarreglo)\n"+
"end\n"+
"rutina2(param0,param1,arreglo[10][11][2])►comentariooooooooo\n"+
"begin\n"+
	"►esto es un comentario\n"+
	"arreglo30[20]\n"+
	"param1←arreglo[2][3]\n"+
	"for param0←9 to ⌈param1⌉ do\n"+
	"begin\n"+
	"	if(param0<param1 and not(param1))then\n"+
	"	begin\n"+
	"		param0←param1\n"+
	"	end\n"+
		"for param0←F to ⌊((param1+(⌊param1⌋))⌋ do\n"+
		"begin\n"+
		"	if(param0<param1 and not(param1))then\n"+
		"	begin\n"+
		"		param0← ⌈param1⌉\n"+
		"	end\n"+
		"end\n"+
	"end\n"+
	"while(param0<param1 and param1<2 or param2>3)do\n"+
	"begin\n"+
	"	if(param0<param1 or not(param1))then\n"+
	"	begin\n"+
	"		param0←param1\n"+
	"	end\n"+
	"end\n"+
	"tamaño←length(arreglo2)\n"+
	"repeat\n"+
	"	if(not(not(param0<param1) and not(param1)))then\n"+
	"	begin\n"+
	"		param0←param1\n"+
	"	end\n"+
	"	else\n"+
	"		begin\n"+
	"		if(T)then\n"+
	"		begin\n"+
	"			param1←'camilo'\n"+
	"		end\n"+
	"		if(param1←T and param2←F or NULL)then\n"+
	"		begin\n"+
	"			param1←param0\n"+
	"		end\n"+
	"		param1←param0\n"+
	"	end\n"+
	"until(param0<param1 and param1<2 or param2>3)\n"+
	"nuevoarreglo←arreglo[1..param1]\n"+
	"modulo←param0 mod param1\n"+
"end\n"+
"call rutina1(x,y,z,v)"*/