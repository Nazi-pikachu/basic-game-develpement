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
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//object blue print having draw and update methods
class circle {
    constructor(x, y, dx, dy, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
    }
    //this will draw a circle on canvas
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        c.fillStyle = "orange";
        c.fill();
        c.strokeStyle = "red";
        c.stroke();
    }
    //this will refresh and update the canvas
    update() {

        // c.clearRect(0, 0, canvas.width, canvas.height);
        if (this.x > canvas.width - this.r || this.x < this.r)
            this.dx = -this.dx;
        if (this.y > canvas.height - this.r || this.y < this.r)
            this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}
var cir = new circle(100, 100, 4, 4, 30);
//Creates an array of objects
var objectArray = [];
for (var i = 0; i < 100; i++) {
    var r = Math.random() * 30;
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var dx = (Math.random() - 0.5) * 20;
    var dy = (Math.random() - 0.5) * 20;
    objectArray.push(new circle(x, y, dx, dy, r));
}
//console.log(objectArray[0]);

//to create an animate loop
animate = () => {

    c.clearRect(0, 0, canvas.width, canvas.height)
    //c.clearRect(0, 0, canvas.width, canvas.height);
    //cir.draw();
    // cir.update();
    for (var i = 0; i < objectArray.length; i++) {
        var DizzyCircle = objectArray[i];
        DizzyCircle.draw();
        DizzyCircle.update();

    }
    //obejctArray[76].update();
    requestAnimationFrame(animate)
}
animate();
console.log(innerWidth, innerHeight);