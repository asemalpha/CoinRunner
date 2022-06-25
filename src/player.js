class Player {
  constructor() {
    this.left = 50;
    this.top = 0;
    this.width = 150;
    this.height = 150;
    this.velocity = 0;
    this.floor = 290;
    this.jumpCount = 0;
  }

  preload() {
    this.img = loadImage("./images/dinosaur.png");
  }

  keyPressed() {
    if (keyCode === SPACE_BAR) {
      this.jump();
    }
  }

  jump() {
    if (this.jumpCount === 2) {
      return;
    }
    this.top -= 50;

    this.velocity -= 5;
    this.jumpCount++;
    boing.play();
    boing.setVolume(0.1);
  }

  drawPlayer() {
    this.velocity += GRAVITY;
    this.top += this.velocity;
    image(this.img, this.left, this.top, this.width, this.height);

    if (this.reachedTheFloor()) {
      this.top = this.floor;
      this.velocity = 0;
      this.jumpCount = 0;
    }
  }

  reachedTheFloor() {
    return this.top >= this.floor;
  }
}
