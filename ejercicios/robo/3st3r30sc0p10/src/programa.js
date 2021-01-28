import './scss/estilos.scss';

const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');
const p = [];
const raton = { x: 0, y: 0 };

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function setup() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.onmousedown = () => {
        draw();
        for (let i = 0; i < 200; i++) {
            p.push(new particle());
        }
    }    
}
canvas.onmousemove = (e) => {
    raton.x = e.clientX;
    raton.y = e.clientY;
}

function draw() {
    fade();
    purge();
    for (let i = 0; i < p.length; i++){
        p[i].step();
        p[i].display();
    }
}

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
        this.x = raton.x;
        this.px = raton.x;
        this.y = raton.y;
        this.py = raton.y;
        this.dir = Math.random(0, 2 * Math.PI);
        this.mag = 5 * (((canvas.width / 1920) * aleatorio(0, 5)) + 0.1);
        this.xv = this.mag * Math.cos(this.dir);
        this.yv = this.mag * Math.sin(this.dir);
        this.size = aleatorio(1, 10);
        this.friction = 0.5;
        this.gravity = 0.2;
        function aleatorio(min, max) {
            return Math.random() * (max - min) + min;
        }
    }
    display() {
        ctx.beginPath();
        ctx.moveTo(this.px, this.py);
        ctx.lineTo(this.x, this.y);
        ctx.lineWidth = this.size;
        ctx.strokeStyle = '#fff';
        ctx.stroke();
    }
    step() {
        this.px = this.x;
        this.py = this.y;
        this.x += this.xv;
        this.y += this.yv;
        this.yv = this.gravity;
        //derecha
        if (this.x > canvas.width - (this.size / 2)) {
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




