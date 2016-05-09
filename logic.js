$(document).ready(function(){

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
    

    pk_ada.prototype.init = function(){
        /*
            * Evento inicial del paquete analizador.
        */
        $('#modalLoadContent').openModal();
    };

    pk_ada.prototype.drawNode = function(){
        $("#canvas").append("<div class='window' id='chartWindow1'>n = 16</div");
        var node = $("#chartWindow1")[0];
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
    }

    pk_ada.prototype.executeCode = function(){

         if (editor) {

            // Algunos elementos comunes
            var arrowCommon = { foldback: 0.7, fillStyle: "blue", width: 14 },
            // Creación del tipo de flecha en la conexión
            overlays = [
                [ "Arrow", { location: 0.8 }, arrowCommon ]
            ];
            
            // --------------------- Ejecución del código --------------------------------
            var code = editor.getValue();
            if (code != "") {
                eval(code);
            }

            var windows = jsPlumb.getSelector(".window");
            pk_ada.instance.draggable(windows);
            // Agregar los puntos de conexión de los nodos.
            /*for (var i = 0; i < windows.length; i++) {
                pk_ada.prototype.instance.addEndpoint(windows[i], {
                    uuid: windows[i].getAttribute("id") + "-bottom",
                    anchor: "Bottom",
                    maxConnections: -1
                });
                pk_ada.prototype.instance.addEndpoint(windows[i], {
                    uuid: windows[i].getAttribute("id") + "-top",
                    anchor: "Top",
                    maxConnections: -1
                });
            }*/

           /* pk_ada.prototype.instance.connect({uuids: ["chartWindow3-bottom", "chartWindow6-top" ], overlays: overlays});
            pk_ada.prototype.instance.connect({uuids: ["chartWindow1-bottom", "chartWindow2-top" ], overlays: overlays});
            pk_ada.prototype.instance.connect({uuids: ["chartWindow1-bottom", "chartWindow3-top" ], overlays: overlays});
            pk_ada.prototype.instance.connect({uuids: ["chartWindow2-bottom", "chartWindow4-top" ], overlays: overlays});
            pk_ada.prototype.instance.connect({uuids: ["chartWindow2-bottom", "chartWindow5-top" ], overlays: overlays});
            
            */
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
                code = 'function hanoi(n, origen, auxiliar, destino){\n'+
                            '\t pk_ada.drawNode();\n'+
                            '\t if(n==1)\n'+
                                '\t\t console.log("mover disco de origen a destino");\n'+
                            '\t else{\n'+
                                '\t\t hanoi(n-1, origen, destino, auxiliar);\n'+
                                '\t\t console.log("mover disco de origen a destino");\n'+
                                '\t\t hanoi(n-1, auxiliar, origen, destino);\n'+
                            '\t}\n'+
                        '};\n'+
                        'hanoi(4, "o", "d", "a");'

                break;
            case "1": // Reinas
                break;
            case "2": // Fibonacci
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







