var numero1 = prompt("ingrese un primer numero para ser usado en una operacion matemática");
var numero2 = prompt("ingrese un segundo numero para ser usado en una operacion matemática");
resultado1 = numero1 + numero2;
resultado2 = numero1 - numero2;
resultado3 = numero1 * numero2;
resultado4 = numero1 / numero2;
document.write('Suma:' + "<br>", numero1, ' + ', numero2, ' = ', resultado1, "<br>", 'Resta:' + "<br>",
    numero1, '-', numero2, '=', resultado2 + "<br>", 'Multiplicacion:' + "<br>",
    numero1, '*', numero2, '=', resultado3 + "<br>", 'Division:' + "<br>",
    numero1, '/', numero2, '=', resultado4);