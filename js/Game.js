class Game{
    constructor(){}
    getState(){
        var gameStateref = database.ref('gameState')
        gameStateref.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
         
        }
        runner1 = createSprite(100,200);
        runner2 = createSprite(300,200);
        runner3 = createSprite(500,200);
        runner4 = createSprite(700,200)
        runners = [runner1,runner2,runner3,runner4]    
    }

    play(){
        form.hide()
         Player.getPlayerInfo()


        if(allPlayer !== undefined){
           // var Displayposition = 180

           var index= 0;
           var x = 0
           var y;  
        for(var plr in allPlayer){

            index = index+1
            
            x = x+200;
            y = displayHeight-allPlayer[plr].distance;

            runners[index-1].x = x;
            
            runners[index-1].y = y;

            if(index === player.index){
                runners[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2
                camera.position.y = runners[index-1].y
            }
            
            
        }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 20
            player.update()
        }
        drawSprites();
    }
}