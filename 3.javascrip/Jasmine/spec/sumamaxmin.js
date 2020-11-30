//Ya sea en el mismo archivo o en uno diferente, crea una prueba o función que devuelva la suma del número más grande y 
//el más pequeño del array. Por ejemplo, sumMaxMin([1,3,10]) debería devolver 10 + 1 = 11, y sumMaxMin([-2,-5,-10]) debería devolver
//-2 + -10 = -12. Una vez que hayas escrito la prueba, ejecútala (sin escribir toda la función para asegurarte de que fallen todas las pruebas),
//luego completa la función cerciorándote de que pase todas las pruebas. 

function sumMaxMin(y){
    sum = 0;
    max = y[0];//le entrego la posicion [0]=1
    min = y[0];
    for(var i=0 ;i<y.length;i++){ 
    if(y[i]>max){
    max= y[i];
    }
    if(y[i]<min){
    min=y[i];
    } 
    
    sum=max+min;
    }
    return sum; //siempre debe haber un retorno en jasmin, si no arrojara fallas y no funciona bn la terminal.
    }
    y = sumMaxMin ([1,3,10]);
    y = sumMaxMin ([-2,-5,-10]);
    

    describe("sumMaxMin", function() { 
    it("al ingresar 1 areglo realiza una suma del numero máximo y el minimo en la funcion", function() { 
        expect(sumMaxMin ([1,3,10])).toEqual(11); 
    }); 
        it("al ingresar 1 areglo realiza una suma del numero máximo y el minimo en la funcion", function() { 
            expect(sumMaxMin([-2,-5,-10])).toEqual(-12); 
        }); 
});
