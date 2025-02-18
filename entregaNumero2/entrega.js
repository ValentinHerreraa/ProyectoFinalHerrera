const usuarios = [
    {nombreYApellido: "valentin herrera"},
    {nombreYApellido: "francisco sottile"},
    {nombreYApellido: "facundo prelat"},
    {nombreYApellido: "lucio magnin"},
    {nombreYApellido: "angel patyn" }
]

//funcion constructora

function persona (nombreYApellido){
    this.nombreYApellido = nombreYApellido
}
usuarios.push(new persona("santino murillo"))

console.log(usuarios)

let diaComplejo = [
    {dia: "viernes", complejo: "el clasico"},
    {dia: "sabado", complejo: "el rincon"},
    {dia: "jueves", complejo: "futbol para todos"},
    {dia: "martes", complejo: "futbolito"},
    {dia: "miercoles", complejo: "todo canchas"},
    {dia: "lunes", complejo: "doble cinco"}
]
//crear nuevo nodo



//guardar datos usuarios.
localStorage.setItem("usuarios", JSON.stringify(usuarios))

const guardarDatos = JSON.parse(localStorage.getItem("usuarios"))

let condicion = true

function reservar (){

    //registrarse en DePrimera
    const nombreIngresado = document.getElementById("nombre").value.trim()

    if(nombreIngresado === ""){
        alert("Por favor ingrese su nombre")
        return;
    }

    let encontrado = false;
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].nombreYApellido.toLowerCase() === nombreIngresado){
            encontrado = true;
            break;
        }
    }
    if(encontrado){
        alert(`Bienvenido a DePrimera ${nombreIngresado}.`)
    } else{
        alert("Nombre no registrado en DePrimera")
    }
    //reservar dias en DePrimera

    
}
reservar()
