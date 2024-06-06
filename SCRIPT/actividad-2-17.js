let dias=Number(prompt("Introduzca una cantidad (num enteros) de días."));
let horas=Number(prompt("Introduzca una cantidad (num enteros) de horas."));
let minutos=Number(prompt("Introduzca una cantidad (num enteros) de minutos."));
let segundos=0;

let calculoD=0;
const dia1= 24; //24h tiene un dia
let calculoH=0;
const hor1= 60; //60 min tiene una hora
let calculoM=0;
const min1= 60; //60 seg tiene un minuto
let resultado=0; 

calculoD+=dias*(24*60*60);
console.log("Días a Segundos -> " + calculoD + "segundos");

calculoH+=horas*(hor1*60);
console.log("Horas a Segundos -> " + calculoH + "segundos");

calculoM+=minutos*min1;
console.log("Min a Segundos -> " + calculoM + "segundos")

resultado=calculoD+calculoH+calculoM;
console.log("La suma total de los segundo es -> " +resultado+ " segundos")