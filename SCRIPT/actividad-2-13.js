// Con un switch solicitar al usuario que tipo de operación quiere realizar (+ - * /).
let resultado = 0;
let opcion ="";
let num1 = 0;
let num2 = 0;

do {
    opcion = prompt("Introduzca un símbolo para el tipo de cálculo (+ - * /) o exit -> ");
    num1 = Number(prompt("Introduce el primer numero ->"));
    num2 = Number(prompt("Introduce el segundo numero ->"));
    switch (opcion) {
        case "+":
            resultado = num1 + num2;
            prompt("El resultado de " + num1 + "+" + num2 + "=" + resultado)
            break;
        case "-":
            resultado = num1 - num2;
            prompt("El resultado de " + num1 + "-" + num2 + "=" + resultado)
            break;
        case "*":
            resultado = num1 * num2;
            prompt("El resultado de " + num1 + "*" + num2 + "=" + resultado)
            break;
        case "/":
            resultado = num1 / num2;
            prompt("El resultado de " + num1 + "/" + num2 + "=" + resultado)
            break;
        default:
            alert("Por favor marque un símbolo válido.")
            break;
    }
} while (opcion="exit");
alert("Saliendo....")