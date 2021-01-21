var mouseEvent = "empty";
var last_position_x ;
var last_position_y ;

var color = "Blue" ;
width = 1;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", mymousedown);

function mymousedown (e){
mouseEvent = "mousedown" ;
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave (e){
mouseEvent = "mouseleave" ;
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup (e){
mouseEvent = "mouseup" ;
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove (e){
    currentpositionofmousex= e.clientX - canvas.offsetLeft;
    currentpositionofmousey = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = width;
        
        console.log("Last position of X and Y coordinates= ");
        console.log("X = " + last_position_x + " Y = " + last_position_y);
         
        ctx.moveTo(last_position_x, last_position_y);

        console.log("Current position of X and Y coordinates= ");
        console.log("X = " + currentpositionofmousex + " Y = " + currentpositionofmousey);

        ctx.lineTo (currentpositionofmousex ,currentpositionofmousey);

        ctx.stroke();

    }

    last_position_x = currentpositionofmousex;
    last_position_y = currentpositionofmousey;
}
