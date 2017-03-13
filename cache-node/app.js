//Las cookies son datos que se almacenan en el navegar del lado del cliente, de forma nativa expiran al cerrar el navegador

/*
//los caracteres especiales tienen problemas con las cookies, escape() codifica esos caracteres y unescape() los decodifica

var demo = "123/*- ,;.:"
console.log(demo);
console.log(escape(demo));
console.log(unescape(escape(demo)));
*/

//el formato de una cookie es: "nombre=valor;"
function crearCookie(nombre, valor){
    var hoy = new Date();
    hoy.setMinutes(hoy.getMinutes() + 1);
    
    valor = escape(valor);
    document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+";";
    //el anexo ;expires y la funcion toUTCString() sirven para agregar una fecha de expiracion a una cookie
}

//para borrar una cookie con una funcion se debe expirar la fecha de vencimiento restandole tiempo
function borrarCookie(nombre){
    var hoy = new Date();
    hoy.setMinutes(hoy.getMinutes() - 1);
    
    document.cookie = nombre+"=;expires="+hoy.toUTCString()+";";
    console.log(document.cookie);
}

//para obtener el valor de una cookie se debe transformar toda la lista de cookies en un array, con otro array interno separando el nombre y el valor
function getCookie(nombre){
    
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log(cookieArr);
    
    for(var i =0; i < cookieArr.length; i++){
        
        var parArr = cookieArr[i].split("=");
        
        //se le asigna a la posicion [i] el valor del array parArr[]
        cookieArr[i] = parArr;
        
        //si el valor de parArr[] corresponde al valor del parametro
        if(parArr[0] === nombre){
            return unescape(parArr[1]);
        }
    }
    
    
    return undefined;
}

console.log(crearCookie("nombre","Sebastián"));
console.log(crearCookie("correo","seba@gmail.com"));
console.log(crearCookie("telefono","+56978445924"));

console.log(getCookie("nombre"));
