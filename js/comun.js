//var xmlhttp = new XMLHttpRequest();
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
                                    fieldset.style="background-color: #78c2ad6e !important;"
                                    fieldset.classList.add('bordesRedondos');
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
                                        var botonEnvio=document.createElement("button");
                                            botonEnvio.addEventListener('click',function(){cambiarContrasenaVistaInicio(event)});
                                            botonEnvio.type="button";
                                               botonEnvio.classList.add("btn");
                                               botonEnvio.classList.add("btn-secondary");
                                               botonEnvio.classList.add('btn-sm');
                                               botonEnvio.classList.add('ml-2');
                                           fieldset.appendChild(botonEnvio);
                                               var textoBtn=document.createTextNode("Contraseña olvidada");
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
                                    fieldset.classList.add('bordesRedondos');
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

                                            var botonEnvio=document.createElement("button");
                                            botonEnvio.addEventListener('click',function(){cambiarContrasenaVistaInicio(event)});
                                            botonEnvio.type="button";
                                               botonEnvio.classList.add("btn");
                                               botonEnvio.classList.add("btn-secondary");
                                               botonEnvio.classList.add('btn-sm');
                                               botonEnvio.classList.add('ml-2');
                                           fieldset.appendChild(botonEnvio);
                                               var textoBtn=document.createTextNode("Contraseña olvidada");
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

                                            //PARTE ADMINISTRADOR
                            var divContenido1=document.createElement("div");
                            divContenido1.classList.add("tab-pane");
                            divContenido1.classList.add("fade");
                            divContenido1.classList.add("show");
                            
                            divContenido1.id="admin";
                        divContenidoTab.appendChild(divContenido1);
                            var form=document.createElement("form");
                            divContenido1.appendChild(form);
                                var fieldset=document.createElement("fieldset");
                                fieldset.style="background-color: #78c2ad6e !important;";
                                fieldset.classList.add('bordesRedondos');
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
                                       var textoBtn=document.createTextNode("Enviar");
                                       botonEnvio.appendChild(textoBtn);
                                        botonEnvio.classList.add("btn");
                                        botonEnvio.classList.add("btn-secondary");
                                        botonEnvio.type="button";
                                        botonEnvio.addEventListener('click',function(){loginAdministrador()});
                                    fieldset.appendChild(botonEnvio);
                                        // var textoBtn=document.createTextNode("Enviar");
                                        // botonEnvio.appendChild(textoBtn);

                                    //var parrafoSinCuenta=document.createElement("p");
                                    //fieldset.appendChild(parrafoSinCuenta);
}

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
            if(datos === 1){
                revisionContrasenaTemporaFormulario(quien,datosObj);
            }
            
            
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
                    vistaAlumno();
                }else{
                    //alerta problema
                    alert("problema");                
                }
            }
            
            
            
            }
        }
    }
}
//cambiamos contraseña desde la vista inicio
function cambiarContrasenaVistaInicio(event){
    //alert(event.target);
    // var hijo=document.getElementById("contrasena1");
    // hermano=hijo.parentNode.parentNode.querySelector("input").previousSibling;
    
    var boton=event.target;
    var input=boton.parentNode.querySelector("input");
    var quienEs=input.id;
    var valor=input.value;
    var obj=new Object();
    if(valor !== null && valor !== ""){
        if(quienEs ==="cif"){
            obj.cif=valor;
            generaContrasenaTemporal("empresa",obj);
        }else if(quienEs === "nif"){
            obj.nif=valor;
            generaContrasenaTemporal("alumno",obj);
        }
        console.log(obj);
    }else{
        alert("Rellene el "+quienEs);
        input.focus();
    } 
    
    
}



function borrarTodo(){
    //funcion para borrar todo el contenido
    var principal=document.getElementById("principal");
    while(principal.firstChild){
        principal.removeChild(principal.firstChild);
    }
}
function creaTabla(datos,clase){
    console.log("datos tabla en crea tabla");
    console.log(datos);
    var tabla=document.createElement("table");
        tabla.id="tablaDinamica";
        tabla.classList.add(clase);
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
