class Bob { //design/blueprint
    constructor(x, y, radius) { //properties
      var options = {
          'isStatic' :false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position; //NAMESPACING
      var angle = this.body.angle;
      push(); //adding new thing
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("purple");
      strokeWeight(4);
      ellipse(0, 0, this.radius, this.radius);
      pop(); //getting back to the old setting
    }
  }