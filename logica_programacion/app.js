// alt + 96 comillas invertidas ``
//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = "vez";
let maximosIntentos = 5;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre el 1 y el ${numeroMaximoPosible} por favor: `));

    console.log(numeroUsuario);

    /* Este código 
    realiza la comparación */
    if (numeroUsuario == numeroSecreto){
        // Acertamos, fue verdadera la condición
        // mostramos con interpolación: 
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}! `)
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor")
        }else {
            alert("El número secreto es mayor")
        }
        // Incrementamos el operador cuando no acierta
        // intentos = intentos +1; esta es una forma
        // intentos += 1; otra forma
        intentos++;  // otra forma
        // palabraVeces = "veces"
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        };
        // La condición no se cumplió
        //alert("Lo siento, no acertaste el número :(")
    };
};

console.log("Hola Mundo");