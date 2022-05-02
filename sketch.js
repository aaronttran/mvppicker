var click1;
var img = [];
let bg;

function preload() {
  for (let i = 0; i <= 7; i++){
   img[i] = loadImage(`assets/player_${i}.JPG`)
 }
}

function setup() {
  bg = img[i];
  createCanvas(1600, 800);
  background(bg);
  textSize(45);
  textFont("Roboto Slab Black");
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);

  text("Who is Your NBA MVP This Season?", width / 2, height / 5.5);

  click1 = new Clickable();
  click1.locate(width / 2, height / 3);
  click1.strokeWeight = 1;
  click1.stroke = "#000000";
  click1.text = "Start";
  click1.textFont = "Segoe UI";
  click1.textSize = 20;
  click1.textScaled = true;
  click1.cornerRadius = 18;
  click1.onPress = function () {




  }
}

function draw() {
  click1.draw();

}
