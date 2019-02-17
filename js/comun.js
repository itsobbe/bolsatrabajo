
//recibe quien necesita una contraseña temporal y genera una y update a temporal S | datos=obj (alumno,empresa) ; quien=texto (alumno,empresa)
function generaContrasenaTemporal(quien,datosObj){
    crearObjetoAjax();
    //plantilla ajax
    var jsonObj = JSON.stringify(datosObj);
    
    xmlhttp.open("GET", "php/generaContrasenaTemporal.php?obj=" + jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);

            var padre=document.getElementById("principal");
            revisionContrasenaTemporaFormulario(quien,datosObj);
            
        }
    }

}
//saco input para introducir contraseña
function revisionContrasenaTemporaFormulario(quien,datos){
    borrarTodo();
    console.log("quien en revision");
    console.log(quien);
    var padre=document.getElementById("principal");
    var container=document.createElement("div");
        container.classList.add("container");
        container.classList.add("d-flex");
        container.classList.add("flex-column");
        container.classList.add("align-items-center");
        container.style="max-width:85%;min-width:85%";
        

    padre.appendChild(container);
        var row=document.createElement("div");
        row.classList.add("row");
        row.classList.add("justify-content-center");
        container.appendChild(row);
            var col=document.createElement("col");
                col.classList.add("col");
            row.appendChild(col);

    //info de enviado correo con contraseña temporal
    row.parentNode.insertBefore(alerta("Le hemos enviado a su correo la contraseña temporal","info"),row);
    //formulario
    var form=document.createElement("form");
        col.appendChild(form);
            var fieldset=document.createElement("fieldset");
            form.appendChild(fieldset);
                var divForm1=document.createElement("div");
                    divForm1.classList.add("form-group");
                fieldset.appendChild(divForm1);

                //contraseña 2
                    var label=document.createElement("label");
                    label.for="contrasena1";
                        var labelTxt=document.createTextNode("Contraseña temporal");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                        var input=document.createElement("input");
                            input.type="password";
                            input.classList.add("form-control");
                            input.id="contrasena1";
                            input.placeholder="Escriba la contraseña";
                    divForm1.appendChild(input);
                //contraseña 2
                    var label=document.createElement("label");
                    label.for="contrasena2";
                        var labelTxt=document.createTextNode("Contraseña temporal");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                        var input=document.createElement("input");
                            input.type="password";
                            input.classList.add("form-control");
                            input.id="contrasena2";
                            input.placeholder="Repita la misma";
                    divForm1.appendChild(input);        

        var botonEnvio=document.createElement("button");
            botonEnvio.classList.add("btn");
            botonEnvio.classList.add("btn-block");
            botonEnvio.classList.add("btn-secondary");
            var botontxt=document.createTextNode("Enviar");
            botonEnvio.appendChild(botontxt);
            botonEnvio.type="button";
            
             botonEnvio.addEventListener('click',function(){revisionContrasenaTemporalAjax(quien,datos);});

            
        form.appendChild(botonEnvio);
}

//funcion que recoge los datos, revisa si correcto y manda a cambio contraseña o error
function revisionContrasenaTemporalAjax(quien,datosObj){
    crearObjetoAjax();

    var obj=new Object();
    obj=datosObj;
    var contraseña1=document.getElementById('contrasena1').value;
    var contraseña2=document.getElementById('contrasena2').value;

    if(contraseña1 === contraseña2){
    
    obj.contrasena=contraseña1;
    var who=quien;
    var q=JSON.stringify(who);
    var jsonObj = JSON.stringify(obj);
    console.log("estoy en ajax cambiar"+quien);

    xmlhttp.open("GET", "php/revisarContrasenaTemporal.php?id="+q+"&obj="+jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);

            var padre=document.getElementById("principal");

            // if(quien === "empresa"){
            //     if(datos === 1){
            //         //redirigimos a interfaz
            //         solicitarDatosAlumnos();
                    
            //     }else{
            //         //alerta problema
            //         alert("problema");                
            //     }
            // }else if(quien === "alumno"){
            //     if(datos === 1){
            //         //redirigimos a interfaz
            //         alert("eres alumno");
            //         solicitarDatosAlumnos();
            //     }else{
            //         //alerta problema
            //         alert("problema");                
            //     }
            // }
            if(datos === 1){
                cambiarContrasenaTemporalFormulario(who,datosObj);
            }
            
            
            }
        }
    }
}

//formulario para cambiar la contraseña temporal
function cambiarContrasenaTemporalFormulario(quien,datos){
    borrarTodo();

    var padre=document.getElementById("principal");
    var container=document.createElement("div");
        container.classList.add("container");
        container.classList.add("d-flex");
        container.classList.add("flex-column");
        container.classList.add("align-items-center");
        container.style="max-width:85%;min-width:85%";
        

    padre.appendChild(container);
        var row=document.createElement("div");
        row.classList.add("row");
        row.classList.add("justify-content-center");
        container.appendChild(row);
            var col=document.createElement("col");
                col.classList.add("col");
            row.appendChild(col);
    
    //formulario
    var form=document.createElement("form");
        col.appendChild(form);
            var fieldset=document.createElement("fieldset");
            form.appendChild(fieldset);
                var divForm1=document.createElement("div");
                    divForm1.classList.add("form-group");
                fieldset.appendChild(divForm1);

                //contraseña 2
                    var label=document.createElement("label");
                    label.for="contrasena1";
                        var labelTxt=document.createTextNode("Contraseña nueva");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                        var input=document.createElement("input");
                            input.type="password";
                            input.classList.add("form-control");
                            input.id="contrasena1";
                            input.placeholder="Escriba la contraseña";
                    divForm1.appendChild(input);
                //contraseña 2
                    var label=document.createElement("label");
                    label.for="contrasena2";
                        var labelTxt=document.createTextNode("Contraseña nueva");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                        var input=document.createElement("input");
                            input.type="password";
                            input.classList.add("form-control");
                            input.id="contrasena2";
                            input.placeholder="Repita la misma";
                    divForm1.appendChild(input);        

        var botonEnvio=document.createElement("button");
            botonEnvio.classList.add("btn");
            botonEnvio.classList.add("btn-block");
            botonEnvio.classList.add("btn-secondary");
            var botontxt=document.createTextNode("Enviar");
            botonEnvio.appendChild(botontxt);
            botonEnvio.type="button";
            //botonEnvio.addEventListener('click',function(){registroEmpresa()});
             botonEnvio.addEventListener('click',function(){cambiarContrasenaTemporal(quien,datos);});

            
        form.appendChild(botonEnvio);
}
//ajax que cambia contraseña temporal
function cambiarContrasenaTemporal(quien,datos){
    crearObjetoAjax();

    var obj=new Object();
    obj=datos;
    var contraseña1=document.getElementById('contrasena1').value;
    var contraseña2=document.getElementById('contrasena2').value;

    if(contraseña1 === contraseña2){
    
    obj.contrasena=contraseña1;
    var who=quien;
    var q=JSON.stringify(who);
    var jsonObj = JSON.stringify(obj);
    console.log("estoy en ajax cambiar"+quien);

    xmlhttp.open("GET", "php/cambiarContrasena.php?id="+q+"&obj="+jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);

            var padre=document.getElementById("principal");

            if(quien === "empresa"){
                if(datos === 1){
                    //redirigimos a interfaz
                    solicitarDatosAlumnos();
                }else{
                    //alerta problema
                    alert("problema");                
                }
            }else if(quien === "alumno"){
                if(datos === 1){
                    //redirigimos a interfaz
                    alert("eres alumno");
                    solicitarDatosAlumnos();
                }else{
                    //alerta problema
                    alert("problema");                
                }
            }
            
            
            
            }
        }
    }
}

function borrarTodo(){
    //funcion para borrar todo el contenido
    var principal=document.getElementById("principal");
    while(principal.firstChild){
        principal.removeChild(principal.firstChild);
    }
}
function creaTabla(datos){
    console.log("datos tabla en crea tabla");
    console.log(datos);
    var tabla=document.createElement("table");
        tabla.id="tablaDinamica";
        var count = Object.keys(datos).length;  //devuelve el numero de filas
         var co= Object.keys(datos[0]).length;   //devuelve el numero de propiedades de fila 0 con lo cual de todas

        console.log(count + " " + co);
        //console.log(datos[0]);
        for(var i=0; i < count+1;i++){ //pongo +1 porque la primera vez que use el i = 0 va a ser para los nombres de columna
            console.log("i "+i);
            // console.log(datos[i]);
            var tr=tabla.insertRow();
            for(var j =0; j < co; j++){
                var td=tr.insertCell();
                if(i===0){ //para que solo se pongan en la primera fila
                    //con esto saco el nombre de las columnas de la fila 0 y segun el valor de j es decir segun donde este pues pongo la que toque
                    td.appendChild(document.createTextNode(Object.keys(datos[0])[j]));
                    td.style="background-color:#b7c9e8";
                }else {
                    //con esto saco automaticamente los valores segun en la fila donde este ya que la variable r tiene el string de la columna
                    var r=(Object.keys(datos[0])[j]);
                    if(datos[i-1] !== undefined){ //-1 porque sé que me paso una vez por de los nombres de las columnas
                        td.appendChild(document.createTextNode(datos[i-1][r]));
                    }
                   
                }
            }
        }
            return tabla;
}

function imprimirElemento(elem){
    //le mandamo id del elemento que queremos imprimir, abre una ventana con ese elemento y la ventana de imprimir
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;

}
function alerta(texto,color){
    //funcion que devuelve el div con alert para mostrar mensajes error exito
    var div=document.createElement("div");
        div.classList.add("alert");
        div.classList.add("alert-"+color);
        div.classList.add("w-50");
        div.classList.add("mx-auto");
        div.classList.add("m-2");
        div.id="alertaDinamica";
        div.appendChild(document.createTextNode(texto));

        return div;
}