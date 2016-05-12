$(document).ready(function(){

    function Node(){}; // Definición de la estructura nodo
    Node.prototype.id = -1;
    Node.prototype.x = 0;
    Node.prototype.children = new Array();
    Node.prototype.father = null;
    Node.prototype.getPreviousSibling = function(){
        if (this.father != null) {
            for (var i = 0; i < this.father.children.length - 1; i++) {
                if (this.id == this.father.children[i].id) {
                    if (i != 0) return this.father.children[i - 1];
                    else this;
                }   
            }
        }
    }
    Node.prototype.isLeftMost = function(){
        if (this.father != null) {
            for (var i = 0; i < this.father.children.length - 1; i++) {
                if (this.id == this.father.children[i].id) {
                    if (i == 0) return true;
                    else return false;
                }   
            }
        }
    }
    Node.prototype.addChild = function(node){
        this.children.push(node);
    }

    function Tree(){}; // Definición de la estructura árbol
    Tree.prototype.root = null;
    Tree.prototype.postOrder = function(node){
        if (node = null)
            return 0

        node.children.forEach(function(item, index, arr){
            this.postOrder(item);
        })

        calculateInitialX(node);
    }
    Tree.prototype.addChildToNode = function(idNode, idFather){

        var node = new Node();
        node.id = idNode;
        node.children = new Array();
        this.searchNode(idFather, this.root).addChild(node);
    }
    Tree.prototype.searchNode = function(idFather, node){
        var nodes = [];
        nodes.push(node);
        while(nodes.length != 0){
            var currentNode = nodes.shift();
            if (currentNode.id == idFather) 
                return currentNode
            else{}
                currentNode.children.forEach(function(item, index, arr){
                    nodes.push(item);
                })
        }

        return node;
    }

    Tree.prototype.calculateInitialX = function(node){
        node.children.forEach(function(item, index, arr){
            this.calculateInitialX(item);
        })

        if (!node.isLeftMost())
            node.X = node.getPreviousSibling().x + 1;
        else
            node.X = 0;
    }


    function pk_ada() {}; // Definición del paquete del proyecto.
     
    pk_ada.prototype.instance = jsPlumb.getInstance({
                // notice the 'curviness' argument to this Bezier curve.  the curves on this page are far smoother
                // than the curves on the first demo, which use the default curviness value.
                Connector: [ "Bezier", { curviness: 50 } ],
                DragOptions: { cursor: "pointer", zIndex: 2000 },
                PaintStyle: { strokeStyle: "blue", lineWidth: 2 },
                EndpointStyle: { radius: 9, fillStyle: "blue" },
                HoverPaintStyle: {strokeStyle: "#ec9f2e" },
                EndpointHoverStyle: {fillStyle: "#ec9f2e" },
                Container: "canvas"
    });

    pk_ada.prototype.tree = new Tree();
    
    pk_ada.prototype.currentNode = 0; // Nodo actual para graficar sus hijos

    pk_ada.prototype.curId = 1; // este es el padre

    pk_ada.prototype.init = function(){
        /*
            * Evento inicial del paquete analizador.
        */
        $('#modalLoadContent').openModal();
    };

    pk_ada.prototype.cleanCodeArea = function(){
        $("#canvas").empty();
        pk_ada.currentNode = 0;
    }

    pk_ada.prototype.drawNode = function(padre){

        pk_ada.currentNode += 1;

        $("#canvas").append("<div class='window' id='chartWindow"+pk_ada.currentNode+"'>"+pk_ada.currentNode+"</div");
        var node = $("#chartWindow"+pk_ada.currentNode)[0];
        $("#chartWindow"+pk_ada.currentNode).css({"left":"40em"});
        
        pk_ada.instance.addEndpoint(node, {
                    uuid: node.getAttribute("id") + "-bottom",
                    anchor: "Bottom",
                    maxConnections: -1
                });

        pk_ada.instance.addEndpoint(node, {
            uuid: node.getAttribute("id") + "-top",
            anchor: "Top",
            maxConnections: -1
        });

        if (pk_ada.currentNode != 1) {
            // Algunos elementos comunes
            var arrowCommon = { foldback: 0.7, fillStyle: "blue", width: 14 },
            // Creación del tipo de flecha en la conexión
            overlays = [
                [ "Arrow", { location: 0.8 }, arrowCommon ]
            ];

            pk_ada.instance.connect({uuids: ["chartWindow"+(padre)+"-bottom", "chartWindow"+pk_ada.currentNode+"-top" ], overlays: overlays});
            this.tree.addChildToNode(this.currentNode, padre);
        }else{
            var node = new Node();
            node.id = this.currentNode;
            node.children = new Array();
            this.tree.root = node;
        }

        //console.log("Padre: "+padre+" CurrentNode:"+pk_ada.currentNode);
        console.log(this.tree);
        return pk_ada.currentNode;

    }

    pk_ada.prototype.executeCode = function(){

         if (editor) {
            
            // --------------------- Ejecución del código --------------------------------
            var code = editor.getValue();
            if (code != "") {
                eval(code)
            }

            var windows = jsPlumb.getSelector(".window");
            pk_ada.instance.draggable(windows);
            
            
            jsPlumb.fire("jsPlumbDemoLoaded", pk_ada.instance);
        }else{
            console.error("No se encuentra la referencia al editor");
        }
    }



    //----------------------------- Instanciación del paquete ---------------------------------------------//
    var pk_ada = new pk_ada();
    pk_ada.init();

    //----------------------------- Eventos de Interface  ---------------------------------------------//
    $("#m_loadModalContent").click(function(){
        /*
            * Acción del botón que permite cargar algoritmos
        */
        $('#modalLoadContent').openModal();
    })

    $("#executeCode").click(function(){
        /*
            * Suceso de eventos al presionar el botón de ejecución del código
        */
        pk_ada.cleanCodeArea();
        pk_ada.executeCode();

    })

    $(".loadN").click(function(event){
        /*
            * Suceso de eventos al cargar un algoritmo por defecto.
            * event: parámetro que contiene el elemento clickeado.
        */
        $("#modalLoadContent").closeModal();
        
        var code = ""; // código del algoritmo seleccionado.
        switch(event.target.id){ 
            case "0": // Torres de hanoi
                code = 'function hanoi(n, origen, auxiliar, destino, padre){\n'+
                            '\t padre = pk_ada.drawNode(padre);\n'+
                            '\t if(n==1)\n'+
                                '\t\t console.log("mover disco de origen a destino");\n'+
                            '\t else{\n'+
                                '\t\t hanoi(n-1, origen, destino, auxiliar, padre);\n'+
                                '\t\t console.log("mover disco de origen a destino");\n'+
                                '\t\t hanoi(n-1, auxiliar, origen, destino, padre);\n'+
                            '\t }\n'+
                        '};\n'+
                        'hanoi(3, "o", "d", "a");'

                break;
            case "1": // factorial
                code = 'function factorial(n, padre){\n'+
                        '\t padre = pk_ada.drawNode(padre);\n'+
                        '\t if((n === 0) || (n === 1))\n'+
                        '\t\t return 1;\n'+
                        '\t else{\n'+
                        '\t\t return n*factorial(n-1, padre);\n'+
                        '\t }\n'+
                        '}\n'+
                        'factorial(5);'
                break;
            case "2": // Fibonacci
                code = 'function fibonacci(n, padre){\n'+
                        '\t padre = pk_ada.drawNode(padre);\n'+
                        '\t if((n === 0) || (n === 1))\n'+
                        '\t\t return 1;\n'+
                        '\t else{\n'+
                        '\t\t return fibonacci(n-1, padre) + fibonacci(n-2, padre);\n'+
                        '\t }\n'+
                        '}\n'+
                        'fibonacci(3);'
                break;
            case "3": // Mergesort
                break;
            case "4": // Quicksort
                break;
        }

        if (editor) { // ¿Existe instancia del editor?
            editor.setValue(code); // Cargar visualmente el código en el editor.
        }else{
            console.error("No se encuentra referencia al editor");
        }
    })

});







