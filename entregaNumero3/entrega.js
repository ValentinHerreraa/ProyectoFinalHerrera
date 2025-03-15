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
//guardar datos usuarios.
localStorage.setItem("usuarios", JSON.stringify(usuarios))

const guardarDatos = JSON.parse(localStorage.getItem("usuarios"))

let condicion = true

let nombreIngresado = "";

function reservar (){
    console.log("La función reservar() se ejecutó")
    nombreIngresado = document.getElementById("nombre").value.trim();

    if (nombreIngresado === ""){
        Toastify({
            text:"Por favor, ingrese su nombre.",
            duration: 3000,
            gravity:"top",
            position: "center",
            backgroundColor: "green"
        }).showToast();
        return;
    }

    let encontrado = usuarios.some(usuario => usuario.nombreYApellido.toLowerCase() === nombreIngresado.toLowerCase());

    if (encontrado){
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Bienvenido " + nombreIngresado
          });

    } else{
        Swal.fire({
            title: "¡Error!",
            text: "No encontramos tu nombre en nuestros registros.",
            icon: "error",
          });
    }
}
async function confirmacion(dia) {
    console.log("La función confirmacion() se ejecutó");

    try {
        let contador = 0;

        let intervalo = setInterval(() => {
            contador++;
            if (contador === 4) {
                
            }
        }, 500);

        
        setTimeout(() => {
            clearInterval(intervalo);
            Swal.fire({
                title: "Hiciste tu reserva",
                text:"Perfecto " + nombreIngresado + " reservaste el dia " + dia + " ,Gracias por confiar en DePrimera.",
                icon: "success"
            });

        }, 2000);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("botonFinde") || event.target.classList.contains("botonSemana")) {
        if (nombreIngresado === "") {
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(Swal.fire({
                        title: "Reserva",
                        text: "Primero debes registrarte antes de hacer una reserva",
                        icon: "warning"
                    }));
                }, 500);
            });
            return;
        }

        let dia = event.target.textContent;

        confirmacion(dia);
    }
});
reservar()