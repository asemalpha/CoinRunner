class Game {
  constructor(span) {
    this.player = new Player(playerScore);
    this.cheeses = [];
    this.obstacles = [];
    //this.coin = new Coin();
    this.background = new Background();
  }

  preload() {
    this.player.preload();
    this.background.preload();

    // soundFormats("mp3", "ogg");
    backgroundMusicLevel = loadSound("./sounds/level_sound.mp3");
    boing = loadSound("./sounds/boing.mp3");
    cheese = loadImage("./images/cheese.png");
    box = loadImage("./images/box.png");
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
    if (frameCount % 75 === 0) {
      this.cheeses.push(new Cheese(cheese));
    }
    this.cheeses = this.cheeses.filter((cheese) => {
      cheese.drawCheese();
      return cheese.left >= -cheese.width;
    });

    if (frameCount % 100 === 0) {
      this.obstacles.push(new Obstacle(box));
    }
    this.obstacles = this.obstacles.filter((box) => {
      box.drawObstacle();
      return box.left >= -box.width;
    });
    this.cheeses.forEach((cheese) => {
      if (this.isColliding(cheese)) {
        this.player.score++;
        console.log("Cheesey cheesy");
      }
    });
  }

  isColliding(cheeses) {
    const bottomOfA = this.player.top + this.player.height;
    const topOfB = cheeses.top;
    const isBottomOfABiggerThenTopOfB = bottomOfA > topOfB;

    const topOfA = this.player.top;
    const bottomOfB = cheeses.top + cheeses.top;

    const isTopOfASmallerThanBottomOfB = topOfA <= bottomOfB;

    const leftOfA = this.player.left;
    const rightOfB = cheeses.left + cheeses.width;
    const isLeftOfASmallerThanRightOfB = leftOfA <= rightOfB;

    const rightOfA = this.player.width + this.player.left;
    const leftOfB = cheeses.left;
    const isRightOfABiggerThanLeftOfB = rightOfA >= leftOfB;

    return (
      isBottomOfABiggerThenTopOfB &&
      isTopOfASmallerThanBottomOfB &&
      isLeftOfASmallerThanRightOfB &&
      isRightOfABiggerThanLeftOfB
    );
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
