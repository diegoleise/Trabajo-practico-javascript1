//ejercio 16
let matricula=parseInt(prompt ("ingrese la matricula"))
let notaMatematica=Number(prompt ("ingrese nota de matematicas"))
let notaHistoria=Number(prompt ("ingrese nota de historia"))
let notaIngles=Number(prompt ("ingrese nota de ingles"))
let notaCiencias=Number(prompt ("ingrese ingrese nota de ciencias"))
let notaFisica=Number(prompt ("ingrese nota de fisica"))
let promedio=(notaCiencias+notaFisica+notaHistoria+notaIngles+notaMatematica)/5
if (promedio>=7) {
    document.write("matricula numero: "+matricula+" tiene un promedio de "+promedio)
    document.write("<br>")
}else{
alert("no aprobo")
}   
document.write("<br>")