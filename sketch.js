
  var wall1,wall2,wall3,wall4,wall5;
  var wall6,wall7,wall8,wall9,top;

function setup() {
  createCanvas(800,400);

}

function draw() {
  background(255,255,255);  
  wall1 =rect(220,200,60,200);
  wall2 =rect(300,200,60,200);
  wall3 =rect(380,200,60,200);
  wall4 =rect(460,200,60,200);

  wall5 =rect(200,250,18,800);
  wall6 =rect(280,250,18,800);
  wall7 =rect(360,250,18,800);
  wall8 =rect(440,250,18,800);
  wall9 =rect(520,250,18,800);

  top =triangle(300,200,370,100,440,200);








  
  drawSprites();
}