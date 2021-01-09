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
      var b = await database.ref('playerCount').once("value");
      if(b.exists()){
        playerCount = b.val()
        player.getCount();
      }
      form = new Form()
      form.display();
      background(bg_form);
      player1 = createSprite(400,50,20,20);
      player2 = createSprite(400,750,20,20);

      player1.addImage(player1_img);
      player2.addImage(player2_img);

      player1.scale = 0.05;
      player2.scale = 0.05;
      
      drones=[player1,player2];
    }
  }
  play(){
    form.hide();
    Player.getPlayerInfo();
      
    
  if(allPlayers !== undefined){
    background(bg_game);
    var index = 0;
    var y = 20;
    var x = 0;

     for(var plr in allPlayers){
       index+=1;
       y = y+760;
       x = displayWidth/2 - allPlayers[plr].x ;
  
       if(index === player.count){
          drones[index-1].x = mouseX;
          drones[index-1].y = mouseY;
      
       }
        }
        
}
drawSprites();
    }
  
}
