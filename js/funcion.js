
function primera() {
    var numero= prompt('indique un numero menor que 25')
    if (numero<=25) {
        alert ('Usted ah ganado')
        document.getElementById('boton1')
            boton1.style.backgroundColor="green";
        

    } else {
        alert('Usted ah perdido')
        document.getElementById('boton1')
            boton1.style.backgroundColor="red";
    }  
}
function segunda() {
    var añonacimiento = prompt('indique su año de nacimiento')
    var año = 2021
    var edad= año - añonacimiento
    alert("su edad es: "+edad)
    
}
function nacimiento() {
    var edad =prompt('indique su edad')
    var año= 2021
    var fecha = año - edad
    alert("Usted nacio en: "+fecha)
    
}