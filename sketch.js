var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var aliens, alien1,alien2;
var laberinto;

function preload(){
  //back_img = loadImage("LABERINTO.png");

  laberinto= loadImage("LABERINTO.png");


  
}


function setup(){
  canvas = createCanvas(670,470);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
