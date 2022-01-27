class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.titleImg = createImg("abajo 2.png");
    this.title2Img = createImg("Titulo.png");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.titleImg.hide();
    this.title2Img.hide();
  }

  display(){
  
    this.input.position(300, 400);
    this.button.position(300, 450);
    this.titleImg.position(100,600);
    this.title2Img.position(100,1);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.titleImg.hide();
      this.title2Img.hide();


      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;


      player.addPlayer();
      player.updateCount(playerCount);


      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}
