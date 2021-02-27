class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':5,
      }
      this.body = Bodies.rectangle(x, y, 200,150, options);
      this.width =200;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      pos.x=mouseX;
      pos.y=mouseY;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      fill("white");
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  