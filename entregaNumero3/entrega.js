const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
    {nombreYApellido: "valentin herrera"},
    {nombreYApellido: "francisco sottile"},
    {nombreYApellido: "facundo prelat"},
    {nombreYApellido: "lucio magnin"},
    {nombreYApellido: "angel patyn" }
]

let diaComplejo = [
    { dia: "lunes", complejo: "doble cinco" },
    { dia: "martes", complejo: "futbolito" },
    { dia: "miércoles", complejo: "todo canchas" },
    { dia: "jueves", complejo: "futbol para todos" },
    { dia: "viernes", complejo: "el clasico" },
    { dia: "sábado", complejo: "el rincon" }
];


localStorage.setItem("usuarios", JSON.stringify(usuarios))

function registrarUsuario() {
    let nombreingresado = document.getElementById("nombre").value.trim()

    if(nombreingresado === ""){
        Toastify({
            text: "Por favor, ingrese su nombre",
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "green"
        }).showToast();
        return;
    }

    let encontrado = usuarios.some(usuario => usuario.nombreYApellido.toLowerCase() === nombreingresado.toLowerCase())

    if(!encontrado){
        usuarios.push({nombreYApellido: nombreingresado})
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    }
        Swal.fire({
            icon: "success",
            title: "¡Registro Exitoso!",
            text: "Ahora puedes hacer reservas."
        })
        localStorage.setItem("usuarioActivo", JSON.stringify(nombreingresado))

        Swal.fire({
            icon: "info",
            title: "Ya estas registrado",
            text: "Bienvenido de nuevo " + nombreingresado
        })
    }

function reservar() {
    registrarUsuario();
}


async function confirmacion (dia){
    let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"))

    if(!usuarioActivo || usuarioActivo.trim() === ""){
        Swal.fire({
            title: "Reserva",
            text: "Primero debes registrarte antes de hacer una reserva.",
            icon: "warning"
        })
        return;
    }

    try{
        let contador = 0
        let intervalo = setInterval(() => {
            contador++
            if(contador === 4){
                clearInterval(intervalo)
            }
        }, 500)

        setTimeout(() => {
            clearInterval(intervalo)

            Swal.fire({
                title: "Hiciste tu reserva",
                text: "Perfecto " + usuarioActivo + " reservaste el dia " + dia + " Gracias por confiar en DePrimera",
                icon:"success"
            });
        }, 2000);
    } catch (error){
        console.error("Ocurrio un error: ", error)
    }
} 

    document.addEventListener("click", function(event){
        if(event.target.classList.contains("botonFinde") || event.target.classList.contains("botonSemana")){
            let usuarioActivo = localStorage.getItem("usuarioActivo")

            if(!usuarioActivo){
                Swal.fire({
                    title: "Reserva",
                    text: "Primero debes registrarte antes de hacer una reserva",
                    icon: "warning"
                })
            }
            let dia = event.target.textContent
            confirmacion(dia)
        }
    })

    async function obtenerCanchas () {
        try{
            let respuesta = await fetch ("https://api.myjson.online/v1/records/2de3a6cc-c8a7-4c05-87b3-f534d781dfe5")
            let canchas = await respuesta.json()
            console.log("Lista de canchas disponibles: ", canchas)
        } catch (error){
            console.error("Error al obtener canchas: ", error)
        }
    }
    obtenerCanchas()