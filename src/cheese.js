class Cheese {
  constructor() {
    this.height = 50;
    this.width = 50;

    this.top = random(50, CANVAS_HEIGHT - this.height - 5);

    this.left = CANVAS_WIDTH + 5;
    this.speed = random(1, 3);
    this.roundness = 20;
  }

  preload() {
    this.img = loadImage("./images/cheese.png");
  }

  drawCheese() {
    rect(this.left, this.top, this.width, this.height, this.roundness);
    this.left -= this.speed;
    console.log("Cheese");
  }
}
