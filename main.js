var mouse_event="empty"
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"
width_of_line=2;

canvas.addEventListner("mousedown", my_mousedown)

function my_mousedown(e){
    document.getElementById(color).Value
    width_of_line=document.getElementById(width_of_line).Value
    radius=document.getElementById(radius).value
    mouse_event="mousedown"

}
canvas.addEventListner("mousemove", my_mousemove)

function my_mousemove(e){
    var current_position_of_mouse_x = e.clientX-offsetLeft;
    var current_position_of_mouse_y = e.clientY-offsetTop;
    if( mouse_event==mousedown){
        console.log("Current Position of Xand Y coordinates")
        console.log("X = "current_position_of_mouse_X+"Y= "current_position_of_mouse_Y )
        ctx.beginpath();
        ctx.strokestyle=color
        ctx.linewidth=width_of_line
        ctx.arc(current_position_of_mouse_y,current_position_of_mouse_Y,radius,0,2*Math.PI)
        ctx.stroke()
    }
    
}

canvas.addEventListner("mouseup",my_mouseup)
function my_mouseup(e){
    mouse_event="mouseup"
}
canvas.addEventListner("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouse_event="mouseleave"
}


