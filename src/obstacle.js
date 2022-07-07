class Obstacle {
  constructor(image) {
    this.height = 50;
    this.width = 50;
    this.image = image;
    this.top = random(350, CANVAS_HEIGHT - this.height - 10);

    this.left = CANVAS_WIDTH + 5;
    this.speed = 1;
    this.roundness = 20;
  }

  drawObstacle() {
    image(this.image, this.left, this.top, this.width, this.height);
    this.left -= this.speed;
  }
}
