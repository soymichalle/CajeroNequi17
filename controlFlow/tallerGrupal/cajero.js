/**
 * Talleres 1 y 2 Cajero
*/
const prompt = require('prompt-sync')();

function pedirNumero(mensaje) {
    let valor = prompt(mensaje);
    return Number(valor);
}

function calcular(numero1, numero2, simbolo) {
    let resultado;

            if (simbolo === "+") {
                resultado = Number(numero1) + Number(numero2);
            } else if (simbolo === "-") {
                resultado = Number(numero1) - Number(numero2);
            } else if (simbolo === "*") {
                resultado = Number(numero1) * Number(numero2);
            } else if (simbolo === "/") {
                resultado = Number(numero1) / Number(numero2);
            } else {
                return("Operación no valida, ingrese los valores solicitados");
            }

            return resultado;

}

function mostrarResultado(valor_result) {
    console.log("El resultado de la operación es: ", valor_result);
}

function atenderOperacion() {

    // ?  Crea una variable numero1 que guarde lo que la persona escriba como primer número.
        let numero1 = pedirNumero("¿Cual es el numero1? ");
        // ? Crea una variable operacion que guarde el símbolo de la operación (+, -, *, /).
        let simbolo = prompt("¿Cual es el simbolo? ");
        // ? Crea una variable numero2 que guarde el segundo número.
        let numero2 = pedirNumero("¿Cual es el numero2? ");

        if (numero2 == 0 || !Number.isFinite(Number(numero1)) || !Number.isFinite(Number(numero2)) ) {
            console.log("No se puede hacer la operación, valide los datos ingresados");
        } else {
            mostrarResultado(valor_result = calcular(numero1, numero2, simbolo));
        }
}

let contador = 0;

let validacion = true;

while (validacion == true) {

    let confirmarcion = prompt("Deseas hacer una operacion? (S/N)");

    if (confirmarcion == "N" || confirmarcion == "n") {
        console.log("Sesion finalizada. Gracias por usar el sistema de NEQUI :)");
        console.log("Llevabas " + contador + " operaciones realizadas.");
        
        validacion = false;

    } else if (confirmarcion == "S" || confirmarcion == "s") {

        contador++;

        atenderOperacion();

    } else {
        console.log("Digite S o N para validar.");
    }

}