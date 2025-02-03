/*let nombre = prompt(("Ingrese su nombre por favor"))*/
/*let edad = parseInt = prompt(("ingrese su edad para poder comprar alcohol"))*/
/*let graduacionPermitida = prompt (("Cual es su grado de alcohlemia?"))*/
/*if (nombre === "valen"){
    alert("Binevenido valen");
} else if (nombre){
    alert("Bienvenido " + nombre)
}*/

/*if (edad >= 18){
    alert("podes comprar alcohol en nuestro local")
} else if (edad < 18){
    alert("lo siento, no podes comprar")
} else if (edad < 10) {
    alert("tengo cara de nene, pero soy mayor")
    prompt(("muestre su documento"))
}*/
/*if (graduacionPermitida < 0.05){
    alert("podes ir a tu casa")
 } else if (graduacionPermitida >= 0.06 || "no tengo los papeles"){
    alert("su auto se queda y tendra que pagar la multa correspondiente ")
}*/
//concatenacion
/*let nombre = "valentin herrera" 
frase = `soy ${nombre} y estoy caminado`
document.write(frase)*/

//operadores logicos
let valor = true
let valor1 = true

let resultado = valor && valor1
let resultado2 = valor || valor1
let resultado3 = !valor

//bucles
//while
/*let cunetaAtras = 10
while(cunetaAtras > 0){
    cunetaAtras = cunetaAtras - 1
    console.log(cunetaAtras + " segundos")
}
let lucio = 2
let valen = 1

while(lucio > valen){
    console.log("si")
    confirm("quieres que este bucle se siga iterando?")
}*/
//do while se ejecutara nada mas y nada menos que una vez
/*let number = 10
do{
    number = number + 1
    console.log(number)
} while (number < 20)*/

for(let i = 1; i < 10; i++){
    if(i % 2 === 1){
        console.log(i)
    }       
}
for (let i = 0; i < 10 && i !== 3; i++) {
    console.log('Hola')
  }

  //SWITCH
/*const dia = "lunes"
switch (dia) {
case "lunes" :
    console.log("hoy es lunes")
    break

    default:
        console.log("hoy no es lunes")
        break
}*/

/*const dia = new Date().getDay()
switch(dia){
    case 0:
        console.log("hoy es domingo")
        break
    case 1:
        console.log("hoy es lunes")
        break
    case 2:
        console.log("hoy es martes")
        break
    case 3:
        console.log("hoy es miercoles")
        break
    case 4:
        console.log("hoy es jueves")
        break
    case 5:
        console.log("hoy es viernes, por fin")
        break
    case 6:
        console.log("hoy es sabado")
        break
}*/

let edad = 25
switch(true){
    case (edad > 25 && edad === 40):
        console.log("eres mayor de edad, ya listo para tener un hijo")
        break
    case (edad < 18 && edad >= 30):
        console.log("no salgas mas de joda")
        break
    case (edad === 25):
        console.log("aprovecha tu juventud, sali de joda pibe")
        break
    default:
        console.log("sos menor de edad")
}
let hola = "string"
let chau = 18
let correctoFalso = hola === chau
console.info(correctoFalso)

//ejercico javascript (especialmente fundamentos)


// (1) Felicitaciones, pasaste el primer ejercicio
/*let i = prompt(("Por favor, sumale 1 a la variable hasta que sea igual a 15"))
for (let i = 0; 0 <= 15; i++){
    if (i === 15){
        break
    }
    prompt((i))
}*/


// (2) Felicitaciones, pasaste el segundo ejercicio
/*let nombre = prompt(("¿Como te llamas?"))
while (nombre){
    alert("Bienvenido " + nombre)
    break
}*/


//(3)
/*let numero = parseInt = prompt(("ingrese un numero y lo saludaremos las veces por el numero ingresado"))

for(let i = 0; i !== 3; i++){
    alert('hola')
}*/

//operador logico nullish coalescing (??)
let myString = null
let myNum = 0

let result = myString ?? myNum
console.log(result)


//funciones, parametros y argumentos
function saludar (nombre, edad){
    console.log("Hola " + nombre )
    console.log("Tu edad es " + edad)
}
saludar("miguel", 18)

function suma (a, b){
    return a + b
}
console.log(suma(2, 3))

function control (graduacion, velocidad){
    return graduacion + velocidad
}
let resultadoControlDeAlcohlemia = control(0.50, 55)
console.log(resultadoControlDeAlcohlemia)


//object math floor y math random
function numeroRandom (nombre, edad, altura, peso){
    return Math.random("valen", 19, 1,93, 77)
}


//scope
//variable global
let color = "rojo";
function cambiarColor (){
    let color = "azul"
}
cambiarColor()
console.log(color)

//variable local
function colores (){
    let color1 = "blanco"
}
colores()
// console.log(color1) // yo al invocar esta variable local como si fuera global no puedo, me tira error ya que solo se puede llamar dentro de la misma funcion


//funciones flechas y anonimas (nuevo tipo de funcion)
//ANONIMAS
const anonimo = function (a, b){
    return a * b
}
console.log(anonimo(2, 2))

//FLECHA
const flecha = (a, b) => a + b

console.log(flecha(20, 50))


//function comparado con hoisting
//el hoisting en una funcion normal si funciona, lo toma correctamente

console.log(normal(1, 2))
function normal(a, b) {
    return a + b
}

//function expression con hoisting. ¿lo toma?
//No, las function expressions no les toma el hosting
//si o si nosotros tenemos que crear la cinstante y luego retornar el valor, las function expressions no toman por sentado lo que hay dentro.

//console.log(expressions(2, 3)) No lo toma.
const expressions = function(a, b){
    return a * b
}


//recursividad
function recursividad (n){
    if (n === 0 || n === 1){
        return 1
    } else{
        return n + recursividad (n - 1)
    }
}

console.log(recursividad(3))

//fibonacci
function fibonacci(x){
    if(x <= 1 ){
        return x
    } else {
        return fibonacci(x - 1 ) + fibonacci (x - 2)
    }
}
console.log(fibonacci(6))


//actividad de practica funciones
//solicitacion datos de entrada
//en estos datos se van a incluir = nombre y apellido edad (+ 15) sin excepcion
let nameAndLastName = "valentin herrera"
let age = 15

//datos
const datos = function () {
    return "¿Usted se llama " + nameAndLastName + " y tiene " + age + " años?"
}
console.log(datos())

//respuesta
const respuesta = function (){
    return "Si, ese soy yo"
}
console.log(respuesta())

//validacion
function validacion (nombreValidacion, edadValidacion){
    if(nombreValidacion === nameAndLastName && edadValidacion === age){
        return "Okey, estamos en proceso de validación. Espere un momento por favor...";
    } else {
        return "Disculpame, su edad y nombre completo no son válidos.";
    }
    
}
console.log(validacion("valentin herrera", 15))


//resultado final
function resultadoFinal (personaResultado, edadResultado){
    if(personaResultado === nameAndLastName && edadResultado === age){
        return "Estamos muy contentos de que te hayas registrado a De Primera, Vamo a juga"
    } else {
        return "No es posible que te registes a De Primera, de lo contrario comentale a un adulto responsable"
    }
}
console.log(resultadoFinal("valentin herrera", 15))

//pago de obra social
function obraSocial(diasDeRetraso) {
    let costoObraSocial = 15.50
    diasDeRetraso * costoObraSocial
    return Math.floor(diasDeRetraso * costoObraSocial + 15.50 / 10)
}
console.log(obraSocial(20))
let precioZapatilla = 300
//descuentos en nike
function nike(descuentoViernes, descuentoSabado) {
    let visa = 300 * (40 / 100)
    let masterCard = 300 * (35 / 100)
    precioZapatilla * descuentoViernes - visa
    precioZapatilla * descuentoSabado - masterCard
    return Math.floor(precioZapatilla - descuentoViernes - visa )
}
console.log(nike(40, 25))


// bucles e iteracion soy dalto, mas que nada lo hago ´para consolidar y ver mas contenido. !Vamos alla¡

//ciclo do while
let diez = 10
while(diez < 25){
    break
}
document.write(diez)

//ARRAYS: NUEVO TEMA A VER
let frutas = ["manzana", "banana", "pera" ]
console.log(frutas[0])

//arrays dentro de un array
let matriz = [
    [1,2,3],
    [4,5,6],//los arrays si o si hay que cerrarlos con coma al final, rec eso.ien me di cuenta de
    [7,8,9],
]
console.log(matriz[1][2])

//bucle for, propiedad.lenght en arrays
const numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//.lenght proporciona cuantos elementos hay dentro del array, no te los nombra literalmente a cada uno de ellos.
const valen = [18,2005, 1, 10, 1.93]
console.log(valen.length)

//metodos de modificacion: push, pop, shift, unshift
let modificacion = ["manzana", "pera", "banana"]
let agregarFruta = modificacion.unshift("uva", "locro")
console.log(modificacion)
/*let usuario = prompt("Ingrese lo que desea gastar en su proximo viaje")

function gastosDeViaje (alojamiento, entretenimiento, alimentacion) {
    if(usuario){
        alert("esto es lo que usted va a gastar " + usuario == usuario)
    }
    return alojamiento + entretenimiento + alimentacion
}
alert(gastosDeViaje(0 && 1000, 0 && 1000, 0 && 1000))*/

/*let alojamiento = parseFloat(prompt("Ingrese el coste estimado de alojamiento: "));
let alimentacion = parseFloat(prompt("Ingrese el coste estimado de alimentación: "));
let entretenimiento = parseFloat(prompt("Ingrese el coste estimado de entretenimiento: "));

let costeTotal = alojamiento + alimentacion + entretenimiento;
alert("El coste total del viaje es: " + costeTotal.toFixed(2) + "€");*/

//calculadora edad canina

/*let edadPerro = prompt("ingrese la edad de su cachorrito: ")
const canino = function (){
    if(edadPerro){
        alert("la edad de su cachorrito es de " + edadPerro * 7 )
    }
}
canino()*/

/*let precioOriginal = prompt("Ingrese el precio original del producto que desea obtener: ")
function descuento (aplicarDescuento){
    return precioOriginal - aplicarDescuento
}
alert(descuento(10))*/

//conversor de temperatura

//predio aleatorio (deprimera)
/*let aleatorio = prompt("Ponga la palabra aleatorio y le saldra un predio en el que jugara esta semana")
function predios (elClasico, elRincon, laRabure){
    if(elClasico === 5){
        alert(`Felicitaciones, jugaras en el clasico`)
    } else if (elRincon === 3.5 && elRincon < 4){
        alert("Jugaras en el rincon")
    } else if(laRabure === 2.5 && laRabure >= 3){
        alert("jugaras en la rabure")
    }
}
predios(0, 3.6 , 2.5)*/

/*let nombreDePersona =  prompt("ingrese su nombre por favor: ")
if(nombreDePersona === ""){
    alert("bienvenido/a " + nombreDePersona)
} else if(nombreDePersona === 10 ){
    alert("no eres bienvenido")
}*/

function numeroMayor(a, b, c){
    if(a, b < c && 4 < 6){
        return c
    } else if(c === 4 && a, b, c !== 4 ){
        return c
    } else{
        return "son iguales los 3 numeros"
    }
}
console.log(numeroMayor(2, 5, 6))
console.log(numeroMayor(4, 3, 9))
console.log(numeroMayor(1, 2, 8))
console.log(numeroMayor(4, 4, 4))


let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
let indice = nombres.includes('Juan');
console.log(indice); 

let nombresIndexof = ["valen", "martina","maria", "ines"]
let num = nombresIndexof.indexOf("valen")
console.log(num)

//ordenar arrays con numeros
let sortNumber = [1, 40, 800, 3, 69]
sortNumber.sort((a,b)=> b - a)
console.log(sortNumber)

//ordenar arrays con string
let sortstring = ["banana", "mouse", "celular", "Xiomara"]
sortstring.sort((a, b)=> a.localeCompare(b))
console.log(sortstring)

//metodo join
let metodoJoin = ['azul', 'verde', 'rojo', 'violeta']
let ordenamos = metodoJoin.join()
console.log(ordenamos)

//objetos literales
const persona = {
    nombre: "juan",
    edad: 18,
    residente: "buenos aires, argentina" 
};
console.log(persona)

//objetos con arrays
let arrayObjetos = []

arrayObjetos.push({
    id:1 , nombre: "producto 1", edad: 16
});
arrayObjetos.push({
    id:2 , nombre: "producto 2", edad: 17
});
arrayObjetos.push({
    id:3 , nombre: "producto 3", edad: 18
});

//el bucle for of recorre elementos dentro de un objeto
for(let objeto of arrayObjetos){
    console.log(objeto.edad)
}

//agregar datos con .push
const usuario= []

usuario.push({nombre: "valen", edad: 18, residente: "españa"})

usuario.push({nombre: "fran", edad: 19, residente: "francia"})

console.log(usuario)

//ordenar usuarios con sort
usuario.sort()
console.log(usuario)

//filtrar con filter
const mayoresDe17 = usuario.filter(usuario => usuario.edad > 17)
console.log(mayoresDe17)

//find se usa para ver que una condicion cumpla con algo especifico
const login = usuario.find(usuario => usuario.nombre === "valen");
console.log(login);


//EJERCICIOS DE JAVASCRIPT

//ejercicio 18
let ensalaDeFrutas = ["manzana", "banana", "naranja", "kiwi", "frutilla"]

for(let i = 0; i < ensalaDeFrutas.length; i++){
    console.log("las frutas que hay en la ensalada son: " + ensalaDeFrutas)
}

//ejercicio 19
let toDoList = ["programar", "leer", "entrenar", "lavar", "ordenar"]
let tareas = toDoList.indexOf("lavar")
console.log(tareas)

//ejercicio 20
let edades = [20, 30, 56, 60, 19, 58, 21, 3]
let recorrido = edades.sort((a,b) => a - b)
console.log(recorrido)

//ejercicio 21
let listaDeSuper = []

listaDeSuper.push({producto: "leche"})
listaDeSuper.push({producto: "jamon cocido"})
listaDeSuper.push({producto: "coca cola"})
listaDeSuper.push({producto: "maple de huevos"})
listaDeSuper.push({producto: "avena"})

console.log(listaDeSuper)

//ejercicio 22
let nombresLargos = ["valentin herrera", "maria ines belard", "lucio roman magnin", "francisco sottile", "angel gabriel patyn"]
nombresLargos.length
console.log(nombresLargos)

//ejercicio 23
function saludo (nombre){
    return `bienvenido/a ${nombre}`
}
console.log(saludo("valentin"))

//ejercicio 24
/*function calculoMayor (num1, num2){
    if(num1 > num2){
        return num1 + " es mayor que " + num2
    } else if(num2 > num1){
        return num2 + " es mayor que " + num1
    }
}
alert(calculoMayor(50, 45))*/

//ejercicio 25
/*function facturation (montoProducto, efectivo, tarjetaDeDebito, tarjetaDeCredito){
    if(montoProducto < 200){
        return `No se aplica ningun descuento, debera pagar ${montoProducto}`

    } else if(montoProducto >= 200 && montoProducto <= 400){
        return " Su monto a abonar es de " + montoProducto * efectivo / 100

    } else if(montoProducto >= 200 && montoProducto <= 400){
        return "Su monto a abonar es de " + montoProducto * tarjetaDeDebito / 100

    } else if(montoProducto >= 200 && montoProducto <= 400){
        montoProducto * tarjetaDeCredito / 100

    }else if(montoProducto > 400){
        return "Su monto a abonar es de " + montoProducto * 40 / 100
    }
}
alert(facturation(280, 30, 20, 10 ))*/

//ejercicio 26
/*function IterarArray(array) {
    for (let letras of string ) {
    console.info(letras);
    }
} 
    IterarArray([1,2,3,4,5,6,7,8,9,10]);
    IterarArray(["Hola", "Chau"]);
    IterarArray(["JavaScript", "Python", "Java"]);*/

    function recorrerArray (array){
        for(numero of array){
            console.log(numero)
        }
    }
    console.log(recorrerArray([1, 2, 3, 4, 5]))

    //objetos literales y su relacion

    //filter
    const filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let resultadoDeFilter = filter.filter(num => num % 2 === 0)
    console.log(resultadoDeFilter)

    const consigna = [30, 45, 80, 2, 4, 19]
    let verConsigna = consigna.filter(num => num > 10)
    console.log(verConsigna)

    //find
    let usuariosDePrimera = [
        {nombre: "valentin", edad: 19},
        {nombre: "lucio", edad: 18},
        {nombre: "angel", edad: 19},
        {nombre: "francisco", edad: 19},
        {nombre: "facundo", edad: 20}
    ]

    let usuarios = usuariosDePrimera.find(usuario => usuario.nombre === "facundo")
    console.log(usuarios)

    //sort
    let numerosConSort = [1,30,3,600,87,6,7,8,9]
    let resultadoSort = numerosConSort.sort((a,b) => b - a)
    console.log(resultadoSort)

    let usuarioEdad = [
        {edad: 19},
        {edad: 22},
        {edad: 30}
    ]
    let verificarEdad = usuarioEdad.sort((a,b,c) => a.edad - b.edad)
    console.log(verificarEdad)

    //arrays clase numero 3. dudas y practicas
const numbers = [1,2,3,4,5,6,7]
for(let i = 0; i < 7; i++){
    console.log(numbers[i])
}
//metodos de modificacion

//pop elimina el ultimo elemento de un array
let frutass = ["manzana","banana","naranja"]
frutas.pop()
console.log(frutass)

//push agrega un elemento al ultimo lugar del array
frutass.push("sandia")
console.log(frutass)

//shift elimina el primer elemento del array
frutass.shift()
console.log(frutass)

//unshift agrega un elemento al inicio del array
frutass.unshift("kiwi")
console.log(frutass)

//slice: retorna una copia del array con los parametros desde hasta

//splice: elimina el contenido de los elementos

//concat: une 2 o mas arrays
const perros = ["lola", "fancho", "negrito"]
const gatos = ["mish", "lala", "nala"]

const mascotas = perros.concat(gatos)

//sort: ordena un array de forma ascendente y descendente
//nombres.sort.reverse()
//sort y reverse: son metodos daninos ya que es una mala practica, por que nunca se modifica nada que sea original.

//entonces al hacer una const copia
//cuidado con el slice: no toma el ultimo indice

/*let ejercicioUno = prompt("Ingresa tu edad: ")

function puedeConducir (años){
    if(años >= 18){
        alert("felicitaciones, ya puedes conducir...")
    }
}
puedeConducir(18)*/

//ejercicios chat gpt
/*let pedirEdad = prompt("ingresa tu edad por favor: ")
function evaluarEdad (numero){
    if(numero < 18){
        alert("Eres menor de edad")
    }
    if(numero >= 18 && numero <= 60){
        alert("Eres adulto")
    }else{
        if(numero > 60){
            alert("Eres aulto mayor")
        }
    }

}*/
 //agregando iva
 /*let precioProducto = prompt("Ingrese el precio del producto: ")

 function precioIva (iva){
    return precioProducto + iva * precioProducto / 100
 }
 alert(precioIva(27))*/

 //concatenar array
 let number2 = [1,2]
 let numbers3 = [3,4]
 const concatenar = number2.concat(numbers3)
 console.log(concatenar)

 //otra forma de concatenar 
 const allnumbersSpread = [...number2, ...numbers3]
 console.log(allnumbersSpread)
 //spreadoperator son 3 puntitos que se utilizan para concatenar


 /*let compra = [
    {descuento: 20, tarjeta: "MasterCard"},
    {descuento: 15, tarjeta: "Visa"},
    {descuento: 45, tarjeta: "Galicia"},
]
let comprar = false
let intentos = 3
nombreDeTitular = "valentin herrera"

while(!comprar){

    let usuario = prompt("Ingrese el nombre (titular) de su tarjeta: ")

    if(nombreDeTitular === "valentin herrera"){

        alert("Su nombre de titular fue aprobada con exito, segui con tu compra.")

    } else{
        if(nombreDeTitular !== "valentin herrera")
        alert("No pudimos aprobar su tarjeta")
        if(intentos >= 3 ){
            alert("Vuleva mas tarde, por favor.")
        }
    }

    let nombreTarjeta = prompt("Ingrese el nombre de la tarjeta con la que desea pagar: ")

    if(compra[0].tarjeta === "MasterCard"){
        alert("Procesando compra...")

        prompt("Ingrese el monto a pagar: ")

        if(precio >= 500){
            let aplicandoDescuento = precio * (compra[0].descuento / 100)

            confirm("¿Desea continuar con su pago?")

            alert(`pagando con MasterCard se le aplico un descuento del 20% y el total es de ${aplicandoDescuento} pesos.`)
            
        }
    }
}*/

//funcion construcutora
/*function Producto (id, nombre, importe, stock){
    this.id = id;
    this.nombre = nombre;
    this.importe = importe;
    this.stock = stock;

    this.compra = function(){
        alert(`Usted obtuvo un ${this.nombre} con un importe de ${this.importe}`)
    }
}
const producto1 = new Producto (1, "mouse", 45000, 49)
const producto2 = new Producto (2, "teclado", 95000, 98)
const producto3 = new Producto (3, "hdmi", 5000, 66)
const producto4 = new Producto (4, "ethernet", 10000, 45)
const producto5 = new Producto (5, "mouse pad", 20000, 76)
const producto6 = new Producto (6, "notebook", 1450000, 95)
const producto7 = new Producto (7, "monitor", 845000, 55)
const producto8 = new Producto (8, "luces led", 15000, 35)
const producto9 = new Producto (9, "auriculares", 170000, 2)
const producto10 = new Producto (10, "microfono", 88000, 78)

console.log(producto1)
console.log(producto2)
console.log(producto3)
console.log(producto4)
console.log(producto5)
console.log(producto6)
console.log(producto7)
console.log(producto8)
console.log(producto9)
console.log(producto10)*/

//producto1.compra()//depende del producto que le pongamos antes del .compra por ejemplo, es el que se va a vender

//clases
/*class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        
    }
        saludar(){
            alert(`Binevenido ${this.nombre}`)
        }
}
const caracteristicas = new Persona("valentin", 19)

console.log(caracteristicas)
caracteristicas.saludar()*/

//local y sessionstorage
/*localStorage.setItem("nombre", "valentin")
    let usuarioo = localStorage.getItem("nombre")
    console.log(usuarioo)*/

    //ejercicios local y sessionstorage chat gpt
    //ejercicio 1
    localStorage.setItem("usuario", "valentin")
    const usuariolocal = localStorage.getItem("usuario")
    console.log(usuariolocal)

    //ejercicio 2
    localStorage.setItem("numero", "100")
    const numerolocal = parseInt(localStorage.getItem("numero"))
    console.log(numerolocal)

    //ejercicio 3
    localStorage.setItem("nombre", "juan")

    const agregarApellido = localStorage.getItem("nombre");

    agregarApellido + " heredia";

    localStorage.setItem("nombre", agregarApellido);

    console.log(localStorage.getItem("nombre"))
    
    //ejercicio 4
    localStorage.setItem("value", "activo")
    function verificarValor (){
        const valorLocal = localStorage.getItem("value")
    }
    verificarValor()
    console.log("value")

    //ejercicio 5
    localStorage.setItem("frase", "Hola, mi nombre es valentin")

    const frase = localStorage.getItem("frase")

    const eliminar = localStorage.removeItem("frase")
    console.log(eliminar)

    localStorage.clear()

    //ejercicio 6
    localStorage.setItem("clave", "3783")
    localStorage.setItem("clave", "4704")
    localStorage.setItem("clave", "8370")

    function claves (){
        localStorage.getItem("clave")
        localStorage.getItem("clave")
        localStorage.getItem("clave")
    }
    claves()

    for(let i = 0; i < localStorage.length; i++){
        let clave = localStorage.key(i)
        let valor = localStorage.getItem(clave)
        console.log(`${clave}: ${valor}`)
    }

    localStorage.setItem("nombre", "jorge")
    const jorge = localStorage.getItem("nombre")
    console.log(jorge)

    sessionStorage.setItem("nombre", "martina")
    const martina = sessionStorage.getItem("nombre")
    console.log(martina)

    //json formato de texto ligero para intercambiar datos.

    let personaJson = {
        nombre: "valentin",
        edad: 19
    }
    let usuarioJson = JSON.stringify(personaJson)
    console.log(usuarioJson)

    localStorage.setItem("personaJson", usuarioJson )

    let usuarioRecuperado = localStorage.getItem("personaJson")
    console.log(usuarioRecuperado)

    let usuarioObjeto = JSON.parse(usuarioRecuperado)
    
    console.log(usuarioObjeto)