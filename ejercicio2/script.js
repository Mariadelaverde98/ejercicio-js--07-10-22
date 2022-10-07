/* Disponemos del siguiente JSON:
"Empleados": [
{ "Nombre": "John", "Apellido": "Doe"},
{ "Nombre": "Anna", "Apellido": "Smith"},
{ "Nombre": "Pedro", "Apellido": "Jones"}
]
Permite por medio de un formulario que el usuario pueda 
insertar empleados y cambiar su nombre, apellido o ambos.*/

var a = {
    "Empleados": [
        { "Nombre": "John", "Apellido": "Doe"},
        { "Nombre": "Anna", "Apellido": "Smith"},
        { "Nombre": "Pedro", "Apellido": "Jones"}
    ]
};

function insertarEmpleado() {
    var nombre = document.getElementsByTagName('input')[0].value;
    var apellido = document.getElementsByTagName('input')[1].value;
    var empleado = buscarEmpleado(nombre,apellido);
    if(empleado != undefined) {
        alert("Ya existe un empleado con ese nombre y apellido.");
    } else {
        a.Empleados.push({"Nombre": nombre, "Apellido": apellido});
    alert(JSON.stringify(a.Empleados));
    }
}

function editarEmpleado() {
    var nombre = document.getElementsByTagName('input')[2].value;
    var apellido = document.getElementsByTagName('input')[3].value;
    if (nombre == '' || apellido == '') {
        alert("Para editar los datos de un empleado el campo nombre y apellido son obligatorios");
    } else {
        var nuevoNombre = document.getElementsByTagName('input')[4].value;
        var nuevoApellido = document.getElementsByTagName('input')[5].value;  
        var empleado = buscarEmpleado(nombre, apellido);
        if(empleado == undefined) {
            alert('No existe un empleado con ese nombre y apellido');
        } else {
            if(nuevoNombre != '') {
                empleado.Nombre = nuevoNombre;
            }
            if(nuevoApellido != '') {
                empleado.Apellido = nuevoApellido;
            }
            alert(JSON.stringify(empleado));
        }
    }
}

function buscarEmpleado(nombre, apellido) {
    var empleado;
    a.Empleados.forEach(element => {
        if(element.Nombre == nombre && element.Apellido == apellido) {
            empleado = element;
        }
    });
    return empleado;
}