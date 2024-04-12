object tom {
  var energia = 100

  method comer(unRaton) {                                                   //Pasamos una referencia a un objeto (unRaton)
    energia = energia + self.energiaQueGanoComiendoA(unRaton)
  }

  method meConvieneComerRatonA(unRaton, unaDistancia) = 
    self.energiaQueGanoComiendoA(unRaton) > self.energiaQueGanoComiendoA(unaDistancia)

  method energiaQueGanoComiendoA(unRaton) = 12 + unRaton.peso() +  self.extraPorNombreParDeRaton (unRaton)   //Siempre que haya un self. viene de un method

  method energiaQuePierdoCorriendo(unaDistancia) = unaDistancia * 0.5


  method extraPorNombreParDeRaton (unRaton) =

        if (unRaton.tieneNombrePar())
      10
      else
      0
  

  method velocidad() = (5 + energia /10)                                  // method velocidad() {return (5 + energia /10)} 

  method distancia(tiempo) = self.velocidad() * tiempo

  method correr(tiempo) {                                                   //Correr depende del tiempo, entonces le paso tiempo en segundos
    
    energia = energia - self.energiaQuePierdoCorriendo(self.distancia(tiempo))                      //Esto es una chota porque tiene muchas responsabilidades, entonces agrupamos adentro de un objeto todo lo que tenga que ver con espacio, tiempo, velocidad

  }
}

  object queso {
    method pesoExtra() = 200

  }

  object aceitunas{
    var property cantidadDeAceitunas = 10 
    method pesoExtra() = 10 * cantidadDeAceitunas
  }


  object jerry{
    var property alimentoFavorito = queso
    var property primerNombre ="jerry"
    var property apellido = "Gomez"
        
        method nombreCompleto() = primerNombre + " " + apellido
        method tieneNombrePar() = self.nombreCompleto().length().even()


        method peso() = 100 + alimentoFavorito.pesoExtra()

    }