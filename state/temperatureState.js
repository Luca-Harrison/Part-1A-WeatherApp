class TemperatrueState extends DefaultState {

  constructor(state, redMode, value) {
    super(state, redMode);

    this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
    this.addText("Temperature",25,8.5,4.6,colour(0,0,0))

    this.addBasicContent()

    this.addText("Temperature", 21, 25,5,colour(180, 200, 220));
    this.addText(value + "\u{00B0}C", 35.5, 31,6,colour(180, 200, 220));
    //Adds bottom navigation bar
    this.addNavigationBar();
    this.exc();
  }
}
