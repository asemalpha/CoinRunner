class Game {
  constructor() {
    this.player = new Player(0, 50, playerScore);
    this.cheeses = [];
    this.obstacles = [];
    this.background = new Background();
    this.playerLost = false;
  }

  preload() {
    this.player.preload();
    this.background.preload();

    backgroundMusicLevel = loadSound("./sounds/level_sound.mp3");
    boing = loadSound("./sounds/boing.mp3");
    cheese = loadImage("./images/cheese.png");
    box = loadImage("./images/mouse_trap.png");
    grumpy = loadImage("./images/cat.png");
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
    if (frameCount % 100 === 0) {
      this.cheeses.push(new Cheese(cheese));
    }
    this.cheeses = this.cheeses.filter((cheese) => {
      cheese.drawCheese();
      return cheese.left >= -cheese.width;
    });
    if (this.playerLost) {
      image(grumpy, 400, 100, 600, 500);
      noLoop();
    }

    if (frameCount % 250 === 0) {
      this.obstacles.push(new Obstacle(box));
    }
    this.obstacles = this.obstacles.filter((box) => {
      box.drawObstacle();
      return box.left >= -box.width;
    });
    this.cheeses.forEach((cheese) => {
      if (this.isColliding(this.player, cheese)) {
        this.player.score++;
        //console.log("Cheesey cheesy");
        cheese.isEaten();
      }
    });
    this.obstacles.forEach((trap) => {
      if (this.isColliding(this.player, trap)) {
        //console.log("trapy trapy");
        this.playerLost = true;

        setTimeout(function () {
          location.reload();
        }, 2000);
        // this.player = new Player();
      }
    });

    this.cheeses = this.cheeses.filter((cheese) => {
      return !cheese.hasBeenEaten;
    });
  }

  isColliding(player, cheese) {
    const bottomOfA = player.top + player.height;
    const topOfB = cheese.top;
    const isBottomOfABiggerThenTopOfB = bottomOfA > topOfB;

    const topOfA = player.top;
    const bottomOfB = cheese.height + cheese.top;

    const isTopOfASmallerThanBottomOfB = topOfA <= bottomOfB;

    const leftOfA = player.left;
    const rightOfB = cheese.left + cheese.width;
    const isLeftOfASmallerThanRightOfB = leftOfA <= rightOfB;

    const rightOfA = player.width + player.left;
    const leftOfB = cheese.left;
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
