// suma

function suma(){
var a = 0;
var b = 0;
var result = 0;

a = parseInt (prompt ("por favor ingrese el primer valor"));
b = parseInt (prompt("favor ingresar el segundo valor"));

result = a + b;

alert ("el resultado de la suma es; " + result);
}

function medida(){
    var a = 0;
    var resultado = 0;

    a = parseInt(prompt("por favor ingresar el valor a comvertir"));
    resultado = a * 3.37;
    alert ("el resultado de la comvercion es: " + resultado);
}

function operaciones(){
    var a = 0;
    var b = 0;
    
    a = parseInt (prompt ("por favor ingrese el primer valor"));
    b = parseInt (prompt("favor ingresar el segundo valor")); 
    
    alert ("la suma de los valores es ingual a: "+ (a + b) + "/n la resta de los valores es igual a: " + (a - b) + "/n el resultado de la multiplicacion es igual a: " + (a * b) + "n/ el resultado de la divicion es igual a: " + (a / b));
    }

    function area(){
        var b = 0;
        var h = 0;
        var resp = 0;
        
        b = parseInt (prompt("por favor ingrese la base del triangulo"));
        h = parseInt (prompt("por favor ingresar la altura del triangulo"));

        resp = (b*h) / 2;
        alert ("el area del triangulo es igual a: " + resp);

    }