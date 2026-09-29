/**
 * Taller Cajero
*/
const prompt = require('prompt-sync')();

let validacion = true;

while (validacion == true) {

    let confirmarcion = prompt("Deseas hacer una operacion? (S/N)");

    if (confirmarcion == "N" || confirmarcion == "n") {
        console.log("Sesion finalizada. Gracias por usar el sistema de NEQUI :)");
        validacion = false;

    } else if (confirmarcion == "S" || confirmarcion == "s") {
        // ?  Crea una variable numero1 que guarde lo que la persona escriba como primer número.
        let numero1 = prompt("¿Cual es el numero1? ");
        // ? Crea una variable operacion que guarde el símbolo de la operación (+, -, *, /).
        let simbolo = prompt("¿Cual es el simbolo? ");
        // ? Crea una variable numero2 que guarde el segundo número.
        let numero2 = prompt("¿Cual es el numero2? ");

        let resultado;

        if (simbolo === "+") {
            resultado = Number(numero1) + Number(numero2);
            console.log("el resultado de la suma es: ", resultado);
        } else if (simbolo === "-") {
            resultado = Number(numero1) - Number(numero2);
            console.log("el resultado de la resta es: ", resultado);
        } else if (simbolo === "*") {
            resultado = Number(numero1) * Number(numero2);
            console.log("el resultado de la multiplicacion es: ", resultado);
        } else if (simbolo === "/") {
            resultado = Number(numero1) / Number(numero2);
            console.log("el resultado de la division es: ", resultado);
        } else {
            console.log("Operación no valida, ingrese los valores solicitados");
        }
    } else {
        console.log("Digite S o N para validar.");
    }

}
