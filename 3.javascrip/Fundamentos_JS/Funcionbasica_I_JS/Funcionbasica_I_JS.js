function cambia(x){
   uno=0;
   dos=0;
   var nuevo=[]
    for(var i=0;i<x.length;i++){
       if(x[i]==x[0]){
           uno=x[i]
           nuevo.push(x[x.length-1])
       }
       else if(x[i]==x[2]){
           dos=x[i]
           nuevo.push(x[x.length-3])
       }
       else if(x[i]==x[x.length-3]){
           nuevo.push(dos)
       }
       else if (x[i]==x[x.length-1]){
           nuevo.push(uno)
       }
       else
           nuevo.push(x[i])
    }
    return nuevo  
}
console.log(cambia([1,2,3,4,5,6]))



function a(){
    return 35;
}
console.log(a())//35

function a(){
    return 4;
}
console.log(a()+a());//8

function a(b){
    return b;
}
console.log(a(2)+a(4));//6

function a(b){
    console.log(b);//3
    return b*3;
}
console.log(a(3));//9

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));//40



    function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;//esta es el resultado, b es mayor a 10
    }
    console.log(b);
}
console.log(a(15));//4


function a(b,c){
    return b*c;//10,3
}
console.log(10,3);
console.log( a(3,10) );//30


function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);//3
console.log(4);//4

function a(){
    for(var i=0; i<10; i++){//si cumple se le agrega 1
        i = i +2;// si contiua se le agregan 2
        console.log(i);//2,5,8,11
    }
}
a();

function a(b,c){
    for(var i=b; i<c; i++) {
    console.log(i);//1,2,3,4,5,6,7,8,9
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));//1,2,3,4,5,6,7,8,9



function a(){
    for(var i=0; i<10; i++){ //0,1,2,3,4,5,6,7,8,9
    for(var j=0; j<10; j++){ //0,1,2,3,4,5,6,7,8,9
    console.log(j);//0,1,2,3,4,5,6,7,8,9
    }
    console.log(i);
    }
}

function a(){
    for(var i=0; i<10; i++){ //0,1,2,3,4,5,6,7,8,9
    for(var j=0; j<10; j++){ //0,1,2,3,4,5,6,7,8,9
    console.log(i,j);
    }
    console.log(j,i);//0,1,2,3,4,5,6,7,8,9 //0,1,2,3,4,5,6,7,8,9
    }
}

var z = 10;
function a(){
    var z = 15; // se declaro una nueva variable, por lo tanto z sgue siendo 10
    console.log(z);
}
console.log(z); //10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);//10,15


var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;//pide que retorne z, por eso es diferente a las anteriores
}
z = a();
console.log(z);//15,15









