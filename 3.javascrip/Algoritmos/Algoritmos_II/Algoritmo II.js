// ejercicio 1//
    function a() { 
    console.log('hello');
    }
x =a();

// ejercicio 2//
function a(){
    console.log('hello');
    return 15;
    }
    x = a();
    console.log('x is', 15);

    // ejercicio 3//
function auto(n){
    console.log('n is', 3);
    return n+15; // 18
    }
    x = auto(18);
    console.log('x is', 18);


// ejercicio 4//
    function auto2(n) {
    console.log('n is', n);//3,5
    y = n*2;//6,10
    return y;//6,10
    }
    x = a(6) + a(10);
    console.log('x is', 16);

// ejercicio 5//
    function op(a,b) { //{a=2,b=3}+ {a=3,b=5}
    c = a+b;//5,8
    console.log('c is', c);//5,8
    return c;//5,8
    }
    x = op(2,3) + op(3,5);//13
    console.log('x is', x);13

  // ejercicio 6//
    function op(a,b) { //{a=2,b=3}+ (a=3,op(a=2,b=1))+{a=2,b=1},{a=2,b=3}
    c = a+b;//5,6
    console.log('c is', c);//5,6
    return c;//5,6,3,5,8
    }
    x = op(2,3) + op(3,op(2,1)) + op(op(2,1), op(2,3));// 19
    console.log('x is', x)// 

// ejercicio 7//
    var x= 15;       
    function a() {
    var x = 10;     // no hay retorno de esta variable por eso el resultado es solo  de x es solo 15 
    }
    console.log(x);
    a();
    console.log(x);




    Actividad 

    function multiply(x,y) { x=2 y=3}
    console.log(x);//2
    console.log(y);//3
    }
    b = multiply(2,3);//2,3
    console.log(b);//2,3


    function multiply(x,y) {  //x=2,y=3
        return x*y;//6
    }
    b = multiply(2,3);//6,10
    console.log(b);//6,10
    console.log(multiply(5,2));//10


    var x = [1,2,3,4,5,10];// ojo con la funcion, en ningun lado me esta pidiendo invocar la variable x, solo esta imprimiendo i
    for(var i=0; i<5; i++) {
    i = i + 3; 
    console.log(i);//3,7
}

var x=15; //resultado 15,15,10,15 (el 10 aparece despues de invocar la funcion prueba en la linea 94, antes no)
console.log(x);
function prueba(){
    var x=10;
    console.log(x);
}
console.log(x);
prueba(); 
console.log(x);

for(var i=0; i<15; i+=2) {//2,4,5,8,10,12,14
    console.log(i);
    }

    for(var i=0; i<3; i++) {//1,2
    for(var j=0; j<2; j++) {// 1
    console.log(i*j);//0,1,0,2
    }


    function looping(x,y) {//x=3, y=3
    for(var i=0; i<x; i++) {//0,1,2,
    for(var j=0; j<x; j++) {//0,1,2,
    console.log(i*j);//0,1,2,0,2,4
    } 
    }
    }
    z = looping(3,3);
    console.log(z);


    function looping(x,y) { //x=3 y=5
        for(var i=0; i<3; i++) {//123
        for(var j=0; j<5; j++) {//1235
        console.log(i*j); //012469,15, Falta
        } 
        }
        return x*y; // 
        }
        z = looping(3,5);//
        console.log(z); //



        //Parte 2//

        //ejercicio 1 parte 2
        function printUpTo(x) {
            if (x<0) {
                console.log(false)   
            }
            for (i= 1;i<=x;i++) {
                console.log(i)
                
            }
          }
          
          printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
          y = printUpTo(-10); // debería imprimir false
          console.log(y); // debería imprimir false

          //ejercicio 2 parte 2

          function printSum(x) {

            var sum =0;

            for (i= 0;i<=x;i++) {
                console.log(i)
                sum=sum+i
                console.log(sum)
            }
            return sum
            }
            y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
          console.log(y) // // debería imprimir 32640


        //Completa el código a continuación para que la función entregue la suma de todos los valores en un array dado

        function printSumArray(x) {
            var sum = 0;
            for(var i=0; i<x.length; i++) {
            sum = x[i]+ x.length;
            }
            return sum;
        }
        console.log( printSumArray([1,2,6]));