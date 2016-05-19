$(document).ready(function(){

    function Node(){}; // Definición de la estructura nodo
    Node.prototype.id = -1;
    Node.prototype.x = 0;
    Node.prototype.y = 0;
    Node.prototype.Mod = 0;
    Node.prototype.level = 1;
    Node.prototype.children = new Array();
    Node.prototype.father = null;
    Node.prototype.getPreviousSibling = function(){
        if (this.father == null || this.isLeftMost())
                return null;

        return this.father.children[this.father.children.indexOf(this) - 1];
    }
    Node.prototype.isLeftMost = function(){
        if (this.father == null) return true

        return  (this.father.children[0] == this);
    }
    Node.prototype.addChild = function(node){
        this.children.push(node);
    }
    Node.prototype.isLeaf = function(){
        return this.children.length == 0;
    }
    Node.prototype.getLeftMostChild = function(){
        if (this.children.length == 0)
                return null;

        return this.children[0];
    }
    Node.prototype.getRightMostChild = function(){
        if (this.children.length == 0)
                return null;

        return this.children[this.children.length - 1];
    }
    Node.prototype.getLeftMostSibling = function(node){
        if (this.father == null)
                return null;

        if (this.isLeftMost())
            return this;

        return this.father.children[0];
    }

    Node.prototype.isRightMost = function(){
        if (this.father == null)
                return true;

        return this.father.children[this.father.children.length - 1] == this;
    }

    Node.prototype.getNextSibling = function(){
         if (this.father == null || this.isRightMost())
                return null;

        return this.father.children[this.father.children.indexOf(this) + 1];
    }

    function Tree(){}; // Definición de la estructura árbol
    Tree.prototype.root = null;
    Tree.prototype.treeDistance = 0.0;
    Tree.prototype.postOrder = function(node){
        if (node == null)
            return 0

        
        var that = this;
        node.children.forEach(function(item, index, arr){
            that.postOrder(item);
        })
        this.calculateInitialX(node);
    }
    
    Tree.prototype.addChildToNode = function(idNode, idFather){

        var node = new Node();
        node.id = idNode;
        node.children = new Array();
        var father = this.searchNode(idFather, this.root)
        node.father = father;
        father.addChild(node);
    }
    Tree.prototype.searchNode = function(idFather, node){
        var nodes = [];
        nodes.push(node);
        while(nodes.length != 0){
            var currentNode = nodes.shift();
            if (currentNode.id == idFather){
                return currentNode
            }
            else{
                currentNode.children.forEach(function(item, index, arr){
                    nodes.push(item);
                })
            }
        }
        return node;
    }
    Tree.prototype.searchLevel = function(node, lvl){
        if (node != null) {
            node.level = lvl;
            node.Y = node.level * 130;
            var children = node.children;
            for (var i = 0; i < children.length; i++) {
                this.searchLevel(children[i], lvl+1);
            }
        }
    }

    Tree.prototype.getLeftContour = function(node, modSum, values){//values x ref
        if (values[node.Y] == null)
                values[node.Y] =  node.X + modSum;
        else
            values[node.Y] = Math.min(values[node.Y], node.X + modSum);

        modSum += node.Mod;

        that = this;
        node.children.forEach(function(item, index, arr){
            that.getLeftContour(item, modSum, values);
        })
    }

    Tree.prototype.getRightContour = function(node, modSum, values){
        if (values[node.Y] == null)
            values[node.Y] = node.X + modSum;
        else
            values[node.Y] = Math.max(values[node.Y], node.X + modSum);

        modSum += node.Mod;
        that = this;
        node.children.forEach(function(item, index, arr){
            that.getRightContour(item, modSum, values);
        })
    }

    Tree.prototype.calculateInitialX = function(node){
       
       that = this;
       node.children.forEach(function(item, index, arr){
            that.calculateInitialX(item);
       })

       if (node.isLeaf()) {
            if (!node.isLeftMost()) {
                node.X = node.getPreviousSibling().X + 200
            }else{
                node.X = 0;
            }
       }

       else if(node.children.length == 1){
            if (node.isLeftMost())
            {
                node.X = node.children[0].X;
            }
            else
            {
                node.X = node.getPreviousSibling().X + 200;
                node.Mod = node.X - node.children[0].X;
            } 
       }else {
            var leftChild = node.getLeftMostChild();
            var rightChild = node.getRightMostChild();
            var mid = (leftChild.X + rightChild.X) / 2;

            if (node.isLeftMost())
            {
                node.X = mid;
            }
            else
            {
                node.X = node.getPreviousSibling().X + 200;
                node.Mod = node.X - mid;
            }

       }

        if (node.children.length > 0 && !node.isLeftMost())
        {
            this.checkForConflicts(node);
        }

       /*
        var posX = 0;
        var posY = node.Y+"px";
        if (!node.isLeftMost()){
            node.X = node.getPreviousSibling().x + 200;
            posX = node.X+"px";
            
        }else
            node.X = 0;

        */
        document.getElementById("chartWindow"+node.id).style.left = node.X+"px";
        document.getElementById("chartWindow"+node.id).style.top = node.Y+"px";
        pk_ada.instance.repaintEverything();
    
    }


    Tree.prototype.checkForConflicts = function(node){
        var minDistance = this.treeDistance + 70;
        var shiftValue = 0;
        var nodeContour = {};
        this.getLeftContour(node, 0, nodeContour);

        var sibling = node.getLeftMostSibling();
        while(sibling != null && sibling != node){
            var siblingContour = {};
            this.getRightContour(sibling, 0, siblingContour);

            var maxSiblingContour = Math.max.apply(null, Object.keys(siblingContour));
            var maxNodeContour = Math.max.apply(null, Object.keys(nodeContour));

            for (var level = node.level + 1; level <= Math.min(maxSiblingContour, maxNodeContour); level++)
                {
                    var distance = nodeContour[level] - siblingContour[level];
                    if (distance + shiftValue < minDistance)
                    {
                        shiftValue = minDistance - distance;
                    }
                }
 
                if (shiftValue > 0)
                {
                    node.X += shiftValue;
                    node.Mod += shiftValue;

                    this.centerNodesBetween(node, sibling);
                    shiftValue = 0;
                }
 
                sibling = sibling.getNextSibling();
        }
    }

    Tree.prototype.centerNodesBetween = function(leftNode, rightNode){
        var leftIndex = leftNode.father.children.indexOf(rightNode);
        var rightIndex = leftNode.father.children.indexOf(leftNode);
                
        var numNodesBetween = (rightIndex - leftIndex) - 1;

        if (numNodesBetween > 0)
        {
            var distanceBetweenNodes = (leftNode.X - rightNode.X) / (numNodesBetween + 1);

            var count = 1;
            for (var i = leftIndex + 1; i < rightIndex; i++)
            {
                var middleNode = leftNode.father.children[i];

                var desiredX = rightNode.X + (distanceBetweenNodes * count);
                var offset = desiredX - middleNode.X;
                middleNode.X += offset;
                middleNode.Mod += offset;

                count++;
            }

            this.checkForConflicts(leftNode);
        }
    }

    Tree.prototype.checkAllChildrenOnScreen = function(node)
        {
            var nodeContour = {};
            this.getLeftContour(node, 0, nodeContour);

            var shiftAmount = 0;
            Object.keys(dictionary).forEach(function(item, index, arr){
                if (nodeContour[item] + shiftAmount < 0) {
                    shiftAmount = (nodeContour[item] * -1);
                };
            })

            if (shiftAmount > 0) {
                node.X += shiftAmount;
                node.Mod += shiftAmount;

            };

        }

    Tree.prototype.calculateFinalPositions = function(node, modSum){
        node.X += modSum;
        modSum += node.Mod;

        that = this;
        node.children.forEach(function(item, index, arr){
            that.calculateFinalPositions(item, modSum);
        })

        document.getElementById("chartWindow"+node.id).style.left = node.X+"px";
        document.getElementById("chartWindow"+node.id).style.top = node.Y+"px";
        pk_ada.instance.repaintEverything();
    }


    function pk_ada() {}; // Definición del paquete del proyecto.
     
    pk_ada.prototype.instance = jsPlumb.getInstance({
                // notice the 'curviness' argument to this Bezier curve.  the curves on this page are far smoother
                // than the curves on the first demo, which use the default curviness value.
                Connector: [ "Bezier", { curviness: 50 } ],
                DragOptions: { cursor: 'pointer', zIndex: 2000 },
                PaintStyle: { strokeStyle: "blue", lineWidth: 2 },
                EndpointStyle: { radius: 9, fillStyle: "blue" },
                HoverPaintStyle: {strokeStyle: "#ec9f2e" },
                EndpointHoverStyle: {fillStyle: "#ec9f2e" },
                Container: "canvas"
    });

    pk_ada.prototype.tree = null;
    
    pk_ada.prototype.currentNode = 0; // Nodo actual para graficar sus hijos

    pk_ada.prototype.curId = 1; // este es el padre

    pk_ada.prototype.init = function(){
        /*
            * Evento inicial del paquete analizador.
        */
        this.tree = new Tree();
        $('#modalLoadContent').openModal();
        $('.tooltipped').tooltip({delay: 50});
        this.instance.draggable(jsPlumb.getSelector(".chart-demo .window"), { grid: [20, 20] });
    };

    pk_ada.prototype.cleanCodeArea = function(){
        $("#canvas").empty();
        pk_ada.currentNode = 0;
    }

    pk_ada.prototype.drawNode = function(padre, variables){
        var varC = "";
        if (variables != null) {
            for(var i=0; i< variables.length;i++){
                varC += variables[i].name + " = "+ variables[i].result +". ";
            }
        };

        pk_ada.currentNode += 1;

        $("#canvas").append("<a class='window btn tooltipped' data-position='right' data-delay='50' data-tooltip='"+ varC + "' id='chartWindow"+pk_ada.currentNode+"'>"+pk_ada.currentNode+"</a");
        var node = $("#chartWindow"+pk_ada.currentNode)[0];
        
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
            node.level = 1;
            this.tree.root = node;
        }

        //console.log("Padre: "+padre+" CurrentNode:"+pk_ada.currentNode);
        
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
            jsPlumb.setContainer("canvas");
            $("#canvas").css({
              "-webkit-transform":"scale(1)",
              "-moz-transform":"scale(1)",
              "-ms-transform":"scale(1)",
              "-o-transform":"scale(1)",
              "transform":"scale(1)"
            });

            jsPlumb.setZoom(1);
            
            
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
        $('.tooltipped').tooltip({delay: 50});
        pk_ada.tree.searchLevel(pk_ada.tree.root, 1);
        //pk_ada.tree.postOrder(pk_ada.tree.root);
        pk_ada.tree.calculateInitialX(pk_ada.tree.root);
        pk_ada.tree.calculateFinalPositions(pk_ada.tree.root, 0);
        console.log(pk_ada.tree);
        //$("#chartWindow7").css({"left":"10em;"});


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







