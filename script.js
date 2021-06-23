function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function power(a, b) {
    return a ** b;
  }
  
  function factorial(valor) {
  
    if (valor < 0) {
  
  
      return 'Valor deve ser maior ou igual a zero';
  
    } else if ((valor == 0) || (valor == 1)) {
      return 1;
    } else {
  
      let adiciona = 1;
  
      for (let x = valor; x > 1; x--) {
        adiciona = adiciona * x;
      }
  
      return adiciona;
  
    }
  
  } 
  function fibonnaci (n){
    if (n === 0) return 0;
   if ( n === 1 ) return 1;
   if( n === 2 ) return 2;
    
   return fibonnaci( n -1 ) + fibonnaci( n - 2 );
   
     }
  
  
  console.log(fibonnaci(8));