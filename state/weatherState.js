class WeatherState extends DefaultState {
  constructor(state, redMode) {
    super(state, redMode);

    this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
    let bottomBar = this.addRRect(5, 70, 90, 105, 4, colour(180, 200, 220));

    let buttons = [];
    let buttonMode = -1;

    let inc = 56 / 7;
    for (let i = 0; i < 7; i++) {
      buttons[i] = this.addButton(7, 13.5 + inc * i, 86, inc - 1, 4, colour(40), colour(15), colour(100), 2);
      buttonMode = 0;
    }

    this.toggleButton = this.addButton(7, 94, 10, 5, 2, colour(200, 220, 240), colour(160, 180, 200));

    for (let i = 0; i < 7; i++) {

      buttons[i].addScript(() => {
        if (buttonMode != i) {
          buttons[i].setH(3 * inc - 1 + 8);
          buttons[i].setY(13.5 + inc * i);

          for (let j = 0; j < i; j++) {
            buttons[j].setH(inc - 1);
            buttons[j].setY(13.5 + inc * j);
          }
          for (let j = i + 1; j < 7; j++) {
            buttons[j].setH(inc - 1);
            buttons[j].setY(21.5 + inc * (j + 2));
          }

          bottomBar.setY(70 + 2 * inc + 8);
          buttonMode = i;
        } else {
          buttons[i].setH(inc - 1);
          buttons[i].setY(13.5 + inc * i);

          for (let j = 0; j < 7; j++) {
            buttons[j].setY(13.5 + inc * j);
          }

          bottomBar.setY(70);
          buttonMode = -1;
        }
      });

    }

    if (firstTime()) {
      state.changeState(new LocationState(this.state, this.redMode));
    }

    this.toggleButton.addScript(() => {
      this.toggleRedMode();
    });

    this.exc();
  }
}
