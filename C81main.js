var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="red";

//code for drawing the initial circle
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

//adding an event listener for mouseclick event
canvas.addEventListener("mousedown", my_mousedown);

//defining a function my_mousedown
function my_mousedown(e){
//getting the color value from screen
    color=document.getElementById("color").value;
    console.log(color);

//getting the x and y position of the mouseclick
    var mouse_x=e.clientX-canvas.offsetLeft;
    var mouse_y=e.clientY-canvas.offsetTop;
    console.log("X = "+mouse_x+" ,Y = "+mouse_y);

//calling the function circle to draw the circle
    circle(mouse_x,mouse_y);
}

//defining the function circle
function circle(x,y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(x, y, 40, 0, 2*Math.PI);
ctx.stroke();
}

//defining the funtion for clearing the canvas
function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}