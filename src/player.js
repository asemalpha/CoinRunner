class Player {
  constructor() {
    this.left = 50;
    this.top = 0;
    this.width = 150;
    this.height = 150;
    this.velocity = 0;
    this.floor = 290;
  }

  preload() {
    this.img = loadImage("./images/dinosaur.png");
  }

  keyIsPressed() {
    if (keyCode === SPACE_BAR) {
      this.jump();
    }
  }

  jump() {
    this.top -= 200;
    console.log("jump, jump");

    this.velocity -= 5;
  }

  drawPlayer() {
    this.velocity += GRAVITY;
    this.top += this.velocity;
    image(this.img, this.left, this.top, this.width, this.height);

    if (this.reachedTheFloor()) {
      this.top = this.floor;
      this.velocity = 0;
    }
  }

  reachedTheFloor() {
    return this.top >= this.floor;
  }
}
