let b=0;
let h=0;
let r=0;
let opcion="";
let resultado=0;

do {
    opcion = prompt("Introduzca una opción para el tipo de cálculo del área -> (1)Triángulo, (2)Rectángulo, (3)Circulo o (4)exit -> ");
    switch (opcion) {
        case "1":
            b = Number(prompt("Introduce el valor para la base ->"));
            h = Number(prompt("Introduce el valor para la altura ->"));
            resultado=b*h/2;
            alert("El resultado es -> " + resultado);
            break;

        case "2":
            b = Number(prompt("Introduce el valor para la base ->"));
            h = Number(prompt("Introduce el valor para la altura ->"));
            resultado=b*h;
            alert("El resultado es -> " + resultado);
            break;

        case "3":
            r = Number(prompt("Introduce el valor para el radio ->"));
            resultado= Math.PI * Math.pow(r*2);
            alert("El resultado es -> " + resultado);
            break;
    
        default:
            alert("Introduzca una opción válida");
            break;
    }
} while (opcion="4");
alert("Saliendo....");