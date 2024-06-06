let contador = 0;
let resultado = 0;
let a = 0;
let b = 0;
let opcion = 0;

do {
    opcion = prompt("Introduzca una opción -> + - * /");
    a = Number(prompt("Introduce un valor para a ->"));
    b = Number(prompt("Introduce un valor para  ->"));
    switch (opcion) {
        case "+":
            resultado += a + b;
            prompt("El resultado de " + a + "+" + b + "=" + resultado)

            break;
        case "-":
            resultado += a - b;
            prompt("El resultado es -> " + resultado)
            break;
        case "*":
            resultado += a * b;
            prompt("El resultado es -> " + resultado)
            break;
        case "/":
            resultado += a / b;
            prompt("El resultado es -> " + resultado)
            break;
        default:
            alert("Por favor marque una opción válida.")
            break;
    }
} while (opcion != "+" || opcion != "-" || opcion != "*" || opcion != "/");
alert("Inserte una de las opciones mostradas.");