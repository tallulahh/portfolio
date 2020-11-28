const canvas2 = document.getElementById("canvas2");
const canvas3 = document.getElementById("canvas");
const ctx = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
canvas3.width = innerWidth / 2;
canvas3.height = innerHeight;

let particlesArray;
let particlesArray2;

let mouse = {
  x: null,
  y: null,
  radius: (canvas2.height/100) * (canvas2.width/100)
};

window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
});

class Particle{
  constructor(x, y, dx, dy, size, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.color = color;
}
  //method to draw
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
//     ctx.shadowBlur = 10;
//     ctx.shadowColor = '#f736ce';
    ctx.fillStyle = '#f736ce';
    ctx.fill();
  }
  //check particle position, move particle and draw particles
  update() {
    if (this.x > canvas2.width || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y > canvas2.height || this.y < 0) {
      this.dy = -this.dy;
    }
    // Collision detections - mouse position
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    if (distance < mouse.radius + this.size){
      if (mouse.x < this.x && this.x < canvas2.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10){
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas2.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }
    // move particle
    this.x += this.dx;
    this.y += this.dy;
    // draw particle
    this.draw();
  }
}

class Particle2{
  constructor(x, y, dx, dy, size, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.color = color;
}
  //method to draw
  draw() {
    ctx3.beginPath();
    ctx3.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
//     ctx3.shadowBlur = 10;
//     ctx3.shadowColor = '#f736ce';
    ctx3.fillStyle = '#f736ce';
    ctx3.fill();
  }
  //check particle position, move particle and draw particles
  update() {
    if (this.x > canvas3.width || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y > canvas3.height || this.y < 0) {
      this.dy = -this.dy;
    }
    // Collision detections - mouse position
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    if (distance < mouse.radius + this.size){
      if (mouse.x < this.x && this.x < canvas3.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10){
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas3.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }
    // move particle
    this.x += this.dx;
    this.y += this.dy;
    // draw particle
    this.draw();
  }
}

function init() {
  particlesArray = [];
  let numberOfParticles = 100;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = (Math.random() * 5) + 1;
    let x = (Math.random() * ((innerWidth - size *2) - (size * 2)) + size * 2);
    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
    let dx = (Math.random() * 5) - 2.5;
    let dy = (Math.random() * 5) - 2.5;
    let color = '#f736ce';

    particlesArray.push(new Particle(x, y, dx, dy, size, color));
  }
}

function init2() {
  particlesArray2 = [];
  let numberOfParticles = 50;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = (Math.random() * 5) + 1;
    let x = (Math.random() * ((innerWidth - size *2) - (size * 2)) + size * 2);
    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
    let dx = (Math.random() * 5) - 2.5;
    let dy = (Math.random() * 5) - 2.5;
    let color = '#f736ce';

    particlesArray2.push(new Particle2(x, y, dx, dy, size, color));
  }
}

function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray.length; a++) {
    for( let b = a; b < particlesArray.length; b++) {
      let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a]. y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
      if (distance < (canvas2.width/7) * (canvas2.height/7)) {
        opacityValue = 1 - (distance/20000);
        ctx.strokeStyle='rgba(247, 54, 206, ' + opacityValue + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function connect2() {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray2.length; a++) {
    for( let b = a; b < particlesArray2.length; b++) {
      let distance = ((particlesArray2[a].x - particlesArray2[b].x) * (particlesArray2[a].x - particlesArray2[b].x)) + ((particlesArray2[a]. y - particlesArray2[b].y) * (particlesArray2[a].y - particlesArray2[b].y));
      if (distance < (canvas3.width/7) * (canvas3.height/7)) {
        opacityValue = 1 - (distance/20000);
        ctx3.strokeStyle='rgba(247, 54, 206, ' + opacityValue + ')';
        ctx3.lineWidth = 1;
        ctx3.beginPath();
        ctx3.moveTo(particlesArray2[a].x, particlesArray2[a].y);
        ctx3.lineTo(particlesArray2[b].x, particlesArray2[b].y);
        ctx3.stroke();
      }
    }
  }
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx3.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
  for (let j = 0; j < particlesArray2.length; j++) {
    particlesArray2[j].update();
  }
  connect2();

}

window.addEventListener("resize", function(){
  canvas2.width = innerWidth;
  canvas2.height = innerHeight;
  mouse.radius = ((canvas2.height/80) * (canvas2.height/80));
});

window.addEventListener("mouseout", function(){
  mouse.x = undefined;
  mouse.y = undefined;
});

  init();
  init2();
  animate();
