class Game {
  constructor() {
    this.player = new Player();
    this.cheeses = [];
    //this.coin = new Coin();
    this.background = new Background();
  }

  preload() {
    this.player.preload();
    this.background.preload();

    soundFormats("mp3", "ogg");
    backgroundMusicLevel = loadSound("./sounds/level_sound.mp3");
    boing = loadSound("./sounds/boing.mp3");
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
    if (frameCount % 75 === 0) {
      this.cheeses.push(new Cheese());
    }

    this.cheeses = this.cheeses.filter((cheese) => {
      cheese.drawCheese();
      return cheese.left >= -cheese.width;
    });
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
