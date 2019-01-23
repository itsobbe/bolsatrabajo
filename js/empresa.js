

function registroEmpresa(){
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
            

            var form=document.createElement("form");
                col.appendChild(form);
                    var fieldset=document.createElement("fieldset");
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

                            
                                        

                var botonEnvio=document.createElement("button");
                    botonEnvio.classList.add("btn");
                    botonEnvio.classList.add("btn-block");
                    botonEnvio.classList.add("btn-secondary");
                    var botontxt=document.createTextNode("Enviar");
                    botonEnvio.appendChild(botontxt);
                    botonEnvio.type="button";
                form.appendChild(botonEnvio);
}