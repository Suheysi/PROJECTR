class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    alien1= createSprite(100,200);
    alien1.addImage("alien1","BLUE MONSTER.png");
    
    alien2 = createSprite(300,200);
    alien2.addImage("alien2","PINK MONSTER.png");
    
    aliens = [alien1, alien2];
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();


    if(allPlayers !== undefined){
      //var display_position = 100;
      
    // se agrega el FONDO OK
      background(laberinto,0,0);

      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y = 400;
        
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = 400;
        aliens[index-1].x = x;
        aliens[index-1].y = y;
    
     
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.y -=10;
      player.update();
    } else if(keyIsDown(DOWN_ARROW) && player.index !== null){
     player.y +=10;
     player.update();
    }else if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.x -=10;
      player.update();
    }else if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.x +=10;
      player.update();
    }
  }
}
