//uso de una funcion
//ciclos y/o condicionales
//consola js, cuadros de dialogo confirm, prompt yu alert

const usuarios = [
    {nombreYApellido: "valentin herrera"},
    {nombreYApellido: "francisco sottile"},
    {nombreYApellido: "facundo prelat"},
    {nombreYApellido: "lucio magnin"},
    {nombreYApellido: "angel patyn"}
]

let diaComplejo = [
    {dia: "viernes", complejo: "el clasico"},
    {dia: "sabado", complejo: "el rincon"},
    {dia: "jueves", complejo: "futbol para todos"}
]
//reservar una cancha y verificar si un usuario es valido

let condicion = true
let intentos = 3

const reservar = function (){
    do{
        let ingresarNombre = prompt("Ingresa tu nombre por favor: ");

        const usuarioValido = usuarios.some(usuario => usuario.nombreYApellido === ingresarNombre);

        if(usuarioValido){
            alert(`Bienvenido. continuando con su reserva, espere un momento...`);
            
        } else{
            alert("Lo siento, no estas en el registro de usuarios de DePrimera");
            break;
        }

        //hacer la reserva, dia y complejo deseado
        let ingresarDia = prompt("Ingresa el dia de la reserva: ")

        let ingresarComplejo = prompt("Ingresa el complejo de la reserva: ");

        const reservaPendiente = diaComplejo.some(usuario => usuario.dia === ingresarDia && usuario.complejo === ingresarComplejo );

        if(reservaPendiente){
            //verificar reserva
            alert ("Procesando su reserva, espere un momento")

            //confirmar si desea finalizarla
            let confirmar = confirm("¿Desea finalizar con su reserva?")

            //agradecimiento
            alert("Reserva confirmada, Gracias por confiar.")
            break;

        } else{
            alert("No coincidis con los datos ingresados, vuelva mas tarde")
            break;
        }

    } while (condicion)
}
reservar()

