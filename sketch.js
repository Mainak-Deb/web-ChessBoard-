var sx=440,sy=20,l=80;
var bb,bg,bh,bm,bn,br,wb,wg,wh,wm,wn,wr;
var ci=4,cj=4;
var ti,tj,fi,fj;
var toggle=false,state=true;

var chess=[
  [4,1,2,5,3,2,1,4],
  [0,0,0,0,0,0,0,0],
  [100,100,100,100,100,100,100,100],
  [100,100,100,100,100,100,100,100],
  [100,100,100,100,100,100,100,100],
  [100,100,100,100,100,100,100,100],
  [6,6,6,6,6,6,6,6],
  [6+4,6+1,6+2,6+5,6+3,6+2,6+1,6+4]
]
function preload() {
  bb = loadImage('Image/b_bore-removebg-preview.png');
  bg = loadImage('Image/b_ghora-removebg-preview.png');
  bm = loadImage('Image/b_hati-removebg-preview.png');
  bh = loadImage('Image/b_montri-removebg-preview.png');
  bn = loadImage('Image/b_nouka-removebg-preview.png');
  br = loadImage('Image/b_raja-removebg-preview.png');

  wb = loadImage('Image/w_bore-removebg-preview.png');
  wg = loadImage('Image/w_ghora-removebg-preview.png');
  wm = loadImage('Image/w_hati-removebg-preview.png');
  wh = loadImage('Image/w_montri-removebg-preview.png');
  wn = loadImage('Image/w_nouka-removebg-preview.png');
  wr = loadImage('Image/w_raja-removebg-preview.png');
}

function setup() {
  createCanvas(1530,700);
}
function draw() {
  background(150);
  var ghuti=[bb,bg,bh,bm,bn,br,wb,wg,wh,wm,wn,wr];
  for (let i = 0; i < 8; i++) {  
    for (let j = 0; j < 8; j++) {
      
      if((i+j)%2==0) {
        fill(255,255,255);
      }else {
        fill(0,0,0);
      }
      rect(sx+j*l,sy+i*l,l,l);
      if(chess[i][j]<12) {
        image(ghuti[chess[i][j]],sx+j*l,sy+i*l,l,l);
      }
      
    }
  }
  if(((sx<mouseX) && (mouseX<(sx+(l*8))) )&& ( (sy<mouseY) && (mouseY<(sy+(l*8))))){
    cj= parseInt((mouseX-sx)/l);
    ci= parseInt((mouseY-sy)/l);
    //print(ci,cj)
    fill(0,255,0);
    rect(sx+cj*l,sy+ci*l,l,l);
    if(chess[ci][cj]<12) {
      image(ghuti[chess[ci][cj]],sx+cj*l,sy+ci*l,l,l);
    }
    
  }
  if(toggle==false){
    print(toggle,state);
      if (state==false) {
        if(chess[ci][cj]!=100){
        ti=ci;tj=cj;
        toggle=true;}
      }
      else{
        state=true;
      } 
  }
  if(toggle){
      fill(255,255,0);
      print(toggle,state);
      rect(sx+tj*l,sy+ti*l,l,l);
      if(chess[ti][tj]<12) {
        image(ghuti[chess[ti][tj]],sx+tj*l,sy+ti*l,l,l);
      }
      if (state==true) {
        fi=ci;fj=cj;
        toggle=false;
        swap(ti,tj,fi,fj);
      }

  }
}
function mouseClicked() {
  
  if(state==false){
    state=true;
  }else if((state==true) &&(chess[ci][cj]!=100)){
    state=false;
  }
}
function swap(i1,j1,i2,j2){
  var temp=chess[i1][j1];
  chess[i1][j1]=chess[i2][j2];
  chess[i2][j2]=temp;
}