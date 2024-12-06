//ejercicio 15
let categoria = prompt("ingrese categoria")
let sueldo = Number("ingrese sueldo")
let categoriaTrabajador =["gerente", "encargado", "supervisor", "operario", "cadete"]
let sueldoTrabajador = [10000, 8000, 6000, 4000, 2000] 
if(categoria==categoriaTrabajador[0])
    alert( categoria+"tiene un nuevo sueldo de "+ sueldoTrabajador[0]*1.5)
else if(categoria==categoriaTrabajador[1]){
    alert(categoria+"tiene un nuevo sueldo de "+ sueldoTrabajador[1]*1.4)
}