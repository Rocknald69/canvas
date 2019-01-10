var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById("dibujito"); // tomamos todo lo de la etiqueta canvas 
var ancho = d.width;
var lienzo = d.getContext("2d"); //definimos las dimenciones de nuestras canvas



function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) 
{
    lienzo.beginPath(); //Decidimos iniciar el trazo
    lienzo.strokeStyle = color; //decidimos el color del Trazo
    lienzo.moveTo(xinicial, yinicial); //En que Lugar comenzara a trazar
    lienzo.lineTo(xfinal, yfinal); // Hasta donde trazara. << en este caso LineTo hace referencia a linea
    lienzo.stroke(); //con que lo dibujamos 
    lienzo.closePath();//Levantar el lapiz o dejamos de trazar
}

function dibujoPorClick() 
{
    
var lineas = parseInt(texto.value);
var l = 0;
var xi, yi, xf, yf;
var colorcito = "#8522AA";
var espacio = ancho / lineas;

while(l < lineas)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    xi = espacio * l;
    yf = espacio * (l + 1);
    dibujarLineas(colorcito, 0, yi, xf, 300);
    dibujarLineas(colorcito, xi, 0, 300, yf);
    l++;

}

for (l = 0; l < lineas; l++)
{
    xi = espacio  * l;
    yf = 300 - espacio * l; 

    dibujarLineas(colorcito, xi,300 , 300, yf);
    dibujarLineas(colorcito,xi,0 , 0 ,yf);   
}

dibujarLineas(colorcito,1 ,1 ,1 ,299);
dibujarLineas(colorcito,1 ,299 ,299 ,299);
dibujarLineas(colorcito,299 ,299 ,299 ,1);
dibujarLineas(colorcito,299 ,1 ,1 ,1);
}