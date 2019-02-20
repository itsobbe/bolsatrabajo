// var xmlhttp = new XMLHttpRequest();
var xmlhttp;
var inicio=new Object();
inicio.titulo="Bolsa de trabajo Bolsawa";
inicio.card={
    alumno:{
        tipo:"Alumno",
        nombre:"Joaquin Cortés Cortés",
        cita:"La bolsa de trabajo Bolsawa me ha permitido tener más contacto con el mundo laboral incluso desde el propio instituto",
        imagen:"https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
    },
    empresa:{
        tipo:"Empresa",
        nombre:"Elena Matero Delicado",
        cita:"Gracias a Bolsawa tenemos un mercado de posibles trabajadores con un nivel grande y amplio",
        imagen:"https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
    }
}
inicio.formulario={
    titulo:"Inicia sesión",
    tipo1:"Empresa",
    tipo2:"Alumno",
    tipo3:"Administrador"
}


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
    
    xmlhttp.open("GET", "PHP/consultaTraeEncuesta.php?id=" + final, true);
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



var contContraseña=1;
function vistaInicio(){
    //funcion para pintar la interfaz de inicio general
    var principal=document.getElementById("principal");

    //primera tarjeta
        var divContenedor=document.createElement("div");
            divContenedor.classList.add("container");
            divContenedor.classList.add("mt-2");
        principal.appendChild(divContenedor);
            var titulo=document.createElement("h1");
                    var textoTitulo=document.createTextNode(inicio.titulo);
                titulo.appendChild(textoTitulo);
            divContenedor.appendChild(titulo);
            var row=document.createElement("div");
                row.classList.add("row");
                row.classList.add("align-items-center");
            divContenedor.appendChild(row);
                var col=document.createElement("div");
                    col.classList.add("col");
                row.appendChild(col);
                    var cardDiv=document.createElement("div");
                        cardDiv.classList.add("card");
                        cardDiv.classList.add("border-primary");
                        cardDiv.classList.add("mb-3");
                        cardDiv.style="max-height: 30rem;min-height: 30rem;";
                    col.appendChild(cardDiv);
                        var headerCard=document.createElement("div");
                            headerCard.classList.add("card-header");
                            headerCard.classList.add("bg-primary");
                            headerCard.classList.add("text-white");
                            var headerCardText=document.createTextNode(inicio.card.alumno.tipo);
                            headerCard.appendChild(headerCardText);
                        cardDiv.appendChild(headerCard);
                        var bodyCard=document.createElement("div");
                            bodyCard.classList.add("card-body");
                            bodyCard.classList.add("text-primary");
                        cardDiv.appendChild(bodyCard);
                            var tituloCardBody=document.createElement("h5");
                                tituloCardBody.classList.add("card-title");
                                tituloCardBody.classList.add("text-secondary");
                                var tituloCardBodyTexto=document.createTextNode(inicio.card.alumno.nombre);
                                tituloCardBody.appendChild(tituloCardBodyTexto);
                            bodyCard.appendChild(tituloCardBody);
                            var fotoCard=document.createElement("div");
                                fotoCard.classList.add("mx-auto");
                            bodyCard.appendChild(fotoCard);
                                var imagen=document.createElement("img");
                                    imagen.src=inicio.card.alumno.imagen;
                                    imagen.classList.add("rounded-circle");
                                    imagen.classList.add("img-fluid");
                                fotoCard.appendChild(imagen);
                                var citaCard=document.createElement("div");
                                    citaCard.classList.add("blockquote");
                                    var citaCardParrafo=document.createElement("p");
                                        citaCardParrafo.classList.add("mb-0");
                                        citaCard.appendChild(citaCardParrafo);
                                        var citaCardParrafoTexto=document.createTextNode(inicio.card.alumno.cita);
                                        citaCardParrafo.appendChild(citaCardParrafoTexto);
                            bodyCard.appendChild(citaCard);
            //segunda Tajeta
            var col=document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
            var cardDiv=document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.classList.add("border-primary");
            cardDiv.classList.add("mb-3");
            cardDiv.style="max-height: 30rem;min-height: 30rem;";
        col.appendChild(cardDiv);
            var headerCard=document.createElement("div");
                headerCard.classList.add("card-header");
                headerCard.classList.add("bg-primary");
                headerCard.classList.add("text-white");
                var headerCardText=document.createTextNode(inicio.card.empresa.tipo);
                headerCard.appendChild(headerCardText);
            cardDiv.appendChild(headerCard);
            var bodyCard=document.createElement("div");
                bodyCard.classList.add("card-body");
                bodyCard.classList.add("text-primary");
            cardDiv.appendChild(bodyCard);
                var tituloCardBody=document.createElement("h5");
                    tituloCardBody.classList.add("card-title");
                    tituloCardBody.classList.add("text-secondary");
                    var tituloCardBodyTexto=document.createTextNode(inicio.card.empresa.nombre);
                    tituloCardBody.appendChild(tituloCardBodyTexto);
                bodyCard.appendChild(tituloCardBody);
                var fotoCard=document.createElement("div");
                    fotoCard.classList.add("mx-auto");
                bodyCard.appendChild(fotoCard);
                    var imagen=document.createElement("img");
                        imagen.src=inicio.card.empresa.imagen;
                        imagen.classList.add("rounded-circle");
                        imagen.classList.add("img-fluid");
                    fotoCard.appendChild(imagen);
                    var citaCard=document.createElement("div");
                        citaCard.classList.add("blockquote");
                        var citaCardParrafo=document.createElement("p");
                            citaCardParrafo.classList.add("mb-0");
                            citaCard.appendChild(citaCardParrafo);
                            var citaCardParrafoTexto=document.createTextNode(inicio.card.empresa.cita);
                            citaCardParrafo.appendChild(citaCardParrafoTexto);
                bodyCard.appendChild(citaCard);
                                    
            //menu de entrada a aplicacion
            
                    var colInicio=document.createElement("div");
                        colInicio.classList.add("col");
                        colInicio.classList.add("align-self-start");
                row.appendChild(colInicio);
                        colInicioTitulo=document.createElement("h2");
                        var colInicioTituloTexto=document.createTextNode(inicio.formulario.titulo);
                        colInicioTitulo.appendChild(colInicioTituloTexto);
                        var listaEnlaces=document.createElement("ul");
                            listaEnlaces.classList.add("nav");
                            listaEnlaces.classList.add("nav-tabs");
                        colInicio.appendChild(listaEnlaces);
                            var liEmpresa=document.createElement("li");
                                liEmpresa.classList.add("nav-item");
                            listaEnlaces.appendChild(liEmpresa);
                                var enlaceLiEmpresa=document.createElement("a");
                                    enlaceLiEmpresa.classList.add("nav-link");
                                    enlaceLiEmpresa.classList.add('active');
                                    enlaceLiEmpresa.setAttribute("data-toggle","tab");
                                    enlaceLiEmpresa.href="#empresa";
                                        var enlaceLiEmpresaTexto=document.createTextNode(inicio.formulario.tipo1);
                                    enlaceLiEmpresa.appendChild(enlaceLiEmpresaTexto);
                                liEmpresa.appendChild(enlaceLiEmpresa);
                            var liEmpresa=document.createElement("li");
                                liEmpresa.classList.add("nav-item");
                            listaEnlaces.appendChild(liEmpresa);
                                var enlaceLiEmpresa=document.createElement("a");
                                    enlaceLiEmpresa.classList.add("nav-link");
                                    enlaceLiEmpresa.setAttribute("data-toggle","tab");
                                    enlaceLiEmpresa.href="#alumno";
                                        var enlaceLiEmpresaTexto=document.createTextNode(inicio.formulario.tipo2);
                                    enlaceLiEmpresa.appendChild(enlaceLiEmpresaTexto);
                                liEmpresa.appendChild(enlaceLiEmpresa);
                            var liEmpresa=document.createElement("li");
                                liEmpresa.classList.add("nav-item");
                            listaEnlaces.appendChild(liEmpresa);
                                var enlaceLiEmpresa=document.createElement("a");
                                    enlaceLiEmpresa.classList.add("nav-link");
                                    enlaceLiEmpresa.setAttribute("data-toggle","tab");
                                    enlaceLiEmpresa.href="#admin";
                                        var enlaceLiEmpresaTexto=document.createTextNode(inicio.formulario.tipo3);
                                    enlaceLiEmpresa.appendChild(enlaceLiEmpresaTexto);
                                liEmpresa.appendChild(enlaceLiEmpresa)
                                //parte interior menu
                        var divContenidoTab=document.createElement("div");
                            divContenidoTab.id="myTabContent";
                            divContenidoTab.classList.add("tab-content");
                        colInicio.appendChild(divContenidoTab);
                            var divContenido1=document.createElement("div");
                                divContenido1.classList.add("tab-pane");
                                divContenido1.classList.add("fade");
                                divContenido1.classList.add("show");
                                divContenido1.classList.add("active");
                                divContenido1.id="empresa";
                            divContenidoTab.appendChild(divContenido1);
                                var form=document.createElement("form");
                                divContenido1.appendChild(form);
                                    var fieldset=document.createElement("fieldset");
                                    fieldset.style="background-color: #78c2ad6e !important;border-bottom-left-radius: 10px;    border-bottom-right-radius: 10px;"
                                    form.appendChild(fieldset);
                                        var divForm1=document.createElement("div");
                                            divForm1.classList.add("form-group");
                                        fieldset.appendChild(divForm1);
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

                                        var divForm1=document.createElement("div");
                                            divForm1.classList.add("form-group");
                                        fieldset.appendChild(divForm1);
                                            var label=document.createElement("label");
                                            label.for="Contraseña";
                                                var labelTxt=document.createTextNode("Contraseña");
                                                
                                            label.appendChild(labelTxt);
                                            divForm1.appendChild(label);
                                                var input=document.createElement("input");
                                                    input.type="password";
                                                    input.classList.add("form-control");
                                                    input.id="contrasena"+contContraseña;
                                                    contContraseña++;
                                                    input.placeholder="Contraseña";
                                            divForm1.appendChild(input);
                                        var botonEnvio=document.createElement("button");
                                         botonEnvio.addEventListener('click',function(){loginEmpresa()});
                                         botonEnvio.type="button";
                                            botonEnvio.classList.add("btn");
                                            botonEnvio.classList.add("btn-secondary");
                                        fieldset.appendChild(botonEnvio);
                                            var textoBtn=document.createTextNode("Enviar");
                                            botonEnvio.appendChild(textoBtn);
                                           
                                        var parrafoSinCuenta=document.createElement("p");
                                        fieldset.appendChild(parrafoSinCuenta);
                                            var txtSinCuenta=document.createTextNode("¿No tienes cuenta?¡Regístrate! ");
                                            parrafoSinCuenta.appendChild(txtSinCuenta);
                                            var botonRegistro=document.createElement("button");
                                                botonRegistro.classList.add("btn");
                                                botonRegistro.classList.add("btn-outline-secondary");
                                                var txtRegistro=document.createTextNode("Registro");
                                                botonRegistro.appendChild(txtRegistro);
                                                botonRegistro.addEventListener("click",function(){formularioRegistroEmpresa()});
                                            parrafoSinCuenta.appendChild(botonRegistro);

                                            //parte alumno

                            var divContenido1=document.createElement("div");
                                divContenido1.classList.add("tab-pane");
                                divContenido1.classList.add("fade");
                                divContenido1.classList.add("show");
                                
                                divContenido1.id="alumno";
                            divContenidoTab.appendChild(divContenido1);
                                var form=document.createElement("form");
                                divContenido1.appendChild(form);
                                    var fieldset=document.createElement("fieldset");
                                    fieldset.style="background-color: #78c2ad6e !important;";
                                    form.appendChild(fieldset);
                                        var divForm1=document.createElement("div");
                                            divForm1.classList.add("form-group");
                                        fieldset.appendChild(divForm1);
                                            var label=document.createElement("label");
                                            label.for="nif";
                                                var labelTxt=document.createTextNode("NIF");
                                            label.appendChild(labelTxt);
                                            divForm1.appendChild(label);
                                                var input=document.createElement("input");
                                                    input.type="text";
                                                    input.classList.add("form-control");
                                                    input.id="nif";
                                                    input.placeholder="NIF";
                                            divForm1.appendChild(input);

                                        var divForm1=document.createElement("div");
                                            divForm1.classList.add("form-group");
                                        fieldset.appendChild(divForm1);
                                            var label=document.createElement("label");
                                            label.for="Contraseña";
                                                var labelTxt=document.createTextNode("Contraseña");
                                            label.appendChild(labelTxt);
                                            divForm1.appendChild(label);
                                                var input=document.createElement("input");
                                                    input.type="password";
                                                    input.classList.add("form-control");
                                                    input.id="contrasena";
                                                    input.placeholder="Contraseña";
                                            divForm1.appendChild(input);
                                        var botonEnvio=document.createElement("button");
                                            botonEnvio.addEventListener('click',function(){loginAlumno()});
                                            botonEnvio.classList.add("btn");
                                            botonEnvio.classList.add("btn-secondary");
                                            botonEnvio.type="button";
                                        fieldset.appendChild(botonEnvio);
                                            var textoBtn=document.createTextNode("Enviar");
                                            botonEnvio.appendChild(textoBtn);
                                        var parrafoSinCuenta=document.createElement("p");
                                        fieldset.appendChild(parrafoSinCuenta);
                                            var txtSinCuenta=document.createTextNode("¿No tienes cuenta?¡Regístrate! ");
                                            parrafoSinCuenta.appendChild(txtSinCuenta);
                                            var botonRegistro=document.createElement("button");
                                                botonRegistro.classList.add("btn");
                                                botonRegistro.classList.add("btn-outline-secondary");
                                                var txtRegistro=document.createTextNode("Registro");
                                                botonRegistro.appendChild(txtRegistro);
                                                botonRegistro.addEventListener("click",function(){formularioBuscarAlumno()});
                                            parrafoSinCuenta.appendChild(botonRegistro);

                                            //parte admin
                            var divContenido1=document.createElement("div");
                            divContenido1.classList.add("tab-pane");
                            divContenido1.classList.add("fade");
                            divContenido1.classList.add("show");
                            
                            divContenido1.id="admin";
                        divContenidoTab.appendChild(divContenido1);
                            var form=document.createElement("form");
                            divContenido1.appendChild(form);
                                var fieldset=document.createElement("fieldset");
                                fieldset.style="background-color: #78c2ad6e !important;"
                                form.appendChild(fieldset);
                                    var divForm1=document.createElement("div");
                                        divForm1.classList.add("form-group");
                                    fieldset.appendChild(divForm1);
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

                                    var divForm1=document.createElement("div");
                                        divForm1.classList.add("form-group");
                                    fieldset.appendChild(divForm1);
                                        var label=document.createElement("label");
                                        label.for="Contraseña";
                                            var labelTxt=document.createTextNode("Contraseña");
                                        label.appendChild(labelTxt);
                                        divForm1.appendChild(label);
                                            var input=document.createElement("input");
                                                input.type="password";
                                                input.classList.add("form-control");
                                                input.id="contrasenaAdmin";
                                                input.placeholder="Contraseña";
                                        divForm1.appendChild(input);
                                    var botonEnvio=document.createElement("button");
                                        
                                        botonEnvio.classList.add("btn");
                                        botonEnvio.classList.add("btn-secondary");
                                    fieldset.appendChild(botonEnvio);
                                        var textoBtn=document.createTextNode("Enviar");
                                        botonEnvio.appendChild(textoBtn);
                                    var parrafoSinCuenta=document.createElement("p");
                                    fieldset.appendChild(parrafoSinCuenta);
}

function formularioBuscarAlumno(){
    borrarTodo();
    //creamos el formulario para buscar alumno
        var padre=document.getElementById("principal");
            var container=document.createElement("div");
                container.classList.add("container");
                container.classList.add("d-flex");
                container.classList.add("flex-column");
                container.classList.add("align-items-center");

            padre.appendChild(container);
                var row=document.createElement("div");
                row.classList.add("row");
                row.classList.add("justify-content-center");
                container.appendChild(row);
                    var col=document.createElement("col");
                        col.classList.add("col");
                    row.appendChild(col);
        
                var form=document.createElement("form");
                    col.appendChild(form);
                        var fieldset=document.createElement("fieldset");
                        form.appendChild(fieldset);
                            var divForm1=document.createElement("div");
                                divForm1.classList.add("form-group");
                            fieldset.appendChild(divForm1);
                                var label=document.createElement("label");
                                label.for="nif";
                                    var labelTxt=document.createTextNode("NIF");
                                label.appendChild(labelTxt);
                                divForm1.appendChild(label);
                                    var input=document.createElement("input");
                                        input.type="text";
                                        input.classList.add("form-control");
                                        input.id="nif";
                                        input.value="12345678E";
                                        input.placeholder="NIF";
                                divForm1.appendChild(input);
                    var botonEnvio=document.createElement("button");
                        botonEnvio.classList.add("btn");
                        botonEnvio.classList.add("btn-block");
                        botonEnvio.classList.add("btn-secondary");
                        var botontxt=document.createTextNode("Enviar");
                        botonEnvio.appendChild(botontxt);
                        botonEnvio.addEventListener("click",function(){buscarAlumno()});
                        botonEnvio.type="button";
                    form.appendChild(botonEnvio);

                
                var volverInicio=document.createElement('button');
                    volverInicio.id="volverInicio";
                    volverInicio.classList.add('btn');
                    volverInicio.classList.add('btn-block');
                    volverInicio.classList.add('btn-outline-secondary');
                    volverInicio.classList.add('mt-4');
                        var volverTxt=document.createTextNode('Volver a la página de inicio');
                    volverInicio.addEventListener("click",function(){borrarTodo();vistaInicio()});
                     volverInicio.appendChild(volverTxt);
                row.appendChild(volverInicio);
    }

function buscarAlumno(){
    //funcion para buscar alumno en la BD de IES !!
    crearObjetoAjax();
        var alumno=new Object();
        alumno.nif=document.getElementById("nif").value;

        var jsonObj = JSON.stringify(alumno);

        xmlhttp.open("GET", "php/consultaExisteAlumno.php?obj=" + jsonObj, true);0
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var datos = JSON.parse(xmlhttp.responseText);
                //console.log(datos);
                if(datos == 1){
                    //si existe entonces ajax para traer sus datos
                    traerDatosAlumnoIes(alumno.nif);
                    
                }else{
                    var padre=document.getElementById("principal");
                        var alertaa=document.getElementById('alertaDinamica');
                       
                        if(alertaa == null){
                            padre.appendChild(alerta("Error: no encontrado o ya registrado","danger"));
                        }
                       
                }
            }
        }
    
        
}


function traerDatosAlumnoIes(nif){
    //alert(nif);
    //funcion para traer datos alumno en la bd de IES
    crearObjetoAjax();
        var alumno=new Object();
        alumno.nif=nif;

        var jsonObj = JSON.stringify(alumno);

        xmlhttp.open("GET", "php/consultaTraerDatosAlumnoIes.php?obj=" + jsonObj, true);0
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var datos = JSON.parse(xmlhttp.responseText);
                console.log(datos);
                formularioRegistroAlumnoV2(datos,"registrar");
            }
        }
    
        
    
}

function formularioRegistroAlumno(datos){
//funcion que pinta el formulario con todos los datos del alumno traidos de la bd

    //llamo a borrar todo aqui o donde la llame?
    borrarTodo();
    var padre=document.getElementById("principal");
    var container=document.createElement("div");
        container.classList.add("container");
        container.classList.add("d-flex");
        container.classList.add("flex-column");
        container.classList.add("align-items-center");

    padre.appendChild(container);
        //quiero que haya 3 columnas por fila, este es el primer row
        var row=document.createElement("div");
        row.classList.add("row");
        row.classList.add("justify-content-center");
        container.appendChild(row);
            var col=document.createElement("col");
                col.classList.add("col");
            row.appendChild(col);
    
    var form=document.createElement("form");
        col.appendChild(form);
            var fieldset=document.createElement("fieldset");
            form.appendChild(fieldset);
                var divForm1=document.createElement("div");
                    divForm1.classList.add("form-group");
                fieldset.appendChild(divForm1);
                //input nif
                    var label=document.createElement("label");
                    label.for="nif";
                        var labelTxt=document.createTextNode("NIF");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                    var input=document.createElement("input");
                        input.type="text";
                        input.classList.add("form-control");
                        input.id="nif";
                        input.placeholder="NIF";
                    divForm1.appendChild(input);
                    //input nombre
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

                    //input apellidos
                    var label=document.createElement("label");
                    label.for="apellido";
                        var labelTxt=document.createTextNode("Apellidos");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                    var input=document.createElement("input");
                        input.type="text";
                        input.classList.add("form-control");
                        input.id="apellido";
                        input.placeholder="Apellidos";
                    divForm1.appendChild(input);
                    //input direccion
                    var label=document.createElement("label");
                    label.for="direccion";
                        var labelTxt=document.createTextNode("Dirección");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                    var input=document.createElement("input");
                        input.type="text";
                        input.classList.add("form-control");
                        input.id="direccion";
                        input.placeholder="Dirección";
                    divForm1.appendChild(input);
                    //input correo
                    var label=document.createElement("label");
                    label.for="correo";
                        var labelTxt=document.createTextNode("E-mail");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                    var input=document.createElement("input");
                        input.type="email";
                        input.classList.add("form-control");
                        input.id="email";
                        input.placeholder="E-mail";
                    divForm1.appendChild(input);

                    //input fecha nac
                    var label=document.createElement("label");
                    label.for="fecha";
                        var labelTxt=document.createTextNode("Fecha nacimiento");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                    var input=document.createElement("input");
                        input.type="date";
                        input.classList.add("form-control");
                        input.id="fechaNac";
                        input.placeholder="Fecha nacimiento";
                    divForm1.appendChild(input);

        var botonEnvio=document.createElement("button");
            botonEnvio.classList.add("btn");
            botonEnvio.classList.add("btn-block");
            botonEnvio.classList.add("btn-secondary");
            var botontxt=document.createTextNode("Enviar");
            botonEnvio.appendChild(botontxt);
            botonEnvio.addEventListener("click",function(){buscarAlumno()});
            botonEnvio.type="button";
        form.appendChild(botonEnvio);
}

function formularioRegistroAlumnoV2(datos,quien){
    console.log("en form 2 inicio");
    console.log(datos);
    //funcion que pinta el formulario con todos los datos del alumno traidos de la bd
    
        //llamo a borrar todo aqui o donde la llame?
        borrarTodo();
        var padre=document.getElementById("principal");
        var container=document.createElement("div");
            container.classList.add("container");
            container.classList.add("d-flex");
            container.classList.add("flex-column");
            container.classList.add("align-items-center");
            container.style="max-width:120vh !important;min-width:120vh !important";
    
        padre.appendChild(container);
            //quiero que haya 3 columnas por fila, este es el row general
            var row=document.createElement("div");
            row.classList.add("row");
            row.classList.add("justify-content-center");
            container.appendChild(row);
                
    
        var form=document.createElement("form");
            row.appendChild(form);
                var fieldset=document.createElement("fieldset");
                    fieldset.id="fieldset";
                form.appendChild(fieldset);
                    var divForm1=document.createElement("div");
                        divForm1.classList.add("form-group");
                    fieldset.appendChild(divForm1);
                    var tituloDatos=document.createElement("h3");
                        tituloDatos.appendChild(document.createTextNode("Datos personales"));
                    fieldset.appendChild(tituloDatos);
                    //creamos primera row
                    var row1=document.createElement("div");
                        row1.classList.add("row");
                    fieldset.appendChild(row1);
                    //primera columna
                        var col1=document.createElement("div");
                            col1.classList.add("col");
                        row1.appendChild(col1);
                    //input nif
                        var label=document.createElement("label");
                        label.for="nif";
                            var labelTxt=document.createTextNode("NIF");
                        label.appendChild(labelTxt);
                        col1.appendChild(label);
                        var input=document.createElement("input");
                            input.type="text";
                            input.classList.add("form-control");
                            input.id="nif";
                            input.placeholder="NIF";
                            if(datos[0] !== undefined){
                                input.value=datos[0].dni;
                            }else input.value=datos.dni;
                            
                            input.setAttribute("disabled","disabled");
                        col1.appendChild(input);
                        //columna 2
                        var col2=document.createElement("div");
                            col2.classList.add("col");
                        row1.appendChild(col2)
                        //input nombre
                        var label=document.createElement("label");
                        label.for="nombre";
                            var labelTxt=document.createTextNode("Nombre");
                        label.appendChild(labelTxt);
                        col2.appendChild(label);
                        var input=document.createElement("input");
                            input.type="text";
                            input.classList.add("form-control");
                            input.id="nombre";
                            if(datos[0] !== undefined){
                            input.value=datos[0].nombre;
                            }else input.value=datos.nombre;
                            input.placeholder="Nombre";
                        col2.appendChild(input);

                        //columna 3
                        var col3=document.createElement("div");
                            col3.classList.add("col");
                        row1.appendChild(col3)
    
                        //input apellidos
                        var label=document.createElement("label");
                        label.for="apellido";
                            var labelTxt=document.createTextNode("Apellidos");
                        label.appendChild(labelTxt);
                        col3.appendChild(label);
                        var input=document.createElement("input");
                            input.type="text";
                            input.classList.add("form-control");
                            input.id="apellido";
                            if(datos[0] !== undefined){
                            input.value=datos[0].apellido;
                            }else input.value=datos.apellido;
                            input.placeholder="Apellidos";
                        col3.appendChild(input);

                            //creamos segunda row
                        var row2=document.createElement("div");
                            row2.classList.add("row");
                        fieldset.appendChild(row2);
                        //primera columna
                        var col4=document.createElement("div");
                            col4.classList.add("col");
                        row2.appendChild(col4);
                        //input direccion
                        var label=document.createElement("label");
                        label.for="direccion";
                            var labelTxt=document.createTextNode("Dirección");
                        label.appendChild(labelTxt);
                        col4.appendChild(label);
                        var input=document.createElement("input");
                            input.type="text";
                            input.classList.add("form-control");
                            input.id="direccion";
                            if(datos[0] !== undefined){
                            input.value=datos[0].direccion;
                            }else input.value=datos.dirección;
                            input.placeholder="Dirección";
                        col4.appendChild(input);

                        //otra columna
                        var col5=document.createElement("div");
                            col5.classList.add("col");
                        row2.appendChild(col5);
                        //input correo
                        var label=document.createElement("label");
                        label.for="correo";
                            var labelTxt=document.createTextNode("E-mail");
                        label.appendChild(labelTxt);
                        col5.appendChild(label);
                        var input=document.createElement("input");
                            input.type="email";
                            input.classList.add("form-control");
                            input.id="email";
                            if(datos[0] !== undefined){
                            input.value=datos[0].correo;
                            }else input.value=datos.correo;
                            input.placeholder="E-mail";
                        col5.appendChild(input);
    
                        //primera columna
                        var col6=document.createElement("div");
                            col6.classList.add("col");
                        row2.appendChild(col6);
                        //input fecha nac
                        var label=document.createElement("label");
                        label.for="fecha";
                            var labelTxt=document.createTextNode("Fecha nacimiento");
                        label.appendChild(labelTxt);
                        col6.appendChild(label);
                        var input=document.createElement("input");
                            input.type="date";
                            input.classList.add("form-control");
                            input.id="fechaNac";
                            if(datos[0] !== undefined){
                            input.value=datos[0].fechaNac;
                            }else input.value=datos.fechaNac;
                            input.placeholder="Fecha nacimiento";
                        col6.appendChild(input);

                        //creamos 3 fila
                        var row=document.createElement("div");
                            row.classList.add("row");
                            fieldset.appendChild(row);
                            //columna 1
                            var col=document.createElement("div");
                                col.classList.add("col");
                            row.appendChild(col);
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
                            row.appendChild(col);
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
                        row.appendChild(col);
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

                        var tituloEstudios=document.createElement("h3");
                            tituloEstudios.appendChild(document.createTextNode("Estudios"));
                    fieldset.appendChild(tituloEstudios);
                            creaSelectEstudiosAlumno();
                            crearInputsCursos();
                            crearInputsExperiencia();

            var botonEnvio=document.createElement("button");
                botonEnvio.classList.add("btn");
                botonEnvio.classList.add("btn-block");
                botonEnvio.classList.add("btn-secondary");
                botonEnvio.classList.add("mt-4");
                var botontxt=document.createTextNode("Enviar");
                botonEnvio.appendChild(botontxt);
                //registrar o actualizar
                botonEnvio.addEventListener("click",function(){registroAlumnoAJAX(quien)});
                botonEnvio.type="button";
            form.appendChild(botonEnvio);
            
    }
//para diferencias ids cursos
var contSelectsCurso=1;
function crearInputsCursos(){
        var fieldset=document.getElementById("fieldset");

        var divPadre=document.getElementById("divEstudios");
        if(divPadre == null){
            var divPadre=document.createElement("div");
            divPadre.id="divEstudios";
            fieldset.appendChild(divPadre);

            var Titulo=document.createElement("h3");
                Titulo.appendChild(document.createTextNode("Cursos"));
                divPadre.appendChild(Titulo);
        }
        
        //fila 4 row
        var row=document.createElement("div");
        row.classList.add("row");
        row.classList.add("mt-2");
        row.classList.add("d-flex");
            row.classList.add("justify-content-center");
            row.classList.add("align-items-baseline");
    divPadre.appendChild(row);
        //columna 1 
        var col=document.createElement("div");
            col.classList.add("col");
            
            
    row.appendChild(col);
    if(contSelectsCurso == 1){
        var label=document.createElement("label");
        label.for="curso";
            var labelTxt=document.createTextNode("Nombre curso");
        label.appendChild(labelTxt);
        col.appendChild(label);
    }

        var input=document.createElement("input");
            input.type="text";
            input.classList.add("form-control");
            input.id="curso"+contSelectsCurso;
            input.placeholder="Curso";
            //input.addEventListener('focusout',function(){revisar()}); 
        col.appendChild(input);
    //creamos segundo input
    var col=document.createElement("div");
        col.classList.add("col");
    row.appendChild(col);

    if(contSelectsCurso == 1){
        var label=document.createElement("label");
        label.for="centro";
            var labelTxt=document.createTextNode("Centro curso");
        label.appendChild(labelTxt);
        col.appendChild(label);
    }
        var input=document.createElement("input");
            input.type="text";
            input.classList.add("form-control");
            input.id="centro"+contSelectsCurso;
            input.placeholder="Centro";
        col.appendChild(input);

            //creamos tercer input
    var col=document.createElement("div");
    col.classList.add("col");
row.appendChild(col);

if(contSelectsCurso == 1){
    var label=document.createElement("label");
    label.for="durecion";
        var labelTxt=document.createTextNode("Duración");
    label.appendChild(labelTxt);
    col.appendChild(label);
}
    var input=document.createElement("input");
        input.type="number";
        input.classList.add("form-control");
        input.id="duracion"+contSelectsCurso;
        input.placeholder="Duración";
    col.appendChild(input);

        //creamos boton para añadir mas
        var col=document.createElement("div");
        col.classList.add("col");
        col.classList.add("align-self-end");
        col.classList.add("justify-content-center");
    row.appendChild(col);
   
    if(contSelectsCurso == 1){
    var boton=document.createElement("button")
                boton.type="button";
                boton.classList.add("btn");
                boton.classList.add("btn-outline-secondary");
                boton.appendChild(document.createTextNode("Añadir curso "));
                boton.addEventListener("click",function(){crearInputsCursos();});
                
            col.appendChild(boton);
    }

            

            contSelectsCurso++;

}
function creaSelectEstudiosAlumno(){
    //crea la fila con columna y dentro el select y el boton de añadir mas y la experiencia para ese select
    var fieldset=document.getElementById("fieldset");
            //fila 4 row
            var row=document.createElement("div");
            row.classList.add("row");
            row.classList.add("mt-2");
    fieldset.appendChild(row);
            //columna 1 
            var col=document.createElement("div");
                col.classList.add("col");
                col.classList.add('d-flex');
                col.classList.add('flex-column');
                col.classList.add('justify-content-center');
                col.classList.add('align-items-center');
            row.appendChild(col);

                var label=document.createElement("label");
                    label.appendChild(document.createTextNode("¿Qué estudios tiene?"));
                col.appendChild(label);

                
                //creamos el SELECT  que muestra todos los estudios del IES
                //tenemos que llamar a algo que nos traiga los estudios, ajax con return de estudios y for each pintar
                var select=document.createElement("select");
                    select.classList.add("custom-select");
                    select.id="selectEstudios"; //borrado + contador
                    select.style="height:180px";
                    select.size="2";
                col.appendChild(select);
                    //ahora llamariamos a funcion
                    //creamos options por cada uno
                    var option=document.createElement("option");
                        option.setAttribute("selected","");
                        option.value="x";
                        option.appendChild(document.createTextNode("Elija una opcion"));
                    select.appendChild(option);
                    //esta funcion rellena el select
                    traeEstudios();
                    //aquí funcion que rellena los ya elgidos en caso de que se vayan a modificar
                    //traeEstudiosElegidos();

             //creamos el boton para añadir a elegidos
            var col2=document.createElement("div");
            col2.classList.add("col");
            col2.classList.add("d-flex");
            col2.classList.add("flex-column");
            col2.classList.add("align-items-center");
            col2.classList.add('justify-content-center');
        row.appendChild(col2);
            var boton=document.createElement("button")
                boton.type="button";
                boton.classList.add("btn");
                boton.classList.add("btn-outline-secondary");
               
                boton.style="width:75px";
                boton.appendChild(document.createTextNode("-->"));
                boton.addEventListener("click",function(){copiaBorraEstudios()});
                
            col2.appendChild(boton);

        //boton borrar desde elegidos
            var boton=document.createElement("button")
                boton.type="button";
                boton.classList.add("btn");
                boton.classList.add("btn-outline-secondary");
                
                boton.style="width:75px";
                boton.appendChild(document.createTextNode("<--"));
                boton.addEventListener("click",function(){copiaBorraElegidos()});
                
            col2.appendChild(boton);
            //aqui en este select iran las opciones elegidas
            var col3=document.createElement("div");
                col3.classList.add("col");
                // col3.classList.add("d-flex");
                // col3.classList.add("align-items-end");

                var label=document.createElement("label");
                label.appendChild(document.createTextNode("Estudios elegidos:"));
            col3.appendChild(label);

                var select=document.createElement("select");
                    select.classList.add("custom-select");
                    select.id="estudiosElegidos";
                    select.size="2";
                    select.style="height:190px";
                    
                col3.appendChild(select);
                    //creamos primer option
                    var option=document.createElement("option");
                        option.setAttribute("selected","");
                        option.appendChild(document.createTextNode("Estudios elegidos"));
                        option.value="x";
                    select.appendChild(option);
            row.appendChild(col3);
                

}
//para diferencias experiencias
var contSelectsExperiencia=1;
function crearInputsExperiencia(){
    var fieldset=document.getElementById("fieldset");
        if(contSelectsExperiencia==1){
            var Titulo=document.createElement("h3");
                Titulo.appendChild(document.createTextNode("Experiencia"));
                fieldset.appendChild(Titulo);
                
        }
            //fila 4 row
        var row=document.createElement("div");
            row.classList.add("row");
            row.classList.add("mt-2");
            row.classList.add("d-flex");
                row.classList.add("justify-content-center");
                row.classList.add("align-items-baseline");
        fieldset.appendChild(row);
            
            
            //columna 1 
            var col=document.createElement("div");
                col.classList.add("col");
                
                
        row.appendChild(col);
        if(contSelectsExperiencia == 1){
            var label=document.createElement("label");
            label.for="especificacion";
                var labelTxt=document.createTextNode("Especificación");
            label.appendChild(labelTxt);
            col.appendChild(label);
        }

    var input=document.createElement("input");
        input.type="text";
        input.classList.add("form-control");
        input.id="especificacion"+contSelectsExperiencia;
        input.placeholder="Especificación";
    col.appendChild(input);
//creamos segundo input
var col=document.createElement("div");
    col.classList.add("col");
row.appendChild(col);

if(contSelectsExperiencia == 1){
    var label=document.createElement("label");
    label.for="empresa";
        var labelTxt=document.createTextNode("Empresa");
    label.appendChild(labelTxt);
    col.appendChild(label);
}
    var input=document.createElement("input");
        input.type="text";
        input.classList.add("form-control");
        input.id="empresa"+contSelectsExperiencia;
        input.placeholder="Empresa";
    col.appendChild(input);

        //creamos tercer input
var col=document.createElement("div");
col.classList.add("col");
row.appendChild(col);

if(contSelectsExperiencia == 1){
var label=document.createElement("label");
label.for="tiempo";
    var labelTxt=document.createTextNode("Tiempo Experiencia");
label.appendChild(labelTxt);
col.appendChild(label);
}
var input=document.createElement("input");
    input.type="number";
    input.classList.add("form-control");
    input.id="tiempo"+contSelectsExperiencia;
    input.placeholder="Meses experiencia";
col.appendChild(input);

    //creamos boton para añadir mas
    var col=document.createElement("div");
    col.classList.add("col");
    col.classList.add("align-self-end");
    col.classList.add("justify-content-center");
row.appendChild(col);

if(contSelectsExperiencia == 1){
var boton=document.createElement("button")
            boton.type="button";
            boton.classList.add("btn");
            boton.classList.add("btn-outline-secondary");
            boton.appendChild(document.createTextNode("Añadir experiencia"));
            boton.addEventListener("click",function(){crearInputsExperiencia();});
            
        col.appendChild(boton);
}

contSelectsExperiencia++;
}

function copiaBorraEstudios(){
    //copia de estudios disponibles a elegidos y lo borra
    var selectPadre=document.getElementById("selectEstudios");
    var selectHijo=document.getElementById("estudiosElegidos");


            if(selectPadre.options[selectPadre.selectedIndex].value != "x"){
                var nuevoOption=document.createElement("option");
                nuevoOption.value=selectPadre.options[selectPadre.selectedIndex].value;
                nuevoOption.appendChild(document.createTextNode(selectPadre.options[selectPadre.selectedIndex].text));
            selectHijo.appendChild(nuevoOption);
            selectPadre.options[selectPadre.selectedIndex].remove();
            }
}
function copiaBorraElegidos(){
    var selectPadre=document.getElementById("selectEstudios");
    var selectHijo=document.getElementById("estudiosElegidos");


            if(selectHijo.options[selectHijo.selectedIndex].value != "x"){
                var nuevoOption=document.createElement("option");
                nuevoOption.value=selectHijo.options[selectHijo.selectedIndex].value;
                nuevoOption.appendChild(document.createTextNode(selectHijo.options[selectHijo.selectedIndex].text));
                selectPadre.appendChild(nuevoOption);
            selectHijo.options[selectHijo.selectedIndex].remove();
            }
}

function traeEstudios(){
   
    //funcion que devuelve los estudios disponibles en la bd y los mete al select
    //alert("estoy buscand estufios");
    //funcion para traer datos alumno en la bd de IES
    crearObjetoAjax();
        // var alumno=new Object();
        // alumno.nif=nif;

        // var jsonObj = JSON.stringify(alumno);
        
        xmlhttp.open("GET", "php/consultaTraeEstudiosCentro.php", true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                
                var datos = JSON.parse(xmlhttp.responseText);
                console.log(datos);
                //var select=document.getElementById(i);
                //con esto le meto los datos al ultimo select
                //var select=document.getElementsByTagName("select")[document.getElementsByTagName("select").length-1];
                //con esto buscamos los elementos que tengan en id una palabra
                var selectTodos=document.querySelectorAll("[id*='sele']");
                //cogemos el último select para meterle los datos a el
                var select=selectTodos[selectTodos.length-1];
                console.log(selectTodos.length);
                
                    for(var obj in datos){
                        var option=document.createElement("option");
                            option.value=datos[obj]["idEstudio"];
                            option.appendChild(document.createTextNode(datos[obj]["nombre"]));
                        select.appendChild(option);
                    }
            }
        }
}

function registroAlumnoAJAX(quien){
    // console.log(quien);
    crearObjetoAjax();
    var alumno=new Object();
    var hecho = true; //para controlar que todos los datos son correctos

    alumno.nombre=document.getElementById("nombre").value;
    alumno.apellido=document.getElementById("apellido").value;
    alumno.nif=document.getElementById("nif").value;
    alumno.direccion=document.getElementById("direccion").value;
    alumno.email=document.getElementById("email").value;
    alumno.nacimiento=document.getElementById("fechaNac").value;
    alumno.viajar="";
    var viajar=document.getElementById("viajar").checked;
    if(viajar == true){
        alumno.viajar="S";
    }else alumno.viajar="N";

    alumno.residir="";
    var residir=document.getElementById("residencia").checked;
    
    if(residir == true){
        alumno.residir="S";
    }else alumno.residir="N";

    alumno.permanente="";
    var permanente=document.getElementById("permanente").checked;
    if(permanente == true){
        alumno.permanente="S";
    }else alumno.permanente="N";
    
    //arreglar, con arra.from .options me trae un array de options
    //alumno.estudios=Array.from(document.getElementById("estudiosElegidos").options);
    var estudios=document.getElementById("estudiosElegidos");
    alumno.estudios=Array();
    if(quien === "registrar"){
        if(estudios.options.length === 1){
            hecho=false;
            alert("Debes elegir al menos un estudio");
        }
    }
    for(var i=0;i < estudios.options.length;i++){
        if(estudios.options[i].value != "x"){
            alumno.estudios.push(estudios.options[i].value);
        }
    }

    alumno.cursos=Array();
    //creo array cursos
    var numC=document.querySelectorAll('input[id^="curso"]').length;
    for(var j=0;j<numC;j++){
        var curso=document.querySelectorAll('input[id^="curso"]')[j].value;
        var centro=document.querySelectorAll('input[id^="centro"]')[j].value;
        var duracion=document.querySelectorAll('input[id^="duracion"]')[j].value;
        if(curso != "" || centro != "" || duracion != ""){
            if(curso != "" && centro != "" && duracion != ""){
                var array=[curso,centro,duracion];
                alumno.cursos.push(array);
            }else {
                //var divEstudios=document.getElementById("divEstudios");
                    //divEstudios.appendChild(document.createTextNode('Faltan datos'));
                  //  divEstudios.appendChild(alerta("Faltan datos","danger"));
                alert("Faltan datos de cursos");
                hecho=false;
            }
            
        }
        
        
    }
    alumno.experiencia=Array();
    //creo array experiencia
    var tot=document.querySelectorAll('input[id^="especificacion"]').length;
    for(var i=0;i<tot;i++){
        var especificaion=document.querySelectorAll('input[id^="especificacion"]')[i].value;
        var empresa=document.querySelectorAll('input[id^="empresa"]')[i].value;
        var tiempo=document.querySelectorAll('input[id^="tiempo"]')[i].value;

        if(especificaion != "" || empresa != "" || tiempo != ""){
            if(especificaion != "" && empresa != "" && tiempo != ""){
                var array=[especificaion,empresa,tiempo];
                alumno.experiencia.push(array);
            }else {
                alert("Faltan datos de experiencia");
                hecho=false;
            }
            
        }

        //var array=[especificaion,empresa,tiempo];
        
    }

    console.log(alumno);

    var jsonObj = JSON.stringify(alumno);
    
    if(hecho){
    if(quien === "registrar"){
        xmlhttp.open("GET", "PHP/insertarDatosRegistroAlumno.php?obj="+ jsonObj, true);
    }else{
        xmlhttp.open("GET", "PHP/insertarDatosActualizadosAlumno.php?obj="+ jsonObj, true);
    }
    
    /*Mandamos al PHP encargado de traer los datos, el valor de referencia */
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");

        
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);

            var padre=document.getElementById("principal");
            borrarTodo();
                if(quien === "registar"){
                    if(datos==1){
                        padre.appendChild(alerta("Alumno registrado con éxito, en 5 segundos le redirigimos al inicio","info"));
                        setTimeout(function(){ borrarTodo();vistaInicio(); contSelectsCurso=1;contSelectsExperiencia=1}, 5000);
                    }else{
                       
                        padre.appendChild(alerta("Alumno no registrado, inténtelo de nuevo. En 5 segundos le redirigimos al formulario de inicio.","danger"));
                        setTimeout(function(){ borrarTodo();vistaInicio(); contSelectsCurso=1;contSelectsExperiencia=1}, 5000);
                    }
                }else{
                    if(datos > 1){
                        padre.appendChild(alerta("Alumno actualizado con éxito, en 5 segundos le redirigimos al inicio","info"));
                        setTimeout(function(){ borrarTodo();vistaAlumno(); contSelectsCurso=1;contSelectsExperiencia=1}, 5000);
                    }else{
                        padre.appendChild(alerta("Alumno no actualizado, inténtelo de nuevo. En 5 segundos le redirigimos al formulario de inicio.","danger"));
                        setTimeout(function(){ borrarTodo();vistaAlumno(); contSelectsCurso=1;contSelectsExperiencia=1}, 5000);
                    }
                }
                
            
        }
    }

    

    }
}

var alumno=new Object();
function loginAlumno(){
    crearObjetoAjax();
    
    var login=new Object();
    login.contrasena=document.getElementById('contrasena').value;
    login.dni=document.getElementById('nif').value;
    var jsonObj = JSON.stringify(login);
    
    xmlhttp.open("GET", "php/loginAlumno.php?obj=" + jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);
            if(datos !== -1){
                alumno=datos;
                console.log(alumno);
                if(datos["contrasenaTemporal"] === "S"){
                    //redirigir formulario rellena temporal
                    cambiarContrasenaTemporalFormulario("alumno",alumno);
                }else{
                    alert("no tiene temporal todo correcto");
                    vistaAlumno();
                }
            }else{
                alert("Error login");
            }

            
        }
    }

}

function vistaAlumno(){
    //vista que ve el alumno cuando logueado
    borrarTodo();
    if(document.getElementById('buscarNav') === null){
        var nav=document.getElementById('nav');
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="buscarNav";
            boton1.appendChild(document.createTextNode('Modificar datos'));
            boton1.addEventListener('click',function(){formularioRegistroAlumnoV2(alumno,"actualizar")});
        nav.appendChild(boton1);
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="buscarNav";
            boton1.appendChild(document.createTextNode('Cambiar contraseña'));
            boton1.addEventListener('click',function(){generaContrasenaTemporal("alumno",alumno)});
        nav.appendChild(boton1);
    }

    console.log("alumno bolsa");
    console.log(alumno);
    formularioRegistroAlumnoV2(alumno,"actualizar");
}

function traeEstudiosElegidos(){
    crearObjetoAjax();
    //funcion que carga en select estudios elegidos los que ya tiene el alumno
    
    var obj = JSON.stringify(alumno);

    xmlhttp.open("GET", "PHP/consultaEstudiosAlumno.php?obj="+obj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);

            var padre=document.getElementById("principal");
            //select estudio estudiosElegidos
            var select=document.getElementById('estudiosElegidos');
            for(var obj in datos){
                var option=document.createElement("option");
                    option.value=datos[obj]["idEstudio"];
                    option.appendChild(document.createTextNode(datos[obj]["nombre"]));
                select.appendChild(option);
                
                var estudios=document.getElementById('selectEstudios');
                for(var i=0;i < estudios.options.length;i++){
                    if(estudios.options[i].value === datos[obj]["idEstudio"]){
                        estudios.options[i].remove();
                    }
                    
                }
            }
            //console.log(document.getElementById());
        }
    }
}
function traeCursosElegidos(){
    crearObjetoAjax();
    //trae cursos alumn bd
    var jsonObj = JSON.stringify(alumno);
    
    xmlhttp.open("GET", "PHP/consultaTraeCursosElegidos.php?obj=" + jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);
            // datos.forEach(
            //     function(curso){
            //         console.log(curso);
            //         var curso=document.querySelectorAll('input[id^="curso"]')[contSelectsCurso-2].value=curso.nombre;
            //         var centro=document.querySelectorAll('input[id^="centro"]')[contSelectsCurso-2].value=curso.nombre;
            //         var duracion=document.querySelectorAll('input[id^="duracion"]')[contSelectsCurso-2].value=1;
            //         crearInputsCursos();
            //     }
            // );
            for(var obj of datos){
                console.log(obj);
                var curso=document.querySelectorAll('input[id^="curso"]')[contSelectsCurso-2].value=obj.nombre;
                    var centro=document.querySelectorAll('input[id^="centro"]')[contSelectsCurso-2].value=obj.nombre;
                    var duracion=document.querySelectorAll('input[id^="duracion"]')[contSelectsCurso-2].value=obj.duracion;
                    crearInputsCursos();
            }
            
        }
    }
}

function traeExperiencia(){
    crearObjetoAjax();
    //trae input exp
    var jsonObj = JSON.stringify(alumno);
    
    xmlhttp.open("GET", "PHP/consultaTraeExperiencia.php?obj=" + jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);
            console.log("obj exp en tarer exp");
            console.log(datos);
            for(obj of datos){
                var especificaion=document.querySelectorAll('input[id^="especificacion"]')[contSelectsExperiencia-2].value=obj.especificacion;
             var empresa=document.querySelectorAll('input[id^="empresa"]')[contSelectsExperiencia-2].value=obj.empresa;
            var tiempo=document.querySelectorAll('input[id^="tiempo"]')[contSelectsExperiencia-2].value=obj.tiempo;
            crearInputsExperiencia();
            }
            

            
        }
    }
}