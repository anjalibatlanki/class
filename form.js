class Form{
   constructor(){
    this.input = createInput("Name");
    this.button = createButton("PLAY");
    this.greeting = createElement('h3');
   }

   hide(){
       this.greeting.hide();
       this.input.hide();
       this.button.hide();
   }

   display(){
       var title = createElement('h2');
       title.html ("ANJALI'S CAR RACING GAME");
       title.position(130,0);

      
       this.input.position(130,160);
       this.button.position(250,200);

       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
           player.name = this.input.value();
           playerCount += 1;
           player.updateCount(playerCount);
           player.update();
           this.greeting.html("Helloooo "  + player.name);
           this.greeting.position(130,160);
       });
   }
}