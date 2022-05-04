let gameState = "title";
//let canvas;
var click1;
var kDurant;
var jTatum;
var dBooker;
let timerStart = 0; //variable to hold the start time of each iteration of the timer
let timerLength = 100; //length of the timer (in milliseconds)
let timerCount = 0; //number of times the timer has reset
let img = [];
let numImgs = 6;

function preload(){
  img[0] = loadImage('assets/player_0.jpeg');
  img[1] = loadImage('assets/player_1.jpeg');
  img[2] = loadImage('assets/player_2.jpeg');
  img[3] = loadImage('assets/player_3.jpeg');
  img[4] = loadImage('assets/player_4.jpeg');
  img[5] = loadImage('assets/player_5.jpeg');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
//  canvas.mousePressed(mousePressed);
//  canvas.parent("sketch-holder");
//  frameRate(60);

  textSize(70);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);

  click1 = new Clickable();
  click1.locate(width/2, height/2);
  click1.width = width/8;
  click1.height = height/8;
  click1.color = "#FFFFFF00";
  click1.text = "Click Anywhere to Start";
  click1.textColor = "#FFFFFF";
  click1.textFont = "sans-serif";
  click1.textSize = 30;
  click1.textScaled = true;
  click1.cornerRadius = 18;
  click1.onPress = function() {
    if (gameState === "title") {
      gameState = "starter";
    }
  }


  kDurant = new Clickable();
  kDurant.x = width / 4;
  kDurant.y = height/2;
  kDurant.width = width / 2;
  kDurant.height = height / 2;

  jTatum = new Clickable();
  jTatum.x = width / 8;
  jTatum.y = height/2;
  jTatum.width = width / 2;
  jTatum.height = height / 2;

  dBooker = new Clickable();
  dBooker.x = width / 1.3;
  dBooker.y = height/2;
  dBooker.width = width / 2;
  dBooker.height = height / 2;
}

function draw() {
  switch (gameState) {
    case "title":
      titleScreen();
      break;
    case "starter":
      background(200);
//      gameStage1();
      break;
/*    case "durant":
      gameChoice1();
      break;
    case "tatum":
      gameChoice2();
      break;
    case "booker":
      gameChoice3();
    case "picker1":
      gameStage2();
      break;
    case "winner":
      gameOver();
      break;
      */
  }
  }

/*function mousePressed() {

  gameState = "starter";
}
*/

  function titleScreen() {
    click1.draw();
    text("Who is Your NBA MVP This Season?", width / 2, height / 2.3);
    push();
    if (millis() - timerStart > timerLength){
      timerCount++; //increment the number of times the timer has reset

      //reset timerCount so you don't overrun the number of items in your array
      if (timerCount > numImgs){
        timerCount = 1;
      }

      //draw images to the canvas (the minus one is because arrays start their indexing from 0 not from 1)
      imageMode(CENTER);
      image(img[timerCount - 1], width/2, height/2, displayWidth, displayHeight);
      filter(BLUR, 5);

      timerStart = millis(); //reset start time of timer to new current time
  }
  pop();

/*
  function gameStage1() {
    kDurant.draw();
    jTatum.draw();
    dBooker.draw();
    background("#FFFFFF");
    text("Select One Player to Advance");

  }

  function gameStage2() {

  }

  function gameStage3() {

  }

  function gameStage4() {

  }

  function gameOver() {

  }
*/
}
