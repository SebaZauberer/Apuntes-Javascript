//variables primitivas
//variable global (en el objeto window)
var manzana;

manzana;            //undefind
manzana = "fruta";
manzana = 1;        //(3/4+5/8+7/2)/(1+2)
manzana = true;     //true, false
manzana = null;

//llamado variable 
manzana;

//variable local (dento de una función)

function variableLocal(){
    manzana = "otra manzana especifica";
    console.log(manzana);
}
variableLocal();



// ----------------------------------------------------------------
//objeto (usado generalmente para seleccionar una propiedad especifica de algo)
var manzana2 = {
    color: "rojo",
    altura: 15,
    hojas: false,
    parasitos: null,
    semillas: undefined
};

//llamado objeto
manzana2.propiedad;


// ----------------------------------------------------------------
//arreglo o array (usado generalmente como una lista para bucles donde se selecciona la posición de un elemento en el array)
var manzana3 = ["roja", 13, true, null, undefined];

//llamado array (las posiciones comienzan desde el 0)
manzana3[0];


// ----------------------------------------------------------------
//funciones
function nombreFuncion(parametro){
    
    console.log("Esto es "+parametro+" de la función Imprimir");
    
}

var miFuncion = function(){
    
    console.log("Esto es otra función también");
    
}

//llamado funcion
nombreFuncion("Perrox");
miFuncion();


//funciones de consola
console.log("Hola mundo"); //imprimir un mensaje simple
console.info("Hola mundo"); //imprimir un mensaje de información
console.warn("Hola mundo"); //imprimir un mensaje de advertencia
console.error("Hola mundo"); //imprimir un mensaje de error