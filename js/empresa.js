
function crearObjetoAjax(){

    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        /*Como el explorer va por su cuenta, el objeto es un ActiveX */
    }
}
function consultaRespuesta(){
    crearObjetoAjax();
    //plantilla ajax
    var jsonObj = JSON.stringify();
    
    xmlhttp.open("GET", "php/consultaTraeEncuesta.php?obj=" + jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);

            var padre=document.getElementById("principal");

            
        }
    }

    
}

function formularioRegistroEmpresa(){
    borrarTodo();
    //creamos el formulario para registrar
        //rellenar la interfaz de registro
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

                        //nombre
                            var label=document.createElement("label");
                            label.for="nombre";
                                var labelTxt=document.createTextNode("Nombre");
                            label.appendChild(labelTxt);
                            divForm1.appendChild(label);
                                var input=document.createElement("input");
                                    input.type="text";
                                    input.classList.add("form-control");
                                    input.id="nombre";
                                    input.placeholder="Nombre";
                            divForm1.appendChild(input);
                        //cif
                            var label=document.createElement("label");
                            label.for="cif";
                                var labelTxt=document.createTextNode("CIF");
                            label.appendChild(labelTxt);
                            divForm1.appendChild(label);
                                var input=document.createElement("input");
                                    input.type="text";
                                    input.classList.add("form-control");
                                    input.id="cif";
                                    input.placeholder="CIF";
                            divForm1.appendChild(input);
                        //email
                        var label=document.createElement("label");
                            label.for="email";
                                var labelTxt=document.createTextNode("EMAIL");
                            label.appendChild(labelTxt);
                            divForm1.appendChild(label);
                                var input=document.createElement("input");
                                    input.type="email";
                                    input.classList.add("form-control");
                                    input.id="email";
                                    input.placeholder="EMAIL";
                            divForm1.appendChild(input);
                        //teléfono
                        var label=document.createElement("label");
                            label.for="telefono";
                                var labelTxt=document.createTextNode("Teléfono");
                            label.appendChild(labelTxt);
                            divForm1.appendChild(label);
                                var input=document.createElement("input");
                                    input.type="number";
                                    input.classList.add("form-control");
                                    input.id="telefono";
                                    input.placeholder="Teléfono";
                            divForm1.appendChild(input);
                            
                                        

                var botonEnvio=document.createElement("button");
                    botonEnvio.classList.add("btn");
                    botonEnvio.classList.add("btn-block");
                    botonEnvio.classList.add("btn-secondary");
                    var botontxt=document.createTextNode("Enviar");
                    botonEnvio.appendChild(botontxt);
                    botonEnvio.type="button";
                    //botonEnvio.addEventListener('click',function(){registroEmpresa()});
                    botonEnvio.addEventListener('click',function(){registroEmpresa()});
                form.appendChild(botonEnvio);
}


function registroEmpresa(){
        //me ha ido sin esto
        crearObjetoAjax();  

        var empresa=new Object();
            empresa.nombre=document.getElementById('nombre').value;
            empresa.cif=document.getElementById('cif').value;
            empresa.correo=document.getElementById('email').value;
            empresa.telefono=document.getElementById('telefono').value;


        var final = JSON.stringify(empresa);
        
        console.log(final);

        xmlhttp.open("GET", "PHP/registroEmpresa.php?obj=" + final, true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            //alert("elert en onready");
            
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //console.log(xmlhttp.responseText);
                var datos = JSON.parse(xmlhttp.responseText);
                console.table(datos);
    
                var padre=document.getElementById("principal");
    
                if(datos === 1){
                    //alert("guay");
                    alert("Registrado"); 
                    setTimeout(function(){borrarTodo();vistaInicio()}, 3000);
                }else if(datos === -1){
                    alert("Error, intentelo nuevamente"); 
                    setTimeout(function(){ vistaInicio()}, 3000);
                }
                
            }
        }
    
        
}

function solicitarDatosAlumnos(){
    borrarTodo();
    //creamos el formulario para registrar
        //rellenar la interfaz de registro
        var padre=document.getElementById("principal");
            var container=document.createElement("div");
                container.classList.add("container");
                container.classList.add("d-flex");
                container.classList.add("flex-column");
                container.classList.add("align-items-center");
                container.style="max-width:85%;min-width:85%";
        padre.appendChild(container);
                //fila donde se van a contener las columnas con las condiciones que se necesitan
                var row=document.createElement('div');
                    row.classList.add('row');
                container.appendChild(row);

                    //primera columna
                    var col=document.createElement('div');
                        col.classList.add('col');
                    row.appendChild(col);
                        //creamos el select de perfil
                        var label=document.createElement("label");
                            label.appendChild(document.createTextNode("¿Qué perfil quiere?"));
                        col.appendChild(label);
                        var select=document.createElement("select");
                            select.classList.add("custom-select");
                            select.id="perfil"; //borrado + contador
                        col.appendChild(select);
                            var option=document.createElement("option");
                                    option.setAttribute("selected","");
                                    option.value="x";
                                    option.appendChild(document.createTextNode("Elija una opcion"));
                                select.appendChild(option);
                            traerPerfil();
                        var col=document.createElement('div');
                        col.classList.add('col');
                    row.appendChild(col);
                            //input experiencia
                        var label=document.createElement("label");
                        label.for="direccion";
                            var labelTxt=document.createTextNode("Experiencia desde");
                        label.appendChild(labelTxt);
                        col.appendChild(label);
                        var input=document.createElement("input");
                            input.type="text";
                            input.classList.add("form-control");
                            input.id="experienciadesde";
                            input.value="";
                            input.placeholder="Meses";
                        label.appendChild(input);
                        //
                        var col=document.createElement('div');
                        col.classList.add('col');
                    row.appendChild(col);
                        var label=document.createElement("label");
                            label.for="direccion";
                                var labelTxt=document.createTextNode("Experiencia hasta");
                            label.appendChild(labelTxt);
                            col.appendChild(label);
                        var input=document.createElement("input");
                            input.type="text";
                            input.classList.add("form-control");
                            input.id="experienciahasta";
                            input.value="";
                            input.placeholder="Meses";
                        label.appendChild(input);



            var row2=document.createElement('div');
                row2.classList.add('row');
                row2.classList.add('d-flex');
                row2.classList.add('text-center');
            container.appendChild(row2);
                //segunda columna
                var col=document.createElement("div");
                col.classList.add("col");
                row2.appendChild(col);
                //check viajar si no
                var viajarCheck=document.createElement("div");
                    viajarCheck.classList.add("form-check");
                    viajarCheck.classList.add("mt-3");
                    col.appendChild(viajarCheck);
                    var labelCheck=document.createElement("label");
                        labelCheck.classList.add("form-check-label");
                        viajarCheck.appendChild(labelCheck);
                        var inputCheck=document.createElement("input");
                            inputCheck.classList.add("form-check-input");
                            inputCheck.type="checkbox";
                            inputCheck.id="viajar";
                            inputCheck.setAttribute("checked","");
                            labelCheck.appendChild(inputCheck);
                        var txtLabel=document.createTextNode("Disponibilidad para viajar");
                        labelCheck.appendChild(txtLabel);

                        //columna 2
                var col=document.createElement("div");
                col.classList.add("col");
                row2.appendChild(col);
                //check cambiar residencia si no
                var viajarCheck=document.createElement("div");
                    viajarCheck.classList.add("form-check");
                    viajarCheck.classList.add("mt-3");
                    col.appendChild(viajarCheck);
                    var labelCheck=document.createElement("label");
                        labelCheck.classList.add("form-check-label");
                        viajarCheck.appendChild(labelCheck);
                        var inputCheck=document.createElement("input");
                            inputCheck.classList.add("form-check-input");
                            inputCheck.type="checkbox";
                            inputCheck.id="residencia";
                            inputCheck.setAttribute("checked","");
                            labelCheck.appendChild(inputCheck);
                        var txtLabel=document.createTextNode("Disponibilidad para cambio de residencia");
                        labelCheck.appendChild(txtLabel);

                                        //columna 3
                var col=document.createElement("div");
                col.classList.add("col");
                row2.appendChild(col);
                //check cambiar permanente si o no
                var viajarCheck=document.createElement("div");
                viajarCheck.classList.add("form-check");
                viajarCheck.classList.add("mt-3");
                col.appendChild(viajarCheck);
                var labelCheck=document.createElement("label");
                    labelCheck.classList.add("form-check-label");
                    viajarCheck.appendChild(labelCheck);
                    var inputCheck=document.createElement("input");
                        inputCheck.classList.add("form-check-input");
                        inputCheck.type="checkbox";
                        inputCheck.id="permanente";
                        inputCheck.setAttribute("checked",""); //estaba input como var
                        labelCheck.appendChild(inputCheck);
                    var txtLabel=document.createTextNode("Disponibilidad para trabajo permanente");
                    labelCheck.appendChild(txtLabel);

                var row3=document.createElement('div');
                    row3.classList.add('row');
                container.appendChild(row3);
                    var col=document.createElement('div');
                        col.classList.add('col');
                    row3.appendChild(col);
                        var botonEnvio=document.createElement("button");
                    botonEnvio.classList.add("btn");
                    botonEnvio.classList.add("btn-block");
                    botonEnvio.classList.add("btn-secondary");
                    botonEnvio.classList.add("mt-4");
                    var botontxt=document.createTextNode("Buscar");
                    botonEnvio.appendChild(botontxt);
                    botonEnvio.addEventListener("click",function(){buscarAlumnos()});
                    botonEnvio.type="button";

                    col.appendChild(botonEnvio);
}


function traerPerfil(){


    var jsonObj = JSON.stringify();
    
	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            console.log(datos);

            var padre=document.getElementById("perfil");
            
                for(var obj in datos){
                    console.log(datos[obj]);
                    var option=document.createElement("option");
                        option.value=datos[obj];
                        option.appendChild(document.createTextNode(datos[obj]));
                    padre.appendChild(option);
                }

            
        }
    }

    xmlhttp.open("GET", "PHP/consultaPerfiles.php", true);
    xmlhttp.send();
}

function buscarAlumnos(){
    var alumno=new Object();
        alumno.perfil=document.getElementById('perfil').value;
        alumno.experienciaDesde=document.getElementById('experienciadesde').value;
        alumno.experienciaHasta=document.getElementById('experienciahasta').value;
        alumno.residir=document.getElementById('residencia').checked;
        alumno.viajar=document.getElementById('viajar').checked;
        alumno.permanente=document.getElementById('permanente').checked;


    var final = JSON.stringify(alumno);

        console.log(alumno);
    
	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);

            var padre=document.getElementById("principal");

            
        }
    }

    xmlhttp.open("GET", "PHP/consultsaTraeEncuesta.php?obj=" + final, true);
    xmlhttp.send();
}
//guardar el obj empresa logeado
var empresa=new Object();
function loginEmpresa(){

    var usuario=new Object();
    usuario.contrasena=document.getElementById('contrasena1').value;
    usuario.cif=document.getElementById('cif').value;
    var jsonObj = JSON.stringify(usuario);
    
    xmlhttp.open("GET", "php/loginEmpresa.php?obj=" + jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);
            //console.log(datos);

            var padre=document.getElementById("principal");
            //console.log(datos["contrasenaTemporal"]);
            if(datos !== -1){
                empresa=datos;
                console.log(empresa);
                if(datos["contrasenaTemporal"] === "S"){
                    //redirigir formulario rellena temporal
                    cambiarContrasenaTemporalFormulario("empresa",empresa);
                }else{
                    solicitarDatosAlumnos();
                }
            }else{
                alert("Error");
            }

            
        }
    }
}

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


