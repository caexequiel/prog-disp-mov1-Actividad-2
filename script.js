let cont = 0;
let datos = [];
let empresa;
let domicilio_empresa;
let ciudad_nacimiento;

function datos_personales(){
    let cuil = document.getElementById("cuil").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let cantidad_hijos = document.getElementById("hijos").value;
    let estado_civil = EstadoCivil();
    let formosenio = Formosenio();
    let trabaja = Trabaja();

    if (cantidad_hijos > 0){
        cantidad_hijos = "Tiene "+cantidad_hijos+" hijos.";
    }
    else{
        cantidad_hijos = "Sin hijos";
    }

    if(cuil === 0 || nombre === "" || apellido === "" || 
        fecha_nacimiento === null || nacionalidad === "" || 
        cantidad_hijos === 0){
        alert("Ingrese todos los datos solicitados")
    }

    cuil = "CUIL: "+cuil;
    nombre = "Nombre: "+nombre;
    apellido = "Apellido: "+apellido;
    fecha_nacimiento = "Fecha de nacimiento: "+fecha_nacimiento;
    nacionalidad = "Nacionalidad: "+nacionalidad; 

    

    datos = [cuil,nombre,apellido,fecha_nacimiento,
        nacionalidad,cantidad_hijos,estado_civil,
        formosenio,trabaja];

    analizarTrabajo(trabaja);

    analizaFormosenio(formosenio);
    //Agregamos un botón de enviar 2. Siempre que contador sea mayor a 0.
    agregarboton();
    
}

function mostrarDatos() {

    // Obtener el formulario
    let form = document.getElementById("newform2");

    // Crear el elemento h4
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "resultado");
    h4.setAttribute("id", "listado");

    // Agregar el elemento h4 al formulario
    form.appendChild(h4);

    // Obtener el elemento con el ID "listado"
    const listaVieja = document.getElementById("listado");

    // Eliminar los hijos del elemento "newform"
    while (listaVieja.firstChild) {
        listaVieja.removeChild(listaVieja.firstChild);
    }
  
    // Agregar los elementos del array al elemento "newform"
    for (let i = 0; i < datos.length; i++) {
      let elemento = document.createElement("h4");
      elemento.textContent = datos[i];
      elemento.id = "listado";
      listaVieja.appendChild(elemento);
    }
  }

function agregarboton(){
    if (cont > 1){
        // Obtener todos los elementos input con el ID "enviar2"
        let inputsBotones2 = document.querySelectorAll("#enviar2");

        // Eliminar los elementos botones
        //Solo eliminamos si es que existe el botón previamente
        if (inputsBotones2.length >= 1){
            inputsBotones2.forEach((enviar2) => {
                enviar2.parentNode.removeChild(enviar2);
                }); 
        }
        
        // Obtener todos los elementos input con el ID "empresa"
        let inputsBotones1 = document.querySelectorAll("#enviar1");

        // Eliminar los elementos botones
        inputsBotones1.forEach((enviar) => {
        enviar.parentNode.removeChild(enviar);
        }); 

        // Crea el botón
        let boton2 = document.createElement("input");

        // Atributos del botón
        boton2.setAttribute("type", "button");
        boton2.setAttribute("class", "botones");
        boton2.setAttribute("onclick", ("datos_personales2()"));
        boton2.setAttribute("value", 'ENVIAR');
        boton2.setAttribute("id", "enviar2");

        // Agrega el botón al formulario
        document.getElementById("newform").appendChild(boton2);
    }else{
        /* // Obtener todos los elementos input con el ID "empresa"
         let enviar2 = document.querySelectorAll("#enviar2");

         // Eliminar los elementos input
         for (let boton2 of enviar2) {
            boton2.parentNode.removeChild(boton2);
         }  */
    }
}

function datos_personales2(){
    datos_personales();

    // Obtener el valor de los input
    let ciudad_nacimiento = document.getElementById("nacimiento").value;
    let empresa = document.getElementById("empresa").value;
    // Obtener el valor del input
    let domicilio_empresa = document.getElementById("domicilio").value;

    if (empresa === "" || domicilio_empresa === "" || ciudad_nacimiento === ""){
        alert("Ingrese todos los datos faltantes");
    }else{

        datos.push("Nació en: "+ciudad_nacimiento);
        datos.push("Trabaja en: "+empresa);
        datos.push("Su trabajo está en: "+domicilio_empresa);

        mostrarDatos()
    }    
}

function analizaFormosenio(formosenio){
    if(formosenio === 'El usuario es formoseño'){
        // Obtener todos los elementos input con el ID "nacimiento"
        let inputsNacimiento = document.querySelectorAll("#nacimiento");
        // Obtener la cantidad de elementos input con el ID "nacimiento"
        let cantidad = inputsNacimiento.length;
    

        // No hay elementos input con el ID "nacimiento"
        if (cantidad === 0) {
            let nacimiento = document.createElement("input");
            nacimiento.setAttribute("type", "text");
            nacimiento.setAttribute("class", "formulario");
            nacimiento.setAttribute("placeholder", "Ingrese el nombre de la ciudad en donde nació: ");
            nacimiento.setAttribute("name", "nacimiento");
            nacimiento.setAttribute("id", "nacimiento");
    
            // Obtener el formulario
            let input = document.getElementById("newform");
    
            // Colocar el input en el formulario
            input.appendChild(nacimiento);
        }  
    }
    else{
        // Obtener todos los elementos input con el ID "empresa"
        let inputsNacimiento = document.querySelectorAll("#nacimiento");

        // Eliminar los elementos input
        for (let Nacimiento of inputsNacimiento) {
            Nacimiento.parentNode.removeChild(Nacimiento);
        }
    }
    
}

function analizarTrabajo(trabaja){
    if (trabaja === 'El usuario trabaja'){

        // Obtener todos los elementos input con el ID "empresa"
        let inputsEmpresa = document.querySelectorAll("#empresa");
        // Obtener todos los elementos input con el ID "domicilio"
        let inputsdomicilio = document.querySelectorAll("#domicilio");

        // Obtener la cantidad de elementos input con el ID "nacimiento"
        let cantidad = inputsEmpresa.length;
    

        // No hay elementos input con el ID "empresa"
        if (cantidad === 0) {
            // Solicitar al usuario que coloque en qué empresa trabaja
            let inputEmpresa = document.createElement("input");
            inputEmpresa.setAttribute("type", "text");
            inputEmpresa.setAttribute("class", "formulario");
            inputEmpresa.setAttribute("placeholder", "Ingrese el nombre de su empresa: ");
            inputEmpresa.setAttribute("name", "empresa");
            inputEmpresa.setAttribute("id", "empresa");

            // Solicitar al usuario que coloque en qué empresa trabaja
            let domicilio = document.createElement("input");
            domicilio.setAttribute("type", "text");
            domicilio.setAttribute("class", "formulario");
            domicilio.setAttribute("placeholder", "Ingrese el domicilio de su empresa: ");
            domicilio.setAttribute("name", "domicilio");
            domicilio.setAttribute("id", "domicilio");

            // Obtener el formulario
            let input = document.getElementById("newform");

            // Colocar el input en el formulario
            input.appendChild(inputEmpresa);
            input.appendChild(domicilio);
        }
    }
    else{
        // Obtener todos los elementos input con el ID "empresa"
        let inputsEmpresa = document.querySelectorAll("#empresa");
        let inputsDomicilio = document.querySelectorAll("#domicilio");

        // Eliminar los elementos input
        for (let inputEmpresa of inputsEmpresa) {
            inputEmpresa.parentNode.removeChild(inputEmpresa); 
        }
        // Eliminar los elementos input
        for (let domicilio of inputsDomicilio) {
            domicilio.parentNode.removeChild(domicilio); 
        }      
    }
}

function EstadoCivil(){
    let  select = document.querySelector('#estado_civil-select');
    let valorSeleccionado = select.value;

    let estado_civil = ""; //1- casado, 2-soltero ,3- divorciado, 4- otros
    switch (valorSeleccionado) {
    case 'opción 1':
        estado_civil = 'El usuario es casado';
        break;
    case 'opción 2':
        estado_civil = 'El usuario es soltero';
        break;
    case 'opción 3':
        estado_civil = 'El usuario es divorciado';
        break;
    case 'opción 4':
        estado_civil = 'El usuario es otros';
        break;
    }
    return estado_civil;
}

function Trabaja(){
    let select = document.querySelector('#trabaja-select');
    let valorSeleccionado = select.value;

    let trabaja = ""; //1- Si, 2- No
    switch (valorSeleccionado) {
    case 'opción 1':
        trabaja = 'El usuario trabaja';
        if (cont <2 ){
            cont += 1;
        }
        
        break;
    case 'opción 2':
        trabaja = 'El usuario no trabaja';
        break;
    }
    return trabaja;
}

function Formosenio(){
    let select = document.querySelector('#formosenio-select');
    let valorSeleccionado = select.value;

    let formosenio;
    switch (valorSeleccionado) {
    case 'opción 1':
        formosenio = 'El usuario es formoseño';
        if (cont <2 ){
            cont += 1;
        }
        
        break;
    case 'opción 2':
        formosenio = 'El usuario no es formoseño';
        break;
    }
    return formosenio;
}