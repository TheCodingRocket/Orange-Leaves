let eraseEnable = false; 
let clearButton;
let canvas;
let lm;
let cb;
let bk;
let sm;
let ld;
let gb;
let bm;
let mr;
let mp;
let cm;
let me;
let au;

function setup() {
  
  au = createButton('Aqua');
  au.position(650, 0)
  au.mouseClicked(qaw);
  
  toggleBtn = createButton("Toggle erase"); 
  // toggleBtn.position(60, 0); 
  toggleBtn.mouseClicked(toggleErase); 
  
   textSize(20); 
  
  fill('black'); 
  text(""
         + " ", 20, 30); 
  
 
  canvas = createCanvas(windowWidth, windowHeight);
  clearButton = createButton('clear');
  // lm = createButton('Lime');
  cb = createButton('Pink');
  bk = createButton('Dark');
  sm = createButton('LightStroke');
  ld = createButton('Lime');
  gb = createButton('Golden');
  bm = createButton('Dark Blue');
  mr = createButton('Magic Red');
  mp = createButton('Purple');
  cm = createButton('Cyan');
  me = createButton('Circles');
  
  clearButton.position(0, 0);
  cb.position(46,0);
  bk.position(89, 0);
  sm.position(134, 0);
  ld.position(218, 0);
  gb.position(264, 0);
  bm.position(324, 0);
  mr.position(400, 0);
  mp.position(481, 0);
  cm.position(537, 0);
  me.position(585, 0);
  
  clearButton.mousePressed(clearCanvas);
  // lm.mousePressed(l);
  cb.mousePressed(b);
  bk.mousePressed(d);
  sm.mousePressed(m);
  ld.mousePressed(c);
  gb.mousePressed(g);
  bm.mousePressed(a);
  mr.mousePressed(f);
  mp.mousePressed(j);
  cm.mousePressed(x);
  me.mousePressed(h);
  
  background(255);
}

function clearCanvas() {
  background(255);
}

// function l() {
//   fill(200, 255, 0);
//   ellipse(mouseX, mouseY, 10, 10);
// }

function b() {
  background('#fae');
}

function d() {
  background('#222222');
}

function m() {
  strokeWeight(1); // Lighter
line(mouseX, mouseY, pmouseX, pmouseY);
}

function c() {
  background('rgb(0,255,0)');
}

function g() {
  background(255, 204, 0);
}

function a() {
  colorMode(HSB);
background(255, 204, 100);
}

function f() {
  background('rgb(100%,0%,10%)');
}

function j() {
  background('rgba(100%,0%,100%,0.5)');
}

function x() {
  background(0, 900, 900);
}

function h() {
  fill('red');
  ellipse(mouseX, mouseY, 25, 25);
}

function toggleErase() { 
  
  if (eraseEnable) { 
    noErase(); 
    eraseEnable = false; 
  } 
  else { 
    erase(); 
    eraseEnable = true; 
  } 
} 

function qaw() {
  background('aqua');
}

let value = 0;

function draw() {
 if (mouseIsPressed) {
  
   stroke(10);
    strokeWeight(7);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
 }
