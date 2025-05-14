var counter = 0;
var state = new StateController();

function update() {
  fill('#000');
  rect(0, 0, 250, 500);

  state.update();

  mouse.click = false;
}
