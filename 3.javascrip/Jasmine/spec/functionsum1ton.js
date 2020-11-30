//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255

function sum1toN (x) {

    var sum =0;
    for (i= 0;i<=x;i++) {
        console.log(i)
        sum=sum+i
        console.log(sum)
    }
    return sum
    }
    y = sum1toN (255)
    console.log(y)

    describe("sum1toN", function() { 
        it("al pasar el N° 255 debiera retornarme 32640", function() { 
            expect(sum1toN (255)).toEqual(32640); 
        }); 
    });

//devuelve la suma del primer y último número en el array

function sumfirstlast(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
    sum =x[0]+x[2];
    }
    return sum;
}
console.log(sumfirstlast([1,2,6]));

describe("sumfirstlast", function() { 
    it("al ingresar 1 areglorealiza una suma del primer y el ultimo numero", function() { 
        expect( sumfirstlast([1,2,6])).toEqual(7); 
    }); 
});




