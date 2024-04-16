/*Creo una class Mision para una mision generica con 3 campos y 2 funciones
Las mismas devuelven 0 y false ya que por defecto no es dificil una mision gen
Esto se ve en las proximas clases de misiones especificas*/

class Mision {
    constructor(tipo, solicitante, detalle) {
        this.tipo = tipo;
        this.solicitante = solicitante;
        this.detalle = detalle;
    }

    esDificil() {
        return this.solicitante.charAt(0) === 'G';           
    }                               

    puntos() {
        return 0; 
    }
}

/*Mision especifica q sobreescribe las funciones de arriba con su comportamiento especifico*/

class MisionPrincesa extends Mision {
    esDificil() {
        return super() && (this.detalle === 4 || this.detalle === 5);
    }

    puntos() {
        return this.detalle * 2;
    }
}


/*Mision especifica q sobreescribe las funciones de arriba con su comportamiento especifico*/
class MisionObjeto extends Mision {
    esDificil() {
        return super() && this.detalle > 100;
    }

    puntos() {
        return this.detalle <= 50 ? 10 : 5;
    }
}


/*Esta clase es para agregar misiones, se crea una lista con 3 funciones
la cual pregunta a las clases de misiones especificas por ejemplo q mision es dificil
o cuantos puntos vale*/
class Shrek {
    constructor() {
        this.misiones = [];
    }

    agregarMision(mision) {
        this.misiones.push(mision);
    }

    misionesDificiles() {
        return this.misiones.filter(mision => mision.esDificil());
    }

    totalPuntosRecompensa() {
        return this.misionesDificiles().reduce((total, mision) => total + mision.puntos(), 0);
    }
}


/*De añguna forma esta clase representa al personaje que representa al personaje principal*/



/*Se crea una instancia de shrek a la cual se le agregan misiones con los datos especificos de cada campo*/


const shrek = new Shrek();
shrek.agregarMision(new MisionPrincesa('princesa', 'Gord Farquaad', 4));
shrek.agregarMision(new MisionObjeto('objeto', 'Gandalf', 40));

/*Se printea todo*/

console.log('Misiones Dificiles:', shrek.misionesDificiles());
console.log('Total de puntos de recompensa:', shrek.totalPuntosRecompensa());