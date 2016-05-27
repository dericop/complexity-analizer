/*//TORRES DE HANOI
pseudocode = 
"hanoi(n,origen,auxiliar,destino)\n"+
"begin\n"+
"	arreglo10[20]\n"+
"	if(n = 1)then\n"+
"	begin\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"	end\n"+
"	for x = 1 to 10 UPTO(1) do\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"	for x = 1 to 10 DOWNTO(1) do\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"	else\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"end\n"+
"hanoiiii(n,origen,auxiliar,destino)\n"+
"begin\n"+
"	arreglo10[20]\n"+
"	if(n = 1)then\n"+
"	begin\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"	end\n"+
"	for x = 1 to 10 UPTO(1) do\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"	for x = 1 to 10 DOWNTO(1) do\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"	else\n"+
"	begin\n"+
"		call hanoiiii(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"end\n"
pseudocode = 
"hanoi(n,origen,auxiliar,destino)\n"+
"begin\n"+
"	arreglo10[20]\n"+
"	if(n = 1)then\n"+
"	begin\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"	end\n"+
"	for x = 1 to 10 UPTO(1) do\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"	for x = 1 to 10 DOWNTO(1) do\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"	else\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"end\n"+
"hanoiiii(n,origen,auxiliar,destino)\n"+
"begin\n"+
"	arreglo10[20]\n"+
"	if(n = 1)then\n"+
"	begin\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"	end\n"+
"	for x = 1 to 10 UPTO(1) do\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"	for x = 1 to 10 DOWNTO(1) do\n"+
"	begin\n"+
"		call hanoi(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"	else\n"+
"	begin\n"+
"		call hanoiiii(n-1,origen,destino,auxiliar)\n"+
"		print('mover disco del '+ origen +'al '+destino)\n"+
"		call hanoi(n-1,auxiliar,origen,destino)\n"+
"	end\n"+
"end\n"*/

pseudocode = 
"merge(A,p,q,r)\n"+
"begin\n"+
"	n1←q-p+1\n"+
"	n2←r-q\n"+
"	R[n2+1]\n"+
"	L[n1+1]\n"+
"	for i ← 1 to n1 UPTO(1) do\n"+
"	begin\n"+
"		L[i]←A[p+i-1]\n"+
"	end\n"+
"	for j ← 1 to n1 UPTO(1) do\n"+
"	begin\n"+
"		R[j]←A[q+j]\n"+
"	end\n"+
"	L[n1+1]←INF\n"+
"	R[n2+1]←INF\n"+
"	i←1\n"+
"	j←1\n"+
"	for k ← p to r UPTO(1) do\n"+
"	begin\n"+
"		if L[i] ≤ R[j] then\n"+
"		begin\n"+
"			a[k]←L[i]\n"+
"			i←i+1\n"+
"		end\n"+
"		else\n"+
"		begin\n"+
"			A[k]←L[i]\n"+
"			j←j+1\n"+
"		end\n"+
"	end\n"+
"end\n"+
"merge_sort(A, p, r)\n"+
"begin\n"+
"	if(p < r) then\n"+ 
"	begin\n"+
"		q←⌊(p+r)/2⌋\n"+
"		merge_sort(A,p,q)\n"+
"		merge_sort(A,q+1,r)\n"+
"		merge(A,p,q,r)\n"+
"	end\n"+
"	if(p < r) then\n"+ 
"	begin\n"+
"		q←⌊(p+r)/2⌋\n"+
"		merge_sort(A,p,q)\n"+
"		merge_sort(A,q+1,r)\n"+
"		merge(A,p,q,r)\n"+
"		if(p < r) then\n"+ 
"		begin\n"+
"			q←⌊(p+r)/2⌋\n"+
"			merge_sort(A,p,q)\n"+
"			merge_sort(A,q+1,r)\n"+
"			merge(A,p,q,r)\n"+
"		end\n"+
"	end\n"+
"end\n"
var array_functions= ['if','while','for','floor','ceil','length','slice','log','drawNode','Uint8Array','print','DOWNTO','UPTO'];
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
	newlines=translate_infinity(newlines)
	newlines=translate_until(newlines)
	newlines=translate_for(newlines)
	newlines=remove_then(newlines)
	newlines=translate_subarray(newlines)
	newlines=translate_array_length(newlines)
	newlines=translate_init_array(newlines)
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

function translate_infinity(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'INF' + '\\b','g'),"Infinity")
}
function translate_until(pseudocode){

	return pseudocode.replace(new RegExp('\\b' + 'until' + '\\b','g'),"while")
}
function translate_for(pseudocode){
	var for_sentence = pseudocode.match(/\s+for\s+.*/g)
		if (for_sentence!== null &&for_sentence.length>0) {
			for (var i = 0; i<for_sentence.length; i++) {
				array_for= for_sentence[i].split("to")
				array= []
				inf_limit = array_for[0].split("for")[1]
				variable = inf_limit.split("=")[0]
				change = ""
				symbol = ""
				if (array_for[1].indexOf("UPTO")>=0) {
					array= array_for[1].split("UPTO")
					change= '+='
					symbol='<='
				}else{
					if(array_for[1].indexOf("DOWNTO")>=0){
						array= array_for[1].split("DOWNTO")
						change= '-='
						symbol='>='
					}
				}	
				sup_limit = array[0]
				change += array[1]

				new_line = array_for[0].split("for")[0]+"for ("+inf_limit+";"+variable+" "+symbol+" "+sup_limit+";"+variable+" "+change+")"
				pseudocode=pseudocode.replace(for_sentence[i],new_line)
			}
		}
	return pseudocode
}
function translate_init_array(pseudocode){

	arrays= pseudocode.match(/\s*[a-zA-Z]+\[.*\]\s*\n/g)
	if (arrays != null) {
		for (var i = 0; i < arrays.length; i++) {
			if (arrays[i].indexOf("=")===-1) {
				new_line = arrays[i].replace(new RegExp('\\[.*\\]','g'),"=[]")
				pseudocode=pseudocode.replace(arrays[i],new_line)
			}
		}
	};
	return pseudocode
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
			name_param = params[i].match(/^\s*[a-zA-Z]+[0-9]*/g)[0]
			line=line.replace(params[i],name_param)
		}
	}
	return line
}
function translate_function_Sentence(pseudocode){
	var all_functions = pseudocode.match(/[a-zA-Z_]+[0-9]*\(.*\).*\n\{/g)
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
	//var newline=line//remove_tabs(line)
	if(!is_ignored_line(line)){
		if(is_init_array(line)){
			lenght= ((line.split('['))[1].split(']'))[0]
			lenght = parseInt(lenght, 10);
			line = line.split('[')[0]+"= new Uint8Array("+lenght+")"
		}
	}
	return line
}

function get_function__calls(final_javascript,principal){
	//var calls = final_javascript.match(/\s*hanoi\s*\(.*\)/g)
	var calls = final_javascript.match(new RegExp('\\s*'+principal+'\\s*\(.*\)','g'))
	return calls
}
function add_params_to_execute(final_javascript){
	last_function=header_principal_function(final_javascript)
	user_params = get_params_principal_function(final_javascript)
	array_user = "["
	for (var i = 0; i < user_variables.length-1; i++) {
		array_user+= user_variables[i]+","
	}
	array_user += user_variables[user_variables.length-1]"]"
	new_function=last_function
	new_function=new_function.replace('(','(padre,')
	new_function=new_function.replace('\{','\{\n\tpadre = pk_ada.drawNode(padre,'+array_user+')')

	final_javascript=final_javascript.replace(last_function,new_function)
    calls= get_function__calls(final_javascript,(last_function.split("(")[0]).split(" ")[1])

    for (var i = 0; i < calls.length; i++) {
    	if (calls[i].indexOf("padre")===-1) {
    		final_javascript = final_javascript.replace(calls[i],calls[i].replace('(','(padre,'))
    	}
    }
	return final_javascript
}
function main(pseudocode){
	//console.log(pseudocode)
	//console.log("----------")
	var replace = first_replace(pseudocode)
	var lines = replace.split("\n")
	var new_code = ""
	for (var i = 0; i < lines.length; i++) {
		var newline = test_and_get_line(lines[i])
		new_code += newline+"\n"
	}
	dict_alg = mapping_lines(new_code)
	//console.log(dict_alg)
	get_recurrences([],dict_alg["l0"], header_principal_function(new_code))


	new_code = add_params_to_execute(new_code)

	console.log(new_code)
	//get_efficiency(get_full_principal_function(new_code),['n','origen','auxiliar','destino'])
	return new_code;
}
//main(pseudocode)