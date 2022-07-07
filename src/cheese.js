class Cheese {
  constructor(image) {
    this.height = 40;
    this.width = 40;
    this.image = image;
    this.top = random(50, CANVAS_HEIGHT - this.height - 300);

    this.left = CANVAS_WIDTH + 5;
    this.speed = 1;
    this.hasBeenEaten = false;
  }

  drawCheese() {
    image(this.image, this.left, this.top, this.width, this.height);
    //rect(this.left, this.top, this.width, this.height );
    this.left -= this.speed;
  }

  isEaten() {
    this.hasBeenEaten = true;
  }
}
