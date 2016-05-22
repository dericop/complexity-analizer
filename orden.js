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
    }
];



function getAlgorithmsWithSameCallLength(algorithm){
    var filterAlgorithms = [];
    for (var i = 0; i < algorithms.length; i++) {
        if (algorithms[i].llamados_recursivos.length === algorithm.llamados_recursivos.length) 
            filterAlgorithms.push(algorithms[i]);
    }
    return filterAlgorithms;
};

function getAlgorithmsWithSameInputsSize(algorithm){
    var filterAlgorithms = [];
    for (var i = 0; i < algorithms.length; i++) {
        var inputSize = algorithm.llamados_recursivos;
        var j = 0;
        var same = true;
        while(j<algorithms[i].llamados_recursivos.length && same){
            if(inputSize[j]!==algorithms[i].llamados_recursivos[j])
                same = false;
            j++;
        }
        if(same)
            filterAlgorithms.push(algorithms[i]);
    }
    return filterAlgorithms;
};
/*getOrder(this.algorithms,{"llamados_recursivos": ["n-1","n-2"],
                          "costo_ambiente" : "1"});*/
function getOrder(algorithm){
    var filterAlgorithms = [];
    filterAlgorithms=getAlgorithmsWithSameCallLength(algorithms,algorithm); 
    filterAlgorithms=getAlgorithmsWithSameInputsSize(filterAlgorithms,algorithm); 
    console.log(filterAlgorithms);
};

function get_recurrence(variables,final_javascript){
    last_function = principal_function(final_javascript)
    left_part = "T("
    for (var i = 0; i < variables.length; i++) {
        if (i>0) {
            left_part+=","
        }
        left_part+=variables[i]
    }

    left_part+=") = " 
}


var Fraction = algebra.Fraction;
var frac = new Fraction(1, 2);
console.log(frac.toString());
