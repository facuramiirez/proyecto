class Cliente {
    nombre
     deuda
 
 constructor (_nombre, _deuda) {
   this.nombre = _nombre
   this.deuda = _deuda
 }
}

const clientes = []
clientes.push(new Cliente ('Perdro', 1000))
clientes.push(new Cliente ('Fuego', 200000))
clientes.push(new Cliente ('Javo', 300))
clientes.push(new Cliente ('ana', 100))

function deudaMayorA(listaDeClientes, monto){

    const listaParcial = []

    for(let indice=0; indice < listaDeClientes.length(); indice++){<
        if(listaDeClientes[indice].deuda > monto){
            listaParcial.push(listaDeClientes[indice])
        }
    } 
return listaParcial
}

console.log('Los clientes con deuda mayor a 10000 son' + deudaMayorA(clientes,10000))


function nombrePalindromo(listaDeClientes){

    const listaParcial = []

    for(let indice=0; indice < listaDeClientes.length(); indice++){
        if(listaDeClientes[indice].nombre == strReverse(listaDeClientes[indice].nombre)){
            listaParcial.push(listaDeClientes[indice])
        }
    } 
return listaParcial
}

console.log('Los clientes con nombre palindromo son' + nombrePalindromo(clientes))
