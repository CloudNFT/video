(function () {
    canvas = document.getElementById('mainCanvas');
    ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    WIDTH	= canvas.width;
    HEIGHT	= canvas.height;
    
   clearScreen();
})();

function resizeCanvas() {
    canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    
    clearScreen();
}

function clearScreen() {
    var grd = ctx.createLinearGradient(0,0,0,180);
    grd.addColorStop(0,"#34495E");
    grd.addColorStop(1,"#aaaacc");

    ctx.fillStyle = grd;
    ctx.fillRect(  0, 0, WIDTH, HEIGHT );
    
}


function Arc(y,x,d,start,end){
var dim = 15
var start_degree = start;
var start_radian = (Math.PI / 180) * start_degree
var end_degree = end;
var end_radian = (Math.PI / 180) * end_degree

ctx.lineWidth = 0
ctx.beginPath()
ctx.arc(y,x,dim,start_radian,end_radian,false)

ctx.fillStyle = "red"
ctx.stroke()
ctx.fill()
ctx.closePath()	
}

function Fill(y,x,w,h){
ctx.beginPath();
ctx.rect(y,x,w,h);
ctx.fillStyle = "black";
ctx.fill();	
}

