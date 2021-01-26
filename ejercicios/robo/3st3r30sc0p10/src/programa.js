import './scss/estilos.scss';

const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');
const p = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function setup() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (canvas.onmousedown) {
        draw();
        for (let i = 0; i < 200; i++) {
            p.push(new particle());
        }
    } 
}

function draw() {
    fade();
    purge();
    for (let i = 0; i < p.length; i++){
        p.indexOf(i).step();
        p.indexOf(i).display();
    }
}
// function mousePressed() {
//     if (canvas.onmousedown) {
//         draw();
//         for (let i = 0; i < 200; i++) {
//             p.push(new particle());
//         }
//     } 
// }
//

function fade() {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'
    ctx.rect(0, 0, canvas.width, canvas.height);
}
function getDistance(x1, y1, x2, y2) { 
	var xDiff = x1 - x2; 
	var yDiff = y1 - y2; 
	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

function purge() {
    for (let i = 0; i < p.length; i++){
        let x1 = 0;
        let y1 = 0;
        let x2 = p.indexOf(i).xv;
        let y2 = p.indexOf(i).yv;
        if (getDistance(x1, y1, x2, y2) < 0.2 && p.indexOf(i).y > height*0.99 - p.indexOf(i).length) {
            p.splice(i, i);
        }
    }
}

class particle {
    constructor(x, px, y, py, dir, mag, xv, yv, size, friction, gravity) {
        this.x = parseFloat(mouseX);
        this.px = parseFloat(x);
        this.y = parseFloat(mouseY);
        this.py = parseFloat(y);
        this.dir = parseFloat(Math.random(0, TWO_PI));
        this.mag = parseFloat(5 * (((width / 1920) * Math.random(0, 5)) + 0.1));
        this.xv = parseFloat(mag * Math.cos(dir));
        this.yv = parseFloat(mag * Math.sin(dir));
        this.size = parseFloat(Math.random(1, 10));
        this.friction = parseFloat(0.5);
        this.gravity = parseFloat(0.2)
    }
    display() {
        ctx.beginPath();
        ctx.moveTo(this.px, this.py);
        ctx.lineTo(this.x, this.y);
        ctx.lineWidth(this.size);
        ctx.strokeStyle = '#fff';
        ctx.stroke();
    }
    setup() {
        this.px = this.x;
        this.py = this.y;
        this.x += this.xv;
        this.y += this.yv;
        this.yv = this.gravity;
        //derecha
        if (this.x > width - (this.size / 2)) {
            this.x -= this.xv;
            this.xv = -this.friction * Math.abs(this.xv);
            this.yv *= this.friction;
            while (this.x > canvas.width - (this.size / 2)) {
                this.x -= 0.1;
            }
        }
        //izquierda
        if (this.x < 0 + (this.size / 2)) {
            this.x -= this.xv;
            this.xv = this.friction * Math.abs(this.xv);
            this.yv *= this.friction;
            while (this.x < 0 * (this.size / 2)) {
                this.x += 0.1;
            }
        }
        //abajo
        if (this.y > canvas.height - (this.size / 2)) {
            this.y -= this.yv;
            this.yv = -this.friction * Math.abs(this.yv);
            this.xv *= this.friction;
            while (this.y > canvas.height - (this.size / 2)) {
                this.y -= 0.1;
            }
        }
        //arriba
        if (this.y < 0 + (this.size / 2)) {
            this.y -= this.yv;
            this.yv = this.friction * Math.abs(this.yv);
            this.xv *= this.friction;
            while (this.y < 0 + (this.size / 2)) {
                this.y += 0.1;
            }
        }
    }
}


window.onresize = resize();
setup();




