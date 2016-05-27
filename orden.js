var ecuations = {}

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
        array[i]=array[i].replace(/^\s+|\s+$/g, "")
        if (array[i]!=="") {
            arr.push(array[i])
        };
    };
    return arr
}

function mapping_lines(final_javascript){
    //console.log(final_javascript)
    //console.log("----")
    full_function = get_full_principal_function(final_javascript)
    //full_function= full_function.replace(header_principal_function(final_javascript),"")
    full_function = full_function.replace(new RegExp('else', 'g'), "")
    array_lines = full_function.split("\n")
    array_lines.shift()
    array_lines=remove_white_items(array_lines)
    array_lines.pop()
    //console.log(array_lines)
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
    return dictionary_level
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

function is_useful(obj){
    if (typeof(obj) === "object") 
        return false
    return true 
}

function search_asig(route){
    response = {}
    route.forEach(function(item, index, arr){
        if(item.indexOf("if")===-1 && item.indexOf("while")===-1){
            if (item.indexOf("=")!==-1) {
                response[item.split("=")[0]]=item.split("=")[1]
            }
        }
    })
    //console.log(response)
    return response
}

function replace_in(params,assigns){
    console.log(params)
    variables = Object.keys(assigns).reverse()
    for (var i = 0; i < params.length; i++) {   // parametros
        for (var j = 0; j < variables.length; j++) {  // variables a reeplazar
            //"dfgdfgdaniel,".match(new RegExp('^daniel|(([\,]|[\;]|[\+]|[\-]|[\/]|[\(]|[\)]|[\[]|[\]]|[\\s]|[\*])daniel((([\,]|[\;]|[\+]|[\-]|[\/]|[\(]|[\)]|[\[]|[\]]|[\\s]|[\*]))|$))','g'))
            sentence_Assign_into_param= params[i].match(new RegExp('^'+variables[j]+'|(([\,]|[\;]|[\+]|[\-]|[\/]|[\(]|[\)]|[\[]|[\]]|[\\s]|[\*])'+variables[j]+'((([\,]|[\;]|[\+]|[\-]|[\/]|[\(]|[\)]|[\[]|[\]]|[\\s]|[\*]))|$))','g'))
            if (sentence_Assign_into_param!=null) {
                for (var k = 0; k < sentence_Assign_into_param.length; k++) {
                    temp = sentence_Assign_into_param[k].replace(variables[j],assigns[variables[j]])
                    params[i]= params[i].replace(sentence_Assign_into_param[k],temp)
                } 
            }
        }
    }
    console.log(params)
}
function get_params_call_function(call){
    return ((call.split("(")[1]).split(")")[0]).split(",")
}
function get_recurrences(rout,dict_alg, header_function){
    keys = Object.keys(dict_alg)
    keys.forEach(function(item,index, arr){
            if (is_useful(dict_alg[item])) {
                name_function = (header_function.split("(")[0]+"(").split("function")[1]
                line = dict_alg[item]
                name_function= name_function.replace(/\s+/g, '');
                line= line.replace(/\s+/g, '');
                if (line.indexOf(name_function)!==-1) {
                    //console.log(line)
                    assigns = search_asig(rout)
                    params = get_params_call_function(line)
                    replace_in(params, assigns)
                    //ecuations.push(ecuac)
                }else{
                    rout.push(dict_alg[item])
                }
            }else{
                get_recurrences(rout.slice(), dict_alg[item], header_function)
            }
                /*if ((dict_alg[item]).indexOf(name_function)!==-1) {
                    
                }else{
                    rout.push(dict_alg[item])
                }
            }else{
                get_recurrences(rout, dict_alg[item], header_function)*/
            
    });
       
}









