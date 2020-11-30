//1.-Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) 
//debiera dar como resultado [1,2,0,0].function arreglo (x){


    function resetNegativos (x){

        for (var i= 0; i< x.length; i++){
            if (x[i]<0){
              x[i]=0;
              
            }
            else if (x[i]>0){ //para especificar una nueva condición para probar, si la primera condición es falsa
              x[i]==0;
            }
        }
        return x;
        }
        console.log (resetNegativos([1,2,-1,-3]));

//2.-Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor.
 //Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].

function moverAdelante(arr){
  for(var i=0; i<arr.length-1; i++){  
    arr[i]=arr[i+1]; 
    }
    if(i==arr.length-1){
      arr[i]=0;
    }
  return arr;
}
console.log(moverAdelante([1,2,3]))

//3.- Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].

function returnReverso (arreglo){
  var nuevoarreglo=[];
  for(let index= arreglo.length-1;index>=0;index --){
      nuevoarreglo.push(arreglo[index]);
  }
return nuevoarreglo

}
console.log(returnReverso ([1,2,3]));



//4.-Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden).
//Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function dup_par(x){
var nuevo_arr=[];
for (var i= 0; i< x.length; i++) {
  nuevo_arr.push( x[i]);
  if(i%2==0||i%2==0 ){

    nuevo_arr.push(x[i])
  }
  
  
}
return nuevo_arr;

} 

var z =dup_par([4,"ulysses",42,"false"]);
console.log(z)