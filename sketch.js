let gameState = "title";
var click1;
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
  textSize(100);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);

  push();
  click1 = new Clickable();
  click1.locate(0, 0);
  click1.width = displayWidth;
  click1.height = displayHeight;
  click1.color = "#FFFFFF00";
  click1.text = "Click Anywhere to Start";
  click1.textColor = "#FFFFFF";
  click1.textFont = "sans-serif";
  click1.textSize = 30;
  click1.textScaled = true;
  click1.cornerRadius = 18;
  pop();
//  click1.onPress = function() {

//  }
/*
  imageButton = new Clickable();
  imageButton.x = 0;
  imageButton.y = 0;
  imageButton.width = 1600;
  imageButton.height = 800;
  imageButton.image = img;
  imageButton.fitImage = true;
*/
}

function draw() {
  titleScreen();
/*  switch (gameState) {
    case "title":
      titleScreen();
      break;
    case "starter":
      gameStage1();
      break;
    case "choose1":
      gameStage2();
      break;
    case "choose2":
      gameStage3();
      break;
    case "choose3":
      gameStage4();
    case "winner":
      gameOver();
      break;
  }

  click1.draw();
  text("Who is Your NBA MVP This Season?", width / 2, height / 2.3);
  if (millis() - timerStart > timerLength){
    timerCount++; //increment the number of times the timer has reset

    //reset timerCount so you don't overrun the number of items in your array
    if (timerCount > numImgs){
      timerCount = 1;
    }

    //draw images to the canvas (the minus one is because arrays start their indexing from 0 not from 1)
    imageMode(CENTER);
    image(img[timerCount - 1], width/2, height/2, displayWidth, displayHeight);
    filter(BLUR, 4);

    timerStart = millis(); //reset start time of timer to new current time
  */
  }

  function titleScreen() {
    click1.draw();
    text("Who is Your NBA MVP This Season?", width / 2, height / 2.3);
    if (millis() - timerStart > timerLength){
      timerCount++; //increment the number of times the timer has reset

      //reset timerCount so you don't overrun the number of items in your array
      if (timerCount > numImgs){
        timerCount = 1;
      }

      //draw images to the canvas (the minus one is because arrays start their indexing from 0 not from 1)
      imageMode(CENTER);
      image(img[timerCount - 1], width/2, height/2, displayWidth, displayHeight);
      filter(BLUR, 4);

      timerStart = millis(); //reset start time of timer to new current time
  }
/*
  function gameStage1() {

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
