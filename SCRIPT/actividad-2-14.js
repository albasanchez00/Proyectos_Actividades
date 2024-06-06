/*  Calcular la letra de un DNI introducido por el usuario  */
var dni, letra_in, letra_calculada
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

dni = parseInt(prompt("Introduce tu DNI."));
letra_in = prompt("Introduce la letra (MAYUS).")
if ((dni >= 0) && (dni <= 999999999)) {
    letra_calculada = letras[dni % 23];
    if (letra_in == letra_calculada) {
        alert('El dni es ' + dni + ' con letra ' + letra_calculada);

    } else {
        alert('La letra ' + letra_in + ' no coincide con la calculada → ' + letra_calculada);
    }
} else {
    alert("El valor introducido no es correcto.")
}