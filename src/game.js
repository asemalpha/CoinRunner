class Game {
  constructor() {
    this.player = new Player();
    //this.coin = new Coin();
    this.background = new Background();
  }

  preload() {
    this.player.preload();
    this.background.preload();
    soundFormats("mp3", "ogg");
    backgroundMusicLevel = loadSound("./sounds/level_sound.mp3");
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
  }

  keyIsPressed() {
    this.player.keyIsPressed();
  }
  /*
  backGroundMusic() {
    backgroundMusicLevel.play();
    backgroundMusicLevel.loop();
    backgroundMusicLevel.setVolume(0.3);
    userStartAudio();
  }
  */
}
