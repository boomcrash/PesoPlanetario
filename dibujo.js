var dibujo=document.getElementById("dibujito");
var lienzo=dibujo.getContext("2d");

function circulo(canvas){
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50;

    lienzo.beginPath();

    lienzo.fillStyle = 'black';
    lienzo.strokeStyle = 'white';
    lienzo.lineWidth = 2;

    lienzo.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    lienzo.fill();
    lienzo.stroke();
    lienzo.closePath();
}

function trazar(color,xubicacion,yubicacion,xmovimiento,ymovimiento){
        lienzo.beginPath();
        lienzo.strokeStyle=color;
        lienzo.moveTo(xubicacion,yubicacion);
        lienzo.lineTo(xmovimiento,ymovimiento);
        lienzo.stroke();
        lienzo.closePath();
}
circulo(dibujo);
trazar("white",115,115,80,80)
trazar("white",185,185,210,210)
trazar("white",119,110,80,80)
trazar("white",187,182,210,210)
trazar("white",115,115,210,210)




