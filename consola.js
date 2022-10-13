const lista=["Joaquin","carlos", "Ruben", "Ezequiel", "Eugenio"];

// distintas formas de recorrer el array 
lista.map((item)=>{console.log(item);});//con este metodo recorremos la lista y podemos modificarla

lista.forEach((item)=>{console.log(item);});// recorremos el array y solo lo muestra

for(index in lista){
    console.log(index);
} 

//ciclos

for (var i=0 ; i<lista.length; i++){
    console.log(lista[i])
} 
 
//bucles
let index=0;
 
 while(index< lista.length){
    console.log(lista[index]);
    index++;
 }

 let contador=0;
 maximo=10
while(true){
    console.log(contador);
    //condicionales
    if(contador===maximo){
        break;
    }
}
 
function test (){
    fetch("http://168.181.184.237:8080/api/usuario/test", {method:"GET"})
    .then(response=>response.json())
    .then ((data)=>{console.log(data);
    });
}

test(); 