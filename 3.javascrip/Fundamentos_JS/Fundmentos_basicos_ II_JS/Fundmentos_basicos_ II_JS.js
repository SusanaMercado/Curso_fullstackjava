//1.Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. 
//Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function reemplazarpostivos (x){
for (var i= 0; i< x.length; i++){
    if (x[i]>0){
    x[i]="big";
    }
    else if (x[i]<0){ //para especificar una nueva condición para probar, si la primera condición es falsa
    x[i]==0;
    }
}
return x;
}

console.log (reemplazarpostivos([-1,3,5,-5]));

//2.Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función 
//debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 

functionpromedio(y){
    max = y[0];//le entrego la posicion [0]=1
    min = y[0];
    for(var i=0 ;i<y.length;i++){   
    if(y[i]>max){
      max= y[i];
    }
      
    if(y[i]<min){
      min=y[i];
    }  
    }
    return max;
    }
    console.log(min);

  y =promedio([1,5,10,-2]);
  console.log(y);

  //3.Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función 
  //debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
  
  function retorno_datos(arr){//length del arreglo=5//posicion;parte en 0//entregarle otro valor usamos signo =

    console.log(arr[arr.length-2]);
  
    for(var i=0; i<arr.length; i++){  

      if(arr[i]%2!=0){
        
        return arr[i];
      }
    }   
  }
  console.log(retorno_datos([1,2,3,4,5]))
  
  
  //4.maxDoble Visión - Dado un array, crea una función que devuelva un nuevo array 
  //donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function arreglo(x){

    for (let i= 0;  i< x.length; i++) {
        x[i]=x[i]+x[i] //se utiliza suma para duplicar valor
        
    }
    return x;
    }
    y = arreglo([1,2,3]);
 console.log(y); 

 //5.Contar Positivos - Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos
  //encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].


  function contarPositivos (arr){

    var positivos=0;

    for (let i= 0; i< arr.length; i++) {
       if(arr[i]>0) {

       positivos = positivos + 1;
       }
        
    }  
    arr[arr.length-1] = positivos;
    return arr;

    }

  y = contarPositivos ([-1,1,1,1]);
  console.log(y); 


 //6.Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) 
 //“¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

    function contador(array)
    {
        contador_pares = 0;
        contador_impares = 0 ;

        for (i=0; i < array.length; i++)
        {
            if(array[i] %2 == 0)
            {
                contador_pares++;
                contador_impares = 0;
            }
            if(array[i] %2 != 0)
            {
                contador_impares++;
                contador_pares = 0;
            }

            if(contador_pares == 3)
            {
                console.log("Es para bien");
            }
            if(contador_impares == 3)
            {
                console.log("imparcial");
            }
        }
    }

    contador([2,3,-1,6,-5,6,6,6,-6,-6,-6]);


    //7.Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice
    //es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 

    function contador(array)// recibe arreglo
    {
      
        for (i=0;i < array.length; i++){//  i < largo del arreglo/condicional
          if( i %2 != 0){// si i en distinto a 0 impar
            array[i]++;// arreglo incrementa en 1
          console.log (array[i]);
        }  
      }
        return array
    }
    contador([2,3,-1,6,-5,6,6,6,-6,-6,-6]);


    //8.Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string
    //con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, 
    //longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
    

//crear arreglo auxiliar
//agregar el primer elemento del arreglo
//al auxiliar agregar nuevos elementos con push y estos seran el largo de los elementos del arreglo


  function previousLength(arreglo) { //auxiliar =["hello",5,4]
    var auxiliar = [];// con esto la declaramos en 0
    auxiliar.push(arreglo[0]);

    for (var i = 0; i < arreglo.length-1; i++) {
      auxiliar.push(arreglo[i].length);
    }
    return auxiliar;
}
console.log(previousLength(["hello","dojo","awesome"]));


//9.Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 
//7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.  

function agregasiete(array)// recibe arreglo
{
  
    for (i=0;i < array.length; i++){//  i < largo del arreglo/condicional
      if(array.length){// si recorre el largo el arreglo
        array[i]+=7;// que el arreglo, incremente en 7, eso los hago con +=7, asignandole la suma al signo mas
      console.log (array[i]);//imprimo cada inice el arreglo
    }  
  }
    return array
}
agregasiete([1,2,3]);


//10.Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus 
//valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).


function ArrayInverso  (arreglo){
  var nuevoarreglo=[];//declaro una nueva variable o arreglo
  for(let i= arreglo.length-1;i>=0;i --){//-- recorre el arreglo de manera inversa
      nuevoarreglo.push(arreglo[i]);//con la funcion push agrego el nuevo arreglo segun su indice
  }
return nuevoarreglo

}
console.log(ArrayInverso([3,1,6,4,2]));

//11.Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
//pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
revisar-----

    function resetNegativos (x){

      for (var i= 0; i< x.length; i++){
          if (x[i]<0){
            x[i]=x[i]*-1;
            
          }
          else if (x[i]>0){ //para especificar una nueva condición para probar, si la primera condición es falsa
            x[i]==x[i]*-1;
          }
      }
      return x;
      }
      console.log (resetNegativos([1,2,-1,-3]));
    

    //12.Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores 
    //sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

    