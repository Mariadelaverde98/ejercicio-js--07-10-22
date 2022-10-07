/* Usando la función filter en una sola línea coloca en un array 
las palabras que contienen "t" y/o "a" y están en posiciones impares.
array constante del que partimos: 
["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"*/


let filtrados = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"].filter((elemento, indice) => {
    let tieneToA = false;
    let i = 0;
    do{
        tieneToA = elemento[i] == 't' || elemento[i] == 'a'
        i++;
    }while(!tieneToA && i < elemento.length)
    return tieneToA && indice % 2 == 1;
});

alert(filtrados);