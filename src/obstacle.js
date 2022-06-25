class Obstacle {
  constructor(image) {
    this.height = 50;
    this.width = 50;
    this.image = image;
    this.top = random(290, CANVAS_HEIGHT - this.height - 5);

    this.left = CANVAS_WIDTH + 5;
    this.speed = random(1, 3);
    this.roundness = 20;
  }

  drawObstacle() {
    image(this.image, this.left, this.top, this.width, this.height);
    this.left -= this.speed;
  }
}
