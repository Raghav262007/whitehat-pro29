class SlingShot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10,
    };
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    this.sling.bodyA = null;
  }

  attach() {
    sling2 = new SlingShot(polygon.body, { x: 120, y: 220 });
    function mouseDragged() {
      Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
    }

    function mouseReleased() {
      sling2.fly();
    }
  }

  display() {
    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
