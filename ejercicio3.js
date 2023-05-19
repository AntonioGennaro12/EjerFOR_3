const   miDiv1      =   document.querySelector ("#mi-div1");
const   miLab1      =   document.querySelector ("#mi-lab1");

const   MAX_COUNT   =   50;

/**
 * Genera código HTML
 */
function generaCodigo() {
    miDiv1.innerHTML = "";  // borra todo
    let num = miLab1.value;
    if (( num > 0)&&(num <= MAX_COUNT) ) {
        for (let cont = 1 ; cont <= num; cont++) {
            miDiv1.innerHTML += `
            <p>Hola ${cont}</p>
            `;
        }
    } 
    else {
        miDiv1.innerHTML += `
            <p>Solo cantidades de 1 hasta ${MAX_COUNT}</p>
            `;
    }
}
miDiv1.innerHTML = "";  // borra todo
/* Fin del codigo JS */