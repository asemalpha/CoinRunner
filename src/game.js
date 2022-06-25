class Game {
  constructor() {
    this.player = new Player();
    this.cheeses = [];
    this.obstacles = [];
    //this.coin = new Coin();
    this.background = new Background();
  }

  preload() {
    this.player.preload();
    this.background.preload();

    soundFormats("mp3", "ogg");
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
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
