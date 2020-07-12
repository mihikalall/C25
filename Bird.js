//BaseClass inherits this code with keyWord extend
class Bird extends BaseClass{
  constructor(x,y){
//constructor in BaseClass inherits this code
    super(x,y,50,50);
//loads image 
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}