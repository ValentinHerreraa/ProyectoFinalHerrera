const usuarios = [
    {nombreYApellido: "valentin herrera"},
    {nombreYApellido: "francisco sottile"},
    {nombreYApellido: "facundo prelat"},
    {nombreYApellido: "lucio magnin"},
    {nombreYApellido: "angel patyn" }
]

//funcion constructora, agregar persona al array de objetos

function persona (nombreYApellido){
    this.nombreYApellido = nombreYApellido
}
usuarios.push(new persona("santino murillo"))

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

let nombreIngresado = "";

function reservar (){
    nombreIngresado = document.getElementById("nombre").value.trim();

    if (nombreIngresado === ""){
        alert("Por favor, Ingrese su nombre")
        return;
    }

    let encontrado = usuarios.some(usuario => usuario.nombreYApellido.toLowerCase() === nombreIngresado.toLowerCase());

    if (encontrado){
        alert(`Bienvenido a DePrimera ${nombreIngresado}.`)
    } else{
        alert("Disculpame, No encontramos tu nombre en nuestros registros.")
    }
}
    document.addEventListener("click", function(event){
        if (event.target.classList.contains("botonFinde") || event.target.classList.contains("botonSemana")){
            if(nombreIngresado === ""){
                alert("Primero debes registrarte antes de hacer una reserva.")
                return;
            }

            let dia = event.target.textContent;
            alert(`Perfecto ${nombreIngresado} reservaste el dia ${dia}, Gracias por confiar en DePrimera`)
        }
    });
reservar()