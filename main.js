var counter = 0;
var state = new StateController();

function update() {
  fill('#000');
  rect(0, 0, width, height);

  state.update();

  mouse.click = false;
  type.click = false;
}
