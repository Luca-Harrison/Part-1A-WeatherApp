class DefaultState {


  constructor(state, redMode) {
    this.objectList = [];
    
    this.state = state;
    this.redMode = redMode;
  }

  addButton(x, y, w, h, r, fillColour, hoverColour, strokeColour, strokeWidth) {
    let btn = new Button(x, y, w, h, r, fillColour, hoverColour, strokeColour, strokeWidth);
    this.objectList.push(btn);
    return btn;
  }

  addTextbox(defaultText, x, y, w, h, r, fillColour, typingColour, textColour, strokeColour, strokeWidth) {
    let textbox = new StateTextbox(defaultText, x, y, w, h, r, fillColour, typingColour, textColour, strokeColour, strokeWidth);
    this.objectList.push(textbox);
    return textbox;
  }

  addSlider(x, y, w, h, r, fillColour, hoverColour, strokeColour, strokeWidth) {
    let sld = new StateSlider(x, y, w, h, r, fillColour, hoverColour, strokeColour, strokeWidth);
    this.objectList.push(sld);
    return sld;
  }

  addRRect(x, y, w, h, r, fillColour, strokeColour, strokeWidth) {
    let rct = new RoundedRect(x, y, w, h, r, fillColour, strokeColour, strokeWidth);
    this.objectList.push(rct);
    return rct;
  }

  addText(txt, x, y, size, fillColour) {
    let txtObj = new StateText(txt, x, y, size, fillColour);
    this.objectList.push(txtObj);
    return txtObj;
  }

  addImage(src, x, y, w, h) {
    let imgObj = new StateImage(src, x, y, w, h);
    this.objectList.push(imgObj);
    return imgObj;
  }

  addNavigationBar() {

      let bottomBar = this.addRRect(5, 93, 90, 105, 4, colour(180, 200, 220));

      let settingsButton = this.addButton(6, 94, 28, 5.5, 2, colour(180, 200, 220), colour(160, 180, 200));
      let weatherButton = this.addButton(36, 94, 28, 5.5, 2, colour(180, 200, 220), colour(160, 180, 200));
      let planetsButton = this.addButton(66, 94, 28, 5.5, 2, colour(180, 200, 220), colour(160, 180, 200));
      this.addImage('images/SettingsImage.png', 16, 95, 8, 4);
      this.addImage('images/CloudImage.png', 44, 94, 12, 6);
      this.addImage('images/PlanetImage.svg', 75, 94.5, 10, 5);

      settingsButton.addScript(() => {
          this.state.changeState(new SettingState(this.state, this.redMode));
      });
      weatherButton.addScript(() => {
          this.state.changeState(new WeatherState(this.state, this.redMode));
      });
      planetsButton.addScript(() => {
          this.state.changeState(new PlanetState(this.state, this.redMode));
      });

  }

  exc() {
    for (let i = 0; i < this.objectList.length; i ++)
      this.objectList[i].setRedMode(this.redMode);
  }
  setRedMode(val) {
    this.redMode = val;
    this.exc();
  }
  update() {
    this.script();

    for (let i = 0; i < this.objectList.length; i++)
      this.objectList[i].update();
  }
  script() { }
}
