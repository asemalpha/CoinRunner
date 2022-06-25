class Obstacle {
  constructor() {
    this.height = 50;
    this.width = 50;

    this.top = random(290, CANVAS_HEIGHT - this.height - 5);

    this.left = CANVAS_WIDTH + 5;
    this.speed = 1;
    this.roundness = 20;
  }

  preload() {
    this.img = loadImage("./images/box.png");
  }

  drawObstacle() {
    rect(this.left, this.top, this.width, this.height, this.roundness);
    this.left -= this.speed;
  }
}
