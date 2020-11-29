class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visible = 255;
  }

  display(){
    //console.log(this.body.speed);

    if(this.body.speed < 3){
      super.display();
    }else {
      //pigs destroyed
      World.remove(world, this.body);
      var pos  = this.body.position;
      this.visible -= 4;
      push();
      tint(255, this.visible);
      image(this.image, pos.x, pos.y, 50, 50);
      pop();
    }
    
  }

};