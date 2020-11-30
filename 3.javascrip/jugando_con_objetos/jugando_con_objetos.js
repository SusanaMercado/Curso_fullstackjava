//¿Cómo harías print/log de la edad de John?

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log( users[1].age)

//¿Cómo harías print/log del nombre del primer objeto?

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log ( users[0].name)

//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

function itinerar(array)
{
    for( persona of array)
    {

        console.log (persona.name+" "+persona.age);
    }
}
itinerar (users);

//¿Cómo harías para imprimir el nombre de los mayores de edad?

var users = [{name: "Michael", age:17}, {name: "John", age:30}, {name: "David", age:27}];

function itinerar(array)
{

    for( persona of array)
    {
        
          
        if(persona.age>=18){

            console.log (persona.name);
        }
        
    }
}
itinerar (users);