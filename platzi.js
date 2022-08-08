//variables globales//
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39 
    };
var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var cantidad = aleatorio(2, 4);
var x$ = 250;
var y$ = 250;
var movimiento = 10;

//JSON, LAS VARIABLES SE SEPARAN CON COMA, Y SE PARECEN AL CSS//
var vaca = 
{
    url: "vaca.png",
    cargaOK: false
}
var fondo = 
{
    url: "tile.png",
    cargaOK: false
}
var cerdo =
{
    url:"cerdo.png",
    cargaOK: false
}
var pollo = 
{
    url:"pollo.png",
    cargaOK: false
}
var lobo =
{
    url:"lobo.png",
    cargaOK: false
}

//fondo, cerdo, vaca y gallina//
fondo.imagen = new Image();
vaca.imagen = new Image();
cerdo.imagen = new Image();
pollo.imagen = new Image();
lobo.imagen = new Image();
//source's//
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
pollo.imagen.src = pollo.url;
lobo.imagen.src = lobo.url;
//scrip de carga//
fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen.addEventListener("load", cargarVacas);
cerdo.imagen.addEventListener("load", cargarCerdo);
pollo.imagen.addEventListener("load", cargarPollo);
lobo.imagen.addEventListener("load", cargarLobo);
document.addEventListener("keyup", dibujarTeclado);

//funcion para plasmar//
function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas(){
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}
function cargarLobo()
{
    lobo.cargaOK = true;
    dibujar();
}

//dibujo//
function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK)
    {
        for(c = 0; c < cantidad; c++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOK)
    {
        for(p = 0; p < 2; p++)
        {
            var x = aleatorio(6, 7);
            var y = aleatorio(6, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
    if(lobo.cargaOK)
    {
    
    }
}
//funcion para numero aleatorio//
function aleatorio(min, maxi)
{
    var numero_aleatorio;
     numero_aleatorio = Math.floor(Math.random() * (maxi - min + 1)) + min;
     return numero_aleatorio;
    
}
var z;
var i = 0
 
for (i = 0; i < 5; i++)
{
    z = aleatorio(10, 20);
    document.write(z + ", ");
}
//TECLAS//
function dibujarTeclado(evento)
{
    switch(evento.keyCode)
    {
        case teclas.DOWN:
            cargarFondo();
            papel.drawImage(lobo.imagen, x$, y$ + movimiento);
            y$ = y$ + movimiento;
        break;
        case teclas.UP:
            cargarFondo();
            papel.drawImage(lobo.imagen, x$, y$ - movimiento);
            y$ = y$ - movimiento;
        break;
        case teclas.LEFT:
            cargarFondo();
            papel.drawImage(lobo.imagen, x$ - movimiento, y$);
            x$ = x$ - movimiento;
        break;
        case teclas.RIGHT:
            cargarFondo();
            papel.drawImage(lobo.imagen, x$ + movimiento, y$);
            x$ = x$ + movimiento;
        break;
        default:
            console.log("otra tecla");
        break;
    }
     
}
