let acum = 0
let personas
let sueldo
let personasrome
let opc

class Empleado {
    constructor(nombre, edad, sexo){
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo


    }
}
const empleado1 = new Empleado("Juan", 45, "M")
const empleado2 = new Empleado("Diegpersonas", 35, "M")
const empleado3 = new Empleado("Ines", 28, "F")
const empleado4 = new Empleado("Julia", 45, "F")


const empleados = [empleado1, empleado2, empleado3, empleado4]


function ftotal (){
    acum = 0
    do {    
        personas = parseInt(prompt("ingrese la cantidad de personas que trabajan"))
    } while (isNaN(personas) )
    for (let i = 0; i < personas;  i++) {
        do {
            sueldo = parseFloat(prompt("ingrese un sueldo"))
        } while (isNaN(sueldo))
        
        acum += sueldo 
    } 
}

function fprome (){
    acum = 0
    ftotal ()
    prome = acum / personas
}

do {
    do {
        opc = parseFloat(prompt(`ingrese una operacion, 1.Total de sueldos, o 2.promedio de sueldos, 3.datos de empleados`))
    } while((isNaN(opc) ) || opc < 1 || opc > 3)
    switch(opc) {
        case 1: 
            ftotal()
            console.log(`El total de los sueldos es ${acum}`)
            break
        case 2: 
            fprome()
            console.log(`El promedio de los sueldos es ${prome}`)
            break
        case 3: 
        console.table(empleados)
    }
    respersonas = prompt("¿Desea seguir operando?").toLowerCase()

} while (respersonas != "no")

