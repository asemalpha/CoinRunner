class Background {
  constructor() {
    this.left = 0;
  }

  preload() {
    this.img = loadImage(
      "./images/wooden_table_looking_out_to_a_defocussed_kitchen_3107.jpg"
    );
  }
  drawBackground() {
    image(this.img, this.left, 0, CANVAS_WIDTH, 500);
    image(this.img, this.left + CANVAS_WIDTH, 0, CANVAS_WIDTH, 500);

    this.left -= 4;

    if (this.left <= -CANVAS_WIDTH) {
      this.left = 0;
    }
  }
}
