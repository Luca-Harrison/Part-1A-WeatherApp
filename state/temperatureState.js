class TemperatrueState extends DefaultState {

  constructor(state, redMode) {
    super(state, redMode);

    this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
    this.addText("Temperature",25,8.5,4.6,colour(0,0,0))
    this.addImage('graphs1.png', 8,40,84,27.6);

    let back = this.addButton(8.5, 4.5, 10.2, 5.1, 4, colour(180,200,220),colour(167, 186, 204));
    this.addImage('images/back-arrow.svg', 8.5,4.5,10,5);

    let location = "Cambridge"
    let value = 18

    back.addScript(() => {
      this.state.changeState(new WeatherState(this.state, this.redMode));
    });

    this.addText(location, 30, 20,4,colour(180, 200, 220));
    this.addText("Temperature", 21, 25,5,colour(180, 200, 220));
    this.addText(value + "\u{00B0}C", 35.5, 31,6,colour(180, 200, 220));
    //Adds bottom navigation bar
    this.addNavigationBar();
    this.exc();
  }
}
