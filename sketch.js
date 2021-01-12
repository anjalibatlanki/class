var canvas, backgroundImg;
var gameState = 0, playerCount, database;
var form, player, game;
var allPlayers;

function setup(){
   createCanvas(400,400);
   database = firebase.database();
   game = new Game();
   console.log("Setup working");
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