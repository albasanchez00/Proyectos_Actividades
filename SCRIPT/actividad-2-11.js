for (let i = 0; i < 5; i++) {
    let variable1 = "Soy visible fuera del bloque" 
    var variable2 = "No soy visible fuera del bloque"
}
console.log(variable1); //Al estar fuera del bloque y let dentro, no puede recoger el valor, debe de estar dentro del bloque donde se a declarado la variable
console.log(variable2); //Var si puede recoger el valor, ya que no importa si esta fuera o dentro.

const IVA = 0.21; //ESTE VALOR NUNCA CAMBIARA UNA VEZ DECLARADO
// IVA=0.18; SI LE CAMBIAMOS DESPÚES EL VALOR, ESTE NOS DEVOLVERA ERROR  
console.log(`${IVA}`);