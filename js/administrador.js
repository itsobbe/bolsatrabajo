var xmlhttp;
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
function loginAdministrador(){
    alert("estoy login administrado");
    //ajax para hacer login admin
    crearObjetoAjax();
    var administrador=new Object();
    administrador.nombre=document.getElementById('nombre').value;
    administrador.contrasena=document.getElementById('contrasenaAdmin').value;
    var jsonObj = JSON.stringify(administrador);
    
    console.log(administrador);

    xmlhttp.open("GET", "php/loginAdministrador.php?obj=" + jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);

            if(datos !== -1){
                vistaAdministrador();
            }else{
                alert("Error login administrador, revise los datos");
            }

            
        }
    }
}
function vistaAdministrador(){
    //vista de inicio del admin
    borrarTodo();
    if(document.getElementById('buscarNav') === null){
        var nav=document.getElementById('nav');
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="buscarNav";
            boton1.appendChild(document.createTextNode('Buscar alumno'));
            boton1.addEventListener('click',function(){buscarAlumnoAdministradorFormulario()});
        nav.appendChild(boton1);
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="contratarNav";
            boton1.appendChild(document.createTextNode('Buscar empresa'));
            boton1.addEventListener('click',function(){buscarEmpresaAdministradorFormulario()});
        nav.appendChild(boton1);
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="contratarNav";
            boton1.appendChild(document.createTextNode('Actualizar base datos'));
            boton1.addEventListener('click',function(){});
        nav.appendChild(boton1);
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="modificarContrasena";
            boton1.appendChild(document.createTextNode('Listar alumnos'));
            boton1.addEventListener('click',function(){listarAdministradorFormulario("alumno")});
        nav.appendChild(boton1);
        var boton1=document.createElement('button');
            boton1.classList.add('btn');
            boton1.classList.add('btn-secondary');
            boton1.id="modificarContrasena";
            boton1.appendChild(document.createTextNode('Listar empresas'));
            boton1.addEventListener('click',function(){listarAdministradorFormulario("empresa")});
        nav.appendChild(boton1);
    }
    buscarAlumnoAdministradorFormulario();
}

function buscarAlumnoAdministradorFormulario(){
    //funcion para formulario buscar un alumno y mostrar todos sus datos
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
                            input.id="dni";
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
             botonEnvio.addEventListener('click',function(){buscarAlumnoCompletoAjax();});

            
        form.appendChild(botonEnvio);
}
function buscarAlumnoCompletoAjax(){
    //ajax que trae los datos de un alumno: cursos,experiencia,estudios y datos personales
    crearObjetoAjax();
    var alumno=new Object();
    alumno.dni=document.getElementById('dni').value;
    var jsonObj = JSON.stringify(alumno);
    
    xmlhttp.open("GET", "php/traeTodosDatosAlumno.php?obj=" + jsonObj, true);
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            console.table(datos);
            var padre=document.getElementById("principal");
            
            if(document.getElementById('alertaDinamica')){document.getElementById('alertaDinamica').remove()}
            if(datos !== -1){
                if(!document.getElementById('cardPrincipal') ){

                    
            //creo la tarjeta principal
            var divCard=document.createElement('div');
                divCard.classList.add('card');
                divCard.classList.add('text-center');
                divCard.id="cardPrincipal";
                var divHeader=document.createElement('div');
                    divHeader.classList.add('card-header');
                    divHeader.appendChild(document.createTextNode('IES Leonardo Da Vinci'));
                    divCard.appendChild(divHeader);
                var divBodyPrincipal=document.createElement('div');
                divBodyPrincipal.classList.add('card-body');
                    divCard.appendChild(divBodyPrincipal);
                    var tituloCard=document.createElement('h5');
                        tituloCard.classList.add('card-title');
                        tituloCard.appendChild(document.createTextNode('Datos alumn@'));
                        divBodyPrincipal.appendChild(tituloCard);
            padre.appendChild(divCard);

            //creo fila datos personales
            var divRowPersonales=document.createElement('div');
                divRowPersonales.classList.add('row');
                divRowPersonales.classList.add('d-flex');
                divRowPersonales.classList.add('align-content-center');
                    divBodyPrincipal.appendChild(divRowPersonales);
                //creo list con datos personales
                var divList=document.createElement('div');
                    divList.classList.add('card');
                    divList.classList.add('mx-auto');
                    divList.classList.add('mb-3');
                    divRowPersonales.appendChild(divList);
                    var ulList=document.createElement('ul');
                        ulList.classList.add('list-group');
                        ulList.classList.add('list-group-flush');
                        ulList.classList.add('flex-row');
                        divList.appendChild(ulList);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('Nombre: '+datos.nombre));
                        ulList.appendChild(li);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('Apellidos: '+datos.apellido));
                        ulList.appendChild(li);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('Correo: '+datos.correo));
                        ulList.appendChild(li);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('Fecha nacimiento: '+datos.fechaNac));
                        ulList.appendChild(li);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('Dirección: '+datos.dirección));
                        ulList.appendChild(li);
            //creo fila dentro del bodyprincipal para organizar
                var divRow=document.createElement('div');
                    divRow.classList.add('row');
                    divRow.classList.add('d-flex');
                    divRow.classList.add('align-content-center');
                    divBodyPrincipal.appendChild(divRow);

            //creo tarjetas secundarias que van dentro de columnas
                if(datos.cursos.length > 0){
                     //1
                var colCard=document.createElement('div');
                colCard.classList.add('col');
                    
                    divRow.appendChild(colCard);
                var divCardSecundaria=document.createElement('div');
                divCardSecundaria.classList.add('card');
                divCardSecundaria.classList.add('text-center');
                var divHeaderSecundario=document.createElement('div');
                    divHeaderSecundario.classList.add('card-header');
                    divHeaderSecundario.appendChild(document.createTextNode('Cursos'));
                    divCardSecundaria.appendChild(divHeaderSecundario);

                    var divBody=document.createElement('div');
                    divBody.classList.add('card-body');
                    divBody.classList.add('d-flex');
                    divBody.classList.add('justify-content-center');
                    divCardSecundaria.appendChild(divBody);
                        divBody.appendChild(creaTabla(datos.cursos));
                        colCard.appendChild(divCardSecundaria);
                };
                if(datos.estudios.length > 0){
                    //2
                    var colCard=document.createElement('div');
                    colCard.classList.add('col');
                    divRow.appendChild(colCard);
                var divCardSecundaria=document.createElement('div');
                divCardSecundaria.classList.add('card');
                divCardSecundaria.classList.add('text-center');
                var divHeaderSecundario=document.createElement('div');
                    divHeaderSecundario.classList.add('card-header');
                    divHeaderSecundario.appendChild(document.createTextNode('Estudios'));
                    divCardSecundaria.appendChild(divHeaderSecundario);

                    var divBody=document.createElement('div');
                    divBody.classList.add('card-body');
                    divCardSecundaria.appendChild(divBody);
                        divBody.appendChild(creaTabla(datos.estudios));
                        colCard.appendChild(divCardSecundaria);
                };
                if(datos.experiencia.length > 0){
                    //3
                    var colCard=document.createElement('div');
                    colCard.classList.add('col');
                    divRow.appendChild(colCard);
                var divCardSecundaria=document.createElement('div');
                divCardSecundaria.classList.add('card');
                divCardSecundaria.classList.add('text-center');
                var divHeaderSecundario=document.createElement('div');
                    divHeaderSecundario.classList.add('card-header');
                    divHeaderSecundario.appendChild(document.createTextNode('Experiencia'));
                    divCardSecundaria.appendChild(divHeaderSecundario);
                    var divBody=document.createElement('div');
                    divBody.classList.add('card-body');
                    divCardSecundaria.appendChild(divBody);
                        divBody.appendChild(creaTabla(datos.experiencia));
                        colCard.appendChild(divCardSecundaria);
                 };
               
                }
            }else{
                
                if(document.getElementById('cardPrincipal')){
                    document.getElementById('cardPrincipal').remove();
                }
                padre.appendChild(alerta("No se ha encontrado al alumno/a","info"));
            }
        }
    }
    
}

function buscarEmpresaAdministradorFormulario(){
    //funcion para formulario buscar una empresa y mostrar todos sus datos
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
                        var labelTxt=document.createTextNode("CIF empresa");
                    label.appendChild(labelTxt);
                    divForm1.appendChild(label);
                        var input=document.createElement("input");
                            input.type="text";
                            input.classList.add("form-control");
                            input.id="cif";
                            input.placeholder="Escriba el CIF de la empresa";
                    divForm1.appendChild(input);

        var botonEnvio=document.createElement("button");
            botonEnvio.classList.add("btn");
            botonEnvio.classList.add("btn-block");
            botonEnvio.classList.add("btn-secondary");
            var botontxt=document.createTextNode("Enviar");
            botonEnvio.appendChild(botontxt);
            botonEnvio.type="button";
            //botonEnvio.addEventListener('click',function(){registroEmpresa()});
             botonEnvio.addEventListener('click',function(){buscarEmpresaDatosAjax();});

            
        form.appendChild(botonEnvio);
}
function buscarEmpresaDatosAjax(){
//ajax que trae los datos de un alumno: cursos,experiencia,estudios y datos personales
    crearObjetoAjax();
    var empresa=new Object();
        empresa.cif=document.getElementById('cif').value;
    var jsonObj = JSON.stringify(empresa);
    console.log(typeof jsonObj);
    xmlhttp.open("GET", "php/traeTodosDatosEmpresa.php?obj=" + jsonObj, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            console.table(datos);
            var padre=document.getElementById("principal");

            if(document.getElementById('alertaDinamica')){document.getElementById('alertaDinamica').remove()}
            if(datos !== -1){
                if(!document.getElementById('cardPrincipal') ){

                    
            //creo la tarjeta principal
            var divCard=document.createElement('div');
                divCard.classList.add('card');
                divCard.classList.add('text-center');
                divCard.id="cardPrincipal";
                var divHeader=document.createElement('div');
                    divHeader.classList.add('card-header');
                    divHeader.appendChild(document.createTextNode('IES Leonardo Da Vinci'));
                    divCard.appendChild(divHeader);
                var divBodyPrincipal=document.createElement('div');
                divBodyPrincipal.classList.add('card-body');
                    divCard.appendChild(divBodyPrincipal);
                    var tituloCard=document.createElement('h5');
                        tituloCard.classList.add('card-title');
                        tituloCard.appendChild(document.createTextNode('Datos empresa'));
                        divBodyPrincipal.appendChild(tituloCard);
            padre.appendChild(divCard);

            //creo fila datos personales
            var divRowPersonales=document.createElement('div');
                divRowPersonales.classList.add('row');
                divRowPersonales.classList.add('d-flex');
                divRowPersonales.classList.add('align-content-center');
                    divBodyPrincipal.appendChild(divRowPersonales);
                //creo list con datos personales
                var divList=document.createElement('div');
                    divList.classList.add('card');
                    divList.classList.add('mx-auto');
                    divList.classList.add('mb-3');
                    divRowPersonales.appendChild(divList);
                    var ulList=document.createElement('ul');
                        ulList.classList.add('list-group');
                        ulList.classList.add('list-group-flush');
                        ulList.classList.add('flex-row');
                        divList.appendChild(ulList);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('Nombre: '+datos.nombre));
                        ulList.appendChild(li);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('CIF: '+datos.cif));
                        ulList.appendChild(li);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('Correo: '+datos.correo));
                        ulList.appendChild(li);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('Teléfono: '+datos.telefono));
                        ulList.appendChild(li);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('Número contratos: '+ datos.contratos));
                        ulList.appendChild(li);
                        var li=document.createElement('li');
                            li.classList.add('list-group-item');
                            li.appendChild(document.createTextNode('Número solicitudes: '+  datos.solicitudes));
                        ulList.appendChild(li);
            
                }
             }else{

                if(document.getElementById('cardPrincipal')){
                    document.getElementById('cardPrincipal').remove();
                }
                padre.appendChild(alerta("No se ha encontrado a la empresa","info"));
             }
        }
    }
}

function listarAdministradorFormulario(quien){
    borrarTodo();
    //funcion que muestra formulario para listar alumnos activos por perfil
    var padre=document.getElementById('principal');
    
    var row=document.createElement('div');
                    row.classList.add('row');
                    row.classList.add('d-flex');
                    row.classList.add('justify-content-center');
                padre.appendChild(row);

                    //primera columna
                    var col=document.createElement('div');
                        col.classList.add('col-3');
                    row.appendChild(col);
                        //creamos el select de perfil
                        var label=document.createElement("label");
                            if(quien === "empresa"){
                                label.appendChild(document.createTextNode("¿Qué empresa quiere ver por solicitud de perfil?"));
                            }else label.appendChild(document.createTextNode("¿Qué perfil quiere listar de alumnos activos?"));
                            
                        col.appendChild(label);
                        var select=document.createElement("select");
                            select.classList.add("custom-select");
                            select.id="perfil";
                        col.appendChild(select);
                            var option=document.createElement("option");
                                    option.setAttribute("disabled","");
                                    option.value="x";
                                    option.appendChild(document.createTextNode("Elija una opcion"));
                                select.appendChild(option);
                            traerPerfil();
                        
                        var row=document.createElement('div');
                            row.classList.add('row');
                            row.classList.add('d-flex');
                            row.classList.add('justify-content-center');
                        padre.appendChild(row);
                        var botonEnvio=document.createElement("button");
                            botonEnvio.classList.add("btn");
                            botonEnvio.classList.add("btn");
                            botonEnvio.classList.add("btn-secondary");
                            botonEnvio.classList.add("mt-4");
                            var botontxt=document.createTextNode("Buscar");
                            botonEnvio.appendChild(botontxt);
                            botonEnvio.addEventListener("click",function(){buscarActivosPerfilAdministrador(quien)});
                            botonEnvio.type="button";
                            
                            row.appendChild(botonEnvio);
}
function buscarActivosPerfilAdministrador(quien){
    console.log("buscarActivosÑPerfilAdministrador");
    crearObjetoAjax();
    var perfil=new Object();
        perfil.perfil=document.getElementById('perfil').value;
    var jsonObj = JSON.stringify(perfil);
    console.log(jsonObj);
    console.log(quien);
    if(quien === "empresa"){
        xmlhttp.open("GET", "php/traeEmpresaBuscaPerfil.php?obj=" + jsonObj, true);
    }else{
        xmlhttp.open("GET", "php/buscaAlumnosActivosPorPerfil.php?obj=" + jsonObj, true);
    }
    xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
        //alert("elert en onready");
        var padre=document.getElementById("principal");
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log(xmlhttp.responseText);
            var datos = JSON.parse(xmlhttp.responseText);
            //console.table(datos);

            if(datos !== -1){
                if(document.getElementById("tablaDinamica")){document.getElementById("tablaDinamica").parentNode.remove()}
                if(document.getElementById("alertaDinamica")){document.getElementById("alertaDinamica").remove()}
                
                var div=document.createElement('div');
                    div.classList.add('row');
                    div.classList.add('d-flex');
                    div.classList.add('justify-content-center');
                    div.classList.add('text-center');
                    div.classList.add('mt-3');
            padre.appendChild(div);
            div.appendChild(creaTabla(datos,"tablaDinamicaAdministrador"));
            }else{
                if(document.getElementById("alertaDinamica")){document.getElementById("alertaDinamica").remove()}
                if(document.getElementById("tablaDinamica")){document.getElementById("tablaDinamica").parentNode.remove()}
                padre.appendChild(alerta("No hay datos para mostrar","info"));
            }
            
            
        }
    }


}