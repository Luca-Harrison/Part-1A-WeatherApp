var counter = 0;
var state = new StateController();

function update() {
  fill('#000');
  rect(0, 0, width, height);

  //Don't commit!!!
  //state.changeState(new WeatherState());

  if (firstTime()) {
    console.log("Yo")
    state.changeState(new LocationState(this.state, this.redMode));
  }

  state.update()


  if (type.click) {
    console.log(type.cur);
  }

  mouse.click = false;
  type.click = false;
}
