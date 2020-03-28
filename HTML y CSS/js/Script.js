// DOM
var total,numero1,numero2;

function totalaPagar(numero1,numero2){
    total=numero1*numero2;
    return total;
}

var granTotal=totalaPagar(10,20);
var calculadora=document.getElementById('resultado').innerHTML=granTotal+' Dolares';


/*
// SCOPE no se puede utilizar algo que no existe
function scope1(){
    var a=10;
    console.log(a);
}
function scope2(){
    var b=20;
    console.log(b);
}

scope1();
scope2();


// FUNCIONES QUE RETORNAN VALORES
var numero1;

function multiplicarx20(numero){
    numero*=20;
    return numero;
}

var resultado=multiplicarx20(3);
console.log('El valor de resultado es: '+resultado);

const IMPUESTO=.16;
var cantidad;
function totalPagar(numero){
    numero=numero+(numero*IMPUESTO);
    return numero;
}

var resultado=totalPagar(100);
console.log(resultado);


// FUNCIONES CON ARGUMENTOS
function suma(n1,n2){
    console.log(n1+n2);
}
suma(1,2);

var frutas=[];
function array_frutas(fruta){
    frutas.push(fruta); // Agrega un elemento al final del array
    console.log(frutas);
}
array_frutas(prompt('Ingrese una fruta'));

// Carrito de compras
const IMPUESTO=0.16;
var total=0;
function carrito(articulo, precio){
    console.log('Articulo '+articulo+' Precio $'+precio);
    total += precio + (IMPUESTO * precio);
    console.log('Impuesto: '+precio*IMPUESTO);
    console.log('Total: $'+total.toFixed(2));
}
//carrito(prompt('Ingrese un articulo'),prompt('Ingrese el precio'));
carrito('Cerveza',520);

// FUNCIONES
function sumar(){
    console.log(2+2);
}
sumar();

var auto={ //   Se crea el objeto
    nombre:'Mustang',
    motor:5.5,
    color:'Azul',
    clasico:true,
    año:1965
}

function recorrer_objeto(automovil){ // Creamos la funcion que recorre ese objeto
    console.log(this.nombre);
    console.log(this.motor);
    console.log(this.color);
    console.log(this.clasico);
    console.log(this.año);
}

auto.mostrarAuto=recorrer_objeto; // Se agrega la funcion mostrarAuto al objeto Auto y se le asigna la funcion recorrer_objeto
auto.mostrarAuto();

/*
// DO WHILE
var contar=0;
do{
    console.log(contar+' veces 7 es igual a '+ contar*7);
} while(contar++<8); 
 
// WHILE
var i=0;
var premierleague=['Chelsea','Manchester United','Liverpool','Boquita'];
while(i<premierleague.length){
    console.log(premierleague[i]);
    i++;
}


/*
// FOR

for(var i=0 ; i<=20 ; i++){
    if(i==5){
        console.log('CINCOOOOO');
        continue; // continua el for, el BREAK lo termina
    }
    console.log(i);
}

var premierleague=['Chelsea','Manchester United','Liverpool','Boquita'];
for(i=0 ; i<premierleague.length ; i++){
    console.log(premierleague[i]);
}

/*
// Operadores matematicos
var numero1=10;
var numero2=20;

// Suma
console.log(numero1+numero2);
// Resta
console.log(numero1-numero2);
// Multiplicación
console.log(numero1*numero2);
// División
console.log(numero1/numero2);
// Incremento
numero1++;
console.log(numero1);
// Decremento 
numero2--;
console.log(numero2);

var numero3=30;
console.log('numero3 es: '+numero3);




/*
// Metodo de pago
var metodoDePago='Efectivo';
switch(metodoDePago){
    case 'TC':
        console.log("Se pago con tarjeta de credito");
        break;
    case 'Efectivo':
        console.log("Se pago con efectivo");
        break;
    case 'PayPal':
        console.log("Se pago con PayPal");
        break;
    default:
        console.log('Metodo no valido');
        break;
}

/*
// IF con && y ||
var cantidadaPagar=100;
var saldo=101;
var recargaTelefono=10;
var usuarioValido=false;

if(saldo > cantidadaPagar && usuarioValido){
    console.log('Se pago correctamente');
} else{
    console.log('No se pudo pagar');
}

var cantidadaPagar=1000;
var efectivo=500;
var tarjetaCredito=true;
if(efectivo>cantidadaPagar || tarjetaCredito){
    console.log('Pago realizado');
} else{
    console.log('Te falta efectivo')
}



/*
// IF
var cantidadapagar=100;
var saldo=500;

if(saldo<cantidadapagar){
    console.log("No hay saldo para pagar");
}
else{
    console.log("El pago se realizo con exito!!");
}

var edad1= prompt("Ingrese una edad");
var edad2= prompt("Ingrese otra edad");

if(edad1>edad2){
    console.log("Edad 1 es mayor que Edad 2");
}
else if(edad1==edad2){
    console.log('Ambas edades son iguales');
}
else{
    console.log('Edad 2 es mayor que Edad 1');
}

var edad3="20";
var edad4=20;

if(edad3===edad4){
    console.log("Son iguales");
}
else{
    console.log("No son iguales");
}

/* 
// String o Cadenas
var texto="Esto es una cadena de Texto";
console.log(texto);
console.log(typeof(texto));
console.log(texto.toUpperCase()); // Mayuscula
console.log(texto.length); // Largo de la cadena
console.log(texto.split(" ")); // Modo de filtrar el texto o las palabras
console.log(texto.indexOf("cadena")); // Busca una palabra en particular
console.log(texto.slice(0,11)); // Elimina ciertas partes 
console.log(texto.toLowerCase()); // Minusculas




/*
// Fechas
var fecha= new Date();
console.log("El año actual es: "+fecha.getFullYear());
console.log("El dia actual es: "+fecha.getDate());
console.log("El Mes actual es: "+fecha.getMonth());
console.log("La hora es: "+fecha.getHours());
console.log("Con: "+fecha.getMinutes()+" minutos");


/*
// Numeros

var numero1='15';
var numero2=-20;
var numero3=21.5;
var numero4=20;
var numero5='3.1416';
var numero6=-30.5;
console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(numero3));
console.log(typeof(numero4));
console.log(typeof(numero5));
console.log(typeof(numero6));

var numero7=parseInt(numero1);
console.log(numero7+20);

var numero8=parseFloat(numero5); // Se convierte en Float
console.log((numero8+20).toFixed(2)); // Solo dos decimales

var numero9=Number(numero1); // Se convierte en numero
console.log(typeof(numero9));

/*
// Espacios en blanco
var nombre="Matias";
console.log(nombre);

var persona={
    nombre:"Matias",
    profesion:"Analista de Sistemas de Computación"
}
console.log(persona);

/*
var premierleague=["Chelsea","Manchester United","Liverpool","Arsenal"]; 
// Muestra la forma en que se inicializa un arreglo
console.log(premierleague); // Muestra el arreglo
premierleague.push("Manchester City"); // Agregar al vector
console.log(premierleague);

premierleague[2]='Boquita';
console.log(premierleague); 
console.log(premierleague.indexOf("Manchester United"));
premierleague.pop(); //Elimina el ultimo elemento del arreglo 
console.log(premierleague);

premierleague.splice(1,2); //Eliminar elementos en el arreglo 
console.log("Con Splice "+premierleague);

///Con filtro
console.log("Filtro");
var premierleague=["Chelsea","Manchester United","Liverpool","Arsenal"]; 
var nuevoArreglo=premierleague.filter(function(equipo){
    return (equipo != "Chelsea");
});
console.log(nuevoArreglo);
*/






/**
var la_liga= new Array("Barcelona","Real Madrild","Atletico Madrid");
console.log(la_liga); /** Muestra el arreglo */



/** var auto={ /** DEFINIENDO OBJETOS 
    nombre:'Mustang',
    motor:5.5,
    color:'Azul',
    clasico:true,
    año:1965,
}
console.log(auto.nombre);
console.log(auto.motor);
console.log(auto.color);
console.log(auto.clasico);
console.log(auto.año);
*/




/**var nombre=prompt('Como te llamas?'); /** FUNCION PROMPT propia de JavaScript 
var pais=prompt('De donde eres?');
alert ("Bienvenido "+nombre+" de "+pais);
*/
/**
var modelo="Mustang";
var motor=5.5;
var color="Azul";

var modelo2,motor2,color2;
modelo2="Camaro";
motor2=5.8;
color2="Negro";

*/