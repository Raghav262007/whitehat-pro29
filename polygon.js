class Polygon {
  constructor() {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };
    this.polygon_img = loadImage("polygon.png");

    this.polygon = Bodies.polygon(50, 200, 5, 20);
    World.add(world, this.polygon);
  }

  fly() {
    this.polygon.bodyA = null;
  }

  display() {
    image(this.polygon_img, 100, 200, 40, 40);

    imageMode(CENTER);
  }
}
