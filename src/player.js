class Player {
  constructor(left, top, span) {
    this.left = left;
    this.top = top;
    this.width = 100;
    this.height = 150;
    this.velocity = 0;
    this.floor = 290;
    this.jumpCount = 0;
    this.score = 0;
    this.span = span;
  }

  preload() {
    this.img = loadImage("./images/cheesyDino.svg");
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
    this.span.innerText = this.score;
    this.velocity += GRAVITY;
    this.top += this.velocity;
    image(this.img, this.left, this.top, this.width, this.height);
    //rect(this.left, this.top, this.width, this.height);

    if (this.reachedTheFloor()) {
      this.top = this.floor;
      this.velocity = 0;
      this.jumpCount = 0;
    }
    if (keyIsDown(ARROW_LEFT)) {
      if (this.left > 0) {
        this.left -= 1;
      }
    }

    if (keyIsDown(ARROW_RIGHT)) {
      if (this.left < 500) {
        this.left += 1;
      }
    }
  }

  reachedTheFloor() {
    return this.top >= this.floor;
  }
}
