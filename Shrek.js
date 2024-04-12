/*IDEAS DE COMO PENSARLO:

LIBERAR UNA PRINCESA --> FUNCION --> Depende de la cant de trolls. Por ejemplo Fiona, custodiada por 4 trolls, 
un encargo que le hizo Lord Farquaad



BUSCAR UN OBJETO MAGICO --> FUNCION --> Depende de la distancia que tiene que caminar para llegar al destino. Por ejemplo buscar la piedra 
filosofal, que está a 40 kilómetros de distancia, encomendada por el señor Gandalf.


Nos gustaría poder agregar más misiones a shrek a futuro. (NOSE COMO HACER ESTO)

a) qué misiones difíciles le encargaron a Shrek
    -Si la persona que encargó la misión comienza con G. En cada mision hay que crear un method que pregunte inicial del que creo la pregunta
    -Si está custodiada por 4 ó 5 trolls, Pregunto la cant de trolls. if(cant trolls > 4) --> es DIFICIL.
    -Si está a más de 100 kilómetros de distancia, Pregunto la distancia. if(distancia > 100) --> es DIFICIL.
b) quiénes son los que solicitaron las misiones
    -Esta cubierto en el a)
c) el total de puntos de recompensa que obtendría Shrek si cumple las misiones, 
esto es el doble de la cantidad de trolls que custodian a una princesa, 
y 10 puntos si el objeto mágico está a 50 kilómetros de distancia o 5 en caso contrario.

    -una funcion para liberar a la princesa, con abstracciones (porque hay calculo).
    -una funcion para buscar el objeto magico, con abstracciones (porque hay calculo).
*/

class Misiones {
    misiones = []                              //Creo una lista de misiones
    misionesDificiles(){
        return this.misiones.filter(mision => mision.esDificil())
    }
    totalPuntosRecompensa(){
        return this.misionesDificiles().reduce((total, mision) => total + mision.puntosRecompensa(), 0)
    }
}


class Mision{
    constructor(tipo, solicitante, detalle){
        this.tipo = tipo
        this.solicitante = solicitante
        this.detalle = detalle
}

/*Aca meto todas las condiciones de una.
charAt, te devuelve el caracter en la posicion que va entre ()*/

esDificil() {
    if (this.solicitante.charAt(0) === 'G') {
        if (this.tipo === 'princesa') {
            if (this.detalle === 4 || this.detalle === 5) {
                return true;
            }
        } else if (this.tipo === 'objeto') {                 //SE QUE ESTO NO ES LO MEJOR, PERO NOSE COMO HACERLO SINO//
            if (this.detalle > 100) {
                return true;
            }
        }
    }
    return false;
}

puntos() {                                                  //Va sin 'function' porque esta definida dentro de una class
    if (this.tipo === 'princesa') {
        return this.detalle * 2;
    } else if (this.tipo === 'objeto') {
        if (this.detalle <= 50) {
            return 10;
        } else {
            return 5;
        }
    }
    return 0;
}

}

Misiones.misiones.push(new Mision('princesa', 'Lord Farquaad', 4))  //Creo instancisa de objetos a partir de la clase
Misiones.misiones.push(new Mision('objeto', 'Gandalf', 40))         //En forma de Pila

console.log('Misiones Dificiles:', Misiones.misionesDificiles())
console.log('Total de puntos de recompensa:',Misiones.totalPuntosRecompensa())


/*Al final no hice funciones para LIBERAR PRINCESAS y OBJETO MAGICO, sino que cree una lista y fui filtrando con la
funcion esDificil y que me devuelva si es true(dificil) o false(no dificil). Y el tema de agregar misiones a futuro es cuestion de agregar 
Misiones.misiones.push con losm parametros de la class Mision para que entienda el mensaje.*/