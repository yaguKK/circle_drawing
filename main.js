var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="red";
width_of_line=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,5,0,2);
    ctx.stroke()
    }
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}