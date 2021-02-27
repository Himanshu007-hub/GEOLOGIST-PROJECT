class Iron {
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.3,
        'friction':5,
        'density':1,
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
     // Matter.Bodies.trapezoid(x, y, width, height, slope, [options])
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      fill("white");
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  