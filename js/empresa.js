
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

function formularioRegistroEmpresa(quien){
    console.log("quine?");
    console.log(quien);
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
                                    if(quien){
                                        input.value=empresa.nombre;
                                    }
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
                                    if(quien){
                                        input.value=empresa.cif;
                                        input.disabled="disabled";
                                    }
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
                                    if(quien){
                                        input.value=empresa.correo;
                                    }
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
                                    if(quien){
                                        input.value=empresa.telefono;
                                    }
                            divForm1.appendChild(input);
                            
                                        

                var botonEnvio=document.createElement("button");
                    botonEnvio.classList.add("btn");
                    botonEnvio.classList.add("btn-block");
                    botonEnvio.classList.add("btn-secondary");
                    var botontxt=document.createTextNode("Enviar");
                    botonEnvio.appendChild(botontxt);
                    botonEnvio.type="button";
                    //botonEnvio.addEventListener('click',function(){registroEmpresa()});
                    botonEnvio.addEventListener('click',function(){registroEmpresa(quien)});
                form.appendChild(botonEnvio);
}


function registroEmpresa(quien){
        //utilizare esta funcion para registro y actualizacion mandandole quien soy por var

        //me ha ido sin esto
        crearObjetoAjax();  

        var empresa=new Object();
            empresa.nombre=document.getElementById('nombre').value;
            empresa.cif=document.getElementById('cif').value;
            empresa.correo=document.getElementById('email').value;
            empresa.telefono=document.getElementById('telefono').value;


        var final = JSON.stringify(empresa);
        
        console.log(final);
        console.log(quien);
        if(quien === "actualizar"){
            xmlhttp.open("GET", "PHP/actualizarEmpresa.php?obj=" + final, true);
        }else{
            xmlhttp.open("GET", "PHP/registroEmpresa.php?obj=" + final, true);
        }
        
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            //alert("elert en onready");
            
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //console.log(xmlhttp.responseText);
                var datos = JSON.parse(xmlhttp.responseText);
                console.table(datos);
    
                var padre=document.getElementById("principal");
                var alertaexiste=document.getElementById('alertaDinamica');
                if(alertaexiste){
                    alertaexiste.remove();
                }
                if(quien === "actualizar"){
                    if(datos > 0){
                        padre.appendChild(alerta("Actualizado con éxito","info"));
                    }else{
                        padre.appendChild(alerta("Ha ocurrido un error","danger"));
                    }
                }else{
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
    
        
}

function solicitarDatosAlumnos(){

    if(document.getElementById('buscarNav') === null){
        var nav=document.getElementById('nav');
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="buscarNav";
            boton1.appendChild(document.createTextNode('Listar alumnos'));
            boton1.addEventListener('click',function(){solicitarDatosAlumnos()});
        nav.appendChild(boton1);
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="contratarNav";
            boton1.appendChild(document.createTextNode('Registrar contrato'));
            boton1.addEventListener('click',function(){alumnoContratadoFormulario()});
        nav.appendChild(boton1);
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="contratarNav";
            boton1.appendChild(document.createTextNode('Modificar datos'));
            boton1.addEventListener('click',function(){formularioRegistroEmpresa("actualizar")});
        nav.appendChild(boton1);
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="modificarContrasena";
            boton1.appendChild(document.createTextNode('Modificar contraseña'));
            boton1.addEventListener('click',function(){generaContrasenaTemporal("empresa",empresa)});
        nav.appendChild(boton1);
    }
    

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
                                    option.setAttribute("disabled","");
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
                    //     var col=document.createElement('div');
                    //     col.classList.add('col');
                    // row.appendChild(col);
                    //     var label=document.createElement("label");
                    //         label.for="direccion";
                    //             var labelTxt=document.createTextNode("Experiencia hasta");
                    //         label.appendChild(labelTxt);
                    //         col.appendChild(label);
                    //     var input=document.createElement("input");
                    //         input.type="text";
                    //         input.classList.add("form-control");
                    //         input.id="experienciahasta";
                    //         input.value="";
                    //         input.placeholder="Meses";
                    //     label.appendChild(input);



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
    //trae los estudios disponibles

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
    //funcion
    var alumnoobj=new Object();
        alumnoobj.perfil=document.getElementById('perfil').value;
        alumnoobj.experiencia=document.getElementById('experienciadesde').value;
        var residencia=document.getElementById('residencia').checked;
        if(residencia === true){
            alumnoobj.residir="S";
        }else alumnoobj.residir="N";
        var viaje=document.getElementById('viajar').checked;
        if(viaje === true){
            alumnoobj.viajar="S";
        }else alumnoobj.viajar="N";
        var permanencia=document.getElementById('permanente').checked;
        if(permanencia === true){
            alumnoobj.permanente="S";
        }else alumnoobj.permanente="N";
        alumnoobj.tiempo=document.getElementById('experienciadesde').value;
        if(alumnoobj.tiempo === ""){
            alumnoobj.tiempo=0;
        }

    var final = JSON.stringify(alumnoobj);
     var objcif=JSON.stringify(empresa.cif)
        console.log(final);
    
        xmlhttp.open("GET", "PHP/consultaBuscaAlumnos.php?obj="+final+"&cif="+objcif, true);
        xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            console.table(datos);
            var padre=document.getElementById("principal");
                var divtabla=document.createElement('div');
                padre.appendChild(divtabla);
                    divtabla.id="divtabla";
                var existetabla=document.getElementById('tablaDinamica');
                var existeboton=document.getElementById('botonSacarPdf');
                var existeimpreso=document.getElementById('botonImprimir');
                if(existetabla){
                    existetabla.remove();
                    existeboton.remove();
                    existeimpreso.remove();
                }
                divtabla.appendChild(creaTabla(datos));
                var existetabla=document.getElementById('tablaDinamica');
                    existetabla.classList.add('d-flex');
                    existetabla.classList.add('justify-content-center');
                    existetabla.classList.add('p-2');
                    existetabla.classList.add('m-3');
                if(existetabla){
                    //creamos botones
                    var sacaPdfboton=document.createElement('button');
                        sacaPdfboton.appendChild(document.createTextNode('Sacar pdf'));
                        sacaPdfboton.classList.add('btn');
                        sacaPdfboton.classList.add('btn-primary');
                        sacaPdfboton.classList.add('d-flex');
                        sacaPdfboton.classList.add('justify-content-center');
                        sacaPdfboton.classList.add('mx-auto');
                        sacaPdfboton.addEventListener('click',function(){sacaTablapdf()});
                        sacaPdfboton.id="botonSacarPdf";
                        padre.appendChild(sacaPdfboton);
                    // boton imprimir
                    var imprimirBoton=document.createElement('button');
                        imprimirBoton.appendChild(document.createTextNode('Imprimir listado'));
                        imprimirBoton.classList.add('btn');
                        imprimirBoton.classList.add('btn-primary');
                        imprimirBoton.classList.add('d-flex');
                        imprimirBoton.classList.add('justify-content-center');
                        imprimirBoton.classList.add('mx-auto');
                        imprimirBoton.classList.add('mt-2');
                        imprimirBoton.addEventListener('click',function(){imprimirElemento('divtabla')});
                        imprimirBoton.id="botonImprimir";
                        padre.appendChild(imprimirBoton);
                }
                
            
        }
    }

    
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



function alumnoContratadoFormulario(){
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

                //nif laumno
                    var label=document.createElement("label");
                    label.for="nif";
                        var labelTxt=document.createTextNode("DNI alumno");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                        var input=document.createElement("input");
                            input.type="text";
                            input.classList.add("form-control");
                            input.id="nif";
                            input.placeholder="Escriba el DNI del alumno";
                    divForm1.appendChild(input);

        var botonEnvio=document.createElement("button");
            botonEnvio.classList.add("btn");
            botonEnvio.classList.add("btn-block");
            botonEnvio.classList.add("btn-secondary");
            var botontxt=document.createTextNode("Enviar");
            botonEnvio.appendChild(botontxt);
            botonEnvio.type="button";
            //botonEnvio.addEventListener('click',function(){registroEmpresa()});
             botonEnvio.addEventListener('click',function(){buscaAlumnoContratarlo();});

            
        form.appendChild(botonEnvio);
}

function buscaAlumnoContratarlo(){
    //buscar un alumno en la bd del instito para mostrar sus datos y luego utilizar su dni para tabla empleadora
    crearObjetoAjax();
    var dni=document.getElementById('nif').value;
    console.log(dni);
    var alumno=new Object();
    alumno.dni=dni;
    var jsonObj = JSON.stringify(alumno);
    
    xmlhttp.open("GET", "php/buscarAlumnoBdBolsa.php?obj=" + jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            console.table(datos);

            if(document.getElementById("divLista") !== null){
                document.getElementById("divLista").remove();
                document.getElementById("botonconfirmar").remove();
            }
            if(datos !== -1){
                var padre=document.getElementById("principal");
            var divLista=document.createElement('div');
                divLista.id="divLista";
                divLista.classList.add('mt-5');
                padre.appendChild(divLista);

                var ul=document.createElement('ul');
                    ul.classList.add('list-group');
                    ul.classList.add('mx-auto');
                    ul.style="width:200px";
                    divLista.appendChild(ul);
                    var li=document.createElement('li');
                        li.classList.add('list-group-item');
                        li.classList.add('d-flex');
                        li.classList.add('jsutify-content-between');
                        li.classList.add('align-items-center');
                        li.appendChild(document.createTextNode(datos["nombre"]));
                    ul.appendChild(li);
                    var li=document.createElement('li');
                        li.classList.add('list-group-item');
                        li.classList.add('d-flex');
                        li.classList.add('jsutify-content-between');
                        li.classList.add('align-items-center');
                        li.appendChild(document.createTextNode(datos["apellido"]));
                    ul.appendChild(li);
                    var li=document.createElement('li');
                        li.classList.add('list-group-item');
                        li.classList.add('d-flex');
                        li.classList.add('jsutify-content-between');
                        li.classList.add('align-items-center');
                        li.appendChild(document.createTextNode(datos["correo"]));
                    ul.appendChild(li);
                    var li=document.createElement('li');
                        li.classList.add('list-group-item');
                        li.classList.add('d-flex');
                        li.classList.add('jsutify-content-between');
                        li.classList.add('align-items-center');
                        li.appendChild(document.createTextNode(datos["fechaNac"]));
                    ul.appendChild(li);


                if(divLista){
                    //creamos botones
                    var botonConfirmar=document.createElement('button');
                        botonConfirmar.appendChild(document.createTextNode('Confirmar alumno'));
                        botonConfirmar.classList.add('btn');
                        botonConfirmar.classList.add('btn-primary');
                        botonConfirmar.classList.add('d-flex');
                        botonConfirmar.classList.add('justify-content-center');
                        botonConfirmar.classList.add('mx-auto');
                        botonConfirmar.classList.add('mt-3');
                        botonConfirmar.addEventListener('click',function(){contratarAlumnoAjax()});
                        botonConfirmar.id="botonconfirmar";
                        padre.appendChild(botonConfirmar);

                }
            }
            

        }
    }
}

function contratarAlumnoAjax(){
    //funcion para registrar en tabla empleadora a empresa y alumno
    crearObjetoAjax();
    
    var alumnoobj=new Object();
        alumnoobj.dni=document.getElementById('nif').value;
    var jsonObj = JSON.stringify(alumnoobj);
    var jsonEmp = JSON.stringify(empresa);
    
    xmlhttp.open("GET", "php/contrataAlumno.php?obj="+jsonObj+"&objEmp="+jsonEmp, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);
            if(document.getElementById("alertaDinamica")){
                document.getElementById('alertaDinamica').remove();
            }
            var padre=document.getElementById("principal");

            if(datos === 1){
                padre.appendChild(alerta("Registrado con éxito, gracias","info"));
            }else{
                padre.appendChild(alerta("Ha ocurrido un error","danger"));
            }

            
        }
    }
}



function sacaPDF(){

        var pdf = new jsPDF('p', 'pt', 'letter');
        // source can be HTML-formatted string, or a reference
        // to an actual DOM element from which the text will be scraped.
        source = $('#divtabla')[0];
    
        // we support special element handlers. Register them with jQuery-style 
        // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
        // There is no support for any other type of selectors 
        // (class, of compound) at this time.
        specialElementHandlers = {
            // element with id of "bypass" - jQuery style selector
            '#bypassme': function (element, renderer) {
                // true = "handled elsewhere, bypass text extraction"
                return true
            }
        };
        margins = {
            top: 80,
            bottom: 60,
            left: 10,
            width: 522
        };
        // all coords and widths are in jsPDF instance's declared units
        // 'inches' in this case
        pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },
    
        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF 
            //          this allow the insertion of new lines after html
            //pdf.output('dataurlnewwindow');

            var string = pdf.output('datauri');
       
            var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"

            var x = window.open();
            x.document.open();
            x.document.write(iframe);
            x.document.close();
        }, margins);
}
function sacaTablapdf(){
        //saca pdf para alumnos de solicitud empresa

        var doc = new jsPDF('p', 'pt');
      
        var res = doc.autoTableHtmlToJson(document.getElementById("tablaDinamica"));
        // doc.autoTable(res.columns, res.data, {margin: {top: 80}});
        console.log(res);
        var header = function(data) {
          doc.setFontSize(18);
          doc.setTextColor(40);
          doc.setFontStyle('normal');
          //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
          doc.text("BOLSAWA", data.settings.margin.left, 50);
        };
      
        var options = {
          beforePageContent: header,
          head: [['Nombre', 'Apellidos', 'Dirección','DNI','Email','Fecha nacimiento','Cambio residencia ','Permanente','Viajar']],
          margin: {
            top: 80
          },
        //   startY: doc.autoTableEndPosY() + 20
        };
      
        doc.autoTable(res.columns, res.data, options);
        // doc.autoTable({margin: {top: 100}});
        // doc.autoTable(res.columns, res.data, {margin: {top: 80}});
        
        //doc.output('dataurlnewwindow');
        var string = doc.output('datauri');
       
            var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"

            var x = window.open();
            x.document.open();
            x.document.write(iframe);
            x.document.close();

}
function sacatablaV2(){
    //no funciona
    var doc = new jsPDF();
    // You can use html:
    doc.autoTable({html: 'divtabla'});
    //doc.output('dataurlnewwindow');
    var string = doc.output('datauri');
       
    var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"

    var x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();
}

