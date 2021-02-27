class Rubber {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1,
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.radius = 50;
      
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
      ellipseMode(RADIUS);
      fill("green");
      ellipse(0, 0,this.radius,this.radius);
      pop();
    }
  };
