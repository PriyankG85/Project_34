class Ground {
    constructor(x,y,width,height, c) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.c = c;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.c);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
