let angle = 0;
let varcol = 0;




function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noStroke();

  buttonDay = createButton('Day');
  buttonDay.position(300, 300);
  buttonDay.mousePressed(theDay);

  buttonNight = createButton('Night');
  buttonNight.position (100,300);
  buttonNight.mousePressed(theNight);

  slider = createSlider(180, 360, 180);
  slider.position(100,250);
  slider.style('width', '200px');
}

function draw() {
  background(255, 0, 0);
  // 
 
  
  // fill(0, 102, 102);
  // rect(0,200,400,250);

  push();
  translate(width/2, height/2);
  rotate(angle);
  fill(225);
  ellipse(0, -100, 50, 50);
  fill(100);
  ellipse(0, 100, 50, 50);
  pop();

 
  // fill(0,102,varcol);
  // rect(0, 200, 400, 250)
  // fill(0,102, varcol);
  // rect(0, 200, 400, 250);
  

  angle = slider.value();
  // varcol2 =  map(angle, 180, 360, 50 , 255);
  // background(varcol2, 50, 0);
  varcol =  map(angle, 180, 360, 0 , 255);
  rect(0, 200, 400, 250);
  fill(varcol, 102, 102);
  // background(0, varcol, 255);


}

function theDay(){
  angle = 360; 
  slider.value(360);
}

function theNight(){
  angle = 180;
  slider.value(180);
}