/* please ignore this all!!!!! main code below
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
//c.fillStyle = "rgba(255,255,255,0.7)";
//c.fillRect(canvas.width / 2 - 100 / 2, canvas.height / 2 - 100 / 2, 100, 100);
line animation
c.beginPath();
c.moveTo(canvas.width / 2, 0);
c.lineTo(0, canvas.height / 2);
c.lineTo(canvas.width / 2, canvas.height);
c.lineTo(canvas.width, canvas.height / 2);
c.lineTo(canvas.width / 2, 0);
c.lineTo(canvas.width / 2, canvas.height);
c.strokeStyle = "rgba(255,255,255,0.5)";
c.stroke();
var x = Math.random() * canvas.width;
var dx = 10;
var y = Math.random() * canvas.height;
var dy = 10;
animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.arc(x, y, 30, 0, 2 * Math.PI, false);
    c.strokeStyle = "rgba(255,255,255,1)";
    c.stroke();
    c.fill();
    if (x > canvas.width - 30 || x - 30 < 0)
        dx = -dx;
    else if (y > canvas.height - 30 || y - 30 < 0)
        dy = -dy;

    x += dx;
    y += dy;
}
animate();

**********************************************************/
//let's practice some basic stuff first
document.getElementById('navbar').style.columnWidth = innerWidth;
//document.getElementById('navbar').style.column = innerWidth;


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var mouse = {
    x: undefined,
    y: undefined,
}
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var color = [
    'rgba(217, 201, 67,0.6)',
    'rgba(227, 113, 70,0.6)',
    'rgba(154, 73, 204,0.6)',
    'rgba(70, 194, 227,0.6)',
    'rgba(115, 219, 68,0.6)'];


//lets add some interactivity to our animation
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;

    }
)
/*window.addEventListener('touchmove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;

    }
)*/


//document.getElementById('navbar').style.columnWidth = innerWidth;
window.addEventListener('resize', function (event) {
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight;
    fillExtra();

}
)

class circle {
    constructor(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.MinRadius = this.r;
        this.MaxRadius = 300;
        this.color = color[Math.floor(Math.random() * 5)];
    }

    //this will draw a circle on canvas
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);         // c.bezierCurveTo(innerWidth / 2, innerHeight / 2, this.x, this.y, 10, 10);
        c.fillStyle = this.color;
        c.fill();
        c.strokeStyle = "red";
        c.stroke();
    }
    //this will refresh and update the canvas 
    update() {

        //c.clearRect(0, 0, canvas.width, canvas.height);   
        //console.log(Math.sqrt(Math.pow((mouse.x - this.x), 2) + Math.pow((mouse.y - this.y), 2)));
        // Math.abs(mouse.x - this.x);

        if (this.x > canvas.width - this.r || this.x < this.r)
            this.dx = -this.dx;
        if (this.y > canvas.height - this.r || this.y < this.r)
            this.dy = -this.dy;

        this.y += this.dy;
        this.x += this.dx;

        if ((mouse.x - this.x) < 150 && (mouse.x - this.x) > -150 &&
            (mouse.y - this.y) < 150 && (mouse.y - this.y) > -150) {
            if (this.r < this.MaxRadius)
                this.r += 20;

        }
        else if (this.r > this.MinRadius)
            this.r--;

        this.draw();
    }
}

//var cir = new circle(100, 100, 4, 4, 30); //just for debugging purpose
//Creates an array of objects

var objectArray = [];
for (var i = 0; i < 100; i++) {
    var r = 1 + Math.random() * 20;
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    objectArray.push(new circle(x, y, dx, dy, r));
}
//to fill extra space on resizing of the browser
fillExtra = () => {
    objectArray = [];
    for (var i = 0; i < 200; i++) {
        var r = 1 + Math.random() * 20;
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var dx = (Math.random() - 0.5) * 5;
        var dy = (Math.random() - 0.5) * 5;
        objectArray.push(new circle(x, y, dx, dy, r));
    }
}
fillExtra();
//to create an animate loop
animate = () => {

    c.clearRect(0, 0, canvas.width, canvas.height)
    for (var i = 0; i < objectArray.length; i++) {
        var DizzyCircle = objectArray[i];
        DizzyCircle.update();

    }
    requestAnimationFrame(animate)
}
animate();
console.log(innerWidth, innerHeight);
