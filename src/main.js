const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  backgroundMusicLevel.play();
  backgroundMusicLevel.loop();
  backgroundMusicLevel.setVolume(0.1);
  userStartAudio();
}

function draw() {
  game.play();
}

function keyPressed() {
  game.keyPressed();
}
