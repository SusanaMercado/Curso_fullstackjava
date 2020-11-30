
//Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 

var x = [1, 5, 3, 7, 9, 11, 14, 20];
var Y = 8;//imprime los valore que son mayores que y
for (i = 0; i < x.length; i++) {
  if (x[i] > Y) {
    console.log(x[i]); //osea imprime los valores mayores a el numero 8
  }
}

//Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 

function promedio(y){
  prom = 0;
  max = y[0];//le entrego la posicion [0]=1
  min = y[0];
  for(var i=0 ;i<y.length;i++){ 
    
  prom =(y[i]+y[i])/y.length;// 
    
  if(y[i]>max){
    max= y[i];
  }
    
  if(y[i]<min){
    min=y[i];
  }  
  }
  console.log(prom);//2
  console.log(max);//3
  console.log(min);//1
  }
y = promedio([1,2,3]);
console.log(y);


//Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por 
//el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].

function reemplazarNegativos (x){

  for (var i= 0; i< x.length; i++){
      if (x[i]<0){
        x[i]="dojo";
        
      }
      else if (x[i]>0){ //para especificar una nueva condición para probar, si la primera condición es falsa
        x[i]==0;
      }
  }
  return x;
  }
  
  console.log (reemplazarNegativos([1,2,-3,-5,5]));
  

  //Dado un array y su respectivo índice, remueve los valores en el rango del índice 
  //dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].


function RemoverRango (arreglo,inicio,fin){
var arraux =[]  
  for(var i=0;i<arreglo.length; i++){
  if (i < inicio || i>fin){
  arraux.push(arreglo[i])
  }
  }
  return arraux;
  }
  z= RemoverRango
  ([20,30,40,50,60,70],2,4)
  console.log(z)
    