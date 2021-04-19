class Polygon {
  constructor() {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };
    this.image = loadImage("polygon.png");

    this.body = Bodies.polygon(50, 200, 5, 20);
    World.add(world, this.body);
  }

  fly() {
    this.image.bodyA = null;
  }

  display() {
    var pos = this.body.position;

    image(this.image, pos.x, pos.y, 40, 40);
    imageMode(CENTER);
  }
}
