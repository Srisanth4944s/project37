var gameState = 0
var playerCount ,database ,form,player,game
var allPlayer
var runner1,runner2,runner3,runner4,runners

function setup() {
  createCanvas(displayWidth-10,displayHeight)
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw(){

  if(playerCount === 4){
    game.update(1)
  }
  if(gameState === 1){
    clear()
    game.play()
  }
}
