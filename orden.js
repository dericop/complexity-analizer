var algorithms = [
    {
        "name": "factorial",
    	"llamados_recursivos": ["n-1"],
        "costo_ambiente" : "1",
        "orden": "n"
    },
    {
        "name":"busqueda_binaria",
    	"llamados_recursivos": ["n/2"],
        "costo_ambiente" : "1",
        "orden": "log(n)"
    },
    {
        "name":"mergesort",
    	"llamados_recursivos": ["n/2","n/2"],
        "costo_ambiente" : "n",
        "orden": "n log(n)"
    },
    {
        "name":"fibonacci",
    	"llamados_recursivos": ["n-1","n-2"],
        "costo_ambiente" : "1",
        "orden": "1^n"
    },
    {
        "name":"quicksort",
    	"llamados_recursivos": ["n-1","n-2"],
        "costo_ambiente" : "1",
        "orden": "1^n"
    },
    {
        "name":"ordenamiento_insercion",
        "llamados_recursivos":[],
        "costo_ambiente":"",
        "orden":""
    }]

function header_principal_function(final_javascript){
    var functions = final_javascript.match(/function\s[a-zA-Z_][a-zA-Z0-9_]*\(.*\)\n\s*\{/g)
    return functions[functions.length-1]
}
function body_principal_function(principal_function){
    header = header_principal_function(principal_function)
    return principal_function.split(header)[1]
}
function get_params_principal_function (header_principal_function){

    return ((header_principal_function.split("(")[1]).split(")")[0]).split(",")
}
function get_full_principal_function(final_javascript){
    header = header_principal_function(final_javascript)
    return header+final_javascript.split(header)[1]
}
function called_header_function_external(full_principal_function,header_principal_function){
    array_header_external_functions = [] 
    array_lines = full_principal_function.split(header_principal_function)[1].match(/[a-zA-Z][a-zA-Z0-9]*\(.*\)/g)
    console.log(array_lines)
    for (var i = 0; i < array_lines.length; i++) {
        name_function = (array_lines[i].replace(/^\s+|\s+$/g, "")).split("(")[0]
        if(array_functions.indexOf(name_function)===-1  && array_name_external_functions.indexOf(name_function)===-1){
            array_name_external_functions.push(array_lines[i])
        }
    }
    return array_name_external_functions
}
/*function get_efficiency(full_principal_function,params_from_user){
    body= body_principal_function(full_principal_function)
    array_lines_boby = body.split("\n")
    console.log(body)
}*/



function remove_white_items(array){
    arr = []
    for (var i = 0; i < array.length; i++) {
        if (array[i]!=="") {
            arr.push(array[i])
        };
    };
    return arr
}

function mapping_lines(final_javascript){
    console.log(final_javascript)
    console.log("----")
    full_function = get_full_principal_function(final_javascript)
    //full_function= full_function.replace(header_principal_function(final_javascript),"")
    array_lines = full_function.split("\n")
    array_lines.shift()
    array_lines=remove_white_items(array_lines)
    array_lines.pop()
    console.log(array_lines)
    dictionary_level = {}
    levels = []
    for (var i=0; i < array_lines.length; i++) {
        if(array_lines[i].indexOf("{")!==-1){
            levels.push(i)
            eval(depth_dictionary(levels))
        }else{
            if(array_lines[i].indexOf("}")!==-1){
                levels.pop()
            }else{
                if(array_lines[i].indexOf("")!==-1){
                    eval(depth_insert_line(levels,i,array_lines[i]))
                }
            }
        }
    };
    console.log(dictionary_level)
}


function depth_dictionary(levels){
    string = "dictionary_level"
    for (var i = 0; i < levels.length; i++) {
        string+=".l"+levels[i]
    };
    return string+="={}"
}
function depth_insert_line(levels,num_line,line){
    string = "dictionary_level"
    for (var i = 0; i < levels.length; i++) {
        string+=".l"+levels[i]
    };
    string +='.l'+num_line+' = "'+line+'"'
    return string
}








