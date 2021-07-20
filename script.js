function add(a, b) {
    return a + b;
}console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


function multiply(a, b) {
    let mult = 0;
    for (let i = 1; i <= a; i++) {
        mult = add(b, mult);
    }
    return mult;
}console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

function power(a, b) {
   let potencia=1;
    for (let i = 1; i <= b; i++) {
       potencia= multiply(a,potencia);
    }
    return potencia;
}console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

function factorial(valor) {    
let fat=1;
        for (let i = 1; i<=valor; i++ ) {
           fat = multiply(i,fat) 
        }
       return fat ;
}console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

function fibonnaci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return fibonnaci(n - 1) + fibonnaci(n - 2);
}