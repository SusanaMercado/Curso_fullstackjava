
/* Ejercicio 1 */
function a(x, y) { //x=5, y=5
    return 5;
}
a(5, 5)
console.log(a(5, 5)) //console.log(5); 5


/* Ejercicio 2 */
function a(x, y) { //x=6,y=8
    z = [] //z=[6,8,5]
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z); //[6,8,5]
    return z;
}

b = a(2, 2) //b = [2,2,5]
console.log(b); //console.log([2,2,5]);//[2,2,5]

console.log(a(6, 8)); //console.log([6,8,5]);//[6,8,5]


/* Ejercicio 3 */
function matriz(x) { //x=2
    z = []; //z=[2,2]
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z; //[2,2]
}
y = matriz(2); //y = [2,2]
y.push(5); //y=[2,2,5]
console.log(y); //[2,2,5]


/*  Ejercicio 4 */
function matriz2(x) { //x=[2, 3, 4, 5]
    if (x[0] < x[1]) { //if (2 < 3) {
        return true;
    } else {
        return false;
    }
}
b = matriz2([2, 3, 4, 5]) //b=true
console.log(b); //true
//[2, 3, 4, 5]
//length:4

/*  Ejercicio 5 */ //dudas???
function a(x){
    for(var i=0; i<x.length; i++){// [1,2,3,4]
    }
    if(x[i] > 0){
    x[i] = “Coding”;// [1,2,3,4]
    console.log(x)
    }
    
    return x;
}
console.log(a([1,2,3,4]))

/*  Ejercicio 6 */ //dudas???
function a(x){
    for(var i=0; i<x.length; i++){//1,
    if(x[i] > 5){
    x[i] = “Coding”; //[,
    }
    else if(x[i] < 0){
    x[i] = “Dojo”;
    }
    }
    return x;
}
console.log(a([5,7,-1,4]))

/*  Ejercicio 7 */ 
function a(x){
    if(x[0] > x[1]) { // 5>10
    return x[1];
    }
    return 10;
    }
    b = a([5,10])
    console.log(b);//10

    /*  Ejercicio 8 */ 
    function sum(x){
    sum = 0;
    for(var i=0;i<x.length; i++){
    sum = sum + x[i];
    console.log(sum);
    }
    return sum;
}

/*  Parte 2 */ 

//Analiza los valores de un array y obtén el promedio (average) de esos valores.(pendiente) 



function promedio(x){
    sum = 0;//arreglo

    for(var i=0 ;i< x.length;i++){ //
    sum=sum+ x[i]/x.length;// 2
    }
    return sum 
    }
    y = promedio([1,2,3]);
console.log(y); //  2

y = promedio([2,5,8]); //
console.log(y); //  5

// 2) Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)

function impares(){
    misimpares = []//[1,3,5,...255]
    for(var i = 1; i<=255; i+=2){
        misimpares.push(i);
    }
    return misimpares
    }
    y = impares()//y= [1,3,5,...255]
    console.log(y) //[1,3,5,...255]

//Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados.


function arreglo(x){

    for (let i= 0;  i< x.length; i++) {
        x[i]=x[i]*x[i]// el incremento i++ se realiza al final
        
    }
    return x;
    }
    y = arreglo([1,2,3]);
 console.log(y); // should log [1,4,9] 
    y = arreglo([2,5,8]);
 console.log(y); // should log [4,25,64]




