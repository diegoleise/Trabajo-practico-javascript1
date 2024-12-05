// //ejercicio 1
// console.log("Minombre es Diego Leiserovich, estoy en la comision 24234 y mi hobby es escuchar musica y mirar peliculas")

// //ejercicio2
// let frase = prompt("Ingrese una frase")
// console.log(frase)

// //ejercicio 3
// function saludo() {
//   let nombre = prompt("Ingrese su nombre")
//   console.log("Hola " + nombre + "!")
// }
// saludo()

// //ejercicio 4
// let nombre1 = prompt("Ingrese su nombre")
// let apellido = prompt("Ingrese su apellido")
// console.log(nombre1 + " " + apellido)

// //ejercicio 5
// let anoNacimiento = parseInt(prompt("Ingrese su año de nacimiento"))
// console.log("Usted tiene "  + (2024 - anoNacimiento)+ " " + "años")

// //ejercicio 6
// let peso=parseFloat(prompt("Ingrese su peso"))
// let altura=parseFloat(prompt("Ingrese su altura"))
// document.write(peso/(altura*altura))

// //ejercicio 7
// var cantidadVentanas=10
// console.log(cantidadVentanas)

// //ejercicio 8
// var soyHumano=true
// console.log(soyHumano)

// //ejercicio 9
// var miGustoDePizza=String("Jamon y Morrones")
// console.log(miGustoDePizza)

// //ejercicio 10
// var valores=[false, "hola", 0, "minions"]
// console.log(valores)

// //ejercicio 11
// let base = parseFloat(prompt("Ingrese la medida de la base del triangulo"))
// let altura = parseFloat(prompt("Ingrese la altura del triangulo"))
// document.write(base*altura/2)
// //no se puede calcular el perimetro de un triangulo solo con la base y la altura ya que su formula es P = a + b + c

// //ejercicio 12
// let pesoLibras = parseFloat(prompt("ingrese su peso en libras"))
// let pesoKilos = parseFloat(alert("Su peso en kilos es " + pesoLibras*0.4536))

//ejercicio 13
// let sueldo = parseFloat(prompt("Ingrese sueldo"))
// console.log(sueldo + (sueldo * 0.15))

// //ejercicio 14
// let notaAlumno = parseInt(prompt("Ingrese la nota del alumno"))
// if (notaAlumno < 7) {
//   alert("Reprobado")
// } else {
//   alert("Aprobado")
// }

// //ejercicio 15
// let categoria = prompt("ingrese categoria")
// let sueldo = Number("ingrese sueldo")
// let categoriaTrabajador =["gerente", "encargado", "supervisor", "operario", "cadete"]
// let sueldoTrabajador = [10000, 8000, 6000, 4000, 2000] 
// if(categoria==categoriaTrabajador[0])
//     alert( categoria+"tiene un nuevo sueldo de "+ sueldoTrabajador[0]*1.5)
// else if(categoria==categoriaTrabajador[1]){
//     alert(categoria+"tiene un nuevo sueldo de "+ sueldoTrabajador[1]*1.4)
// }

// //ejercio 16
// let matricula=parseInt(prompt ("ingrese la matricula"))
// let notaMatematica=Number(prompt ("ingrese nota de matematicas"))
// let notaHistoria=Number(prompt ("ingrese nota de historia"))
// let notaIngles=Number(prompt ("ingrese nota de ingles"))
// let notaCiencias=Number(prompt ("ingrese ingrese nota de ciencias"))
// let notaFisica=Number(prompt ("ingrese nota de fisica"))
// let promedio=(notaCiencias+notaFisica+notaHistoria+notaIngles+notaMatematica)/5
// if (promedio>=7) {
//     document.write("matricula numero: "+matricula+" tiene un promedio de "+promedio)
// }else{
// alert("no aprobo")
// }    

// //ejercicio 17
let numero1=Number(prompt("ingrese numero 1"))
let numero2=Number(prompt("ingrese numero 2"))
let numero3=Number(prompt("ingrese numero 3"))
document.write("el numero mas grande es el "+Math.max(numero1, numero2,numero3))


