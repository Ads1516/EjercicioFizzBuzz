document.write('Este ejercicio escribe en el documento html y el consola los números del 1 al 100, pero con las siguientes reglas: <br>')
document.write('<ul><li>Si el número es múltiplo de 3, se escribe la palabra "Fizz"</li><li>Si el número es múltiplo de 5, se escribe la palabra "Buzz"</li><li>Si el número es múltiplo de 3 y de 5, se escribe la palabra "FizzBuzz"</li></ul>');

for(i=1; i<=100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz');
        document.write('FizzBuzz <br>')
    }else if(i%3 == 0){
        console.log('Fizz');
        document.write('Fizz <br>')
    }else if(i%5 == 0){
        console.log('Buzz');
        document.write('Buzz <br>')
    }else{
        console.log(i);
        document.write(`${i} <br>`);
    }
}