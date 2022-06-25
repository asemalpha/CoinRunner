class Cheese {
  constructor(image) {
    this.height = 50;
    this.width = 50;
    this.image = image;
    this.top = random(50, CANVAS_HEIGHT - this.height - 250);

    this.left = CANVAS_WIDTH + 5;
    this.speed = 1;
    this.roundness = 20;
  }

  drawCheese() {
    image(this.image, this.left, this.top, this.width, this.height);
    this.left -= this.speed;
  }
}
