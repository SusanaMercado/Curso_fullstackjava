//1.Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

    function array(){
        var suma = []
        for(var i = 1; i<=255; i++){
            suma.push(i);
        }
        return suma
        }
        y = array()
        console.log(y) 
    


//2.Consigue pares hasta 1000: Escribe una función que entregue la suma de todos 
//los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

    function printSum_pares(x) {
        var sum =0;
        for (i= 0;i<=1000;i+=2) {
            console.log(i)
            sum=sum+i
            console.log(sum)
        }
        return sum
        }
        y = printSum_pares(1000) 
        console.log(y) 


//3.Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 
//(ej: 1+3+5+...+4997+4999).

function printSum_impares(x) {
    var sum =0;
    for (i= 0;i<=5000;i+=1) {
        console.log(i)
        sum=sum+i
        console.log(sum)
    }
    return sum
    }
    y = printSum_impares(5000) 
    console.log(y) 

//4.Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de 
//un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
        function suma_arreglo(x){
            sum = 0;
            for(var i=0 ;i< x.length;i++){ //
            sum=sum+ x[i]
            }
            return sum 
            }
            y = suma_arreglo ([1,2,5]);
        console.log(y); 
        
        y = suma_arreglo ([-5,2,5,12]); 
        console.log(y);

//5. Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva 
//el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

    function num_mayor (y){
        
        max = y[0];//le entrego la posicion [0]=1
        for(var i=0 ;i<y.length;i++){ 

        if(y[i]>max){
        max= y[i];
        }
        
        }
        console.log(max);
        }
        y = num_mayor ([-3,3,5,7]);
        console.log(y);

//6. Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva 
//el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

        function promedio(y){
        prom = 0;
        for(var i=0 ;i<y.length;i++){ 
        prom =(prom+ y[i]/y.length);
        }
        console.log(prom);//2
        }
        y = promedio([1,3,5,7,20]);
        console.log(y);

//7. array de impares: Escribe una función que devuelva un array de todos los números impares entre 
//1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

        function impares(){
            misimpares = []//[1,3,5,...50]
            for(var i = 1; i<=50; i+=2){
                misimpares.push(i);
            }
            return misimpares
            }
            y = impares()//y= [1,3,5,...50]
            console.log(y) 

//8. Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
//Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

var x = [1,3,5,7];
var Y = 3;//imprime los valore que son mayores que y
for (i = 0; i < x.length; i++) {
  if (x[i] > Y) {
    console.log(x[i]); //osea imprime los valores mayores a el numero 8
  }
}

//9. Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado
//del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function arreglo(x){

    for (let i= 0;  i< x.length; i++) {
        x[i]=x[i]*x[i]// el incremento i++ se realiza al final
        
    }
    return x;
    }
    y = arreglo([1,5,10,-2]);
 console.log(y); 
    

//10.Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0.
//Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

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
    console.log (resetNegativos([1,5,10,-2]));

//Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max),
 //menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

 function promedio(y){
    prom =0;
    max = y[0];//le entrego la posicion [0]=1
    min = y[0];
    for(var i=0 ;i<y.length;i++){   
    if(y[i]>max){
      max= y[i];
    }
      
    if(y[i]<min){
      min=y[i];
    }  
    prom =prom+y[i]/y.length;// 
    }
    console.log(prom);//2
    console.log(max);//3
    console.log(min);//1
    }
  y = promedio([1,5,10,-2]);
  console.log(y);


//12.Intercambia Valores: Escribe una función que intercambie el primer y el último 
//valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function moverAdelante(arr){
    for(var i=0; i<arr.length-1; i++){  
    arr[i]=arr[i+1]; 
    }
    if(i==arr.length-1){
        arr[i]=-2;
    }
    return arr;
    }
    console.log(moverAdelante([1,5,10,-2]))



//13.De Número a String: Escribe una función que tome un array de números y reemplace 
//cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
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
    
    console.log (reemplazarNegativos([-1,-3,2]));
    