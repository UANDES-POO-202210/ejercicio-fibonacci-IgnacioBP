/*const fs =require('fs');
var value;

try {
  const info=fs.readFileSync('./input.txt', 'utf8');
  value=parseInt(info);
  console.log(value);
}catch (err) {
  console.error(err);
}*/

function Fibonacci(a){
    if (a==1){
        return 1
    }else if(a==0){
        return 0
    }else{
        var v1=Fibonacci(a-1);
        var v2=Fibonacci(a-2);
        var fib=v1+v2;
        return fib
    }


}

const fs = require('fs');
var value;


const info=fs.readFileSync('./input.txt', 'utf8');
value=parseInt(info);
console.log("El valor leido es: "+value);

if (value>=0){
    var result= Fibonacci(value)
    console.log("El valor fibonacci de "+ value+" es: "+result)
}
else{
    console.log("El valor ingresado a traves del texto debe ser mayor a o igual a 0")
}





