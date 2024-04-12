//Definición por defecto de un Ave


class Ave {
	var energia = 50
	
	method volar(kilometros) {
		energia = energia - (kilometros + 10)
	}
	
	method comer(gramos) {
		energia = energia + gramos * 4
	}
}

class Golondrina inherits Ave {

method dormir() {

  energia = energia + 1

}
}

class Petrel inherits Ave {
    var contadorDeKm = 0 
    override method volar(kilometros){           
    super (kilometros)
    contadorDeKm = contadorDeKm + kilometros
    }
}

class Torcaza inherits Ave {

    override method comer(gramos) {
        self.volar(1)
        super(gramos)
    } 
}