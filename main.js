var counter = 0;
var state = new StateController();

function update() {
  fill('#000');
  rect(0, 0, width, height);

  //Don't commit!!!
  //state.changeState(new WeatherState());

  state.update();

  mouse.click = false;
  type.click = false;
}
